import { Lang } from "./i18n";

// İki dilli metin yardımcı tipi
export type LocalizedText = { tr: string; en: string };

export const pick = (text: LocalizedText, lang: Lang) => text[lang];

// ---- Kişisel bilgiler ----
export const profile = {
  name: "Ertuğrul Bayraktar",
  role: {
    tr: "Yazılım Mühendisi",
    en: "Software Engineer",
  } as LocalizedText,
  // Hero altındaki kısa özet
  tagline: {
    tr: "Dağıtık sistemler ve olay-güdümlü mikroservisler üzerine uzmanlaşmış bir yazılım mühendisiyim; Java/Quarkus ve .NET ekosistemlerinde ölçeklenebilir backend mimarileri tasarlıyorum.",
    en: "Software engineer specializing in distributed systems and event-driven microservices, building scalable backend architectures across the Java/Quarkus and .NET ecosystems.",
  } as LocalizedText,
  // About bölümündeki uzun biyografi
  bio: {
    tr: "Ertuğrul Bayraktar, dağıtık sistemler ve olay-güdümlü mikroservisler üzerine uzmanlaşmış bir yazılım mühendisidir; hem Java/Quarkus hem de .NET ekosistemlerinde çalışır. Clean Architecture, DDD ve CQRS ile ölçeklenebilir backend mimarileri tasarlar; Kafka ve Apache Camel ile mesaj-güdümlü iş akışları kurar ve RAG tabanlı yapay zekâ copilot'ları gibi LLM destekli özellikler entegre eder. Ayrıca React ve TypeScript ile tam yığın çözümler geliştirir; Docker ile konteynerleştirme ve OpenTelemetry, Prometheus, Grafana, Loki ile uçtan uca gözlemlenebilirlik üzerinde çalışarak iş gereksinimlerini sağlam, üretim seviyesinde sistemlere dönüştürür.\n\nMühendisliğin dışında yaklaşık on bir yıl boyunca profesyonel lisanslı kickboks sporcusu olarak müsabakalara çıktı; altı yıldır finansal piyasalarda aktif olarak işlem yapıyor ve bir dönem piyasa analizleri yayımladı. Üniversite yıllarında kurduğu e-ticaret firmasıyla pazaryerlerinde satışlar gerçekleştirdi. Sporun getirdiği disiplin, piyasaların öğrettiği risk yönetimi ve girişimciliğin kazandırdığı sonuç odaklılık, yazılım geliştirme yaklaşımına da yansıyor.",
    en: "Ertuğrul Bayraktar is a software engineer specializing in distributed systems and event-driven microservices, working across both the Java/Quarkus and .NET ecosystems. He designs scalable backend architectures with Clean Architecture, DDD and CQRS; builds message-driven workflows with Kafka and Apache Camel; and integrates LLM-powered features such as RAG-based AI copilots. He also delivers full-stack solutions with React and TypeScript, and works with Docker and end-to-end observability via OpenTelemetry, Prometheus, Grafana and Loki — turning business requirements into robust, production-grade systems.\n\nBeyond engineering, he competed as a professional licensed kickboxing athlete for nearly eleven years, has been actively trading the financial markets for six years (publishing market analyses for a period), and founded an e-commerce business during his university years, selling across major marketplaces. The discipline of sport, the risk management taught by the markets, and the results-driven mindset of entrepreneurship all carry over into how he builds software.",
  } as LocalizedText,
  email: "ertugrulbayraktar.bau@gmail.com",
  location: { tr: "İstanbul, Türkiye", en: "Istanbul, Turkey" } as LocalizedText,
};

// ---- İletişim formu (Formspree) ----
// https://formspree.io endpoint'i. Form gerçek gönderim modunda çalışır.
export const formspreeEndpoint = "https://formspree.io/f/meewvkyb";

// ---- Sosyal linkler ----
export const socials = [
  { label: "GitHub", href: "https://github.com/ertugrulbayraktr" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ertugrulbayraktar0/",
  },
];

