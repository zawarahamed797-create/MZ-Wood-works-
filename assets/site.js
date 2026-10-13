// ---- Shared data (mirrors src/lib/site.ts) ----
const CONTACT = {
  phone: "0348-8222368",
  phone2: "0318-7196942",
  whatsapp: "923488222368",
  city: "Mandi Bahauddin, Pakistan",
};

function whatsappLink(text) {
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
}

const DOOR_RATE = 1500;

const products = [
  {
    slug: "doors",
    name: "Doors",
    rate: DOOR_RATE,
    detail:
      "Main doors, room doors and safety doors — solid frame with laminate or veneer finish. Priced at PKR 1,500 per sqft.",
    image: "assets/work-doors.jpg",
    gallery: [
      { src: "assets/work-doors.jpg", alt: "Custom wooden main door design" },
      { src: "assets/gallery-doors-01.jpg", alt: "Walnut entrance door design" },
      { src: "assets/gallery-doors-02.jpg", alt: "Interior doors in a wood and cream finish" },
    ],
  },
  {
    slug: "kitchens",
    name: "Kitchens",
    rate: 2500,
    detail:
      "Modular kitchens with cabinets, counters and tall units — Classic from PKR 2,500 per sqft, up to Royal PKR 4,500.",
    image: "assets/work-kitchens.jpg",
    gallery: [
      { src: "assets/work-kitchens.jpg", alt: "Custom kitchen cabinetry design" },
      { src: "assets/gallery-kitchens-01.jpg", alt: "Walnut and cream kitchen design" },
      { src: "assets/gallery-kitchens-02.jpg", alt: "Compact L-shaped kitchen cabinet design" },
    ],
  },
  {
    slug: "wardrobes",
    name: "Wardrobes",
    rate: 2500,
    detail:
      "Sliding and hinged wardrobes with internal fittings — Classic from PKR 2,500 per sqft, up to Royal PKR 4,500.",
    image: "assets/work-wardrobes.jpg",
    gallery: [
      { src: "assets/work-wardrobes.jpg", alt: "Made-to-measure wardrobe design" },
      { src: "assets/gallery-wardrobes-01.jpg", alt: "Sliding wardrobe with internal storage" },
      { src: "assets/gallery-wardrobes-02.jpg", alt: "Hinged wardrobe with shelves and drawers" },
    ],
  },
  {
    slug: "media-walls",
    name: "Media Walls",
    rate: 2500,
    detail:
      "Media walls with concealed wiring and lighting — Classic from PKR 2,500 per sqft, up to Royal PKR 4,500.",
    image: "assets/work-media-walls.jpg",
    gallery: [
      { src: "assets/work-media-walls.jpg", alt: "Custom media wall design" },
      { src: "assets/gallery-media-walls-01.jpg", alt: "Walnut media wall with shelves and cabinets" },
      { src: "assets/gallery-media-walls-02.jpg", alt: "Light oak media wall with floating storage" },
    ],
  },
];

const processImages = { sketch: "assets/process-sketch.jpg", view: "assets/process-3d.jpg" };

// ---- Services page data ----
function optionWhatsapp(section, option) {
  return whatsappLink(`Salam! Mujhe "${option.en} — ${section.questionEn}" ke baare mein maloomat chahiye.`);
}

