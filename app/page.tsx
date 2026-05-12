"use client";

import { useState } from "react";

const sections = [
  {
    id: "what",
    title: "What I actually do",
    kicker: "operating logic",
    items: [
      {
        title: "Mapping the system",
        body: "Understand the real architecture: equipment, data, workflows, users, constraints, edge cases and failure points.",
      },
      {
        title: "Structuring the knowledge",
        body: "Turn documents, supplier information, field experience and internal know-how into searchable, reusable and AI-readable knowledge layers.",
      },
      {
        title: "Defining product behavior",
        body: "Write the logic behind tools, dashboards, workflows, automations, proposals, data flows and internal platforms.",
      },
      {
        title: "Connecting teams",
        body: "Translate between engineers, field teams, commercial teams, leadership and clients without losing technical detail.",
      },
    ],
  },
  {
    id: "focus",
    title: "Current defence-relevant focus",
    kicker: "domain surface",
    items: [
      {
        title: "UAV / ISR / sensing systems",
        body: "UAV operations, inspections, LiDAR, photogrammetry, digital twins, critical infrastructure sensing, payload categories and deployment logic.",
      },
      {
        title: "RF / Remote ID / C-UAS-related products",
        body: "RF-awareness, Remote ID, C-UAS-related positioning, equipment framing, systems integration and operational use-case mapping.",
      },
      {
        title: "AI knowledge systems",
        body: "Claude / MCP-style internal assistants, RAG-style retrieval, structured technical Q&A, proposal support, claim boundaries and controlled AI workflows.",
      },
      {
        title: "Telecom and mobile intelligence data",
        body: "CDRs, routing logic, completion rates, carrier/device/GEO signals, flash-call concepts, fraud/performance anomalies and telecom product rules.",
      },
      {
        title: "OSINT / cyber mindset",
        body: "Reconnaissance, infrastructure mapping, data enrichment, API behavior, fraud signals, privacy-aware workflows and adversarial thinking.",
      },
    ],
  },
  {
    id: "fit",
    title: "Where I fit best",
    kicker: "deployment context",
    items: [
      {
        title: "Defence or dual-use technology",
        body: "When capability exists but the product architecture, user story, evidence model or operational narrative is not yet clear.",
      },
      {
        title: "UAV / RF / sensor systems",
        body: "When technical capabilities need structured use cases, operator workflows, proposal logic and client-facing explanation.",
      },
      {
        title: "AI initiatives grounded in reality",
        body: "When AI needs to work with real data, real constraints, source boundaries and controlled outputs instead of generic demos.",
      },
      {
        title: "Scattered technical knowledge",
        body: "When documents, engineers, suppliers, field notes and commercial conversations need to become searchable and reusable.",
      },
      {
        title: "Commercial teams selling complex systems",
        body: "When sales needs a clean technical narrative without flattening the actual engineering or operational constraints.",
      },
    ],
  },
  {
    id: "system",
    title: "Recent system built",
    kicker: "Skyline / La Orizont context",
    items: [
      {
        title: "Architecture DB",
        body: "Structured a fragmented UAV and sensing ecosystem into a relational product / service / capability model covering industries, problems, equipment, use cases, offers, funnels and follow-up logic.",
      },
      {
        title: "SalesOS layer",
        body: "Connected accounts, contacts, deals, offers, activities, owners, proposal context and follow-up workflows into one cohesive operating layer.",
      },
      {
        title: "AI knowledge workflows",
        body: "Built Claude / MCP-style workflows for internal Q&A, proposal briefs, product reasoning, event readiness and claim-safe technical narratives.",
      },
      {
        title: "Core model",
        body: "Industry → Problem → Capability → Service → Equipment → Use Case → Offer → Funnel → Follow-up.",
      },
    ],
  },
  {
    id: "surface",
    title: "Technical surface area",
    kicker: "tools and domains",
    items: [
      {
        title: "Product systems",
        body: "Product architecture, workflows, requirements, acceptance criteria, documentation, ownership models, edge cases and QA logic.",
      },
      {
        title: "AI / automation",
        body: "Claude, Claude Code, MCP, LLM APIs, RAG-style retrieval, prompt architecture, AI agents, Make, n8n, webhooks and enrichment pipelines.",
      },
      {
        title: "Data / cloud",
        body: "SQL, Airtable, JSON, APIs, AWS Lambda, S3, Glue, Athena, EC2, Docker, Linux CLI, GitHub and Vercel.",
      },
      {
        title: "Telecom / intelligence data",
        body: "CDRs, routing, carrier/device/GEO signals, attribution, traffic validation, flash-call / 2FA logic and anomaly detection.",
      },
      {
        title: "Security / research",
        body: "OSINT, CEH methodology, infrastructure research, KYC/AML signals, fraud logic, privacy-by-design and lawful data processing.",
      },
    ],
  },
];

const chips = [
  "AI Systems",
  "UAV/RF",
  "Telecom Data",
  "OSINT",
  "Defence Workflows",
  "MCP",
  "Claude Code",
  "SalesOS",
];

const starters = [
  "turn UAV/RF capabilities into product architecture",
  "build AI assistants that do not hallucinate technical claims",
  "structure defence-adjacent knowledge for sales, proposals and operations",
  "translate telecom metadata into product logic",
  "bridge engineers, operators and commercial teams",
  "map messy internal systems into something usable",
];

const credentials = [
  "Certified Ethical Hacker v12",
  "GIAC Open Source Intelligence",
  "AWS Certified Cloud Practitioner",
  "Certified Data Protection Officer",
];

