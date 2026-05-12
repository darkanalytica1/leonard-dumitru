"use client";

import { useEffect, useMemo, useState } from "react";
import QRCode from "qrcode";

const focusAreas = [
  {
    key: "ai",
    label: "AI / RAG",
    title: "Controlled AI systems, not generic prompting",
    body:
      "MCP-style retrieval, RAG pipelines, structured knowledge packs, claim boundaries, prompt architecture, agent instructions and internal AI workflows that answer from governed sources instead of memory.",
    stack: ["Claude", "Claude Code", "MCP", "RAG", "AI agents", "Guardrails"],
  },
  {
    key: "isr",
    label: "ISR / UAV",
    title: "ISR narratives and UAV product architecture",
    body:
      "UAV platforms, payload logic, LiDAR, photogrammetry, digital twins, critical infrastructure sensing, operator workflows, mission fit, technical-commercial framing and event readiness.",
    stack: ["ISR", "Payloads", "LiDAR", "Digital twins", "Sensing", "Use cases"],
  },
  {
    key: "rf",
    label: "RF / SIGINT",
    title: "RF-aware product thinking and signal-context mapping",
    body:
      "Remote ID, C-UAS-related positioning, RF-spectrum awareness, telecom metadata, SIGINT-adjacent signal context, lawful data boundaries and sensor/data fusion narratives.",
    stack: ["RF spectrum", "Remote ID", "C-UAS", "Telecom metadata", "SIGINT context", "Lawful workflows"],
  },
  {
    key: "ops",
    label: "SalesOS",
    title: "Chaos → relational operating system",
    body:
      "Scattered CRM, proposal, supplier, service, product and field knowledge becomes a working operating layer: accounts, contacts, deals, offers, activities, owners, follow-ups and proposal context.",
    stack: ["Architecture DB", "SalesOS", "Airtable", "Pipedrive", "PandaDoc", "Funnels"],
  },
];

const systemLayers = [
  {
    name: "Collection",
    detail: "payload docs, UAV specs, RF/Remote ID notes, telecom signals, OSINT, CRM, field experience",
  },
  {
    name: "Structuring",
    detail: "schemas, entity maps, capability graphs, service logic, industry/problem/use-case models",
  },
  {
    name: "Retrieval",
    detail: "MCP tools, RAG-style lookup, source-bound answers, evidence IDs, versioned knowledge packs",
  },
  {
    name: "Execution",
    detail: "proposal briefs, account intelligence, event Q&A, lead capture, qualification, follow-up workflows",
  },
];

const workBlocks = [
  {
    title: "Mapping the system",
    text: "Understand the real architecture: equipment, data flows, workflows, users, constraints, edge cases and failure points.",
  },
  {
    title: "Structuring the knowledge",
    text: "Turn documents, supplier information, field experience and internal know-how into searchable, reusable, AI-readable knowledge layers.",
  },
  {
    title: "Defining product behavior",
    text: "Write the logic behind tools, dashboards, workflows, automations, proposals, data flows and internal platforms.",
  },
  {
    title: "Connecting teams",
    text: "Translate between engineers, field teams, commercial teams, leadership and clients without losing technical detail.",
  },
];

const conversation = [
  "How to turn UAV/RF capability into product architecture",
  "How to build AI assistants that do not hallucinate technical claims",
  "How to structure defence-adjacent knowledge for sales, proposals and operations",
  "How telecom metadata becomes product logic",
  "How to fuse payload, RF, OSINT and CRM context into usable intelligence",
  "How to bridge engineers, operators and commercial teams",
];

const techSurface = [
  ["AI / Agents", "Claude, Claude Code, MCP, LLM APIs, RAG retrieval, prompt architecture, controlled outputs"],
  ["ISR / Sensing", "UAV systems, payload logic, LiDAR, photogrammetry, digital twins, critical infrastructure sensing"],
  ["RF / SIGINT context", "RF-spectrum awareness, Remote ID, C-UAS-related framing, telecom metadata, signal workflows"],
  ["Data / Cloud", "SQL, Airtable, JSON, APIs, AWS Lambda, S3, Glue, Athena, Docker, Linux CLI, GitHub, Vercel"],
  ["Automation", "Make, n8n, webhooks, enrichment APIs, routing logic, lead capture, SEO-indexed funnels"],
  ["Security / OSINT", "CEH methodology, GIAC GOSI, infrastructure research, fraud signals, privacy-by-design"],
];

const ecosystem = [
  { name: "Skyline Drones", src: "/logos/skyline-drones.svg" },
  { name: "La Orizont", src: "/logos/la-orizont.png" },
  { name: "Skyline Academy", src: "/logos/skyline-academy.png" },
  { name: "TrueNorth", src: "/logos/truenorth.png" },
];

function QrCard() {
  const [qr, setQr] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    const current = window.location.href.split("#")[0];
    setUrl(current);
    QRCode.toDataURL(current, {
      width: 190,
      margin: 1,
      color: {
        dark: "#0b1220",
        light: "#ffffff",
      },
      errorCorrectionLevel: "M",
    }).then(setQr);
  }, []);

  return (
    <div className="qrCard">
      <div>
        <p className="eyebrow">Scan / share</p>
        <h3>Open this profile</h3>
        <p>QR resolves to this landing card, not a downloadable CV.</p>
      </div>
      {qr ? <img src={qr} alt="QR code for this profile" /> : <div className="qrSkeleton" />}
      <small>{url || "current profile URL"}</small>
    </div>
  );
}

