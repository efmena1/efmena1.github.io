// Bilingual portfolio content (ES / EN)

/* ───────────────── architecture diagrams (shared EN/ES) ───────────────── */

const DIAGRAM_RMS = `<svg viewBox="0 0 800 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="rms-d"><title id="rms-d">Remote Monitoring System: ESP32 devices stream MQTT data through a broker to a multi-tenant Ignition gateway, surfaced in Perspective.</title>
<defs><marker id="ar1" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--md-on-surface-variant)"/></marker></defs>
<g font-family="ui-sans-serif,system-ui,sans-serif" font-size="11">
<rect x="10" y="10" width="170" height="106" rx="14" fill="none" stroke="var(--md-outline-variant)" stroke-dasharray="3 4"/>
<text x="22" y="28" font-size="9" font-weight="600" letter-spacing="0.12em" fill="var(--md-on-surface-variant)">TENANT A</text>
<rect x="22" y="38" width="146" height="30" rx="8" fill="var(--md-primary-container)"/>
<text x="36" y="58" font-weight="500" fill="var(--md-on-primary-container)">ESP32 · Pump</text>
<rect x="22" y="76" width="146" height="30" rx="8" fill="var(--md-primary-container)"/>
<text x="36" y="96" font-weight="500" fill="var(--md-on-primary-container)">ESP32 · Sensor</text>
<rect x="10" y="134" width="170" height="106" rx="14" fill="none" stroke="var(--md-outline-variant)" stroke-dasharray="3 4"/>
<text x="22" y="152" font-size="9" font-weight="600" letter-spacing="0.12em" fill="var(--md-on-surface-variant)">TENANT B</text>
<rect x="22" y="162" width="146" height="30" rx="8" fill="var(--md-tertiary-container)"/>
<text x="36" y="182" font-weight="500" fill="var(--md-on-tertiary-container)">ESP32 · Genset</text>
<rect x="22" y="200" width="146" height="30" rx="8" fill="var(--md-tertiary-container)"/>
<text x="36" y="220" font-weight="500" fill="var(--md-on-tertiary-container)">ESP32 · HVAC</text>
<g stroke="var(--md-on-surface-variant)" stroke-width="1.2" fill="none">
<path d="M180 53 C220 53 240 125 286 125" marker-end="url(#ar1)"/>
<path d="M180 91 C220 91 240 125 286 125" marker-end="url(#ar1)"/>
<path d="M180 177 C220 177 240 125 286 125" marker-end="url(#ar1)"/>
<path d="M180 215 C220 215 240 125 286 125" marker-end="url(#ar1)"/>
</g>
<text x="200" y="46" fill="var(--md-on-surface-variant)" font-size="10">MQTT · TLS</text>
<text x="200" y="238" fill="var(--md-on-surface-variant)" font-size="10">binary payload</text>
<rect x="286" y="95" width="112" height="60" rx="12" fill="var(--md-surface-container-high)" stroke="var(--md-outline-variant)"/>
<text x="342" y="121" text-anchor="middle" font-size="12" font-weight="600" fill="var(--md-on-surface)">MQTT</text>
<text x="342" y="138" text-anchor="middle" font-size="10" fill="var(--md-on-surface-variant)">Broker</text>
<path d="M398 125 L470 125" stroke="var(--md-on-surface-variant)" stroke-width="1.5" fill="none" marker-end="url(#ar1)"/>
<rect x="470" y="80" width="168" height="92" rx="14" fill="var(--md-primary)"/>
<text x="554" y="114" text-anchor="middle" font-size="13" font-weight="600" fill="var(--md-on-primary)">Ignition Gateway</text>
<text x="554" y="134" text-anchor="middle" font-size="10" fill="var(--md-on-primary)" opacity="0.86">100k+ tags · multi-tenant</text>
<text x="554" y="152" text-anchor="middle" font-size="10" fill="var(--md-on-primary)" opacity="0.7">OTA · binary payloads</text>
<path d="M638 125 L694 125" stroke="var(--md-on-surface-variant)" stroke-width="1.5" fill="none" marker-end="url(#ar1)"/>
<rect x="694" y="82" width="90" height="88" rx="10" fill="var(--md-surface-container)" stroke="var(--md-outline-variant)"/>
<rect x="704" y="92" width="70" height="5" rx="2" fill="var(--md-primary)"/>
<rect x="704" y="104" width="70" height="20" rx="4" fill="var(--md-primary-container)"/>
<rect x="704" y="130" width="32" height="32" rx="4" fill="var(--md-tertiary-container)"/>
<rect x="742" y="130" width="32" height="32" rx="4" fill="var(--md-secondary-container)"/>
<text x="739" y="182" text-anchor="middle" font-size="10" fill="var(--md-on-surface-variant)">Perspective</text>
</g></svg>`;

