import ProfileImage from "@/components/ProfileImage";

const systemBlocks = [
  {
    k: "01",
    title: "Chaos → Source of Truth",
    body: "Reverse-engineered scattered product, supplier, CRM, proposal and operational knowledge into relational data models with controlled ownership logic.",
  },
  {
    k: "02",
    title: "SaaS Silos → SalesOS",
    body: "Replaced isolated Pipedrive + PandaDoc workflows with a cohesive custom SalesOS for account intelligence, offer logic, knowledge retrieval and follow-up execution.",
  },
  {
    k: "03",
    title: "Docs → AI Agents",
    body: "Converted PDFs, exports, internal notes and product records into MCP-ready knowledge packs, Claude Skills and repeatable agent workflows.",
  },
  {
    k: "04",
    title: "R&D → Commercial Logic",
    body: "Structured UAV/ISR/RF/payload knowledge so technical capability, field data and commercial positioning can be reasoned over by humans and AI systems.",
  },
];

const skylineBullets = [
  "Entered a fragmented commercial/product environment and rebuilt the operating model from first principles.",
  "Mapped accounts, contacts, deals, activities, offers, products, services, use cases, capabilities, assets and follow-up workflows into accurate relational structures.",
  "Built a custom SalesOS replacing siloed CRM/proposal workflows with one cohesive operational layer for commercial execution and leadership visibility.",
  "Designed AI-assisted workflows using Claude.ai, Claude Code, MCP, Airtable, GitHub, Vercel and structured knowledge packs.",
  "Created internal agents for commercial advisory, proposal briefs, product Q&A, event readiness, lead qualification and follow-up summarization.",
  "Built lead-magnet capture flows, SEO-indexed service pages, sitemap logic and GTM funnels tied to internal campaign and knowledge logic.",
  "Extended the system into R&D-oriented knowledge workflows across UAV platforms, ISR payloads, RF-spectrum awareness, Remote ID/C-UAS, sensor data collection and data-fusion narratives.",
];

const roles = [
  {
    period: "2026 — Present",
    company: "Skyline Drones / La Orizont Group",
    title: "Product Manager · AI Systems & Commercial Automation",
    focus: "AI agents, SalesOS, MCP retrieval, R&D knowledge infrastructure",
    bullets: skylineBullets,
    stack: ["Claude Code", "Claude.ai", "MCP", "AI Agents", "Airtable", "GitHub", "Vercel", "SalesOS", "Pipedrive", "PandaDoc", "SharePoint"],
  },
  {
    period: "2025",
    company: "AdStart Media",
    title: "Product Solution Manager / Product Owner",
    focus: "Internal products, audits, data flows, KPI logic, cloud dependencies",
    bullets: [
      "Owned internal products used by Commercial, BI and IT across partially merged teams.",
      "Reverse-engineered undocumented APIs, pipelines, infra dependencies and ownership gaps.",
      "Translated system findings into product architecture, Jira epics, monitoring logic and refactoring plans.",
    ],
    stack: ["Product Ownership", "APIs", "SQL", "Cloud", "Monitoring", "Jira", "BI Pipelines"],
  },
  {
    period: "2022 — 2025",
    company: "WebHunt.io",
    title: "Founder / Product Owner",
    focus: "GTM systems, outbound intelligence, LLM workflows, enrichment automation",
    bullets: [
      "Built automation-first GTM systems for SaaS, cybersecurity, telecom and gov-adjacent clients.",
      "Implemented LLM-assisted enrichment, scoring, routing, segmentation and decision-support workflows.",
      "Designed controlled retrieval and deterministic inputs to reduce hallucinations in business workflows.",
    ],
    stack: ["LLM APIs", "n8n", "Make", "Webhooks", "Enrichment APIs", "Prompt Engineering", "GDPR"],
  },
  {
    period: "2023 — 2024",
    company: "Relario Voice AG",
    title: "COO — Telecom Advertising Products",
    focus: "Telecom product rules, routing, CDR validation, monetization logic",
    bullets: [
      "Owned commercial and operational product logic for telecom-based advertising systems.",
      "Worked with CDRs, completion rates, route quality, reporting validation and fraud signals.",
      "Contributed to early telecom-based 2FA / flash-call feasibility and commercial logic.",
    ],
    stack: ["Telecom Metrics", "Routing Logic", "CDRs", "Fraud Signals", "Reporting Validation"],
  },
  {
    period: "2019 — 2021",
    company: "Twispay / Capital Financial Services",
    title: "Senior Business Development Manager",
    focus: "Payments, API onboarding, risk, merchant integration",
    bullets: [
      "Owned full-cycle sales for EU merchants, including high-risk verticals.",
      "Participated in technical onboarding across APIs, callbacks, webhooks and 3DS behavior.",
      "Worked with Product, Fraud, AML and Engineering to re-scope or block risky deals.",
    ],
    stack: ["Payment APIs", "3DS", "Webhooks", "Risk Logic", "AML", "Merchant Onboarding"],
  },
  {
    period: "2012 — 2018",
    company: "BitterStrawberry AG",
    title: "Affiliate Growth Manager — AdTech / Performance Marketing",
    focus: "Traffic routing, attribution, monetization, supply/demand growth",
    bullets: [
      "Owned supply and demand growth for mobile AdTech performance campaigns.",
      "Managed tracking, redirects, postbacks, subIDs, payouts, caps and traffic validation.",
      "Optimized performance by GEO, device, carrier, OS and source to maximize EPC and reduce fraud.",
    ],
    stack: ["SSP/DSP", "Media Buying", "Attribution", "Postbacks", "Traffic Routing", "Fraud Signals"],
  },
];

