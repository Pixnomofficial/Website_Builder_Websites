
// ==================== IMAGE RESOLVER ====================
function resolveImageUrl(img, params = '') {
  if (!img) return '';
  if (img.startsWith('http://') || img.startsWith('https://')) {
    return img;
  }
  if (img.includes('unsplash.com')) {
    return img;
  }
  return 'https://images.unsplash.com/' + img + params;
}

// ==================== DATA ====================

const DESIGNS = [
  { id: 'modern-minimal', name: 'Modern Minimal', tag: 'Clean · Light · Split hero', cat: 'light', accent: '#0070f3', bg: '#ffffff', text: '#111111', dark: false, layout: 'split-hero' },
  { id: 'modern-dark', name: 'Modern Dark', tag: 'Sleek · Dark · Gradient', cat: 'dark', accent: '#6c63ff', bg: '#0d0d0d', text: '#ffffff', dark: true, layout: 'gradient-hero' },
  { id: 'glassmorphism', name: 'Glassmorphism', tag: 'Glass · Blur · Cards', cat: 'dark', accent: '#a78bfa', bg: '#1a1a2e', text: '#ffffff', dark: true, layout: 'glass-hero' },
  { id: 'premium-luxury', name: 'Premium Luxury', tag: 'Gold · Serif · Centered', cat: 'dark', accent: '#d4af37', bg: '#1a0800', text: '#f5e6c8', dark: true, layout: 'luxury-hero' },
  { id: 'corporate', name: 'Corporate Pro', tag: 'Blue · Trust · Sidebar', cat: 'dark', accent: '#0052cc', bg: '#003366', text: '#ffffff', dark: true, layout: 'corporate-hero' },
  { id: 'classic-elegant', name: 'Classic Elegant', tag: 'Serif · Warm · Editorial', cat: 'light', accent: '#8b7355', bg: '#f8f5f0', text: '#2c2416', dark: false, layout: 'editorial-hero' },
  { id: 'real-estate', name: 'Real Estate', tag: 'Premium · Navy · Fullscreen', cat: 'dark', accent: '#c9a84c', bg: '#0d2137', text: '#ffffff', dark: true, layout: 'fullscreen-hero' },
  { id: 'saas-modern', name: 'SaaS Modern', tag: 'Gradient · Tech · Dashboard', cat: 'dark', accent: '#7c3aed', bg: '#0a0a1a', text: '#e2e8f0', dark: true, layout: 'saas-hero' },
  { id: 'cyberpunk', name: 'Cyberpunk', tag: 'Neon · Monospace · Glitch', cat: 'dark', accent: '#00fff0', bg: '#050505', text: '#00fff0', dark: true, layout: 'cyber-hero' },
  { id: 'neobrutalism', name: 'Neobrutalism', tag: 'Bold · Raw · Chunky', cat: 'bold', accent: '#ff4500', bg: '#fff700', text: '#000000', dark: false, layout: 'brutal-hero' },
  { id: 'neumorphism', name: 'Neumorphism', tag: 'Soft · 3D · Pastel', cat: 'light', accent: '#6c63ff', bg: '#e0e5ec', text: '#333366', dark: false, layout: 'neu-hero' },
  { id: 'retro', name: 'Retro Vintage', tag: 'Orange · Warm · Typewriter', cat: 'dark', accent: '#ff7700', bg: '#1a0a00', text: '#ffd699', dark: true, layout: 'retro-hero' },
  { id: 'ai-startup', name: 'AI Startup', tag: 'Dark · Futuristic · Particle', cat: 'dark', accent: '#00d4ff', bg: '#000510', text: '#c8e8ff', dark: true, layout: 'ai-hero' },
  { id: 'agency', name: 'Agency Creative', tag: 'Purple · Diagonal · Bold', cat: 'dark', accent: '#ff0099', bg: '#0a0a0a', text: '#ffffff', dark: true, layout: 'agency-hero' },
  { id: 'fintech', name: 'Fintech Green', tag: 'Finance · Secure · Stats', cat: 'dark', accent: '#00d4aa', bg: '#001a0d', text: '#e0fff5', dark: true, layout: 'fintech-hero' },
  { id: 'bold-color', name: 'Bold Color', tag: 'Red-Orange · Oversized · Pop', cat: 'bold', accent: '#ffffff', bg: '#ff0055', text: '#ffffff', dark: true, layout: 'bold-hero' },
  { id: 'minimalist-bw', name: 'B&W Minimalist', tag: 'Contrast · Pure · Typography', cat: 'bold', accent: '#000000', bg: '#ffffff', text: '#000000', dark: false, layout: 'bw-hero' },
  { id: 'magazine', name: 'Magazine Editorial', tag: 'Editorial · Serif · Grid', cat: 'light', accent: '#c0392b', bg: '#fff8f0', text: '#1a1a1a', dark: false, layout: 'magazine-hero' },
  { id: 'tech-startup', name: 'Tech Startup', tag: 'Indigo · Animated · Modern', cat: 'dark', accent: '#6366f1', bg: '#050510', text: '#e0e0ff', dark: true, layout: 'tech-hero' },
  { id: 'warm-local', name: 'Warm & Local', tag: 'Brown · Friendly · Handcrafted', cat: 'dark', accent: '#ff8c42', bg: '#2d1500', text: '#ffe0b2', dark: true, layout: 'warm-hero' },
  { id: 'bio-organic', name: 'Bio Organic', tag: 'Green · Natural · Earthy', cat: 'dark', accent: '#7bc67e', bg: '#0a1a00', text: '#d4edda', dark: true, layout: 'organic-hero' },
  { id: 'holographic', name: 'Holographic', tag: 'Prism · Chrome · Iridescent', cat: 'dark', accent: '#e040fb', bg: '#0d0d2e', text: '#f0e0ff', dark: true, layout: 'holo-hero' },
  { id: 'portfolio', name: 'Portfolio Dark', tag: 'Minimal · Black · Showcase', cat: 'dark', accent: '#f5c518', bg: '#0a0a0a', text: '#ffffff', dark: true, layout: 'portfolio-hero' },
  { id: 'sports', name: 'Sports Energy', tag: 'Green · Dynamic · Action', cat: 'dark', accent: '#39ff14', bg: '#0d1a0d', text: '#e0ffe0', dark: true, layout: 'sports-hero' },
  { id: 'medical', name: 'Medical Clean', tag: 'Blue · Clinical · Trust', cat: 'light', accent: '#0071bc', bg: '#f0f8ff', text: '#1a2a3a', dark: false, layout: 'medical-hero' },
  { id: 'restaurant-dark', name: 'Restaurant Dark', tag: 'Amber · Appetizing · Menu', cat: 'dark', accent: '#e8a838', bg: '#1a0800', text: '#fff3e0', dark: true, layout: 'restaurant-hero' },
  { id: 'wedding', name: 'Wedding Soft', tag: 'Rose · Romantic · Floral', cat: 'light', accent: '#e91e63', bg: '#fff5f8', text: '#3a1a2a', dark: false, layout: 'wedding-hero' },
  { id: 'law', name: 'Law Firm', tag: 'Gold · Authority · Classical', cat: 'dark', accent: '#b8960c', bg: '#0d0d00', text: '#f5f0dc', dark: true, layout: 'law-hero' },
  { id: 'education', name: 'Education Bright', tag: 'Yellow · Friendly · Playful', cat: 'light', accent: '#ff9800', bg: '#fff5e6', text: '#2a1a00', dark: false, layout: 'edu-hero' },
  { id: 'automotive', name: 'Automotive Dark', tag: 'Red · Power · Speed', cat: 'dark', accent: '#ff3d00', bg: '#050505', text: '#f0f0f0', dark: true, layout: 'auto-hero' },
];

const SERVICES_MAP = {
  hvac: ['AC Installation', 'AC Repair & Tune-Up', 'Heating System Repair', 'Furnace Installation', 'Duct Cleaning', 'Air Quality Testing', 'Thermostat Installation', 'Commercial HVAC', 'Emergency Repair', 'Annual Maintenance', 'Ventilation Systems', 'Heat Pump Service'],
  roofing: ['Roof Installation', 'Roof Repair', 'Roof Replacement', 'Waterproofing', 'Gutter Cleaning', 'Roof Inspection', 'Tile & Shingle Repair', 'Skylight Installation', 'Commercial Roofing', 'Emergency Tarping', 'Roof Coating', 'Storm Damage Repair'],
  plumbing: ['Pipe Installation', 'Drain Cleaning', 'Water Heater Service', 'Leak Detection & Repair', 'Bathroom Plumbing', 'Toilet Repair', 'Sewer Line Repair', 'Pump Installation', 'Kitchen Plumbing', 'Emergency Repair', 'Repiping', 'Water Filtration'],
  'property-management': ['Tenant Screening', 'Rent Collection', 'Property Inspections', 'Maintenance Coordination', 'Lease Management', 'Eviction Services', 'Financial Reporting', 'Vacancy Marketing', '24/7 Emergency Line', 'HOA Management', 'Move-In/Out Service', 'Owner Portal'],
  'real-estate-investors': ['Investment Analysis', 'Property Acquisition', 'Portfolio Management', 'Fix & Flip Support', 'Rental Property Analysis', 'Market Research', 'ROI Consulting', '1031 Exchange Help', 'Multi-Family Investing', 'Commercial Acquisitions', 'Off-Market Deals', 'Exit Strategy Planning'],
  'real-estate-developers': ['Land Acquisition', 'Site Planning', 'Entitlement Services', 'Custom Development', 'Mixed-Use Projects', 'Residential Development', 'Commercial Development', 'Feasibility Studies', 'Project Management', 'Community Planning', 'Zoning Consultation', 'Construction Oversight'],
  'water-fire-restoration': ['Water Damage Restoration', 'Fire Damage Restoration', 'Smoke Odor Removal', 'Mold Remediation', 'Emergency Board-Up', 'Content Pack-Out', 'Structural Drying', 'Insurance Claims Help', 'Sewage Cleanup', 'Storm Damage Repair', 'Air Quality Testing', 'Complete Reconstruction'],
  electrician: ['Electrical Panel Upgrade', 'Wiring & Rewiring', 'Outlet Installation', 'EV Charger Installation', 'Generator Installation', 'Lighting Design', 'GFCI & AFCI Installation', 'Surge Protection', 'Ceiling Fan Installation', 'Home Automation', 'Emergency Electrical', 'Commercial Wiring'],
  landscaping: ['Landscape Design', 'Lawn Mowing & Edging', 'Tree & Shrub Trimming', 'Irrigation Installation', 'Sod & Seed Installation', 'Hardscaping', 'Seasonal Cleanup', 'Fertilization & Weed Control', 'Mulching', 'Outdoor Lighting', 'Retaining Walls', 'Snow Removal'],
  'garage-door': ['Garage Door Installation', 'Spring Replacement', 'Cable Repair', 'Opener Installation', 'Panel Replacement', 'Garage Door Tune-Up', 'Emergency Repair', 'Smart Opener Upgrade', 'Commercial Doors', 'Weatherstripping', 'Safety Inspection', 'Custom Doors'],
  'pest-control': ['General Pest Control', 'Termite Treatment', 'Rodent Control', 'Bed Bug Treatment', 'Mosquito Control', 'Ant Extermination', 'Cockroach Treatment', 'Wasp & Bee Removal', 'Wildlife Removal', 'Fumigation', 'Preventative Maintenance', 'Commercial Pest Control'],
  'general-contractors': ['Home Renovation', 'Room Additions', 'Kitchen Remodeling', 'Bathroom Remodeling', 'Basement Finishing', 'Commercial Build-Out', 'Structural Repairs', 'Project Management', 'Custom Carpentry', 'Drywall & Framing', 'Permit Acquisition', 'Design-Build Services'],
  'home-builders': ['Custom Home Building', 'Spec Home Construction', 'Semi-Custom Homes', 'Green Building', 'Luxury Home Construction', 'Floor Plan Design', 'Land Evaluation', 'Material Selection', 'Structural Engineering', 'Interior Design', 'Smart Home Integration', 'Warranty & After-Care'],
  'solar-installers': ['Solar Panel Installation', 'Battery Storage Systems', 'EV Charger Integration', 'Solar Roof Assessment', 'Net Metering Setup', 'Commercial Solar', 'Off-Grid Systems', 'Solar Monitoring', 'System Maintenance', 'Tax Credit Consultation', 'System Upgrades', 'Energy Audits'],
  flooring: ['Hardwood Installation', 'Laminate Flooring', 'Luxury Vinyl Plank', 'Tile Installation', 'Carpet Installation', 'Floor Refinishing', 'Subfloor Repair', 'Stair Flooring', 'Commercial Flooring', 'Floor Removal', 'Custom Inlays', 'Waterproof Flooring'],
  'tree-service': ['Tree Removal', 'Tree Trimming & Pruning', 'Stump Grinding', 'Emergency Tree Service', 'Tree Health Assessment', 'Land Clearing', 'Tree Planting', 'Deadwood Removal', 'Cable & Bracing', 'Root Management', 'Storm Cleanup', 'Commercial Tree Care'],
  concrete: ['Driveway Installation', 'Concrete Patio', 'Foundation Repair', 'Sidewalk Installation', 'Concrete Resurfacing', 'Decorative Concrete', 'Retaining Walls', 'Stamped Concrete', 'Commercial Flatwork', 'Concrete Removal', 'Parking Lots', 'Structural Concrete'],
  fence: ['Wood Fence Installation', 'Vinyl Fence Installation', 'Chain-Link Fence', 'Aluminum Fencing', 'Farm & Ranch Fence', 'Privacy Fence', 'Pool Fence', 'Fence Repair', 'Gate Installation', 'Automatic Gate Systems', 'Commercial Fencing', 'Fence Staining & Sealing'],
  moving: ['Local Moving', 'Long-Distance Moving', 'Packing Services', 'Furniture Assembly', 'Storage Solutions', 'Commercial Moving', 'Piano Moving', 'Senior Moving', 'Same-Day Moving', 'Junk Removal Add-On', 'Moving Supplies', 'White Glove Service'],
  painters: ['Interior Painting', 'Exterior Painting', 'Cabinet Painting', 'Deck & Fence Staining', 'Pressure Washing Prep', 'Wallpaper Removal', 'Color Consultation', 'Commercial Painting', 'Epoxy Flooring', 'Drywall Repair', 'Trim & Molding', 'Specialty Finishes'],
  'appliance-repair': ['Washer & Dryer Repair', 'Refrigerator Repair', 'Dishwasher Repair', 'Oven & Range Repair', 'Microwave Repair', 'Garbage Disposal', 'Ice Maker Repair', 'HVAC Appliances', 'Same-Day Service', 'Appliance Installation', 'Warranty Repairs', 'Commercial Appliances'],
  handyman: ['General Repairs', 'Furniture Assembly', 'TV Mounting', 'Door & Window Repair', 'Drywall Patching', 'Tile Repair', 'Plumbing Fixes', 'Electrical Fixes', 'Weatherproofing', 'Deck Maintenance', 'Painting Touch-Ups', 'Gutter Cleaning'],
  'window-door': ['Window Replacement', 'Door Installation', 'Sliding Glass Doors', 'Entry Door Upgrade', 'Window Repair', 'Storm Windows', 'Skylight Installation', 'French Doors', 'Window Tinting', 'Energy-Efficient Windows', 'Custom Orders', 'Commercial Windows'],
  siding: ['Vinyl Siding', 'Fiber Cement Siding', 'Wood Siding', 'Metal Siding', 'Siding Repair', 'Siding Replacement', 'Trim & Fascia', 'Soffit Installation', 'Insulated Siding', 'Storm Damage Repair', 'Color Consultation', 'Commercial Siding'],
  'kitchen-bath-remodeling': ['Kitchen Remodeling', 'Bathroom Remodeling', 'Cabinet Installation', 'Countertop Installation', 'Tile Work', 'Plumbing Upgrades', 'Lighting Design', 'Custom Storage', 'Walk-In Shower', 'Tub Replacement', 'Vanity Installation', 'Full Gut Renovation'],
  'junk-removal': ['Full Property Cleanout', 'Furniture Removal', 'Appliance Hauling', 'Construction Debris', 'Yard Waste Removal', 'Storage Unit Cleanout', 'Donation Drop-Off', 'Hoarding Cleanout', 'Same-Day Service', 'Office Cleanout', 'Electronic Recycling', 'Dumpster Rental'],
  'pressure-washing': ['House Washing', 'Driveway Cleaning', 'Deck & Patio Cleaning', 'Roof Soft Washing', 'Fence Washing', 'Gutter Brightening', 'Commercial Pressure Washing', 'Graffiti Removal', 'Fleet Washing', 'Concrete Cleaning', 'Paver Restoration', 'Window Cleaning'],
  gutter: ['Gutter Installation', 'Gutter Cleaning', 'Gutter Guards', 'Downspout Repair', 'Seamless Gutters', 'Gutter Replacement', 'Fascia Board Repair', 'Copper Gutters', 'Commercial Gutters', 'Storm Damage Repair', 'Annual Maintenance Plan', 'Underground Drains'],
  chimney: ['Chimney Sweep', 'Chimney Inspection', 'Chimney Cap Installation', 'Damper Repair', 'Chimney Relining', 'Masonry Repair', 'Firebox Restoration', 'Creosote Removal', 'Carbon Monoxide Testing', 'Waterproofing', 'Chimney Rebuilding', 'Gas Fireplace Service'],
  'drain-cleaning': ['Clogged Drain Clearing', 'Hydro Jetting', 'Sewer Camera Inspection', 'Tree Root Removal', 'Grease Trap Cleaning', 'Floor Drain Cleaning', 'Main Line Cleaning', 'Slow Drain Treatment', 'Emergency Service', 'Septic Pumping', 'Drain Snaking', 'Odor Elimination'],
  irrigation: ['Sprinkler Installation', 'Drip Irrigation', 'System Repair', 'Backflow Testing', 'Smart Controller Upgrade', 'Seasonal Startup & Shutdown', 'Zone Additions', 'Leak Detection', 'Water-Efficient Design', 'Commercial Irrigation', 'Landscape Drainage', 'Rain Sensor Installation'],
  'deck-patio': ['Wood Deck Building', 'Composite Deck', 'Concrete Patio', 'Paver Patio', 'Screen Enclosures', 'Pergola Construction', 'Outdoor Kitchen', 'Deck Repair & Refinishing', 'Pool Deck', 'Multi-Level Decks', 'Railing Systems', 'Built-In Seating'],
  insulation: ['Attic Insulation', 'Wall Insulation', 'Spray Foam Insulation', 'Blown-In Insulation', 'Crawl Space Insulation', 'Basement Insulation', 'Sound Insulation', 'Commercial Insulation', 'Energy Audits', 'Insulation Removal', 'Vapor Barriers', 'Fire-Rated Insulation'],
  waterproofing: ['Basement Waterproofing', 'Foundation Crack Repair', 'Interior Drainage Systems', 'Sump Pump Installation', 'Exterior Waterproofing', 'Crawl Space Encapsulation', 'Window Well Drains', 'Mold Prevention', 'French Drain Installation', 'Concrete Sealing', 'Retaining Wall Waterproofing', 'Commercial Waterproofing'],
  'glass-repair': ['Window Glass Repair', 'Windshield Repair', 'Shower Door Installation', 'Mirror Installation', 'Glass Table Tops', 'Commercial Storefront Glass', 'Tempered Glass', 'Frameless Shower Enclosures', 'Insulated Glass Units', 'Emergency Board-Up', 'Skylight Glass', 'Custom Glass Work'],
  'commercial-cleaning': ['Office Cleaning', 'Floor Stripping & Waxing', 'Carpet Cleaning', 'Window Cleaning', 'Restroom Sanitizing', 'Breakroom Cleaning', 'Post-Construction Cleanup', 'Medical Facility Cleaning', 'Warehouse Cleaning', 'Green Cleaning', 'Day Porter Service', 'Disinfection Services'],
  // legacy entries kept
  electrician_legacy: ['Wiring & Rewiring', 'Panel Upgrade', 'Switch & Socket', 'CCTV Installation', 'AC Fitting', 'Fan Installation', 'Emergency Repair', 'Short Circuit Fix', 'Home Automation', 'LED Lighting', 'Generator Service', 'Earthing Work'],
  plumber: ['Pipe Fitting', 'Drain Cleaning', 'Water Heater', 'Leak Repair', 'Bathroom Fitting', 'Toilet Repair', 'Tank Cleaning', 'Pump Installation', 'Kitchen Plumbing', 'Emergency Repair'],
  dentist: ['Dental Checkup', 'Teeth Cleaning', 'Cavity Filling', 'Root Canal', 'Teeth Whitening', 'Braces & Aligners', 'Tooth Extraction', 'Dental Implant', 'Crown & Bridge', 'Smile Makeover', 'Pediatric Dentistry', 'Emergency Dental Care'],
  doctor: ['General Consultation', 'Full Body Checkup', 'Blood Test', 'Vaccination', 'ECG & Echo', 'Diabetes Care', 'Blood Pressure', 'Thyroid Test', 'Child Care', 'Nutrition Advice'],
  lawyer: ['Civil Cases', 'Criminal Defense', 'Family Law', 'Property Disputes', 'Divorce Proceedings', 'Contract Drafting', 'Business Law', 'Legal Documentation', 'Court Representation', 'Legal Consultation'],
  restaurant: ['Dine-In Service', 'Home Delivery', 'Catering', 'Private Parties', 'Corporate Lunch', 'Sunday Brunch', 'Wedding Catering', 'Takeaway Orders', 'Outdoor Seating', 'Chef\'s Special'],
  gym: ['Personal Training', 'Weight Loss Program', 'Muscle Building', 'Cardio Classes', 'Yoga & Meditation', 'Zumba', 'CrossFit', 'Nutrition Coaching', 'Group Classes', 'Kickboxing'],
  spa: ['Body Massage', 'Facial Treatment', 'Hair Spa', 'Manicure & Pedicure', 'Steam Bath', 'Aromatherapy', 'De-stress Package', 'Bridal Package', 'Couple Spa', 'Hot Stone Therapy'],
  'car-repair': ['Engine Repair', 'AC Service', 'Denting & Painting', 'Tyre Change', 'Battery Replacement', 'Oil Change', 'Brake Service', 'Electrical Repair', 'Car Wash', 'Annual Maintenance'],
  roofing_legacy: ['Roof Installation', 'Roof Repair', 'Waterproofing', 'Gutter Cleaning', 'Roof Inspection', 'Tile Replacement', 'Skylight Installation', 'Commercial Roofing', 'Emergency Repair', 'Roof Coating'],
  hvac_legacy: ['AC Installation', 'AC Repair', 'AC Service & Gas', 'Duct Cleaning', 'Heating Repair', 'Ventilation', 'Commercial HVAC', 'Emergency Repair', 'Annual Maintenance', 'Air Quality Check'],
  cleaning: ['Home Deep Clean', 'Office Cleaning', 'Sofa Cleaning', 'Carpet Shampoo', 'Kitchen Cleaning', 'Bathroom Sanitize', 'Post-Construction', 'Window Cleaning', 'Move-in/out Clean', 'Pest Control'],
  landscaping_legacy: ['Garden Design', 'Lawn Mowing', 'Tree Trimming', 'Irrigation Setup', 'Flower Planting', 'Hardscaping', 'Seasonal Cleanup', 'Fertilization', 'Pest Treatment', 'Outdoor Lighting'],
  photographer: ['Wedding Photography', 'Portrait Studio', 'Corporate Events', 'Product Photography', 'Real Estate Shoots', 'Baby Photography', 'Family Portraits', 'Fashion Shoots', 'Videography', 'Photo Editing'],
  'travel-agency': ['Holiday Packages', 'Flight Booking', 'Hotel Booking', 'Visa Assistance', 'Honeymoon Tour', 'Group Travel', 'Corporate Travel', 'Cruise Packages', 'Adventure Tours', 'Customized Trips'],
  'real-estate': ['Buy Property', 'Sell Property', 'Rent & Lease', 'Property Valuation', 'Legal Documentation', 'Home Loan Help', 'NRI Services', 'Commercial Property', 'Plot & Land', 'Interior Design'],
};