const DIAGRAM_P3D = `<svg viewBox="0 0 800 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="p3d-d"><title id="p3d-d">Perspective 3D module: Ignition tags bind to a Three.js scene via a custom Java SDK module and a React runtime.</title>
<defs><marker id="ar2" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--md-on-surface-variant)"/></marker></defs>
<g font-family="ui-sans-serif,system-ui,sans-serif" font-size="11">
<rect x="20" y="100" width="160" height="60" rx="12" fill="var(--md-primary-container)"/>
<text x="100" y="124" text-anchor="middle" font-weight="600" font-size="12" fill="var(--md-on-primary-container)">Ignition Tag</text>
<text x="100" y="144" text-anchor="middle" font-size="10" fill="var(--md-on-primary-container)" opacity="0.78">temperature · pressure · state</text>
<g stroke="var(--md-on-surface-variant)" stroke-width="1.4" fill="none">
<path d="M180 116 L262 80" marker-end="url(#ar2)"/>
<path d="M262 90 L180 126" marker-end="url(#ar2)"/>
</g>
<rect x="262" y="40" width="200" height="60" rx="12" fill="var(--md-surface-container-high)" stroke="var(--md-outline-variant)"/>
<text x="362" y="64" text-anchor="middle" font-weight="600" font-size="12" fill="var(--md-on-surface)">SDK Module (Java)</text>
<text x="362" y="82" text-anchor="middle" font-size="10" fill="var(--md-on-surface-variant)">component descriptors · prop schema</text>
<g stroke="var(--md-on-surface-variant)" stroke-width="1.4" fill="none">
<path d="M180 144 L262 180" marker-end="url(#ar2)"/>
<path d="M262 170 L180 134" marker-end="url(#ar2)"/>
</g>
<rect x="262" y="158" width="200" height="60" rx="12" fill="var(--md-surface-container-high)" stroke="var(--md-outline-variant)"/>
<text x="362" y="182" text-anchor="middle" font-weight="600" font-size="12" fill="var(--md-on-surface)">React + Three.js</text>
<text x="362" y="200" text-anchor="middle" font-size="10" fill="var(--md-on-surface-variant)">runtime · property bindings</text>
<path d="M462 130 L528 130" stroke="var(--md-on-surface-variant)" stroke-width="1.5" fill="none" marker-end="url(#ar2)"/>
<rect x="528" y="44" width="252" height="172" rx="14" fill="var(--md-tertiary-container)"/>
<text x="544" y="64" font-size="9" font-weight="600" letter-spacing="0.12em" fill="var(--md-on-tertiary-container)">3D SCENE</text>
<g transform="translate(594 88)">
<path d="M50 60 L90 40 L130 60 L130 110 L90 130 L50 110 Z" fill="var(--md-tertiary)" opacity="0.55"/>
<path d="M50 60 L90 40 L130 60 L90 80 Z" fill="var(--md-tertiary)" opacity="0.85"/>
<path d="M50 60 L90 80 L90 130 L50 110 Z" fill="var(--md-tertiary)" opacity="0.5"/>
<path d="M130 60 L130 110 L90 130 L90 80 Z" fill="var(--md-tertiary)" opacity="0.7"/>
<circle cx="90" cy="60" r="7" fill="var(--md-primary)"/>
<circle cx="90" cy="60" r="3" fill="var(--md-on-primary)"/>
</g>
<text x="654" y="200" text-anchor="middle" font-size="10" fill="var(--md-on-tertiary-container)" opacity="0.85">live tag → mesh property</text>
</g></svg>`;

