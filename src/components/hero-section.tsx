
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white via-skillswap-light/20 to-skillswap-primary/5 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-xl">
            <h1 className="text-5xl md:text-6xl font-bold text-skillswap-dark leading-tight">
              <span className="text-skillswap-primary">Swap Skills,</span>
              <br />
              Grow Together
            </h1>
            <p className="text-xl text-skillswap-neutral leading-relaxed">
              Trade your expertise for knowledge you seek. SkillSwap connects people who want to teach what they know and learn what they don't.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-skillswap-primary hover:bg-skillswap-secondary text-white px-8 py-6 text-lg font-semibold transition-all transform hover:scale-105" 
                asChild
              >
                <Link to="/signup">Get Started</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-skillswap-primary text-skillswap-primary hover:bg-skillswap-light px-8 py-6 text-lg font-semibold transition-all" 
                asChild
              >
                <Link to="/discover">Explore Skills</Link>
              </Button>
            </div>
            <div className="text-base text-skillswap-neutral pt-4">
              Already teaching or learning? <Link to="/login" className="text-skillswap-primary hover:text-skillswap-secondary hover:underline font-semibold">Log in</Link>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="relative z-10 rounded-2xl shadow-xl overflow-hidden transform hover:scale-102 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="People learning together" 
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full bg-skillswap-primary/20 z-0 animate-pulse"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-skillswap-secondary/20 z-0 animate-pulse"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full bg-skillswap-primary/10 z-0"></div>
      <div className="absolute -top-12 -left-12 w-80 h-80 rounded-full bg-skillswap-secondary/5 z-0"></div>
    </div>
  );
};

export default HeroSection;