function AccordionSection({ section, initiallyOpen = false }: { section: typeof sections[number]; initiallyOpen?: boolean }) {
  const [open, setOpen] = useState(initiallyOpen);

  return (
    <article className="accordionCard" id={section.id}>
      <button className="accordionHeader" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>
          <em>{section.kicker}</em>
          <strong>{section.title}</strong>
        </span>
        <b>{open ? "−" : "+"}</b>
      </button>
      {open && (
        <div className="accordionBody">
          {section.items.map((item) => (
            <div className="logicItem" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <header className="topbar" aria-label="Page navigation">
        <a className="identity" href="#top" aria-label="Leonard Dumitru profile">
          <span className="idMark">LD</span>
          <span>
            <strong>Leonard Dumitru</strong>
            <em>QR landing card</em>
          </span>
        </a>
        <nav>
          <a href="#what">What I do</a>
          <a href="#focus">Focus</a>
          <a href="#system">System built</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="hero shell">
        <div className="heroCopy">
          <p className="overline">Technical Product Operator</p>
          <h1>Technical Product Operator for AI, UAV/RF, Telecom Data & Defence Workflows</h1>
          <p className="lead">
            I build AI-enabled product systems for defence-adjacent environments where UAVs, RF, telecom data, OSINT and operational knowledge need to become structured workflows, internal tools and usable intelligence.
          </p>
          <div className="chipRow" aria-label="Areas of work">
            {chips.map((chip) => <span key={chip}>{chip}</span>)}
          </div>
          <div className="heroActions">
            <a className="primaryAction" href="mailto:wh-systems@proton.me">Email</a>
            <a className="secondaryAction" href="https://www.linkedin.com/in/wh-systems/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>

        <aside className="profileCard">
          <div className="photoWrap">
            <img src="/profile.jpg" alt="Leonard Dumitru" className="profilePhoto" />
          </div>
          <div className="profileDetails">
            <h2>Leonard Dumitru</h2>
            <p>AI Systems · UAV/RF · Telecom Data · OSINT · Defence Workflows</p>
            <div className="contactMini">
              <span>Bucharest, Romania</span>
              <a href="mailto:wh-systems@proton.me">wh-systems@proton.me</a>
              <a href="tel:+40774008831">+40 774 008 831</a>
            </div>
          </div>
        </aside>
      </section>

      <section className="shell introGrid" aria-label="Profile summary">
        <article className="plainCard wide">
          <span className="cardLabel">not a CV</span>
          <p>
            A quick map of where I work best: complex systems, technical product logic, AI workflows, UAV/RF, telecom data and defence-adjacent operations.
          </p>
        </article>
        <article className="plainCard codeCard">
          <span className="cardLabel">operating pattern</span>
          <code>map → normalize → model → retrieve → validate → operate</code>
        </article>
      </section>

      <section className="shell profileText">
        <p>
          My work sits between engineering, field operations, data, AI and commercial execution — especially where the domain is complex, the knowledge is fragmented, and the product needs to become usable by operators, clients or decision-makers.
        </p>
        <p>
          Currently focused on UAV, sensing and defence-adjacent systems: payload logic, RF-aware positioning, Remote ID / C-UAS-related workflows, critical infrastructure use cases, AI knowledge systems and structured proposal intelligence.
        </p>
      </section>

      <section className="shell ecosystem" aria-label="Current ecosystem logos">
        <div>
          <span className="cardLabel">current ecosystem context</span>
          <p>Work context across UAV operations, systems integration, training and R&D concepts.</p>
        </div>
        <div className="logoGrid">
          <div className="logoTile textLogo">Skyline Drones</div>
          <div className="logoTile darkLogo"><img src="/logos/la-orizont.png" alt="La Orizont" /></div>
          <div className="logoTile"><img src="/logos/skyline-academy.png" alt="Skyline Academy" /></div>
          <div className="logoTile"><img src="/logos/truenorth.png" alt="TrueNorth" /></div>
        </div>
      </section>

      <section className="shell accordionStack" aria-label="Landing card sections">
        {sections.map((section, index) => (
          <AccordionSection key={section.id} section={section} initiallyOpen={index < 2} />
        ))}
      </section>

      <section className="shell signalGrid">
        <article className="plainCard">
          <span className="cardLabel">certifications</span>
          <ul className="cleanList">
            {credentials.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
        <article className="plainCard">
          <span className="cardLabel">conversation starters</span>
          <ul className="cleanList">
            {starters.map((item) => <li key={item}>Ask me about how to {item}</li>)}
          </ul>
        </article>
      </section>

      <section id="contact" className="shell contactPanel">
        <div>
          <span className="cardLabel">contact</span>
          <h2>Technical product operator working across AI, UAV/RF, telecom data and intelligence workflows.</h2>
          <p>I turn fragmented technical capability into structured systems that teams can use, explain, sell and operate.</p>
        </div>
        <div className="contactButtons">
          <a className="primaryAction" href="mailto:wh-systems@proton.me">wh-systems@proton.me</a>
          <a className="secondaryAction" href="https://www.linkedin.com/in/wh-systems/" target="_blank" rel="noreferrer">linkedin.com/in/wh-systems</a>
        </div>
      </section>

      <div className="mobileDock" aria-label="Quick contact actions">
        <a href="mailto:wh-systems@proton.me">Email</a>
        <a href="https://www.linkedin.com/in/wh-systems/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </main>
  );
}