const serviceSections = [
  { id: "fit-out", eyebrow: "01 / Complete fit-out", questionUr: "Mukammal fit-out chahiye?", questionEn: "Complete MDF & UV work for homes, shops & offices", subhead: "Ghar, dukan ya office — poora kaam aik hi jagah se.", image: "assets/gallery-kitchens-01.jpg", imageAlt: "Complete MDF and UV fit-out of a home interior",
    options: [{ en: "Homes, shops & offices", ur: "Ghar, dukan, office" }, { en: "Kitchens & wardrobes", ur: "Kitchen aur wardrobe" }, { en: "Media walls & paneling", ur: "Media wall aur paneling" }, { en: "Measure, make & fit", ur: "Naap le kar bana kar fit" }, { en: "Your design", ur: "Aap ka apna design" }, { en: "All in one place", ur: "Sab kuch aik jagah" }] },
  { id: "office-furniture", eyebrow: "02 / Office furniture", questionUr: "Office furniture chahiye?", questionEn: "Tables, desks and workstations for your team", subhead: "Aap ke office ke naap ke mutabiq furniture banate hain.", image: "assets/svc-office-furniture.jpg", imageAlt: "Custom wooden executive desk and office storage",
    options: [{ en: "Executive tables", ur: "Executive table" }, { en: "Workstations", ur: "Workstations" }, { en: "Meeting tables", ur: "Meeting table" }, { en: "Reception counters", ur: "Reception counter" }, { en: "Storage cabinets", ur: "Storage cabinets" }, { en: "Sized to your office", ur: "Office ke size ke mutabiq" }] },
  { id: "shop-counter", eyebrow: "03 / Shop counter", questionUr: "Dukan ka counter chahiye?", questionEn: "Cash counters, display racks and showcases", subhead: "Cash counter, display rack aur showcase — dukan ke size par.", image: "assets/svc-shop-counter.jpg", imageAlt: "Curved shop cash counter with display showcases",
    options: [{ en: "Cash counters", ur: "Cash counter" }, { en: "Display racks", ur: "Display racks" }, { en: "Showcases", ur: "Showcase" }, { en: "LED-lit shelves", ur: "LED wale shelves" }, { en: "Storage units", ur: "Storage units" }, { en: "Built to your shop", ur: "Dukan ke size par bana" }] },
  { id: "office-cabinets", eyebrow: "04 / Office cabinets", questionUr: "Office cabinets chahiye?", questionEn: "File, storage and record cabinets for your office", subhead: "Files, record aur storage — sab ke liye mazboot cabinets.", image: "assets/svc-office-cabinets.jpg", imageAlt: "Office wall of file and storage cabinets",
    options: [{ en: "File cabinets", ur: "File cabinets" }, { en: "Lockable drawers", ur: "Lockable drawers" }, { en: "Glass-front cabinets", ur: "Glass-front cabinets" }, { en: "Record racks", ur: "Record racks" }, { en: "Low credenzas", ur: "Low credenza" }, { en: "Your colour choice", ur: "Aap ke pasand ka rang" }] },
  { id: "shoe-rack", eyebrow: "05 / Shoe rack", questionUr: "Shoe rack chahiye?", questionEn: "Shoe cabinets and shelves sized to your space", subhead: "Shoe cabinet aur shelves — aap ke space ke hisaab se.", image: "assets/svc-shoe-rack.jpg", imageAlt: "Modern handle-less shoe cabinet in a hallway",
    options: [{ en: "Shoe cabinets", ur: "Shoe cabinets" }, { en: "Wall shelves", ur: "Wall shelves" }, { en: "Book shelves", ur: "Book shelves" }, { en: "Handle-less designs", ur: "Handle-less design" }, { en: "With LED lighting", ur: "LED ke saath" }, { en: "Sized to your space", ur: "Space ke hisab se" }] },
  { id: "tv-unit-media-wall", eyebrow: "06 / TV unit & media wall", questionUr: "TV unit ya media wall chahiye?", questionEn: "Modern TV units and feature walls for your lounge", subhead: "TV unit aur media wall — chhupi wiring aur lighting ke saath.", image: "assets/work-media-walls.jpg", imageAlt: "Modern TV unit media wall with shelves and lighting",
    options: [{ en: "Modern designs", ur: "Modern designs" }, { en: "LED lighting space", ur: "LED lighting ki jagah" }, { en: "Hidden wiring", ur: "Chhupi hui wiring" }, { en: "Marble-look panels", ur: "Marble-look panels" }, { en: "Shelves & drawers", ur: "Shelves aur drawers" }, { en: "Floating units", ur: "Floating units" }] },
  { id: "kitchen", eyebrow: "07 / Kitchen", questionUr: "Naya kitchen banwana hai?", questionEn: "Kitchen cabinets made to fit your kitchen", subhead: "Aap ke kitchen ke naap ke mutabiq cabinets — UV high-gloss finish ke saath.", image: "assets/work-kitchens.jpg", imageAlt: "Modern custom kitchen with cream cabinets and warm lighting",
    options: [{ en: "Made to your size", ur: "Aap ke size ke mutabiq" }, { en: "Upper & base units", ur: "Upar aur neeche ke units" }, { en: "UV high-gloss", ur: "UV high-gloss" }, { en: "Quality hardware", ur: "Mazboot hardware" }, { en: "Clean edge finish", ur: "Saaf edge finish" }, { en: "Your colour choice", ur: "Aap ke pasand ka rang" }] },
  { id: "wardrobe", eyebrow: "08 / Wardrobe", questionUr: "Wardrobe banwana hai?", questionEn: "Wardrobes made to fit your room", subhead: "Kamre ke size par bana wardrobe — sliding ya hinged, jaise aap chahen.", image: "assets/work-wardrobes.jpg", imageAlt: "Custom wardrobe with warm lighting and hanging space",
    options: [{ en: "Sliding or hinged", ur: "Sliding ya hinged" }, { en: "Hanging & drawers", ur: "Hanging aur drawers" }, { en: "Glass & mirror options", ur: "Glass aur mirror ke options" }, { en: "Floor to ceiling", ur: "Floor se ceiling tak" }, { en: "With LED lighting", ur: "LED ke saath" }, { en: "Your colour choice", ur: "Aap ke pasand ka rang" }] },
  { id: "bedroom-set", eyebrow: "09 / Bedroom set", questionUr: "Bedroom ka set chahiye?", questionEn: "Beds, dressing tables & side tables to your design", subhead: "Bed, dressing table aur side tables — aik hi design ka matching set.", image: "assets/svc-bedroom-set.jpg", imageAlt: "Modern bedroom set with padded headboard and dressing table",
    options: [{ en: "Double & single beds", ur: "Double aur single bed" }, { en: "Beds with storage", ur: "Storage wale bed" }, { en: "Dressing tables", ur: "Dressing table" }, { en: "Side tables", ur: "Side tables" }, { en: "Padded headboards", ur: "Padded headboard" }, { en: "Matching set", ur: "Matching set" }] },
  { id: "wall-paneling", eyebrow: "10 / Wall paneling", questionUr: "Wall paneling karwani hai?", questionEn: "UV & MDF wall panels for lounges, bedrooms & offices", subhead: "Lounge, bedroom ya office ki deewar ke liye UV aur MDF panels.", image: "assets/svc-wall-paneling.jpg", imageAlt: "Lounge feature wall with fluted panels, marble-look UV sheet and LED lighting",
    options: [{ en: "Fluted panels", ur: "Fluted panels" }, { en: "Marble-look UV", ur: "Marble-look UV" }, { en: "With LED lighting", ur: "LED ke saath" }, { en: "Gold strip details", ur: "Gold strip detail" }, { en: "Bed back panels", ur: "Bed ke peeche panels" }, { en: "Sized to your wall", ur: "Deewar ke size ke mutabiq" }] },
];

