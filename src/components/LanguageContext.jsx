import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    nav: {
      home: 'Home',
      problem: 'The Problem',
      about: 'About Us',
      features: 'Features',
      howItWorks: 'How It Works',
      pricing: 'Pricing',
      testimonials: 'Testimonials',
      faq: 'FAQs',
      blog: 'Blog',
      contact: 'Contact',
    },
    hero: {
      badge: 'AI-Powered Tariff Intelligence',
      title: 'Navigate Global Trade',
      titleHighlight: 'With Confidence',
      subtitle: 'Instantly analyze tariffs, duties, and trade regulations for any product across 190+ countries. Make informed decisions with AI-powered insights.',
      cta: 'Start Free Analysis',
      ctaSecondary: 'Watch Demo',
      stats: {
        countries: 'Countries Covered',
        accuracy: 'Accuracy Rate',
        reports: 'Reports Generated',
      }
    },
    problem: {
      badge: 'The Challenge',
      title: 'Global Trade is Complex',
      subtitle: 'Businesses lose millions annually due to tariff miscalculations and compliance issues',
      cards: [
        {
          title: 'Hidden Costs',
          description: 'Unexpected tariffs and duties can increase product costs by 15-30%, destroying profit margins overnight.'
        },
        {
          title: 'Compliance Risk',
          description: 'Non-compliance with trade regulations leads to shipment delays, fines, and damaged business relationships.'
        },
        {
          title: 'Time Waste',
          description: 'Manual tariff research takes hours of expert time per product, slowing down business decisions.'
        }
      ]
    },
    about: {
      badge: 'Who We Are',
      title: 'Simplifying Global Trade',
      subtitle: 'tariff.ai combines cutting-edge AI with comprehensive trade databases to deliver instant, accurate tariff intelligence.',
      description: 'Founded by trade compliance experts and AI engineers, we\'re on a mission to democratize access to trade intelligence. Our platform processes millions of data points to give you clear, actionable insights in seconds.',
      values: [
        { title: 'Accuracy First', description: 'Every report is verified against official sources' },
        { title: 'Speed Matters', description: 'Get answers in seconds, not hours' },
        { title: 'Always Current', description: 'Real-time updates on tariff changes' },
      ]
    },
    features: {
      badge: 'Capabilities',
      title: 'Everything You Need',
      subtitle: 'Powerful tools designed to streamline your global trade operations',
      cta: 'Get Started Now',
      items: [
        {
          title: 'HS Code Classification',
          description: 'Automatic product classification with 98% accuracy using advanced AI'
        },
        {
          title: 'Duty Calculator',
          description: 'Instant calculation of duties, taxes, and fees for any trade route'
        },
        {
          title: 'Trade Agreement Finder',
          description: 'Discover preferential rates under FTAs and trade agreements'
        },
        {
          title: 'Compliance Alerts',
          description: 'Real-time notifications on regulatory changes affecting your products'
        },
        {
          title: 'Multi-Country Analysis',
          description: 'Compare tariffs across multiple destinations simultaneously'
        },
        {
          title: 'Export Documentation',
          description: 'Generate compliant export documents automatically'
        }
      ]
    },
    howItWorks: {
      badge: 'Process',
      title: 'How It Works',
      subtitle: 'Get accurate tariff insights in three simple steps',
      steps: [
        {
          number: '01',
          title: 'Describe Your Product',
          description: 'Enter your product details or upload an image. Our AI identifies the correct HS code automatically.'
        },
        {
          number: '02',
          title: 'Select Trade Route',
          description: 'Choose origin and destination countries. We\'ll factor in all applicable trade agreements.'
        },
        {
          number: '03',
          title: 'Get Your Report',
          description: 'Receive a comprehensive breakdown of duties, taxes, and compliance requirements instantly.'
        }
      ]
    },
    pricing: {
      badge: 'Plans',
      title: 'Simple, Transparent Pricing',
      subtitle: 'Choose the plan that fits your business needs',
      tabs: {
        packages: 'Packages',
        subscriptions: 'Subscriptions'
      },
      volumeLabel: {
        low: 'Low Volume',
        high: 'High Volume'
      },
      popular: 'Most Popular',
      perMonth: '/month',
      getStarted: 'Get Started',
      contactSales: 'Contact Sales',
      tryFree: 'Try Free',
      reportIncludes: 'Report Includes:',
      premiumFeatures: 'Premium Features:',
      free: {
        name: 'Free',
        price: '$0',
        description: 'Perfect for trying out',
        features: [
          'HS Code Classification',
          'Match Score',
          'Classification Explanation'
        ]
      },
      packages: [
        {
          reports: 1,
          price: '$1.99',
          pricePerReport: '$1.99'
        },
        {
          reports: 5,
          price: '$8.99',
          pricePerReport: '$1.80'
        },
        {
          reports: 10,
          price: '$16.99',
          pricePerReport: '$1.70'
        },
        {
          reports: 20,
          price: '$31.99',
          pricePerReport: '$1.60'
        }
      ],
      packageFeatures: [
        'HS Code Classification',
        'Match Score',
        'Classification Explanation',
        'Tariffs & Taxes',
        'Import Regulations & Compliance',
        'Alternative Classifications',
        'Sources'
      ],
      subscriptions: {
        basic: {
          name: 'Basic',
          price: '$14.99',
          reports: '15',
          description: 'Great for small businesses'
        },
        pro: {
          name: 'Pro',
          price: '$49.99',
          reports: '50',
          description: 'For growing businesses'
        },
        agency: {
          name: 'Agency',
          price: '$199',
          reports: '200',
          description: 'For trade professionals'
        },
        enterprise: {
          name: 'Enterprise',
          price: 'Custom',
          reports: 'Unlimited',
          description: 'Tailored for your needs'
        }
      },
      subscriptionFeatures: [
        'HS Code Classification',
        'Match Score',
        'Classification Explanation',
        'Tariffs & Taxes',
        'Import Regulations & Compliance',
        'Alternative Classifications',
        'Sources'
      ],
      premium: [
        'Tax Calculator',
        'Shipping Calculator (Sea & Air)',
        'HS-Code Alerts',
        'News Feed'
      ]
    },
    newsletter: {
      badge: 'Stay Updated',
      title: 'Join Our Newsletter',
      subtitle: 'Get the latest tariff updates, trade news, and exclusive insights delivered to your inbox',
      placeholder: 'Enter your email',
      cta: 'Subscribe',
      privacy: 'We respect your privacy. Unsubscribe anytime.',
      consent: 'I agree to receive newsletters from tariff.ai'
    },
    testimonials: {
      badge: 'Success Stories',
      title: 'What Our Clients Say',
      subtitle: 'Trusted by importers, exporters, and trade professionals worldwide',
      items: [
        {
          quote: 'tariff.ai saved us over $50,000 in the first quarter by identifying FTA opportunities we had missed.',
          author: 'Sarah Chen',
          role: 'Import Manager',
          company: 'GlobalTech Solutions'
        },
        {
          quote: 'The accuracy and speed are incredible. What used to take our team days now takes minutes.',
          author: 'Michael Torres',
          role: 'Trade Compliance Director',
          company: 'Atlas Logistics'
        },
        {
          quote: 'Finally, a tool that speaks our language. The reports are clear, actionable, and always up-to-date.',
          author: 'Emma Williams',
          role: 'CEO',
          company: 'ImportHub'
        }
      ]
    },
    blog: {
      badge: 'Insights',
      title: 'From Our Blog',
      subtitle: 'Expert analysis, industry news, and practical guides for global trade',
      readMore: 'Read More',
      viewAll: 'View All Articles',
      posts: [
        {
          title: '2024 Tariff Changes: What Importers Need to Know',
          excerpt: 'A comprehensive guide to the latest tariff updates affecting key industries...',
          category: 'Industry News',
          date: 'Jan 15, 2024'
        },
        {
          title: 'How to Leverage Free Trade Agreements',
          excerpt: 'Maximize your savings by understanding and utilizing FTA benefits...',
          category: 'Guide',
          date: 'Jan 10, 2024'
        },
        {
          title: 'AI in Trade Compliance: The Future is Here',
          excerpt: 'Exploring how artificial intelligence is revolutionizing customs and compliance...',
          category: 'Technology',
          date: 'Jan 5, 2024'
        }
      ]
    },
    faq: {
      badge: 'FAQs',
      title: 'tariff.ai Knowledge Center',
      subtitle: 'Everything you need to know about the tool that\'s changing international trade',
      items: [
        {
          question: 'What is tariff.ai and how does it save me money?',
          answer: 'tariff.ai is an AI-powered platform that instantly analyzes tariffs, duties, and trade regulations across 190+ countries. The system helps you find the most accurate customs classification, leverage free trade agreements, and avoid unnecessary fines or overpayments to customs authorities.'
        },
        {
          question: 'How accurate is the HS code classification?',
          answer: 'Our algorithms achieve over 98% accuracy in HS code classification. The system doesn\'t just search for keywords - it understands your product\'s technical specifications and cross-references them with historical customs rulings and real-time legislative updates.'
        },
        {
          question: 'Does the system consider Free Trade Agreements (FTAs)?',
          answer: 'Absolutely. tariff.ai automatically identifies tax-saving opportunities based on trade agreements between countries (like Israel-Europe or US agreements), and indicates which documents are required to claim the duty exemption.'
        },
        {
          question: 'How frequently is the data updated?',
          answer: 'Our databases are updated daily directly from official customs authority sources and the World Customs Organization (WCO). We ensure you\'re always working with the most current tariffs and regulations.'
        },
        {
          question: 'Can the system be integrated into our corporate ERP?',
          answer: 'Yes, we have an advanced, documented API that enables rapid integration with SAP, Oracle, Priority, or any other inventory and supply chain management system, making tax calculations an integral part of your sales or procurement process.'
        },
        {
          question: 'Is my information and searches kept confidential?',
          answer: 'Data security is our top priority. All information is encrypted at enterprise-grade level, and we do not share your product data or searches with any third parties.'
        },
        {
          question: 'What\'s the difference between a regular HS code search and your analysis?',
          answer: 'A regular search only gives you a number. tariff.ai gives you context: it details regulatory requirements (standards, health/telecom ministry approvals), possible anti-dumping duties and tax risks, all in one simple interface.'
        },
        {
          question: 'Which countries are supported by the system?',
          answer: 'We cover over 190 countries, including all major target markets: USA, European Union, China, India, Gulf states and more, including updates on geopolitical changes affecting trade tariffs.'
        },
        {
          question: 'Is there a trial period?',
          answer: 'Certainly. You can start with our free plan which includes up to 3 monthly reports to test the accuracy and capabilities of the system. No credit card required to start.'
        },
        {
          question: 'How do I get support for professional questions?',
          answer: 'Pro and Enterprise users enjoy priority support from trade experts and technical staff available via chat, email, or video calls to ensure you\'re getting the most out of the platform.'
        }
      ]
    },
    contact: {
      badge: 'Get in Touch',
      title: 'Contact Us',
      subtitle: 'Have questions? We\'d love to hear from you',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        company: 'Company',
        subject: 'Subject',
        message: 'Message',
        submit: 'Send Message'
      },
      info: {
        email: 'hello@tariff.ai',
        phone: '+1 (555) 123-4567',
        address: 'San Francisco, CA'
      }
    },
    footer: {
      description: 'AI-powered tariff intelligence for global trade professionals.',
      product: 'Product',
      company: 'Company',
      legal: 'Legal',
      links: {
        features: 'Features',
        pricing: 'Pricing',
        api: 'API',
        about: 'About Us',
        careers: 'Careers',
        blog: 'Blog',
        terms: 'Terms of Service',
        privacy: 'Privacy Policy',
        cookies: 'Cookie Policy'
      },
      copyright: '© 2024 tariff.ai. All rights reserved.'
    },
    enterprise: {
      title: 'Enterprise Inquiry',
      subtitle: 'Tell us about your needs and we\'ll create a custom solution',
      form: {
        name: 'Full Name',
        email: 'Work Email',
        company: 'Company Name',
        employees: 'Company Size',
        volume: 'Monthly Report Volume',
        message: 'Tell us about your requirements',
        submit: 'Submit Inquiry'
      },
      employeeOptions: ['1-50', '51-200', '201-500', '500+'],
      volumeOptions: ['200-500', '500-1000', '1000-5000', '5000+'],
      success: 'Thank you! We\'ll be in touch within 24 hours.'
    }
  },
  he: {
    nav: {
      home: 'בית',
      problem: 'הבעיה',
      about: 'מי אנחנו',
      features: 'יכולות',
      howItWorks: 'איך זה עובד',
      pricing: 'תמחור',
      testimonials: 'לקוחות מספרים',
      faq: 'שאלות נפוצות',
      blog: 'בלוג',
      contact: 'צור קשר',
    },
    hero: {
      badge: 'בינה מלאכותית לניתוח מכסים',
      title: 'נווטו בסחר הבינלאומי',
      titleHighlight: 'בביטחון מלא',
      subtitle: 'נתחו מכסים, מסים ותקנות סחר לכל מוצר ב-190+ מדינות באופן מיידי. קבלו החלטות מושכלות עם תובנות מבוססות AI.',
      cta: 'התחילו ניתוח חינם',
      ctaSecondary: 'צפו בהדגמה',
      stats: {
        countries: 'מדינות בכיסוי',
        accuracy: 'דיוק',
        reports: 'דוחות שהופקו',
      }
    },
    problem: {
      badge: 'האתגר',
      title: 'הסחר הבינלאומי מורכב',
      subtitle: 'עסקים מפסידים מיליונים מדי שנה בגלל חישובי מכס שגויים ובעיות תאימות',
      cards: [
        {
          title: 'עלויות נסתרות',
          description: 'מכסים ומסים בלתי צפויים יכולים להעלות את עלות המוצר ב-15-30%, ולהרוס שולי רווח בן לילה.'
        },
        {
          title: 'סיכוני תאימות',
          description: 'אי עמידה בתקנות סחר מובילה לעיכובי משלוחים, קנסות ופגיעה ביחסים עסקיים.'
        },
        {
          title: 'בזבוז זמן',
          description: 'מחקר מכסים ידני לוקח שעות של זמן מומחה לכל מוצר, ומאט החלטות עסקיות.'
        }
      ]
    },
    about: {
      badge: 'מי אנחנו',
      title: 'מפשטים את הסחר הבינלאומי',
      subtitle: 'tariff.ai משלבת AI מתקדם עם מאגרי נתוני סחר מקיפים כדי לספק מידע מדויק ומיידי על מכסים.',
      description: 'הוקמנו על ידי מומחי תאימות סחר ומהנדסי AI, והמשימה שלנו היא לדמוקרטיזציה של הגישה למודיעין סחר. הפלטפורמה שלנו מעבדת מיליוני נקודות נתונים כדי לתת לכם תובנות ברורות ופעילות בשניות.',
      values: [
        { title: 'דיוק קודם כל', description: 'כל דוח מאומת מול מקורות רשמיים' },
        { title: 'מהירות חשובה', description: 'קבלו תשובות בשניות, לא בשעות' },
        { title: 'תמיד עדכני', description: 'עדכונים בזמן אמת על שינויי מכס' },
      ]
    },
    features: {
      badge: 'יכולות',
      title: 'כל מה שאתם צריכים',
      subtitle: 'כלים עוצמתיים שתוכננו לייעל את פעולות הסחר הבינלאומי שלכם',
      cta: 'התחילו עכשיו',
      items: [
        {
          title: 'סיווג קוד HS',
          description: 'סיווג אוטומטי של מוצרים עם דיוק של 98% באמצעות AI מתקדם'
        },
        {
          title: 'מחשבון מכס',
          description: 'חישוב מיידי של מכסים, מסים ועמלות לכל מסלול סחר'
        },
        {
          title: 'מציאת הסכמי סחר',
          description: 'גלו תעריפים מועדפים תחת הסכמי סחר חופשי'
        },
        {
          title: 'התראות תאימות',
          description: 'התראות בזמן אמת על שינויים רגולטוריים המשפיעים על המוצרים שלכם'
        },
        {
          title: 'ניתוח רב-מדינתי',
          description: 'השוו מכסים בין מספר יעדים בו-זמנית'
        },
        {
          title: 'תיעוד יצוא',
          description: 'הפקת מסמכי יצוא תואמים באופן אוטומטי'
        }
      ]
    },
    howItWorks: {
      badge: 'תהליך',
      title: 'איך זה עובד',
      subtitle: 'קבלו תובנות מדויקות על מכסים בשלושה צעדים פשוטים',
      steps: [
        {
          number: '01',
          title: 'תארו את המוצר',
          description: 'הזינו פרטי מוצר או העלו תמונה. ה-AI שלנו מזהה את קוד ה-HS הנכון אוטומטית.'
        },
        {
          number: '02',
          title: 'בחרו מסלול סחר',
          description: 'בחרו מדינות מוצא ויעד. נתחשב בכל הסכמי הסחר הרלוונטיים.'
        },
        {
          number: '03',
          title: 'קבלו את הדוח',
          description: 'קבלו פירוט מקיף של מכסים, מסים ודרישות תאימות באופן מיידי.'
        }
      ]
    },
    pricing: {
      badge: 'תוכניות',
      title: 'תמחור פשוט ושקוף',
      subtitle: 'בחרו את התוכנית המתאימה לצרכי העסק שלכם',
      tabs: {
        packages: 'חבילות',
        subscriptions: 'מנויים'
      },
      volumeLabel: {
        low: 'נפח נמוך',
        high: 'נפח גבוה'
      },
      popular: 'הכי פופולרי',
      perMonth: '/חודש',
      getStarted: 'התחילו',
      contactSales: 'צרו קשר',
      tryFree: 'נסו בחינם',
      reportIncludes: 'הדוח כולל:',
      premiumFeatures: 'פיצ׳רים פרימיום:',
      free: {
        name: 'חינם',
        price: '$0',
        description: 'מושלם להתנסות',
        features: [
          'סיווג קוד HS',
          'ציון התאמה',
          'הסבר על הסיווג'
        ]
      },
      packages: [
        {
          reports: 1,
          price: '$1.99',
          pricePerReport: '$1.99'
        },
        {
          reports: 5,
          price: '$8.99',
          pricePerReport: '$1.80'
        },
        {
          reports: 10,
          price: '$16.99',
          pricePerReport: '$1.70'
        },
        {
          reports: 20,
          price: '$31.99',
          pricePerReport: '$1.60'
        }
      ],
      packageFeatures: [
        'סיווג קוד HS',
        'ציון התאמה',
        'הסבר על הסיווג',
        'מכסים ומיסים',
        'תקינה וחוקיות יבוא',
        'סיווגים אלטרנטיביים',
        'מקורות'
      ],
      subscriptions: {
        basic: {
          name: 'Basic',
          price: '$14.99',
          reports: '15',
          description: 'מעולה לעסקים קטנים'
        },
        pro: {
          name: 'Pro',
          price: '$49.99',
          reports: '50',
          description: 'לעסקים בצמיחה'
        },
        agency: {
          name: 'Agency',
          price: '$199',
          reports: '200',
          description: 'לאנשי מקצוע בסחר'
        },
        enterprise: {
          name: 'Enterprise',
          price: 'מותאם אישית',
          reports: 'ללא הגבלה',
          description: 'מותאם לצרכים שלכם'
        }
      },
      subscriptionFeatures: [
        'סיווג קוד HS',
        'ציון התאמה',
        'הסבר על הסיווג',
        'מכסים ומיסים',
        'תקינה וחוקיות יבוא',
        'סיווגים אלטרנטיביים',
        'מקורות'
      ],
      premium: [
        'מחשבון מיסים',
        'מחשבון משלוח (ים ואוויר)',
        'התראות HS-Code',
        'פיד חדשות'
      ]
    },
    newsletter: {
      badge: 'הישארו מעודכנים',
      title: 'הצטרפו לניוזלטר',
      subtitle: 'קבלו עדכוני מכס, חדשות סחר ותובנות בלעדיות ישירות למייל',
      placeholder: 'הזינו את האימייל שלכם',
      cta: 'הרשמה',
      privacy: 'אנחנו מכבדים את הפרטיות שלכם. ביטול בכל עת.',
      consent: 'אני מסכים/ה לקבל ניוזלטר מ-tariff.ai'
    },
    testimonials: {
      badge: 'סיפורי הצלחה',
      title: 'מה הלקוחות שלנו אומרים',
      subtitle: 'זוכים לאמון יבואנים, יצואנים ואנשי מקצוע בסחר בינלאומי',
      items: [
        {
          quote: 'tariff.ai חסכה לנו מעל $50,000 ברבעון הראשון על ידי זיהוי הזדמנויות FTA שפספסנו.',
          author: 'שרה כהן',
          role: 'מנהלת יבוא',
          company: 'GlobalTech Solutions'
        },
        {
          quote: 'הדיוק והמהירות מדהימים. מה שלקח לצוות שלנו ימים עכשיו לוקח דקות.',
          author: 'מיכאל לוי',
          role: 'מנהל תאימות סחר',
          company: 'Atlas Logistics'
        },
        {
          quote: 'סוף סוף כלי שמדבר את השפה שלנו. הדוחות ברורים, פעילים ותמיד מעודכנים.',
          author: 'עמית רז',
          role: 'מנכ"ל',
          company: 'ImportHub'
        }
      ]
    },
    blog: {
      badge: 'תובנות',
      title: 'מהבלוג שלנו',
      subtitle: 'ניתוח מומחים, חדשות תעשייה ומדריכים מעשיים לסחר בינלאומי',
      readMore: 'קרא עוד',
      viewAll: 'כל המאמרים',
      posts: [
        {
          title: 'שינויי מכסים 2024: מה יבואנים צריכים לדעת',
          excerpt: 'מדריך מקיף לעדכוני המכסים האחרונים המשפיעים על תעשיות מפתח...',
          category: 'חדשות תעשייה',
          date: '15 ינואר, 2024'
        },
        {
          title: 'איך לנצל הסכמי סחר חופשי',
          excerpt: 'מקסמו את החיסכון שלכם על ידי הבנה וניצול יתרונות FTA...',
          category: 'מדריך',
          date: '10 ינואר, 2024'
        },
        {
          title: 'AI בתאימות סחר: העתיד כאן',
          excerpt: 'חוקרים כיצד בינה מלאכותית מהפכת את עולם המכס והתאימות...',
          category: 'טכנולוגיה',
          date: '5 ינואר, 2024'
        }
      ]
    },
    faq: {
      badge: 'שאלות נפוצות',
      title: 'מרכז המידע של tariff.ai',
      subtitle: 'כל מה שצריך לדעת על הכלי שמשנה את פני הסחר הבינלאומי',
      items: [
        {
          question: 'מה זה tariff.ai ואיך זה חוסך לי כסף?',
          answer: 'tariff.ai היא פלטפורמה מבוססת בינה מלאכותית המנתחת באופן מיידי מכסים, היטלים ותקנות סחר ב-190+ מדינות. המערכת עוזרת לך למצוא את סיווג המכס המדויק ביותר, לנצל הסכמי סחר חופשי ולמנוע קנסות מיותרים או תשלומים עודפים לרשויות המכס.'
        },
        {
          question: 'עד כמה סיווג קודי ה-HS מדויק?',
          answer: 'האלגוריתמים שלנו מגיעים לרמת דיוק של מעל 98% בסיווג קודי HS. המערכת לא רק מחפשת מילים, היא מבינה את המפרט הטכני של המוצר ומצליבה אותו עם פסיקות מכס היסטוריות ועדכוני חקיקה בזמן אמת.'
        },
        {
          question: 'האם המערכת מתחשבת בהסכמי סחר חופשי (FTA)?',
          answer: 'בהחלט. tariff.ai מזהה אוטומטית הזדמנויות לחיסכון במס על בסיס הסכמי סחר בין מדינות (כמו הסכמי ישראל-אירופה או ארה"ב), ומציינת אילו מסמכים נדרשים כדי לממש את הפטור ממכס.'
        },
        {
          question: 'באיזו תדירות המידע מתעדכן?',
          answer: 'מאגרי המידע שלנו מתעדכנים על בסיס יומי ישירות ממקורות רשמיים של רשויות המכס וארגון המכס העולמי (WCO). אנחנו מבטיחים שאתה תמיד עובד עם התעריפים והרגולציות העדכניים ביותר.'
        },
        {
          question: 'האם ניתן להטמיע את המערכת בתוך ה-ERP הארגוני?',
          answer: 'כן, יש לנו API מתקדם ומתועד המאפשר אינטגרציה מהירה למערכות SAP, Oracle, Priority או כל מערכת ניהול מלאי ושרשרת אספקה אחרת, כדי להפוך את חישובי המס לחלק אינטגרלי מתהליך המכירה או הרכש.'
        },
        {
          question: 'האם המידע והחיפושים שלי נשמרים בסודיות?',
          answer: 'אבטחת המידע היא בראש סדר העדיפויות שלנו. כל המידע מוצפן ברמה ארגונית (Enterprise-grade encryption) ואנחנו לא משתפים את נתוני המוצרים או החיפושים שלך עם אף צד שלישי.'
        },
        {
          question: 'מה ההבדל בין חיפוש קוד HS רגיל לבין הניתוח שלכם?',
          answer: 'חיפוש רגיל נותן רק מספר. tariff.ai נותנת לך הקשר: היא מפרטת דרישות רגולטוריות (תקינה, אישורי משרד הבריאות/תקשורת), היטלי היצף אפשריים וסיכוני מס, הכל בממשק אחד פשוט.'
        },
        {
          question: 'אילו מדינות נתמכות במערכת?',
          answer: 'אנחנו מכסים מעל 190 מדינות, כולל כל שוקי היעד המרכזיים: ארה"ב, האיחוד האירופי, סין, הודו, מדינות המפרץ ועוד, כולל עדכונים על שינויים גיאופוליטיים המשפיעים על תעריפי הסחר.'
        },
        {
          question: 'האם קיימת תקופת ניסיון?',
          answer: 'בוודאי. ניתן להתחיל עם תוכנית החינם שלנו הכוללת עד 3 דוחות חודשיים כדי לבחון את הדיוק והיכולות של המערכת. אין צורך בכרטיס אשראי כדי להתחיל.'
        },
        {
          question: 'איך מקבלים תמיכה במקרה של שאלה מקצועית?',
          answer: 'משתמשי Pro ו-Enterprise נהנים מתמיכה מועדפת של מומחי סחר וצוות טכני הזמינים בצ\'אט, במייל או בשיחות וידאו כדי לוודא שאתם מפיקים את המקסימום מהפלטפורמה.'
        }
      ]
    },
    contact: {
      badge: 'צרו קשר',
      title: 'דברו איתנו',
      subtitle: 'יש לכם שאלות? נשמח לשמוע מכם',
      form: {
        name: 'שם מלא',
        email: 'כתובת אימייל',
        company: 'חברה',
        subject: 'נושא',
        message: 'הודעה',
        submit: 'שלח הודעה'
      },
      info: {
        email: 'hello@tariff.ai',
        phone: '+1 (555) 123-4567',
        address: 'סן פרנסיסקו, קליפורניה'
      }
    },
    footer: {
      description: 'מודיעין מכס מונע AI לאנשי סחר בינלאומי.',
      product: 'מוצר',
      company: 'חברה',
      legal: 'משפטי',
      links: {
        features: 'יכולות',
        pricing: 'תמחור',
        api: 'API',
        about: 'אודות',
        careers: 'קריירה',
        blog: 'בלוג',
        terms: 'תנאי שימוש',
        privacy: 'מדיניות פרטיות',
        cookies: 'מדיניות עוגיות'
      },
      copyright: '© 2024 tariff.ai. כל הזכויות שמורות.'
    },
    enterprise: {
      title: 'פנייה ל-Enterprise',
      subtitle: 'ספרו לנו על הצרכים שלכם וניצור פתרון מותאם',
      form: {
        name: 'שם מלא',
        email: 'אימייל עבודה',
        company: 'שם החברה',
        employees: 'גודל החברה',
        volume: 'נפח דוחות חודשי',
        message: 'ספרו לנו על הדרישות שלכם',
        submit: 'שלח פנייה'
      },
      employeeOptions: ['1-50', '51-200', '201-500', '500+'],
      volumeOptions: ['200-500', '500-1000', '1000-5000', '5000+'],
      success: 'תודה! ניצור קשר תוך 24 שעות.'
    }
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedLang = localStorage.getItem('tariff-lang') || 'en';
    const savedTheme = localStorage.getItem('tariff-theme') || 'light';
    setLanguage(savedLang);
    setTheme(savedTheme);
    document.documentElement.dir = savedLang === 'he' ? 'rtl' : 'ltr';
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'he' : 'en';
    setLanguage(newLang);
    localStorage.setItem('tariff-lang', newLang);
    document.documentElement.dir = newLang === 'he' ? 'rtl' : 'ltr';
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('tariff-theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const t = translations[language];
  const isRTL = language === 'he';

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, theme, toggleTheme, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
