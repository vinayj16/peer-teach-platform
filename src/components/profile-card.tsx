import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageSquare, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

export interface ProfileCardProps {
  id: string;
  name: string;
  avatar: string;
  location: string;
  rating: number;
  skillsOffered: string[];
  skillsWanted: string[];
  bio: string;
}

const ProfileCard = ({
  id,
  name,
  avatar,
  location,
  rating,
  skillsOffered,
  skillsWanted,
  bio,
}: ProfileCardProps) => {
  const handleMessage = () => {
    toast.success("Message request sent!");
  };

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardHeader className="p-6 flex flex-row items-center space-x-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>{name.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold text-xl">{name}</h3>
          <div className="flex items-center text-sm text-skillswap-neutral mt-1">
            <span>{location}</span>
            <span className="mx-2">•</span>
            <div className="flex items-center text-amber-500">
              <Star className="h-4 w-4 fill-current" />
              <span className="ml-1">{rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-0 space-y-4">
        <p className="text-sm text-skillswap-neutral">{bio}</p>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Skills I Teach</h4>
          <div className="flex flex-wrap gap-2">
            {skillsOffered.map((skill) => (
              <Badge key={skill} variant="outline" className="bg-skillswap-light text-skillswap-secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Skills I Want to Learn</h4>
          <div className="flex flex-wrap gap-2">
            {skillsWanted.map((skill) => (
              <Badge key={skill} variant="outline" className="bg-gray-100 text-gray-700">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="flex space-x-3 pt-2">
          <Button 
            className="flex-1 bg-skillswap-primary hover:bg-skillswap-secondary transition-colors" 
            asChild
          >
            <Link to={`/profile/${id}`}>View Profile</Link>
          </Button>
          <Button 
            variant="outline" 
            className="flex-1 border-skillswap-primary text-skillswap-primary hover:bg-skillswap-light transition-colors"
            onClick={handleMessage}
          >
            <MessageSquare className="h-4 w-4 mr-2" />
            Message
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