// =====================================================================
// GALLERY — apni photos/videos yahan add karein (koi coding ki zaroorat nahi)
// =====================================================================
// Steps:
// 1) Apni photo/video file "assets" folder mein upload karein (GitHub par
//    "Add file -> Upload files" se, "assets" folder ke andar).
// 2) Neeche "galleryItems" list mein ek nayi line add karein, bilkul isi
//    format mein, aur comma lagana na bhoolein. type: "image" ya "video"
//    ho sakta hai. caption optional hai (Urdu/English kuch bhi likh sakte hain).
//
// Image example:
//   { type: "image", src: "assets/mera-kaam-01.jpg", caption: "Kitchen - Gujrat" },
//
// Video example (file khud upload ki hui, mp4 format):
//   { type: "video", src: "assets/mera-kaam-01.mp4", caption: "Wardrobe fitting" },
//
// YouTube video example (link se, file upload ki zaroorat nahi):
//   { type: "youtube", src: "VIDEO_ID_YAHAN", caption: "Kaam ki video" },
//   (VIDEO_ID woh code hai jo YouTube link mein "watch?v=" ke baad aata hai)
// =====================================================================
const galleryItems = [
  { type: "image", src: "assets/work-kitchens.jpg", caption: "Kitchen — sample work" },
  { type: "image", src: "assets/work-wardrobes.jpg", caption: "Wardrobe — sample work" },
  { type: "image", src: "assets/work-doors.jpg", caption: "Doors — sample work" },
  { type: "image", src: "assets/work-media-walls.jpg", caption: "Media wall — sample work" },
  // Yahan neeche apni nayi photo/video lines add karte jayen:
];

