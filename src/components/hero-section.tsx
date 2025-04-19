
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-skillswap-primary/10 to-skillswap-light/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-skillswap-dark leading-tight">
              Swap Skills, Grow Together
            </h1>
            <p className="text-lg text-skillswap-neutral leading-relaxed">
              Trade your expertise for knowledge you seek. SkillSwap connects people who want to teach what they know and learn what they don't.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-skillswap-primary hover:bg-skillswap-secondary" asChild>
                <Link to="/signup">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-skillswap-primary text-skillswap-primary hover:bg-skillswap-light" asChild>
                <Link to="/discover">Explore Skills</Link>
              </Button>
            </div>
            <div className="text-sm text-skillswap-neutral pt-2">
              Already teaching or learning? <Link to="/login" className="text-skillswap-primary hover:underline">Log in</Link>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="relative z-10 rounded-lg shadow-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="People learning together" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-lg bg-skillswap-primary/20 z-0"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-lg bg-skillswap-secondary/20 z-0"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full bg-skillswap-primary/10 z-0"></div>
      <div className="absolute -top-12 -left-12 w-80 h-80 rounded-full bg-skillswap-secondary/5 z-0"></div>
    </div>
  );
};

export default HeroSection;
