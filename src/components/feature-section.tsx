
import { Book, Calendar, MessageSquare, Search, Star, Users } from "lucide-react";

const features = [
  {
    icon: <Users className="h-6 w-6 text-skillswap-primary" />,
    title: "Skill Matching",
    description: "Our algorithm finds the perfect skill exchange partners based on what you want to teach and learn."
  },
  {
    icon: <Calendar className="h-6 w-6 text-skillswap-primary" />,
    title: "Easy Scheduling",
    description: "Book virtual or in-person sessions with your matches based on mutual availability."
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-skillswap-primary" />,
    title: "Direct Communication",
    description: "Message your matches to discuss learning goals and coordinate session details."
  },
  {
    icon: <Star className="h-6 w-6 text-skillswap-primary" />,
    title: "Ratings & Reviews",
    description: "Build trust with community feedback and showcase your teaching abilities."
  },
  {
    icon: <Book className="h-6 w-6 text-skillswap-primary" />,
    title: "Learning Resources",
    description: "Access and share study materials, tutorials, and other learning resources."
  },
  {
    icon: <Search className="h-6 w-6 text-skillswap-primary" />,
    title: "Discover Skills",
    description: "Browse through diverse skills offered by our community members near you or online."
  }
];

const FeatureSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-skillswap-dark mb-4">How SkillSwap Works</h2>
          <p className="text-skillswap-neutral">
            Our platform makes it easy to find people to trade knowledge with, schedule sessions, and grow your skills.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <div className="rounded-full bg-skillswap-light p-3 inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-xl mb-2 text-skillswap-dark">{feature.title}</h3>
              <p className="text-skillswap-neutral">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