const labItems = [
  ["Agentic layer", "Claude.ai Skills, prompt menus, governed response formats and reusable workflows for commercial/product users."],
  ["MCP retrieval", "Private connector architecture exposing curated records, structured knowledge packs and evidence-based internal Q&A."],
  ["SalesOS", "Custom business operating system replacing fragmented CRM/proposal flows with relational account, offer and follow-up logic."],
  ["R&D knowledge", "ISR, RF-spectrum, payloads, Remote ID/C-UAS and sensor-data workflows translated into queryable product logic."],
  ["GTM surfaces", "Lead magnets, capture flows, SEO-indexed service funnels and structured landing-page systems tied to internal data."],
  ["Governance", "Claim-safety, pricing exposure rules, legal caveats, output constraints and human-review loops for sensitive domains."],
];

const skills = [
  "Product Ownership", "AI Agents", "Claude Code", "MCP", "RAG-style Retrieval", "Prompt Architecture", "Airtable Data Models", "SalesOS", "API Systems", "Data Pipelines", "Automation", "GTM Systems", "Commercial Ops", "ISR/RF Product Logic", "Payload & Sensor Workflows", "SEO Funnels", "Vercel", "GitHub", "SQL Validation", "Cloud Fundamentals", "GDPR Controls"
];

const certs = ["AWS Certified Cloud Practitioner", "Certified Ethical Hacker CEH v12", "GIAC Open Source Intelligence", "Certified Data Protection Officer", "BSc Economics & Management — ASE Bucharest"];

