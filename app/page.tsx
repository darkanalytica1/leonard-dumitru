"use client";

import { useEffect, useMemo, useState } from "react";
import QRCode from "qrcode";

const domains = [
  {
    key: "ai",
    label: "AI / RAG",
    title: "AI systems that stay grounded",
    body:
      "I design controlled AI workflows: retrieval layers, MCP-style tools, RAG knowledge bases, source-bound answers, prompt architecture, agent instructions and guardrails so technical teams can use AI without turning it into guesswork.",
    stack: ["Claude", "Claude Code", "MCP", "RAG", "Agents", "Guardrails"],
  },
  {
    key: "cyber",
    label: "Cyber / OSINT",
    title: "Adversarial research mindset",
    body:
      "My research background is built around reconnaissance, infrastructure mapping, enrichment logic, API behavior, fraud signals, attribution paths, privacy constraints and lawful data workflows.",
    stack: ["CEH", "GIAC GOSI", "OSINT", "Infrastructure mapping", "Fraud signals", "Data hygiene"],
  },
  {
    key: "uav",
    label: "UAV / ISR",
    title: "UAV and ISR product logic",
    body:
      "I work on the product layer around UAV operations, ISR narratives, payload categories, LiDAR, photogrammetry, digital twins, sensing workflows, critical infrastructure use cases and operator-facing mission logic.",
    stack: ["ISR", "Payloads", "LiDAR", "Photogrammetry", "Digital twins", "Critical infrastructure"],
  },
  {
    key: "rf",
    label: "RF / SIGINT",
    title: "RF-aware and signal-context thinking",
    body:
      "I connect telecom data, RF-spectrum awareness, Remote ID, C-UAS-related positioning and SIGINT-adjacent context into structured product narratives and data-fusion workflows without overstating operational claims.",
    stack: ["RF spectrum", "Remote ID", "C-UAS context", "Telecom metadata", "SIGINT-adjacent", "Data fusion"],
  },
  {
    key: "ops",
    label: "Systems",
    title: "Chaos into usable operating systems",
    body:
      "When knowledge is scattered across suppliers, engineers, documents, field teams and commercial conversations, I map it into relational models, workflows, internal tools, proposal logic and decision-support systems.",
    stack: ["Architecture DB", "SalesOS", "Airtable", "Pipedrive", "PandaDoc", "Operational workflows"],
  },
];

const signalLayers = [
  {
    name: "Collect",
    detail: "UAV specs, RF/Remote ID context, telecom metadata, OSINT, CRM, field notes, supplier documentation",
  },
  {
    name: "Structure",
    detail: "schemas, entity maps, capability graphs, product logic, use cases, mission fit and claim boundaries",
  },
  {
    name: "Fuse",
    detail: "payload context, RF awareness, telecom signals, account intelligence, proposal history and operational constraints",
  },
  {
    name: "Activate",
    detail: "AI assistants, Q&A workflows, proposal briefs, event readiness, lead capture, follow-up and decision support",
  },
];

const workingModes = [
  {
    title: "I map complex domains",
    text: "Equipment, data, workflows, users, constraints, edge cases and failure points.",
  },
  {
    title: "I structure fragmented knowledge",
    text: "Documents, supplier information and field experience become reusable, searchable, AI-readable knowledge layers.",
  },
  {
    title: "I define product behavior",
    text: "Dashboards, workflows, automations, proposals, data flows and internal platforms get clear logic and ownership.",
  },
  {
    title: "I bridge technical and operational people",
    text: "Engineering, field teams, leadership, commercial teams and clients get a shared operating language.",
  },
];

const topics = [
  "AI assistants that do not hallucinate technical claims",
  "UAV / RF capability turned into product architecture",
  "RAG and MCP knowledge systems for technical organizations",
  "ISR, payload logic and critical-infrastructure sensing workflows",
  "Telecom metadata, RF context and SIGINT-adjacent data fusion",
  "OSINT, cyber research and legally constrained data workflows",
];

const credentials = [
  "Certified Ethical Hacker v12",
  "GIAC Open Source Intelligence",
  "AWS Certified Cloud Practitioner",
  "Certified Data Protection Officer",
];

const surface = [
  ["AI / RAG", "Claude, Claude Code, MCP, LLM APIs, RAG retrieval, AI agents, prompt architecture, guardrails"],
  ["Cyber / OSINT", "CEH methodology, GIAC GOSI, infrastructure research, enrichment, API behavior, fraud signals"],
  ["UAV / ISR", "UAV systems, ISR narratives, payload logic, LiDAR, photogrammetry, digital twins, sensing"],
  ["RF / SIGINT context", "RF-spectrum awareness, Remote ID, C-UAS-related framing, telecom metadata, signal workflows"],
  ["Data / cloud", "SQL, Airtable, JSON, APIs, AWS Lambda, S3, Glue, Athena, Docker, Linux CLI, GitHub, Vercel"],
  ["Commercial systems", "SalesOS, Pipedrive, PandaDoc, proposal logic, lead capture, SEO-indexed technical funnels"],
];

const ecosystem = [
  { name: "Skyline Drones", src: "/logos/skyline-drones.svg" },
  { name: "La Orizont", src: "/logos/la-orizont.png" },
  { name: "Skyline Academy", src: "/logos/skyline-academy.png" },
  { name: "TrueNorth", src: "/logos/truenorth.png" },
];

