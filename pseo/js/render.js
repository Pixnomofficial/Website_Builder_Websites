/**
 * pSEO renderer — uses the REAL Website Builder engine (core.render.js +
 * js/designs/*.js), the same one the SaaS builder uses, so the demo sites are
 * pixel-identical to what the builder produces. NO recolored templates.
 *
 * URL knobs:
 *   ?id=<uuid>     which client row to load
 *   ?theme=<id>    which design to render (a real design id, e.g. "premium-luxury")
 *                  if omitted, falls back to the row's own design_id
 *
 * Flow: fetch row → business_data IS the `biz` object the engine expects →
 *       pick design from DESIGNS → buildWebsite(biz, design) → write to iframe.
 */

// Tell core.render.js not to run its builder-only bootstrap.
window.__PSEO_RENDER__ = true;

// ---- CONFIG ----------------------------------------------------------
const DATA_SOURCE = "supabase"; // "supabase" | "json" | "mock"
const SUPABASE_URL = "https://fnevhniqvchvxwkqzjzg.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZuZXZobmlxdmNodnh3a3F6anpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYyMTgzOTksImV4cCI6MjA5MTc5NDM5OX0.eXJzztRGS6ojjciPW4PPcb3OoKWfRmrlmYAh0RqHwLY"; // public anon key ONLY — never the service-role key
const TABLE = "websitebuilder_websites_data";
const JSON_DATA_URL = "data/clients.json";

// ---- URL params ------------------------------------------------------
const params = new URLSearchParams(location.search);
const ROW_ID = params.get("id");
const THEME = params.get("theme"); // a real design id, or null

// ---- Mock row (shape = one table row; business_data = the biz object) --
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

// ---- Fetch one row ---------------------------------------------------
async function fetchRow(id) {
  if (DATA_SOURCE === "mock") return MOCK_ROW;

  if (DATA_SOURCE === "supabase") {
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) { console.warn("[render] supabase not configured — using mock"); return MOCK_ROW; }
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/${TABLE}?id=eq.${encodeURIComponent(id)}&select=id,business_data,services,design_id`,
      { headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}` } }
    );
    if (!res.ok) throw new Error(`Supabase ${res.status}`);
    const rows = await res.json();
    return rows[0] || null;
  }

  // json
  const res = await fetch(JSON_DATA_URL);
  if (!res.ok) throw new Error(`clients.json ${res.status}`);
  const rows = await res.json();
  return rows.find(r => r.id === id) || null;
}

// ---- Normalize business_data into the exact `biz` the engine expects --
function toBiz(row) {
  const b = Object.assign({}, row.business_data || {});
  // Engine requires these — supply safe fallbacks if the row lacks them.
  b.type = b.type || "hvac";
  b.typeLabel = b.typeLabel || (b.type.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()));
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
    if (!ROW_ID && DATA_SOURCE !== "mock") throw new Error("no id");
    const row = await fetchRow(ROW_ID);
    if (!row) throw new Error("row not found");

    const biz = toBiz(row);
    const design = pickDesign(row);
    const html = buildWebsite(biz, design); // the REAL engine

    frame.srcdoc = html;
    document.title = biz.name + " — " + design.name;
    if (tag) { tag.textContent = design.name; tag.classList.remove("hidden"); }
    loading.classList.add("hidden");
    frame.classList.remove("hidden");
  } catch (err) {
    console.error("[render] failed:", err);
    loading.classList.add("hidden");
    notFound.classList.remove("hidden");
  }
})();