const REVIEWS_MAP = {
  hvac: [
    { name: 'James Carter', text: 'ProComfort had my AC running perfectly within 2 hours. The tech was knowledgeable, clean, and explained everything clearly. Best HVAC company I\'ve used.', stars: 5, date: '1 week ago' },
    { name: 'Linda Hoffman', text: 'Our furnace went out on the coldest night of the year. They were at our door in 45 minutes. Truly a lifesaver — highly recommend for emergency service.', stars: 5, date: '2 weeks ago' },
    { name: 'Marcus Webb', text: 'Annual maintenance plan is totally worth it. They catch small issues before they become expensive repairs. Very professional crew.', stars: 5, date: '1 month ago' },
    { name: 'Angela Torres', text: 'Great experience from scheduling to completion. The duct cleaning made a noticeable difference in our air quality. Will definitely use again.', stars: 4, date: '1 month ago' },
    { name: 'Steve Nguyen', text: 'Installed a new heat pump system — they did a fantastic job. Clean install, explained the thermostat settings, and followed up the next day.', stars: 5, date: '2 months ago' },
    { name: 'Donna Price', text: 'Fair pricing, no hidden fees, and the technician was extremely thorough. This is the only HVAC company I trust with my home.', stars: 5, date: '2 months ago' },
  ],
  roofing: [
    { name: 'Tom Bradley', text: 'Replaced our entire roof after storm damage. Crew was professional, fast, and cleaned up perfectly. New roof looks amazing.', stars: 5, date: '1 week ago' },
    { name: 'Karen Mills', text: 'Roof inspection found issues we didn\'t know about. They documented everything for our insurance claim and handled repairs flawlessly.', stars: 5, date: '3 weeks ago' },
    { name: 'David Chen', text: 'Great experience with the commercial roofing project. On schedule, on budget, and excellent quality. Would absolutely hire again.', stars: 5, date: '1 month ago' },
    { name: 'Sandra Lee', text: 'The waterproofing job they did has completely solved our leak problem. Quality materials and honest pricing.', stars: 4, date: '6 weeks ago' },
    { name: 'Mike Johnson', text: 'Quick response for emergency tarping after a major storm. Saved us from a lot of interior damage. Thank you!', stars: 5, date: '2 months ago' },
    { name: 'Patricia Ford', text: 'Replaced gutters and did roof repair — both jobs done professionally and efficiently. Our home looks brand new.', stars: 4, date: '2 months ago' },
  ],
  plumbing: [
    { name: 'Robert Hill', text: 'Fixed a major slab leak quickly and without destroying half our floor. Incredibly skilled team — couldn\'t be happier with the result.', stars: 5, date: '1 week ago' },
    { name: 'Susan Clark', text: 'Replaced all old pipes in our 1960s home. Excellent work, clean and minimal disruption. Water pressure is incredible now.', stars: 5, date: '2 weeks ago' },
    { name: 'Gary Watson', text: 'Called for an emergency water heater replacement at 10pm. They came out quickly, installed a new one, and were very professional.', stars: 5, date: '1 month ago' },
    { name: 'Lisa Martinez', text: 'Prompt, courteous, and honest about pricing. Fixed a slow drain and checked all our pipes. Great value for quality service.', stars: 4, date: '1 month ago' },
    { name: 'Daniel Kim', text: 'Installed a full bathroom plumbing system during our renovation. Excellent workmanship, passed all inspections first time.', stars: 5, date: '2 months ago' },
    { name: 'Nancy Brown', text: 'Found and fixed a hidden leak that two other plumbers missed. These guys are true professionals with the right diagnostic tools.', stars: 5, date: '2 months ago' },
  ],
  'property-management': [
    { name: 'Henry Lewis', text: 'My rental income is up 15% since switching to their management. Tenant screening is thorough and maintenance response is excellent.', stars: 5, date: '1 week ago' },
    { name: 'Christine Young', text: 'They handled a difficult eviction professionally and legally. Communication throughout the process was outstanding.', stars: 5, date: '3 weeks ago' },
    { name: 'Frank Davis', text: 'Owner portal gives real-time financial reporting. I know exactly what\'s happening with my properties at all times. Very impressive.', stars: 5, date: '1 month ago' },
    { name: 'Judith Wilson', text: 'Switched from self-managing 5 units — best decision I ever made. Vacancy rates dropped and quality of tenants improved dramatically.', stars: 4, date: '5 weeks ago' },
    { name: 'Alan Moore', text: 'They treat our properties like their own. Maintenance coordination is seamless and their contractor network gets things done fast.', stars: 5, date: '2 months ago' },
    { name: 'Cynthia Hall', text: 'Transparent fees, excellent communication, and they actually understand local rental market dynamics. Truly a partner, not just a vendor.', stars: 5, date: '2 months ago' },
  ],
  'real-estate-investors': [
    { name: 'Brian Scott', text: 'Found us two off-market deals this year that cash-flow beautifully. Their market knowledge is unmatched in this area.', stars: 5, date: '2 weeks ago' },
    { name: 'Michelle Adams', text: 'Helped me structure my first 1031 exchange flawlessly. The tax savings were substantial and the whole process was smooth.', stars: 5, date: '1 month ago' },
    { name: 'Christopher Baker', text: 'Their ROI analysis on a multi-family property was spot-on. Exactly the level of detail I needed to make a confident decision.', stars: 5, date: '1 month ago' },
    { name: 'Amy Nelson', text: 'Built a portfolio of 8 rentals with their guidance over 3 years. Strategic, patient, and genuinely invested in client success.', stars: 4, date: '6 weeks ago' },
    { name: 'Kevin Turner', text: 'Fast access to off-market listings and excellent connections with lenders. They made my fix-and-flip project very profitable.', stars: 5, date: '2 months ago' },
    { name: 'Rebecca White', text: 'Incredibly knowledgeable about local markets. Their exit strategy advice alone saved me six figures on a commercial acquisition.', stars: 5, date: '3 months ago' },
  ],
  'real-estate-developers': [
    { name: 'Jonathan Reed', text: 'Their team guided our mixed-use development from concept to completion. Zoning expertise and project management were exceptional.', stars: 5, date: '3 weeks ago' },
    { name: 'Margaret Evans', text: 'The feasibility study they provided was thorough and accurate. Our project came in under budget thanks to their planning.', stars: 5, date: '1 month ago' },
    { name: 'Charles King', text: 'Outstanding community planning work on our 42-unit residential development. On time, on budget, and beautifully executed.', stars: 5, date: '2 months ago' },
    { name: 'Dorothy Harris', text: 'Land acquisition expertise is remarkable. They identified a site we never would have found and navigated entitlement smoothly.', stars: 4, date: '2 months ago' },
    { name: 'Howard Wright', text: 'Their construction oversight caught three major contractor issues before they became expensive problems. Invaluable service.', stars: 5, date: '3 months ago' },
    { name: 'Marilyn Collins', text: 'Partnered with them on two commercial developments. Professional, transparent, and they deliver exactly what they promise.', stars: 5, date: '3 months ago' },
  ],
  'water-fire-restoration': [
    { name: 'Timothy Walker', text: 'Basement flooded overnight — they arrived within the hour, extracted everything, and started drying immediately. Saved so much of our property.', stars: 5, date: '1 week ago' },
    { name: 'Carol Green', text: 'Fire damage to our kitchen was devastating. Their team was compassionate, efficient, and handled all insurance paperwork. Outstanding.', stars: 5, date: '2 weeks ago' },
    { name: 'Raymond Allen', text: 'Mold remediation done thoroughly and professionally. Air quality testing confirmed complete clearance. I feel safe in my home again.', stars: 5, date: '1 month ago' },
    { name: 'Brenda Scott', text: 'The pack-out service was handled with incredible care. Everything returned in perfect condition after the restoration was complete.', stars: 4, date: '5 weeks ago' },
    { name: 'Jerry Patterson', text: 'Smoke odor removal was completely successful — you\'d never know there was a fire. Fast, thorough, and very professional team.', stars: 5, date: '2 months ago' },
    { name: 'Virginia Campbell', text: 'Outstanding communication throughout a very stressful ordeal. They worked with our insurer seamlessly and restored our home beautifully.', stars: 5, date: '2 months ago' },
  ],
  electrician: [
    { name: 'Rahul Sharma', text: 'Fixed my entire home wiring in just 3 hours. Very professional and punctual. EV charger installation was also done perfectly.', stars: 5, date: '2 weeks ago' },
    { name: 'Jennifer Walsh', text: 'Called them for emergency electrical failure at midnight — they came within 30 minutes. Truly reliable when it counts most!', stars: 5, date: '1 month ago' },
    { name: 'Mark Reynolds', text: 'Best electrician in town. Did panel upgrade and whole-home surge protection. Reasonable pricing and excellent workmanship.', stars: 4, date: '1 month ago' },
    { name: 'Sarah Mitchell', text: 'The team was courteous, wore shoe covers, and cleaned up perfectly after the work. Generator installation was flawless.', stars: 5, date: '2 months ago' },
    { name: 'Bill Harrington', text: 'Quick response for a tripping breaker issue. Found a dangerous wiring fault I didn\'t know about. Potentially saved our home.', stars: 5, date: '2 months ago' },
    { name: 'Emily Dawson', text: 'Home automation and smart lighting setup done perfectly. Everything works flawlessly through the app. Very happy customer.', stars: 4, date: '3 months ago' },
  ],
  landscaping: [
    { name: 'George Sullivan', text: 'Completely transformed our backyard with a beautiful patio, plantings, and outdoor lighting. It\'s like a resort back there now.', stars: 5, date: '1 week ago' },
    { name: 'Rachel Foster', text: 'Monthly maintenance keeps our lawn looking pristine. Crew is always on time, thorough, and respectful of our property.', stars: 5, date: '3 weeks ago' },
    { name: 'Paul Henderson', text: 'Irrigation system installation was professional and water-efficient. Our water bill dropped significantly. Excellent value.', stars: 5, date: '1 month ago' },
    { name: 'Diane Cooper', text: 'Seasonal cleanup and mulching done beautifully. They pay attention to every detail and our curb appeal is incredible.', stars: 4, date: '5 weeks ago' },
    { name: 'Arthur Barnes', text: 'Designed and installed a stunning retaining wall and hillside plantings. The craftsmanship is exceptional.', stars: 5, date: '2 months ago' },
    { name: 'Helen Price', text: 'Tree trimming and fertilization program has our landscaping healthier than ever. Professional team with great knowledge.', stars: 5, date: '2 months ago' },
  ],
  'garage-door': [
    { name: 'Rick Simmons', text: 'Spring snapped on a Sunday morning — they were there within 2 hours. Fast, affordable, and professional. Fantastic service.', stars: 5, date: '4 days ago' },
    { name: 'Denise Murphy', text: 'Upgraded to a smart opener — installation was seamless and the tech walked me through the app setup perfectly.', stars: 5, date: '2 weeks ago' },
    { name: 'Craig Bell', text: 'New garage door installation looks incredible. Improved our home\'s curb appeal dramatically. Quality materials and clean install.', stars: 5, date: '1 month ago' },
    { name: 'Laura Rivera', text: 'Panel replacement and cable repair done quickly and at a very reasonable price. Would definitely call them again.', stars: 4, date: '5 weeks ago' },
    { name: 'Nathan Cook', text: 'Annual tune-up caught worn rollers and loose hardware. Now the door is quieter than it\'s ever been. Great preventative service.', stars: 5, date: '2 months ago' },
    { name: 'Melissa Barnes', text: 'Very professional from initial call to job completion. They carry quality parts and stand behind their work completely.', stars: 5, date: '2 months ago' },
  ],
  'pest-control': [
    { name: 'Harold Edwards', text: 'Termite treatment was thorough and the monitoring system gives us real peace of mind. Haven\'t seen a single termite since.', stars: 5, date: '1 week ago' },
    { name: 'Shirley Morgan', text: 'Bed bug issue resolved completely after two treatments. They were discreet, professional, and genuinely caring throughout.', stars: 5, date: '3 weeks ago' },
    { name: 'Wayne Peterson', text: 'Mosquito control program has made our backyard enjoyable again all summer long. Worth every penny.', stars: 5, date: '1 month ago' },
    { name: 'Frances Howard', text: 'Rodent problem eliminated quickly and humanely. They also sealed all entry points to prevent future issues. Excellent work.', stars: 4, date: '5 weeks ago' },
    { name: 'Eugene Butler', text: 'Quarterly maintenance program keeps bugs completely out of our home. Highly recommend the preventative plan.', stars: 5, date: '2 months ago' },
    { name: 'Wanda Flores', text: 'Very knowledgeable and used pet-safe products throughout. They took extra precautions with our dogs. Great team!', stars: 5, date: '2 months ago' },
  ],
  'general-contractors': [
    { name: 'Douglas Stewart', text: 'Complete kitchen and bathroom renovation done on time and under budget. Project management was excellent throughout.', stars: 5, date: '1 week ago' },
    { name: 'Alice Sanchez', text: 'Room addition doubled our living space seamlessly. Structural work was excellent and it perfectly matches the existing home.', stars: 5, date: '3 weeks ago' },
    { name: 'Roy Morris', text: 'Basement finishing project was exceptional. They handled permits, inspections, everything. We use it as a full living suite now.', stars: 5, date: '1 month ago' },
    { name: 'Gloria Rogers', text: 'Commercial build-out completed on schedule which kept us on track for our business opening. Professional and reliable.', stars: 4, date: '5 weeks ago' },
    { name: 'Harold Reed', text: 'They brought in great subcontractors and coordinated everything perfectly. Transparent communication from day one.', stars: 5, date: '2 months ago' },
    { name: 'Edna Cook', text: 'Custom carpentry work throughout our home is beautiful. These are true craftsmen who take pride in their work.', stars: 5, date: '3 months ago' },
  ],
  'home-builders': [
    { name: 'Lawrence Baker', text: 'Built our dream home and it exceeded every expectation. The design-build process was smooth and the finishes are spectacular.', stars: 5, date: '2 weeks ago' },
    { name: 'Phyllis Carter', text: 'As first-time custom home clients, they guided us through every decision patiently. The result is stunning — we love our home.', stars: 5, date: '1 month ago' },
    { name: 'Stanley Morris', text: 'Green building certification achieved exactly as promised. Energy bills are remarkably low and the quality is outstanding.', stars: 5, date: '1 month ago' },
    { name: 'Mildred Ward', text: 'Smart home integration is phenomenal. Every system was installed and programmed to work together perfectly.', stars: 4, date: '2 months ago' },
    { name: 'Bernard Bailey', text: 'Third home we\'ve built with this company. They consistently deliver luxury quality on schedule. Truly the best builder in the area.', stars: 5, date: '2 months ago' },
    { name: 'Rose Bell', text: 'Warranty service after move-in has been prompt and professional. They stand behind their work long after closing.', stars: 5, date: '3 months ago' },
  ],
  'solar-installers': [
    { name: 'Albert Torres', text: 'Solar system has eliminated 95% of our electric bill. Installation was clean and professional. ROI is ahead of projections.', stars: 5, date: '1 week ago' },
    { name: 'Bessie Rivera', text: 'Battery storage system means we keep power during outages. Excellent installation and the monitoring app is very helpful.', stars: 5, date: '3 weeks ago' },
    { name: 'Clarence Jenkins', text: 'They handled all permits and utility interconnection paperwork. Stress-free experience from assessment to final approval.', stars: 5, date: '1 month ago' },
    { name: 'Dolores Ramirez', text: 'Tax credit consultation alone saved us thousands. Very knowledgeable team and honest about realistic savings projections.', stars: 4, date: '5 weeks ago' },
    { name: 'Edward Mitchell', text: 'EV charger installation done alongside the solar system. Everything integrated perfectly and looks very clean.', stars: 5, date: '2 months ago' },
    { name: 'Florence Robinson', text: 'Commercial solar installation for our warehouse has been outstanding. Energy costs down 70% — exceptional investment.', stars: 5, date: '2 months ago' },
  ],
  flooring: [
    { name: 'Clarence Sullivan', text: 'Hardwood floors installed throughout our home are absolutely gorgeous. Craftsmanship is exceptional and they were very clean.', stars: 5, date: '1 week ago' },
    { name: 'Irene Brooks', text: 'Refinished our 40-year-old floors and they look better than new. Completely transformed the look of our entire home.', stars: 5, date: '2 weeks ago' },
    { name: 'Gilbert Parker', text: 'LVP installation in our rental units was done quickly, looks great, and the tenants love it. Very efficient team.', stars: 5, date: '1 month ago' },
    { name: 'Lois Stewart', text: 'Tile work in our kitchen and bathrooms is beautiful. The attention to detail on patterns and grout lines is outstanding.', stars: 4, date: '5 weeks ago' },
    { name: 'Chester Bennett', text: 'Subfloor repair done before carpet installation — they found and fixed issues other flooring companies ignored. Very honest.', stars: 5, date: '2 months ago' },
    { name: 'Viola Wood', text: 'Custom stair flooring installation was tricky but they handled it perfectly. Our staircase is now the centerpiece of our home.', stars: 5, date: '2 months ago' },
  ],
  'tree-service': [
    { name: 'Reginald Powell', text: 'Removed a massive oak threatening our house safely and completely. Stump grinding left no trace. Professional crew throughout.', stars: 5, date: '3 days ago' },
    { name: 'Harriet Coleman', text: 'Emergency service after storm damage — arrived in 2 hours and cleared everything safely. Our yard is beautiful again.', stars: 5, date: '2 weeks ago' },
    { name: 'Vernon Hayes', text: 'Tree health assessment saved three trees the previous company said needed removal. Knowledgeable arborists who really care.', stars: 5, date: '1 month ago' },
    { name: 'Mamie Graham', text: 'Annual pruning program keeps our mature oaks healthy and beautiful. The crew is efficient and always leaves the yard spotless.', stars: 4, date: '5 weeks ago' },
    { name: 'Wallace Myers', text: 'Land clearing for our new build was done quickly and at great price. Exceeded expectations on both speed and cleanliness.', stars: 5, date: '2 months ago' },
    { name: 'Jessie Webb', text: 'Cable and bracing work on our historic elm tree was done with obvious expertise. It\'s stable and healthy after many years of concern.', stars: 5, date: '2 months ago' },
  ],
  concrete: [
    { name: 'Milton Long', text: 'New driveway is beautiful and perfectly installed. No cracking after two winters and it still looks brand new.', stars: 5, date: '1 week ago' },
    { name: 'Evelyn Kelly', text: 'Stamped concrete patio transformed our backyard. The pattern and coloring is exactly what we envisioned. Craftsmanship is exceptional.', stars: 5, date: '3 weeks ago' },
    { name: 'Clifford Ross', text: 'Foundation crack repair was done thoroughly with proper waterproofing. No signs of moisture now after three rainy seasons.', stars: 5, date: '1 month ago' },
    { name: 'Agnes Price', text: 'Commercial parking lot resurfacing done on schedule and budget. Clean lines, excellent finish, customers love the new lot.', stars: 4, date: '5 weeks ago' },
    { name: 'Homer Ward', text: 'Decorative concrete steps and walkway are the envy of the neighborhood. Beautiful work done on time at a fair price.', stars: 5, date: '2 months ago' },
    { name: 'Pauline Torres', text: 'Retaining wall replaced a crumbling old one — the new concrete wall is strong, level, and looks great.', stars: 5, date: '2 months ago' },
  ],
  fence: [
    { name: 'Curtis Russell', text: 'Privacy fence installation was completed in one day. Cedar boards are beautiful and the posts are perfectly set. Very happy.', stars: 5, date: '4 days ago' },
    { name: 'Beatrice Griffin', text: 'Vinyl fence replacement looks spectacular and the 20-year warranty gives total peace of mind. Professional team.', stars: 5, date: '2 weeks ago' },
    { name: 'Leroy Diaz', text: 'Automatic gate system is outstanding. Installation was clean, the remote works perfectly, and it adds great security.', stars: 5, date: '1 month ago' },
    { name: 'Lucille Hayes', text: 'Pool fence installed safely and to code. Inspector approved it immediately. Quick installation and great customer service.', stars: 4, date: '5 weeks ago' },
    { name: 'Earl Myers', text: 'Farm fencing over 3 acres done efficiently and at great price. Strong posts, tight lines — exactly what we needed.', stars: 5, date: '2 months ago' },
    { name: 'Mattie Andrews', text: 'Fence repair and staining done beautifully. Made an aging fence look brand new and now it\'s protected for years to come.', stars: 5, date: '2 months ago' },
  ],
  moving: [
    { name: 'Norman Lawrence', text: 'Long-distance move handled with incredible care. Not a single item damaged. The packing team is absolutely outstanding.', stars: 5, date: '5 days ago' },
    { name: 'Thelma Stone', text: 'Local move completed in half the time I expected. Very efficient crew and they were so careful with all our furniture.', stars: 5, date: '2 weeks ago' },
    { name: 'Floyd Robinson', text: 'Piano moved without a scratch. They had specialized equipment and clearly knew exactly what they were doing. Fantastic!', stars: 5, date: '1 month ago' },
    { name: 'Ida Griffin', text: 'White glove service was worth every penny. Our antiques were handled with exceptional care and all arrived perfectly.', stars: 4, date: '5 weeks ago' },
    { name: 'Cecil Barnes', text: 'Senior move for my mother was handled compassionately and efficiently. The team was patient, kind, and very professional.', stars: 5, date: '2 months ago' },
    { name: 'Rosa Simmons', text: 'Same-day move on short notice — they pulled it off flawlessly. Responsive, fast, and very reasonable pricing.', stars: 5, date: '2 months ago' },
  ],
  painters: [
    { name: 'Hubert Henderson', text: 'Interior painting of our entire home is flawless. The prep work was thorough and the color matching was perfect. Beautiful result.', stars: 5, date: '1 week ago' },
    { name: 'Stella Jenkins', text: 'Exterior painting transformed our home completely. Clean lines, two coats, no drips — true professionals.', stars: 5, date: '3 weeks ago' },
    { name: 'Oscar Patterson', text: 'Cabinet painting in our kitchen looks like brand new cabinets. The finish is smooth, durable, and completely transformed the space.', stars: 5, date: '1 month ago' },
    { name: 'Nora Rivera', text: 'Deck staining done beautifully and they used premium product that should last several years. Very neat and professional.', stars: 4, date: '5 weeks ago' },
    { name: 'Alvin Butler', text: 'Commercial office painting was done over a weekend to minimize disruption. Excellent results and very professional crew.', stars: 5, date: '2 months ago' },
    { name: 'Effie Cook', text: 'Color consultation helped us choose the perfect palette. Painters executed it brilliantly. Our home is unrecognizable in the best way.', stars: 5, date: '2 months ago' },
  ],
  'appliance-repair': [
    { name: 'Lester Powell', text: 'Refrigerator repaired same day — found and fixed the compressor issue quickly and charged a very fair price. Excellent service.', stars: 5, date: '3 days ago' },
    { name: 'Winnie Torres', text: 'Washing machine motor replaced in under an hour. Technician was knowledgeable and very efficient. Saved me buying a new machine.', stars: 5, date: '2 weeks ago' },
    { name: 'Sylvester Rogers', text: 'Dishwasher repair done right the first visit. They diagnosed the issue accurately and had the parts on the truck. Impressive.', stars: 5, date: '1 month ago' },
    { name: 'Nellie Bailey', text: 'Oven repair before Thanksgiving saved our holiday! Called at 8am, fixed by noon. Wonderful, responsive service.', stars: 4, date: '5 weeks ago' },
    { name: 'Homer Morris', text: 'Ice maker and water dispenser both repaired professionally. Cheaper than replacement and comes with a 90-day parts warranty.', stars: 5, date: '2 months ago' },
    { name: 'Blanche James', text: 'Commercial appliance repair for our restaurant was handled after hours to avoid disruption. Outstanding professionalism.', stars: 5, date: '2 months ago' },
  ],
  handyman: [
    { name: 'Rufus Crawford', text: 'Fixed a long list of repairs throughout our home in one visit. Fast, skilled, and reasonably priced. Exactly what we needed.', stars: 5, date: '4 days ago' },
    { name: 'Mabel Ortega', text: 'TV mounting, furniture assembly, and some drywall patching all done perfectly. Our home looks so much better. Great handyman!', stars: 5, date: '2 weeks ago' },
    { name: 'Marvin Jenkins', text: 'Door and window repairs done properly with quality materials. No more drafts and everything opens and closes perfectly.', stars: 5, date: '1 month ago' },
    { name: 'Gladys Cooper', text: 'Tile repair in our bathroom blended perfectly with the existing tile. Very skilled and very clean. Highly recommend.', stars: 4, date: '5 weeks ago' },
    { name: 'Lonnie Howard', text: 'Deck maintenance done thoroughly — replaced boards, sealed everything, tightened all hardware. Deck is safe and looks great.', stars: 5, date: '2 months ago' },
    { name: 'Pearl Murray', text: 'Reliable, on-time, skilled, and honest about what needs doing. This is my go-to handyman for everything around the house.', stars: 5, date: '2 months ago' },
  ],
  'window-door': [
    { name: 'Ivan Alexander', text: 'New energy-efficient windows throughout our home cut our heating bill by 30%. Installation was clean and professional.', stars: 5, date: '1 week ago' },
    { name: 'Fannie Warren', text: 'Front entry door replacement is stunning. The craftsmanship is excellent and our home\'s curb appeal has improved dramatically.', stars: 5, date: '3 weeks ago' },
    { name: 'Archie Washington', text: 'Sliding glass door installation was handled perfectly. Smooth operation, perfectly sealed, and looks beautiful. Great team.', stars: 5, date: '1 month ago' },
    { name: 'Carrie Tucker', text: 'Window repair done the same day I called. Fixed a broken seal and now there\'s no more condensation. Fast and affordable.', stars: 4, date: '5 weeks ago' },
    { name: 'Otis Ford', text: 'Custom French doors installed between our kitchen and patio. They look incredible and the quality is exceptional.', stars: 5, date: '2 months ago' },
    { name: 'Georgia Palmer', text: 'Commercial storefront window replacement done overnight to avoid business disruption. Outstanding service and quality.', stars: 5, date: '2 months ago' },
  ],
  siding: [
    { name: 'Jasper Coleman', text: 'Fiber cement siding installation has completely transformed our home. Looks fantastic and the warranty gives us total confidence.', stars: 5, date: '1 week ago' },
    { name: 'Minnie Dixon', text: 'Siding replacement after hail damage was handled efficiently with our insurance claim. Beautiful result, professional team.', stars: 5, date: '3 weeks ago' },
    { name: 'Horace Mason', text: 'Vinyl siding with insulated backing — our home is noticeably more comfortable and energy bills are lower. Excellent work.', stars: 5, date: '1 month ago' },
    { name: 'Ophelia Arnold', text: 'Trim, soffit, and fascia done alongside the siding. Everything matches perfectly and the attention to detail is impressive.', stars: 4, date: '5 weeks ago' },
    { name: 'Elmer Webb', text: 'Commercial siding project completed on schedule. Clean installation, quality materials, and excellent project communication.', stars: 5, date: '2 months ago' },
    { name: 'Cora Burns', text: 'Color consultation made the decision easy and the final result is even better than we imagined. Wonderful experience!', stars: 5, date: '2 months ago' },
  ],
  'kitchen-bath-remodeling': [
    { name: 'Silas Owens', text: 'Kitchen remodel is absolutely stunning. Custom cabinets, quartz counters, and new lighting — completely transformed our home.', stars: 5, date: '1 week ago' },
    { name: 'Hattie Duncan', text: 'Master bathroom renovation exceeded every expectation. Walk-in shower, heated floors, custom vanity — it\'s like a luxury spa.', stars: 5, date: '2 weeks ago' },
    { name: 'Amos Farmer', text: 'Gut renovation of our 1970s kitchen done beautifully and actually on schedule. The project management was outstanding.', stars: 5, date: '1 month ago' },
    { name: 'Gertrude Mills', text: 'Countertop and cabinet refresh at a fraction of full remodel cost looks like a brand new kitchen. Very smart approach.', stars: 4, date: '5 weeks ago' },
    { name: 'Solomon Gibson', text: 'Second bathroom remodel we\'ve done with this company. Same quality, same professionalism, same outstanding results.', stars: 5, date: '2 months ago' },
    { name: 'Lavinia Watts', text: 'Custom storage solutions in our bathroom remodel make the space so functional. Design expertise is truly exceptional.', stars: 5, date: '2 months ago' },
  ],
  'junk-removal': [
    { name: 'Moses Sanders', text: 'Full estate cleanout completed in one day. Respectful, efficient, and they donated usable items to charity. Excellent service.', stars: 5, date: '2 days ago' },
    { name: 'Celia Reynolds', text: 'Same-day appliance removal — called at 9am, gone by 11am. Fast, friendly, and very reasonably priced. Will call again.', stars: 5, date: '1 week ago' },
    { name: 'Elijah Fields', text: 'Hoarding cleanout handled with total professionalism and sensitivity. They went far beyond expectations. Truly compassionate team.', stars: 5, date: '1 month ago' },
    { name: 'Cassie George', text: 'Construction debris removal after our renovation was handled quickly. Great pricing and they separated recyclables carefully.', stars: 4, date: '5 weeks ago' },
    { name: 'Ezekiel Wells', text: 'Office cleanout done over a weekend — back to work Monday with a completely clean space. Efficient and professional.', stars: 5, date: '2 months ago' },
    { name: 'Birdie Harvey', text: 'Yard waste and old furniture all gone in one trip. They worked hard, fast, and charged exactly what was quoted. Perfect service.', stars: 5, date: '2 months ago' },
  ],
  'pressure-washing': [
    { name: 'Cornelius Lynch', text: 'House washing made our 15-year-old siding look brand new. The before-and-after difference is absolutely incredible.', stars: 5, date: '4 days ago' },
    { name: 'Ruthie Walsh', text: 'Driveway and patio cleaning results were unbelievable. Years of stains removed completely. Our yard looks spectacular.', stars: 5, date: '2 weeks ago' },
    { name: 'Alonzo Grant', text: 'Soft wash roof cleaning removed all the algae without any damage to shingles. Correct technique makes all the difference.', stars: 5, date: '1 month ago' },
    { name: 'Harriet Blake', text: 'Fleet washing for our company vehicles done on schedule every month. Excellent quality control and very professional.', stars: 4, date: '5 weeks ago' },
    { name: 'Wendell Freeman', text: 'Commercial concrete cleaning for our parking lot removed years of grease and tire marks. Customers have noticed the difference.', stars: 5, date: '2 months ago' },
    { name: 'Dora Porter', text: 'Fence washing and deck cleaning done in one visit — both look completely restored. Fast, thorough, and fairly priced.', stars: 5, date: '2 months ago' },
  ],
  gutter: [
    { name: 'Thaddeus Oliver', text: 'Seamless gutter installation with guards — no more cleaning twice a year and they look great on our home. Excellent work.', stars: 5, date: '1 week ago' },
    { name: 'Lula Carpenter', text: 'Annual cleaning and inspection caught a sagging section before it caused damage. Very thorough and honest reporting.', stars: 5, date: '3 weeks ago' },
    { name: 'Barney Webb', text: 'Complete gutter replacement including fascia board repair — everything done in one day, looks perfect.', stars: 5, date: '1 month ago' },
    { name: 'Ora Page', text: 'Copper gutters installed on our historic home look absolutely beautiful and will outlast anything else. Quality craftsmanship.', stars: 4, date: '5 weeks ago' },
    { name: 'Titus Harper', text: 'Underground drain installation solved our flooding problem permanently. Great engineering solution and excellent installation.', stars: 5, date: '2 months ago' },
    { name: 'Zelma Ross', text: 'Downspout extensions and gutter guards added at very fair price. No more basement water issues since installation.', stars: 5, date: '2 months ago' },
  ],
  chimney: [
    { name: 'Enoch Crawford', text: 'Annual chimney sweep and inspection done thoroughly. The technician found and repaired a cracked flue tile that could have been dangerous.', stars: 5, date: '1 week ago' },
    { name: 'Delia Fleming', text: 'Chimney relining done professionally with quality stainless liner. Fireplace works perfectly now and we feel completely safe.', stars: 5, date: '3 weeks ago' },
    { name: 'Tobias Graham', text: 'Firebox restoration was beautiful — the masonry work blended with the original perfectly. Our fireplace looks historic again.', stars: 5, date: '1 month ago' },
    { name: 'Rowena Lane', text: 'Carbon monoxide testing and damper replacement done quickly and at fair price. They explained everything clearly.', stars: 4, date: '5 weeks ago' },
    { name: 'Magnus Perry', text: 'Chimney waterproofing solved chronic moisture issues. No more white staining and the mortar is protected for years.', stars: 5, date: '2 months ago' },
    { name: 'Celestine Long', text: 'Gas fireplace service done expertly. Clean, efficient, and the technician was incredibly knowledgeable. Highly recommend.', stars: 5, date: '2 months ago' },
  ],
  'drain-cleaning': [
    { name: 'Roscoe Hicks', text: 'Main line cleared with hydro jetting — drainage throughout the house is perfect now. Camera inspection showed exactly the problem.', stars: 5, date: '2 days ago' },
    { name: 'Laverne Cunningham', text: 'Tree root removal from sewer line done professionally without excavation. Saved thousands compared to a full line replacement.', stars: 5, date: '2 weeks ago' },
    { name: 'Otis Bradley', text: 'Emergency service for a completely blocked drain on a Saturday night. Arrived in 45 minutes and had it fixed quickly.', stars: 5, date: '1 month ago' },
    { name: 'Alma Hawkins', text: 'Grease trap cleaning for our restaurant done on schedule and very thoroughly. No odors, no mess, completely professional.', stars: 4, date: '5 weeks ago' },
    { name: 'Clifton Ray', text: 'Septic pumping and inspection done properly — they checked everything and gave honest assessment of system condition.', stars: 5, date: '2 months ago' },
    { name: 'Dollie Murray', text: 'Slow drain issue diagnosed and cleared quickly. Also found a partial blockage further down we didn\'t know about. Very thorough.', stars: 5, date: '2 months ago' },
  ],
  irrigation: [
    { name: 'Garfield Pierce', text: 'New irrigation system keeps our lawn perfectly green with 40% less water than we used before. Smart controller is excellent.', stars: 5, date: '1 week ago' },
    { name: 'Myrtie Warren', text: 'System repair and spring startup done efficiently. Technician found and fixed a zone that hadn\'t worked in years.', stars: 5, date: '3 weeks ago' },
    { name: 'Wilbur Marshall', text: 'Drip irrigation for our garden beds installed beautifully. Plants are healthier and we use significantly less water.', stars: 5, date: '1 month ago' },
    { name: 'Nettie Carr', text: 'Backflow testing certification handled smoothly and quickly. Straightforward, professional, and fairly priced service.', stars: 4, date: '5 weeks ago' },
    { name: 'Levi Flynn', text: 'Complete zone redesign after our landscaping renovation done perfectly. Everything works beautifully and the coverage is excellent.', stars: 5, date: '2 months ago' },
    { name: 'Maude Day', text: 'Seasonal shutdown and winterization done professionally every year. Never had a burst pipe since switching to this company.', stars: 5, date: '2 months ago' },
  ],
  'deck-patio': [
    { name: 'Dewey Hopkins', text: 'Composite deck with built-in lighting and seating is absolutely gorgeous. The craftsmanship is exceptional and it adds huge value.', stars: 5, date: '1 week ago' },
    { name: 'Opal Guerrero', text: 'Paver patio installation transformed our backyard into an outdoor living room. Beautiful design, quality materials, perfect execution.', stars: 5, date: '3 weeks ago' },
    { name: 'Newton Gordon', text: 'Multi-level deck with pergola and outdoor kitchen is incredible. Everyone who visits asks who built it. Outstanding work.', stars: 5, date: '1 month ago' },
    { name: 'Addie Rice', text: 'Pool deck replacement done beautifully with slip-resistant concrete. Safety improved and it looks fantastic. Very happy.', stars: 4, date: '5 weeks ago' },
    { name: 'Sherman Shaw', text: 'Deck repair and refinishing saved a deck I thought needed full replacement. Now it looks brand new at a fraction of the cost.', stars: 5, date: '2 months ago' },
    { name: 'Tessie Watts', text: 'Screen enclosure installation was done perfectly and on schedule. Our outdoor space is now usable all year round.', stars: 5, date: '2 months ago' },
  ],
  insulation: [
    { name: 'Hiram Burns', text: 'Attic insulation upgrade reduced our heating costs by 35%. Professional installation and they cleaned up perfectly afterward.', stars: 5, date: '1 week ago' },
    { name: 'Josephine Carr', text: 'Spray foam in our crawl space completely eliminated cold floors and moisture issues. Best home improvement investment we\'ve made.', stars: 5, date: '3 weeks ago' },
    { name: 'Elbert Webb', text: 'Blown-in wall insulation done with minimal disruption. They matched and patched the siding perfectly. Couldn\'t be happier.', stars: 5, date: '1 month ago' },
    { name: 'Minerva Rowe', text: 'Energy audit identified all the gaps and their insulation work addressed every one. Our home comfort has improved dramatically.', stars: 4, date: '5 weeks ago' },
    { name: 'Cornelius Boyd', text: 'Sound insulation between our home office and living areas made a tremendous difference. Very professional installation.', stars: 5, date: '2 months ago' },
    { name: 'Leila Sutton', text: 'Complete insulation upgrade including vapor barriers done professionally. Home is warmer in winter and cooler in summer.', stars: 5, date: '2 months ago' },
  ],
  waterproofing: [
    { name: 'Jasper Lynch', text: 'Basement waterproofing system has been completely dry for two years now after decades of water issues. Exceptional work.', stars: 5, date: '1 week ago' },
    { name: 'Leticia Douglas', text: 'Foundation crack repair with proper injection method done correctly. No sign of moisture after three rainy seasons.', stars: 5, date: '3 weeks ago' },
    { name: 'Bertram Patterson', text: 'Crawl space encapsulation transformed a damp, musty area into clean dry storage. Air quality in the house improved noticeably.', stars: 5, date: '1 month ago' },
    { name: 'Beulah Watkins', text: 'Sump pump installation with battery backup gives us total peace of mind during heavy rain storms. Excellent system.', stars: 4, date: '5 weeks ago' },
    { name: 'Lemuel Garrett', text: 'French drain installation solved our yard flooding that had been a problem for years. Completely effective solution.', stars: 5, date: '2 months ago' },
    { name: 'Clarice Pena', text: 'Exterior waterproofing with drain tile done professionally. Finally after years of searching, a company that actually fixed the problem.', stars: 5, date: '2 months ago' },
  ],
  'glass-repair': [
    { name: 'Theron Bradley', text: 'Shower door installation is absolutely beautiful. Frameless design with proper hardware makes our bathroom look like a showroom.', stars: 5, date: '4 days ago' },
    { name: 'Magnolia Fowler', text: 'Emergency window board-up and replacement after a break-in handled quickly and professionally. New window looks perfect.', stars: 5, date: '2 weeks ago' },
    { name: 'Columbus Carpenter', text: 'Commercial storefront glass replacement done overnight. Open for business the next morning — minimal disruption. Excellent.', stars: 5, date: '1 month ago' },
    { name: 'Lucretia Bishop', text: 'Custom glass table tops made to exact measurements — beautiful quality and delivered right on schedule.', stars: 4, date: '5 weeks ago' },
    { name: 'Abner Gibson', text: 'Insulated glass unit replacement on four windows eliminated condensation and improved energy efficiency. Great value.', stars: 5, date: '2 months ago' },
    { name: 'Verona Stone', text: 'Mirror installation throughout our renovated home done flawlessly. Every mirror is perfectly level and beautifully finished.', stars: 5, date: '2 months ago' },
  ],
  'commercial-cleaning': [
    { name: 'Prescott Fleming', text: 'Office cleaning team is thorough, reliable, and always on schedule. Our workplace has never looked better — clients notice.', stars: 5, date: '1 week ago' },
    { name: 'Octavia Fletcher', text: 'Floor stripping and waxing on our medical facility done to exacting standards. Gleaming results and completely professional.', stars: 5, date: '3 weeks ago' },
    { name: 'Algernon Pope', text: 'Post-construction cleanup on our new office build was extensive and done perfectly. Ready for occupancy ahead of schedule.', stars: 5, date: '1 month ago' },
    { name: 'Cordelia Ray', text: 'Disinfection service during cold and flu season keeps our team healthy. The results are measurable and the service is excellent.', stars: 4, date: '5 weeks ago' },
    { name: 'Thaddeus Cunningham', text: 'Day porter service has transformed our common areas. Always clean, always stocked, always professional. Outstanding program.', stars: 5, date: '2 months ago' },
    { name: 'Valentina Payne', text: 'Warehouse cleaning program keeps our facility inspection-ready at all times. Efficient, reliable, and excellent value.', stars: 5, date: '2 months ago' },
  ],
  // legacy reviews
  electrician_legacy: [
    { name: 'Rahul Sharma', text: 'Fixed my entire home wiring in just 3 hours. Very professional and punctual.', stars: 5, date: '2 weeks ago' },
    { name: 'Priya Patel', text: 'Called them for emergency at midnight — they came within 30 minutes. Truly reliable!', stars: 5, date: '1 month ago' },
    { name: 'Arun Desai', text: 'Best electrician in Pune. Did AC fitting and panel upgrade. Reasonable pricing.', stars: 4, date: '1 month ago' },
    { name: 'Meera Joshi', text: 'The team was courteous and cleaned up perfectly after the work. Very happy.', stars: 5, date: '2 months ago' },
    { name: 'Suresh Nair', text: 'Quick response for a short circuit issue. Fixed it in under an hour. Excellent.', stars: 5, date: '2 months ago' },
    { name: 'Kavya Reddy', text: 'Home automation setup done perfectly. Smart switches work flawlessly.', stars: 4, date: '3 months ago' },
  ],
  plumber: [
    { name: 'Kavita Singh', text: 'Fixed our bathroom leak in record time. Clean work, no mess left behind.', stars: 5, date: '1 week ago' },
    { name: 'Mahesh Joshi', text: 'Very professional team. Replaced all old pipes and did kitchen fitting. Highly recommend!', stars: 5, date: '3 weeks ago' },
    { name: 'Sunita Nair', text: 'Good service. Came on time and fixed the drain cleaning issue efficiently.', stars: 4, date: '1 month ago' },
    { name: 'Ravi Kumar', text: 'Water heater installation done in 2 hours. Great work and fair pricing.', stars: 5, date: '1 month ago' },
    { name: 'Anita Desai', text: 'Prompt response for an emergency pipe burst. Saved my home from major damage.', stars: 5, date: '2 months ago' },
    { name: 'Deepak Verma', text: 'Excellent bathroom fitting work. The team was neat and efficient.', stars: 4, date: '2 months ago' },
  ],
  dentist: [
    { name: 'Smita Kulkarni', text: 'Best dental clinic in the city! Painless root canal treatment. Highly recommend.', stars: 5, date: '1 week ago' },
    { name: 'Rahul Mehta', text: 'Teeth whitening done beautifully. The doctor is very gentle and reassuring.', stars: 5, date: '2 weeks ago' },
    { name: 'Pooja Shah', text: 'My son got braces here. The entire team is friendly and professional.', stars: 4, date: '1 month ago' },
    { name: 'Vinod Patil', text: 'Regular checkups are thorough and the clinic is very clean. Excellent care.', stars: 5, date: '1 month ago' },
    { name: 'Asha Rao', text: 'Got implants done after years of hesitation. Absolutely no pain. Amazing results.', stars: 5, date: '2 months ago' },
    { name: 'Kiran Desai', text: 'Very reasonable pricing and great quality treatment. Highly satisfied.', stars: 4, date: '3 months ago' },
  ],
  default: [
    { name: 'James Carter', text: 'Outstanding service quality. Very professional team and reasonable pricing. Couldn\'t be happier with the results.', stars: 5, date: '1 week ago' },
    { name: 'Linda Morrison', text: 'Excellent experience from start to finish. Arrived on time, worked efficiently, and cleaned up perfectly. Will definitely use again!', stars: 5, date: '2 weeks ago' },
    { name: 'Marcus Webb', text: 'Reliable and efficient. Came on time and completed the job perfectly. Very knowledgeable team.', stars: 4, date: '1 month ago' },
    { name: 'Angela Torres', text: 'Best service provider in the area. Transparent pricing, quality work, and great customer communication throughout.', stars: 5, date: '1 month ago' },
    { name: 'Steve Nguyen', text: 'Very happy with the work quality. The team is courteous, skilled, and professional. Highly recommend to anyone.', stars: 5, date: '2 months ago' },
    { name: 'Donna Price', text: 'Quick response and professional attitude. Fair pricing and excellent results. Would recommend to everyone I know.', stars: 4, date: '2 months ago' },
  ]
};

