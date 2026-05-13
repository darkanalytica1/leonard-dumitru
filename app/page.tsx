"use client";

import { useEffect, useMemo, useState } from "react";
import QRCode from "qrcode";

const coreAreas = [
  {
    key: "ai",
    label: "AI / Knowledge",
    title: "AI / Knowledge Systems",
    body:
      "RAG, MCP-style tooling, source-grounded assistants, prompt architecture, retrieval workflows, internal Q&A, proposal support and claim-boundary control.",
    points: [
      "RAG and retrieval architecture for technical knowledge",
      "MCP-style tools and controlled internal assistants",
      "Source-grounded answers and response guardrails",
      "Prompt architecture, agent instructions and workflow policy",
      "Proposal support and technical Q&A from structured sources",
      "Evaluation loops to reduce hallucinated claims",
    ],
  },
  {
    key: "uav",
    label: "UAV / ISR",
    title: "UAV / ISR / Payloads",
    body:
      "UAV platforms, payload logic, EO/IR, LiDAR, photogrammetry, digital twins, mission planning, sensing workflows and critical-infrastructure use cases.",
    points: [
      "Mission need → platform → payload → output mapping",
      "EO/IR, LiDAR, photogrammetry and digital-twin workflows",
      "ISR-oriented product and deployment narratives",
      "Critical-infrastructure sensing and inspection use cases",
      "Operator workflow and field-execution logic",
      "Payload and data-output framing for buyers and institutions",
    ],
  },
  {
    key: "rf",
    label: "RF / Telecom",
    title: "RF / Telecom / Remote ID",
    body:
      "RF-awareness, Remote ID context, telecom metadata, spectrum constraints, datalink logic and C-UAS-adjacent positioning.",
    points: [
      "RF-spectrum awareness and operational constraints",
      "Remote ID and C-UAS-adjacent product framing",
      "Telecom metadata, carrier/device/GEO context",
      "Datalink, connectivity and signal-environment logic",
      "SIGINT-adjacent data-fusion narratives",
      "Credible wording without overstating authority or capability",
    ],
  },
  {
    key: "cyber",
    label: "Cyber / OSINT",
    title: "Cyber / OSINT",
    body:
      "Structured research, infrastructure mapping, enrichment workflows, dependency analysis, API behavior, risk signals and technical investigation.",
    points: [
      "OSINT research and structured discovery workflows",
      "Infrastructure mapping and dependency analysis",
      "API behavior, data paths and system evidence",
      "Fraud/risk signals and anomaly reasoning",
      "Legally constrained enrichment and privacy-aware data handling",
      "Technical investigation turned into product or decision logic",
    ],
  },
  {
    key: "product",
    label: "Product Systems",
    title: "Technical Product Systems",
    body:
      "Turning fragmented technical capability into structured products, use cases, workflows, offers, documentation and decision support.",
    points: [
      "Product architecture for complex technical systems",
      "Use-case and workflow logic that teams can execute",
      "Technical-commercial packaging without losing detail",
      "Documentation, QA logic and acceptance criteria",
      "Decision-support systems and internal operating models",
      "Institutional-grade positioning and defensible narratives",
    ],
  },
];

const translationPairs = [
  ["Engineering", "how systems work"],
  ["Field operations", "what actually happens in deployment"],
  ["Sales teams", "clear offers and technical narratives"],
  ["Executives", "strategic positioning and capability logic"],
  ["Institutions", "credible, defensible deployment framing"],
  ["AI systems", "structured knowledge and guardrails"],
];

const connectReasons = [
  "AI systems for technical organizations",
  "UAV / RF / ISR product architecture",
  "Mission systems and defence-adjacent workflows",
  "Cyber / OSINT research operations",
  "Telecom and RF-aware data workflows",
  "Technical-commercial productization",
  "Turning complex capability into something people can understand, buy, deploy and scale",
];

const domainChips = [
  "AI / RAG / MCP",
  "UAV / Payloads / ISR",
  "RF / Telecom / Remote ID",
  "Cyber / OSINT Workflows",
  "Mission Systems",
  "Technical-Commercial Productization",
];

