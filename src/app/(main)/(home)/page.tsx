import { ExperienceSectionComponent, FeatureSectionComponent, HeroSectionComponent, TradeAppSectionComponent } from "./_components";



export default function Home() {
   return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <HeroSectionComponent />
        {/* Features Section */}
        <FeatureSectionComponent />
        {/* Experience Section */}
        <ExperienceSectionComponent />
        {/* Trade App Section */}
        <TradeAppSectionComponent />
      </div>
   );
}
