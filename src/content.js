// Bilingual portfolio content (ES / EN)
const CONTENT = {
  en: {
    locale: "EN",
    meta: {
      brand: "Edison Mena",
      role: "SCADA & IIoT Solutions Engineer",
      availability: "Industrial software · IIoT · SCADA",
      altLang: "Español",
      altLangCode: "es",
    },
    nav: [
      { id: "work", label: "Work" },
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
        },
      ],
    },
    experience: {
      kicker: "03 — Experience",
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
      kicker: "04 — Capabilities",
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
      kicker: "05 — Contact",
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
    },
    nav: [
      { id: "work", label: "Proyectos" },
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
        },
      ],
    },
    experience: {
      kicker: "03 — Experiencia",
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
      kicker: "04 — Capacidades",
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
      kicker: "05 — Contacto",
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
    },
  },
};

export { CONTENT };
export default CONTENT;
