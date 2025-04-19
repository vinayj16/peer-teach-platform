
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

export interface SkillCardProps {
  id: string;
  title: string;
  category: string;
  description: string;
  teacher: {
    id: string;
    name: string;
    avatar: string;
    rating: number;
  };
  isVirtual: boolean;
  isInPerson: boolean;
}

const SkillCard = ({
  id,
  title,
  category,
  description,
  teacher,
  isVirtual,
  isInPerson,
}: SkillCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
      <CardHeader className="p-4 pb-2 space-y-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <Badge variant="outline" className="bg-skillswap-light text-skillswap-secondary">
              {category}
            </Badge>
          </div>
          <div className="flex items-center text-amber-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="ml-1 text-sm">{teacher.rating.toFixed(1)}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2 flex-grow">
        <p className="text-sm text-skillswap-neutral line-clamp-3 mb-4">{description}</p>
        <div className="flex space-x-2 mb-3">
          {isVirtual && (
            <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
              Virtual
            </Badge>
          )}
          {isInPerson && (
            <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-200">
              In Person
            </Badge>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={teacher.avatar} alt={teacher.name} />
            <AvatarFallback>{teacher.name.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <span className="text-xs text-skillswap-neutral">{teacher.name}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-2 border-t">
        <Button className="w-full bg-skillswap-primary hover:bg-skillswap-secondary" asChild>
          <Link to={`/skills/${id}`}>Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SkillCard;