const buildReveals = [
  { slug: "kitchens", name: "Kitchen", before: "assets/kitchen-unfinished.jpg", after: "assets/work-kitchens.jpg", rate: 2500 },
  { slug: "wardrobes", name: "Wardrobe", before: "assets/wardrobe-unfinished.jpg", after: "assets/work-wardrobes.jpg", rate: 2500 },
];

const completedProjects = [
  { name: "Overseas Hospital", category: "Hospital" },
  { name: "Waris Hospital", category: "Hospital" },
  { name: "Makhdoomlab — Mandi Bahauddin", category: "Lab" },
  { name: "Makhdoomlab — Dinga", category: "Lab" },
  { name: "Makhdoomlab — Malkwal", category: "Lab" },
  { name: "Makhdoomlab — Gojra", category: "Lab" },
];

const whyUs = [
  { title: "Pehle sketch — doosre carpenter kabhi nahi dikhate.", text: "Ziyada tar carpenter bina kuch dikhaye kaat shuru kar dete hain. Hum pehle sketch dikhate hain, phir 3D view — jab aap ko pasand aa jaye tab hum kaam shuru karte hain." },
  { title: "Jo aap ne approve kiya wohi lagta hai.", text: "Agar aap ne Lite UV door aur steel fitting approve kiya, to wohi lagega — hum sasta material chhupa kar replace nahi karte." },
  { title: "Owner se koi jhoot, kuch chhupa nahi.", text: "Hum asli rate, asli material aur asli waqt batate hain — acha ho ya bura, seedhi baat, koi baat chhupi nahi." },
  { title: "Material aap ke saath ja kar khareedte hain.", text: "Kaam se pehle hum aap ke saath dukaan jate hain, aur har sheet aur fitting aap khud dekh kar aur check kar ke chunte hain." },
  { title: "Kaam se pehle likhi hui agreement.", text: "Rate, material, design aur waqt — sab kuch likh kar dono sign karte hain, ta ke dono ko koi dar ya shak nahi rehta." },
  { title: "Sirf tasveer nahi — asli cheez bana kar dikhate hain.", text: "Hum sirf photos nahi dikhate — asli material aur sample bana kar dikhate hain ke aap ke ghar mein kaisa lagega." },
  { title: "Approval se pehle changes free.", text: "Sketch ya 3D stage par jitni marzi tabdeeli karwa lein — koi fee nahi, aur material bhi zaya nahi hota." },
  { title: "Fixed per-sqft rate — koi surprise nahi.", text: "Door 1,500/sqft; Classic 2,500, Pro 3,500, Royal 4,500 — jo rate bola wohi dena hota hai, baad mein koi extra charge nahi." },
  { title: "Waqt par kaam khatam.", text: "Kaam shuru hone se pehle hi aap ko time table de dete hain aur us waqt par kaam mukammal karte hain — roz aana jaana aur bekaar lambi waiting nahi." },
  { title: "Experienced kaam, muqami fitters.", text: "Hamari apni training aur tajurba hai — kaam bahar ke contractor ko thokra nahi, jo banda aap ke ghar aata hai wohi kaam karta hai." },
  { title: "Kaam ke baad bhi saath.", text: "Kaam mukammal hone ke baad koi setting ya adjustment ki zaroorat pare to hum aakar theek karte hain — kaam le kar bhaagne wale nahi." },
];

const offers = {
  trade: "Shop owners aur builders ke liye discount rate available hai — apne project ki details bhej kar rate maloom karein.",
  loyalty10: "10 projects hum se karwaein, 11th project par 1% discount.",
  loyalty20: "20 projects hum se karwaein, 21st project par 2% discount only.",
};