const SERVICE_IMAGES = {
  'appliance-repair': { hero: 'photo-1556911220-bff31c812dba', about: 'photo-1770991190796-a121c47467eb', portfolio: ['https://media.istockphoto.com/id/2094985685/photo/young-latin-handyman-repairs-the-dishwasher-in-the-clients-kitchen.webp?a=1&b=1&s=612x612&w=0&k=20&c=Q29azOvleCf-c926dPDv5ZIBMvWyOZGLqEujlpAJnlw=', 'photo-1562941995-17dc31eaaf6d', 'photo-1603114595741-e60bf9486e04', 'photo-1620568400263-6f1cf95b9e30'] },
  'chimney': { hero: 'photo-1600585154340-be6161a56a0c', about: 'https://images.pexels.com/photos/34033126/pexels-photo-34033126.jpeg', portfolio: ['https://images.pexels.com/photos/36424119/pexels-photo-36424119.jpeg', 'https://images.pexels.com/photos/37623616/pexels-photo-37623616.jpeg', 'https://images.pexels.com/photos/18253918/pexels-photo-18253918.jpeg', 'photo-1666307592912-87d02022957f'] },
  'commercial-cleaning': { hero: 'https://images.pexels.com/photos/20381389/pexels-photo-20381389.jpeg', about: 'https://images.pexels.com/photos/34517609/pexels-photo-34517609.jpeg', portfolio: ['https://images.pexels.com/photos/8273517/pexels-photo-8273517.jpeg', 'photo-1763026227930-ec2c91d4e7f2', 'photo-1669101602108-fa5ba89507ee', 'https://plus.unsplash.com/premium_photo-1683141112334-d7d404f6e716?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q29tbWVyY2lhbCUyMENsZWFuaW5nJTIwU2VydmljZXN8ZW58MHx8MHx8fDA%3D'] },
  'concrete': { hero: 'photo-1541888946425-d81bb19240f5', about: 'https://concretesolutionsofatl.com/wp-content/uploads/2024/04/stamped-concrete_men-stamping-patio.webp', portfolio: ['photo-1575971637203-d6255d9947a9', 'photo-1504307651254-35680f356dfd', 'photo-1685464197144-790d716b8649', 'https://plus.unsplash.com/premium_photo-1672152803614-5e1d85477699?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q29uY3JldGUlMjBQYXRpb3N8ZW58MHx8MHx8fDA%3D'] },
  'dentist': { hero: 'https://images.pexels.com/photos/5355834/pexels-photo-5355834.jpeg', about: 'https://images.pexels.com/photos/31017708/pexels-photo-31017708.jpeg', portfolio: ['https://images.pexels.com/photos/19976601/pexels-photo-19976601.jpeg', 'https://images.pexels.com/photos/6627318/pexels-photo-6627318.jpeg', 'https://images.pexels.com/photos/19976603/pexels-photo-19976603.jpeg', 'https://images.pexels.com/photos/6627446/pexels-photo-6627446.jpeg'] },
  'deck-patio': { hero: 'photo-1600210492486-724fe5c67fb0', about: 'photo-1600585154526-990dced4db0d', portfolio: ['photo-1719757117888-1ae9b650577e', 'https://images.pexels.com/photos/15884118/pexels-photo-15884118.jpeg', 'https://plus.unsplash.com/premium_photo-1687862745287-ab709278fef4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UmFpbHMlMjAlMjYlMjBTdGFpcnN8ZW58MHx8MHx8fDA%3D', 'photo-1778315289873-3f2846b9dc2c'] },
  'drain-cleaning': { hero: 'photo-1585704032915-c3400ca199e7', about: 'https://media.istockphoto.com/id/1300212975/photo/woman-at-home-calling-a-plumber-about-a-leaking-pipe-in-her-sink.webp?a=1&b=1&s=612x612&w=0&k=20&c=sJaVRuyv-nZx1zvsYOHtOClaN0DGGB5_43eUYDXDl9o=', portfolio: ['https://media.istockphoto.com/id/2177956246/photo/expert-and-professional-plumbing-repair-services-being-delivered-with-precision-in-action.webp?a=1&b=1&s=612x612&w=0&k=20&c=pGN3icUVqzw2a4aFe68wq3TwOlGA0f9Jf1FGfjcYjZs=', 'photo-1703699133532-f94ecb5acfb7', 'photo-1611697954775-fd01a25de7f8', 'photo-1741997376539-a63ee600dac9'] },
  'electrician': { hero: 'photo-1621905251918-48416bd8575a', about: 'https://plus.unsplash.com/premium_photo-1663013671816-5866890c7fc1?w=600&auto=format&fit=crop&q=60', portfolio: ['photo-1555963966-b7ae5404b6ed', 'photo-1621905251189-08b45d6a269e', 'https://plus.unsplash.com/premium_photo-1682086494759-b459f6eff2df?w=600&auto=format&fit=crop&q=60', 'https://plus.unsplash.com/premium_photo-1661911309991-cc81afcce97d?w=600&auto=format&fit=crop&q=60'] },
  'fence': { hero: 'photo-1505691938895-1758d7feb511', about: 'https://media.istockphoto.com/id/869845886/photo/house-backyard-new-wood-fence-with-gate-door-in-suburb.webp?a=1&b=1&s=612x612&w=0&k=20&c=4-chiMFfH2vRNULTLhSWw-Cycmvr52cymt8TReq-EOM=', portfolio: ['https://plus.unsplash.com/premium_photo-1675490807291-240d95b3ecd9?w=600&auto=format&fit=crop&q=60', 'https://media.istockphoto.com/id/1097298856/photo/boundary-fence-white-slats.webp?a=1&b=1&s=612x612&w=0&k=20&c=x-404sAnGGWUJdVCnh4PdTf1vdDBUD_PB-b28aX0NxY=', 'photo-1619322704995-5215d5f47a75', 'photo-1701601766841-89adcbbd0f6b'] },
  'flooring': { hero: 'photo-1558618666-fcd25c85cd64', about: 'photo-1581858726788-75bc0f6a952d', portfolio: ['https://plus.unsplash.com/premium_photo-1683129678799-a30041cebb62?w=600&auto=format&fit=crop&q=60', 'https://plus.unsplash.com/premium_photo-1704744490021-fb803cd2067f?w=600&auto=format&fit=crop&q=60', 'https://plus.unsplash.com/premium_photo-1683141361371-8028cd2c0ac8?w=600&auto=format&fit=crop&q=60', 'https://plus.unsplash.com/premium_photo-1683133900434-8acceef1e4c0?w=600&auto=format&fit=crop&q=60'] },
  'garage-door': { hero: 'photo-1558618666-fcd25c85cd64', about: 'https://plus.unsplash.com/premium_photo-1682126025756-f93ee60f5275?w=600&auto=format&fit=crop&q=60', portfolio: ['https://plus.unsplash.com/premium_photo-1762118410750-c654c053722c?w=600&auto=format&fit=crop&q=60', 'photo-1772288551499-21d04421c357', 'photo-1724660583307-e7b0c5c5fcd9', 'photo-1719050817004-c76eb7c75c99'] },
  'general-contractors': { hero: 'photo-1504307651254-35680f356dfd', about: 'photo-1556912167-f556f1f39fdf', portfolio: ['photo-1552321554-5fefe8c9ef14', 'photo-1614127938540-a1139bee1841', 'photo-1563166423-482a8c14b2d6', 'photo-1541888946425-d81bb19240f5'] },
  'glass-repair': { hero: 'photo-1497366754035-f200968a6e72', about: 'https://plus.unsplash.com/premium_photo-1661266858501-008ae7a80e01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q3J5c3RhbExpbmUlMjBHbGFzcyUyMFJlcGFpciUyMCUyNiUyMEluc3RhbGxhdGlvbnxlbnwwfHwwfHx8MA%3D%3D', portfolio: ['photo-1684431002942-1962cad5166f', 'photo-1753813698731-fc9593d27b54', 'https://images.pexels.com/photos/5691516/pexels-photo-5691516.jpeg', 'https://images.pexels.com/photos/5691544/pexels-photo-5691544.jpeg'] },
  'gutter': { hero: 'photo-1503387762-592deb58ef4e', about: 'photo-1712947090314-ca7da0b90f24', portfolio: ['https://images.pexels.com/photos/8875446/pexels-photo-8875446.jpeg', 'https://plus.unsplash.com/premium_photo-1725408130870-7a614b48ae3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3V0dGVyfGVufDB8fDB8fHww', 'photo-1665442350373-c8e7fc6560de', 'https://images.pexels.com/photos/35153375/pexels-photo-35153375.jpeg'] },
  'handyman': { hero: 'https://images.pexels.com/photos/5691682/pexels-photo-5691682.jpeg', about: 'https://images.pexels.com/photos/32208764/pexels-photo-32208764.jpeg', portfolio: ['https://images.pexels.com/photos/5974365/pexels-photo-5974365.jpeg', 'https://images.pexels.com/photos/8787526/pexels-photo-8787526.jpeg', 'photo-1451933371645-a3029668b979', 'photo-1505798577917-a65157d3320a'] },
  'home-builders': { hero: 'https://images.pexels.com/photos/8961624/pexels-photo-8961624.jpeg', about: 'photo-1600585154340-be6161a56a0c', portfolio: ['photo-1564013799919-ab600027ffc6', 'photo-1600596542815-ffad4c1539a9', 'photo-1541888946425-d81bb19240f5', 'photo-1484154218962-a197022b5858'] },
  'hvac': { hero: 'https://images.pexels.com/photos/30210086/pexels-photo-30210086.jpeg', about: 'https://plus.unsplash.com/premium_photo-1661963078581-a4f091315692?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SGVhdGluZyUyMCUyNiUyMEZ1cm5hY2UlMjBpbiUyMEhWQUN8ZW58MHx8MHx8fDA%3D', portfolio: ['photo-1504328345606-18bbc8c9d7d1', 'https://www.modernhvac.com/wp-content/uploads/2023/10/Furnace-service2-683x1024.jpg', 'photo-1665826254140-28fa3d8738a1', 'https://media.istockphoto.com/id/1284843352/photo/the-technicians-are-cleaning-the-air-conditioner-by-spraying-water-hand-and-water-spray-are.webp?a=1&b=1&s=612x612&w=0&k=20&c=sJyiPhLk0LJdpvJAsswYqeOSwZWypX2qztfCc-XvREk='] },
  'insulation': { hero: 'https://images.pexels.com/photos/8487732/pexels-photo-8487732.jpeg', about: 'https://plus.unsplash.com/premium_photo-1682148139707-915e573089ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEVuZXJneSUyMEFzc2Vzc21lbnQlMjBpbnN1bGF0aW9uJTIwY29udHJhY3RvcnN8ZW58MHx8MHx8fDA%3D', portfolio: ['https://images.pexels.com/photos/9729554/pexels-photo-9729554.jpeg', 'https://images.pexels.com/photos/5461946/pexels-photo-5461946.jpeg', 'https://images.pexels.com/photos/5493664/pexels-photo-5493664.jpeg', 'photo-1778074762033-c6595907684d'] },
  'irrigation': { hero: 'https://images.pexels.com/photos/25283561/pexels-photo-25283561.jpeg', about: 'photo-1703243056931-265dbc9be205', portfolio: ['https://images.pexels.com/photos/33881124/pexels-photo-33881124.jpeg', 'https://plus.unsplash.com/premium_vector-1730144286063-e7172259911f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXJyaWdhdGlvbiUyMCUyNiUyMHNwcmlua2xlciUyMGNvbXBhbmllc3xlbnwwfHwwfHx8MA%3D%3D', 'photo-1645727527942-f12e14a0c841', 'https://plus.unsplash.com/premium_photo-1661962514374-442d58a10c91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8SXJyaWdhdGlvbiUyMCUyNiUyMFNwcmlua2xlciUyMGNvbXBhbmllc3xlbnwwfHwwfHx8MA%3D%3D'] },
  'junk-removal': { hero: 'photo-1532996122724-e3c354a0b15b', about: 'photo-1713730060332-2e478ce2e318', portfolio: ['photo-1533929922375-111c17d40f9d', 'https://plus.unsplash.com/premium_photo-1664455687732-8c5e114baed0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGp1bmslMjByZW1vdmFsfGVufDB8fDB8fHww', 'photo-1584786454449-ecc77738684c', 'photo-1530587191325-3db32d826c18'] },
  'kitchen-bath-remodeling': { hero: 'photo-1759239355404-63313f92cfc2', about: 'https://images.pexels.com/photos/7027992/pexels-photo-7027992.jpeg', portfolio: ['https://images.pexels.com/photos/5353878/pexels-photo-5353878.jpeg', 'https://plus.unsplash.com/premium_photo-1682088045183-28421d604472?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8a2l0Y2hlbiUyMCUyNiUyMGJhdGhyb29tJTIwcmVtb2RlbGluZ3xlbnwwfHwwfHx8MA%3D%3D', 'https://plus.unsplash.com/premium_photo-1682088047857-f46978b7fc59?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8S2l0Y2hlbiUyMCUyNiUyMEJhdGhyb29tJTIwUmVtb2RlbGluZ3xlbnwwfHwwfHx8MA%3D%3D', 'https://images.pexels.com/photos/35493896/pexels-photo-35493896.jpeg'] },
  'landscaping': { hero: 'photo-1558618666-fcd25c85cd64', about: 'photo-1416879595882-3373a0480b5b', portfolio: ['photo-1530836369250-ef72a3f5cda8', 'photo-1585320806297-9794b3e4eeae', 'photo-1600596542815-ffad4c1539a9', 'photo-1523301343968-6a6ebf63c672'] },
  'moving': { hero: 'photo-1581578731548-c64695cc6952', about: 'https://images.pexels.com/photos/7464673/pexels-photo-7464673.jpeg', portfolio: ['https://images.pexels.com/photos/5025663/pexels-photo-5025663.jpeg', 'photo-1752135552143-3fc8758d1a35', 'photo-1777499697680-b5072cf11247', 'photo-1600725935160-f67ee4f6084a'] },
  'painters': { hero: 'photo-1562259949-e8e7689d7828', about: 'photo-1759330806091-b9a077491cc1', portfolio: ['photo-1688372198189-de6a51777a81', 'photo-1671681739893-e8d027788284', 'photo-1511822148790-e7b58ba14c72', 'photo-1731044492717-aefeb9150af6'] },
  'pest-control': { hero: 'photo-1558618666-fcd25c85cd64', about: 'https://hometriangle.com/blogs/content/images/2025/06/General-Pest.jpg', portfolio: ['https://media.istockphoto.com/id/2198514188/photo/spraying-disinfection-and-decontamination.webp?a=1&b=1&s=612x612&w=0&k=20&c=_qgJVuX62aU_Xzy4JEmWW-o1AD0WZRwf3i3zQt0IDZU=', 'https://rex-pestcontrol.com/img/mosquito-2.jpg', 'https://vaishnavipestcontrol.com/wp-content/uploads/2025/10/rodent-management-services.jpg', 'https://cpcindia.in/wp-content/uploads/2023/07/bed-bug-min.jpg'] },
  'plumbing': { hero: 'photo-1585771724684-38269d6639fd', about: 'https://plus.unsplash.com/premium_photo-1664301132849-f52af765df79?w=600&auto=format&fit=crop&q=60', portfolio: ['https://plus.unsplash.com/premium_photo-1664298589198-b15ff5382648?w=600&auto=format&fit=crop&q=60', 'https://www.bullseyeleak.com/wp-content/uploads/2021/09/Bullseye-Repiping-a-House.png', 'https://www.bluestarenviroservices.in/wp-content/uploads/2022/12/sewer-line-cleaning-service.jpg', 'photo-1584622650111-993a426fbf0a'] },
  'pressure-washing': { hero: 'photo-1581883579507-019c44b711cb', about: 'https://images.pexels.com/photos/35153375/pexels-photo-35153375.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', portfolio: ['https://images.pexels.com/photos/29994840/pexels-photo-29994840.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', 'https://images.pexels.com/photos/14965464/pexels-photo-14965464.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', 'photo-1718152423985-2d7909a96fa1', 'photo-1593260654732-df52bea15d63'] },
  'property-management': { hero: 'https://images.pexels.com/photos/8732777/pexels-photo-8732777.jpeg', about: 'https://images.pexels.com/photos/7937734/pexels-photo-7937734.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', portfolio: ['https://images.pexels.com/photos/29899813/pexels-photo-29899813.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', 'photo-1532619675605-1ede6c2ed2b0', 'photo-1600880292203-757bb62b4baf', 'photo-1560518883-ce09059eeffa'] },
  'real-estate-developers': { hero: 'photo-1486325212027-8081e485255e', about: 'photo-1532619675605-1ede6c2ed2b0', portfolio: ['photo-1517245386807-bb43f82c33c4', 'photo-1503387762-592deb58ef4e', 'photo-1560472354-b33ff0c44a43', 'photo-1486406146926-c627a92ad1ab'] },
  'real-estate-investors': { hero: 'photo-1560518883-ce09059eeffa', about: 'photo-1652878530627-cc6f063e3947', portfolio: ['photo-1560472354-b33ff0c44a43', 'photo-1532619675605-1ede6c2ed2b0', 'photo-1582407947304-fd86f028f716', 'photo-1486325212027-8081e485255e'] },
  'roofing': { hero: 'photo-1635048424329-a9bfb146d7aa', about: 'photo-1558618666-fcd25c85cd64', portfolio: ['photo-1504307651254-35680f356dfd', 'photo-1600585154340-be6161a56a0c', 'photo-1600585154340-be6161a56a0c', 'photo-1416169607655-0c2b3ce2e1cc'] },
  'siding': { hero: 'photo-1546552356-3fae876a61ca', about: 'photo-1763073855254-4076ae105611', portfolio: ['photo-1632907359232-ba2346f91276', 'photo-1675671509845-a5184ef9c4c6', 'photo-1557249036-32a028687ed2', 'photo-1701118621865-9bd6f844eb02'] },
  'solar-installers': { hero: 'photo-1509391366360-2e959784a276', about: 'photo-1508514177221-188b1cf16e9d', portfolio: ['https://www.mcpower.com/wp-content/uploads/img-secondary-monitoring-reporting.jpg', 'https://sunvena.com/wp-content/uploads/2023/02/ground-mounted-solar-panels-FL.jpeg', 'photo-1613665813446-82a78c468a1d', 'https://intlbm.com/wp-content/uploads/2024/06/Representational-Image-Displaying-A-Solar-Monitoring-System.png'] },
  'tree-service': { hero: 'photo-1558618666-fcd25c85cd64', about: 'photo-1530836369250-ef72a3f5cda8', portfolio: ['photo-1754321895426-68b04ba453e3', 'https://plus.unsplash.com/premium_photo-1664299622892-b75d9192e7f4?w=600&auto=format&fit=crop&q=60', 'https://plus.unsplash.com/premium_photo-1661851207784-e29e2ebe4efb?w=600&auto=format&fit=crop&q=60', 'https://plus.unsplash.com/premium_photo-1661810432776-82ac9fc31ade?w=600&auto=format&fit=crop&q=60'] },
  'water-fire-restoration': { hero: 'photo-1743422854841-403e54365470', about: 'https://upcyclethat.com/wp-content/uploads/2024/12/water_damage.jpg', portfolio: ['https://cdn.prod.website-files.com/65ee13dd21dc91e25abbaf2b/6615f8b6fc0a87d72a1a086b_smoke-damage-affect-on-home-and-health.jpg', 'https://framerusercontent.com/images/4UBBfxpRIwnztd3SqzuEDXxe9bM.jpeg', 'photo-1603807008857-ad66b70431aa', 'https://plus.unsplash.com/premium_photo-1663054910787-f71cb7818e07?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q29udGVudHMlMjBDbGVhbmluZ3xlbnwwfHwwfHx8MA%3D%3D'] },
  'waterproofing': { hero: 'https://images.pexels.com/photos/5493662/pexels-photo-5493662.jpeg', about: 'photo-1754321895426-68b04ba453e3', portfolio: ['https://plus.unsplash.com/premium_photo-1682724921864-3f93e16a1a13?w=800&h=600&fit=crop&auto=format&q=80', 'https://plus.unsplash.com/premium_photo-1754344833335-ac49dbd78442?w=800&h=600&fit=crop&auto=format&q=80', 'https://images.pexels.com/photos/5493662/pexels-photo-5493662.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', 'https://images.pexels.com/photos/35571977/pexels-photo-35571977.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'] },
  'window-door': { hero: 'https://images.pexels.com/photos/5768284/pexels-photo-5768284.jpeg', about: 'photo-1759693726718-10912942c0fb', portfolio: ['photo-1722461080801-bd76c01db48c', 'https://images.pexels.com/photos/5768284/pexels-photo-5768284.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', 'https://images.pexels.com/photos/6197111/pexels-photo-6197111.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop', 'https://images.pexels.com/photos/5691502/pexels-photo-5691502.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'] },
};

