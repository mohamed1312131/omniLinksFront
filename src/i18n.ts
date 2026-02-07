import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const STORAGE_KEY = 'omnilinks_language';

const resources = {
  en: {
    translation: {
      hero: {
        titleLine1: 'Building Digital',
        titleLine2: 'Products That Last',
        description:
          'We design and build digital products by connecting strategy, design, and technology into scalable, long-term solutions. From concept to launch, we help businesses and founders transform ideas into performant digital products — not just good-looking ones.',
        explore: 'Explore What We Do',
        startConversation: 'Start a Conversation',
      },
      values: {
        heading: 'Our Core Values',
        subheading: 'The principles that guide every partnership and venture we build',
        items: {
          responsibility: {
            title: 'Responsibility',
            description:
              'We take full responsibility for our actions, decisions, and deliveries. We stand by our commitments and ensure that we always deliver what we promise. Responsibility also means shared ownership of the company’s success and a strong focus on delivering the best possible solutions for our clients.',
          },
          integrity: {
            title: 'Integrity',
            description:
              'Transparency and honesty are the foundation of trust. We communicate openly and directly, both within the organization and with our clients. We believe in honest advice, clear feedback, and a work environment built on mutual trust and accountability.',
          },
          respect: {
            title: 'Respect',
            description:
              'We respect each other, our clients, and the work we do. We treat everyone with dignity and actively listen to different perspectives. Respect also means valuing people’s time, honoring our promises, and acknowledging the efforts of others.',
          },
          commitment: {
            title: 'Commitment',
            description:
              'We are passionate about what we do and always strive to go the extra mile. Our commitment drives us to find the best solutions for our clients and to support each other as a team. We take initiative, work proactively, and ensure that Omni Linx is a reliable partner that consistently delivers quality.',
          },
        },
      },
      sections: {
        platforms: {
          heading: 'Our Core Capabilities',
          subheading: 'We create modern, secure, and scalable digital solutions built for growth',
          items: {
            digitalPlatforms: {
              title: 'Digital Platforms & Ecosystems',
              description:
                'We build connected digital platforms designed for automation, scalability, and long-term value — not isolated tools.',
            },
            aiAutomation: {
              title: 'AI & Automation',
              description: 'We integrate intelligent automation and AI to optimize workflows, decision-making, and user experiences.',
            },
            telecom: {
              title: 'Communication & Telecom Solutions',
              description: 'We design modern communication infrastructures that enable secure, seamless, and global connectivity.',
            },
            strategy: {
              title: 'Strategy, Growth & Advisory',
              description:
                'We help founders and organizations turn ideas into structured, scalable, and investable ventures through strategic guidance, growth planning, and long-term advisory.',
            },
          },
        },
        howWeWork: {
          heading: 'How We Work',
          steps: {
            discover: {
              title: 'Discover',
              description: 'Understanding vision, challenges, and long-term goals.',
            },
            design: {
              title: 'Design',
              description: 'Structuring platforms, systems, and user experiences.',
            },
            build: {
              title: 'Build',
              description: 'Developing, integrating, and testing reliable solutions.',
            },
            scale: {
              title: 'Scale',
              description: 'Optimizing, automating, and expanding for sustainable growth.',
            },
          },
        },
        supportingServices: {
          heading: 'Supporting Services',
          description:
            'In addition to our core digital offerings, we provide essential technical services that ensure stable and efficient day-to-day operations.',
          items: {
            connectivity: 'Connectivity & IT setup',
            office: 'Office & business infrastructure',
            printing: 'Printing & hardware solutions',
            support: 'Ongoing technical support',
          },
        },
        about: {
          heading: 'About Omni Links',
          subheading: 'We build digital ventures by connecting technology, people, and long-term thinking',
          cards: {
            story: {
              title: 'Our Story',
              description:
                'Omni Links was founded on a simple belief: technology should simplify life — not complicate it. We help organizations move away from fragmented systems and short-term solutions by building connected digital ecosystems designed for clarity, scalability, and real impact.',
            },
            vision: {
              title: 'Our Vision',
              description:
                'Our vision is to build and support digital ventures that create real value across borders, industries, and generations — shaping a more efficient and human-centered digital future.',
            },
            mission: {
              title: 'Our Mission',
              description:
                'We build digital ventures by connecting technology, people, and long-term thinking — where innovation is driven by purpose, not short-term gains. This is what we call Tech with Soul.',
            },
          },
          projectsHeading: 'Our Current Projects',
          projects: {
            omniMarket: 'A cutting-edge digital marketplace platform connecting buyers and sellers in a seamless ecosystem',
            omniCare: 'Comprehensive healthcare platform delivering personalized care and wellness solutions',
            omniSchool: 'Modern education platform transforming learning through innovative digital solutions',
          },
        },
        techWithSoul: {
          heading: 'Tech with Soul',
          description:
            "At Omni Links, technology is not just about code or systems — it's about people.\n\nWe combine technical expertise with human insight to create ethical, sustainable, and long-lasting digital solutions.",
        },
      },
      pages: {
        whatWeDo: {
          title: 'What We Do',
          subtitle: 'We create modern, secure, and scalable digital solutions built for growth',
          ctaTitle: 'Ready to build something meaningful?',
          ctaText: 'Start a conversation with Omni Links.',
          ctaButton: 'Get Started',
        },
        about: {
          title: 'About Us',
          ctaTitle: "Let's build something meaningful — together",
          ctaText: 'Start a conversation with Omni Links.',
          ctaButton: 'Get Started',
        },
        partners: {
          title: 'Partners',
          heading: 'Building Strategic Partnerships',
          text:
            "We collaborate with forward-thinking organizations to create innovative digital solutions. If you're interested in partnering with Omni Links, we'd love to hear from you.",
          button: 'Get in Touch',
        },
        contact: {
          title: "Let's Start a Conversation",
          subtitle: 'Ready to build something meaningful together? Get in touch with Omni Links.',
          emailUs: 'Email Us',
          address: 'Address',
          callUs: 'Call Us',
          formTitle: 'Send Us a Message',
          name: 'Name',
          email: 'Email',
          message: 'Message',
          namePlaceholder: 'Your name',
          emailPlaceholder: 'your@email.com',
          messagePlaceholder: 'Tell us about your project...',
          send: 'Send Message',
          sending: 'Sending...',
          captchaRequired: 'Please complete the captcha',
          turnstileSiteKeyNotConfigured: 'Turnstile site key is not configured',
          failedToSubmitRequest: 'Failed to submit request',
          successTitle: 'Thank You for Trusting Us!',
          successText: "We've received your message and will contact you as soon as possible.",
        },
      },
      nav: {
        home: 'Home',
        whatWeDo: 'What We Do',
        about: 'About',
        partners: 'Partners',
        contactUs: 'Contact Us',
      },
      footer: {
        quickLinks: 'Quick Links',
        contactInfo: 'Contact Info',
        connectWithUs: 'Connect With Us',
        followUs: 'Follow us on social media',
        rights: 'All rights reserved.',
        privacyPolicy: 'Privacy Policy',
        terms: 'Terms of Service',
        legal: 'Legal',
        tagline: 'Ready to build something meaningful? Start a conversation with OmniLinks.',
      },
    },
  },
  fr: {
    translation: {
      hero: {
        titleLine1: 'Construire des',
        titleLine2: 'produits digitaux durables',
        description:
          "Nous concevons et développons des produits digitaux en reliant stratégie, design et technologie pour créer des solutions évolutives et durables. De l’idée au lancement, nous aidons les entreprises et les fondateurs à transformer leurs idées en produits performants — pas seulement beaux.",
        explore: 'Découvrir nos services',
        startConversation: 'Démarrer une conversation',
      },
      values: {
        heading: 'Nos valeurs',
        subheading: 'Les principes qui guident chaque partenariat et chaque projet',
        items: {
          responsibility: {
            title: 'Responsabilité',
            description:
              'Nous assumons pleinement la responsabilité de nos actions, de nos décisions et de nos livraisons. Nous tenons nos engagements et nous veillons à toujours délivrer ce que nous promettons. La responsabilité, c’est aussi un esprit de co‑propriété du succès de l’entreprise et une forte exigence de qualité pour offrir les meilleures solutions à nos clients.',
          },
          integrity: {
            title: 'Intégrité',
            description:
              'La transparence et l’honnêteté sont la base de la confiance. Nous communiquons de manière ouverte et directe, en interne comme avec nos clients. Nous croyons aux conseils sincères, aux retours clairs et à un environnement de travail fondé sur la confiance mutuelle et la responsabilité.',
          },
          respect: {
            title: 'Respect',
            description:
              'Nous respectons nos collègues, nos clients et le travail que nous accomplissons. Nous traitons chacun avec dignité et nous écoutons activement les différents points de vue. Le respect, c’est aussi valoriser le temps des autres, tenir ses promesses et reconnaître les efforts de chacun.',
          },
          commitment: {
            title: 'Engagement',
            description:
              'Nous sommes passionnés par ce que nous faisons et nous cherchons toujours à aller plus loin. Notre engagement nous pousse à trouver les meilleures solutions pour nos clients et à nous soutenir en équipe. Nous prenons des initiatives, agissons de manière proactive et faisons d’Omni Linx un partenaire fiable qui délivre une qualité constante.',
          },
        },
      },
      sections: {
        platforms: {
          heading: 'Nos compétences clés',
          subheading: 'Nous créons des solutions digitales modernes, sécurisées et évolutives, pensées pour la croissance',
          items: {
            digitalPlatforms: {
              title: 'Plateformes & écosystèmes digitaux',
              description:
                'Nous créons des plateformes digitales connectées, pensées pour l’automatisation, l’évolutivité et la valeur à long terme — pas des outils isolés.',
            },
            aiAutomation: {
              title: 'IA & automatisation',
              description:
                "Nous intégrons l’automatisation intelligente et l’IA pour optimiser les processus, la prise de décision et l’expérience utilisateur.",
            },
            telecom: {
              title: 'Solutions télécom & communication',
              description:
                'Nous concevons des infrastructures de communication modernes pour une connectivité sécurisée, fluide et globale.',
            },
            strategy: {
              title: 'Stratégie, croissance & conseil',
              description:
                'Nous aidons les fondateurs et les organisations à structurer des projets évolutifs et attractifs grâce au conseil stratégique, à la planification de croissance et à un accompagnement durable.',
            },
          },
        },
        howWeWork: {
          heading: 'Notre méthode',
          steps: {
            discover: {
              title: 'Découvrir',
              description: 'Comprendre la vision, les défis et les objectifs long terme.',
            },
            design: {
              title: 'Concevoir',
              description: 'Structurer les plateformes, les systèmes et l’expérience utilisateur.',
            },
            build: {
              title: 'Construire',
              description: 'Développer, intégrer et tester des solutions fiables.',
            },
            scale: {
              title: 'Déployer',
              description: 'Optimiser, automatiser et faire évoluer pour une croissance durable.',
            },
          },
        },
        supportingServices: {
          heading: 'Services complémentaires',
          description:
            'En plus de nos offres digitales, nous fournissons des services techniques essentiels pour assurer des opérations stables et efficaces au quotidien.',
          items: {
            connectivity: 'Connectivité & installation IT',
            office: 'Infrastructure bureau & entreprise',
            printing: 'Impression & solutions matériel',
            support: 'Support technique continu',
          },
        },
        about: {
          heading: 'À propos de Omni Links',
          subheading: 'Nous construisons des projets digitaux en reliant technologie, humain et vision long terme',
          cards: {
            story: {
              title: 'Notre histoire',
              description:
                'Omni Links est né d’une conviction simple : la technologie doit simplifier la vie — pas la compliquer. Nous aidons les organisations à s’éloigner des systèmes fragmentés et des solutions court terme en construisant des écosystèmes digitaux connectés, pensés pour la clarté, l’évolutivité et un impact réel.',
            },
            vision: {
              title: 'Notre vision',
              description:
                'Construire et soutenir des projets digitaux qui créent de la valeur au-delà des frontières, des secteurs et des générations — pour un futur digital plus efficace et centré sur l’humain.',
            },
            mission: {
              title: 'Notre mission',
              description:
                'Nous construisons des projets digitaux en connectant technologie, humain et vision long terme — avec une innovation guidée par le sens, pas par le court terme. C’est ce que nous appelons Tech with Soul.',
            },
          },
          projectsHeading: 'Nos projets actuels',
          projects: {
            omniMarket: 'Une plateforme marketplace moderne reliant acheteurs et vendeurs dans un écosystème fluide',
            omniCare: 'Plateforme santé complète offrant des solutions de soins et bien-être personnalisées',
            omniSchool: 'Plateforme éducation moderne transformant l’apprentissage via le digital',
          },
        },
        techWithSoul: {
          heading: 'Tech avec du sens',
          description:
            "Chez Omni Links, la technologie ne se résume pas au code — elle est avant tout au service des personnes.\n\nNous combinons expertise technique et compréhension humaine pour créer des solutions digitales éthiques, durables et pérennes.",
        },
      },
      pages: {
        whatWeDo: {
          title: 'Nos Services',
          subtitle: 'Nous créons des solutions digitales modernes, sécurisées et évolutives, pensées pour la croissance',
          ctaTitle: 'Prêt à construire quelque chose de significatif ?',
          ctaText: 'Démarrez une conversation avec Omni Links.',
          ctaButton: 'Commencer',
        },
        about: {
          title: 'À propos',
          ctaTitle: 'Construisons quelque chose de significatif — ensemble',
          ctaText: 'Démarrez une conversation avec Omni Links.',
          ctaButton: 'Commencer',
        },
        partners: {
          title: 'Partenaires',
          heading: 'Construire des partenariats stratégiques',
          text:
            "Nous collaborons avec des organisations visionnaires pour créer des solutions digitales innovantes. Si vous souhaitez devenir partenaire d’Omni Links, nous serions ravis d’échanger.",
          button: 'Nous contacter',
        },
        contact: {
          title: 'Parlons de votre projet',
          subtitle: 'Prêt à construire quelque chose de significatif ensemble ? Contactez Omni Links.',
          emailUs: 'Email',
          address: 'Adresse',
          callUs: 'Téléphone',
          formTitle: 'Envoyez-nous un message',
          name: 'Nom',
          email: 'Email',
          message: 'Message',
          namePlaceholder: 'Votre nom',
          emailPlaceholder: 'votre@email.com',
          messagePlaceholder: 'Parlez-nous de votre projet...',
          send: 'Envoyer',
          sending: 'Envoi...',
          captchaRequired: 'Veuillez compléter le captcha',
          turnstileSiteKeyNotConfigured: 'La clé site Turnstile n’est pas configurée',
          failedToSubmitRequest: "Échec de l’envoi de la demande",
          successTitle: 'Merci pour votre confiance !',
          successText: 'Nous avons bien reçu votre message et nous vous contacterons au plus vite.',
        },
      },
      nav: {
        home: 'Accueil',
        whatWeDo: 'Nos Services',
        about: 'À propos',
        partners: 'Partenaires',
        contactUs: 'Contact',
      },
      footer: {
        quickLinks: 'Liens rapides',
        contactInfo: 'Coordonnées',
        connectWithUs: 'Suivez-nous',
        followUs: 'Suivez-nous sur les réseaux sociaux',
        rights: 'Tous droits réservés.',
        privacyPolicy: 'Politique de confidentialité',
        terms: "Conditions d'utilisation",
        legal: 'Mentions légales',
        tagline: 'Prêt à construire quelque chose de significatif ? Démarrez une conversation avec OmniLinks.',
      },
    },
  },
  ar: {
    translation: {
      hero: {
        titleLine1: 'نبني منتجات',
        titleLine2: 'رقمية تدوم',
        description:
          'نصمم ونطوّر منتجات رقمية عبر ربط الاستراتيجية والتصميم والتقنية إلى حلول قابلة للتوسع وطويلة الأمد. من الفكرة إلى الإطلاق، نساعد الشركات ورواد الأعمال على تحويل الأفكار إلى منتجات عالية الأداء — وليس مجرد منتجات جميلة.',
        explore: 'اكتشف ماذا نقدم',
        startConversation: 'ابدأ محادثة',
      },
      values: {
        heading: 'قيمنا الأساسية',
        subheading: 'المبادئ التي توجه كل شراكة وكل مشروع نبنيه',
        items: {
          responsibility: {
            title: 'المسؤولية',
            description:
              'نتحمل المسؤولية الكاملة عن أفعالنا وقراراتنا وتسليماتنا. نلتزم بوعودنا ونتأكد دائماً من تقديم ما نعد به. وتعني المسؤولية أيضاً ملكية مشتركة لنجاح الشركة وتركيزاً قوياً على تقديم أفضل الحلول الممكنة لعملائنا.',
          },
          integrity: {
            title: 'النزاهة',
            description:
              'الشفافية والصدق هما أساس الثقة. نتواصل بوضوح وبشكل مباشر داخل المؤسسة ومع عملائنا. نؤمن بالنصيحة الصادقة، وبالتغذية الراجعة الواضحة، وببيئة عمل مبنية على الثقة المتبادلة والمساءلة.',
          },
          respect: {
            title: 'الاحترام',
            description:
              'نحترم بعضنا البعض، ونحترم عملاءنا، ونحترم العمل الذي نقوم به. نعامل الجميع بكرامة ونستمع باهتمام لوجهات النظر المختلفة. كما يعني الاحترام تقدير وقت الآخرين والوفاء بالوعود وتقدير جهود الجميع.',
          },
          commitment: {
            title: 'الالتزام',
            description:
              'نحن شغوفون بما نقوم به ونسعى دائماً لبذل جهد إضافي. يدفعنا التزامنا إلى إيجاد أفضل الحلول لعملائنا ودعم بعضنا كفريق. نبادر ونعمل بشكل استباقي ونتأكد أن Omni Linx شريك موثوق يقدّم جودة ثابتة.',
          },
        },
      },
      sections: {
        platforms: {
          heading: 'قدراتنا الأساسية',
          subheading: 'نبتكر حلولاً رقمية حديثة وآمنة وقابلة للتوسع لتدعم النمو',
          items: {
            digitalPlatforms: {
              title: 'منصات رقمية وأنظمة مترابطة',
              description:
                'نبني منصات رقمية مترابطة مصممة للأتمتة وقابلية التوسع والقيمة طويلة الأمد — وليس أدوات منفصلة.',
            },
            aiAutomation: {
              title: 'الذكاء الاصطناعي والأتمتة',
              description: 'نُدمج الأتمتة الذكية والذكاء الاصطناعي لتحسين سير العمل واتخاذ القرار وتجارب المستخدم.',
            },
            telecom: {
              title: 'حلول الاتصالات والتواصل',
              description: 'نصمم بنى اتصالات حديثة تضمن اتصالاً آمناً وسلساً وعلى نطاق عالمي.',
            },
            strategy: {
              title: 'الاستراتيجية والنمو والاستشارات',
              description:
                'نساعد المؤسسين والمؤسسات على تحويل الأفكار إلى مشاريع منظمة وقابلة للتوسع عبر الإرشاد الاستراتيجي وتخطيط النمو والاستشارة طويلة الأمد.',
            },
          },
        },
        howWeWork: {
          heading: 'كيف نعمل',
          steps: {
            discover: {
              title: 'اكتشاف',
              description: 'فهم الرؤية والتحديات والأهداف طويلة الأمد.',
            },
            design: {
              title: 'تصميم',
              description: 'هيكلة المنصات والأنظمة وتجارب المستخدم.',
            },
            build: {
              title: 'بناء',
              description: 'تطوير الحلول ودمجها واختبارها بشكل موثوق.',
            },
            scale: {
              title: 'توسيع',
              description: 'التحسين والأتمتة والتوسّع لتحقيق نمو مستدام.',
            },
          },
        },
        supportingServices: {
          heading: 'خدمات مساندة',
          description:
            'إضافة إلى خدماتنا الرقمية، نوفر خدمات تقنية أساسية لضمان عمليات يومية مستقرة وفعالة.',
          items: {
            connectivity: 'الاتصال وإعداد تقنية المعلومات',
            office: 'البنية التحتية للمكتب والأعمال',
            printing: 'حلول الطباعة والأجهزة',
            support: 'دعم تقني مستمر',
          },
        },
        about: {
          heading: 'عن Omni Links',
          subheading: 'نبني مشاريع رقمية عبر ربط التقنية بالإنسان وبالتفكير طويل الأمد',
          cards: {
            story: {
              title: 'قصتنا',
              description:
                'تأسست Omni Links على قناعة بسيطة: التقنية يجب أن تبسّط الحياة — لا أن تعقّدها. نساعد المؤسسات على الابتعاد عن الأنظمة المجزأة والحلول قصيرة الأمد عبر بناء أنظمة رقمية مترابطة صممت للوضوح وقابلية التوسع والأثر الحقيقي.',
            },
            vision: {
              title: 'رؤيتنا',
              description:
                'بناء ودعم مشاريع رقمية تخلق قيمة حقيقية عبر الحدود والقطاعات والأجيال — لصناعة مستقبل رقمي أكثر كفاءة وتركزاً على الإنسان.',
            },
            mission: {
              title: 'مهمتنا',
              description:
                'نبني مشاريع رقمية عبر ربط التقنية بالإنسان وبالتفكير طويل الأمد — حيث يقود الابتكار هدف واضح وليس مكاسب قصيرة الأمد. هذا ما نسميه Tech with Soul.',
            },
          },
          projectsHeading: 'مشاريعنا الحالية',
          projects: {
            omniMarket: 'منصة سوق رقمية حديثة تربط البائعين والمشترين ضمن نظام سلس',
            omniCare: 'منصة رعاية صحية شاملة تقدم حلولاً مخصصة للعناية والرفاه',
            omniSchool: 'منصة تعليم حديثة تطور تجربة التعلم عبر حلول رقمية مبتكرة',
          },
        },
        techWithSoul: {
          heading: 'تقنية بروح إنسانية',
          description:
            'في Omni Links، التقنية ليست مجرد كود أو أنظمة — بل هي عن الإنسان.\n\nنمزج الخبرة التقنية مع فهم إنساني لنصنع حلولاً رقمية أخلاقية ومستدامة وطويلة الأمد.',
        },
      },
      pages: {
        whatWeDo: {
          title: 'ماذا نقدم',
          subtitle: 'نبتكر حلولاً رقمية حديثة وآمنة وقابلة للتوسع لتدعم النمو',
          ctaTitle: 'هل أنت جاهز لبناء شيء مؤثر؟',
          ctaText: 'ابدأ محادثة مع Omni Links.',
          ctaButton: 'ابدأ الآن',
        },
        about: {
          title: 'من نحن',
          ctaTitle: 'لنصنع شيئاً مؤثراً — معاً',
          ctaText: 'ابدأ محادثة مع Omni Links.',
          ctaButton: 'ابدأ الآن',
        },
        partners: {
          title: 'الشركاء',
          heading: 'بناء شراكات استراتيجية',
          text:
            'نتعاون مع جهات طموحة لصناعة حلول رقمية مبتكرة. إذا كنت مهتماً بالشراكة مع Omni Links يسعدنا التواصل معك.',
          button: 'تواصل معنا',
        },
        contact: {
          title: 'لنبدأ محادثة',
          subtitle: 'جاهز لبناء شيء مؤثر معنا؟ تواصل مع Omni Links.',
          emailUs: 'راسلنا',
          address: 'العنوان',
          callUs: 'اتصل بنا',
          formTitle: 'أرسل لنا رسالة',
          name: 'الاسم',
          email: 'البريد الإلكتروني',
          message: 'الرسالة',
          namePlaceholder: 'اسمك',
          emailPlaceholder: 'name@email.com',
          messagePlaceholder: 'أخبرنا عن مشروعك...',
          send: 'إرسال',
          sending: 'جارٍ الإرسال...',
          captchaRequired: 'يرجى إكمال التحقق',
          turnstileSiteKeyNotConfigured: 'مفتاح Turnstile غير مُعدّ',
          failedToSubmitRequest: 'فشل إرسال الطلب',
          successTitle: 'شكراً لثقتك بنا!',
          successText: 'تم استلام رسالتك وسنتواصل معك في أقرب وقت ممكن.',
        },
      },
      nav: {
        home: 'الرئيسية',
        whatWeDo: 'ماذا نقدم',
        about: 'من نحن',
        partners: 'الشركاء',
        contactUs: 'تواصل معنا',
      },
      footer: {
        quickLinks: 'روابط سريعة',
        contactInfo: 'معلومات الاتصال',
        connectWithUs: 'تابعنا',
        followUs: 'تابعنا على وسائل التواصل الاجتماعي',
        rights: 'جميع الحقوق محفوظة.',
        privacyPolicy: 'سياسة الخصوصية',
        terms: 'شروط الخدمة',
        legal: 'قانوني',
        tagline: 'جاهز لبناء شيء مؤثر؟ ابدأ محادثة مع OmniLinks.',
      },
    },
  },
} as const;

const savedLng = localStorage.getItem(STORAGE_KEY);

void i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLng || 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

i18n.on('languageChanged', (lng: string) => {
  localStorage.setItem(STORAGE_KEY, lng);
});

export default i18n;
