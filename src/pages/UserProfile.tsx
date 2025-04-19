
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MessageSquare, Mail, Calendar, MapPin, Star } from "lucide-react";
import { useParams } from "react-router-dom";
import { users } from "@/data/mockData";
import { toast } from "sonner";

const UserProfile = () => {
  const { id } = useParams();
  const user = users.find(u => u.id === id) || users[0]; // Fallback to first user if not found

  const handleMessage = () => {
    toast.success("Message request sent!");
  };

  const handleSchedule = () => {
    toast.success("Scheduling request sent!");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardHeader className="pb-4">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <Avatar className="w-24 h-24">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div className="flex-grow">
                <h1 className="text-3xl font-bold text-skillswap-dark mb-2">{user.name}</h1>
                <div className="flex flex-wrap items-center gap-3 text-skillswap-neutral">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{user.location}</span>
                  </div>
                  <div className="flex items-center text-amber-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1">{user.rating.toFixed(1)}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <Button onClick={handleMessage} className="bg-skillswap-primary hover:bg-skillswap-secondary">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Message
                </Button>
                <Button variant="outline" onClick={handleSchedule} className="border-skillswap-primary text-skillswap-primary hover:bg-skillswap-light">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-skillswap-dark mb-3">About</h2>
              <p className="text-skillswap-neutral">{user.bio}</p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-skillswap-dark mb-3">Skills Teaching</h2>
              <div className="flex flex-wrap gap-2">
                {user.skillsOffered.map((skill) => (
                  <Badge key={skill} className="bg-skillswap-light text-skillswap-secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-skillswap-dark mb-3">Skills Learning</h2>
              <div className="flex flex-wrap gap-2">
                {user.skillsWanted.map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-skillswap-dark mb-3">Contact</h2>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" className="border-skillswap-primary text-skillswap-primary hover:bg-skillswap-light">
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default UserProfile;