// ── Per-service YouTube video embed IDs (short ~60-90s promo clips) ─────────
const SERVICE_VIDEOS = {
  hvac: 'KUBjWWcTwD4',
  roofing: 'zqhUMKYqHx0',
  plumbing: 'pHBMDFi3YOo',
  'property-management': 'Ut6ZJH7SORI',
  'real-estate-investors': 'bKyaFqYJn-4',
  'real-estate-developers': 'tnXSFhWalWk',
  'water-fire-restoration': 'zFdxgs1Lm-k',
  electrician: '5NcvKiHjJFI',
  landscaping: 'sNpBLB-XYXI',
  'garage-door': 'xkl0lYspRxQ',
  'pest-control': 'Nj0RThBhAMY',
  'general-contractors': 'tnXSFhWalWk',
  'home-builders': 'vJBVBxUzGKo',
  'solar-installers': 'ScHOpbgGMas',
  flooring: 'OdZFnNDUFLY',
  'tree-service': 'VwKBxkOePc0',
  concrete: '1RGz9gxlxR0',
  fence: 'vJBVBxUzGKo',
  moving: 'KRrE9kpFBbk',
  painters: '3RSmjpN4_lA',
  'appliance-repair': '5NcvKiHjJFI',
  handyman: 'pHBMDFi3YOo',
  'window-door': 'OdZFnNDUFLY',
  siding: 'zqhUMKYqHx0',
  'kitchen-bath-remodeling': '556opEFJJHQ',
  'junk-removal': 'KRrE9kpFBbk',
  'pressure-washing': '3RSmjpN4_lA',
  gutter: 'zqhUMKYqHx0',
  chimney: 'KUBjWWcTwD4',
  'drain-cleaning': 'pHBMDFi3YOo',
  irrigation: 'sNpBLB-XYXI',
  'deck-patio': 'vJBVBxUzGKo',
  insulation: 'KUBjWWcTwD4',
  waterproofing: 'zFdxgs1Lm-k',
  'glass-repair': 'OdZFnNDUFLY',
  'commercial-cleaning': '3RSmjpN4_lA',
  // legacy
  electrician_legacy: '5NcvKiHjJFI',
  plumber: 'pHBMDFi3YOo',
  dentist: 'FV3msLCRofA',
  doctor: 'pHBMDFi3YOo',
  lawyer: 'Ut6ZJH7SORI',
  restaurant: '556opEFJJHQ',
  gym: 'ScHOpbgGMas',
  spa: 'FV3msLCRofA',
  'car-repair': '5NcvKiHjJFI',
  cleaning: '3RSmjpN4_lA',
  landscaping_legacy: 'sNpBLB-XYXI',
  photographer: 'FV3msLCRofA',
  'travel-agency': 'bKyaFqYJn-4',
  'real-estate': 'tnXSFhWalWk',
};

// ── Per-service logo icon & brand color hint ─────────────────────────────────
const SERVICE_LOGO = {
  hvac: { icon: '❄️', label: 'HVAC' },
  roofing: { icon: '🏗️', label: 'Roofing' },
  plumbing: { icon: '🔧', label: 'Plumbing' },
  'property-management': { icon: '🏢', label: 'Property' },
  'real-estate-investors': { icon: '📈', label: 'Investments' },
  'real-estate-developers': { icon: '🏙️', label: 'Development' },
  'water-fire-restoration': { icon: '💧', label: 'Restoration' },
  electrician: { icon: '⚡', label: 'Electric' },
  landscaping: { icon: '🌿', label: 'Landscaping' },
  'garage-door': { icon: '🚪', label: 'Garage' },
  'pest-control': { icon: '🐛', label: 'Pest Control' },
  'general-contractors': { icon: '🔨', label: 'Contractors' },
  'home-builders': { icon: '🏠', label: 'Builders' },
  'solar-installers': { icon: '☀️', label: 'Solar' },
  flooring: { icon: '🪵', label: 'Flooring' },
  'tree-service': { icon: '🌳', label: 'Tree Service' },
  concrete: { icon: '🧱', label: 'Concrete' },
  fence: { icon: '🪚', label: 'Fencing' },
  moving: { icon: '📦', label: 'Moving' },
  painters: { icon: '🎨', label: 'Painting' },
  'appliance-repair': { icon: '🔌', label: 'Appliances' },
  handyman: { icon: '🛠️', label: 'Handyman' },
  'window-door': { icon: '🪟', label: 'Windows & Doors' },
  siding: { icon: '🏠', label: 'Siding' },
  'kitchen-bath-remodeling': { icon: '🛁', label: 'Remodeling' },
  'junk-removal': { icon: '🗑️', label: 'Junk Removal' },
  'pressure-washing': { icon: '💦', label: 'Pressure Washing' },
  gutter: { icon: '🌧️', label: 'Gutters' },
  chimney: { icon: '🏚️', label: 'Chimney' },
  'drain-cleaning': { icon: '🚿', label: 'Drain Cleaning' },
  irrigation: { icon: '💧', label: 'Irrigation' },
  'deck-patio': { icon: '🪑', label: 'Deck & Patio' },
  insulation: { icon: '🏡', label: 'Insulation' },
  waterproofing: { icon: '🌊', label: 'Waterproofing' },
  'glass-repair': { icon: '🪟', label: 'Glass' },
  'commercial-cleaning': { icon: '🧹', label: 'Cleaning' },
  // legacy
  electrician_legacy: { icon: '⚡', label: 'Electric' },
  plumber: { icon: '🔧', label: 'Plumbing' },
  dentist: { icon: '🦷', label: 'Dental' },
  doctor: { icon: '👨‍⚕️', label: 'Medical' },
  lawyer: { icon: '⚖️', label: 'Legal' },
  restaurant: { icon: '🍽️', label: 'Restaurant' },
  gym: { icon: '💪', label: 'Fitness' },
  spa: { icon: '💆', label: 'Spa' },
  'car-repair': { icon: '🚗', label: 'Auto' },
  cleaning: { icon: '🧹', label: 'Cleaning' },
  landscaping_legacy: { icon: '🌿', label: 'Landscaping' },
  photographer: { icon: '📸', label: 'Photography' },
  'travel-agency': { icon: '✈️', label: 'Travel' },
  'real-estate': { icon: '🏡', label: 'Real Estate' },
};

function getServiceImages(type) {
  return SERVICE_IMAGES[type] || SERVICE_IMAGES['hvac'];
}

function getServiceVideo(type) {
  return SERVICE_VIDEOS[type] || SERVICE_VIDEOS['hvac'];
}

function getServiceLogo(type) {
  return SERVICE_LOGO[type] || { icon: '🏠', label: 'Services' };
}

let selectedDesign = DESIGNS[0];
let selectedServices = [];
let generatedHTML = '';
let currentStep = 1;
let customServiceDescriptions = {}; // { serviceName: description }
let customAddedServices = []; // { name, description }
let currentLeadId = null;


