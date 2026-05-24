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
      badge: "Now in closed testing on Android",
      heading: "Privacy that travels with you",
      subheading:
        "OrbitSafe VPN — secure, fast, and simple. One tap to a safer internet on your Android device.",
      description:
        "Encrypt your connection, hide your location, and browse without being tracked. Built for Android with a focus on speed and ease of use.",
      cta: "Join Closed Testing on Google Play",
    },
    home: {
      benefits: {
        badge: "Why choose us",
        heading: "Why choose OrbitSafe VPN?",
        subheading:
          "Built for simplicity and trust. Here's what you get with every connection.",
        items: [
          {
            title: "Secure VPN connection",
            description:
              "ChaCha20-Poly1305 encryption keeps your data safe on any network—public Wi‑Fi, cellular, or home. Fast, modern, and built for mobile.",
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
          "Three simple steps to a safer internet on your Android device.",
        steps: [
          {
            title: "Download",
            text: "Join the closed testing program on Google Play.",
          },
          {
            title: "Connect",
            text: "Open the app and tap one button to secure your connection.",
          },
          {
            title: "Browse",
            text: "Use the internet with confidence on any network.",
          },
        ],
      },
      security: {
        badge: "Security",
        heading: "Security you can trust",
        body: "OrbitSafe VPN uses industry-standard protocols and encryption. Your traffic is encrypted end-to-end through our secure servers, so ISPs, advertisers, and bad actors can't see what you're doing online. We're committed to transparency: our privacy policy and practices are clear and easy to understand.",
      },
      faq: {
        badge: "Support",
        heading: "Frequently asked questions",
        subheading:
          "Quick answers to common questions about OrbitSafe VPN.",
        items: [
          {
            question: "What is OrbitSafe VPN?",
            answer:
              "OrbitSafe VPN is an Android app that creates a secure, encrypted tunnel between your device and the internet. It hides your IP address and protects your data on public and private networks.",
          },
          {
            question: "How can I try OrbitSafe VPN?",
            answer:
              "OrbitSafe VPN is currently in closed testing on Google Play.",
            answerLinkText: "Follow our step-by-step guide",
            answerSuffix:
              "to join the testing program and get early access before the public launch.",
          },
          {
            question: "Do you keep logs of my activity?",
            answer:
              "No. We follow a strict no-logging policy. We don't store your browsing history, connection timestamps tied to your identity, or any data that could be used to identify what you do online.",
          },
          {
            question: "Is OrbitSafe VPN only for Android?",
            answer:
              "Our first release is for Android. We're focused on delivering a great experience on Android devices. Other platforms may be considered in the future.",
          },
        ],
      },
    },
    footer: {
      tagline:
        "Secure, private internet for Android. Now in closed testing on Google Play.",
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
        "Every feature is designed to keep you private and in control—without getting in your way.",
      items: [
        {
          title: "Secure VPN connection",
          description:
            "Every connection is protected with ChaCha20-Poly1305 encryption—a modern cipher optimized for speed on mobile hardware. Your data stays private on public Wi‑Fi, at home, or on cellular.",
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
            "We don't store logs of your browsing history, DNS queries, or traffic. Our no-logging policy is at the core of what we build—your activity is your business only.",
        },
        {
          title: "Easy one-tap connect",
          description:
            "No complicated setup. Open the app, tap connect, and you're protected. Perfect for everyday users who want security without the hassle.",
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
        "Secure, private internet for Android. Now in closed testing on Google Play.",
    },
    getStarted: {
      badge: "Early Access",
      heading: "How to become a tester",
      subheading:
        "Get early access to OrbitSafe VPN in three simple steps. It takes less than two minutes.",
      step1: {
        title: "Join the testers group",
        description:
          "Click the button below to open our Google Group page, then click Join (see the screenshot below). This will automatically add you to the approved testers list.",
        cta: "Join the testers group",
      },
      step2: {
        title: "Install OrbitSafe VPN",
        description:
          "Open the Play Store page and tap \"Install\". If the page is found, wait a few minutes for access to activate and try again.",
        cta: "Open on Google Play",
      },
      step3: {
        title: "Open OrbitSafe VPN",
        description:
          "Open OrbitSafe VPN on your Android and try our VPN.",
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
      badge: "Сейчас в закрытом тестировании на Android",
      heading: "Приватность, которая всегда с тобой",
      subheading:
        "OrbitSafe VPN — безопасный, быстрый и простой. Одно нажатие — и ваш Android под защитой.",
      description:
        "Шифруйте соединение, скрывайте местоположение и работайте в сети без слежки. Создан для Android с упором на скорость и удобство.",
      cta: "Присоединиться к тестированию в Google Play",
    },
    home: {
      benefits: {
        badge: "Почему мы",
        heading: "Почему стоит выбрать OrbitSafe VPN?",
        subheading:
          "Создан для простоты и надёжности. Вот что вы получаете с каждым подключением.",
        items: [
          {
            title: "Защищённое VPN-соединение",
            description:
              "Шифрование ChaCha20-Poly1305 защищает ваши данные в любой сети — публичный Wi‑Fi, мобильная или домашняя. Быстро, современно, создано для мобильных.",
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
          "Три простых шага к более безопасному интернету на вашем Android.",
        steps: [
          {
            title: "Скачать",
            text: "Присоединяйтесь к программе закрытого тестирования на Google Play.",
          },
          {
            title: "Подключиться",
            text: "Откройте приложение и нажмите одну кнопку, чтобы защитить соединение.",
          },
          {
            title: "Пользоваться",
            text: "Работайте в интернете уверенно в любой сети.",
          },
        ],
      },
      security: {
        badge: "Безопасность",
        heading: "Безопасность, которой можно доверять",
        body: "OrbitSafe VPN использует стандартные отраслевые протоколы и шифрование. Ваш трафик шифруется от конца до конца через наши защищённые серверы, поэтому провайдеры, рекламодатели и злоумышленники не видят, что вы делаете в сети. Мы придерживаемся принципа прозрачности: наша политика конфиденциальности и практики понятны и просты для восприятия.",
      },
      faq: {
        badge: "Поддержка",
        heading: "Часто задаваемые вопросы",
        subheading:
          "Быстрые ответы на распространённые вопросы об OrbitSafe VPN.",
        items: [
          {
            question: "Что такое OrbitSafe VPN?",
            answer:
              "OrbitSafe VPN — это приложение для Android, которое создаёт зашифрованный туннель между вашим устройством и интернетом. Оно скрывает ваш IP-адрес и защищает данные в публичных и частных сетях.",
          },
          {
            question: "Как попробовать OrbitSafe VPN?",
            answer:
              "OrbitSafe VPN сейчас находится в закрытом тестировании на Google Play.",
            answerLinkText: "Следуйте нашей пошаговой инструкции,",
            answerSuffix:
              "чтобы вступить в программу тестирования и получить ранний доступ.",
          },
          {
            question: "Вы ведёте логи моей активности?",
            answer:
              "Нет. Мы придерживаемся строгой политики без логов. Мы не храним историю браузера, временные метки подключений, связанные с вашей личностью, или данные, по которым можно идентифицировать ваши действия в сети.",
          },
          {
            question: "OrbitSafe VPN только для Android?",
            answer:
              "Первый релиз предназначен для Android. Мы сосредоточены на обеспечении отличного пользовательского опыта на Android-устройствах. Другие платформы могут быть рассмотрены в будущем.",
          },
        ],
      },
    },
    footer: {
      tagline:
        "Безопасный, приватный интернет для Android. Сейчас в закрытом тестировании на Google Play.",
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
          title: "Защищённое VPN-соединение",
          description:
            "Каждое соединение защищено шифрованием ChaCha20-Poly1305 — современным шифром, оптимизированным для скорости на мобильных устройствах. Ваши данные в безопасности в Wi‑Fi, дома или в мобильной сети.",
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
          title: "Подключение одним нажатием",
          description:
            "Никакой сложной настройки. Откройте приложение, нажмите «Подключить» — и вы под защитой. Идеально для тех, кто хочет безопасности без лишних сложностей.",
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
        "Безопасный, приватный интернет для Android. Сейчас в закрытом тестировании на Google Play.",
    },
    getStarted: {
      badge: "Ранний доступ",
      heading: "Как стать тестировщиком",
      subheading:
        "Получите ранний доступ к OrbitSafe VPN за три простых шага. Это займёт меньше двух минут.",
      step1: {
        title: "Вступить в группу тестировщиков",
        description:
          "Нажмите кнопку ниже, чтобы вступить в нашу Google Group, на открывшейся странице нажмите на присоединиться (смотрите скриншот внизу). Это автоматически добавит вас в список одобренных тестировщиков.",
        cta: "Вступить в группу",
      },
      step2: {
        title: "Установить OrbitSafe VPN",
        description:
          "Откройте страницу в Play Store и нажмите «Установить». Если страница найдена, то подождите несколько минут, пока появится доступ и попробуйте снова.",
        cta: "Открыть в Google Play",
      },
      step3: {
        title: "Открыть OrbitSafe VPN",
        description:
          "Откройте OrbitSafe VPN на вашем Android и попробуйте наш VPN.",
      },
    },
  },
} as const;

export type Translations = typeof translations[Locale];