export default function Page() {
  const [active, setActive] = useState("ai");
  const current = useMemo(() => focusAreas.find((x) => x.key === active) ?? focusAreas[0], [active]);

  return (
    <main className="app">
      <section className="hero">
        <div className="heroTop">
          <div className="identity">
            <img src="/profile.jpg" alt="Leonard Dumitru" className="avatar" />
            <div>
              <p className="eyebrow">QR landing card · not a CV</p>
              <h1>Leonard Dumitru</h1>
              <h2>Technical Product Operator</h2>
            </div>
          </div>
          <div className="contact">
            <a href="mailto:wh-systems@proton.me">wh-systems@proton.me</a>
            <a href="https://www.linkedin.com/in/wh-systems/" target="_blank" rel="noreferrer">
              linkedin.com/in/wh-systems
            </a>
            <span>Bucharest · Remote / Hybrid</span>
          </div>
        </div>

        <div className="heroMain">
          <div className="introPanel">
            <div className="statusLine">
              <span />
              <b>AI Systems · UAV/RF · Telecom Data · OSINT · Defence Workflows</b>
            </div>
            <p className="bigLine">
              I build AI-enabled product systems for defence-adjacent environments where UAVs, RF,
              telecom data, OSINT and operational knowledge need to become structured workflows,
              internal tools and usable intelligence.
            </p>
            <p className="plain">
              My work sits between engineering, field operations, data, AI and commercial execution —
              especially where the domain is complex, the knowledge is fragmented, and the product needs
              to become usable by operators, clients or decision-makers.
            </p>
            <div className="quickTags">
              <span>RAG / MCP</span>
              <span>ISR payload logic</span>
              <span>RF-spectrum awareness</span>
              <span>Data fusion</span>
              <span>SalesOS</span>
            </div>
          </div>

          <QrCard />
        </div>
      </section>

      <section className="logoStrip" aria-label="Current ecosystem context">
        {ecosystem.map((logo) => (
          <div className="logoBox" key={logo.name}>
            <img src={logo.src} alt={logo.name} />
            <span>{logo.name}</span>
          </div>
        ))}
      </section>

      <section className="focusApp">
        <div className="sectionHeader">
          <p className="eyebrow">Interactive capability map</p>
          <h2>Where the work happens</h2>
        </div>

        <div className="tabRail">
          {focusAreas.map((area) => (
            <button key={area.key} onClick={() => setActive(area.key)} className={active === area.key ? "active" : ""}>
              {area.label}
            </button>
          ))}
        </div>

        <div className="focusPanel">
          <div>
            <p className="eyebrow">{current.label}</p>
            <h3>{current.title}</h3>
            <p>{current.body}</p>
          </div>
          <div className="stackGrid">
            {current.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="split">
        <div className="cardGroup">
          <div className="sectionHeader compact">
            <p className="eyebrow">What I actually do</p>
            <h2>Scattered capability → structured product systems</h2>
          </div>
          <div className="workGrid">
            {workBlocks.map((block) => (
              <article className="workCard" key={block.title}>
                <h3>{block.title}</h3>
                <p>{block.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="systemCard">
          <p className="eyebrow">Recent system built</p>
          <h2>UAV ecosystem operating model</h2>
          <p>
            At Skyline / La Orizont, I helped structure a fragmented UAV and sensing ecosystem into an
            integrated commercial, product and knowledge architecture covering UAV operations, LiDAR,
            photogrammetry, digital twins, critical infrastructure sensing, payloads, RF / Remote ID /
            C-UAS-related systems, training, GNSS-denied concepts, RF awareness, sensor fusion and
            advanced UAV architecture.
          </p>
          <div className="flow">
            <span>Industry</span>
            <span>Problem</span>
            <span>Capability</span>
            <span>Service</span>
            <span>Equipment</span>
            <span>Use Case</span>
            <span>Offer</span>
            <span>Funnel</span>
            <span>Follow-up</span>
          </div>
        </div>
      </section>

      <section className="pipeline">
        <div className="sectionHeader compact">
          <p className="eyebrow">Data fusion logic</p>
          <h2>From raw signals to usable workflows</h2>
        </div>
        <div className="layerGrid">
          {systemLayers.map((layer, i) => (
            <article className="layer" key={layer.name}>
              <div className="layerNum">{String(i + 1).padStart(2, "0")}</div>
              <h3>{layer.name}</h3>
              <p>{layer.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="surface">
        <div className="sectionHeader compact">
          <p className="eyebrow">Technical surface area</p>
          <h2>Working range</h2>
        </div>
        <div className="surfaceGrid">
          {techSurface.map(([label, detail]) => (
            <article key={label}>
              <h3>{label}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bottom">
        <div className="conversation">
          <p className="eyebrow">Conversation starters</p>
          <div className="questionGrid">
            {conversation.map((q) => (
              <div key={q}>{q}</div>
            ))}
          </div>
        </div>
        <div className="certs">
          <p className="eyebrow">Certifications</p>
          <span>Certified Ethical Hacker v12</span>
          <span>GIAC Open Source Intelligence</span>
          <span>AWS Certified Cloud Practitioner</span>
          <span>Certified Data Protection Officer</span>
        </div>
      </section>

      <nav className="mobileDock">
        <a href="mailto:wh-systems@proton.me">Email</a>
        <a href="https://www.linkedin.com/in/wh-systems/" target="_blank" rel="noreferrer">LinkedIn</a>
      </nav>
    </main>
  );
}