// Default descriptions for all built-in services
const SERVICE_DEFAULT_DESCRIPTIONS = {
  // HVAC
  'AC Installation': 'Professional air conditioning installation with energy-efficient systems tailored to your home or business.',
  'AC Repair & Tune-Up': 'Fast diagnostics and reliable repairs to restore your AC to peak performance.',
  'Heating System Repair': 'Expert repair of all heating system types — furnaces, heat pumps, boilers, and more.',
  'Furnace Installation': 'New furnace installation with proper sizing and efficiency ratings for maximum comfort.',
  'Duct Cleaning': 'Thorough cleaning of air ducts to improve indoor air quality and system efficiency.',
  'Air Quality Testing': 'Comprehensive testing to identify allergens, pollutants, and air quality issues in your space.',
  'Thermostat Installation': 'Installation and programming of smart and programmable thermostats for optimal control.',
  'Commercial HVAC': 'Full-service HVAC solutions for commercial properties — installation, maintenance, and repair.',
  'Emergency Repair': '24/7 emergency repair service — we respond fast when you need us most.',
  'Annual Maintenance': 'Scheduled tune-ups and inspections to extend equipment life and prevent breakdowns.',
  'Ventilation Systems': 'Design and installation of ventilation systems for healthy indoor airflow.',
  'Heat Pump Service': 'Installation, repair, and servicing of all heat pump models and brands.',
  // Roofing
  'Roof Installation': 'Complete new roof installation using premium materials built to last for decades.',
  'Roof Repair': 'Fast and lasting repairs for leaks, damaged shingles, and storm-related issues.',
  'Roof Replacement': 'Full roof replacement with high-quality materials and professional installation.',
  'Waterproofing': 'Advanced waterproofing solutions to protect your roof and foundation from water damage.',
  'Gutter Cleaning': 'Thorough gutter cleaning and inspection to prevent clogs and water overflow.',
  'Roof Inspection': 'Detailed roof inspections with written reports — ideal for home purchases and insurance claims.',
  'Tile & Shingle Repair': 'Precision repair and replacement of broken or missing tiles and shingles.',
  'Skylight Installation': 'Professional skylight installation to add natural light and value to your home.',
  'Commercial Roofing': 'Durable commercial roofing systems for flat, low-slope, and metal roof applications.',
  'Emergency Tarping': 'Same-day emergency tarping to protect your property after storm or fire damage.',
  'Roof Coating': 'Protective roof coatings to extend roof life and improve energy efficiency.',
  'Storm Damage Repair': 'Rapid storm damage assessment and repair — we work with all major insurance companies.',
  // Electrician
  'Electrical Panel Upgrade': 'Safe and code-compliant electrical panel upgrades to handle modern power demands.',
  'Wiring & Rewiring': 'Complete home and commercial wiring and rewiring services by licensed electricians.',
  'Outlet Installation': 'Installation of new outlets, USB ports, and specialized circuits wherever you need them.',
  'EV Charger Installation': 'Level 1 and Level 2 EV charger installation for home and commercial properties.',
  'Generator Installation': 'Standby and portable generator installation to keep you powered during outages.',
  'Lighting Design': 'Custom lighting design and installation — recessed, accent, landscape, and smart lighting.',
  'GFCI & AFCI Installation': 'Installation of safety-grade GFCI and AFCI outlets and breakers throughout your home.',
  'Surge Protection': 'Whole-home surge protection to safeguard appliances and electronics from power spikes.',
  'Ceiling Fan Installation': 'Quick and safe ceiling fan installation and replacement in any room.',
  'Home Automation': 'Smart home automation setup — lighting, security, climate, and more from one system.',
  'Emergency Electrical': '24/7 emergency electrical service for outages, tripped breakers, and urgent repairs.',
  'Commercial Wiring': 'Full commercial electrical wiring for offices, retail, and industrial buildings.',
  // Plumbing
  'Pipe Installation': 'New pipe installation using modern materials for durability and leak-free performance.',
  'Drain Cleaning': 'Fast and effective drain cleaning to clear blockages and restore full flow.',
  'Water Heater Service': 'Water heater installation, repair, and maintenance for all types and brands.',
  'Leak Detection & Repair': 'Advanced leak detection technology to locate and fix hidden leaks with minimal disruption.',
  'Bathroom Plumbing': 'Complete bathroom plumbing services — fixtures, pipes, and drainage systems.',
  'Toilet Repair': 'Quick toilet repair and replacement services for all common issues.',
  'Sewer Line Repair': 'Sewer line inspection, cleaning, repair, and replacement by licensed plumbers.',
  'Pump Installation': 'Sump pump, well pump, and booster pump installation and maintenance.',
  'Kitchen Plumbing': 'Kitchen plumbing installation and repair — sinks, dishwashers, garbage disposals, and more.',
  'Repiping': 'Whole-house repiping with modern materials to eliminate old, corroded pipes.',
  'Water Filtration': 'Whole-home and under-sink water filtration system installation for clean, safe water.',
};

function getServiceDescription(name) {
  if (customServiceDescriptions[name]) return customServiceDescriptions[name];
  if (SERVICE_DEFAULT_DESCRIPTIONS[name]) return SERVICE_DEFAULT_DESCRIPTIONS[name];
  return `Professional ${name.toLowerCase()} services delivered with quality and care.`;
}

// ==================== INIT ====================
function init() {
  renderDesigns();
  renderServices('hvac');
  renderReviews('hvac');
  document.getElementById('bizType').addEventListener('change', function () {
    customServiceDescriptions = {};
    customAddedServices = [];
    renderServices(this.value);
    renderReviews(this.value);
    document.getElementById('bizTagline').value = getDefaultTagline(this.value);
  });
}

function getDefaultTagline(type) {
  const tags = {
    hvac: "Keeping You Comfortable Year-Round — Fast, Reliable HVAC Service",
    roofing: "Protecting Your Home from the Top Down — Expert Roofing Solutions",
    plumbing: "Fast, Reliable Plumbing Services — We Fix It Right the First Time",
    'property-management': "Stress-Free Property Management — Maximizing Your Investment Returns",
    'real-estate-investors': "Smart Investments, Maximum Returns — Your Trusted Real Estate Partner",
    'real-estate-developers': "Building Tomorrow's Communities — Premier Real Estate Development",
    'water-fire-restoration': "Rapid Response, Complete Restoration — We're Here When Disaster Strikes",
    electrician: "Licensed Electrical Experts — Safe, Reliable & Always On Time",
    landscaping: "Beautiful Outdoor Spaces, Expertly Crafted & Maintained",
    'garage-door': "Smooth, Safe & Secure — Expert Garage Door Service You Can Count On",
    'pest-control': "Protect Your Home & Family — Effective Pest Control That Lasts",
    'general-contractors': "Full-Service Construction Excellence — On Time, On Budget, Every Time",
    'home-builders': "Building Dream Homes with Precision, Quality & Care",
    'solar-installers': "Power Your Home with the Sun — Expert Solar Installation & Savings",
    flooring: "Beautiful Floors, Expert Installation — Transform Any Space",
    'tree-service': "Expert Tree Care for a Safer, More Beautiful Property",
    concrete: "Strong Foundations, Flawless Finishes — Expert Concrete Solutions",
    fence: "Define Your Space in Style — Quality Fencing Built to Last",
    moving: "Stress-Free Moving, Every Time — Trusted Local & Long-Distance Movers",
    painters: "Flawless Finishes, Vibrant Colors — Professional Painting You'll Love",
    'appliance-repair': "Fast Appliance Repair You Can Trust — Back to Running in No Time",
    handyman: "One Call Does It All — Your Reliable Neighborhood Handyman",
    'window-door': "Let the Light In — Expert Window & Door Installation & Repair",
    siding: "Stunning Curb Appeal, Maximum Protection — Expert Siding Installation",
    'kitchen-bath-remodeling': "Dream Kitchens & Beautiful Bathrooms — Expert Remodeling That Delivers",
    'junk-removal': "Fast, Eco-Friendly Junk Removal — We Haul It All, You Relax",
    'pressure-washing': "Restore Your Property's Shine — Professional Pressure Washing Services",
    gutter: "Keep Water Where It Belongs — Professional Gutter Installation & Cleaning",
    chimney: "Safe, Clean & Efficient — Expert Chimney Inspection, Sweep & Repair",
    'drain-cleaning': "Clear Drains, Happy Homes — Fast & Effective Drain Cleaning Services",
    irrigation: "Lush Lawns, Less Work — Smart Irrigation & Sprinkler Solutions",
    'deck-patio': "Expand Your Living Space — Custom Deck & Patio Designs Built to Last",
    insulation: "Stay Comfortable, Save Energy — Professional Insulation That Works",
    waterproofing: "Keep Moisture Out for Good — Expert Waterproofing You Can Rely On",
    'glass-repair': "Crystal-Clear Results — Fast, Professional Glass Repair & Installation",
    'commercial-cleaning': "Spotless Workplaces, Healthier Teams — Commercial Cleaning Done Right",
    // legacy entries kept for backward compatibility
    electrician_old: "Pune's Most Trusted Electrical Experts — Available 24/7",
    dentist: "Creating Beautiful Smiles with Gentle, Painless Care",
    doctor: "Your Health Is Our Priority — Compassionate Care You Can Trust",
    lawyer: "Protecting Your Rights with Experience, Integrity & Results",
    restaurant: "Authentic Flavors, Warm Hospitality — Where Every Meal Is a Memory",
    gym: "Transform Your Body, Transform Your Life — Join the #1 Fitness Community",
    spa: "Rejuvenate Your Body & Mind — Luxury Wellness at Its Best",
    'car-repair': "Expert Auto Care You Can Trust — Quality Service, Fair Prices",
    cleaning: "Spotless Spaces, Happy Places — Professional Cleaning You Can Trust",
    photographer: "Capturing Life's Most Precious Moments — Timeless Photography",
    'travel-agency': "Your Dream Vacation Awaits — Expertly Planned, Perfectly Executed",
    'real-estate': "Finding You the Perfect Home — Expert Real Estate Guidance",
  };
  return tags[type] || "Professional Services You Can Trust — Excellence in Every Job";
}

// ==================== NAVIGATION ====================
function goStep(n) {
  // Leaving the preview while still editing? Commit inline edits first so they
  // survive into Publish/Export instead of being silently dropped.
  if (editModeOn && currentStep === 4 && n !== 4) toggleEditMode();
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.getElementById('panel' + n).classList.add('active');
  document.querySelectorAll('.step-btn').forEach((b, i) => {
    b.classList.remove('active');
    if (i + 1 < n) b.classList.add('done'); else b.classList.remove('done');
  });
  document.getElementById('s' + n).classList.add('active');
  document.getElementById('hdr-step').textContent = 'Step ' + n + ' of 5';
  currentStep = n;
  window.scrollTo(0, 0);
}

// ==================== DESIGNS ====================
function renderDesigns(filter = '', cat = 'all') {
  const grid = document.getElementById('designsGrid');
  let list = DESIGNS;
  if (cat !== 'all') list = list.filter(d => d.cat === cat);
  if (filter) list = list.filter(d => d.name.toLowerCase().includes(filter.toLowerCase()) || d.tag.toLowerCase().includes(filter.toLowerCase()));

  grid.innerHTML = list.map(d => {
    const tc = d.dark ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.8)';
    const tc2 = d.dark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.3)';
    return `
    <div class="design-card ${selectedDesign.id === d.id ? 'selected' : ''}" onclick="selectDesign('${d.id}')" id="dc-${d.id}">
      <div class="design-preview prev-${d.id}" style="position:relative;">
        <div class="thumb-nav" style="background:rgba(0,0,0,0.15)">
          <div class="thumb-logo" style="background:${d.accent};color:${d.dark ? '#000' : '#fff'}">SF</div>
          <div class="thumb-links">
            <div class="thumb-link" style="background:${tc}"></div>
            <div class="thumb-link" style="background:${tc}"></div>
            <div class="thumb-link" style="background:${d.accent}"></div>
          </div>
        </div>
        <div class="thumb-hero">
          <div class="thumb-h1" style="width:70%;background:${tc}"></div>
          <div class="thumb-h1" style="width:50%;background:${tc}"></div>
          <div class="thumb-h2" style="width:60%;background:${tc2}"></div>
          <div class="thumb-btn" style="width:80px;background:${d.accent};color:${d.dark ? '#000' : '#fff'}">BOOK NOW</div>
        </div>
        <div class="thumb-cards">
          <div class="thumb-card" style="background:${d.accent}30;border:1px solid ${d.accent}50"></div>
          <div class="thumb-card" style="background:${tc}10;border:1px solid ${tc}20"></div>
          <div class="thumb-card" style="background:${tc}10;border:1px solid ${tc}20"></div>
        </div>
        <div class="design-select-badge">✓ Selected</div>
      </div>
      <div class="design-meta">
        <div class="design-name">${d.name}</div>
        <div class="design-tag">${d.tag}</div>
      </div>
    </div>`;
  }).join('');
}

function selectDesign(id) {
  selectedDesign = DESIGNS.find(d => d.id === id);
  document.querySelectorAll('.design-card').forEach(c => c.classList.remove('selected'));
  const el = document.getElementById('dc-' + id);
  if (el) el.classList.add('selected');
}
function filterDesigns(val) { renderDesigns(val); }
function filterCat(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderDesigns('', cat);
}

// ==================== SERVICES ====================
function renderServices(type) {
  const services = SERVICES_MAP[type] || SERVICES_MAP['electrician'];
  selectedServices = services.slice(0, 6);
  // re-add any custom services to selection if they exist
  customAddedServices.forEach(cs => { if (!selectedServices.includes(cs.name)) selectedServices.push(cs.name); });
  rebuildServicesGrid(services);
  updateServiceCount();
}