function QRPanel() {
  const [qr, setQr] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    const current = window.location.href.split("#")[0];
    setUrl(current);
    QRCode.toDataURL(current, {
      width: 210,
      margin: 1,
      errorCorrectionLevel: "M",
      color: { dark: "#0b1220", light: "#ffffff" },
    }).then(setQr);
  }, []);

  return (
    <aside className="qrPanel">
      <div>
        <p className="eyebrow">Keep the thread</p>
        <h3>Scan. Connect. Continue later.</h3>
        <p>
          If this overlaps with something you are building, send me a note and we can sync.
        </p>
      </div>
      {qr ? <img src={qr} alt="QR code for Leonard Dumitru profile" /> : <div className="qrSkeleton" />}
      <small>{url || "profile URL"}</small>
    </aside>
  );
}

export default function Page() {
  const [active, setActive] = useState("ai");
  const current = useMemo(() => domains.find((x) => x.key === active) ?? domains[0], [active]);

  return (
    <main className="app">
      <section className="hero">
        <div className="heroTop">
          <div className="identity">
            <img src="/profile.jpg" alt="Leonard Dumitru" className="avatar" />
            <div>
              <p className="eyebrow">Technical signal card</p>
              <h1>Leonard Dumitru</h1>
              <h2>Technical Product Operator</h2>
            </div>
          </div>

          <div className="contact">
            <a href="mailto:leonard.dumitru@laorizont.ro">leonard.dumitru@laorizont.ro</a>
            <a href="https://www.linkedin.com/in/wh-systems/" target="_blank" rel="noreferrer">
              linkedin.com/in/wh-systems
            </a>
            <span>Bucharest · Remote / Hybrid</span>
          </div>
        </div>

        <div className="heroMain">
          <div className="intro">
            <div className="signalBadge">
              <span />
              <b>AI · RAG · Cyber · UAV/RF · ISR · Telecom/SIGINT context</b>
            </div>

            <p className="coreMessage">
              I work where technical knowledge is scattered and the system still needs to become usable.
            </p>

            <p className="supportText">
              My work sits between engineering, field operations, data, AI and commercial execution. I build
              structured product systems, AI knowledge workflows and technical narratives for environments
              involving UAVs, RF, ISR, telecom metadata, OSINT and defence-adjacent operations.
            </p>

            <div className="ctaRow">
              <a href="mailto:leonard.dumitru@laorizont.ro">Reach out</a>
              <a href="https://www.linkedin.com/in/wh-systems/" target="_blank" rel="noreferrer">
                Let’s sync on LinkedIn
              </a>
            </div>

            <div className="chips">
              <span>AI systems</span>
              <span>RAG / MCP</span>
              <span>Cyber / OSINT</span>
              <span>UAV / ISR</span>
              <span>RF awareness</span>
              <span>Telecom data</span>
              <span>Data fusion</span>
            </div>
          </div>

          <QRPanel />
        </div>
      </section>

      <section className="logos" aria-label="Current ecosystem context">
        {ecosystem.map((logo) => (
          <div className="logoBox" key={logo.name}>
            <img src={logo.src} alt={logo.name} />
            <span>{logo.name}</span>
          </div>
        ))}
      </section>

      <section className="domainApp">
        <div className="sectionHead">
          <p className="eyebrow">Subject-matter map</p>
          <h2>Where I can have a useful technical conversation</h2>
        </div>

        <div className="tabs">
          {domains.map((domain) => (
            <button
              type="button"
              key={domain.key}
              className={active === domain.key ? "active" : ""}
              onClick={() => setActive(domain.key)}
            >
              {domain.label}
            </button>
          ))}
        </div>

        <div className="domainPanel">
          <div>
            <p className="eyebrow">{current.label}</p>
            <h3>{current.title}</h3>
            <p>{current.body}</p>
          </div>
          <div className="stack">
            {current.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="split">
        <div className="card">
          <div className="sectionHead compact">
            <p className="eyebrow">Operating pattern</p>
            <h2>What I actually do</h2>
          </div>
          <div className="miniGrid">
            {workingModes.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="card strong">
          <p className="eyebrow">Recent system built</p>
          <h2>UAV ecosystem → product and AI operating layer</h2>
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
        <div className="sectionHead compact">
          <p className="eyebrow">Data fusion logic</p>
          <h2>From raw context to usable intelligence</h2>
        </div>
        <div className="layerGrid">
          {signalLayers.map((layer, index) => (
            <article className="layer" key={layer.name}>
              <div>{String(index + 1).padStart(2, "0")}</div>
              <h3>{layer.name}</h3>
              <p>{layer.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="surface">
        <div className="sectionHead compact">
          <p className="eyebrow">Technical surface area</p>
          <h2>Topics I can actually discuss</h2>
        </div>
        <div className="surfaceGrid">
          {surface.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bottom">
        <div className="card">
          <p className="eyebrow">Good reasons to connect</p>
          <div className="questionGrid">
            {topics.map((topic) => (
              <div key={topic}>{topic}</div>
            ))}
          </div>
        </div>

        <div className="card certs">
          <p className="eyebrow">Credentials</p>
          {credentials.map((credential) => (
            <span key={credential}>{credential}</span>
          ))}
        </div>
      </section>

      <nav className="mobileDock">
        <a href="mailto:leonard.dumitru@laorizont.ro">Reach out</a>
        <a href="https://www.linkedin.com/in/wh-systems/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </nav>
    </main>
  );
}
