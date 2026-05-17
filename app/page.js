import Hero from '@/components/home/Hero';
import Partners from '@/components/home/Partners';
import Services from '@/components/home/Services';
import Products from '@/components/home/Products';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import CTA from '@/components/home/CTA';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Partners />
      <Services />
      <Products />
      <WhyChooseUs />
      <CTA />
    </main>
  );
}