function rebuildServicesGrid(builtinServices) {
  const type = document.getElementById('bizType').value;
  const services = builtinServices || SERVICES_MAP[type] || SERVICES_MAP['electrician'];
  const grid = document.getElementById('servicesGrid');
  const allServices = [...services, ...customAddedServices.map(cs => cs.name)];
  grid.innerHTML = allServices.map(s => {
    const isCustom = customAddedServices.some(cs => cs.name === s);
    const desc = getServiceDescription(s);
    const hasCustomDesc = !!customServiceDescriptions[s];
    return `<div class="service-tag-wrap">
      <div class="service-tag ${selectedServices.includes(s) ? 'selected' : ''}" onclick="toggleService(this,'${s.replace(/'/g, "\\'")}')">
        ${s}${isCustom ? '<span class="custom-badge">custom</span>' : ''}
      </div>
      <button class="edit-desc-btn ${hasCustomDesc ? 'edited' : ''}" onclick="openEditDesc('${s.replace(/'/g, "\\'")}',event)" title="${desc.replace(/"/g, '&quot;')}"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg></button>
      ${isCustom ? `<button class="remove-svc-btn" onclick="removeCustomService('${s.replace(/'/g, "\\'")}',event)" title="Remove service">✕</button>` : ''}
    </div>`;
  }).join('') + `<button class="add-service-btn" onclick="openAddService()">+ Add Service</button>`;
  updateServiceCount();
}

function toggleService(el, service) {
  const tag = el.closest ? el : el;
  if (selectedServices.includes(service)) {
    selectedServices = selectedServices.filter(s => s !== service);
    el.classList.remove('selected');
  } else {
    selectedServices.push(service);
    el.classList.add('selected');
  }
  updateServiceCount();
}
function updateServiceCount() { document.getElementById('serviceCount').textContent = selectedServices.length; }

// ==================== EDIT SERVICE DESCRIPTION ====================
function openEditDesc(name, evt) {
  evt.stopPropagation();
  const currentDesc = getServiceDescription(name);
  document.getElementById('editDescServiceName').textContent = name;
  document.getElementById('editDescInput').value = currentDesc;
  document.getElementById('editDescDefault').textContent = SERVICE_DEFAULT_DESCRIPTIONS[name] || `Professional ${name.toLowerCase()} services delivered with quality and care.`;
  document.getElementById('editDescModal').dataset.service = name;
  document.getElementById('editDescModal').style.display = 'flex';
}
function saveEditDesc() {
  const modal = document.getElementById('editDescModal');
  const name = modal.dataset.service;
  const val = document.getElementById('editDescInput').value.trim();
  const def = SERVICE_DEFAULT_DESCRIPTIONS[name] || `Professional ${name.toLowerCase()} services delivered with quality and care.`;
  if (val && val !== def) customServiceDescriptions[name] = val;
  else delete customServiceDescriptions[name];
  closeEditDesc();
  const type = document.getElementById('bizType').value;
  rebuildServicesGrid();
}
function resetEditDesc() {
  const name = document.getElementById('editDescModal').dataset.service;
  delete customServiceDescriptions[name];
  const def = SERVICE_DEFAULT_DESCRIPTIONS[name] || `Professional ${name.toLowerCase()} services delivered with quality and care.`;
  document.getElementById('editDescInput').value = def;
}
function closeEditDesc() { document.getElementById('editDescModal').style.display = 'none'; }

// ==================== ADD CUSTOM SERVICE ====================
function openAddService() {
  document.getElementById('addServiceName').value = '';
  document.getElementById('addServiceDesc').value = '';
  document.getElementById('addServiceModal').style.display = 'flex';
  setTimeout(() => document.getElementById('addServiceName').focus(), 100);
}
function saveAddService() {
  const name = document.getElementById('addServiceName').value.trim();
  const desc = document.getElementById('addServiceDesc').value.trim();
  if (!name) { alert('Please enter a service name.'); return; }
  if (customAddedServices.some(cs => cs.name === name)) { alert('Service already exists.'); return; }
  customAddedServices.push({ name, description: desc || `Professional ${name.toLowerCase()} services delivered with quality and care.` });
  if (desc) customServiceDescriptions[name] = desc;
  selectedServices.push(name);
  closeAddService();
  rebuildServicesGrid();
}
function removeCustomService(name, evt) {
  evt.stopPropagation();
  customAddedServices = customAddedServices.filter(cs => cs.name !== name);
  selectedServices = selectedServices.filter(s => s !== name);
  delete customServiceDescriptions[name];
  rebuildServicesGrid();
}
function closeAddService() { document.getElementById('addServiceModal').style.display = 'none'; }

// ==================== REVIEWS ====================
function renderReviews(type) {
  const reviews = (REVIEWS_MAP[type] || REVIEWS_MAP['default']).slice(0, 3);
  document.getElementById('reviewsContainer').innerHTML = reviews.map(r => `
    <div class="review-card">
      <div class="review-meta">
        <div class="review-avatar">${r.name[0]}</div>
        <div><div class="review-name">${r.name}</div><div class="review-stars">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</div></div>
      </div>
      <div class="review-text">${r.text}</div>
    </div>
  `).join('');
}

// ==================== DEMO DATA ====================
function loadDemo() {
  document.getElementById('bizName').value = 'ProComfort HVAC';
  document.getElementById('bizType').value = 'hvac';
  document.getElementById('bizPhone').value = '+1 (555) 234-5678';
  document.getElementById('bizEmail').value = 'service@procomforthvac.com';
  document.getElementById('bizCity').value = 'Dallas, TX';
  document.getElementById('bizRating').value = '4.9';
  document.getElementById('bizAddress').value = '450 Commerce St, Suite 200, Dallas, TX 75202';
  document.getElementById('bizTagline').value = "Keeping Dallas Comfortable Year-Round — Fast, Reliable HVAC Service";
  document.getElementById('bizYears').value = '18';
  document.getElementById('bizReviews').value = '512';
  document.getElementById('bizHours').value = 'Mon–Fri: 7AM–9PM, Sat–Sun: 8AM–6PM';
  document.getElementById('bizTeam').value = '24';
  document.getElementById('bizProjects').value = '4800';
  document.getElementById('bizFb').value = 'https://facebook.com/demo';
  document.getElementById('bizIg').value = 'https://instagram.com/demo';
  document.getElementById('bizGoogle').value = 'https://g.page/r/demo';
  document.getElementById('bizGa').value = 'G-DEMO123456';
  document.getElementById('bizPixel').value = '123456789';
  renderServices('hvac');
  renderReviews('hvac');
  showToast('✓ Demo data loaded!');
}

// ==================== UTILS & GET DATA ====================
function escapeHTML(str) {
  if (!str) return '';
  return str.replace(/[&<>'"]/g, tag => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  }[tag]));
}
function sanitizeUrl(url) {
  if (!url) return '';
  if (!url.startsWith('http://') && !url.startsWith('https://')) return 'https://' + url;
  return url;
}
function sanitizeID(id) {
  if (!id) return '';
  return id.replace(/[^a-zA-Z0-9\-_]/g, '');
}

function getBizData() {
  const getVal = id => document.getElementById(id) ? document.getElementById(id).value : '';
  const ts = document.getElementById('bizType');
  return {
    name: escapeHTML(getVal('bizName')) || 'My Business',
    type: escapeHTML(getVal('bizType')) || 'Service',
    typeLabel: ts && ts.selectedIndex >= 0 ? escapeHTML(ts.options[ts.selectedIndex].text) : 'Service',
    phone: escapeHTML(getVal('bizPhone')) || '555-0192',
    email: escapeHTML(getVal('bizEmail')) || 'contact@mybusiness.com',
    city: escapeHTML(getVal('bizCity')) || 'Cityville',
    rating: escapeHTML(getVal('bizRating')) || '4.9',
    address: escapeHTML(getVal('bizAddress')) || '123 Main St',
    tagline: escapeHTML(getVal('bizTagline')) || 'Quality Service Guaranteed',
    years: escapeHTML(getVal('bizYears')) || '10',
    reviews: escapeHTML(getVal('bizReviews')) || '150',
    hours: escapeHTML(getVal('bizHours')) || 'Mon-Fri 8am-6pm',
    emergency: escapeHTML(getVal('bizEmergency')) || 'no',
    team: escapeHTML(getVal('bizTeam')) || '5',
    projects: escapeHTML(getVal('bizProjects')) || '1000',
    fb: sanitizeUrl(getVal('bizFb')),
    ig: sanitizeUrl(getVal('bizIg')),
    google: sanitizeUrl(getVal('bizGoogle')),
    ga: sanitizeID(getVal('bizGa')),
    pixel: sanitizeID(getVal('bizPixel')),
    domain: escapeHTML(getVal('bizDomain')),
    services: selectedServices,
    serviceDescriptions: Object.fromEntries(selectedServices.map(s => [s, getServiceDescription(s)])),
  };
}

// ==================== GENERATE ====================
function generatePreview() {
  const biz = getBizData();
  if (!biz.name) { alert('Please enter a business name.'); return; }
  showLoading('Generating website...', 'Building ' + selectedDesign.name + ' design with 6 pages');
  goStep(4);
  setTimeout(() => {
    generatedHTML = buildWebsite(biz, selectedDesign);
    const frame = document.getElementById('previewFrame');
    frame.srcdoc = generatedHTML;
    resetEditMode(); // fresh preview replaces any prior inline edits
    document.getElementById('statDesign').textContent = selectedDesign.name;
    document.getElementById('statServices').textContent = biz.services.length;
    document.getElementById('statRating').textContent = biz.rating + '★';
    document.getElementById('iframeTitle').textContent = biz.name + ' — ' + selectedDesign.name;
    hideLoading();
    storeLead(biz);
  }, 900);
}

function storeLead(biz) {
  fetch('/website-builder/api/lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      biz_name: biz.name,
      biz_email: biz.email,
      biz_phone: biz.phone,
      biz_type: biz.type,
      biz_city: biz.city,
      biz_address: biz.address || '',
      services: biz.services,
      design: selectedDesign.name,
      business_data: biz,
      user_email: biz.email
    })
  }).then(r => r.json()).then(d => {
    if (d.success && d.id) currentLeadId = d.id;
  }).catch(() => { });
}

// ==================== CMS TAGGING ====================
const CMS_EDITOR_SCRIPT = `/* CMS Content Editor */(function(){var editMode=false,originalData={};var API_BASE=window.CMS_CONFIG&&window.CMS_CONFIG.apiBase||'';function loadContent(){return fetch('content.json').then(function(r){if(!r.ok)throw new Error('content.json not found');return r.json()}).then(function(d){originalData=d;applyContent(d)}).catch(function(){originalData=readFromDOM()})}function applyContent(d){document.querySelectorAll('[data-cms]').forEach(function(el){var k=el.getAttribute('data-cms');if(d[k]!==undefined)el.textContent=d[k]});document.querySelectorAll('[data-cms-img]').forEach(function(el){var k=el.getAttribute('data-cms-img');if(d[k]!==undefined)el.setAttribute('src',d[k])})}function readFromDOM(){var d={};document.querySelectorAll('[data-cms]').forEach(function(el){d[el.getAttribute('data-cms')]=el.textContent.trim()});document.querySelectorAll('[data-cms-img]').forEach(function(el){d[el.getAttribute('data-cms-img')]=el.getAttribute('src')});return d}function buildUI(){var bar=document.createElement('div');bar.id='cms-toolbar';bar.style.cssText='position:fixed;bottom:20px;left:20px;z-index:99999;display:flex;gap:10px;font-family:sans-serif;';var editBtn=document.createElement('button');editBtn.id='cms-edit-btn';editBtn.textContent='Edit Content';styleBtn(editBtn,'#1c1917');var saveBtn=document.createElement('button');saveBtn.id='cms-save-btn';saveBtn.textContent='Publish';styleBtn(saveBtn,'#15803d');saveBtn.style.display='none';bar.appendChild(editBtn);bar.appendChild(saveBtn);document.body.appendChild(bar);editBtn.addEventListener('click',function(){editMode=!editMode;toggleEdit(editMode);editBtn.textContent=editMode?'Preview':'Edit Content';saveBtn.style.display=editMode?'inline-flex':'none'});saveBtn.addEventListener('click',function(){saveBtn.textContent='Publishing...';saveBtn.disabled=true;publishCMS().then(function(){saveBtn.textContent='Published';showToast('Content published!','success');setTimeout(function(){saveBtn.textContent='Publish';saveBtn.disabled=false},2000)}).catch(function(e){saveBtn.textContent='Error';showToast('Publish failed: '+e.message,'error');setTimeout(function(){saveBtn.textContent='Publish';saveBtn.disabled=false},2000)})})}function styleBtn(b,c){b.style.cssText='padding:10px 20px;border:none;border-radius:8px;color:white;font-weight:600;cursor:pointer;font-size:14px;background:'+c}function toggleEdit(on){document.querySelectorAll('[data-cms]').forEach(function(el){el.contentEditable=on;el.style.outline=on?'2px dashed #3b82f6':'';el.style.borderRadius=on?'4px':''});document.querySelectorAll('[data-cms-img]').forEach(function(el){el.style.cursor=on?'pointer':'';if(on){el.onclick=function(){var url=prompt('Image URL:',el.src);if(url)el.src=url}}else{el.onclick=null}})}function publishCMS(){var data=readFromDOM();return fetch(API_BASE+'/api/publish/cms',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({slug:window.location.pathname.split('/').filter(Boolean).pop(),contentJson:data})}).then(function(r){return r.json()}).then(function(d){if(!d.success)throw new Error(d.error||'Publish failed')})}loadContent();buildUI()})();`;

const CMS_TAGS = ['h1','h2','h3','h4','h5','p','span','a','button','label'];

function tagHTMLForCMS(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const mapping = {};
  const counters = {};

  function sectionPrefix(el) {
    let node = el.parentElement;
    while (node && node !== doc.body) {
      if (node.tagName === 'SECTION' || node.tagName === 'DIV') {
        if (node.id) return node.id.replace(/[^a-z0-9]+/gi, '_').replace(/^_|_$/g, '').toLowerCase();
        if (node.className && typeof node.className === 'string') {
          const cls = node.className.split(/\s+/)[0];
          if (cls && cls !== 'container' && cls !== 'view') return cls.replace(/[^a-z0-9]+/gi, '_').replace(/^_|_$/g, '').toLowerCase();
        }
      }
      node = node.parentElement;
    }
    return 'misc';
  }

  function ownText(el) {
    let txt = '';
    el.childNodes.forEach(c => {
      if (c.nodeType === 3) txt += c.textContent;
      else if (c.nodeType === 1 && c.tagName !== 'SVG') txt += c.textContent;
    });
    return txt.replace(/\s+/g, ' ').trim();
  }

  function isComposite(el) {
    for (const c of el.childNodes) {
      if (c.nodeType === 1 && c.tagName !== 'SVG' && c.children && c.children.length > 0) return true;
    }
    return false;
  }

  CMS_TAGS.forEach(tag => {
    doc.querySelectorAll(tag).forEach(el => {
      if (el.getAttribute('data-cms')) return;
      if (isComposite(el)) return;
      const txt = ownText(el);
      if (!txt) return;
      const prefix = sectionPrefix(el);
      const keyBase = prefix + '__' + tag;
      counters[keyBase] = (counters[keyBase] || 0) + 1;
      const key = keyBase + '_' + counters[keyBase];
      el.setAttribute('data-cms', key);
      mapping[key] = txt;
    });
  });

  const imgCounters = {};
  doc.querySelectorAll('img').forEach(img => {
    const src = img.getAttribute('src');
    if (!src) return;
    const prefix = sectionPrefix(img);
    imgCounters[prefix] = (imgCounters[prefix] || 0) + 1;
    const key = prefix + '__img_' + imgCounters[prefix];
    img.setAttribute('data-cms-img', key);
    mapping[key] = src;
  });

  let tagged = '<!DOCTYPE html>\n' + doc.documentElement.outerHTML;
  tagged = tagged.replace('</body>', '<script>window.CMS_CONFIG={apiBase:window.location.origin+"/website-builder"}</script>\n<script src="cms-editor.js"></script>\n</body>');

  return { tagged, contentJson: mapping };
}

// ==================== PUBLISH ====================
async function publishSite() {
  if (!generatedHTML) { alert('Please generate a preview first!'); return; }
  const biz = getBizData();
  if (!biz.name) { alert('Business name is required'); return; }

  const slug = biz.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const el = document.getElementById('publishResult');
  const btn = document.getElementById('publishBtn');
  el.style.display = 'block';
  el.textContent = 'Saving & publishing to GitHub Pages...';
  el.style.color = 'var(--text-secondary)';
  btn.disabled = true;

  // Auto-save before publish — must succeed so project_id is set
  try {
    await saveProject();
  } catch (_) { /* saveProject shows its own toast */ }

  if (!currentProjectId) {
    el.textContent = 'Save failed — cannot publish without a saved project.';
    el.style.color = 'var(--danger)';
    btn.disabled = false;
    return;
  }

  try {
    const { tagged, contentJson } = tagHTMLForCMS(generatedHTML);
    const contentJsonStr = JSON.stringify(contentJson, null, 2);

    const res = await fetch('/website-builder/api/publish', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        slug,
        user_email: window.__AUTH_EMAIL__ || '',
        project_id: currentProjectId,
        files: {
          'index.html': tagged,
          'content.json': contentJsonStr,
          'cms-editor.js': CMS_EDITOR_SCRIPT
        }
      })
    });
    const data = await res.json();
    if (data.success) {
      el.innerHTML = 'Published! <a href="' + data.url + '" target="_blank">' + data.url + '</a>';
      el.style.color = 'var(--success)';
      btn.textContent = 'Published ✓';
      // Update project record with live URL
      if (currentProjectId) {
        fetch(API_BASE, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: currentProjectId, user_email: window.__AUTH_EMAIL__ || '', site_url: data.url, published: true })
        }).catch(() => { });
      }
      if (currentLeadId) {
        fetch('/website-builder/api/lead', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: currentLeadId, site_url: data.url })
        }).catch(() => { });
      }
    } else {
      el.textContent = 'Publish failed: ' + (data.error?.message || data.message || 'Unknown error');
      el.style.color = 'var(--danger)';
      btn.disabled = false;
    }
  } catch (err) {
    el.textContent = 'Publish failed: ' + err.message;
    el.style.color = 'var(--danger)';
    btn.disabled = false;
  }
}

// ==================== PROJECT SAVE/LOAD ====================
const API_BASE = '/website-builder/api/projects';

async function saveProject() {
  const email = window.__AUTH_EMAIL__;
  if (!email) { showToast('Please sign in to save'); return; }
  const biz = getBizData();
  if (!biz.name) { showToast('Enter a business name first'); return; }
  const btn = document.getElementById('saveBtn');
  btn.disabled = true;
  btn.textContent = 'Saving...';
  try {
    const payload = {
      user_email: email,
      project_name: biz.name,
      business_data: biz,
      services: selectedServices,
      design_id: selectedDesign.id,
    };
    // If we already have a project ID, include it so server does UPDATE instead of INSERT
    if (currentProjectId) payload.id = currentProjectId;
    const res = await fetch(API_BASE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const d = await res.json();
    if (d.success) {
      currentProjectId = d.id;
      showToast('✓ Project saved');
    } else {
      showToast('Save failed: ' + (d.error || 'Unknown'));
    }
  } catch (err) {
    showToast('Save failed: ' + err.message);
  } finally {
    btn.disabled = false;
    btn.textContent = 'Save';
  }
}

let currentProjectId = null;

async function showProjectsModal() {
  const email = window.__AUTH_EMAIL__;
  if (!email) { showToast('Please sign in to view projects'); return; }
  const modal = document.getElementById('projectsModal');
  const list = document.getElementById('projectsList');
  modal.style.display = 'flex';
  list.innerHTML = '<p style="color:var(--text-secondary);font-size:13px">Loading...</p>';
  try {
    const res = await fetch(API_BASE + '?email=' + encodeURIComponent(email));
    const d = await res.json();
    if (!d.projects || d.projects.length === 0) {
      list.innerHTML = '<p style="color:var(--text-secondary);font-size:13px;text-align:center;padding:20px 0">No projects yet — create a website and click Save.</p>';
      return;
    }
    list.innerHTML = d.projects.map(p => `
      <div style="display:flex;align-items:center;justify-content:space-between;padding:12px;border:1px solid var(--border);border-radius:8px;margin-bottom:8px;cursor:pointer" onclick="loadProject('${p.id}')">
        <div>
          <div style="font-weight:600;font-size:14px">${escapeHTML(p.project_name)}</div>
          <div style="font-size:12px;color:var(--text-secondary);margin-top:2px">${p.design_id || '—'} · ${new Date(p.updated_at || p.created_at).toLocaleDateString()}</div>
        </div>
        <button class="btn btn-secondary" style="padding:4px 10px;font-size:11px" onclick="event.stopPropagation();deleteProject('${p.id}')">Delete</button>
      </div>
    `).join('');
  } catch (err) {
    list.innerHTML = '<p style="color:var(--danger);font-size:13px">Failed to load projects</p>';
  }
}

function closeProjectsModal() {
  document.getElementById('projectsModal').style.display = 'none';
}

async function loadProject(id) {
  const email = window.__AUTH_EMAIL__;
  if (!email) return;
  try {
    const res = await fetch(API_BASE + '?id=' + id + '&user_email=' + encodeURIComponent(email));
    const d = await res.json();
    if (!d.project) { showToast('Project not found'); return; }
    const p = d.project;
    // Restore form fields
    if (p.business_data) {
      const biz = p.business_data;
      setVal('bizName', biz.name);
      setVal('bizType', biz.type);
      setVal('bizPhone', biz.phone);
      setVal('bizEmail', biz.email);
      setVal('bizCity', biz.city);
      setVal('bizAddress', biz.address);
      setVal('bizTagline', biz.tagline);
      setVal('bizYears', biz.years);
      setVal('bizReviews', biz.reviews);
      setVal('bizHours', biz.hours);
      setVal('bizRating', biz.rating);
      setVal('bizTeam', biz.team);
      setVal('bizProjects', biz.projects);
      setVal('bizEmergency', biz.emergency);
      setVal('bizFb', biz.fb);
      setVal('bizIg', biz.ig);
      setVal('bizGoogle', biz.google);
      setVal('bizGa', biz.ga);
      setVal('bizPixel', biz.pixel);
      setVal('bizDomain', biz.domain);
    }
    // Restore services
    if (p.services) {
      selectedServices = Array.isArray(p.services) ? p.services : [];
      rebuildServicesGrid();
    }
    // Restore design
    if (p.design_id) {
      selectedDesign = DESIGNS.find(d => d.id === p.design_id) || DESIGNS[0];
      renderDesigns();
    }
    // Restore generated HTML
    if (p.generated_html) {
      generatedHTML = p.generated_html;
      const frame = document.getElementById('previewFrame');
      if (frame) frame.srcdoc = generatedHTML;
    }
    currentProjectId = p.id;
    closeProjectsModal();
    goStep(1);
    showToast('✓ Project loaded');
  } catch (err) {
    showToast('Load failed: ' + err.message);
  }
}

async function deleteProject(id) {
  if (!confirm('Delete this project?')) return;
  const email = window.__AUTH_EMAIL__;
  try {
    await fetch(API_BASE, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, user_email: email })
    });
    showToast('✓ Project deleted');
    showProjectsModal(); // refresh list
  } catch (err) {
    showToast('Delete failed');
  }
}

function setVal(id, val) {
  const el = document.getElementById(id);
  if (el && val != null) el.value = val;
}

// ==================== INLINE EDIT MODE ====================
// The preview is a same-origin srcdoc iframe, so we can make its document
// directly editable. On exit we serialize the edited document back into
// `generatedHTML` so Publish / Export / Copy / Open Full all use the edits.
let editModeOn = false;

// Reset the Edit button/flag (e.g. when the preview is regenerated or the user
// leaves step 4). Does NOT serialize edits — a fresh srcdoc replaces them anyway.
function resetEditMode() {
  editModeOn = false;
  const editBtn = document.getElementById('editBtn');
  if (editBtn) {
    editBtn.textContent = '✏️ Edit';
    editBtn.classList.remove('btn-primary');
    editBtn.classList.add('btn-green');
  }
}

function toggleEditMode() {
  const frame = document.getElementById('previewFrame');
  const doc = frame && frame.contentDocument;
  if (!generatedHTML || !doc || !doc.body) {
    alert('Please generate a preview first!');
    return;
  }

  editModeOn = !editModeOn;
  const editBtn = document.getElementById('editBtn');

  if (editModeOn) {
    // Whole document becomes editable; images get click-to-replace.
    doc.designMode = 'on';
    doc.body.setAttribute('data-editing', 'true');
    enableImageEditing(doc);
    editBtn.textContent = '✓ Done Editing';
    editBtn.classList.remove('btn-green');
    editBtn.classList.add('btn-primary');
    showToast('✏️ Edit mode on — click any text to edit, click an image to replace it');
  } else {
    doc.designMode = 'off';
    doc.body.removeAttribute('data-editing');
    disableImageEditing(doc);
    // Sync edits back into the source of truth used by every downstream action.
    generatedHTML = '<!DOCTYPE html>\n' + doc.documentElement.outerHTML;
    editBtn.textContent = '✏️ Edit';
    editBtn.classList.remove('btn-primary');
    editBtn.classList.add('btn-green');
    showToast('✓ Changes saved — Publish or Export to keep them');
  }
}

function _imgReplaceHandler(e) {
  // designMode leaves images selectable but not "clickable"; intercept here.
  e.preventDefault();
  e.stopPropagation();
  const img = e.currentTarget;
  const next = prompt('Paste a new image URL:', img.getAttribute('src') || '');
  if (next && next.trim()) img.setAttribute('src', next.trim());
}

function enableImageEditing(doc) {
  doc.querySelectorAll('img').forEach((img) => {
    img.style.outline = '2px dashed var(--orange, #f97316)';
    img.style.cursor = 'pointer';
    img.addEventListener('click', _imgReplaceHandler, true);
  });
}

function disableImageEditing(doc) {
  doc.querySelectorAll('img').forEach((img) => {
    img.style.outline = '';
    img.style.cursor = '';
    img.removeEventListener('click', _imgReplaceHandler, true);
  });
}

// ==================== WEBSITE BUILDER ====================
// Each design has a completely different layout, structure and styling

const SVGS = {
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:28px;height:28px"><polyline points="20 6 9 17 4 12"></polyline></svg>',
  zap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:28px;height:28px"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
  tool: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:28px;height:28px"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:28px;height:28px"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
  star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:28px;height:28px"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:28px;height:28px"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
  droplet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:28px;height:28px"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:28px;height:28px"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:28px;height:28px"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:32px;height:32px"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>',
  camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:28px;height:28px"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>',
  car: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:28px;height:28px"><rect x="3" y="10" width="18" height="10" rx="2" ry="2"></rect><path d="M5 10l2-6h10l2 6"></path><circle cx="7" cy="17" r="1"></circle><circle cx="17" cy="17" r="1"></circle></svg>'
};

function getServiceIcon(service) {
  const s = service.toLowerCase();
  if (s.includes('wire') || s.includes('electric') || s.includes('panel')) return SVGS.zap;
  if (s.includes('plumb') || s.includes('pipe') || s.includes('drain') || s.includes('water')) return SVGS.droplet;
  if (s.includes('home') || s.includes('civil') || s.includes('roof')) return SVGS.home;
  if (s.includes('photo') || s.includes('cctv')) return SVGS.camera;
  if (s.includes('car') || s.includes('engine') || s.includes('dent')) return SVGS.car;
  if (s.includes('repair') || s.includes('install') || s.includes('fix')) return SVGS.tool;
  if (s.includes('clean') || s.includes('health') || s.includes('check')) return SVGS.check;
  return SVGS.check;
}

function getWhyIcon(title) {
  const t = title.toLowerCase();
  if (t.includes('expert') || t.includes('team')) return SVGS.user;
  if (t.includes('fast') || t.includes('quick') || t.includes('response')) return SVGS.zap;
  if (t.includes('insur') || t.includes('guarantee') || t.includes('warrant')) return SVGS.shield;
  if (t.includes('rate') || t.includes('quality')) return SVGS.star;
  if (t.includes('time') || t.includes('24/7') || t.includes('hours')) return SVGS.clock;
  return SVGS.check;
}

function getServiceDescription(service, type) {
  return `Professional ${service.toLowerCase()} services with certified experts, guaranteed quality, and transparent pricing. Available across ${type === 'electrician' ? 'residential & commercial' : 'all areas'}.`;
}

function getPortfolioItems(biz, imgs) {
  const titles = [
    `${biz.type.charAt(0).toUpperCase() + biz.type.slice(1)} Project — Residential`,
    `Commercial ${biz.services[0] || 'Service'} Installation`,
    `Emergency ${biz.type} Work`,
    `Premium ${biz.services[1] || 'Service'} Setup`,
  ];
  return imgs.portfolio.map((img, i) => ({ img, title: titles[i] || `Project ${i + 1}`, year: 2024 - i }));
}

function buildWebsite(biz, design) {
  const reviews = REVIEWS_MAP[biz.type] || REVIEWS_MAP['default'];
  const imgs = getServiceImages(biz.type);
  const video = getServiceVideo(biz.type);
  const logo = getServiceLogo(biz.type);
  const portfolioItems = getPortfolioItems(biz, imgs);
  const typeName = biz.typeLabel || biz.type.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const imgBase = 'https://images.unsplash.com/';
  const unsplashParams = '?auto=format&fit=crop&w=800&q=80';
  const unsplashParamsSm = '?auto=format&fit=crop&w=400&q=80';

  // FAQ items based on service type
  const faqItems = [
    [`Are you available on weekends?`, `Yes! We operate ${biz.hours}. ${biz.emergency === 'yes' ? 'For genuine emergencies, we are available 24/7 including holidays.' : ''}`],
    [`Do you provide a service guarantee?`, `Absolutely. All our ${biz.type} services come with a 30-day workmanship guarantee. If you're not satisfied, we return and fix it at no cost.`],
    [`How quickly can you arrive?`, `For standard bookings in ${biz.city}, we confirm within 2 hours. For emergency calls, we typically arrive within 45–60 minutes.`],
    [`Are your professionals certified?`, `Yes, all our ${typeName} professionals are fully certified, background-verified, and carry valid licenses. We only employ trained specialists.`],
    [`What areas do you serve?`, `We serve all major areas across ${biz.city} and surrounding regions. Contact us to confirm coverage in your specific location.`],
    [`How is pricing determined?`, `We provide transparent, upfront quotes after a brief assessment. No hidden charges. Our pricing is competitive and we offer service packages for regular clients.`],
  ];

  // Build the complete multipage website per design
  return buildDesignTemplate(biz, design, reviews, imgs, portfolioItems, faqItems, typeName, imgBase, unsplashParams, unsplashParamsSm, video, logo);
}

function buildDesignTemplate(biz, design, reviews, imgs, portfolioItems, faqItems, typeName, imgBase, imgP, imgPs, video, logo) {
  const D = design;
  const isDark = D.dark;
  const A = D.accent; // accent color
  const BG = D.bg;
  const TC = D.text;
  const heroImg = resolveImageUrl(imgs.hero, imgP);
  const aboutImg = resolveImageUrl(imgs.about, imgP);

  // Shared page navigation script (SPA)
  const navScript = `
function showPage(id) {
  document.querySelectorAll('.sf-page').forEach(p => p.style.display='none');
  document.getElementById('page-'+id).style.display='block';
  document.querySelectorAll('.sf-nav-link').forEach(l => l.classList.remove('active'));
  const el = document.querySelector('[data-page="'+id+'"]');
  if(el) el.classList.add('active');
  window.scrollTo(0,0);
  document.getElementById('mob-menu').style.display='none';
  const o = document.getElementById('mob-menu-overlay');
  if(o) o.style.display='none';
}
function toggleMob() {
  const m = document.getElementById('mob-menu');
  const o = document.getElementById('mob-menu-overlay');
  const show = m.style.display==='flex';
  m.style.display = show ? 'none' : 'flex';
  if(o) o.style.display = show ? 'none' : 'block';
}
function submitForm(btn) {
  btn.textContent = '✓ Request Sent!';
  btn.style.opacity='0.7';
  btn.nextElementSibling.style.display='block';
}
function toggleFaq(el) {
  const ans = el.nextElementSibling;
  ans.style.display = ans.style.display==='block' ? 'none' : 'block';
  el.querySelector('.faq-icon').textContent = ans.style.display==='block' ? '−' : '+';
}
`;

  // Choose the design-specific template builder
  const builders = {
    'modern-minimal': buildModernMinimal,
    'modern-dark': buildModernDark,
    'glassmorphism': buildGlassmorphism,
    'premium-luxury': buildPremiumLuxury,
    'corporate': buildCorporate,
    'classic-elegant': buildClassicElegant,
    'real-estate': buildRealEstate,
    'saas-modern': buildSaasModern,
    'cyberpunk': buildCyberpunk,
    'neobrutalism': buildNeobrutalism,
    'neumorphism': buildNeumorphism,
    'retro': buildRetro,
    'ai-startup': buildAiStartup,
    'agency': buildAgency,
    'fintech': buildFintech,
    'bold-color': buildBoldColor,
    'minimalist-bw': buildMinimalistBW,
    'magazine': buildMagazine,
    'tech-startup': buildTechStartup,
    'warm-local': buildWarmLocal,
    'bio-organic': buildBioOrganic,
    'holographic': buildHolographic,
    'portfolio': buildPortfolioDark,
    'sports': buildSports,
    'medical': buildMedical,
    'restaurant-dark': buildRestaurantDark,
    'wedding': buildWedding,
    'law': buildLaw,
    'education': buildEducation,
    'automotive': buildAutomotive,
  };

  const builder = builders[D.id] || buildModernMinimal;
  return builder(biz, D, reviews, imgs, portfolioItems, faqItems, typeName, imgBase, imgP, imgPs, navScript);
}

// ==================== TEMPLATE 1: MODERN MINIMAL ====================
// ==================== SHARED WRAPPER FOR REMAINING 28 DESIGNS ====================
// For designs 3-30, we use a sophisticated shared multi-layout engine that generates
// genuinely different structure based on layout type