export default function Home() {
  return (
    <main>
      <div className="ambient" aria-hidden="true" />
      <header className="nav-shell">
        <a className="brand" href="#top" aria-label="Leonard Dumitru home">
          <span className="brand-mark">LD</span>
          <span>
            <strong>Leonard Dumitru</strong>
            <em>Product / AI Systems</em>
          </span>
        </a>
        <nav>
          <a href="#os">Operating System</a>
          <a href="#rd">R&D Layer</a>
          <a href="#experience">Experience</a>
          <a href="#stack">Stack</a>
        </nav>
      </header>

      <section id="top" className="hero shell">
        <div className="hero-copy panel neon-edge">
          <div className="status-line">
            <span className="pulse" /> AVAILABLE FOR AI / PRODUCT SYSTEMS ROLES
          </div>
          <h1>
            Product & AI Systems Architect
            <span> building commercial operating systems.</span>
          </h1>
          <p className="hero-text">
            I turn messy business environments into structured product systems: relational data models,
            AI-agent workflows, retrieval layers, SalesOS architecture, GTM automation and R&D knowledge infrastructure.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="mailto:wh-systems@proton.me">Contact</a>
            <a className="btn" href="https://www.linkedin.com/in/wh-systems/">LinkedIn</a>
            <a className="btn ghost" href="#experience">View work</a>
          </div>
          <div className="command-card">
            <div className="terminal-top"><span /> <span /> <span /></div>
            <pre>{`> system.identity\nLeonard Dumitru\n\n> current.scope\nAI agents + MCP retrieval + custom SalesOS + R&D product logic\n\n> operating.model\nchaos -> relational source of truth -> agent workflows -> business execution`}</pre>
          </div>
        </div>

        <aside className="profile-panel panel">
          <div className="profile-frame"><ProfileImage /></div>
          <div className="profile-meta">
            <span className="mono">Bucharest, Romania</span>
            <h2>Sales → Product → AI Systems</h2>
            <p>12+ years across AdTech, SaaS, Telecom, GTM automation, AI-enabled workflows and technical-commercial product systems.</p>
          </div>
          <div className="signal-grid">
            <div><strong>12+</strong><span>years</span></div>
            <div><strong>AI</strong><span>agents</span></div>
            <div><strong>MCP</strong><span>retrieval</span></div>
            <div><strong>SalesOS</strong><span>systems</span></div>
          </div>
        </aside>
      </section>

      <section id="os" className="shell section">
        <div className="section-head">
          <span className="mono">/ operating-system</span>
          <h2>What I am building now</h2>
          <p>Not a sales role. Not a documentation role. It is product architecture for AI-operable business execution.</p>
        </div>
        <div className="system-grid">
          {systemBlocks.map((item) => (
            <article className="system-card panel" key={item.k}>
              <span className="node">{item.k}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="rd" className="shell section split">
        <div className="panel rd-panel neon-edge">
          <span className="mono">/ r-and-d-product-layer</span>
          <h2>AI + R&D knowledge infrastructure</h2>
          <p>
            At Skyline / La Orizont, the AI work is not generic chatbot usage. It is a structured knowledge and agent layer built around UAV systems, ISR payloads, RF-spectrum awareness, Remote ID/C-UAS, sensor data collection, data fusion and critical-infrastructure sensing.
          </p>
          <p>
            The goal is to make complex technical capability searchable, governed and commercially usable without flattening it into marketing copy or relying on unreliable LLM memory.
          </p>
        </div>
        <div className="lab-grid">
          {labItems.map(([title, body]) => (
            <article className="lab-card" key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="shell section">
        <div className="section-head rowed">
          <div>
            <span className="mono">/ experience</span>
            <h2>Work history</h2>
          </div>
          <p>Product ownership, GTM systems, telecom logic, AI workflows and technical-commercial execution.</p>
        </div>
        <div className="timeline">
          {roles.map((role) => (
            <article className="timeline-item panel" key={`${role.company}-${role.period}`}>
              <div className="timeline-meta">
                <span className="mono">{role.period}</span>
                <strong>{role.company}</strong>
              </div>
              <div className="timeline-body">
                <h3>{role.title}</h3>
                <p className="focus">{role.focus}</p>
                <ul>
                  {role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
                <div className="chip-row">
                  {role.stack.map((s) => <span className="chip" key={s}>{s}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="stack" className="shell section stack-section">
        <div className="panel stack-panel">
          <span className="mono">/ stack</span>
          <h2>Core stack & capabilities</h2>
          <div className="skill-cloud">
            {skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </div>
        <div className="panel cert-panel">
          <span className="mono">/ credentials</span>
          <h2>Credentials</h2>
          <ul>
            {certs.map((cert) => <li key={cert}>{cert}</li>)}
          </ul>
          <div className="contact-card">
            <strong>wh-systems@proton.me</strong>
            <span>+40 774 008 831</span>
            <span>linkedin.com/in/wh-systems</span>
          </div>
        </div>
      </section>
    </main>
  );
}
