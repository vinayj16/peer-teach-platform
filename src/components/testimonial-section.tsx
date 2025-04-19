
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "I've been teaching guitar for years but always wanted to learn photography. SkillSwap helped me find someone who needed guitar lessons and was willing to teach me photography in exchange. Win-win!",
    author: {
      name: "Michael Rodriguez",
      role: "Guitar Teacher & Photography Student",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      rating: 4.9
    }
  },
  {
    id: 2,
    content: "As a college student, I couldn't afford coding classes, but I was fluent in Spanish. Through SkillSwap, I found a developer who wanted to learn Spanish for an upcoming trip. Now I can code and he can speak Spanish!",
    author: {
      name: "Sophia Chen",
      role: "Spanish Teacher & Coding Student",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      rating: 4.8
    }
  },
  {
    id: 3,
    content: "I was looking for someone to help me with yoga, and in exchange, I could offer cooking lessons. SkillSwap connected me with the perfect match, and now I've improved my flexibility while teaching someone to make delicious meals.",
    author: {
      name: "James Wilson",
      role: "Cooking Teacher & Yoga Student",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      rating: 4.7
    }
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-skillswap-light/50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-skillswap-dark mb-4">Success Stories</h2>
          <p className="text-skillswap-neutral">
            Hear from our community members who have successfully exchanged skills and grown together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-md transition-shadow border-none bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-1 text-amber-500">
                  {Array(5).fill(0).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < Math.floor(testimonial.author.rating) ? 'fill-current' : 'stroke-current fill-none'}`} 
                    />
                  ))}
                  <span className="text-xs text-skillswap-neutral ml-1">
                    ({testimonial.author.rating.toFixed(1)})
                  </span>
                </div>
                
                <p className="text-skillswap-neutral italic">"{testimonial.content}"</p>
                
                <div className="flex items-center space-x-3 pt-2">
                  <Avatar>
                    <AvatarImage src={testimonial.author.avatar} alt={testimonial.author.name} />
                    <AvatarFallback>{testimonial.author.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium text-skillswap-dark">{testimonial.author.name}</h4>
                    <p className="text-xs text-skillswap-neutral">{testimonial.author.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