function wrapPage(D, content) {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Website Preview</title></head><body>${content}</body></html>`;
}

// Generic multipage builder for designs 3-30 with truly different structures
function buildGenericMultipage(biz, D, reviews, imgs, portfolio, faqs, typeName, IB, IP, IPS, NAV, options) {
  const {
    bodyFont = "'Segoe UI',system-ui,sans-serif",
    headFont = null,
    A = D.accent,
    BG = D.bg,
    TC = D.text,
    isDark = D.dark,
    navStyle = 'standard', // standard | centered | sidebar | magazine | minimal
    heroStyle = 'centered', // centered | split | fullscreen | diagonal | cards | overlap
    cardStyle = 'flat', // flat | bordered | shadowed | glass | brutalist | outlined | pill
    sectionStyle = 'standard', // standard | zigzag | timeline | masonry | cards-row
    accentBg = null,
    fontImport = '',
    extraCSS = '',
    mutedOpacity = isDark ? '0.55' : '0.6',
    borderColor = isDark ? 'rgba(255,255,255,0.1)' : '#e5e7eb',
    cardBg = isDark ? 'rgba(255,255,255,0.05)' : '#ffffff',
    sectionAlt = isDark ? 'rgba(255,255,255,0.03)' : '#f9fafb',
  } = options;

  const MU = isDark ? `rgba(255,255,255,${mutedOpacity})` : '#6b7280';
  const inlineA = A.replace('#', '');

  const styleImport = fontImport ? `<style>@import url('${fontImport}');</style>` : '';

  const serviceCards = biz.services.map((s, i) => `
    <div class="srv-card" onclick="openServiceModal('${s.replace(/'/g, "\\'").replace(/"/g, "&quot;")}', '${getServiceDescription(s, biz.type).replace(/'/g, "\\'").replace(/"/g, "&quot;")}')" style="cursor:pointer">
      <div class="srv-icon">${getServiceIcon(s)}</div>
      <h3>${s}</h3>
      <p>${getServiceDescription(s, biz.type)}</p>
    </div>
  `).join('');

  const homeReviewCards = reviews.slice(0, 3).map(r => `
    <div class="rev-card">
      <div class="rev-stars">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</div>
      <p class="rev-text">"${r.text}"</p>
      <div class="rev-author">
        <div class="rev-avatar">${r.name[0]}</div>
        <div><div class="rev-name">${r.name}</div><div class="rev-date">${r.date || 'Recently'}</div></div>
      </div>
    </div>
  `).join('');

  const allReviewCards = reviews.map(r => `
    <div class="rev-card">
      <div class="rev-stars">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</div>
      <p class="rev-text">"${r.text}"</p>
      <div class="rev-author">
        <div class="rev-avatar">${r.name[0]}</div>
        <div><div class="rev-name">${r.name}</div><div class="rev-date">${r.date || 'Recently'}</div></div>
      </div>
    </div>
  `).join('');

  const faqHTML = faqs.map(([q, a]) => `
    <div class="faq-item">
      <div class="faq-q" onclick="toggleFaq(this)">${q}<span class="faq-icon">+</span></div>
      <div class="faq-a">${a}</div>
    </div>
  `).join('');

  const portfolioHTML = portfolio.map(p => `
    <div class="port-card">
      <img src="${resolveImageUrl(p.img, IP)}" alt="${p.title}" loading="lazy">
      <div class="port-info"><h3>${p.title}</h3><span>${p.year} · ${biz.city}</span></div>
    </div>
  `).join('');

  return wrapPage(D, `
${styleImport}
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:${bodyFont};background:${BG};color:${TC};line-height:1.6;min-height:100vh}
${headFont ? `h1,h2,h3{font-family:${headFont}}` : ''}
a{text-decoration:none;color:inherit}
nav{position:sticky;top:0;z-index:100;background:${isDark ? 'rgba(0,0,0,0.88)' : BG};backdrop-filter:blur(16px);border-bottom:1px solid ${borderColor};padding:0 5%}
.nav-inner{max-width:1100px;margin:0 auto;height:66px;display:flex;align-items:center;gap:24px}
.nav-logo{font-size:18px;font-weight:800;color:${A};flex:1}
.sf-nav-link{font-size:13px;color:${MU};cursor:pointer;padding:5px 10px;border-radius:6px;transition:all .2s;font-weight:500}
.sf-nav-link:hover,.sf-nav-link.active{color:${A};font-weight:700}
.nav-cta{background:${A};color:${isDark ? '#000' : '#fff'};border:none;padding:10px 22px;border-radius:8px;font-size:14px;font-weight:700;cursor:pointer;transition:transform .2s}
.nav-cta:hover{transform:translateY(-2px)}
.ham{display:none;font-size:24px;background:none;border:none;color:${TC};cursor:pointer}
@media(max-width:768px){
  .nav-links-d{display:none!important}
  .ham{display:block}
}
#mob-menu-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,0.4);backdrop-filter:blur(4px);z-index:1999;animation:fadeIn 0.3s forwards}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
#mob-menu{display:none;flex-direction:column;gap:16px;padding:80px 24px 24px;background:${isDark ? 'rgba(15,15,15,0.9)' : 'rgba(255,255,255,0.95)'};backdrop-filter:blur(16px);position:fixed;top:0;right:0;width:280px;height:100vh;z-index:2000;box-shadow:-4px 0 24px rgba(0,0,0,0.15);animation:slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards}
@keyframes slideIn{from{transform:translateX(100%)}to{transform:translateX(0)}}
.mob-close{position:absolute;top:20px;right:20px;background:none;border:none;font-size:28px;color:${TC};cursor:pointer;transition:transform 0.2s}
.mob-close:hover{transform:rotate(90deg)}

/* HERO */
.hero{padding:96px 5% 80px;position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 60% 40% at 60% 20%,${A}20 0%,transparent 70%);pointer-events:none}
.hero-inner{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center}
@media(max-width:768px){.hero-inner{grid-template-columns:1fr}.hero-visual{display:none}}
.hero-badge{display:inline-flex;align-items:center;gap:8px;background:${A}18;border:1px solid ${A}35;color:${A};font-size:11px;font-weight:700;padding:5px 13px;border-radius:20px;text-transform:uppercase;letter-spacing:1px;margin-bottom:22px}
.hero-badge::before{content:'';width:5px;height:5px;border-radius:50%;background:${A};display:block}
.hero h1{font-size:clamp(34px,5vw,56px);font-weight:900;line-height:1.05;letter-spacing:-1.5px;margin-bottom:18px}
.hero h1 em{color:${A};font-style:normal}
.hero p{font-size:16px;color:${MU};max-width:460px;line-height:1.75;margin-bottom:28px}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap}
.btn-p{background:${A};color:${isDark ? '#000' : '#fff'};padding:12px 26px;border-radius:8px;font-size:14px;font-weight:700;cursor:pointer;border:none;transition:all .2s;box-shadow:0 4px 20px ${A}40}
.btn-p:hover{transform:translateY(-2px);box-shadow:0 8px 32px ${A}50}
.btn-s{background:transparent;border:2px solid ${borderColor};color:${TC};padding:10px 22px;border-radius:8px;font-size:14px;font-weight:600;cursor:pointer;transition:all .2s}
.btn-s:hover{border-color:${A};color:${A}}
.hero-visual{position:relative}
.hero-img{border-radius:18px;overflow:hidden;aspect-ratio:4/3}
.hero-img img{width:100%;height:100%;object-fit:cover;${isDark ? 'filter:brightness(.8)' : 'filter:brightness(.95)'}}
.hero-stat-badge{position:absolute;bottom:16px;left:16px;background:${isDark ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,.9)'};border-radius:12px;padding:12px 16px;display:flex;gap:12px;align-items:center;backdrop-filter:blur(8px)}
.sb-val{font-size:22px;font-weight:900;color:${A};line-height:1}
.sb-lbl{font-size:11px;color:${MU};font-weight:600}

/* STATS BAR */
.stats-bar{padding:24px 5%;background:${isDark ? 'rgba(255,255,255,.03)' : sectionAlt};border-top:1px solid ${borderColor};border-bottom:1px solid ${borderColor}}
.stats-inner{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:24px;text-align:center}
@media(max-width:500px){.stats-inner{grid-template-columns:repeat(2,1fr)}}
.sv{font-size:28px;font-weight:900;color:${A};display:block}
.sl{font-size:12px;color:${MU};margin-top:3px}

/* SECTIONS */
.section{padding:76px 5%}
.sec-in{max-width:1100px;margin:0 auto}
.alt{background:${sectionAlt}}
.sec-head{margin-bottom:48px}
.sec-head.c{text-align:center}
.sec-head.c .sec-p{margin:0 auto}
.sec-eyebrow{display:inline-block;background:${A}15;color:${A};font-size:11px;font-weight:700;padding:4px 12px;border-radius:20px;text-transform:uppercase;letter-spacing:1px;margin-bottom:12px}
.sec-head h2{font-size:clamp(26px,3vw,40px);font-weight:900;letter-spacing:-1px;margin-bottom:10px}
.sec-p{font-size:15px;color:${MU};max-width:500px;line-height:1.7}

/* SERVICE CARDS */
.srv-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:18px}
.srv-card{background:${cardBg};border:1px solid ${borderColor};border-radius:14px;padding:24px;transition:all .3s;position:relative;overflow:hidden}
.srv-card::after{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:${A};transform:scaleY(0);transition:transform .3s;transform-origin:bottom}
.srv-card:hover::after{transform:scaleY(1)}
.srv-card:hover{border-color:${A}40;box-shadow:0 8px 32px ${A}15;transform:translateY(-3px)}
.srv-icon{font-size:32px;margin-bottom:14px}
.srv-card h3{font-size:15px;font-weight:800;margin-bottom:8px;color:${TC}}
.srv-card p{font-size:13px;color:${MU};line-height:1.6}

/* ABOUT */
.about-g{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center}
@media(max-width:768px){.about-g{grid-template-columns:1fr}}
.about-img{border-radius:16px;overflow:hidden;aspect-ratio:4/3}
.about-img img{width:100%;height:100%;object-fit:cover}
.about-text h2{font-size:clamp(24px,3vw,38px);font-weight:900;letter-spacing:-1px;margin-bottom:14px}
.about-text p{color:${MU};line-height:1.8;font-size:15px;margin-bottom:12px}
.chk-list{list-style:none;margin-top:18px}
.chk-list li{display:flex;gap:10px;align-items:flex-start;padding:9px 0;border-bottom:1px solid ${borderColor};font-size:14px;color:${TC}}
.chk-icon{color:${A};font-size:16px;font-weight:900;flex-shrink:0;margin-top:1px}

/* PORTFOLIO */
.port-g{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:18px}
.port-card{border-radius:14px;overflow:hidden;position:relative;cursor:pointer}
.port-card img{width:100%;height:220px;object-fit:cover;display:block;transition:transform .4s}
.port-card:hover img{transform:scale(1.04)}
.port-info{padding:16px;background:${cardBg};border:1px solid ${borderColor};border-top:none;border-radius:0 0 14px 14px}
.port-info h3{font-size:14px;font-weight:700;color:${TC};margin-bottom:4px}
.port-info span{font-size:12px;color:${MU}}

/* REVIEWS */
.rev-g{display:grid;grid-template-columns:repeat(auto-fill,minmax(270px,1fr));gap:18px}
.rev-card{background:${cardBg};border:1px solid ${borderColor};border-radius:14px;padding:22px;transition:all .3s}
.rev-card:hover{border-color:${A}40;transform:translateY(-2px)}
.rev-stars{color:#f59e0b;font-size:13px;margin-bottom:10px}
.rev-text{font-size:14px;color:${MU};line-height:1.7;margin-bottom:16px;font-style:italic}
.rev-author{display:flex;align-items:center;gap:10px}
.rev-avatar{width:38px;height:38px;border-radius:50%;background:${A};color:${isDark ? '#000' : '#fff'};display:flex;align-items:center;justify-content:center;font-weight:800;font-size:15px}
.rev-name{font-weight:700;font-size:14px;color:${TC}}
.rev-date{font-size:12px;color:${MU}}

/* FAQ */
.faq-wrap{max-width:700px;margin:0 auto}
.faq-item{border:1px solid ${borderColor};border-radius:10px;overflow:hidden;margin-bottom:10px}
.faq-q{padding:18px 20px;cursor:pointer;font-weight:700;font-size:15px;color:${TC};display:flex;justify-content:space-between;align-items:center;background:${cardBg};user-select:none;transition:background .2s}
.faq-q:hover{background:${isDark ? 'rgba(255,255,255,.04)' : A + '0a'}}
.faq-icon{color:${A};font-size:20px;font-weight:300;flex-shrink:0}
.faq-a{display:none;padding:16px 20px 20px;font-size:14px;color:${MU};line-height:1.75;background:${isDark ? 'rgba(255,255,255,.02)' : sectionAlt};border-top:1px solid ${borderColor}}

/* CONTACT */
.ctc-g{display:grid;grid-template-columns:1fr 1.4fr;gap:48px;align-items:start}
@media(max-width:768px){.ctc-g{grid-template-columns:1fr}}
.ctc-info h2{font-size:clamp(24px,2.5vw,36px);font-weight:900;letter-spacing:-0.5px;margin-bottom:12px}
.ctc-info p{color:${MU};line-height:1.8;font-size:15px;margin-bottom:24px}
.ctc-row{display:flex;gap:14px;align-items:center;padding:14px 0;border-bottom:1px solid ${borderColor}}
.ctc-ic{width:42px;height:42px;background:${A}15;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0}
.ctc-lbl{font-size:11px;color:${MU};font-weight:700;text-transform:uppercase;letter-spacing:0.5px}
.ctc-val{font-size:14px;font-weight:700;color:${TC}}
.ctc-form{background:${cardBg};border:1px solid ${borderColor};border-radius:16px;padding:28px}
.ctc-form-title{font-size:18px;font-weight:800;color:${TC};margin-bottom:22px}
.ff{margin-bottom:14px}
.ff label{display:block;font-size:11px;color:${MU};font-weight:700;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:5px}
.ff input,.ff select,.ff textarea{width:100%;padding:11px 14px;background:${isDark ? 'rgba(255,255,255,.06)' : BG};border:1.5px solid ${borderColor};border-radius:8px;color:${TC};font-size:14px;font-family:inherit;outline:none;transition:border-color .2s}
.ff input:focus,.ff textarea:focus,.ff select:focus{border-color:${A}}
.ff select option{background:${isDark ? '#111' : BG}}
.ff textarea{min-height:88px;resize:vertical}
.ff-row{display:grid;grid-template-columns:1fr 1fr;gap:12px}
@media(max-width:480px){.ff-row{grid-template-columns:1fr}}
.sub-btn{width:100%;padding:13px;background:${A};border:none;border-radius:8px;color:${isDark ? '#000' : '#fff'};font-size:14px;font-weight:700;cursor:pointer;transition:all .2s;font-family:inherit}
.sub-btn:hover{opacity:.9}
.succ{display:none;background:${isDark ? 'rgba(0,212,170,.1)' : '#d1fae5'};border:1px solid ${isDark ? 'rgba(0,212,170,.3)' : '#6ee7b7'};color:${isDark ? '#00d4aa' : '#065f46'};padding:12px;border-radius:8px;text-align:center;font-size:14px;margin-top:10px}

/* CTA BAND */
.cta-band{background:${A};padding:60px 5%;text-align:center}
.cta-band h2{font-size:clamp(26px,3vw,40px);font-weight:900;letter-spacing:-1px;color:${isDark ? '#000' : '#fff'};margin-bottom:12px}
.cta-band p{color:${isDark ? 'rgba(0,0,0,.65)' : 'rgba(255,255,255,.85)'};margin-bottom:28px;font-size:16px}
.btn-inv{background:${isDark ? '#000' : '#fff'};color:${A};padding:12px 28px;border-radius:8px;font-size:14px;font-weight:700;border:none;cursor:pointer;transition:all .2s}
.btn-inv:hover{transform:translateY(-2px)}

/* FOOTER */
footer{background:${isDark ? 'rgba(0,0,0,.7)' : '#111'};color:rgba(255,255,255,.6);padding:44px 5% 22px;border-top:1px solid ${isDark ? 'rgba(255,255,255,.08)' : 'transparent'}}
.foot-in{max-width:1100px;margin:0 auto}
.foot-g{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:36px;margin-bottom:36px}
@media(max-width:768px){.foot-g{grid-template-columns:1fr 1fr}}
@media(max-width:400px){.foot-g{grid-template-columns:1fr}}
.foot-brand .fl{font-size:18px;font-weight:800;color:${A};margin-bottom:8px}
.foot-brand p{font-size:13px;line-height:1.7}
.foot-col h4{color:#fff;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:12px}
.foot-col a{display:block;color:rgba(255,255,255,.4);font-size:13px;padding:3px 0;transition:color .2s;cursor:pointer}
.foot-col a:hover{color:${A}}
.foot-bot{border-top:1px solid rgba(255,255,255,.08);padding-top:18px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px;font-size:12px}

/* EMERGENCY BAR */
.emg{background:${A};color:${isDark ? '#000' : '#fff'};text-align:center;padding:10px 5%;font-size:14px;font-weight:700}

/* MOBILE BOTTOM NAV */
.mobile-bottom-nav {
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: ${cardBg};
  border-top: 1px solid ${borderColor};
  z-index: 1000;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  height: 65px;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.05);
}
.mb-nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  color: ${MU};
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
.mb-nav-item.mb-active { color: ${A}; }
.mb-nav-item svg {
  width: 20px;
  height: 20px;
  margin-bottom: 4px;
  fill: currentColor;
}
.mb-center {
  position: relative;
  top: -20px;
  flex: 0 0 70px;
  display: flex;
  justify-content: center;
  cursor: pointer;
}
.mb-center-in {
  width: 60px;
  height: 60px;
  background: ${cardBg};
  border-radius: 50%;
  padding: 4px;
  box-shadow: 0 -4px 10px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}
.mb-center-in img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
@media(max-width:768px) {
  .mobile-bottom-nav { display: flex; }
  body { padding-bottom: 65px; }
}

.float-btn { position: fixed; bottom: 85px; right: 20px; background: ${A}; color: ${isDark ? '#000' : '#fff'}; width: 56px; height: 56px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px ${A}60; z-index: 100; text-decoration: none; animation: floatPulse 3s ease-in-out infinite; }
@keyframes floatPulse { 0% { transform: translateY(0) scale(1); box-shadow: 0 4px 12px ${A}60; } 50% { transform: translateY(-6px) scale(1.05); box-shadow: 0 12px 24px ${A}40; } 100% { transform: translateY(0) scale(1); box-shadow: 0 4px 12px ${A}60; } }
@media(min-width: 769px) { .float-btn { bottom: 30px; right: 30px; width: 64px; height: 64px; } }
.sf-modal { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.5); backdrop-filter: blur(8px); z-index: 3000; align-items: center; justify-content: center; padding: 20px; animation: fadeIn 0.2s; }
.sf-modal-inner { background: ${cardBg}; border: 1px solid ${borderColor}; border-radius: 16px; width: 100%; max-width: 500px; padding: 32px; position: relative; animation: modalIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; transform: translateY(20px) scale(0.95); opacity: 0; }
@keyframes modalIn { to { transform: translateY(0) scale(1); opacity: 1; } }
.sf-modal-close { position: absolute; top: 16px; right: 16px; background: none; border: none; font-size: 24px; color: ${TC}; cursor: pointer; transition: transform 0.2s; }
.sf-modal-close:hover{transform:rotate(90deg)}
${extraCSS}
</style>
${biz.emergency === 'yes' ? `<div class="emg">24/7 Emergency ${typeName} — Call: ${biz.phone}</div>` : ''}
<nav><div class="nav-inner">
  <div class="nav-logo">${biz.name}</div>
  <div style="display:flex;gap:4px" class="nav-links-d">
    <span class="sf-nav-link active" data-page="home" onclick="showPage('home')">Home</span>
    <span class="sf-nav-link" data-page="about" onclick="showPage('about')">About Us</span>
    <span class="sf-nav-link" data-page="services" onclick="showPage('services')">Services</span>
    <span class="sf-nav-link" data-page="portfolio" onclick="showPage('portfolio')">Portfolio</span>
    <span class="sf-nav-link" data-page="reviews" onclick="showPage('reviews')">Reviews</span>
    <span class="sf-nav-link" data-page="faq" onclick="showPage('faq')">FAQ</span>
    <span class="sf-nav-link" data-page="contact" onclick="showPage('contact')">Contact</span>
  </div>
  <button class="nav-cta" onclick="showPage('bookings')">Book Now</button>
  <button class="ham" onclick="toggleMob()">☰</button>
</div></nav>
<div id="mob-menu-overlay" onclick="toggleMob()"></div>
<div id="mob-menu">
  <button class="mob-close" onclick="toggleMob()">✕</button>
  <span class="sf-nav-link active" data-page="home" onclick="showPage('home')">Home</span>
  <span class="sf-nav-link" data-page="about" onclick="showPage('about')">About Us</span>
  <span class="sf-nav-link" data-page="services" onclick="showPage('services')">Services</span>
  <span class="sf-nav-link" data-page="portfolio" onclick="showPage('portfolio')">Portfolio</span>
  <span class="sf-nav-link" data-page="reviews" onclick="showPage('reviews')">Reviews</span>
  <span class="sf-nav-link" data-page="faq" onclick="showPage('faq')">FAQ</span>
  <span class="sf-nav-link" data-page="contact" onclick="showPage('contact')">Contact</span>
</div>

<div id="page-home" class="sf-page">
  <div class="hero">
    <div class="hero-inner">
      <div>
        <div class="hero-badge">${biz.years}+ Years · ${biz.city}</div>
        <h1>Expert <em>${typeName}</em><br>You Can Trust</h1>
        <p>${biz.tagline}</p>
        <div class="hero-btns">
          <button class="btn-p" onclick="showPage('bookings')">Book a Service</button>
          <button class="btn-s" onclick="showPage('portfolio')">View Our Work</button>
        </div>
      </div>
      <div class="hero-visual">
        <div class="hero-img"><img src="${resolveImageUrl(imgs.hero, IP)}" alt="${typeName}" loading="lazy"></div>
        <div class="hero-stat-badge">
          <div><div class="sb-val">${biz.rating}★</div><div class="sb-lbl">Rating</div></div>
          <div style="width:1px;height:32px;background:${borderColor}"></div>
          <div><div class="sb-val">${biz.reviews}+</div><div class="sb-lbl">Reviews</div></div>
        </div>
      </div>
    </div>
  </div>
  <div class="stats-bar">
    <div class="stats-inner">
      <div><span class="sv">${biz.rating}★</span><span class="sl">Google Rating</span></div>
      <div><span class="sv">${biz.reviews}+</span><span class="sl">Happy Clients</span></div>
      <div><span class="sv">${biz.years}+</span><span class="sl">Years Experience</span></div>
      <div><span class="sv">${biz.projects}+</span><span class="sl">Jobs Completed</span></div>
    </div>
  </div>
  <div class="section">
    <div class="sec-in">
      <div class="sec-head c"><div class="sec-eyebrow">Services</div><h2>What We Do</h2><p class="sec-p">Professional ${typeName.toLowerCase()} solutions for homes &amp; businesses in ${biz.city}</p></div>
      <div class="srv-grid">${serviceCards}</div>
    </div>
  </div>
  <div class="alt section">
    <div class="sec-in">
      <div class="sec-head c"><div class="sec-eyebrow">Reviews</div><h2>Client Testimonials</h2><p class="sec-p">${biz.rating}★ average · ${biz.reviews}+ reviews</p></div>
      <div class="rev-g">${homeReviewCards}</div>
    </div>
  </div>
  <div class="section">
    <div class="sec-in">
      <div class="sec-head c"><div class="sec-eyebrow">Why Choose Us</div><h2>The ${biz.name} Promise</h2></div>
      <div class="srv-grid">
        ${[['🏆', 'Expert Team', 'Certified professionals with years of hands-on experience in ' + biz.city + '.'], ['⚡', 'Quick Response', 'Bookings confirmed within 2 hours. Emergency calls in under 60 minutes.'], ['💰', 'Honest Pricing', 'Transparent quotes. No surprise charges. Competitive rates.']].map(([icon, t, d]) => `<div class="srv-card"><div class="srv-icon">${icon}</div><h3>${t}</h3><p>${d}</p></div>`).join('')}
      </div>
    </div>
  </div>
  <div class="cta-band">
    <h2>Ready to Book a ${typeName}?</h2>
    <p>${biz.emergency === 'yes' ? 'Emergency response within 60 minutes. Serving ' + biz.city + ' 24/7.' : 'Contact us today for a free quote.'}</p>
    <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap">
      <button class="btn-inv" onclick="showPage('bookings')">Book Now</button>
      <a href="tel:${biz.phone}" style="background:transparent;border:2px solid ${isDark ? 'rgba(0,0,0,.3)' : 'rgba(255,255,255,.5)'};color:${isDark ? '#000' : '#fff'};padding:12px 26px;border-radius:8px;font-size:14px;font-weight:700">${biz.phone}</a>
    </div>
  </div>