const DIAGRAM_SCADA = `<svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="dc-d"><title id="dc-d">Multi-site SCADA: UPS, HVAC and generators connect via Modbus/BACnet/SNMP through Ignition gateways to a unified operator view, organized by Purdue Model levels.</title>
<g font-family="ui-sans-serif,system-ui,sans-serif" font-size="11">
<rect x="20" y="20" width="760" height="44" rx="10" fill="var(--md-primary)"/>
<text x="40" y="48" font-weight="600" font-size="13" fill="var(--md-on-primary)">L3 · Operator View</text>
<text x="760" y="48" text-anchor="end" font-size="10" fill="var(--md-on-primary)" opacity="0.86">Perspective · unified across sites</text>
<line x1="220" y1="64" x2="220" y2="84" stroke="var(--md-outline)" stroke-width="1.2"/>
<line x1="400" y1="64" x2="400" y2="84" stroke="var(--md-outline)" stroke-width="1.2"/>
<line x1="580" y1="64" x2="580" y2="84" stroke="var(--md-outline)" stroke-width="1.2"/>
<text x="40" y="112" font-size="11" font-weight="600" letter-spacing="0.08em" fill="var(--md-on-surface-variant)">L2</text>
<rect x="120" y="84" width="200" height="44" rx="10" fill="var(--md-primary-container)"/>
<text x="220" y="111" text-anchor="middle" font-weight="600" font-size="12" fill="var(--md-on-primary-container)">Ignition Gateway · Site 1</text>
<rect x="300" y="84" width="200" height="44" rx="10" fill="var(--md-primary-container)"/>
<text x="400" y="111" text-anchor="middle" font-weight="600" font-size="12" fill="var(--md-on-primary-container)">Ignition Gateway · Site 2</text>
<rect x="480" y="84" width="200" height="44" rx="10" fill="var(--md-primary-container)"/>
<text x="580" y="111" text-anchor="middle" font-weight="600" font-size="12" fill="var(--md-on-primary-container)">Ignition Gateway · Site 3</text>
<line x1="100" y1="146" x2="700" y2="146" stroke="var(--md-outline-variant)" stroke-width="1.2" stroke-dasharray="4 4"/>
<text x="40" y="150" font-size="11" font-weight="600" letter-spacing="0.08em" fill="var(--md-on-surface-variant)">L1</text>
<text x="400" y="142" text-anchor="middle" font-size="10" font-weight="600" letter-spacing="0.18em" fill="var(--md-on-surface-variant)">MODBUS · BACNET · SNMP</text>
<text x="40" y="204" font-size="11" font-weight="600" letter-spacing="0.08em" fill="var(--md-on-surface-variant)">L0</text>
<rect x="120" y="170" width="160" height="64" rx="12" fill="var(--md-secondary-container)"/>
<text x="200" y="196" text-anchor="middle" font-weight="600" font-size="12" fill="var(--md-on-secondary-container)">UPS Array</text>
<text x="200" y="216" text-anchor="middle" font-size="10" fill="var(--md-on-secondary-container)" opacity="0.78">load · runtime · alarms</text>
<rect x="300" y="170" width="200" height="64" rx="12" fill="var(--md-secondary-container)"/>
<text x="400" y="196" text-anchor="middle" font-weight="600" font-size="12" fill="var(--md-on-secondary-container)">HVAC / CRAC</text>
<text x="400" y="216" text-anchor="middle" font-size="10" fill="var(--md-on-secondary-container)" opacity="0.78">temp · humidity · airflow</text>
<rect x="520" y="170" width="160" height="64" rx="12" fill="var(--md-secondary-container)"/>
<text x="600" y="196" text-anchor="middle" font-weight="600" font-size="12" fill="var(--md-on-secondary-container)">Generators</text>
<text x="600" y="216" text-anchor="middle" font-size="10" fill="var(--md-on-secondary-container)" opacity="0.78">fuel · status · ATS</text>
<rect x="20" y="252" width="760" height="18" rx="6" fill="none" stroke="var(--md-outline-variant)" stroke-dasharray="2 3"/>
<text x="400" y="265" text-anchor="middle" font-size="10" letter-spacing="0.08em" fill="var(--md-on-surface-variant)">Purdue-aligned · network segmentation · OT hardening</text>
</g></svg>`;

/* ───────────────── bilingual content ───────────────── */