// ---- Tecrübe / Timeline ----
export interface TimelineItem {
  period: LocalizedText;
  role: LocalizedText;
  org: LocalizedText;
  description: LocalizedText;
  // Opsiyonel logo — public/logos/ içine dosyayı koyun (örn. "/logos/turkcell.svg").
  // Dosya yoksa otomatik olarak kurum baş harfleri gösterilir.
  logo?: string;
  // Logoyu rozet içinde yakınlaştırmak için ölçek (1 = normal). Kenar boşluğu fazla
  // olan logolar için 1.3–1.6 arası iyi sonuç verir.
  logoScale?: number;
  // Logoyu rozet içinde kaydırmak için ofset (% cinsinden). Pozitif X sağa, pozitif Y aşağı.
  // Sembol + yazı içeren logolarda yalnızca sembolü ortalamak için kullanılır.
  logoOffsetX?: number;
  logoOffsetY?: number;
}

export const timeline: TimelineItem[] = [
  {
    period: { tr: "Tem 2026 — Günümüz", en: "Jul 2026 — Present" },
    role: { tr: "Yazılım Mühendisi", en: "Software Engineer" },
    org: { tr: "Turkcell Global Bilgi", en: "Turkcell Global Bilgi" },
    logo: "/logos/turkcell.jpeg",
    logoScale: 3.8,
    logoOffsetY: 32,
    description: {
      tr: "Turkcell Global Bilgi'nin Technocamp programına seçildim; uygulamalı geliştirme ve modern mühendislik pratiklerine odaklanan yapılandırılmış bir yazılım mühendisliği programı.",
      en: "Selected for Turkcell Global Bilgi's Technocamp program — a structured software engineering track focused on hands-on development and modern engineering practices.",
    },
  },
  {
    period: { tr: "Nis 2026 — Haz 2026", en: "Apr 2026 — Jun 2026" },
    role: { tr: "Yazılım Mühendisi Stajyeri", en: "Software Engineer Intern" },
    org: { tr: "Avsos.ai", en: "Avsos.ai" },
    logo: "/logos/avsos.png",
    description: {
      tr: "Havacılık operasyonları yazılımı için Java/Quarkus mikroservisleri geliştirdim; Kafka ve Apache Camel ile olay-güdümlü mesajlaşma akışları, Keycloak (OIDC/OAuth2) ile kimlik doğrulama, PostgreSQL/MongoDB veri katmanı ve OpenTelemetry/Grafana ile gözlemlenebilirlik kurdum.",
      en: "Built Java/Quarkus microservices for aviation-operations software; implemented event-driven messaging with Kafka and Apache Camel, authentication with Keycloak (OIDC/OAuth2), a PostgreSQL/MongoDB data layer, and observability with OpenTelemetry/Grafana.",
    },
  },
  {
    period: { tr: "Ağu 2025 — Eki 2025", en: "Aug 2025 — Oct 2025" },
    role: { tr: "Yazılım Mühendisi Stajyeri", en: "Software Engineer Intern" },
    org: { tr: "SunExpress Airlines", en: "SunExpress Airlines" },
    logo: "/logos/sunexpress.png",
    logoScale: 3.4,
    logoOffsetX: 97,
    description: {
      tr: ".NET Web API ile Clean Architecture, DDD ve CQRS prensiplerini uygulayarak backend servisleri geliştirdim; EF Core ve SQL Server ile veri kalıcılığını yönettim, React ve TypeScript ile responsive arayüzler kurdum.",
      en: "Developed .NET Web API backend services applying Clean Architecture, DDD and CQRS; handled persistence with EF Core and SQL Server, and built responsive React/TypeScript interfaces.",
    },
  },
  {
    period: { tr: "Eyl 2023 — Kas 2024", en: "Sep 2023 — Nov 2024" },
    role: { tr: "Kurucu", en: "Founder" },
    org: { tr: "Llux", en: "Llux" },
    logo: "/logos/llux.png",
    logoScale: 1.5,
    description: {
      tr: "Küçük bir beyaz eşya e-ticaret işletmesi kurup yönettim; büyük pazaryerlerinde 8.8+ müşteri memnuniyeti puanına ulaştım.",
      en: "Founded and ran a small home-appliances e-commerce business, reaching an 8.8+ customer-satisfaction rating across major marketplaces.",
    },
  },
];

// ---- Tech Stack ----
export interface StackGroup {
  category: LocalizedText;
  items: string[];
}

