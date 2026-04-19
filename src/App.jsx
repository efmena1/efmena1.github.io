const navigation = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const metrics = [
  { value: "500+", label: "IIoT devices monitored across LATAM" },
  { value: "100k+", label: "Ignition tags architected for scale" },
  { value: "90%", label: "cellular data reduction via binary payloads" },
  { value: "4", label: "countries served with multi-tenant deployments" },
];

const featuredProjects = [
  {
    title: "Remote Monitoring System",
    eyebrow: "Multi-tenant IIoT platform",
    summary:
      "Designed and led an Ignition-based remote monitoring platform that unified custom MQTT devices, embedded firmware, scalable tag architecture, and operator-friendly dashboards for decentralized fleet monitoring.",
    impact: [
      "Scaled the architecture to 500+ devices and over 100,000 tags across four countries.",
      "Built a controlled OTA firmware workflow to update distributed equipment without site visits.",
      "Structured the system for multi-tenant operations, making it easier to onboard customers while keeping performance consistent.",
    ],
    stack: ["Ignition", "Perspective", "ESP-IDF", "MQTT", "OTA"],
  },
  {
    title: "Ignition Perspective 3D Module",
    eyebrow: "Custom SDK extension",
    summary:
      "Built a custom Ignition Perspective module with the Ignition SDK and Three.js so teams could import GLB assets, interact with 3D scenes, and bind live industrial data into modern digital representations.",
    impact: [
      "Extended Perspective beyond standard components with real-time 3D visualization.",
      "Enabled modern operator experiences for industrial and IT environments using familiar web tooling.",
      "Created a path for richer contextual monitoring, layout visualization, and scenario-based interfaces.",
    ],
    stack: ["Ignition SDK", "Java", "Gradle", "React", "Three.js"],
  },
  {
    title: "Enterprise Data Centre SCADA",
    eyebrow: "Mission-critical infrastructure integration",
    summary:
      "Delivered SCADA integrations for geographically distributed data centre environments, combining industrial protocols, ISA-95 aligned architecture, and OT cybersecurity practices for enterprise-grade operations.",
    impact: [
      "Integrated critical systems such as UPS, HVAC, and generator monitoring into a unified view.",
      "Applied Purdue Model thinking and server hardening practices for reliable industrial operations.",
      "Supported decision-making with cleaner visibility across distributed sites and equipment types.",
    ],
    stack: ["Ignition", "Modbus", "BACnet", "SNMP", "ISA-95"],
  },
];

const experience = [
  {
    role: "Engineering Leader",
    company: "Xponential Technologies",
    period: "Jun 2024 - Present",
    description:
      "Leading a multidisciplinary engineering team delivering X-Monitoring, a multi-tenant Ignition platform for remote asset monitoring across Latin America.",
    highlights: [
      "Owned the MQTT data architecture and Ignition tag model behind a 500+ device fleet.",
      "Designed a custom binary payload strategy that reduced connectivity consumption by roughly 90%.",
      "Created and led an internal Ignition certification program to raise delivery quality across the team.",
    ],
  },
  {
    role: "Senior Developer Engineer",
    company: "Xponential Technologies",
    period: "Mar 2022 - Jun 2024",
    description:
      "Worked across the full industrial stack, from embedded C firmware and industrial protocols to Perspective UIs and cloud-connected reporting flows.",
    highlights: [
      "Developed FreeRTOS-based firmware for proprietary monitoring hardware and field integrations.",
      "Co-developed a real-time shrimp traceability platform with live GPS data and condition monitoring.",
      "Built a custom Perspective 3D module to enable richer visual interaction inside Ignition.",
    ],
  },
];

const skillGroups = [
  {
    title: "Industrial Software",
    items: [
      "Ignition Gold Certified",
      "Perspective",
      "Vision",
      "Tag Historian",
      "Alarm Notification",
      "MQTT Engine",
      "Ignition SDK modules",
    ],
  },
  {
    title: "Embedded & IIoT",
    items: [
      "ESP32",
      "ESP-IDF",
      "FreeRTOS",
      "Embedded C",
      "OTA updates",
      "Custom firmware",
      "MQTT payload optimization",
    ],
  },
  {
    title: "Architecture & Integration",
    items: [
      "ISA-95 / Purdue Model",
      "Multi-tenant SCADA",
      "Modbus RTU/TCP",
      "BACnet",
      "SNMP",
      "OPC UA",
      "OT cybersecurity",
    ],
  },
  {
    title: "Software Delivery",
    items: [
      "React",
      "JavaScript / TypeScript",
      "Python / Jython",
      "Java",
      "Docker",
      "GitHub Actions",
      "AWS",
      "AI-assisted engineering workflows",
    ],
  },
];

const blogPosts = [
  {
    title: "Designing IIoT Systems That Scale Beyond the Pilot",
    excerpt:
      "Lessons from building multi-tenant Ignition architectures that stay maintainable as devices, tenants, and data volume grow.",
    tag: "Architecture",
  },
  {
    title: "Why Modern UX Matters in Industrial Applications",
    excerpt:
      "How Perspective, React thinking, and 3D interaction can make operational software easier to trust and faster to use.",
    tag: "UX for Operations",
  },
  {
    title: "Using AI Agents as a Force Multiplier in Engineering Work",
    excerpt:
      "How tools like Claude, Claude Code, and Codex fit into research, prototyping, debugging, and delivery without replacing engineering judgment.",
    tag: "AI Workflows",
  },
];

