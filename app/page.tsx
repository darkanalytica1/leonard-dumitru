"use client";

import { useEffect, useMemo, useState } from "react";
import QRCode from "qrcode";

const modules = [
  {
    key: "ai",
    label: "AI / RAG",
    title: "AI systems, retrieval layers and controlled knowledge workflows",
    body:
      "I design AI operating layers for technical organizations: retrieval pipelines, MCP-style tool use, RAG knowledge systems, source-bound answer behavior, claim-boundary enforcement, prompt stacks, workflow automation, evaluation loops and controlled outputs. The goal is not flashy AI — it is reliable technical decision support that operators, commercial teams and leadership can actually trust.",
    bullets: [
      "RAG architectures and structured knowledge packs",
      "MCP / tool-routing patterns and internal assistants",
      "Prompt architecture, response policy and claim guardrails",
      "Source-grounded proposal support and technical Q&A",
      "Versioned workflows, snapshots and hallucination reduction",
      "Automation between CRM, docs, knowledge and AI layers",
    ],
  },
  {
    key: "cyber",
    label: "Cyber / OSINT",
    title: "Cyber-aware research, OSINT and adversarial analysis",
    body:
      "My background includes adversarial research logic: reconnaissance, infrastructure mapping, enrichment, API behavior analysis, fraud/risk signals, attribution logic, data hygiene and privacy-aware workflows. I am useful where a team needs someone who can investigate messy technical reality and turn it into structured, actionable product or intelligence logic.",
    bullets: [
      "OSINT-driven discovery and infrastructure mapping",
      "API behavior, dependency tracing and data-path analysis",
      "Fraud signals, anomalies and attribution logic",
      "Legally constrained enrichment and privacy-aware workflows",
      "Technical validation across systems, teams and evidence",
      "Operationally credible research framing",
    ],
  },
  {
    key: "uav",
    label: "UAV / ISR",
    title: "UAV, ISR and sensing product logic",
    body:
      "I work on the product layer around UAV and ISR-adjacent systems: platform and payload fit, mission framing, LiDAR and photogrammetry use cases, digital twins, reconnaissance-oriented sensing workflows, critical-infrastructure inspection and operator-facing service architecture. I connect technical capability to a deployable product narrative and usable operational workflow.",
    bullets: [
      "ISR-oriented product positioning and capability framing",
      "Payload categories, sensing logic and mission fit",
      "LiDAR, photogrammetry and digital-twin workflows",
      "Critical-infrastructure inspection and data collection",
      "Use-case mapping from platform → payload → output",
      "Operator, buyer and field-team alignment",
    ],
  },
  {
    key: "rf",
    label: "RF / SIGINT",
    title: "RF context, signal-aware product thinking and data fusion",
    body:
      "I bridge RF-spectrum awareness, Remote ID, C-UAS-related positioning, telecom metadata and SIGINT-adjacent context into structured product systems. That means translating signal-related data, operational constraints and sensing capability into products, technical narratives, workflows and AI-readable knowledge — without overstating detection, authority or engineering certainty.",
    bullets: [
      "RF-spectrum awareness and Remote ID context",
      "C-UAS-related product framing and safe claims",
      "Telecom metadata, carrier/device/GEO signal logic",
      "SIGINT-adjacent workflows and cross-domain context",
      "Data fusion between RF, telecom, OSINT and operations",
      "Evidence-aware positioning for defence-adjacent use cases",
    ],
  },
  {
    key: "systems",
    label: "Systems",
    title: "Turning scattered capability into a usable operating system",
    body:
      "I am most useful when technical capability exists but the operating layer is still chaotic. I map the system, structure the data, define product logic, connect teams, build the workflow, and make complex knowledge searchable, reusable and actionable across commercial, technical and operational contexts.",
    bullets: [
      "Relational architecture and entity mapping",
      "Workflow logic, ownership and internal tooling",
      "SalesOS / proposal / lead-capture operating layers",
      "Technical-commercial translation across teams",
      "Documentation, QA logic and reusable knowledge",
      "Chaos reduction at product and system level",
    ],
  },
];

const logos = [
  { name: "Skyline Drones", src: "/logos/skyline-drones.svg", href: "https://skylinedrones.ro" },
  { name: "La Orizont", src: "/logos/la-orizont.png", href: "https://laorizont.ro" },
  { name: "Skyline Academy", src: "/logos/skyline-academy.png", href: "https://academy-skyline.ro" },
  { name: "TrueNorth", src: "/logos/truenorth.png", href: "https://true-north.aero/" },
];

const capabilityLanes = [
  {
    k: "01",
    title: "Map",
    text: "equipment, payloads, workflows, users, constraints, edge cases, operational friction and failure points",
  },
  {
    k: "02",
    title: "Structure",
    text: "documents, supplier input, field know-how, product logic, data models, use cases and claim boundaries",
  },
  {
    k: "03",
    title: "Fuse",
    text: "AI, telecom metadata, RF context, OSINT, CRM, operational notes and commercial intent into one usable layer",
  },
  {
    k: "04",
    title: "Activate",
    text: "assistants, proposal intelligence, event readiness, technical Q&A, follow-up workflows and internal decision support",
  },
];

