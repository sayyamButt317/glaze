import { AdvisorStepsSection } from "@/components/ai-stylist/advisor-steps-section";
import { AiStylistHero } from "@/components/ai-stylist/ai-stylist-hero";
import { RecommendationsSection } from "@/components/ai-stylist/recommendations-section";
import { SiteFooter } from "@/components/marketing/site-footer";
import { SiteHeader } from "@/components/marketing/site-header";

export function AiStylistPageView() {
  return (
    <div className="min-h-screen bg-white text-neutral-950">
      <SiteHeader variant="advisor" />
      <main>
        <AiStylistHero />
        <AdvisorStepsSection />
        <RecommendationsSection />
      </main>
      <SiteFooter />
    </div>
  );
}
