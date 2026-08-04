/**
 * SiteForge pSEO renderer — uses the REAL Website Builder engine
 * (core.render.js + js/designs/*.js), pixel-identical to SaaS output.
 *
 * URL params:
 *   ?id=<uuid>     which client row to load from Supabase
 *   ?theme=<id>    override design (e.g. "premium-luxury"); else row's design_id
 *
 * Flow: fetch row → business_data IS the `biz` object → pick design → buildWebsite() → iframe
 */

window.__PSEO_RENDER__ = true;

// ---- CONFIG ----------------------------------------------------------
const SUPABASE_URL = "https://fnevhniqvchvxwkqzjzg.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZuZXZobmlxdmNodnh3a3F6anpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYyMTgzOTksImV4cCI6MjA5MTc5NDM5OX0.eXJzztRGS6ojjciPW4PPcb3OoKWfRmrlmYAh0RqHwLY";
const TABLE = "websitebuilder_websites_data";

// ---- URL params ------------------------------------------------------
const params = new URLSearchParams(location.search);
const ROW_ID = params.get("id");
const THEME = params.get("theme");

// ---- Mock row for dev/testing ----------------------------------------
const MOCK_ROW = {
  id: "demo-0000",
  design_id: "modern-minimal",
  business_data: {
    name: "ProComfort HVAC", type: "hvac", typeLabel: "HVAC",
    phone: "555-0192", email: "contact@procomforthvac.com", city: "Pune",
    rating: "4.9", address: "12 MG Road", tagline: "Comfort you can count on, all year round.",
    years: "10", reviews: "150", hours: "Mon-Fri 8am-6pm", emergency: "yes",
    team: "8", projects: "1200", fb: "", ig: "", google: "", ga: "", pixel: "", domain: "",
    services: ["AC Installation", "Heating System Repair", "Duct Cleaning", "Emergency Repair"],
    serviceDescriptions: {}
  }
};

// ---- Fetch one row from Supabase -------------------------------------
async function fetchRow(id) {
  if (!id) return null;
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/${TABLE}?id=eq.${encodeURIComponent(id)}&select=id,business_data,services,design_id`,
      { headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}` } }
    );
    if (!res.ok) throw new Error(`Supabase ${res.status}`);
    const rows = await res.json();
    return rows[0] || null;
  } catch (err) {
    console.warn("[pseo] fetch failed, using mock:", err.message);
    return MOCK_ROW;
  }
}

// ---- Normalize business_data into the exact `biz` the engine expects --
function toBiz(row) {
  const b = Object.assign({}, row.business_data || {});
  b.type = b.type || "hvac";
  b.typeLabel = b.typeLabel || b.type.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  b.name = b.name || row.project_name || "Your Business";
  b.services = (b.services && b.services.length ? b.services : row.services) || [];
  b.serviceDescriptions = b.serviceDescriptions || {};
  ["phone","email","city","rating","address","tagline","years","reviews","hours","emergency","team","projects","fb","ig","google","ga","pixel","domain"]
    .forEach(k => { if (b[k] === undefined || b[k] === null) b[k] = ""; });
  if (!b.emergency) b.emergency = "no";
  return b;
}

// ---- Resolve which design to render ----------------------------------
function pickDesign(row) {
  const wanted = THEME || row.design_id || "modern-minimal";
  return DESIGNS.find(d => d.id === wanted) || DESIGNS[0];
}

// ---- Boot ------------------------------------------------------------
(async function () {
  const loading = document.getElementById("loading");
  const notFound = document.getElementById("not-found");
  const frame = document.getElementById("siteFrame");
  const tag = document.getElementById("theme-tag");

  try {
    if (!ROW_ID) throw new Error("no id");
    const row = await fetchRow(ROW_ID);
    if (!row) throw new Error("row not found");

    const biz = toBiz(row);
    const design = pickDesign(row);
    const raw = buildWebsite(biz, design);

    // Tag for CMS editing and inline the editor script (srcdoc iframes can't load external JS)
    const { tagged } = tagHTMLForCMS(raw);

    // Server API base — must point to the VPS, not GitHub Pages
    const SERVER = "https://app.pixnom.com";

    // Build override script: apply saved _cms_overrides to DOM BEFORE the CMS editor reads from DOM
    let overridesScript = "";
    if (biz._cms_overrides) {
      const ov = JSON.stringify(biz._cms_overrides);
      overridesScript =
        '<script>(function(){' +
          'var d=' + ov + ';' +
          'Object.keys(d).forEach(function(k){' +
            'var el=document.querySelector("[data-cms=\\""+k+"\\"]");' +
            'if(el)el.textContent=d[k];' +
            'var img=document.querySelector("[data-cms-img=\\""+k+"\\"]");' +
            'if(img)img.setAttribute("src",d[k]);' +
          '});' +
        '})();</script>';
    }

    // Override publishCMS to save to Supabase via our server (not push content.json to GitHub)
    const uuid = JSON.stringify(ROW_ID);
    const publishOverride =
      '<script>(function(){' +
        'var _orig=window.publishCMS;' +
        'window.publishCMS=function(){' +
          'var data={};' +
          'document.querySelectorAll("[data-cms]").forEach(function(el){data[el.getAttribute("data-cms")]=el.textContent.trim()});' +
          'document.querySelectorAll("[data-cms-img]").forEach(function(el){data[el.getAttribute("data-cms-img")]=el.getAttribute("src")});' +
          'return fetch("' + SERVER + '/website-builder/api/cms/siteforge-publish",{' +
            'method:"POST",headers:{"Content-Type":"application/json"},' +
            'body:JSON.stringify({uuid:' + uuid + ',contentJson:JSON.stringify(data)})' +
          '}).then(function(r){return r.json()}).then(function(d){' +
            'if(!d.success)throw new Error(d.error||"Publish failed");' +
            'return d;' +
          '});' +
        '};' +
      '})();</script>';

    const html = tagged
      .replace('</body>',
        '<script>window.CMS_CONFIG={apiBase:' + JSON.stringify(SERVER) + '}</script>\n' +
        overridesScript + '\n' +
        '<script>' + CMS_EDITOR_SCRIPT + '</script>\n' +
        publishOverride + '\n' +
        '</body>');

    frame.srcdoc = html;
    document.title = biz.name + " — " + design.name;
    if (tag) { tag.textContent = design.name; tag.classList.remove("hidden"); }
    loading.classList.add("hidden");
    frame.classList.remove("hidden");
  } catch (err) {
    console.error("[pseo] failed:", err);
    loading.classList.add("hidden");
    notFound.classList.remove("hidden");
  }
})();
