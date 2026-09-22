// ---------------------------------------------------------------
// Ingrid Sousa — Portfolio
// EDIT ME: update the LINKS object below with your real profile URLs.
// ---------------------------------------------------------------
const LINKS = {
  linkedin: "https://www.linkedin.com/in/SEU-USUARIO", // <- replace with your LinkedIn URL
  github: "https://github.com/SEU-USUARIO"            // <- replace with your GitHub URL
};

document.getElementById("linkedinLink").href = LINKS.linkedin;
document.getElementById("githubLink").href = LINKS.github;

// ---------------------------------------------------------------
// i18n
// ---------------------------------------------------------------
const translations = {
  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.contact": "Contact",

    "hero.eyebrow": "Open to new opportunities",
    "hero.title": 'Hi, I\'m <span class="accent">Ingrid Sousa</span>',
    "hero.lead": "Junior Full Stack Developer from Santarém, Pará, Brazil. I build internal web systems from scratch — from the database to the interface — and I'm studying Physics Engineering at UFOPA.",
    "hero.ctaProjects": "View projects",
    "hero.ctaContact": "Get in touch",

    "about.tag": "About me",
    "about.heading": "Who I am",
    "about.p1": "I'm a junior full stack developer with a solid background in web development and scientific computing. I was the sole IT professional responsible for two operational regions, building and maintaining around 12 internal systems from scratch — from requirements gathering to production deployment.",
    "about.p2": "I enjoy solving real operational problems with simple, reliable software: approval workflows, document generation, automation, and Microsoft 365 integrations. I'm also studying Physics Engineering, which gave me an extra foundation in numerical modeling and problem-solving with Python.",
    "about.location": "Location",
    "about.locationValue": "Santarém, Pará, Brazil",
    "about.role": "Role",
    "about.roleValue": "Junior Full Stack Developer",
    "about.education": "Education",
    "about.educationValue": "Physics Engineering — UFOPA (ongoing)",
    "about.status": "Status",
    "about.statusValue": "Open to new opportunities",
    "about.email": "Email",

    "skills.tag": "Tech stack",
    "skills.heading": "Skills &amp; tools",
    "skills.backend": "Backend",
    "skills.frontend": "Frontend",
    "skills.data": "Data &amp; Infrastructure",
    "skills.integrations": "Integrations &amp; Identity",
    "skills.scientific": "Scientific computing",
    "skills.heatTransfer": "Heat transfer",
    "skills.electricalMachines": "Electrical machines",
    "skills.other": "Other",
    "skills.pwa": "PWA / Offline-first",
    "skills.pdfGen": "PDF generation",
    "skills.itSupport": "Technical support",

    "projects.tag": "Work",
    "projects.heading": "Systems &amp; projects",
    "filter.all": "All",
    "filter.internal": "Internal systems",
    "filter.personal": "Personal / Freelance",
    "badge.internal": "Internal system",
    "badge.personal": "Personal project",

    "proj.assets.title": "Asset Management",
    "proj.assets.desc": "Electronics and asset inventory tracker with automatic PDF generation of responsibility terms, keeping an ownership history for each item.",
    "proj.fuel.title": "Fuel Management",
    "proj.fuel.desc": "Fuel supply control with tank/container tracking, fraud detection, and support for retroactive entries in field operations.",
    "proj.travel.title": "Travel &amp; Per Diem Requests",
    "proj.travel.desc": "Multi-step approval workflow for travel and meal requisitions, with PDF generation and automatic upload to SharePoint.",
    "proj.hr.title": "HR &amp; Onboarding Platform",
    "proj.hr.desc": "Recruitment and admissions platform with a guided 17-step onboarding workflow, from candidate registration to full integration.",
    "proj.food.title": "Supply Requisition",
    "proj.food.desc": "Food and supply requisition system for field dormitories, with stock control and per-unit approval.",
    "proj.vacation.title": "Vacation &amp; Occupational Health Tracking",
    "proj.vacation.desc": "Vacation and occupational health exam (ASO) management, with automatic expiration reminders and per-employee history.",
    "proj.fleet.title": "Fleet Maintenance",
    "proj.fleet.desc": "Fleet maintenance management with a Kanban board, work-order approval workflow, budget/quotation flows, and financial notifications.",
    "proj.safety.title": "Workplace Safety Inspections",
    "proj.safety.desc": "Progressive web app (PWA) for field safety inspections, with offline capability and later synchronization.",
    "proj.schedule.title": "Team Scheduling",
    "proj.schedule.desc": "Team scheduling system reading Excel spreadsheets from SharePoint via Microsoft Graph, with a Kanban board to track staff on loan between teams.",
    "proj.eval.title": "Performance Evaluation",
    "proj.eval.desc": "Employee evaluation system, migrated from a Streamlit prototype to a serverless architecture on Cloudflare Pages + D1.",
    "proj.costs.title": "Fixed Costs &amp; Contracts",
    "proj.costs.desc": "Fixed cost and contract management system, centralizing due dates, amounts, and contract owners.",
    "proj.invoice.title": "Invoice Processor",
    "proj.invoice.desc": "Python tool that automatically renames and organizes PDF fiscal documents based on data extracted from each invoice.",
    "proj.social.title": "Social Media Strategy",
    "proj.social.desc": "Content planning and branding for social media, including a visual identity campaign for a tattoo studio.",
    "tag.contentStrategy": "Content strategy",

    "exp.tag": "Career",
    "exp.heading": "Professional experience",
    "exp.role2": "IT Analyst / Full Stack Developer",
    "exp.period2": "until August 2026",
    "exp.role2.b1": "Sole IT professional responsible for the Northeast and West regions of the operation.",
    "exp.role2.b2": "Designed, built, and maintained around 12 internal web systems from scratch, covering assets, fleet, HR, workplace safety, and financial management.",
    "exp.role2.b3": "Managed identity and access (Microsoft 365 / Azure AD), technical support, and IT infrastructure for the operation.",
    "exp.role1": "Process &amp; Technology Intern",
    "exp.period1": "Initial internship",
    "exp.role1.b1": "Started in the Process and Technology area, moving into full stack development as demand for internal systems grew.",

    "edu.tag": "Education",
    "edu.heading": "Education",
    "edu.physics.title": "Physics Engineering",
    "edu.physics.period": "In progress",
    "edu.physics.desc": "Numerical modeling in Python, including heat transfer and electrical machines.",
    "edu.bacharelado.title": "B.Sc. in Science and Technology",
    "edu.bacharelado.period": "Completed",
    "edu.bacharelado.desc": "Interdisciplinary foundation in exact sciences, the basis for specializing in Physics Engineering.",

    "contact.heading": "Let's talk",
    "contact.lead": "Open to opportunities as a junior developer. Send a message or connect with me.",
    "contact.linkedin": '🔗 LinkedIn <span class="edit-note">edit link</span>',
    "contact.github": '💻 GitHub <span class="edit-note">edit link</span>',

    "footer.text": "&copy; 2026 Ingrid Sousa. Built with HTML, CSS and JavaScript."
  }
};

