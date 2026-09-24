// ---------------------------------------------------------------
// Ingrid Sousa — Portfolio
// EDIT ME: update the LINKS object below with your real profile URLs.
// ---------------------------------------------------------------
const LINKS = {
  linkedin: "https://www.linkedin.com/in/ingrid-sousa-419751190",
  github: "https://github.com/Ingridssilva"
};

document.getElementById("linkedinLink").href = LINKS.linkedin;
document.getElementById("githubLink").href = LINKS.github;

// ---------------------------------------------------------------
// i18n
// ---------------------------------------------------------------
const translations = {
  en: {
    "nav.about": "About",
    "nav.journey": "Journey",
    "nav.education": "Education",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Tech",
    "nav.contact": "Contact",

    "hero.eyebrow": "Open to new opportunities",
    "hero.title": 'Hi, I\'m <span class="accent">Ingrid Sousa</span>',
    "hero.lead": "IT professional with hands-on experience in web development, technical support and IT infrastructure, process automation, and building corporate systems. Currently looking for a new opportunity in Web Development and Full Stack.",
    "hero.ctaProjects": "View projects",
    "hero.ctaContact": "Get in touch",

    "about.tag": "About me",
    "about.heading": "Who I am",
    "about.p1": "I have a background in Science and Technology and hands-on experience ranging from computer maintenance, formatting and configuration to building full applications — front-end, back-end, databases, authentication, integrations and deployment.",
    "about.p2": "I was the sole IT professional responsible for two operational regions of a company, which gave me a broad view of technology: beyond building systems, I had direct contact with users, infrastructure, internal processes, and day-to-day problem solving. That lets me understand not just how to build a solution, but the problem it needs to solve.",
    "about.p3": "I work mainly with Java, HTML, CSS, JavaScript, React, Python, PostgreSQL and Git/GitHub, plus tools like Supabase, Microsoft 365, and API integrations.",
    "about.location": "Location",
    "about.locationValue": "Santarém, Pará, Brazil",
    "about.role": "Area",
    "about.roleValue": "Full Stack Development &amp; Information Technology",
    "about.education": "Education",
    "about.educationValue": "Physics Engineering — UFOPA (ongoing)",
    "about.status": "Status",
    "about.statusValue": "Open to new opportunities",
    "about.email": "Email",

    "journey.tag": "Evolution",
    "journey.heading": "My journey",
    "journey.teacher.role": "Tutor / Remedial Teacher",
    "journey.teacher.period": "2020 – 2024",
    "journey.teacher.b1": "One-on-one support for students, preparing materials and adapting methodology to each student's needs.",
    "journey.teacher.b2": "Developed communication, organization, teaching ability, planning and time management — skills she still applies in technology today.",
    "journey.comms.role": "Communications, Marketing and Events",
    "journey.comms.period": "Alongside her role at Rezende Energia",
    "journey.comms.b1": "Video recording and editing, schedule organization, and support promoting internal events.",
    "journey.comms.b2": "Also worked as a bar waitress, developing customer service, communication, and working under pressure.",
    "journey.bacharelado.role": "B.Sc. in Science and Technology",
    "journey.bacharelado.b1": "Interdisciplinary foundation in mathematics, physics, computing and scientific methodology.",
    "journey.intern.role": "Process &amp; Technology Intern",
    "journey.intern.b1": "Close contact with internal processes and identifying problems that technology could solve — steering her path increasingly toward IT and development.",
    "journey.analyst.role": "IT Analyst / Full Stack Developer",
    "journey.analyst.period": "until August 2026",
    "journey.analyst.b1": "Responsible for nearly all of the company's IT needs: system development, support, maintenance, and equipment infrastructure.",
    "journey.now.role": "Looking for a new opportunity",
    "journey.now.period": "2026",
    "journey.now.b1": "Looking for environments to apply hands-on development experience, contribute to real solutions, and keep growing technically.",

    "edu.tag": "Education",
    "edu.heading": "Academic background",
    "edu.bacharelado.title": "B.Sc. in Science and Technology",
    "edu.bacharelado.period": "Completed",
    "edu.bacharelado.desc": "Interdisciplinary foundation covering mathematics, physics, computing, technology, engineering, logical reasoning and scientific methodology.",
    "edu.physics.title": "Physics Engineering",
    "edu.physics.period": "In progress",
    "edu.physics.desc": "Hands-on work in materials, electronics and experimentation labs — numerical modeling in Python, including heat transfer and electrical machines.",

    "exp.tag": "Experience",
    "exp.heading": "Professional experience",
    "exp.devTitle": "Development",
    "exp.dbDeploy": "Database &amp; Deploy",
    "exp.supportTitle": "Support &amp; Infrastructure",
    "exp.supportLead": "Beyond development, she was responsible for several support and maintenance tasks:",
    "exp.t1": "Computer formatting",
    "exp.t2": "System installation and updates",
    "exp.t3": "Laptop and peripheral setup",
    "exp.t4": "Preventive maintenance",
    "exp.t5": "Troubleshooting",
    "exp.t6": "Equipment and corporate phone evaluation",
    "exp.t7": "Employee support",
    "exp.quote": "My work in IT was quite broad, ranging from physical maintenance and equipment configuration to developing systems used internally by the company.",

    "projects.tag": "Work",
    "projects.heading": "Systems &amp; projects",
    "filter.all": "All",
    "filter.internal": "Internal systems",
    "filter.personal": "Personal / Freelance",
    "badge.internal": "Internal system",
    "badge.personal": "Personal project",

    "proj.travel.title": "Travel &amp; Meal Management",
    "proj.travel.desc": "Web system for managing employee travel and meal requests, with email/password and Microsoft login, session control, and a multi-step approval workflow.",
    "proj.sesmt.title": "SESMT — Workplace Safety",
    "proj.sesmt.desc": "Progressive web app (PWA) for field safety inspections, with offline capability, integration with Microsoft services, document generation, and electronic signatures.",
    "proj.assets.title": "Asset Management",
    "proj.assets.desc": "Electronics and asset inventory tracker with automatic PDF generation of responsibility terms, keeping an ownership history for each item.",
    "proj.fuel.title": "Fuel Management",
    "proj.fuel.desc": "Fuel supply control with tank/container tracking, fraud detection, and support for retroactive entries in field operations.",
    "proj.gpm.title": "GPM Management",
    "proj.gpm.desc": "System for managing and organizing team and staff information, with data processing and analysis.",
    "proj.receivables.title": "Receivables Management",
    "proj.receivables.desc": "Web system for tracking and organizing receivables, centralizing administrative workflows and financial information.",
    "proj.hr.title": "Recruitment &amp; HR Portal",
    "proj.hr.desc": "Recruitment and admissions platform with candidate registration/management and a guided 17-step onboarding workflow.",
    "proj.schedule.title": "Time-Off Scheduling",
    "proj.schedule.desc": "Web system for managing and viewing time-off schedules, replacing a previous Streamlit-based tracker — centralizes and simplifies access for employees.",
    "proj.marketing.title": "Marketing Request System",
    "proj.marketing.desc": "Application to organize marketing department requests, preventing them from being scattered across messages — centralizes requests, deadlines and workflow.",
    "proj.fleet.title": "Fleet Maintenance",
    "proj.fleet.desc": "Fleet maintenance management with a Kanban board, work-order approval workflow, budget/quotation flows, and financial notifications.",
    "proj.vacation.title": "Vacation &amp; Occupational Health Tracking",
    "proj.vacation.desc": "Vacation and occupational health exam (ASO) management, with automatic expiration reminders and per-employee history.",
    "proj.eval.title": "Performance Evaluation",
    "proj.eval.desc": "Employee evaluation system, migrated from a Streamlit prototype to a serverless architecture on Cloudflare Pages + D1.",
    "proj.costs.title": "Fixed Costs &amp; Contracts",
    "proj.costs.desc": "Fixed cost and contract management system, centralizing due dates, amounts, and contract owners.",
    "proj.invoice.title": "Notafiscal.py",
    "proj.invoice.desc": "Python/Streamlit tool that automates organizing and renaming PDF invoices using the pattern \"NF [NUMBER] - [COMPANY NAME]\", cutting down repetitive manual work.",
    "proj.social.title": "Social Media Strategy",
    "proj.social.desc": "Content planning and branding for social media, including a visual identity campaign for a tattoo studio.",
    "tag.contentStrategy": "Content strategy",
    "projects.note": "The systems above were built for internal use at Rezende Energia. Public GitHub versions, where they exist, are recreated generically, without the company's data, credentials, or visual identity.",

    "skills.tag": "Tech stack",
    "skills.heading": "Technologies",
    "skills.languages": "Languages",
    "skills.frameworks": "Frameworks &amp; libraries",
    "skills.backend": "Backend",
    "skills.frontend": "Frontend",
    "skills.data": "Database",
    "skills.tools": "Tools",
    "skills.integrations": "Microsoft &amp; integrations",
    "skills.deploy": "Deploy",
    "skills.scientific": "Scientific computing",
    "skills.heatTransfer": "Heat transfer",
    "skills.electricalMachines": "Electrical machines",
    "skills.docs": "Documents &amp; e-signature",
    "skills.pdfGen": "PDF generation",

    "diff.tag": "Differentiator",
    "diff.heading": "What sets me apart?",
    "diff.quote1": "My professional experience gave me a broad view of technology. Besides building applications, I also had direct contact with users, infrastructure, computer maintenance, internal processes, requirements gathering, and problem-solving.",
    "diff.quote2": "That lets me understand not just how to build a solution, but the problem that needs solving.",
    "softskills.heading": "Soft skills",
    "soft.1": "Communication",
    "soft.2": "Organization",
    "soft.3": "Proactivity",
    "soft.4": "Problem-solving",
    "soft.5": "Logical thinking",
    "soft.6": "Self-taught learning",
    "soft.7": "Teamwork",
    "soft.8": "Adaptability",
    "soft.9": "Time management",
    "soft.10": "Responsibility",
    "soft.11": "User support",
    "soft.12": "Turning needs into solutions",

    "contact.heading": "Let's talk?",
    "contact.lead": "Open to opportunities in Web Development and Full Stack. Send a message or connect with me.",
    "contact.linkedin": "🔗 LinkedIn",
    "contact.github": "💻 GitHub",

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
