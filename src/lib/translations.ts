export type Locale = "en" | "ru";

export const translations = {
  en: {
    navbar: {
      home: "Home",
      features: "Features",
      contact: "Contact",
      privacy: "Privacy",
      terms: "Terms",
      getStarted: "Get Started",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
    },
    hero: {
      badge: "3 days free trial",
      heading: "Internet freedom for Russia",
      subheading:
        "OrbitSafe — works in Russia. Connect via Telegram bot in 1 minute.",
      description:
        "Encrypt your connection, access any website, and browse without limits. Works on any device.",
      cta: "Open bot in Telegram",
    },
    home: {
      benefits: {
        badge: "Why choose us",
        heading: "Why choose OrbitSafe?",
        subheading:
          "Built for simplicity and trust. Here's what you get with every connection.",
        items: [
          {
            title: "Secure connection",
            description:
              "ChaCha20-Poly1305 encryption keeps your data safe on any network — public Wi‑Fi, cellular, or home. Fast, modern, and reliable.",
          },
          {
            title: "Key server locations",
            description:
              "Connect to servers in Frankfurt, Amsterdam, and New York for low latency across Europe and the US. Optimized for smooth streaming and browsing.",
          },
          {
            title: "Privacy protection",
            description:
              "Your IP address and online activity stay private. We don't sell or share your data with third parties.",
          },
          {
            title: "No logging policy",
            description:
              "We don't keep logs of what you do online. Your browsing history remains yours alone.",
          },
        ],
      },
      howItWorks: {
        badge: "Simple steps",
        heading: "How it works",
        subheading:
          "Three simple steps to unrestricted internet.",
        steps: [
          {
            title: "Open the bot",
            text: "Go to Telegram and open @safeOrbitVpnBot.",
          },
          {
            title: "Get access",
            text: "The bot will send you a configuration to connect. First 3 days are free.",
          },
          {
            title: "Connect",
            text: "Import the config into WireGuard and browse without limits.",
          },
        ],
      },
      security: {
        badge: "Security",
        heading: "Security you can trust",
        body: "OrbitSafe uses industry-standard protocols and encryption. Your traffic is encrypted end-to-end through our secure servers, so ISPs, advertisers, and bad actors can't see what you're doing online. We're committed to transparency: our privacy policy and practices are clear and easy to understand.",
      },
      faq: {
        badge: "Support",
        heading: "Frequently asked questions",
        subheading:
          "Quick answers to common questions about OrbitSafe.",
        items: [
          {
            question: "Does the service work in Russia?",
            answer:
              "Yes. OrbitSafe is specifically configured to provide access to any website in Russia and works reliably with Russian ISPs.",
          },
          {
            question: "How do I get started?",
            answer:
              "Open @safeOrbitVpnBot in Telegram and follow the bot's instructions — it will send you a configuration.",
            answerLinkText: "See the step-by-step guide",
            answerSuffix: "if you need help.",
          },
          {
            question: "What does the free trial include?",
            answer:
              "The first 3 days are completely free — full access to all servers with no restrictions.",
          },
          {
            question: "Do you keep logs of my activity?",
            answer:
              "No. We follow a strict no-logging policy. We don't store your browsing history, connection timestamps tied to your identity, or any data that could be used to identify what you do online.",
          },
        ],
      },
    },
    footer: {
      tagline:
        "Private access via Telegram bot. Works in Russia. 3 days free.",
      product: "Product",
      legal: "Legal",
      company: "Company",
      links: {
        features: "Features",
        howItWorks: "How it works",
        faq: "FAQ",
        privacyPolicy: "Privacy Policy",
        termsOfService: "Terms of Service",
        contact: "Contact",
      },
      copyright: "All rights reserved.",
    },
    features: {
      badge: "Features",
      heading: "Built for security and simplicity",
      subheading:
        "Every feature is designed to keep you private and in control — without getting in your way.",
      items: [
        {
          title: "Secure connection",
          description:
            "Every connection is protected with ChaCha20-Poly1305 encryption — a modern cipher optimized for speed. Your data stays private on public Wi‑Fi, at home, or on cellular.",
        },
        {
          title: "Key server locations",
          description:
            "Choose from servers in Frankfurt, Amsterdam, and New York. We optimize each location for speed and stability so you can stream, browse, and work without slowdowns.",
        },
        {
          title: "Privacy protection",
          description:
            "We hide your real IP address and help prevent tracking by advertisers and data brokers. Your identity and location stay private while you browse.",
        },
        {
          title: "No logging policy",
          description:
            "We don't store logs of your browsing history, DNS queries, or traffic. Our no-logging policy is at the core of what we build — your activity is your business only.",
        },
        {
          title: "Simple connection via bot",
          description:
            "No complicated setup. Get your config through the Telegram bot, import it into WireGuard — and you're protected. Perfect for everyday users who want security without the hassle.",
        },
      ],
    },
    contact: {
      badge: "Get in touch",
      heading: "Get in touch",
      subheading:
        "Have a question, feedback, or want to partner with us? We'd love to hear from you.",
      sendMessage: "Send us a message",
      general: "General:",
      support: "Support:",
      privacyLegal: "Privacy & legal:",
      companyLabel: "Company",
      companyTagline:
        "Private internet access via Telegram bot. Works in Russia.",
    },
    getStarted: {
      badge: "Getting started",
      heading: "How to connect",
      subheading:
        "Three simple steps to unrestricted internet. Takes less than a minute.",
      step1: {
        title: "Open the Telegram bot",
        description:
          "Click the button below to open @safeOrbitVpnBot in Telegram and get started.",
        cta: "Open the bot",
      },
      step2: {
        title: "Get your configuration",
        description:
          "Follow the bot's instructions. It will send you a configuration file. The first 3 days are free, with no restrictions.",
        cta: "Open the bot",
      },
      step3: {
        title: "Connect",
        description:
          "Import the configuration into WireGuard or another client and enjoy unrestricted internet.",
      },
    },
  },

  ru: {
    navbar: {
      home: "Главная",
      features: "Функции",
      contact: "Контакты",
      privacy: "Конфиденциальность",
      terms: "Условия",
      getStarted: "Начать",
      privacyPolicy: "Политика конфиденциальности",
      termsOfService: "Условия использования",
    },
    hero: {
      badge: "3 дня бесплатно",
      heading: "Свобода в интернете для России",
      subheading:
        "OrbitSafe — работает в России. Подключайтесь через Telegram-бота за 1 минуту.",
      description:
        "Шифруйте трафик, открывайте любые сайты и пользуйтесь интернетом без ограничений. Работает на любом устройстве.",
      cta: "Открыть бота в Telegram",
    },
    home: {
      benefits: {
        badge: "Почему мы",
        heading: "Почему стоит выбрать OrbitSafe?",
        subheading:
          "Создан для простоты и надёжности. Вот что вы получаете с каждым подключением.",
        items: [
          {
            title: "Защищённое соединение",
            description:
              "Шифрование ChaCha20-Poly1305 защищает ваши данные в любой сети — публичный Wi‑Fi, мобильная или домашняя. Быстро, современно, надёжно.",
          },
          {
            title: "Ключевые серверные локации",
            description:
              "Подключайтесь к серверам во Франкфурте, Амстердаме и Нью-Йорке для низкой задержки в Европе и США. Оптимизировано для стриминга и браузинга.",
          },
          {
            title: "Защита приватности",
            description:
              "Ваш IP-адрес и онлайн-активность остаются в тайне. Мы не продаём и не передаём ваши данные третьим лицам.",
          },
          {
            title: "Политика без логов",
            description:
              "Мы не ведём логи вашей онлайн-активности. Ваша история браузера принадлежит только вам.",
          },
        ],
      },
      howItWorks: {
        badge: "Просто",
        heading: "Как это работает",
        subheading:
          "Три простых шага — и вы в сети без ограничений.",
        steps: [
          {
            title: "Открыть бота",
            text: "Перейдите в Telegram и откройте @safeOrbitVpnBot.",
          },
          {
            title: "Получить доступ",
            text: "Бот выдаст конфигурацию для подключения. Первые 3 дня — бесплатно.",
          },
          {
            title: "Подключиться",
            text: "Импортируйте конфиг в WireGuard и пользуйтесь интернетом без ограничений.",
          },
        ],
      },
      security: {
        badge: "Безопасность",
        heading: "Безопасность, которой можно доверять",
        body: "OrbitSafe использует стандартные отраслевые протоколы и шифрование. Ваш трафик шифруется от конца до конца через наши защищённые серверы, поэтому провайдеры, рекламодатели и злоумышленники не видят, что вы делаете в сети. Мы придерживаемся принципа прозрачности: наша политика конфиденциальности и практики понятны и просты для восприятия.",
      },
      faq: {
        badge: "Поддержка",
        heading: "Часто задаваемые вопросы",
        subheading:
          "Быстрые ответы на распространённые вопросы об OrbitSafe.",
        items: [
          {
            question: "Работает ли сервис в России?",
            answer:
              "Да. OrbitSafe специально настроен для свободного доступа к любым сайтам в России и стабильно работает с российскими провайдерами.",
          },
          {
            question: "Как начать пользоваться?",
            answer:
              "Откройте @safeOrbitVpnBot в Telegram и следуйте инструкциям бота — он выдаст вам конфигурацию.",
            answerLinkText: "Посмотрите пошаговую инструкцию",
            answerSuffix:
              "если нужна дополнительная помощь.",
          },
          {
            question: "Что включает пробный период?",
            answer:
              "Первые 3 дня — полностью бесплатно и без ограничений. Полный доступ ко всем серверам.",
          },
          {
            question: "Вы ведёте логи моей активности?",
            answer:
              "Нет. Мы придерживаемся строгой политики без логов. Мы не храним историю браузера, временные метки подключений, связанные с вашей личностью, или данные, по которым можно идентифицировать ваши действия в сети.",
          },
        ],
      },
    },
    footer: {
      tagline:
        "Приватный доступ через Telegram-бота. Работает в России. 3 дня бесплатно.",
      product: "Продукт",
      legal: "Правовая информация",
      company: "Компания",
      links: {
        features: "Функции",
        howItWorks: "Как это работает",
        faq: "FAQ",
        privacyPolicy: "Политика конфиденциальности",
        termsOfService: "Условия использования",
        contact: "Контакты",
      },
      copyright: "Все права защищены.",
    },
    features: {
      badge: "Функции",
      heading: "Создан для безопасности и простоты",
      subheading:
        "Каждая функция создана, чтобы сохранить вашу приватность и контроль — ненавязчиво.",
      items: [
        {
          title: "Защищённое соединение",
          description:
            "Каждое соединение защищено шифрованием ChaCha20-Poly1305 — современным шифром, оптимизированным для скорости. Ваши данные в безопасности в Wi‑Fi, дома или в мобильной сети.",
        },
        {
          title: "Ключевые серверные локации",
          description:
            "Выбирайте серверы во Франкфурте, Амстердаме и Нью-Йорке. Каждая локация оптимизирована для скорости и стабильности, чтобы вы могли стримить, просматривать и работать без задержек.",
        },
        {
          title: "Защита приватности",
          description:
            "Мы скрываем ваш реальный IP-адрес и помогаем предотвратить отслеживание рекламодателями и брокерами данных. Ваша личность и местоположение остаются приватными.",
        },
        {
          title: "Политика без логов",
          description:
            "Мы не храним логи истории браузера, DNS-запросов или трафика. Политика без логов — основа нашей работы: ваши действия — только ваше дело.",
        },
        {
          title: "Простое подключение",
          description:
            "Никакой сложной настройки. Получите конфигурацию через Telegram-бота, импортируйте в WireGuard — и вы под защитой. Идеально для тех, кто хочет безопасности без лишних сложностей.",
        },
      ],
    },
    contact: {
      badge: "Связаться с нами",
      heading: "Связаться с нами",
      subheading:
        "Есть вопрос, отзыв или хотите сотрудничать? Мы будем рады услышать вас.",
      sendMessage: "Напишите нам",
      general: "Общие вопросы:",
      support: "Поддержка:",
      privacyLegal: "Конфиденциальность и правовые вопросы:",
      companyLabel: "Компания",
      companyTagline:
        "Приватный доступ в интернет через Telegram-бота. Работает в России.",
    },
    getStarted: {
      badge: "Начало работы",
      heading: "Как подключиться",
      subheading:
        "Три простых шага — и вы в сети без ограничений. Займёт меньше минуты.",
      step1: {
        title: "Открыть Telegram-бота",
        description:
          "Нажмите кнопку ниже, чтобы открыть @safeOrbitVpnBot в Telegram и начать.",
        cta: "Открыть бота",
      },
      step2: {
        title: "Получить конфигурацию",
        description:
          "Следуйте инструкциям бота. Он выдаст вам файл конфигурации. Первые 3 дня — бесплатно, без ограничений.",
        cta: "Открыть бота",
      },
      step3: {
        title: "Подключиться",
        description:
          "Импортируйте конфигурацию в WireGuard или другой клиент и пользуйтесь интернетом без ограничений.",
      },
    },
  },
} as const;

export type Translations = typeof translations[Locale];
