
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Calendar,
  CalendarCheck,
  Clock,
  MapPin,
  MessageSquare,
  Star,
  Video,
  User
} from "lucide-react";
import { getSkillsWithTeachers, users } from "@/data/mockData";
import { useState } from "react";

const SkillDetail = () => {
  const { id } = useParams<{ id: string }>();
  const allSkills = getSkillsWithTeachers();
  const skill = allSkills.find((s) => s.id === id);
  
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  
  // Mock available dates (next 7 days)
  const availableDates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i + 1);
    return date.toISOString().split('T')[0];
  });
  
  // Mock time slots
  const timeSlots = [
    "09:00-10:30",
    "11:00-12:30",
    "14:00-15:30",
    "16:00-17:30",
    "18:00-19:30",
  ];
  
  if (!skill) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold text-skillswap-dark mb-4">Skill Not Found</h1>
            <p className="text-skillswap-neutral mb-6">The skill you're looking for does not exist or has been removed.</p>
            <Button asChild>
              <Link to="/discover">Browse Skills</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const teacher = users.find(u => u.id === skill.teacher.id);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Skill Information - Left Column */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <div className="flex items-center mb-2">
                  <Link to="/discover" className="text-skillswap-primary hover:underline text-sm">
                    All Skills
                  </Link>
                  <span className="mx-2 text-skillswap-neutral">/</span>
                  <span className="text-skillswap-neutral text-sm">{skill.category}</span>
                </div>
                
                <h1 className="text-3xl font-bold text-skillswap-dark mb-2">{skill.title}</h1>
                
                <div className="flex items-center space-x-3 mb-4">
                  <Badge variant="outline" className="bg-skillswap-light text-skillswap-secondary">
                    {skill.category}
                  </Badge>
                  
                  <div className="flex space-x-2">
                    {skill.isVirtual && (
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                        <Video className="h-3 w-3 mr-1" />
                        Virtual
                      </Badge>
                    )}
                    {skill.isInPerson && (
                      <Badge variant="secondary" className="bg-green-100 text-green-700">
                        <MapPin className="h-3 w-3 mr-1" />
                        In Person
                      </Badge>
                    )}
                  </div>
                </div>
                
                <p className="text-skillswap-neutral">{skill.description}</p>
              </div>
              
              <Tabs defaultValue="about">
                <TabsList className="mb-4">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  <TabsTrigger value="materials">Learning Materials</TabsTrigger>
                </TabsList>
                
                <TabsContent value="about" className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-skillswap-dark mb-2">What You'll Learn</h3>
                    <ul className="list-disc list-inside space-y-1 text-skillswap-neutral">
                      <li>Fundamentals and core concepts of {skill.title}</li>
                      <li>Practical applications and real-world examples</li>
                      <li>Personalized guidance based on your learning goals</li>
                      <li>Interactive sessions with hands-on practice</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-skillswap-dark mb-2">Requirements</h3>
                    <ul className="list-disc list-inside space-y-1 text-skillswap-neutral">
                      <li>No prior knowledge required - beginners welcome!</li>
                      <li>Open mind and willingness to learn</li>
                      <li>Specific tools or materials will be discussed before the session</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-skillswap-dark mb-2">Session Format</h3>
                    <p className="text-skillswap-neutral">
                      Sessions are typically 90 minutes long. The first part focuses on theory and concepts, 
                      followed by practical exercises and Q&A. Sessions can be tailored to your specific 
                      learning goals and pace.
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="reviews">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-skillswap-dark">Student Reviews</h3>
                      <Badge variant="outline">5.0 (8 reviews)</Badge>
                    </div>
                    
                    {/* Mock reviews */}
                    {[1, 2, 3].map((review) => (
                      <Card key={review}>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-3">
                              <Avatar>
                                <AvatarImage src={`https://source.unsplash.com/random/100x100?face=${review}`} />
                                <AvatarFallback>UR</AvatarFallback>
                              </Avatar>
                              <div>
                                <h4 className="font-medium text-skillswap-dark">User Review {review}</h4>
                                <p className="text-xs text-skillswap-neutral">2 months ago</p>
                              </div>
                            </div>
                            <div className="flex items-center text-amber-500">
                              <Star className="h-4 w-4 fill-current" />
                              <Star className="h-4 w-4 fill-current" />
                              <Star className="h-4 w-4 fill-current" />
                              <Star className="h-4 w-4 fill-current" />
                              <Star className="h-4 w-4 fill-current" />
                            </div>
                          </div>
                          <p className="text-skillswap-neutral">
                            Great learning experience! The teacher was knowledgeable and patient. 
                            I learned a lot in just one session and look forward to learning more.
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="materials">
                  <div className="space-y-4">
                    <p className="text-skillswap-neutral">
                      The teacher will provide learning materials before or during the session. 
                      This may include resources like:
                    </p>
                    
                    <ul className="list-disc list-inside space-y-1 text-skillswap-neutral">
                      <li>PDF guides and cheat sheets</li>
                      <li>Practice exercises</li>
                      <li>Recommended reading materials</li>
                      <li>Online resources and tutorials</li>
                    </ul>
                    
                    <p className="text-skillswap-neutral">
                      You can discuss specific learning materials or resources during your booking.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Booking Card - Right Column */}
            <div>
              <Card className="sticky top-24">
                <CardHeader className="pb-2">
                  <CardTitle>Book a Session</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Teacher info */}
                  <div className="flex items-center space-x-3 pb-4 border-b">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={skill.teacher.avatar} alt={skill.teacher.name} />
                      <AvatarFallback>{skill.teacher.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-skillswap-dark">{skill.teacher.name}</h4>
                      <div className="flex items-center text-amber-500">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="ml-1 text-xs">{skill.teacher.rating.toFixed(1)}</span>
                        <span className="mx-1 text-skillswap-neutral">•</span>
                        <Link to={`/profile/${skill.teacher.id}`} className="text-xs text-skillswap-primary hover:underline">
                          View Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  {/* Date selection */}
                  <div>
                    <h4 className="font-medium text-skillswap-dark mb-2 flex items-center">
                      <Calendar className="h-4 w-4 mr-1" /> Select Date
                    </h4>
                    <div className="grid grid-cols-3 gap-2">
                      {availableDates.slice(0, 6).map((date) => {
                        const d = new Date(date);
                        const formattedDate = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
                        const isSelected = selectedDate === date;
                        
                        return (
                          <Button
                            key={date}
                            variant={isSelected ? "default" : "outline"}
                            className={`h-auto py-2 px-1 ${isSelected ? 'bg-skillswap-primary' : ''}`}
                            onClick={() => setSelectedDate(date)}
                          >
                            <div className="text-xs">{formattedDate}</div>
                          </Button>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Time slot selection */}
                  {selectedDate && (
                    <div>
                      <h4 className="font-medium text-skillswap-dark mb-2 flex items-center">
                        <Clock className="h-4 w-4 mr-1" /> Select Time
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {timeSlots.map((time) => {
                          const isSelected = selectedTimeSlot === time;
                          
                          return (
                            <Button
                              key={time}
                              variant={isSelected ? "default" : "outline"}
                              className={`h-auto py-2 ${isSelected ? 'bg-skillswap-primary' : ''}`}
                              onClick={() => setSelectedTimeSlot(time)}
                            >
                              <div className="text-xs">{time}</div>
                            </Button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                  
                  {/* Contact or book */}
                  <div className="pt-4">
                    <Button
                      className="w-full bg-skillswap-primary hover:bg-skillswap-secondary mb-2"
                      disabled={!selectedDate || !selectedTimeSlot}
                    >
                      <CalendarCheck className="h-4 w-4 mr-2" />
                      Book Session
                    </Button>
                    
                    <Button variant="outline" className="w-full border-skillswap-primary text-skillswap-primary">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Message Teacher
                    </Button>
                  </div>
                  
                  {/* Session info */}
                  <div className="text-xs text-skillswap-neutral pt-2">
                    <p>• Sessions are typically 90 minutes</p>
                    <p>• Virtual sessions conducted via Zoom or similar platform</p>
                    <p>• Specific requirements will be discussed after booking</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SkillDetail;
