
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import HeroAnimation from "./HeroAnimation";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-100 py-20 md:py-28">
      <HeroAnimation />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-xl">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="text-gradient">Swap Skills,</span>
              <br />
              <span className="text-indigo-900">Grow Together</span>
            </h1>
            <p className="text-xl text-indigo-700 leading-relaxed">
              Trade your expertise for knowledge you seek. SkillSwap connects people who want to teach what they know and learn what they don't.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-skillswap-primary to-indigo-600 hover:from-indigo-600 hover:to-skillswap-primary text-white px-8 py-6 text-lg font-semibold transition-all transform hover:scale-105 shadow-lg" 
                asChild
              >
                <Link to="/signup">Get Started</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-skillswap-primary text-skillswap-primary hover:bg-skillswap-light px-8 py-6 text-lg font-semibold transition-all backdrop-blur-sm shadow-md" 
                asChild
              >
                <Link to="/discover">Explore Skills</Link>
              </Button>
            </div>
            <div className="text-base text-indigo-700 pt-4">
              Already teaching or learning? <Link to="/login" className="text-skillswap-primary hover:text-indigo-900 hover:underline font-semibold">Log in</Link>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="relative z-10 rounded-2xl shadow-xl overflow-hidden transform hover:scale-102 transition-transform duration-300 glass-card">
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
