import { HeroSection } from '@/components/home/HeroSection';
import { ServicesPreview } from '@/components/home/ServicesPreview';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { ProcessSteps } from '@/components/home/ProcessSteps';
import { Testimonials } from '@/components/home/Testimonials';
import { CTASection } from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <FeaturedProjects />
      <ProcessSteps />
      <Testimonials />
      <CTASection />
    </>
  );
}