</div>

<div id="page-services" class="sf-page" style="display:none">
  <div class="section">
    <div class="sec-in">
      <div class="sec-head c"><div class="sec-eyebrow">All Services</div><h2>Comprehensive Home Solutions</h2><p class="sec-p">Professional services tailored to your needs in ${biz.city}</p></div>
      <div class="srv-grid">${serviceCards}</div>
    </div>
  </div>
</div>

<div id="page-about" class="sf-page" style="display:none">
  <div class="section">
    <div class="sec-in">
      <div class="about-g">
        <div class="about-img"><img src="${resolveImageUrl(imgs.about, IP)}" alt="About" loading="lazy"></div>
        <div class="about-text">
          <div class="sec-eyebrow">About ${biz.name}</div>
          <h2>Trusted ${typeName} Specialists Since ${new Date().getFullYear() - parseInt(biz.years)}</h2>
          <p>With over <strong>${biz.years} years</strong> serving ${biz.city}, ${biz.name} has earned a reputation for reliable, professional ${biz.type} services. Our team of ${biz.team} certified specialists brings expertise and dedication to every job.</p>
          <p>We started as a small local operation and have grown into ${biz.city}'s most trusted ${typeName.toLowerCase()} service — with ${biz.projects}+ completed projects and ${biz.reviews}+ satisfied customers to show for it.</p>
          <ul class="chk-list">
            <li><span class="chk-icon">✓</span>Licensed &amp; fully insured professionals</li>
            <li><span class="chk-icon">✓</span>No hidden fees — transparent pricing</li>
            <li><span class="chk-icon">✓</span>${biz.emergency === 'yes' ? '24/7 emergency coverage' : 'Flexible booking available'}</li>
            <li><span class="chk-icon">✓</span>30-day workmanship guarantee</li>
            <li><span class="chk-icon">✓</span>Team of ${biz.team} certified experts</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="alt section">
    <div class="sec-in">
      <div class="sec-head c"><div class="sec-eyebrow">Contact</div><h2>Get a Free Estimate</h2></div>
      <div style="text-align:center"><button class="btn-p" onclick="showPage('bookings')">Book Now</button></div>
    </div>
  </div>
</div>

<div id="page-portfolio" class="sf-page" style="display:none">
  <div class="section">
    <div class="sec-in">
      <div class="sec-head c"><div class="sec-eyebrow">Portfolio</div><h2>Recent Projects</h2><p class="sec-p">${biz.projects}+ completed projects in ${biz.city}</p></div>
      <div class="port-g">${portfolioHTML}</div>
      <div style="margin-top:56px"><div class="sec-head c"><div class="sec-eyebrow">All Services</div><h2>Our Full Service Range</h2></div><div class="srv-grid">${serviceCards}</div></div>
    </div>
  </div>
</div>

<div id="page-reviews" class="sf-page" style="display:none">
  <div class="section">
    <div class="sec-in">
      <div class="sec-head c"><div class="sec-eyebrow">Reviews</div><h2>What Our Clients Say</h2><p class="sec-p">${biz.rating}★ from ${biz.reviews}+ reviews</p></div>
      <div class="rev-g">${allReviewCards}</div>
      <div style="margin-top:40px;padding:32px;background:${A}12;border:1px solid ${A}25;border-radius:16px;text-align:center">
        <div style="font-size:56px;font-weight:900;color:${A};line-height:1">${biz.rating}</div>
        <div style="color:#f59e0b;font-size:22px;margin:8px 0">★★★★★</div>
        <div style="font-size:16px;font-weight:700;margin-bottom:6px;color:${TC}">${biz.reviews}+ Google Reviews</div>
        <div style="font-size:14px;color:${MU};margin-bottom:16px">Verified by real customers across ${biz.city}</div>
        ${biz.google ? `<button class="btn-p" onclick="window.open('${biz.google}','_blank')">⭐ Leave a Review on Google</button>` : ''}
      </div>
    </div>
  </div>
</div>

<div id="page-faq" class="sf-page" style="display:none">
  <div class="section">
    <div class="sec-in">
      <div class="sec-head c"><div class="sec-eyebrow">FAQ</div><h2>Frequently Asked Questions</h2><p class="sec-p">About our ${typeName.toLowerCase()} services</p></div>
      <div class="faq-wrap">${faqHTML}</div>
      <div style="text-align:center;margin-top:36px;padding:28px;background:${cardBg};border:1px solid ${borderColor};border-radius:14px">
        <h3 style="font-size:18px;font-weight:800;margin-bottom:8px">Still have questions?</h3>
        <p style="color:${MU};margin-bottom:18px">Our team is happy to answer any questions about our services.</p>
        <button class="btn-p" onclick="showPage('contact')">Contact Us</button>
      </div>
    </div>
  </div>
</div>

<div id="page-contact" class="sf-page" style="display:none">
  <div class="section">
    <div class="sec-in">
      <div class="sec-head c"><div class="sec-eyebrow">Contact Us</div><h2>Book a Service</h2><p class="sec-p">We respond within 30 minutes during business hours</p></div>
      <div class="ctc-g">
        <div class="ctc-info">
          <h2>Get in Touch</h2>
          <p>Have questions or ready to book? Our team is standing by to help you get the best ${biz.type} service in ${biz.city}.</p>
          <div class="ctc-row"><div class="ctc-ic">📞</div><div><div class="ctc-lbl">Phone</div><div class="ctc-val">${biz.phone}</div></div></div>
          <div class="ctc-row"><div class="ctc-ic">✉️</div><div><div class="ctc-lbl">Email</div><div class="ctc-val">${biz.email}</div></div></div>
          <div class="ctc-row"><div class="ctc-ic">📍</div><div><div class="ctc-lbl">Address</div><div class="ctc-val">${biz.address}</div></div></div>
          <div class="ctc-row"><div class="ctc-ic">🕐</div><div><div class="ctc-lbl">Hours</div><div class="ctc-val">${biz.hours}</div></div></div>
          ${biz.emergency === 'yes' ? '<div class="ctc-row"><div class="ctc-ic">🚨</div><div><div class="ctc-lbl">Emergency</div><div class="ctc-val">24/7 Available</div></div></div>' : ''}
        </div>
        <div class="ctc-form">
          <div class="ctc-form-title">Request a Callback</div>
          <div class="ff-row">
            <div class="ff"><label>Your Name</label><input type="text" placeholder="Full name"></div>
            <div class="ff"><label>Phone</label><input type="tel" placeholder="${biz.phone}"></div>
          </div>
          <div class="ff-row">
            <div class="ff"><label>Email</label><input type="email" placeholder="Email Address"></div>
            <div class="ff"><label>Property Address</label><input type="text" placeholder="Street, City, Zip"></div>
          </div>
          <div class="ff"><label>Service Needed</label><select>${biz.services.map(s => `<option>${s}</option>`).join('')}</select></div>
          <div class="ff-row">
            <div class="ff"><label>Property Size</label><input type="text" placeholder="e.g. 2000 sq ft"></div>
            <div class="ff"><label>Preferred Date</label><input type="date"></div>
          </div>
          <div class="ff"><label>Service Add-ons</label><input type="text" placeholder="Any specific requests?"></div>
          <div class="ff"><label>Message</label><textarea placeholder="Describe your requirement..."></textarea></div>
          <button class="sub-btn" onclick="submitForm(this)">📞 Request Callback</button>
          <div class="succ">✅ We'll call you back within 30 minutes!</div>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="page-bookings" class="sf-page" style="display:none">
  <div class="section">
    <div class="sec-in">
      <div class="sec-head c"><div class="sec-eyebrow">Bookings</div><h2>Schedule an Appointment</h2><p class="sec-p">Select a time that works for you.</p></div>
      <div style="background:${cardBg}; border:1px solid ${borderColor}; border-radius:16px; overflow:hidden; padding:20px;">
        <!-- Calendly inline widget begin -->
        <div class="calendly-inline-widget" data-url="https://calendly.com/ojasdenge-lx/30min?hide_event_type_details=1&hide_gdpr_banner=1" style="min-width:320px;height:700px;"></div>
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
        <!-- Calendly inline widget end -->
      </div>
    </div>
  </div>
</div>

<footer><div class="foot-in">
  <div class="foot-g">
    <div class="foot-brand">
      <div class="fl">${biz.name}</div>
      <p>Your trusted ${typeName.toLowerCase()} partner in ${biz.city}. Professional, reliable, affordable.</p>
      <div style="display:flex;gap:12px;margin-top:16px">
        ${biz.fb ? `<a href="${biz.fb}" target="_blank" style="font-size:24px;text-decoration:none">📱</a>` : ''}
        ${biz.ig ? `<a href="${biz.ig}" target="_blank" style="font-size:24px;text-decoration:none">📸</a>` : ''}
        ${biz.google ? `<a href="${biz.google}" target="_blank" style="font-size:24px;text-decoration:none">⭐</a>` : ''}
      </div>
    </div>
    <div class="foot-col"><h4>Services</h4>${biz.services.slice(0, 5).map(s => `<a onclick="showPage('portfolio')">${s}</a>`).join('')}</div>
    <div class="foot-col"><h4>Company</h4><a onclick="showPage('about')">About Us</a><a onclick="showPage('portfolio')">Portfolio</a><a onclick="showPage('reviews')">Reviews</a><a onclick="showPage('faq')">FAQ</a><a onclick="showPage('contact')">Contact</a></div>
    <div class="foot-col"><h4>Contact</h4><a>${biz.phone}</a><a>${biz.email}</a><a>${biz.city}</a></div>
  </div>
  <div class="foot-bot">
    <span>© ${new Date().getFullYear()} ${biz.name}. All rights reserved.</span>
    <span style="display:flex;gap:16px">
      <a href="privacy-policy.html" style="color:inherit;text-decoration:none">Privacy</a>
      <a href="terms-of-service.html" style="color:inherit;text-decoration:none">Terms</a>
      <a href="cookie-policy.html" style="color:inherit;text-decoration:none">Cookies</a>
    </span>
  </div>
</div></footer>

<div class="mobile-bottom-nav">
  <div class="mb-nav-item mb-active" data-page="home" onclick="showPage('home')">
    <svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
    <span>Home</span>
  </div>
  <div class="mb-nav-item" data-page="services" onclick="showPage('services')">
    <svg viewBox="0 0 24 24"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg>
    <span>Services</span>
  </div>
  <div class="mb-center" onclick="showPage('home')">
    <div class="mb-center-in">
      <img src="${resolveImageUrl(imgs.hero, IP)}" alt="Logo">
    </div>
  </div>
  <div class="mb-nav-item" data-page="portfolio" onclick="showPage('portfolio')">
    <svg viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
    <span>Portfolio</span>
  </div>
  <div class="mb-nav-item" data-page="contact" onclick="showPage('contact')">
    <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
    <span>Contact</span>
  </div>
</div>

<a href="tel:${biz.phone}" class="float-btn">${SVGS.phone}</a>

<div id="srvModal" class="sf-modal" onclick="if(event.target===this) this.style.display='none'">
  <div class="sf-modal-inner">
    <button class="sf-modal-close" onclick="document.getElementById('srvModal').style.display='none'">✕</button>
    <h2 id="srvModalTitle" style="margin-bottom:16px;font-size:24px">Service Details</h2>
    <p id="srvModalDesc" style="color:${MU};line-height:1.6;margin-bottom:24px"></p>
    <ul class="chk-list" style="margin-bottom:32px">
      <li><span class="chk-icon">✓</span> Free estimates provided</li>
      <li><span class="chk-icon">✓</span> Satisfaction guaranteed</li>
      <li><span class="chk-icon">✓</span> Professional execution</li>
    </ul>
    <button class="btn-p" style="width:100%" onclick="document.getElementById('srvModal').style.display='none'; showPage('contact')">Get a Quote</button>
  </div>
</div>

<script>
  function openServiceModal(name, desc) {
    document.getElementById('srvModalTitle').textContent = name;
    document.getElementById('srvModalDesc').textContent = desc || 'Comprehensive ' + name.toLowerCase() + ' solutions tailored to your specific needs.';
    document.getElementById('srvModal').style.display = 'flex';
  }
${NAV}
</${'script'}>
`);
}

// ==================== DESIGNS 3–30: each calls buildGenericMultipage with unique config ====================

function splitHTMLToMultipage(html, biz) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  // Extract CSS
  const styleEl = doc.querySelector('style');
  let cssContent = styleEl ? styleEl.innerHTML : '';
  if (styleEl) {
    const linkEl = doc.createElement('link');
    linkEl.rel = 'stylesheet';
    linkEl.href = 'style.css';
    styleEl.parentNode.replaceChild(linkEl, styleEl);
  }

  // Rewrite scripts
  const scripts = doc.querySelectorAll('script');
  scripts.forEach(s => {
    if (s.innerHTML.includes('function showPage')) {
      s.innerHTML = `
        function toggleMob() { document.getElementById('mob-menu').classList.toggle('show'); }
        function submitForm(btn) { 
          btn.textContent = 'Sending...'; 
          if(typeof emailjs !== 'undefined') {
            emailjs.init("YOUR_PUBLIC_KEY");
            // emailjs.send("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",{...});
          }
          setTimeout(() => { 
            btn.style.display='none'; 
            btn.nextElementSibling.style.display='block'; 
          }, 1500); 
        }
        function toggleFaq(el) { 
          const a = el.nextElementSibling; 
          a.style.display = a.style.display==='block' ? 'none' : 'block'; 
          el.querySelector('.faq-icon').textContent = a.style.display==='block' ? '−' : '+'; 
        }
        function openServiceModal(name, desc) {
          document.getElementById('srvModalTitle').textContent = name;
          document.getElementById('srvModalDesc').textContent = desc || 'Comprehensive ' + name.toLowerCase() + ' solutions tailored to your specific needs.';
          document.getElementById('srvModal').style.display = 'flex';
        }
      `;
    }
  });

  // Convert span nav links to anchor tags
  const navLinks = doc.querySelectorAll('span.sf-nav-link');
  navLinks.forEach(span => {
    const a = doc.createElement('a');
    a.className = span.className;
    let page = span.getAttribute('data-page');
    a.href = page === 'home' ? 'index.html' : page + '.html';
    a.innerHTML = span.innerHTML;
    span.parentNode.replaceChild(a, span);
  });

  // Convert elements with onclick showPage to window.location
  const elementsWithOnclick = doc.querySelectorAll('[onclick^="showPage("]');
  elementsWithOnclick.forEach(el => {
    const match = el.getAttribute('onclick').match(/showPage\('([^']+)'\)/);
    if (match) {
      const page = match[1];
      const link = page === 'home' ? 'index.html' : page + '.html';
      el.setAttribute('onclick', `window.location.href='${link}'`);
    }
  });

  // Convert footer anchor links
  const footerLinks = doc.querySelectorAll('a[onclick^="showPage("]');
  footerLinks.forEach(el => {
    const match = el.getAttribute('onclick').match(/showPage\('([^']+)'\)/);
    if (match) {
      const page = match[1];
      el.href = page === 'home' ? 'index.html' : page + '.html';
      el.removeAttribute('onclick');
    }
  });

  const pageEls = Array.from(doc.querySelectorAll('.sf-page'));
  const allPagesHtml = {};

  pageEls.forEach(pageEl => {
    const id = pageEl.id.replace('page-', '');
    const filename = id === 'home' ? 'index.html' : id + '.html';

    const clonedDoc = doc.cloneNode(true);
    const clonedPageEls = Array.from(clonedDoc.querySelectorAll('.sf-page'));

    clonedPageEls.forEach(cp => {
      if (cp.id === pageEl.id) {
        cp.style.display = 'block';
      } else {
        cp.parentNode.removeChild(cp);
      }
    });

    const clonedNavLinks = clonedDoc.querySelectorAll('a.sf-nav-link');
    clonedNavLinks.forEach(a => {
      if (a.getAttribute('href') === filename) {
        a.classList.add('active');
      } else {
        a.classList.remove('active');
      }
    });

    const titleEl = clonedDoc.querySelector('title');
    if (titleEl && id !== 'home') {
      const pageTitle = id.charAt(0).toUpperCase() + id.slice(1);
      titleEl.textContent = `${pageTitle} | ${biz.name}`;
    }

    const headEl = clonedDoc.querySelector('head');
    if (headEl) {
      if (!headEl.innerHTML.includes('emailjs')) {
        headEl.innerHTML += `\n    <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>`;
      }
      if (biz.ga4 && !headEl.innerHTML.includes('googletagmanager')) {
        headEl.innerHTML += `\n    <!-- GA4 -->\n    <script async src="https://www.googletagmanager.com/gtag/js?id=${biz.ga4}"></script>\n    <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${biz.ga4}');</script>`;
      }
      if (biz.pixel && !headEl.innerHTML.includes('fbq')) {
        headEl.innerHTML += `\n    <!-- Meta Pixel -->\n    <script>!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${biz.pixel}');fbq('track','PageView');</script><noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${biz.pixel}&ev=PageView&noscript=1"/></noscript>`;
      }
    }

    allPagesHtml[filename] = '<!DOCTYPE html>\n' + clonedDoc.documentElement.outerHTML;
  });

  // Generate legal pages
  const legalPages = ['privacy-policy', 'terms-of-service', 'cookie-policy'];
  legalPages.forEach(legalId => {
    const clonedDoc = doc.cloneNode(true);
    const clonedPageEls = Array.from(clonedDoc.querySelectorAll('.sf-page'));
    clonedPageEls.forEach(cp => cp.parentNode.removeChild(cp));

    const title = legalId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    const titleEl = clonedDoc.querySelector('title');
    if (titleEl) titleEl.textContent = `${title} | ${biz.name}`;

    const legalContainer = clonedDoc.createElement('div');
    legalContainer.className = 'sf-page';
    legalContainer.style.display = 'block';
    legalContainer.innerHTML = `<div style="max-width:800px;margin:100px auto;padding:20px;min-height:50vh"><h2>${title}</h2><p>This is a placeholder for the ${title}. Please update this content with your actual legal text.</p></div>`;

    const footer = clonedDoc.querySelector('footer');
    if (footer && footer.parentNode) {
      footer.parentNode.insertBefore(legalContainer, footer);
    }

    allPagesHtml[legalId + '.html'] = '<!DOCTYPE html>\n' + clonedDoc.documentElement.outerHTML;
  });

  return {
    css: cssContent,
    htmlPages: allPagesHtml,
    sitemap: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>https://${biz.domain || 'example.com'}/</loc></url>\n  ${Object.keys(allPagesHtml).filter(f => f !== 'index.html').map(f => `<url><loc>https://${biz.domain || 'example.com'}/${f}</loc></url>`).join('\n  ')}\n</urlset>`
  };
}

async function downloadZIP() {
  if (!generatedHTML) { alert('Please generate a preview first!'); return; }
  if (typeof JSZip === 'undefined') { alert('JSZip not loaded.'); return; }
  const biz = getBizData();
  const zip = new JSZip();
  const folderName = biz.name.replace(/\s+/g, '-').toLowerCase();
  const root = zip.folder(folderName);

  const parsed = splitHTMLToMultipage(generatedHTML, biz);

  root.file('style.css', parsed.css);
  root.file('sitemap.xml', parsed.sitemap);
  root.file('README.md', `# ${biz.name}\nGenerated by Website Builder v3\nDesign: ${selectedDesign.name}\nPages: ${Object.keys(parsed.htmlPages).join(', ')}\n`);

  Object.keys(parsed.htmlPages).forEach(filename => {
    root.file(filename, parsed.htmlPages[filename]);
  });

  const content = await zip.generateAsync({ type: 'blob' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(content);
  a.download = folderName + '-website.zip';
  a.click();
  showToast('✓ ZIP downloaded!');
}

function copyHTML() {
  if (!generatedHTML) { alert('Please generate a preview first!'); return; }
  navigator.clipboard.writeText(generatedHTML).then(() => showToast('✓ Copied to clipboard!'));
}

async function generateAll30() {
  const biz = getBizData();
  if (!biz.name) { alert('Please fill in business data first!'); return; }
  if (typeof JSZip === 'undefined') { alert('JSZip not available.'); return; }
  showLoading('Generating all 30 designs...', 'Building HTML for each design style');
  await new Promise(r => setTimeout(r, 100));
  const zip = new JSZip();
  const root = zip.folder('all-30-designs-' + biz.name.replace(/\s+/g, '-').toLowerCase());

  const failures = [];
  for (let i = 0; i < DESIGNS.length; i++) {
    const d = DESIGNS[i];
    document.getElementById('loadingSub').textContent = `Building ${i + 1}/30: ${d.name}...`;
    try {
      const html = buildWebsite(biz, d);
      const parsed = splitHTMLToMultipage(html, biz);

      const subfolder = root.folder(`${String(i + 1).padStart(2, '0')}-${d.id}`);
      subfolder.file('style.css', parsed.css);
      subfolder.file('sitemap.xml', parsed.sitemap);
      Object.keys(parsed.htmlPages).forEach(filename => {
        subfolder.file(filename, parsed.htmlPages[filename]);
      });
    } catch (err) {
      console.error(`Design ${i + 1} (${d.id}) failed:`, err);
      failures.push(`${i + 1}. ${d.name} (${d.id}) — ${err.message}`);
    }

    await new Promise(r => setTimeout(r, 5));
  }

  const successCount = DESIGNS.length - failures.length;
  let readme = `# All 30 Designs — ${biz.name}\n\nGenerated by Website Builder v3.\nEach design folder contains a complete multipage website.\n\n${DESIGNS.map((d, i) => `${i + 1}. ${d.name}`).join('\n')}\n`;
  if (failures.length) {
    readme += `\n## Build Warnings (${failures.length})\n\nThe following designs failed to build and were skipped:\n\n${failures.join('\n')}\n`;
  }
  root.file('README.md', readme);
  const content = await zip.generateAsync({ type: 'blob' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(content);
  a.download = biz.name.replace(/\s+/g, '-').toLowerCase() + '-all-30.zip';
  a.click();
  hideLoading();
  if (failures.length) {
    showToast(`⚠ Exported ${successCount}/${DESIGNS.length} designs (see README for issues)`);
  } else {
    showToast('✓ All 30 designs exported!');
  }
}

function openNewTab() {
  if (!generatedHTML) return;
  const blob = new Blob([generatedHTML], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const w = window.open(url, '_blank');
  if (!w) {
    showToast('⚠ Preview blocked — enable pop-ups for this site to open in a new tab');
    return;
  }
  w.onload = () => URL.revokeObjectURL(url);
}

function showLoading(text, sub) {
  document.getElementById('loadingText').textContent = text;
  document.getElementById('loadingSub').textContent = sub;
  document.getElementById('loadingOverlay').classList.add('show');
}
function hideLoading() { document.getElementById('loadingOverlay').classList.remove('show'); }
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2600);
}

// NOTE: This is the SaaS builder's core.js reused UNCHANGED as the render
// engine, EXCEPT the trailing builder-only bootstrap below is disabled — the
// pSEO page has no builder UI DOM, so init()/auto-load must not run here.
// render.js calls buildWebsite(biz, design) directly instead.
if (typeof window !== 'undefined' && window.__PSEO_RENDER__ !== true) {
  init();

  // Auto-load project when ?project= is in the URL (from My Websites page)
  (function() {
    var params = new URLSearchParams(window.location.search);
    var projectId = params.get('project');
    if (projectId && window.__AUTH_EMAIL__) {
      setTimeout(function() { loadProject(projectId); }, 300);
    }
  })();
}
