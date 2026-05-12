const sections = [
  {
    title: "What I Actually Do",
    eyebrow: "Operating logic",
    items: [
      {
        h: "Mapping the system",
        p: "Understand the real architecture: equipment, data, workflows, users, constraints, edge cases and failure points.",
      },
      {
        h: "Structuring the knowledge",
        p: "Turn documents, supplier information, field experience and internal know-how into searchable, reusable, AI-readable knowledge layers.",
      },
      {
        h: "Defining product behavior",
        p: "Write the logic behind tools, dashboards, workflows, automations, proposals, data flows and internal platforms.",
      },
      {
        h: "Connecting teams",
        p: "Translate between engineers, field teams, commercial teams, leadership and clients without losing technical detail.",
      },
    ],
  },
  {
    title: "Current Defence-Relevant Focus",
    eyebrow: "Domains",
    items: [
      {
        h: "UAV / ISR / sensing systems",
        p: "UAV operations, inspections, LiDAR, photogrammetry, digital twins, critical infrastructure sensing, payload categories and deployment logic.",
      },
      {
        h: "RF / Remote ID / C-UAS-related products",
        p: "RF-awareness, Remote ID, C-UAS-related positioning, equipment framing, systems integration and operational use-case mapping.",
      },
      {
        h: "AI knowledge systems",
        p: "Claude / MCP-style internal assistants, RAG-style retrieval, structured technical Q&A, proposal support, claim boundaries and controlled AI workflows.",
      },
      {
        h: "Telecom and mobile intelligence data",
        p: "CDRs, routing logic, completion rates, carrier/device/GEO signals, flash-call concepts, fraud/performance anomalies and telecom product rules.",
      },
      {
        h: "OSINT / cyber mindset",
        p: "Reconnaissance, infrastructure mapping, data enrichment, API behavior, fraud signals, privacy-aware workflows and adversarial thinking.",
      },
    ],
  },
  {
    title: "Where I Fit Best",
    eyebrow: "Useful when capability exists but the product layer is unclear",
    items: [
      { h: "Defence or dual-use technology", p: "Clearer product architecture, narrative, workflows and operator-facing logic." },
      { h: "UAV / RF / sensor systems", p: "Structured use cases, deployment logic, evidence boundaries and operational framing." },
      { h: "AI initiatives", p: "Grounding in real data, real constraints, controlled retrieval and safe outputs." },
      { h: "Commercial teams selling complex systems", p: "Clean technical narrative, proposal intelligence and repeatable qualification logic." },
      { h: "Internal tools without ownership", p: "Workflow logic, data structure, documentation, QA criteria and product behavior." },
    ],
  },
  {
    title: "Recent System Built",
    eyebrow: "Skyline / La Orizont",
    items: [
      {
        h: "Fragmented ecosystem → integrated architecture",
        p: "Helped structure a UAV and sensing ecosystem covering operations, LiDAR, photogrammetry, digital twins, critical infrastructure sensing, payloads, RF / Remote ID / C-UAS-related systems, training and R&D concepts.",
      },
      {
        h: "Core model",
        p: "Industry → Problem → Capability → Service → Equipment → Use Case → Offer → Funnel → Follow-up.",
      },
      {
        h: "Execution layer",
        p: "Foundation for service funnels, product positioning, event lead capture, proposal support and AI-assisted internal knowledge workflows.",
      },
    ],
  },
  {
    title: "Technical Surface Area",
    eyebrow: "Stack and working range",
    items: [
      { h: "Product systems", p: "Product architecture, workflows, requirements, acceptance criteria, technical documentation, ownership models, edge cases, QA logic." },
      { h: "AI / automation", p: "Claude, Claude Code, MCP, LLM APIs, RAG-style retrieval, prompt architecture, AI agents, Make, n8n, webhooks, enrichment pipelines." },
      { h: "Data / cloud", p: "SQL, Airtable, JSON, APIs, AWS Lambda, S3, Glue, Athena, EC2, Docker, Linux CLI, GitHub, Vercel." },
      { h: "Telecom / intelligence data", p: "CDRs, routing, carrier/device/GEO signals, attribution, traffic validation, flash-call / 2FA logic, anomaly detection." },
      { h: "Security / research", p: "OSINT, CEH methodology, infrastructure research, KYC/AML signals, fraud logic, privacy-by-design, lawful data processing." },
    ],
  },
];

const starters = [
  "turning UAV/RF capability into product architecture",
  "building AI assistants that do not hallucinate technical claims",
  "structuring defence-adjacent knowledge for sales, proposals and operations",
  "how telecom metadata becomes product logic",
  "bridging engineers, operators and commercial teams",
  "mapping messy internal systems into something usable",
];

