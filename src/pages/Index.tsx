
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import HeroSection from "@/components/hero-section";
import FeatureSection from "@/components/feature-section";
import TestimonialSection from "@/components/testimonial-section";
import SkillCard from "@/components/skill-card";
import ProfileCard from "@/components/profile-card";
import { Button } from "@/components/ui/button";
import { getSkillsWithTeachers, users } from "@/data/mockData";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredSkills = getSkillsWithTeachers().slice(0, 4);
  const featuredTeachers = users.slice(0, 3);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        <FeatureSection />
        
        {/* Featured Skills Section with improved styling */}
        <section className="py-16 bg-gradient-to-br from-white to-skillswap-light/20">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold text-skillswap-dark mb-2">Featured Skills</h2>
                <p className="text-skillswap-neutral text-lg">Discover popular skills in our community</p>
              </div>
              <Button 
                variant="ghost" 
                className="text-skillswap-primary hover:text-skillswap-secondary hover:bg-skillswap-light/50 transition-all" 
                asChild
              >
                <Link to="/discover">View All Skills</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredSkills.map((skill) => (
                <SkillCard
                  key={skill.id}
                  id={skill.id}
                  title={skill.title}
                  category={skill.category}
                  description={skill.description}
                  teacher={skill.teacher}
                  isVirtual={skill.isVirtual}
                  isInPerson={skill.isInPerson}
                />
              ))}
            </div>
          </div>
        </section>
        
        <TestimonialSection />
        
        {/* Featured Teachers Section with improved styling */}
        <section className="py-16 bg-gradient-to-br from-skillswap-light/30 to-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold text-skillswap-dark mb-2">Meet Our Teachers</h2>
                <p className="text-skillswap-neutral text-lg">Learn from experienced mentors</p>
              </div>
              <Button 
                variant="ghost" 
                className="text-skillswap-primary hover:text-skillswap-secondary hover:bg-skillswap-light/50 transition-all" 
                asChild
              >
                <Link to="/teachers">Browse All Teachers</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredTeachers.map((teacher) => (
                <ProfileCard
                  key={teacher.id}
                  id={teacher.id}
                  name={teacher.name}
                  avatar={teacher.avatar}
                  location={teacher.location}
                  rating={teacher.rating}
                  skillsOffered={teacher.skillsOffered}
                  skillsWanted={teacher.skillsWanted}
                  bio={teacher.bio}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section with improved styling */}
        <section className="py-16 bg-gradient-to-br from-skillswap-primary/5 via-skillswap-light/20 to-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-skillswap-dark mb-4">Ready to Start Learning and Teaching?</h2>
            <p className="text-skillswap-neutral text-lg max-w-2xl mx-auto mb-8">
              Join our community of learners and teachers today. Share your skills and discover new ones.
            </p>
            <Button 
              size="lg" 
              className="bg-skillswap-primary hover:bg-skillswap-secondary text-white font-semibold px-8 py-6 text-lg transition-all transform hover:scale-105" 
              asChild
            >
              <Link to="/signup">Join SkillSwap</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
