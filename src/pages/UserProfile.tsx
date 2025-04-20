
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Mail, Calendar, MapPin, Star, Phone, ArrowLeft } from "lucide-react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { users } from "@/data/mockData";
import { toast } from "sonner";

const UserProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = users.find(u => u.id === id) || users[0];
  
  // Add mock email and phone for demo purposes
  const userEmail = `${user.name.toLowerCase().replace(/\s+/g, '.')}@example.com`;
  const userPhone = "+1 (555) 123-4567";

  const handleMessage = () => {
    toast.success("Message request sent to " + user.name);
    navigate("/messages");
  };

  const handleSchedule = () => {
    toast.success("Opening scheduler with " + user.name);
    navigate("/bookings");
  };

  const handleEmail = () => {
    toast.success("Opening email composer");
    window.location.href = `mailto:${userEmail}`;
  };

  const handlePhone = () => {
    toast.success("Opening phone dialer");
    window.location.href = `tel:${userPhone}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-skillswap-light/20 to-skillswap-primary/5">
      <Navbar />
      <main className="container mx-auto px-4 py-8 animate-fade-in">
        <Button 
          variant="ghost" 
          className="mb-6 text-skillswap-neutral hover:text-skillswap-primary"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <Card className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm shadow-lg">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Profile Header */}
              <div className="flex flex-col items-center md:items-start">
                <Avatar className="w-32 h-32 mb-4 border-4 border-skillswap-light shadow-lg">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="text-2xl bg-skillswap-primary text-white">
                    {user.name.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-center md:items-start gap-2">
                  <h1 className="text-3xl font-bold text-skillswap-dark">{user.name}</h1>
                  <div className="flex items-center gap-2 text-skillswap-neutral">
                    <MapPin className="h-4 w-4" />
                    <span>{user.location}</span>
                  </div>
                  <div className="flex items-center text-amber-500">
                    <Star className="h-5 w-5 fill-current" />
                    <span className="ml-1 text-lg font-semibold">{user.rating.toFixed(1)}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row md:ml-auto gap-3 justify-center md:justify-end">
                <Button 
                  onClick={handleMessage}
                  className="bg-skillswap-primary hover:bg-skillswap-secondary text-white transition-all"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Message
                </Button>
                <Button 
                  variant="outline"
                  onClick={handleSchedule}
                  className="border-skillswap-primary text-skillswap-primary hover:bg-skillswap-light transition-all"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule
                </Button>
              </div>
            </div>

            {/* About Section */}
            <div className="mt-8 space-y-6">
              <section>
                <h2 className="text-xl font-semibold text-skillswap-dark mb-3">About</h2>
                <p className="text-skillswap-neutral leading-relaxed">{user.bio}</p>
              </section>

              {/* Skills Sections */}
              <section className="grid md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-xl font-semibold text-skillswap-dark mb-3">Skills Teaching</h2>
                  <div className="flex flex-wrap gap-2">
                    {user.skillsOffered.map((skill) => (
                      <Badge 
                        key={skill} 
                        className="bg-skillswap-light text-skillswap-secondary hover:bg-skillswap-light/80 transition-colors px-3 py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-skillswap-dark mb-3">Skills Learning</h2>
                  <div className="flex flex-wrap gap-2">
                    {user.skillsWanted.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="outline"
                        className="border-skillswap-neutral/30 hover:bg-skillswap-light/50 transition-colors px-3 py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </section>

              {/* Contact Section */}
              <section>
                <h2 className="text-xl font-semibold text-skillswap-dark mb-3">Contact</h2>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    variant="outline" 
                    onClick={handleEmail}
                    className="border-skillswap-primary text-skillswap-primary hover:bg-skillswap-light transition-all"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={handlePhone}
                    className="border-skillswap-primary text-skillswap-primary hover:bg-skillswap-light transition-all"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Phone
                  </Button>
                </div>
              </section>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default UserProfile;