const certs = [
  "Certified Ethical Hacker v12",
  "GIAC Open Source Intelligence",
  "AWS Certified Cloud Practitioner",
  "Certified Data Protection Officer",
];

const logos = [
  { name: "Skyline Drones", src: "/logos/skyline-drones.svg" },
  { name: "La Orizont", src: "/logos/la-orizont.png" },
  { name: "Skyline Academy", src: "/logos/skyline-academy.png" },
  { name: "TrueNorth", src: "/logos/truenorth.png" },
];

export default function Page() {
  return (
    <main className="page">
      <section className="hero-shell">
        <div className="hero-card">
          <div className="top-row">
            <div className="identity">
              <img src="/profile.jpg" alt="Leonard Dumitru" className="profile" />
              <div>
                <p className="pretitle">QR landing card · not a CV</p>
                <h1>Leonard Dumitru</h1>
                <h2>Technical Product Operator</h2>
              </div>
            </div>
            <div className="contact-card">
              <a href="mailto:wh-systems@proton.me">wh-systems@proton.me</a>
              <a href="https://www.linkedin.com/in/wh-systems/" target="_blank" rel="noreferrer">linkedin.com/in/wh-systems</a>
              <span>Bucharest · Remote / Hybrid</span>
            </div>
          </div>

          <div className="hero-grid">
            <div className="hero-copy">
              <p className="headline">
                Technical Product Operator for AI, UAV/RF, Telecom Data & Defence Workflows
              </p>
              <p className="lead">
                I build product systems in messy technical environments.
              </p>
              <p className="body-copy">
                My work sits between engineering, field operations, data, AI and commercial execution —
                especially where the domain is complex, the knowledge is fragmented, and the product needs
                to become usable by operators, clients or decision-makers.
              </p>
              <p className="body-copy">
                Currently focused on UAV, sensing and defence-adjacent systems: payload logic, RF-aware
                positioning, Remote ID / C-UAS-related workflows, critical infrastructure use cases,
                AI knowledge systems and structured proposal intelligence.
              </p>
              <div className="chips">
                <span>AI Systems</span>
                <span>UAV/RF</span>
                <span>Telecom Data</span>
                <span>OSINT</span>
                <span>Defence Workflows</span>
              </div>
            </div>

            <div className="signal-card">
              <div className="mono-label">one-line version</div>
              <p>
                I build AI-enabled product systems for defence-adjacent environments where UAVs, RF,
                telecom data, OSINT and operational knowledge need to become structured workflows,
                internal tools and usable intelligence.
              </p>
              <div className="system-line">
                <span>documents</span>
                <i />
                <span>knowledge</span>
                <i />
                <span>workflows</span>
                <i />
                <span>execution</span>
              </div>
            </div>
          </div>

          <div className="ecosystem">
            <div className="mono-label">Current ecosystem context</div>
            <div className="logo-grid">
              {logos.map((logo) => (
                <div className="logo-tile" key={logo.name}>
                  <img src={logo.src} alt={logo.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="content-shell">
        <div className="accordion-list">
          {sections.map((section, index) => (
            <details className="fold" open={index < 2} key={section.title}>
              <summary>
                <span className="fold-index">{String(index + 1).padStart(2, "0")}</span>
                <span>
                  <b>{section.title}</b>
                  <small>{section.eyebrow}</small>
                </span>
              </summary>
              <div className="fold-content">
                {section.items.map((item) => (
                  <article className="mini-card" key={item.h}>
                    <h3>{item.h}</h3>
                    <p>{item.p}</p>
                  </article>
                ))}
              </div>
            </details>
          ))}
        </div>

        <aside className="side-panel">
          <div className="panel-card">
            <div className="mono-label">Conversation starters</div>
            <ul className="starter-list">
              {starters.map((starter) => <li key={starter}>{starter}</li>)}
            </ul>
          </div>

          <div className="panel-card">
            <div className="mono-label">Certifications</div>
            <div className="cert-list">
              {certs.map((cert) => <span key={cert}>{cert}</span>)}
            </div>
          </div>

          <div className="panel-card quiet">
            <p>
              A quick map of where I work best: complex systems, technical product logic,
              AI workflows, UAV/RF, telecom data and defence-adjacent operations.
            </p>
          </div>
        </aside>
      </section>

      <div className="mobile-dock">
        <a href="mailto:wh-systems@proton.me">Email</a>
        <a href="https://www.linkedin.com/in/wh-systems/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </main>
  );
}