const CONTENT = {
  en: {
    locale: "EN",
    meta: {
      brand: "Edison Mena",
      role: "SCADA & IIoT Solutions Engineer",
      availability: "Industrial software · IIoT · SCADA",
      altLang: "Español",
      altLangCode: "es",
      themeLight: "Light",
      themeDark: "Dark",
      themeAuto: "Auto",
      themeToggleLabel: "Theme",
    },
    nav: [
      { id: "work", label: "Work" },
      { id: "opensource", label: "Open Source" },
      { id: "about", label: "About" },
      { id: "experience", label: "Experience" },
      { id: "skills", label: "Skills" },
      { id: "contact", label: "Contact" },
    ],
    hero: {
      eyebrow: "Ignition Gold Certified · Based in Ecuador",
      headline: [
        { text: "I build industrial systems ", style: "plain" },
        { text: "that scale.", style: "italic" },
      ],
      sub:
        "Electronics, Control & Automation Engineer specialized in Ignition, embedded IIoT, and modern operator UX. I design platforms that turn distributed plants and field hardware into reliable, multi-tenant software.",
      ctaPrimary: "View Resume",
      ctaSecondary: "See Work",
      ctaGhost: "Say hello",
      resumeHref: "/Edison_Mena_Resume_2026.pdf",
    },
    metrics: [
      { value: "500+", label: "IIoT devices in production across LATAM" },
      { value: "100k+", label: "Ignition tags architected for multi-tenant scale" },
      { value: "90%", label: "cellular data reduction via custom binary payloads" },
      { value: "4", label: "countries served with the same platform" },
    ],
    about: {
      kicker: "01 — About",
      title: "Industrial software, built with systems thinking.",
      lead:
        "I turn fragmented infrastructure into cohesive digital platforms. My strongest domain is Ignition — especially Perspective-centric solutions where architecture, UX, and maintainability all matter at once.",
      paragraphs: [
        "I'm comfortable across the full stack of industrial work: ESP32 firmware in FreeRTOS, MQTT payload design, ISA-95 / Purdue Model architecture, OT cybersecurity, and modern web tooling on top of Ignition SDK.",
        "I'm fascinated by the intersection of industrial systems, modern software, and AI-assisted workflows — and I enjoy documenting what I learn along the way.",
      ],
      facts: [
        { k: "Based in", v: "Ecuador (UTC−5)" },
        { k: "Currently", v: "Engineering Leader at Xponential Technologies" },
        { k: "Focus", v: "Ignition · IIoT · SCADA integration" },
        { k: "Languages", v: "Spanish (native) · English (professional)" },
      ],
    },
    work: {
      kicker: "02 — Selected work",
      title: "Built for scale, reliability, and modern industrial UX.",
      cta: "Read case study",
      projects: [
        {
          id: "rms",
          year: "2024",
          title: "Remote Monitoring System",
          eyebrow: "Multi-tenant IIoT platform",
          summary:
            "An Ignition-based platform unifying custom MQTT devices, embedded firmware, scalable tag architecture, and operator dashboards for decentralized fleet monitoring.",
          stack: ["Ignition", "Perspective", "ESP-IDF", "MQTT", "OTA"],
          context:
            "Operators across LATAM needed visibility over hundreds of remote assets — generators, pumps, environmental sensors — without dedicated SCADA infrastructure per site.",
          role:
            "Engineering lead. Owned MQTT data architecture, Ignition tag model, firmware integration strategy, and the multi-tenant deployment pattern.",
          impact: [
            "Scaled to 500+ devices and 100,000+ tags across four countries on a single, maintainable architecture.",
            "Designed a custom binary payload that cut cellular data consumption by ~90%, slashing recurring connectivity cost.",
            "Built a controlled OTA workflow so field equipment updates without truck rolls.",
            "Structured the platform for multi-tenant operation, making customer onboarding a configuration task — not a project.",
          ],
          diagram: DIAGRAM_RMS,
          diagramCaption:
            "ESP32 devices ship compressed MQTT payloads to a broker. The Ignition gateway handles tag history and multi-tenant access; operators consume everything in Perspective.",
        },
        {
          id: "perspective3d",
          year: "2023",
          title: "Ignition Perspective 3D Module",
          eyebrow: "Custom SDK extension",
          summary:
            "A custom Perspective module built on the Ignition SDK and Three.js — GLB asset import, live data binding, and interactive 3D scenes inside operator UIs.",
          stack: ["Ignition SDK", "Java", "Gradle", "React", "Three.js"],
          context:
            "Standard Perspective components couldn't express plant layout, equipment context, or scenario-based interaction. Teams wanted modern 3D visualization without leaving Ignition.",
          role:
            "Module author. Designed the SDK component, the React/Three.js runtime, and the property-binding surface so any tag can drive any scene element.",
          impact: [
            "Extended Perspective with real-time 3D visualization bound to live industrial data.",
            "Enabled modern operator UX in industrial environments using familiar web tooling.",
            "Opened the door to richer contextual monitoring, layout views, and scenario interfaces.",
          ],
          diagram: DIAGRAM_P3D,
          diagramCaption:
            "The Java SDK module declares component props inside Ignition. A React + Three.js runtime renders the scene, and live tag values drive mesh transforms bidirectionally.",
        },
        {
          id: "scada-dc",
          year: "2022",
          title: "Enterprise Data Centre SCADA",
          eyebrow: "Mission-critical infrastructure",
          summary:
            "SCADA integration across geographically distributed data centres — UPS, HVAC, generators — under an ISA-95 aligned architecture with OT-grade hardening.",
          stack: ["Ignition", "Modbus", "BACnet", "SNMP", "ISA-95"],
          context:
            "A multi-site data centre operator needed unified visibility and consistent operational practice across facilities running heterogeneous infrastructure.",
          role:
            "Integration architect. Aligned protocol coverage, network segmentation, and Ignition gateway topology to Purdue Model expectations.",
          impact: [
            "Unified UPS, HVAC, and generator telemetry into a single operator view.",
            "Applied Purdue Model thinking and server hardening for reliable OT operation.",
            "Improved decision-making through consistent visibility across distributed sites.",
          ],
          diagram: DIAGRAM_SCADA,
          diagramCaption:
            "Field equipment exposes Modbus, BACnet and SNMP to per-site Ignition gateways. Gateway data converges into a single L3 operator view, aligned to the Purdue Model.",
        },
      ],
    },
    opensource: {
      kicker: "03 — Open Source",
      title: "Code I share publicly.",
      lead:
        "Small utilities, experiments, and notes from the industrial trenches. Replace the placeholders below with real repos when published.",
      cta: "View on GitHub",
      ctaAll: "All repos on GitHub →",
      ctaAllHref: "https://github.com/efmena1",
      repos: [
        {
          name: "ignition-binary-payload",
          description:
            "Reference design and Jython helpers for compact binary MQTT payloads in Ignition. Cuts cellular data ~90% versus JSON.",
          stack: ["Ignition", "Jython", "MQTT"],
          href: "https://github.com/efmena1",
          meta: "Library · WIP",
        },
        {
          name: "esp32-ota-template",
          description:
            "Opinionated ESP-IDF starter for OTA-capable industrial devices: FreeRTOS tasks, MQTT/TLS, signed updates, rollback.",
          stack: ["ESP-IDF", "FreeRTOS", "C"],
          href: "https://github.com/efmena1",
          meta: "Template",
        },
        {
          name: "perspective-3d-demo",
          description:
            "Stand-alone Three.js + React demo showing how live Ignition tags can drive 3D scene properties via the SDK pattern.",
          stack: ["React", "Three.js", "Ignition SDK"],
          href: "https://github.com/efmena1",
          meta: "Demo",
        },
      ],
    },
    experience: {
      kicker: "04 — Experience",
      title: "Hands-on engineering with leadership and product ownership.",
      roles: [
        {
          role: "Engineering Leader",
          company: "Xponential Technologies",
          period: "Jun 2024 — Present",
          location: "Remote · LATAM",
          description:
            "Leading a multidisciplinary engineering team delivering X-Monitoring, a multi-tenant Ignition platform for remote asset monitoring across Latin America.",
          highlights: [
            "Owned the MQTT data architecture and Ignition tag model behind a 500+ device fleet.",
            "Designed a binary payload strategy that reduced connectivity consumption by ~90%.",
            "Built and led an internal Ignition certification program to raise delivery quality.",
          ],
        },
        {
          role: "Senior Developer Engineer",
          company: "Xponential Technologies",
          period: "Mar 2022 — Jun 2024",
          location: "Remote · LATAM",
          description:
            "Worked across the full industrial stack — from embedded C firmware and industrial protocols to Perspective UIs and cloud-connected reporting.",
          highlights: [
            "Developed FreeRTOS firmware for proprietary monitoring hardware and field integrations.",
            "Co-developed a real-time shrimp traceability platform with live GPS and condition monitoring.",
            "Built a custom Perspective 3D module to enable richer visual interaction inside Ignition.",
          ],
        },
      ],
    },
    skills: {
      kicker: "05 — Capabilities",
      title: "Industrial depth meets modern software delivery.",
      groups: [
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
            "AI-assisted workflows",
          ],
        },
      ],
      certs: [
        "Ignition Gold Certified",
        "CCNA",
        "AWS Certified Cloud Practitioner",
        "Full Stack Open",
        "Foundations of Project Management",
      ],
      certsLabel: "Credentials",
    },
    contact: {
      kicker: "06 — Contact",
      title: "Let's talk industrial software.",
      lead:
        "Happy to chat about Ignition, IIoT architecture, SCADA integration, or modern industrial UX. Drop a note any time.",
      email: "efmena1@hotmail.com",
      links: [
        { label: "Email", href: "mailto:efmena1@hotmail.com", value: "efmena1@hotmail.com" },
        { label: "GitHub", href: "https://github.com/efmena1", value: "github.com/efmena1" },
        { label: "LinkedIn", href: "https://linkedin.com/in/efmena1", value: "linkedin.com/in/efmena1" },
      ],
    },
    footer: {
      colophon: "Designed & built by Edison Mena · 2026",
      backToTop: "Back to top",
    },
    modal: {
      close: "Close",
      context: "Context",
      role: "Role",
      impact: "Impact",
      stack: "Stack",
      diagram: "Architecture",
      diagramAlt: "Architecture diagram",
    },
  },

  es: {
    locale: "ES",
    meta: {
      brand: "Edison Mena",
      role: "Ingeniero de Soluciones SCADA & IIoT",
      availability: "Software industrial · IIoT · SCADA",
      altLang: "English",
      altLangCode: "en",
      themeLight: "Claro",
      themeDark: "Oscuro",
      themeAuto: "Auto",
      themeToggleLabel: "Tema",
    },
    nav: [
      { id: "work", label: "Proyectos" },
      { id: "opensource", label: "Open Source" },
      { id: "about", label: "Sobre mí" },
      { id: "experience", label: "Experiencia" },
      { id: "skills", label: "Capacidades" },
      { id: "contact", label: "Contacto" },
    ],
    hero: {
      eyebrow: "Ignition Gold Certified · Ecuador",
      headline: [
        { text: "Construyo sistemas industriales ", style: "plain" },
        { text: "que escalan.", style: "italic" },
      ],
      sub:
        "Ingeniero en Electrónica, Control y Automatización, especializado en Ignition, IIoT embebido y UX moderna para operación. Diseño plataformas que convierten plantas distribuidas y hardware de campo en software confiable y multi-tenant.",
      ctaPrimary: "Ver CV",
      ctaSecondary: "Ver proyectos",
      ctaGhost: "Saluda",
      resumeHref: "/Edison_Mena_Resume_2026.pdf",
    },
    metrics: [
      { value: "500+", label: "dispositivos IIoT en producción en LATAM" },
      { value: "100k+", label: "tags Ignition diseñados para escala multi-tenant" },
      { value: "90%", label: "reducción de datos celulares con payloads binarios" },
      { value: "4", label: "países atendidos con la misma plataforma" },
    ],
    about: {
      kicker: "01 — Sobre mí",
      title: "Software industrial, hecho con pensamiento de sistemas.",
      lead:
        "Convierto infraestructura fragmentada en plataformas digitales coherentes. Mi dominio más fuerte es Ignition — especialmente soluciones con Perspective donde arquitectura, UX y mantenibilidad importan al mismo tiempo.",
      paragraphs: [
        "Me muevo en todo el stack industrial: firmware ESP32 sobre FreeRTOS, diseño de payloads MQTT, arquitectura ISA-95 / Purdue, ciberseguridad OT y herramientas web modernas sobre el Ignition SDK.",
        "Me apasiona la intersección entre sistemas industriales, software moderno y flujos asistidos por IA — y disfruto documentar lo que aprendo en el camino.",
      ],
      facts: [
        { k: "Ubicación", v: "Ecuador (UTC−5)" },
        { k: "Actualmente", v: "Engineering Leader en Xponential Technologies" },
        { k: "Foco", v: "Ignition · IIoT · integración SCADA" },
        { k: "Idiomas", v: "Español (nativo) · Inglés (profesional)" },
      ],
    },
    work: {
      kicker: "02 — Proyectos seleccionados",
      title: "Construidos para escalar, ser confiables y tener UX industrial moderna.",
      cta: "Ver caso de estudio",
      projects: [
        {
          id: "rms",
          year: "2024",
          title: "Sistema de Monitoreo Remoto",
          eyebrow: "Plataforma IIoT multi-tenant",
          summary:
            "Plataforma basada en Ignition que unifica dispositivos MQTT personalizados, firmware embebido, arquitectura de tags escalable y dashboards para operadores en flotas descentralizadas.",
          stack: ["Ignition", "Perspective", "ESP-IDF", "MQTT", "OTA"],
          context:
            "Operadores en LATAM necesitaban visibilidad sobre cientos de activos remotos — generadores, bombas, sensores ambientales — sin desplegar infraestructura SCADA por sitio.",
          role:
            "Líder de ingeniería. Responsable de la arquitectura de datos MQTT, modelo de tags Ignition, estrategia de integración de firmware y patrón de despliegue multi-tenant.",
          impact: [
            "Escalado a 500+ dispositivos y 100,000+ tags en cuatro países sobre una sola arquitectura mantenible.",
            "Payload binario personalizado que redujo el consumo celular en ~90%, recortando el costo recurrente de conectividad.",
            "Flujo OTA controlado para actualizar equipos de campo sin visitas presenciales.",
            "Plataforma estructurada para operación multi-tenant: onboarding de clientes como configuración, no como proyecto.",
          ],
          diagram: DIAGRAM_RMS,
          diagramCaption:
            "Los dispositivos ESP32 envían payloads MQTT comprimidos al broker. El gateway de Ignition gestiona historial de tags y acceso multi-tenant; los operadores consumen todo en Perspective.",
        },
        {
          id: "perspective3d",
          year: "2023",
          title: "Módulo 3D para Ignition Perspective",
          eyebrow: "Extensión personalizada del SDK",
          summary:
            "Módulo Perspective construido sobre Ignition SDK y Three.js — importación de assets GLB, binding a datos en vivo y escenas 3D interactivas dentro de la UI del operador.",
          stack: ["Ignition SDK", "Java", "Gradle", "React", "Three.js"],
          context:
            "Los componentes estándar de Perspective no expresaban layout de planta, contexto de equipos ni interacción basada en escenarios. Los equipos querían visualización 3D moderna sin salir de Ignition.",
          role:
            "Autor del módulo. Diseñé el componente SDK, el runtime con React/Three.js y la superficie de binding para que cualquier tag pueda controlar cualquier elemento de la escena.",
          impact: [
            "Extendí Perspective con visualización 3D en tiempo real conectada a datos industriales.",
            "Habilité UX moderna para operadores industriales usando herramientas web familiares.",
            "Abrí la puerta a monitoreo contextual más rico, vistas de layout e interfaces por escenario.",
          ],
          diagram: DIAGRAM_P3D,
          diagramCaption:
            "El módulo SDK en Java declara las props del componente dentro de Ignition. Un runtime de React + Three.js renderiza la escena, y los valores de los tags en vivo controlan las transformaciones del mesh en ambos sentidos.",
        },
        {
          id: "scada-dc",
          year: "2022",
          title: "SCADA para Data Centers Empresariales",
          eyebrow: "Infraestructura crítica",
          summary:
            "Integración SCADA en data centers distribuidos — UPS, HVAC, generadores — bajo arquitectura alineada a ISA-95 y hardening grado OT.",
          stack: ["Ignition", "Modbus", "BACnet", "SNMP", "ISA-95"],
          context:
            "Un operador multi-sitio necesitaba visibilidad unificada y prácticas operativas consistentes en facilities con infraestructura heterogénea.",
          role:
            "Arquitecto de integración. Alineé cobertura de protocolos, segmentación de red y topología de gateways Ignition al Modelo Purdue.",
          impact: [
            "Telemetría unificada de UPS, HVAC y generadores en una sola vista de operador.",
            "Aplicación del Modelo Purdue y hardening de servidores para operación OT confiable.",
            "Mejor toma de decisiones por visibilidad consistente entre sitios distribuidos.",
          ],
          diagram: DIAGRAM_SCADA,
          diagramCaption:
            "Los equipos de campo exponen Modbus, BACnet y SNMP a gateways Ignition por sitio. Los datos convergen en una sola vista de operador en L3, alineada al Modelo Purdue.",
        },
      ],
    },
    opensource: {
      kicker: "03 — Open Source",
      title: "Código que comparto públicamente.",
      lead:
        "Pequeñas utilidades, experimentos y notas desde la trinchera industrial. Reemplaza los placeholders cuando publiques los repos reales.",
      cta: "Ver en GitHub",
      ctaAll: "Todos los repos en GitHub →",
      ctaAllHref: "https://github.com/efmena1",
      repos: [
        {
          name: "ignition-binary-payload",
          description:
            "Diseño de referencia y helpers en Jython para payloads MQTT binarios compactos en Ignition. Reduce ~90% el consumo celular frente a JSON.",
          stack: ["Ignition", "Jython", "MQTT"],
          href: "https://github.com/efmena1",
          meta: "Librería · WIP",
        },
        {
          name: "esp32-ota-template",
          description:
            "Starter opinado de ESP-IDF para dispositivos industriales con OTA: tareas FreeRTOS, MQTT/TLS, updates firmados y rollback.",
          stack: ["ESP-IDF", "FreeRTOS", "C"],
          href: "https://github.com/efmena1",
          meta: "Plantilla",
        },
        {
          name: "perspective-3d-demo",
          description:
            "Demo standalone de Three.js + React que muestra cómo tags de Ignition en vivo pueden controlar propiedades de una escena 3D vía el patrón SDK.",
          stack: ["React", "Three.js", "Ignition SDK"],
          href: "https://github.com/efmena1",
          meta: "Demo",
        },
      ],
    },
    experience: {
      kicker: "04 — Experiencia",
      title: "Ingeniería hands-on con liderazgo y ownership de producto.",
      roles: [
        {
          role: "Engineering Leader",
          company: "Xponential Technologies",
          period: "Jun 2024 — Presente",
          location: "Remoto · LATAM",
          description:
            "Lidero un equipo multidisciplinario que entrega X-Monitoring, una plataforma Ignition multi-tenant para monitoreo remoto de activos en Latinoamérica.",
          highlights: [
            "Responsable de la arquitectura de datos MQTT y modelo de tags Ignition detrás de una flota de 500+ dispositivos.",
            "Diseño de payload binario que redujo el consumo de conectividad en ~90%.",
            "Creé y lideré un programa interno de certificación Ignition para elevar la calidad de entrega.",
          ],
        },
        {
          role: "Senior Developer Engineer",
          company: "Xponential Technologies",
          period: "Mar 2022 — Jun 2024",
          location: "Remoto · LATAM",
          description:
            "Trabajé en todo el stack industrial — desde firmware en C embebido y protocolos industriales hasta UIs en Perspective y reportes conectados a la nube.",
          highlights: [
            "Firmware FreeRTOS para hardware de monitoreo propietario e integraciones de campo.",
            "Co-desarrollo de una plataforma de trazabilidad camaronera en tiempo real con GPS y condiciones ambientales.",
            "Módulo 3D personalizado en Perspective para interacción visual más rica dentro de Ignition.",
          ],
        },
      ],
    },
    skills: {
      kicker: "05 — Capacidades",
      title: "Profundidad industrial con entrega de software moderna.",
      groups: [
        {
          title: "Software Industrial",
          items: [
            "Ignition Gold Certified",
            "Perspective",
            "Vision",
            "Tag Historian",
            "Alarm Notification",
            "MQTT Engine",
            "Módulos Ignition SDK",
          ],
        },
        {
          title: "Embebido & IIoT",
          items: [
            "ESP32",
            "ESP-IDF",
            "FreeRTOS",
            "C embebido",
            "Actualizaciones OTA",
            "Firmware personalizado",
            "Optimización de payload MQTT",
          ],
        },
        {
          title: "Arquitectura & Integración",
          items: [
            "ISA-95 / Modelo Purdue",
            "SCADA multi-tenant",
            "Modbus RTU/TCP",
            "BACnet",
            "SNMP",
            "OPC UA",
            "Ciberseguridad OT",
          ],
        },
        {
          title: "Entrega de Software",
          items: [
            "React",
            "JavaScript / TypeScript",
            "Python / Jython",
            "Java",
            "Docker",
            "GitHub Actions",
            "AWS",
            "Flujos asistidos por IA",
          ],
        },
      ],
      certs: [
        "Ignition Gold Certified",
        "CCNA",
        "AWS Certified Cloud Practitioner",
        "Full Stack Open",
        "Foundations of Project Management",
      ],
      certsLabel: "Credenciales",
    },
    contact: {
      kicker: "06 — Contacto",
      title: "Hablemos de software industrial.",
      lead:
        "Encantado de conversar sobre Ignition, arquitectura IIoT, integración SCADA o UX industrial moderna. Escíbeme cuando quieras.",
      email: "efmena1@hotmail.com",
      links: [
        { label: "Email", href: "mailto:efmena1@hotmail.com", value: "efmena1@hotmail.com" },
        { label: "GitHub", href: "https://github.com/efmena1", value: "github.com/efmena1" },
        { label: "LinkedIn", href: "https://linkedin.com/in/efmena1", value: "linkedin.com/in/efmena1" },
      ],
    },
    footer: {
      colophon: "Diseñado y construido por Edison Mena · 2026",
      backToTop: "Volver arriba",
    },
    modal: {
      close: "Cerrar",
      context: "Contexto",
      role: "Rol",
      impact: "Impacto",
      stack: "Stack",
      diagram: "Arquitectura",
      diagramAlt: "Diagrama de arquitectura",
    },
  },
};

export { CONTENT };
export default CONTENT;