export const stack: StackGroup[] = [
  {
    category: { tr: "Programlama", en: "Programming" },
    items: ["C#", "Java", "Python", "TypeScript", "SQL"],
  },
  {
    category: { tr: "Backend & Mimari", en: "Backend & Architecture" },
    items: [
      ".NET / ASP.NET Core Web API",
      "Quarkus",
      "EF Core",
      "Hibernate ORM",
      "REST APIs",
      "Microservices",
      "Event-Driven Architecture",
      "Clean Architecture",
      "DDD",
      "CQRS",
    ],
  },
  {
    category: { tr: "Frontend", en: "Frontend" },
    items: ["React", "TypeScript", "Tailwind CSS", "TanStack Query"],
  },
  {
    category: { tr: "Veri & Mesajlaşma", en: "Data & Messaging" },
    items: [
      "PostgreSQL",
      "MS SQL Server",
      "MongoDB",
      "Apache Kafka",
      "Apache Camel",
    ],
  },
  {
    category: { tr: "Güvenlik & DevOps", en: "Security & DevOps" },
    items: [
      "Keycloak",
      "OIDC/OAuth2",
      "JWT",
      "Docker",
      "Docker Compose",
      "GitHub Actions",
      "Git",
      "Maven",
    ],
  },
  {
    category: { tr: "Gözlemlenebilirlik & Test", en: "Observability & Testing" },
    items: [
      "OpenTelemetry",
      "Jaeger",
      "Prometheus",
      "Grafana",
      "Loki",
      "Serilog + Seq",
      "xUnit",
      "Vitest",
    ],
  },
];

// ---- Projeler ----
export interface Project {
  slug: string;
  title: LocalizedText;
  description: LocalizedText; // kart için kısa açıklama
  year: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  // Kapak görseli — public/projects/<slug>/cover.png koyup buraya yolu yazın.
  // Dosya yoksa kart metin olarak kalır (kırık imaj görünmez).
  cover?: string;
  // Detay sayfası içeriği
  overview: LocalizedText;
  problem: LocalizedText;
  solution: LocalizedText;
  highlights: LocalizedText[];
  // Ekran görüntüleri — public/projects/<slug>/ içine koyup buraya ekleyin.
  // Örn: { src: "/projects/aeroops/dashboard.png", caption: { tr: "Panel", en: "Dashboard" } }
  screenshots?: { src: string; caption?: LocalizedText }[];
}