const connectCards = [
  {
    title: "ISR / payload architecture",
    text: "How to position UAV platforms, payload stacks and sensing outputs for reconnaissance, inspection or defence-adjacent missions.",
  },
  {
    title: "RF-aware product systems",
    text: "How RF-spectrum context, Remote ID, C-UAS-related components and signal constraints become usable product logic instead of vague claims.",
  },
  {
    title: "RAG / MCP for technical teams",
    text: "How to build internal assistants that retrieve the right knowledge, respect evidence boundaries and support proposals, ops and Q&A.",
  },
  {
    title: "Telecom + SIGINT-adjacent data fusion",
    text: "How carrier, device, GEO and signal-context data can support product logic, workflow design and operational understanding.",
  },
  {
    title: "OSINT / cyber research workflows",
    text: "How to investigate fragmented technical environments, map dependencies and turn raw findings into structured decision support.",
  },
  {
    title: "Complex-system cleanup",
    text: "How to convert a chaotic technical/commercial stack into a structured operating model that teams can use, explain and scale.",
  },
];

const surface = [
  ["AI / Knowledge Systems", "Claude, Claude Code, MCP, RAG, agent behavior, prompt architecture, knowledge workflows, response policy and controlled outputs"],
  ["UAV / ISR / Sensing", "UAV product logic, payload categories, ISR framing, LiDAR, photogrammetry, digital twins, sensing workflows, critical infrastructure"],
  ["RF / Remote ID / SIGINT Context", "RF-spectrum awareness, Remote ID, C-UAS-related positioning, telecom metadata, signal context, data fusion"],
  ["Cyber / OSINT", "CEH-oriented research thinking, GIAC GOSI, infrastructure mapping, enrichment, API behavior, fraud/risk signals"],
  ["Data / Cloud / Automation", "SQL, Airtable, JSON, APIs, AWS Lambda, S3, Glue, Athena, Docker, Linux CLI, Make, n8n, webhooks"],
  ["Commercial Systems", "SalesOS design, lead capture, proposal logic, CRM normalization, PandaDoc, Pipedrive, technical-commercial enablement"],
];

const credentials = [
  "Certified Ethical Hacker v12",
  "GIAC Open Source Intelligence",
  "AWS Certified Cloud Practitioner",
  "Certified Data Protection Officer",
];

function QRPanel() {
  const [qr, setQr] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    const current = window.location.href.split("#")[0];
    setUrl(current);
    QRCode.toDataURL(current, {
      width: 220,
      margin: 1,
      errorCorrectionLevel: "M",
      color: { dark: "#0b1220", light: "#ffffff" },
    }).then(setQr);
  }, []);

  return (
    <aside className="qrPanel">
      <div className="qrTop">
        <p className="eyebrow">Working on something adjacent?</p>
        <h3>Let’s compare notes.</h3>
        <p>
          If any of this overlaps with what you are building, exploring or trying to structure,
          reach out and we can sync.
        </p>
      </div>
      {qr ? <img src={qr} alt="QR code for Leonard Dumitru profile" /> : <div className="qrSkeleton" />}
      <div className="qrBottom">
        <a href="mailto:leonard.dumitru@laorizont.ro">Email</a>
        <a href="https://www.linkedin.com/in/wh-systems/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
      <small>{url || "profile URL"}</small>
    </aside>
  );
}

