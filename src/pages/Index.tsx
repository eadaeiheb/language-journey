import { HeroSection } from "@/components/HeroSection";
import { LanguageCard } from "@/components/LanguageCard";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { AnimatedText } from "@/components/AnimatedText";

const languages = [
  { language: "Spanish", icon: "/placeholder.svg", learners: "2M+" },
  { language: "French", icon: "/placeholder.svg", learners: "1.5M+" },
  { language: "German", icon: "/placeholder.svg", learners: "1M+" },
  { language: "Japanese", icon: "/placeholder.svg", learners: "800K+" },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      <section className="py-20 bg-soft-gray">
        <AnimatedText
          text="Popular Languages"
          className="text-3xl font-bold text-center mb-12"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 max-w-7xl mx-auto">
          {languages.map((lang, index) => (
            <AnimatedText
              key={lang.language}
              text=""
              delay={index * 100}
            >
              <LanguageCard {...lang} />
            </AnimatedText>
          ))}
        </div>
      </section>
      
      <section className="py-20">
        <AnimatedText
          text="Why Choose Us"
          className="text-3xl font-bold text-center mb-12"
        />
        <FeaturesGrid />
      </section>
    </div>
  );
};

export default Index;