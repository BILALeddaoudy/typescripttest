import { useState } from 'react';
import { Instagram, MessageCircle, Music2, Phone, Mail, MapPin, Menu, X } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './components/ui/carousel';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { IMAGES, CONTACT, TRANSLATIONS, SETTINGS } from './config';

export default function App() {
  const [language, setLanguage] = useState<'fr' | 'ar'>(SETTINGS.defaultLanguage);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[language];

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'ar' : 'fr');
  };

  const handleInstagramClick = () => {
    window.open(CONTACT.instagramUrl, '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open(CONTACT.whatsappUrl, '_blank');
  };

  const handleTikTokClick = () => {
    if (CONTACT.tiktokUrl) {
      window.open(CONTACT.tiktokUrl, '_blank');
    } else {
      alert('TikTok link will be added soon!');
    }
  };

  return (
    <div className={`min-h-screen bg-[#f5f1eb] ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          {/* Top bar */}
          <div className="border-b border-[#d4c5b0] py-2">
            <div className="flex justify-between items-center text-sm">
              <div className="flex gap-4 items-center">
                <a href={CONTACT.phoneLink} className="flex items-center gap-1 text-[#8b7355] hover:text-[#6b5335] transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>{CONTACT.phone}</span>
                </a>
                <a href={CONTACT.emailLink} className="hidden md:flex items-center gap-1 text-[#8b7355] hover:text-[#6b5335] transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>{CONTACT.email}</span>
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex gap-3">
                  <button 
                    onClick={handleInstagramClick}
                    className="text-[#8b7355] hover:text-[#6b5335] transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={handleWhatsAppClick}
                    className="text-[#8b7355] hover:text-[#6b5335] transition-colors"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={handleTikTokClick}
                    className="text-[#8b7355] hover:text-[#6b5335] transition-colors"
                    aria-label="TikTok"
                  >
                    <Music2 className="w-4 h-4" />
                  </button>
                </div>
                <button
                  onClick={toggleLanguage}
                  className="px-3 py-1 bg-[#8b7355] text-white rounded hover:bg-[#6b5335] transition-colors"
                >
                  {language === 'fr' ? 'AR' : 'FR'}
                </button>
              </div>
            </div>
          </div>

          {/* Main navigation */}
          <div className="py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-2xl text-[#8b7355]">{SETTINGS.siteName}</span>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex gap-8 items-center">
                <a href="#home" className="text-[#8b7355] hover:text-[#6b5335] transition-colors uppercase tracking-wide">{t.nav.home}</a>
                <a href="#about" className="text-[#8b7355] hover:text-[#6b5335] transition-colors uppercase tracking-wide">{t.nav.about}</a>
                <a href="#services" className="text-[#8b7355] hover:text-[#6b5335] transition-colors uppercase tracking-wide">{t.nav.services}</a>
                <a href="#gallery" className="text-[#8b7355] hover:text-[#6b5335] transition-colors uppercase tracking-wide">{t.nav.gallery}</a>
                <a href="#contact" className="text-[#8b7355] hover:text-[#6b5335] transition-colors uppercase tracking-wide">{t.nav.contact}</a>
              </nav>

              {/* Mobile menu button */}
              <button
                className="md:hidden text-[#8b7355]"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
                <a href="#home" className="text-[#8b7355] hover:text-[#6b5335] transition-colors uppercase tracking-wide" onClick={() => setMobileMenuOpen(false)}>{t.nav.home}</a>
                <a href="#about" className="text-[#8b7355] hover:text-[#6b5335] transition-colors uppercase tracking-wide" onClick={() => setMobileMenuOpen(false)}>{t.nav.about}</a>
                <a href="#services" className="text-[#8b7355] hover:text-[#6b5335] transition-colors uppercase tracking-wide" onClick={() => setMobileMenuOpen(false)}>{t.nav.services}</a>
                <a href="#gallery" className="text-[#8b7355] hover:text-[#6b5335] transition-colors uppercase tracking-wide" onClick={() => setMobileMenuOpen(false)}>{t.nav.gallery}</a>
                <a href="#contact" className="text-[#8b7355] hover:text-[#6b5335] transition-colors uppercase tracking-wide" onClick={() => setMobileMenuOpen(false)}>{t.nav.contact}</a>
              </nav>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen mt-[120px] md:mt-[100px]">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={IMAGES.hero}
            alt="Modern Kitchen Design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-white text-4xl md:text-6xl tracking-widest mb-6" style={{ fontFamily: 'serif' }}>
              {t.hero.title}
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-8 tracking-wide uppercase">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#8b7355] hover:bg-[#6b5335] text-white px-8 py-6 uppercase tracking-wider"
              >
                {t.hero.cta1}
              </Button>
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-[#8b7355] px-8 py-6 uppercase tracking-wider"
              >
                {t.hero.cta2}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-4 text-[#8b7355] tracking-wider" style={{ fontFamily: 'serif' }}>
                {t.about.title}
              </h2>
              <h3 className="text-xl md:text-2xl mb-6 text-[#6b5335] uppercase tracking-wide">
                {t.about.subtitle}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {t.about.description}
              </p>
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#8b7355] hover:bg-[#6b5335] text-white px-8 py-6 uppercase tracking-wider"
              >
                {t.hero.cta2}
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <ImageWithFallback
                  src={IMAGES.aboutImage1}
                  alt="Kitchen Interior"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <ImageWithFallback
                  src={IMAGES.aboutImage2}
                  alt="Living Room"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#2a2a2a] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl md:text-4xl mb-16 tracking-widest uppercase" style={{ fontFamily: 'serif' }}>
            {t.services.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-[#3a3a3a] border-[#8b7355] p-8 text-center hover:bg-[#4a4a4a] transition-colors">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-[#8b7355] rounded-full flex items-center justify-center">
                  <span className="text-2xl">1</span>
                </div>
              </div>
              <h3 className="text-xl mb-4 text-[#d4c5b0] uppercase tracking-wide">
                {t.services.service1.title}
              </h3>
              <p className="text-gray-300">
                {t.services.service1.description}
              </p>
            </Card>

            <Card className="bg-[#3a3a3a] border-[#8b7355] p-8 text-center hover:bg-[#4a4a4a] transition-colors">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-[#8b7355] rounded-full flex items-center justify-center">
                  <span className="text-2xl">2</span>
                </div>
              </div>
              <h3 className="text-xl mb-4 text-[#d4c5b0] uppercase tracking-wide">
                {t.services.service2.title}
              </h3>
              <p className="text-gray-300">
                {t.services.service2.description}
              </p>
            </Card>

            <Card className="bg-[#3a3a3a] border-[#8b7355] p-8 text-center hover:bg-[#4a4a4a] transition-colors">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-[#8b7355] rounded-full flex items-center justify-center">
                  <span className="text-2xl">3</span>
                </div>
              </div>
              <h3 className="text-xl mb-4 text-[#d4c5b0] uppercase tracking-wide">
                {t.services.service3.title}
              </h3>
              <p className="text-gray-300">
                {t.services.service3.description}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl md:text-4xl mb-16 text-[#8b7355] tracking-widest uppercase" style={{ fontFamily: 'serif' }}>
            {t.gallery.title}
          </h2>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {IMAGES.gallery.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <ImageWithFallback
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-80 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-[#8b7355] text-[#8b7355] hover:bg-[#8b7355] hover:text-white" />
            <CarouselNext className="border-[#8b7355] text-[#8b7355] hover:bg-[#8b7355] hover:text-white" />
          </Carousel>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#2a2a2a] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl md:text-4xl mb-16 tracking-widest uppercase" style={{ fontFamily: 'serif' }}>
            {t.contact.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-4 text-[#8b7355]" />
              <h3 className="text-xl mb-2 text-[#d4c5b0]">{t.contact.phone}</h3>
              <a href={CONTACT.phoneLink} className="text-gray-300 hover:text-white">
                {CONTACT.phone}
              </a>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 mx-auto mb-4 text-[#8b7355]" />
              <h3 className="text-xl mb-2 text-[#d4c5b0]">{t.contact.email}</h3>
              <a href={CONTACT.emailLink} className="text-gray-300 hover:text-white">
                {CONTACT.email}
              </a>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-[#8b7355]" />
              <h3 className="text-xl mb-2 text-[#d4c5b0]">{t.contact.address}</h3>
              <p className="text-gray-300">{t.contact.addressText}</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl mb-6 text-[#d4c5b0]">{t.contact.social}</h3>
            <div className="flex justify-center gap-6">
              <button
                onClick={handleInstagramClick}
                className="w-12 h-12 bg-[#8b7355] rounded-full flex items-center justify-center hover:bg-[#6b5335] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="w-12 h-12 bg-[#8b7355] rounded-full flex items-center justify-center hover:bg-[#6b5335] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-6 h-6" />
              </button>
              <button
                onClick={handleTikTokClick}
                className="w-12 h-12 bg-[#8b7355] rounded-full flex items-center justify-center hover:bg-[#6b5335] transition-colors"
                aria-label="TikTok"
              >
                <Music2 className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Cuisine Meknes. {language === 'fr' ? 'Tous droits réservés.' : 'جميع الحقوق محفوظة.'}</p>
        </div>
      </footer>
    </div>
  );
}