export default function Page() {
  const [active, setActive] = useState("ai");
  const current = useMemo(() => modules.find((m) => m.key === active) ?? modules[0], [active]);

  return (
    <main className="appShell">
      <div className="floatingGlow glowA" />
      <div className="floatingGlow glowB" />

      <section className="heroCard">
        <div className="heroHeader">
          <div className="identityBlock">
            <div className="avatarWrap">
              <img src="/profile.jpg" alt="Leonard Dumitru" className="avatar" />
              <span className="statusDot">signal</span>
            </div>
            <div className="identityText">
              <p className="eyebrow">Signal Card</p>
              <h1>Leonard Dumitru</h1>
              <h2>Technical Product Operator</h2>
              <p className="identitySubline">
                AI Systems · UAV/RF · ISR · Telecom Data · OSINT · Defence Workflows
              </p>
            </div>
          </div>

          <div className="contactCard">
            <a href="mailto:leonard.dumitru@laorizont.ro">leonard.dumitru@laorizont.ro</a>
            <a href="https://www.linkedin.com/in/wh-systems/" target="_blank" rel="noreferrer">
              linkedin.com/in/wh-systems
            </a>
            <span>Bucharest · Remote / Hybrid</span>
          </div>
        </div>

        <div className="heroBody">
          <div className="heroMain">
            <div className="signalPill">
              <span />
              <b>AI · RAG · CYBER · UAV / RF · ISR · SIGINT CONTEXT</b>
            </div>

            <p className="heroLead">
              I turn fragmented technical capability into structured systems that teams can use,
              explain, sell and operate.
            </p>

            <p className="heroText">
              My work sits between engineering, field operations, data, AI and commercial execution.
              I build product logic, knowledge architecture, AI-assisted workflows and technical
              narratives for environments involving UAVs, payloads, RF context, ISR-oriented sensing,
              telecom metadata, OSINT and defence-adjacent operations.
            </p>

            <div className="heroActions">
              <a href="mailto:leonard.dumitru@laorizont.ro" className="primaryBtn">Reach out</a>
              <a href="#connect" className="secondaryBtn">Why it’s useful to connect</a>
            </div>

            <div className="summaryGrid">
              <div>
                <strong>Current operating layer</strong>
                <span>AI knowledge systems, product logic, UAV/RF positioning, proposal intelligence</span>
              </div>
              <div>
                <strong>Recent system built</strong>
                <span>Industry → Problem → Capability → Service → Equipment → Use Case → Offer</span>
              </div>
              <div>
                <strong>Best fit</strong>
                <span>Complex technical environments where knowledge is strong but the product layer is still messy</span>
              </div>
            </div>
          </div>

          <QRPanel />
        </div>
      </section>

      <section className="ecosystemStrip" aria-label="Current ecosystem context">
        {logos.map((logo) => (
          <a className="logoCard" href={logo.href} key={logo.name} target="_blank" rel="noreferrer">
            <div className="logoFrame">
              <img src={logo.src} alt={logo.name} />
            </div>
            <span>{logo.name}</span>
          </a>
        ))}
      </section>

      <section className="panelCard">
        <div className="sectionHead">
          <p className="eyebrow">Expertise modules</p>
          <h2>Where I can add technical value fast</h2>
        </div>

        <div className="tabsBar">
          {modules.map((module) => (
            <button
              key={module.key}
              type="button"
              className={active === module.key ? "active" : ""}
              onClick={() => setActive(module.key)}
            >
              {module.label}
            </button>
          ))}
        </div>

        <div className="modulePanel">
          <div className="moduleCopy">
            <p className="eyebrow">{current.label}</p>
            <h3>{current.title}</h3>
            <p>{current.body}</p>
          </div>

          <div className="moduleBullets">
            {current.bullets.map((bullet) => (
              <div key={bullet} className="bulletCard">
                <span className="bulletIcon">+</span>
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="doubleGrid">
        <div className="panelCard">
          <div className="sectionHead compact">
            <p className="eyebrow">Operating model</p>
            <h2>How I work</h2>
          </div>
          <div className="laneGrid">
            {capabilityLanes.map((lane) => (
              <article className="laneCard" key={lane.k}>
                <span>{lane.k}</span>
                <h3>{lane.title}</h3>
                <p>{lane.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="panelCard accentCard">
          <div className="sectionHead compact">
            <p className="eyebrow">Recent system built</p>
            <h2>UAV ecosystem → product and AI architecture</h2>
          </div>
          <p className="accentText">
            At Skyline / La Orizont, I helped structure a fragmented UAV and sensing ecosystem into an integrated
            operating layer across UAV operations, LiDAR, photogrammetry, digital twins, critical infrastructure
            sensing, payloads, RF / Remote ID / C-UAS-related systems, training, GNSS-denied concepts, RF awareness,
            sensor fusion and advanced UAV architecture.
          </p>
          <div className="flowRow">
            {['Industry', 'Problem', 'Capability', 'Service', 'Equipment', 'Use Case', 'Offer', 'Follow-up'].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="panelCard">
        <div className="sectionHead compact">
          <p className="eyebrow">Technical surface area</p>
          <h2>Depth map</h2>
        </div>
        <div className="surfaceGrid">
          {surface.map(([title, text]) => (
            <article className="surfaceCard" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panelCard" id="connect">
        <div className="sectionHead compact">
          <p className="eyebrow">Useful conversations</p>
          <h2>Reasons to stay in touch</h2>
        </div>
        <div className="connectGrid">
          {connectCards.map((card) => (
            <article className="connectCard" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="footerBand">
        <div className="credentialStack">
          {credentials.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="footerCta">
          <p>If the overlap is real, send me a note and let’s sync.</p>
          <a href="mailto:leonard.dumitru@laorizont.ro">leonard.dumitru@laorizont.ro</a>
        </div>
      </section>

      <nav className="mobileDock">
        <a href="mailto:leonard.dumitru@laorizont.ro">Email</a>
        <a href="https://www.linkedin.com/in/wh-systems/" target="_blank" rel="noreferrer">LinkedIn</a>
      </nav>
    </main>
  );
}