const originals = {}; // cache of pt-BR (default) text, filled on first run
let currentLang = "pt";

function collectOriginals() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    originals[key] = el.textContent;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    originals[key] = el.innerHTML;
  });
}

function applyLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === "en" ? "en" : "pt-BR";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = lang === "en" && translations.en[key] ? translations.en[key] : originals[key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    el.innerHTML = lang === "en" && translations.en[key] ? translations.en[key] : originals[key];
  });

  document.getElementById("btnPt").classList.toggle("active", lang === "pt");
  document.getElementById("btnEn").classList.toggle("active", lang === "en");

  document.title = lang === "en"
    ? "Ingrid Sousa — Full Stack Developer"
    : "Ingrid Sousa — Desenvolvedora Full Stack";

  try { localStorage.setItem("portfolio-lang", lang); } catch (e) { /* ignore */ }
}

document.addEventListener("DOMContentLoaded", () => {
  collectOriginals();

  let saved = "pt";
  try { saved = localStorage.getItem("portfolio-lang") || "pt"; } catch (e) { /* ignore */ }
  applyLang(saved);

  document.getElementById("btnPt").addEventListener("click", () => applyLang("pt"));
  document.getElementById("btnEn").addEventListener("click", () => applyLang("en"));

  // mobile menu
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => navLinks.classList.remove("open"))
  );

  // project filter
  const filterBar = document.getElementById("filterBar");
  const cards = document.querySelectorAll(".project-card");
  filterBar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    filterBar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    cards.forEach((card) => {
      const show = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("hidden", !show);
    });
  });
});
