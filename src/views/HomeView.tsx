'use client';
import HeroSection from '@/components/organisms/HeroSection';
import ServicesSection from '@/components/organisms/ServicesSection';
import DoctorsPreviewSection from '@/components/organisms/DoctorsPreviewSection';
import AboutSection from '@/components/organisms/AboutSection';
import HowItWorksSection from '@/components/organisms/HowItWorksSection';
import CtaBanner from '@/components/organisms/CtaBanner';

export default function HomeView() {
  return (
    <div className="w-full animate-fade-in">
      <HeroSection />
      <ServicesSection />
      <DoctorsPreviewSection />
      <AboutSection />
      <HowItWorksSection />
      <CtaBanner />
    </div>
  );
}
