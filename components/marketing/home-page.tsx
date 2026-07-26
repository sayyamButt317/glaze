import { BestSellersSection } from "@/components/marketing/best-sellers-section";
import { BenefitsSection } from "@/components/marketing/benefits-section";
import { CollectionsSection } from "@/components/marketing/collections-section";
import { FeaturesSection } from "@/components/marketing/features-section";
import { HeroSection } from "@/components/marketing/hero-section";
import { HowItWorksSection } from "@/components/marketing/how-it-works-section";
import { SiteFooter } from "@/components/marketing/site-footer";
import { SiteHeader } from "@/components/marketing/site-header";
import { TrustBar } from "@/components/marketing/trust-bar";
import { TryOnBanner } from "@/components/marketing/try-on-banner";

export function HomePage() {
  return (
    <div className="min-h-screen bg-white text-neutral-950">
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustBar />
        <FeaturesSection />
        <CollectionsSection />
        <TryOnBanner />
        <HowItWorksSection />
        <BenefitsSection />
        <BestSellersSection />
      </main>
      <SiteFooter />
    </div>
  );
}