const logos = [
  { name: "Skyline Drones", src: "/logos/skyline-drones.svg", href: "https://skylinedrones.ro" },
  { name: "La Orizont", src: "/logos/la-orizont.png", href: "https://laorizont.ro" },
  { name: "Skyline Academy", src: "/logos/skyline-academy.png", href: "https://academy-skyline.ro" },
  { name: "TrueNorth", src: "/logos/truenorth.png", href: "https://true-north.aero/" },
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
      width: 230,
      margin: 1,
      errorCorrectionLevel: "M",
      color: { dark: "#0a1222", light: "#ffffff" },
    }).then(setQr);
  }, []);

  return (
    <aside className="qrPanel">
      <div>
        <p className="eyebrow">Build overlap?</p>
        <h3>If this connects with what you are building, let’s sync.</h3>
        <p>
          Scan, keep the page, and reach out when there is a relevant technical or product conversation.
        </p>
      </div>

      <div className="qrFrame">
        {qr ? <img src={qr} alt="QR code for Leonard Dumitru Signal Card" /> : <div className="qrSkeleton" />}
      </div>

      <div className="qrActions">
        <a href="mailto:leonard.dumitru@laorizont.ro">Email</a>
        <a href="https://www.linkedin.com/in/wh-systems/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>

      <small>{url || "profile URL"}</small>
    </aside>
  );
}

export default function Page() {
  const [active, setActive] = useState("ai");
  const activeArea = useMemo(
    () => coreAreas.find((area) => area.key === active) ?? coreAreas[0],
    [active],
  );

  return (
    <main className="shell">
      <div className="ambient ambientA" />
      <div className="ambient ambientB" />

      <section className="hero">
        <div className="heroTop">
          <div className="identity">
            <div className="avatarFrame">
              <img src="/profile.jpg" alt="Leonard Dumitru" className="avatar" />
            </div>
            <div className="identityCopy">
              <p className="eyebrow">Signal Card</p>
              <h1>Leonard Dumitru</h1>
              <h2>Technical Product Manager</h2>
              <p className="domainLine">AI · UAV/RF · ISR · Cyber/OSINT · Mission Systems</p>
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
              Technical-product glue between complex systems and real-world deployment
            </div>

            <p className="mainLine">
              I map mission needs to UAV platforms, sensors, RF-awareness layers, software, training and
              operational use cases — so equipment becomes deployable capability, not just hardware.
            </p>

            <p className="supportLine">
              I work at the intersection of technical systems, product architecture and operational deployment.
              My value is connecting domains that usually stay separate: AI knowledge systems, UAV operations,
              RF/telecom context, ISR workflows, cyber/OSINT research, technical documentation, commercial packaging
              and field execution.
            </p>

            <div className="chipGrid">
              {domainChips.map((chip) => <span key={chip}>{chip}</span>)}
            </div>
          </div>

          <QRPanel />
        </div>
      </section>

      <section className="ecosystem" aria-label="Current ecosystem context">
        {logos.map((logo) => (
          <a className="logoCard" href={logo.href} target="_blank" rel="noreferrer" key={logo.name}>
            <div className="logoFrame">
              <img src={logo.src} alt={logo.name} />
            </div>
            <span>{logo.name}</span>
          </a>
        ))}
      </section>

      <section className="panel corePanel">
        <div className="sectionHead">
          <p className="eyebrow">Core areas</p>
          <h2>What I know</h2>
        </div>

        <div className="tabs">
          {coreAreas.map((area) => (
            <button key={area.key} type="button" className={active === area.key ? "active" : ""} onClick={() => setActive(area.key)}>
              {area.label}
            </button>
          ))}
        </div>

        <div className="activeArea">
          <div className="activeCopy">
            <p className="eyebrow">{activeArea.label}</p>
            <h3>{activeArea.title}</h3>
            <p>{activeArea.body}</p>
          </div>

          <div className="pointGrid">
            {activeArea.points.map((point) => (
              <div className="point" key={point}>
                <span>+</span>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="split">
        <div className="panel">
          <div className="sectionHead compact">
            <p className="eyebrow">How I work</p>
            <h2>I translate between domains that normally do not speak the same language.</h2>
          </div>

          <div className="translateGrid">
            {translationPairs.map(([group, meaning]) => (
              <article key={group}>
                <h3>{group}</h3>
                <p>{meaning}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="panel valuePanel">
          <p className="eyebrow">Value</p>
          <h2>Fragmented capability → structured product logic</h2>
          <p>
            I help technical organizations turn fragmented capability into structured products, workflows,
            offers, AI tools and operational narratives — without flattening the technical detail that makes the
            capability credible.
          </p>
          <div className="miniFlow">
            <span>systems</span>
            <span>knowledge</span>
            <span>workflows</span>
            <span>capability</span>
            <span>deployment</span>
          </div>
        </div>
      </section>

      <section className="panel connect" id="connect">
        <div className="sectionHead compact">
          <p className="eyebrow">Good reasons to connect</p>
          <h2>Useful conversations</h2>
        </div>

        <div className="connectGrid">
          {connectReasons.map((reason) => (
            <article key={reason}>
              <h3>{reason}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="footerBand">
        <div className="credentialStack">
          {credentials.map((credential) => <span key={credential}>{credential}</span>)}
        </div>

        <div className="footerCta">
          <p>If this overlaps with something you are building, send me a note and we can sync.</p>
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
