/**
 * WEBSITE CONFIGURATION FILE
 * ========================================
 * Edit this file to easily change images, text, and contact information
 * without touching the main code structure.
 */

// ============================================
// IMAGES - Replace these URLs with your own
// ============================================
export const IMAGES = {
  // Hero/Main background image
  hero: 'https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBraXRjaGVufGVufDF8fHx8MTc2MTExMjc0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
  
  // Gallery images - Add or remove as needed
  gallery: [
    'https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBraXRjaGVufGVufDF8fHx8MTc2MTExMjc0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1641823911769-c55f23c25143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxMDQ4MTEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1631679706909-1844bbd07221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc2MTEyNjIzOHww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1581784878214-8d5596b98a01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NjExMzA0NTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1600210492493-0946911123ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob21lJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxMTE1Nzg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1708915965975-2a950db0e215?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwZGVzaWduJTIwY29uc3VsdGF0aW9ufGVufDF8fHx8MTc2MTE0OTM3Mnww&ixlib=rb-4.1.0&q=80&w=1080'
  ],
  
  // About section images
  aboutImage1: 'https://images.unsplash.com/photo-1641823911769-c55f23c25143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxMDQ4MTEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  aboutImage2: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc2MTEyNjIzOHww&ixlib=rb-4.1.0&q=80&w=1080'
};

// ============================================
// CONTACT INFORMATION
// ============================================
export const CONTACT = {
  phone: '+212 660-102943',
  phoneLink: 'tel:+212660102943',
  email: 'contact@cuisinemeknes.ma',
  emailLink: 'mailto:contact@cuisinemeknes.ma',
  
  // Social Media
  instagram: 'CUISI_NESMODERNESMEKNES',
  instagramUrl: 'https://www.instagram.com/CUISI_NESMODERNESMEKNES',
  
  whatsapp: '+212 660-102943',
  whatsappUrl: 'https://wa.me/212660102943',
  
  // TikTok - Add your link here when ready
  tiktokUrl: '', // Leave empty until ready
  tiktokUsername: '', // Add your TikTok username
};

// ============================================
// TRANSLATIONS - French & Arabic
// ============================================
export const TRANSLATIONS = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      services: 'Services',
      gallery: 'Galerie',
      contact: 'Contact'
    },
    hero: {
      title: 'DESIGN D\'INTÉRIEUR MODERNE',
      subtitle: 'Transformez vos espaces en œuvres d\'art à Meknès',
      cta1: 'Découvrir nos services',
      cta2: 'Nous contacter'
    },
    about: {
      title: 'DESIGN D\'INTÉRIEUR MODERNE',
      subtitle: 'Transformez vos cuisines et chambres',
      description: 'Nous offrons un service de design d\'intérieur spécialisé dans la transformation de cuisines et de chambres en espaces élégants et modernes. Notre service comprend des consultations personnalisées, la création de designs et la mise en œuvre pratique d\'esthétiques modernes.'
    },
    services: {
      title: 'NOS SERVICES',
      service1: {
        title: 'Consultation Personnalisée',
        description: 'Nous travaillons en étroite collaboration avec nos clients pour sélectionner le mobilier moderne, les finitions, les schémas de couleurs et les agencements.'
      },
      service2: {
        title: 'Design & Planification',
        description: 'Conseils d\'experts sur l\'éclairage, la planification spatiale et les tendances du design pour une sensation fraîche et moderne.'
      },
      service3: {
        title: 'Réalisation Complète',
        description: 'Nous supervisons l\'ensemble du processus, de la conceptualisation à l\'installation finale, en offrant un look contemporain haut de gamme.'
      }
    },
    gallery: {
      title: 'NOS RÉALISATIONS'
    },
    contact: {
      title: 'CONTACTEZ-NOUS',
      phone: 'Téléphone',
      email: 'Email',
      address: 'Adresse',
      social: 'Suivez-nous',
      addressText: 'Meknès, Maroc'
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'الخدمات',
      gallery: 'المعرض',
      contact: 'اتصل بنا'
    },
    hero: {
      title: 'التصميم الداخلي الحديث',
      subtitle: 'حوّل مساحاتك إلى تحف فنية في مكناس',
      cta1: 'اكتشف خدماتنا',
      cta2: 'اتصل بنا'
    },
    about: {
      title: 'التصميم الداخلي الحديث',
      subtitle: 'حوّل مطابخك وغرفك',
      description: 'نقدم خدمة تصميم داخلي متخصصة في تحويل المطابخ والغرف إلى مساحات أنيقة وعصرية. تشمل خدمتنا استشارات شخصية وإنشاء التصاميم والتنفيذ العملي للجماليات الحديثة.'
    },
    services: {
      title: 'خدماتنا',
      service1: {
        title: 'استشارة شخصية',
        description: 'نعمل بشكل وثيق مع عملائنا لاختيار الأثاث الحديث والتشطيبات وأنظمة الألوان والتخطيطات.'
      },
      service2: {
        title: 'التصميم والتخطيط',
        description: 'إرشادات الخبراء حول الإضاءة والتخطيط المكاني واتجاهات التصميم للحصول على إحساس حديث ومنعش.'
      },
      service3: {
        title: 'التنفيذ الكامل',
        description: 'نشرف على العملية بأكملها، من الفكرة إلى التركيب النهائي، مع تقديم مظهر معاصر راقي.'
      }
    },
    gallery: {
      title: 'أعمالنا'
    },
    contact: {
      title: 'اتصل بنا',
      phone: 'الهاتف',
      email: 'البريد الإلكتروني',
      address: 'العنوان',
      social: 'تابعنا',
      addressText: 'مكناس، المغرب'
    }
  }
};

// ============================================
// WEBSITE SETTINGS
// ============================================
export const SETTINGS = {
  siteName: 'CUISINE MEKNES',
  defaultLanguage: 'fr' as 'fr' | 'ar',
  
  // Color scheme (matching the Halton template)
  colors: {
    primary: '#8b7355',
    primaryDark: '#6b5335',
    primaryLight: '#d4c5b0',
    background: '#f5f1eb',
    darkBg: '#2a2a2a',
    darkerBg: '#1a1a1a'
  }
};