const paymentTerms = [
  { step: "1", title: "Baat agreement par final hoti hai.", text: "Jab tak aap advance nahi denge, baat final nahi hogi — advance dene ke baad hi aap ka kaam hamari list mein aata hai." },
  { step: "2", title: "Kaam shuru — 50% advance payment.", text: "Kaam tab start hota hai jab aap 50% advance de dete hain. Isi advance se aap ka material khareeda jata hai." },
  { step: "3", title: "Kaam 50% complete — 40% payment.", text: "Jab aap ka kaam aadha mukammal ho jaye (aap khud dekh kar), tab 40% payment dete hain." },
  { step: "4", title: "Kaam bilkul complete — baqi 10% payment.", text: "Jab kaam poora khatam aur aap ko pasand aa jaye, tab aap baqi 10% de dete hain — aakhri rupay tab jab kaam aankhon ke saamne mukammal ho." },
];

const tiers = [
  { id: "classic", name: "Classic", rate: 2500, detail: "Clean straight lines, solid basics.", specs: ["Chipboard laminated box", "MDF laminated doors", "MDF laminated press board", "PVC normal edge banding (qabza patti)", "Normal handles", "Plastic catchers", "PVC finishing"] },
  { id: "pro", name: "Pro", rate: 3500, detail: "Better hardware and UV doors.", specs: ["Good quality chipboard laminated box", "Lite UV doors", "MDF laminated press board", "Steel edge banding (qabza patti)", "Medium quality handles", "Steel catchers", "Aluminium trim finishing"] },
  { id: "royal", name: "Royal", rate: 4500, detail: "Premium finish, soft-close throughout.", specs: ["High quality chipboard laminated box", "High gloss UV doors with PVC press", "Soft-close fittings", "High quality handles", "ABS edge banding finishing", "Profile lights & accessories not included"] },
];

function formatPKR(value) {
  return `PKR ${value.toLocaleString("en-PK")}`;
}

const steps = [
  { no: "01", title: "Sketch.", text: "We draw your space to scale and agree the layout." },
  { no: "02", title: "3D view.", text: "A rendered preview so you see every grain and joint." },
  { no: "03", title: "Approval.", text: "Change anything here — no wasted material." },
  { no: "04", title: "Build & install.", text: "Carved, sanded and fitted at your home." },
];

// ---- Nav active-state highlighting ----
function highlightNav() {
  const page = document.body.dataset.page;
  document.querySelectorAll("[data-nav]").forEach((el) => {
    if (el.dataset.nav === page) {
      el.classList.add(el.dataset.mobile !== undefined ? "nav-active-mobile" : "nav-active");
    }
  });
}

// ---- Scroll reveal (mirrors ScrollReveal.tsx) ----
function initScrollReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -35px 0px", threshold: 0.08 });

  elements.forEach((element) => {
    if (element.getBoundingClientRect().top < window.innerHeight + 80) return;
    element.classList.add("reveal-pending");
    observer.observe(element);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  highlightNav();
  initScrollReveal();
});

// ---- Gallery renderer (used by gallery.html) ----
function renderGallery(containerId) {
  const wrap = document.getElementById(containerId);
  if (!wrap) return;
  galleryItems.forEach((item) => {
    const cell = document.createElement("div");
    cell.className = "reveal overflow-hidden rounded-lg ring-1 ring-border bg-cream-2";
    if (item.type === "image") {
      cell.innerHTML = `
        <img src="${item.src}" alt="${item.caption || ""}" loading="lazy" class="aspect-square w-full object-cover">
        ${item.caption ? `<p class="px-2 py-2 text-xs text-ink/65">${item.caption}</p>` : ""}`;
    } else if (item.type === "video") {
      cell.innerHTML = `
        <video src="${item.src}" controls class="aspect-square w-full bg-black object-cover"></video>
        ${item.caption ? `<p class="px-2 py-2 text-xs text-ink/65">${item.caption}</p>` : ""}`;
    } else if (item.type === "youtube") {
      cell.innerHTML = `
        <div class="aspect-square w-full">
          <iframe class="size-full" src="https://www.youtube.com/embed/${item.src}" title="${item.caption || "Video"}" loading="lazy" allowfullscreen></iframe>
        </div>
        ${item.caption ? `<p class="px-2 py-2 text-xs text-ink/65">${item.caption}</p>` : ""}`;
    }
    wrap.appendChild(cell);
  });
}