export const projects: Project[] = [
  {
    slug: "aeroops",
    title: {
      tr: "AeroOps — Uçuş Operasyonları Mikroservis Platformu",
      en: "AeroOps — Flight Operations Microservice Platform",
    },
    description: {
      tr: "Uçuş bacağı verisini Kafka, Camel, MongoDB ve PostgreSQL hattıyla işleyen olay-güdümlü bir mikroservis platformu; tam denetim geçmişi ve uçtan uca gözlemlenebilirlik.",
      en: "An event-driven microservice platform processing flight-leg data through a Kafka, Camel, MongoDB and PostgreSQL pipeline, with full audit history and end-to-end observability.",
    },
    year: "2026",
    tags: [
      "Java",
      "Quarkus",
      "Apache Kafka",
      "Apache Camel",
      "PostgreSQL",
      "MongoDB",
      "Keycloak",
      "React",
    ],
    repoUrl:
      "https://github.com/ertugrulbayraktr/aeroops-microservices-platform",
    cover: "/projects/aeroops/dashboard.png",
    screenshots: [
      {
        src: "/projects/aeroops/flight-list.png",
        caption: { tr: "Uçuş listesi ve filtreleme", en: "Flight list & filtering" },
      },
      {
        src: "/projects/aeroops/history.png",
        caption: {
          tr: "Kafka mesajları — MongoDB staging katmanı",
          en: "Kafka messages — MongoDB staging layer",
        },
      },
      {
        src: "/projects/aeroops/jaeger.png",
        caption: {
          tr: "Dağıtık izleme (Jaeger trace)",
          en: "Distributed tracing (Jaeger)",
        },
      },
    ],
    overview: {
      tr: "AeroOps, havayolu uçuş bacağı verisini alımdan REST API'ye ve modern bir panele kadar yöneten üretim seviyesinde, olay-güdümlü bir mikroservis sistemidir. Staging katmanı, gateway kimlik doğrulaması ve kapsamlı gözlemlenebilirlik gibi dağıtık sistem desenlerini sergiler.",
      en: "AeroOps is a production-grade, event-driven microservice system that manages airline flight-leg data from ingestion through a REST API to a modern dashboard. It demonstrates distributed-systems patterns such as a staging layer, gateway authentication, and comprehensive observability.",
    },
    problem: {
      tr: "Dağıtık bir alım hattında veri kaybı yaşanmadan, yinelenen mesajlar engellenerek ve her adım izlenebilir kılınarak güvenilir uçuş verisi işlemek gerekiyordu.",
      en: "Flight data had to be processed reliably across a distributed ingestion pipeline — without data loss, while rejecting duplicate messages and keeping every step traceable.",
    },
    solution: {
      tr: "Her Kafka mesajı, işlenmeden önce MongoDB'de ham olarak saklanıp yaşam döngüsüyle (RECEIVED/PROCESSED/FAILED) izlendi. Apache Camel entegrasyon katmanı akışı PostgreSQL'e taşıdı; idempotent alım, yinelenen kayıtları 409 Conflict ile reddetti. Sistem Keycloak OIDC/OAuth2 gateway deseniyle güvence altına alındı.",
      en: "Every Kafka message is stored raw in MongoDB before processing and tracked through a lifecycle (RECEIVED/PROCESSED/FAILED). An Apache Camel integration layer moves the flow into PostgreSQL, while idempotent ingestion rejects duplicates with 409 Conflict. The system is secured with a Keycloak OIDC/OAuth2 gateway pattern.",
    },
    highlights: [
      {
        tr: "Staging katmanı: ham mesajlar işlenmeden önce saklanır ve durum takibi yapılır.",
        en: "Staging layer: raw messages captured and status-tracked before processing.",
      },
      {
        tr: "Hibernate Envers ile alan düzeyinde tam denetim geçmişi ve arayüzde zaman çizelgesi.",
        en: "Field-level audit history via Hibernate Envers, visualized as a timeline in the UI.",
      },
      {
        tr: "Grafana'da birleşik gözlemlenebilirlik: Jaeger (tracing), Prometheus (metrik), Loki (log).",
        en: "Unified observability in Grafana: Jaeger (tracing), Prometheus (metrics), Loki (logs).",
      },
      {
        tr: "React + TypeScript panel: canlı grafikler, CRUD, denetim diff görüntüleyici ve Kafka izleyici; Docker Compose ile 11 servis.",
        en: "React + TypeScript dashboard with live charts, CRUD, an audit-diff viewer and a Kafka monitor; 11 services containerized with Docker Compose.",
      },
    ],
  },
  {
    slug: "skydesk",
    title: {
      tr: "Skydesk — Yapay Zekâ Destekli Havayolu Destek Platformu",
      en: "Skydesk — AI-Assisted Airline Support Platform",
    },
    description: {
      tr: "Uçuş sonrası havayolu operasyonları için tam yığın destek-talebi platformu; Google Gemini destekli AI copilot, RAG tabanlı yanıt taslakları ve sağlam güvenlik katmanları.",
      en: "A full-stack support-ticketing platform for post-booking airline operations, with a Google Gemini AI copilot, RAG-based reply drafting, and robust security layers.",
    },
    year: "2026",
    tags: [
      "ASP.NET Core",
      "C#",
      "EF Core",
      "SQL Server",
      "Google Gemini",
      "React",
      "TypeScript",
    ],
    repoUrl: "https://github.com/ertugrulbayraktr/skydesk",
    cover: "/projects/skydesk/login.png",
    screenshots: [
      {
        src: "/projects/skydesk/ticket-detail.png",
        caption: {
          tr: "Temsilci görünümü — yapay zekâ yanıt asistanı",
          en: "Agent view — AI reply assistant",
        },
      },
      {
        src: "/projects/skydesk/passenger-portal.png",
        caption: { tr: "Yolcu portalı — talepler", en: "Passenger portal — requests" },
      },
      {
        src: "/projects/skydesk/audit-timeline.png",
        caption: {
          tr: "Talep geçmişi ve denetim izi",
          en: "Ticket history & audit trail",
        },
      },
    ],
    overview: {
      tr: "Skydesk, uçuş sonrası havayolu operasyonları (iptal, iade, bagaj) için üretim seviyesinde bir destek-talebi sistemidir. Yolcular PNR ile doğrulanır; destek temsilcileri, talepleri sınıflandırıp politika atıflı yanıtlar hazırlayan bir AI copilot eşliğinde SLA takipli bir kuyrukta çalışır.",
      en: "Skydesk is a production-grade support-ticketing system for post-booking airline operations (cancellations, refunds, baggage). Passengers verify via PNR; agents work an SLA-tracked queue assisted by an AI copilot that triages tickets and drafts policy-cited replies.",
    },
    problem: {
      tr: "Havayolu destek operasyonlarının; güvenli kimlik doğrulama, SLA takibi ve tutarlı, politikaya uygun yanıtlarla ölçeklenebilir biçimde yönetilmesi gerekiyordu.",
      en: "Airline support operations needed to scale with secure authentication, SLA tracking, and consistent, policy-compliant replies.",
    },
    solution: {
      tr: "Clean Architecture, DDD ve CQRS ile kurulan platform; Google Gemini ile otomatik talep sınıflandırma ve hibrit (anlamsal + anahtar kelime) RAG tabanlı yanıt taslağı üretir. Bir CI retrieval-eval paketi ve deterministik bir AI çıktı güvenlik katmanı kaliteyi güvence altına alır. AI işleme, transactional outbox deseniyle ayrıştırılmıştır.",
      en: "Built with Clean Architecture, DDD and CQRS, it uses Google Gemini for automatic ticket triage and hybrid (semantic + keyword) RAG-based reply drafting. A CI retrieval-eval suite and a deterministic AI output-safety layer guard quality. AI processing is decoupled via a transactional outbox pattern.",
    },
    highlights: [
      {
        tr: "Google Gemini AI copilot: politika atıflı yanıt taslakları, risk işaretleri ve sonraki adım önerileri.",
        en: "Google Gemini AI copilot: policy-cited reply drafts, risk flags, and next-action suggestions.",
      },
      {
        tr: "Hibrit RAG (0.7 anlamsal + 0.3 anahtar kelime) ve CI'da recall@5 ≥ %80 doğrulayan değerlendirme paketi.",
        en: "Hybrid RAG (0.7 semantic + 0.3 keyword) with an eval suite validating recall@5 ≥ 80% in CI.",
      },
      {
        tr: "Sağlam güvenlik: dönen refresh token'lar, PBKDF2-SHA256, rol tabanlı erişim, IDOR koruması, hesap kilitleme ve hız sınırlama.",
        en: "Robust security: rotating refresh tokens, PBKDF2-SHA256, role-based access, IDOR protection, account lockout and rate limiting.",
      },
      {
        tr: "İdempotent arka plan SLA motoru (otomatik yükseltme/kapatma) ve 73 otomatik test (xUnit + Vitest).",
        en: "Idempotent background SLA engine (auto-escalation/close) and 73 automated tests (xUnit + Vitest).",
      },
    ],
  },
  {
    slug: "skin-lesion-classification",
    title: {
      tr: "GAN Destekli Cilt Lezyonu Sınıflandırma",
      en: "Skin Lesion Classification with GAN Augmentation",
    },
    description: {
      tr: "Cilt lezyonlarını beş sınıfta ayıran derin öğrenme uygulaması; GAN tabanlı veri artırma ve geliştirilmiş SE-ResNet ile HAM10000 üzerinde %97.23 doğruluk.",
      en: "A deep-learning app classifying skin lesions into five classes, reaching 97.23% accuracy on HAM10000 with GAN-based augmentation and an enhanced SE-ResNet.",
    },
    year: "2025",
    tags: ["Python", "PyTorch", "FastAPI", "Deep Learning", "GAN", "React"],
    repoUrl:
      "https://github.com/ertugrulbayraktr/Enhancing-Skin-Lesion-Classification-with-GAN-Based-Augmentation-and-Deep-Learning",
    cover: "/projects/skin-lesion-classification/home.png",
    screenshots: [
      {
        src: "/projects/skin-lesion-classification/upload.png",
        caption: {
          tr: "Görsel yükleme ve örnek dermoskopi görüntüleri",
          en: "Image upload & example dermoscopy images",
        },
      },
      {
        src: "/projects/skin-lesion-classification/results.png",
        caption: {
          tr: "Ön işleme — kıl artefaktı temizleme",
          en: "Preprocessing — hair-artifact removal",
        },
      },
    ],
    overview: {
      tr: "Cilt lezyonlarını (melanom, benign nevüs, bazal hücreli karsinom, aktinik keratoz, benign keratoz) sınıflandıran tam yığın bir uygulama. HAM10000 veri kümesinde %97.23 doğruluk ve %95.39 makro F1 skoru elde edildi.",
      en: "A full-stack application classifying skin lesions (melanoma, benign nevi, basal cell carcinoma, actinic keratosis, benign keratosis). It achieves 97.23% accuracy and a 95.39% macro-F1 on the HAM10000 dataset.",
    },
    problem: {
      tr: "Tıbbi görüntü veri kümelerindeki sınıf dengesizliği ve kıl/artefakt gürültüsü, azınlık sınıflarda doğruluğu düşürüyordu.",
      en: "Class imbalance and hair/artifact noise in medical-image datasets degraded accuracy on minority classes.",
    },
    solution: {
      tr: "Sınıf dengesizliği için ACGAN (sınıfa koşullu) ve DCGAN ile sentetik veri üretildi; black-hat dönüşümü + inpainting ile kıl artefaktları temizlendi. Tüm ResNet katmanlarına SE blokları ve her blok sonrası residual bağlantılar eklenerek geliştirilmiş bir SE-ResNet kuruldu.",
      en: "ACGAN (class-conditional) and DCGAN generate synthetic data for imbalance, while a black-hat transform + inpainting removes hair artifacts. An enhanced SE-ResNet adds SE blocks across all ResNet layers with residual connections after each block.",
    },
    highlights: [
      {
        tr: "Doğruluk: temel ResNet50 %67 → DCGAN ile %91 → SE-ResNet + ACGAN ile %97.23.",
        en: "Accuracy: base ResNet50 67% → 91% with DCGAN → 97.23% with SE-ResNet + ACGAN.",
      },
      {
        tr: "ImageNet ön-eğitimli ResNet-50 tabanı, SE dikkat modülleri, 25.2M parametre.",
        en: "ImageNet-pretrained ResNet-50 base, SE attention modules, 25.2M parameters.",
      },
      {
        tr: "FastAPI + PyTorch backend; 3 saniyenin altında çıkarım.",
        en: "FastAPI + PyTorch backend; inference under 3 seconds.",
      },
      {
        tr: "React + Vite + Tailwind + Chart.js ile görselleştirme arayüzü.",
        en: "Visualization frontend with React, Vite, Tailwind and Chart.js.",
      },
    ],
  },
  {
    slug: "crt-terminal",
    title: {
      tr: "CRT Terminal — Alım-Satım & Yatırım Karar Destek Platformu",
      en: "CRT Terminal — Trading & Investing Decision-Support Platform",
    },
    description: {
      tr: "Kripto için CRT sinyal tarayıcısı, çok faktörlü hisse skor panosu ve manuel portföy takibini tek koyu, bilgi-yoğun arayüzde birleştiren, kendi kendine barındırılan bir karar destek platformu.",
      en: "A self-hosted decision-support platform combining a CRT crypto signal scanner, a multi-factor stock-scoring dashboard, and a manual portfolio tracker in one dark, information-dense interface.",
    },
    year: "2026",
    tags: [
      "FastAPI",
      "Python",
      "APScheduler",
      "SQLAlchemy",
      "SQLite",
      "ccxt",
      "yfinance",
      "React",
      "Vite",
    ],
    cover: "/projects/crt-terminal/dashboard.png",
    screenshots: [
      {
        src: "/projects/crt-terminal/signal-card.png",
        caption: { tr: "Alım-satım — sinyal kartları", en: "Trading — signal cards" },
      },
      {
        src: "/projects/crt-terminal/signal-detail.png",
        caption: {
          tr: "Sinyal detayı — canlı mum grafiği ve CRT seviyeleri",
          en: "Signal detail — live candles with CRT levels",
        },
      },
      {
        src: "/projects/crt-terminal/signal-terminal.png",
        caption: {
          tr: "Alım-satım — izlenen kurulumlar (sinyal terminali)",
          en: "Trading — watched setups (signal terminal)",
        },
      },
      {
        src: "/projects/crt-terminal/stock-detail.png",
        caption: {
          tr: "Hisse analizi — radar, gerekçe ve emsal karşılaştırma",
          en: "Per-stock analysis — radar, reasoning & peer comparison",
        },
      },
      {
        src: "/projects/crt-terminal/portfolio.png",
        caption: {
          tr: "Portföy takibi — canlı K/Z ve dağılım",
          en: "Portfolio tracker — live P/L & allocation",
        },
      },
    ],
    overview: {
      tr: "CRT Terminal, iki bağımsız karar destek sistemini tek koyu, bilgi-yoğun arayüzde birleştirir: kripto vadeli işlemler için Candle Range Theory (CRT) tabanlı otomatik bir sinyal tarayıcısı (Trading) ve NASDAQ + BIST için çok faktörlü bileşik skora dayalı bir hisse karar destek panosu (Investing). Üçüncü modül ise canlı kâr/zarar ile manuel bir portföy takipçisidir. Tüm veriler ücretsiz ve herkese açık kaynaklardan gelir; API anahtarı ya da aracı kurum bağlantısı yoktur.",
      en: "CRT Terminal combines two independent decision-support systems behind one dark, information-dense interface: an automated Candle Range Theory (CRT) signal scanner for crypto perpetual futures (Trading), and a multi-factor composite-score stock dashboard for NASDAQ + BIST (Investing). A third module is a manual portfolio tracker with live P/L. All data comes from free, public sources — no API keys, no brokerage connection.",
    },
    problem: {
      tr: "Disiplinli bir alım-satım ve yatırım süreci; mekanik kurallara sadık sinyaller, faktör bazlı şeffaf hisse değerlendirmesi ve bütünleşik bir portföy görünümü gerektirir — üstelik hiçbir zaman emir vermeden, yalnızca karar desteği sağlayarak.",
      en: "A disciplined trading and investing process needs rule-faithful signals, transparent factor-based stock evaluation, and a unified portfolio view — all while never placing an order, providing decision support only.",
    },
    solution: {
      tr: "Her (parite × zaman dilimi) için deterministik bir durum makinesi Haftalık/Günlük/H4 aralıklarını izleyerek kural-uyumlu CRT kurulumları (çift giriş, OTE limit, RR≥1 filtresi, death rule) üretir. Yatırım tarafında her hisse; kalite, değer, büyüme, sağlık, analist, düşük-volatilite, teknik ve temettü faktörlerinden oluşan, sektöre göre normalize edilmiş bir bileşik skorla sıralanır ve metrik-bazında gerekçelendirilir. Tek bir uzun-ömürlü FastAPI + APScheduler süreci tüm durumu SQLite'ta tutar (yeniden başlatmaya dayanıklı); React + Vite arayüzü REST API'yi canlı yoklar.",
      en: "A deterministic state machine per (pair × timeframe) watches Weekly/Daily/H4 ranges and produces rule-compliant CRT setups (dual entries, OTE limit, RR≥1 filtering, death rule). On the investing side, each stock is ranked by a sector-normalized composite score across quality, value, growth, health, analyst, low-volatility, technical and dividend factors, with a per-metric breakdown. A single long-running FastAPI + APScheduler process holds all state in SQLite (restart-safe); a React + Vite frontend polls the REST API.",
    },
    highlights: [
      {
        tr: "Mekanik CRT motoru: dört doğrulama tipi (MSB/IFVG/Breaker/Reclaim), OTE limit girişleri, RR≥1 filtresi, Super CRT tespiti ve haftalık bias.",
        en: "Mechanical CRT engine: four confirmation types (MSB/IFVG/Breaker/Reclaim), OTE limit entries, RR≥1 filtering, Super CRT detection and weekly bias.",
      },
      {
        tr: "Profesyonel faktör modeli: sektöre göre yüzdelik sıralama, 12-1 momentum, düşük-volatilite eğilimi ve BIST enflasyon muhasebesi (TMS 29) işleme.",
        en: "Professional factor model: cross-sectional percentile ranking, 12-1 momentum, low-volatility tilt, and BIST inflation-accounting (TMS 29) handling.",
      },
      {
        tr: "Yalnızca ücretsiz, herkese açık veri: kripto için ccxt (Binance USDT-M), hisse için yfinance (~187 NASDAQ + ~49 BIST).",
        en: "Free, public data only: ccxt (Binance USDT-M) for crypto, yfinance (~187 NASDAQ + ~49 BIST) for stocks.",
      },
      {
        tr: "Yeniden başlatmaya dayanıklı tek süreç (FastAPI + APScheduler, SQLite), opsiyonel Telegram bildirimleri ve 108 geçen test.",
        en: "Restart-safe single process (FastAPI + APScheduler, SQLite), optional Telegram notifications, and 108 passing tests.",
      },
      {
        tr: "Sorumlu tasarım: salt-okunur veri, emir verilmez, aracı kurum bağlantısı yoktur; sistem 'al/sat' demez, yalnızca gerekçeli durum gösterir. Yatırım tavsiyesi değildir.",
        en: "Responsible by design: read-only data, never places orders, no brokerage link; the system never says 'buy/sell', only shows reasoned status. Not financial advice.",
      },
    ],
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);

// ---- Eğitim ----
export interface Education {
  period: LocalizedText;
  degree: LocalizedText;
  school: LocalizedText;
}

export const education: Education[] = [
  {
    period: { tr: "2021 — 2026", en: "2021 — 2026" },
    degree: {
      tr: "Yazılım Mühendisliği, Lisans (B.Sc.)",
      en: "B.Sc. in Software Engineering",
    },
    school: {
      tr: "Bahçeşehir Üniversitesi, İstanbul",
      en: "Bahçeşehir University, Istanbul",
    },
  },
];

// ---- Sertifikalar (About içinde) ----
export interface Certification {
  name: LocalizedText;
  issuer: LocalizedText;
  year: string;
}

export const certifications: Certification[] = [
  {
    name: {
      tr: "Starting with Quarkus",
      en: "Starting with Quarkus",
    },
    issuer: { tr: "Udemy", en: "Udemy" },
    year: "2026",
  },
  {
    name: { tr: "Claude Code 101", en: "Claude Code 101" },
    issuer: { tr: "Anthropic", en: "Anthropic" },
    year: "2026",
  },
  {
    name: { tr: "Claude 101", en: "Claude 101" },
    issuer: { tr: "Anthropic", en: "Anthropic" },
    year: "2026",
  },
  {
    name: {
      tr: "CS50's Web Programming with Python and JavaScript",
      en: "CS50's Web Programming with Python and JavaScript",
    },
    issuer: {
      tr: "Harvard University (HarvardX)",
      en: "Harvard University (HarvardX)",
    },
    year: "2025",
  },
  {
    name: {
      tr: "Introduction to Programming with Java",
      en: "Introduction to Programming with Java",
    },
    issuer: { tr: "BTK Akademi", en: "BTK Akademi" },
    year: "2025",
  },
  {
    name: { tr: "Java (Basic) Certificate", en: "Java (Basic) Certificate" },
    issuer: { tr: "HackerRank", en: "HackerRank" },
    year: "2025",
  },
  {
    name: {
      tr: "Introduction to User Experience Design",
      en: "Introduction to User Experience Design",
    },
    issuer: {
      tr: "Georgia Institute of Technology",
      en: "Georgia Institute of Technology",
    },
    year: "2024",
  },
  {
    name: {
      tr: "Introduction to UX Principles and Processes",
      en: "Introduction to UX Principles and Processes",
    },
    issuer: { tr: "University of Michigan", en: "University of Michigan" },
    year: "2024",
  },
  {
    name: {
      tr: "Foundations of Project Management",
      en: "Foundations of Project Management",
    },
    issuer: { tr: "Google", en: "Google" },
    year: "2024",
  },
  {
    name: {
      tr: "KOSGEB Girişimcilik Eğitimi",
      en: "KOSGEB Entrepreneurship Training",
    },
    issuer: { tr: "KOSGEB", en: "KOSGEB" },
    year: "2023",
  },
];
