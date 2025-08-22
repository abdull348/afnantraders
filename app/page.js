import Hero from '@/components/home/Hero';
import ServicesOverview from '@/components/home/ServicesOverview';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import CTA from '@/components/home/CTA';
import AboutSection from '@/components/home/ourVision';
import ContactSection from '@/components/home/contactUs';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesOverview />
      <CTA />
      <AboutSection />
      <WhyChooseUs />
      <ContactSection />
    </main>
  );
}