const certifications = [
  "Ignition Gold Certified",
  "CCNA",
  "AWS Certified Cloud Practitioner",
  "Full Stack Open",
  "Foundations of Project Management",
];

function App() {
  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <a className="brand" href="#home">
          <span className="brand-mark">EM</span>
          <span>Edison Mena</span>
        </a>

        <nav className="nav">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero panel" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Ignition Gold-Certified | SCADA & IIoT Solutions Engineer</p>
            <h1>Solving Real-World Problems</h1>
            <p className="lead">
              I am an Electronics, Control, and Automation Engineer focused on industrial digital
              transformation. I design systems that connect embedded devices, industrial protocols,
              Ignition applications, and modern interfaces into reliable solutions teams can operate
              with confidence.
            </p>
            <p className="support">
              My work spans multi-tenant IIoT platforms, custom Perspective experiences, ESP32
              firmware, and the delivery practices needed to ship complex systems well. I also
              actively use AI agents such as Claude, Claude Code, and Codex to accelerate research,
              implementation, and engineering quality.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="/Edison_Mena_Resume_2026.pdf" target="_blank" rel="noreferrer">
                View Resume
              </a>
              <a className="button button-secondary" href="#projects">
                Explore Projects
              </a>
              <a className="button button-ghost" href="mailto:efmena1@hotmail.com">
                Contact Me
              </a>
            </div>
          </div>

          <aside className="hero-card">
            <p className="card-label">What I bring</p>
            <ul className="hero-points">
              <li>Deep Ignition expertise with product and delivery leadership experience</li>
              <li>Embedded-to-cloud thinking across ESP32 firmware, MQTT, and SCADA applications</li>
              <li>Strong alignment between technical architecture, operational usability, and business outcomes</li>
            </ul>

            <div className="cert-block">
              <p className="card-label">Selected credentials</p>
              <div className="chip-row">
                {certifications.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section className="metrics">
          {metrics.map((metric) => (
            <article className="metric panel" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </article>
          ))}
        </section>

        <section className="section-grid" id="about">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>Industrial software, built with systems thinking.</h2>
          </div>
          <div className="panel prose-card">
            <p>
              I specialize in turning fragmented infrastructure into cohesive digital platforms.
              That means understanding the constraints of field hardware, the realities of
              industrial protocols, the performance demands of SCADA systems, and the importance
              of intuitive operator experiences.
            </p>
            <p>
              My strongest domain is Ignition, especially Perspective-centric solutions where
              architecture, UX, and maintainability all matter at once. I enjoy solving the
              deeper integration problems underneath the interface, then shaping the final
              experience so it feels modern, fast, and dependable.
            </p>
            <p>
              I am particularly interested in roles where I can help teams build modern industrial
              products, lead complex integrations, and use software, IIoT, and AI-assisted workflows
              to create measurable operational value.
            </p>
          </div>
        </section>

        <section className="section-stack" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Selected work focused on scale, reliability, and modern industrial UX.</h2>
          </div>
          <div className="project-grid">
            {featuredProjects.map((project) => (
              <article className="panel project-card" key={project.title}>
                <p className="project-eyebrow">{project.eyebrow}</p>
                <h3>{project.title}</h3>
                <p className="project-summary">{project.summary}</p>
                <ul className="project-list">
                  {project.impact.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="chip-row">
                  {project.stack.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-grid" id="experience">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>Hands-on engineering with leadership and product ownership.</h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="panel timeline-card" key={`${item.role}-${item.period}`}>
                <div className="timeline-header">
                  <div>
                    <h3>{item.role}</h3>
                    <p>{item.company}</p>
                  </div>
                  <span>{item.period}</span>
                </div>
                <p className="timeline-description">{item.description}</p>
                <ul className="project-list">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section-grid" id="skills">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>A blend of industrial engineering depth and modern software delivery.</h2>
          </div>
          <div className="skill-grid">
            {skillGroups.map((group) => (
              <article className="panel skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="chip-row">
                  {group.items.map((item) => (
                    <span className="chip chip-muted" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-grid" id="blog">
          <div className="section-heading">
            <p className="eyebrow">Blog</p>
            <h2>Topics I am writing about as I document my work and lessons learned.</h2>
          </div>
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article className="panel blog-card" key={post.title}>
                <span className="post-tag">{post.tag}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="soon-label">Publishing soon</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section-grid" id="contact">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Open to ambitious industrial software and digital transformation work.</h2>
          </div>
          <div className="panel contact-card">
            <p>
              If you are hiring for industrial software, IIoT, SCADA, embedded integration, or
              product-minded engineering leadership, I would be glad to connect.
            </p>
            <div className="contact-links">
              <a href="mailto:efmena1@hotmail.com">efmena1@hotmail.com</a>
              <a href="https://github.com/efmena1" target="_blank" rel="noreferrer">
                github.com/efmena1
              </a>
              <a href="https://linkedin.com/in/efmena1" target="_blank" rel="noreferrer">
                linkedin.com/in/efmena1
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
