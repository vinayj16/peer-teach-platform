
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { CalendarCheck, MessageSquare, Video, MapPin } from "lucide-react";
import { bookings, skills, users } from "@/data/mockData";
import { Link } from "react-router-dom";

// Example of a user ID for the currently logged-in user
const currentUserId = "u1";

const Bookings = () => {
  // Get bookings where the current user is either the teacher or the student
  const userTeachingBookings = bookings.filter(booking => booking.teacherId === currentUserId);
  const userLearningBookings = bookings.filter(booking => booking.studentId === currentUserId);
  
  // Helper function to get skill and user details for a booking
  const getBookingDetails = (booking: typeof bookings[0]) => {
    const skill = skills.find(s => s.id === booking.skillId);
    const teacher = users.find(u => u.id === booking.teacherId);
    const student = users.find(u => u.id === booking.studentId);
    
    return { skill, teacher, student };
  };
  
  // Helper function to render a booking card
  const renderBookingCard = (booking: typeof bookings[0], isTeaching: boolean) => {
    const { skill, teacher, student } = getBookingDetails(booking);
    if (!skill || !teacher || !student) return null;
    
    const otherPerson = isTeaching ? student : teacher;
    
    // Format the date
    const bookingDate = new Date(booking.date);
    const formattedDate = bookingDate.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
    
    return (
      <Card key={booking.id} className="mb-4 bg-white">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={otherPerson.avatar} alt={otherPerson.name} />
                <AvatarFallback>{otherPerson.name.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              
              <div>
                <h3 className="font-semibold text-skillswap-dark">{skill.title}</h3>
                <p className="text-sm text-skillswap-neutral">
                  {isTeaching ? "Teaching" : "Learning from"} {otherPerson.name}
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:items-end">
              <div className="flex space-x-2 mb-2">
                <Badge variant={booking.status === "confirmed" ? "default" : "outline"} className={
                  booking.status === "confirmed" 
                    ? "bg-green-100 text-green-700" 
                    : "bg-amber-100 text-amber-700"
                }>
                  {booking.status === "confirmed" ? "Confirmed" : "Pending"}
                </Badge>
                
                {booking.isVirtual ? (
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    <Video className="h-3 w-3 mr-1" />
                    Virtual
                  </Badge>
                ) : (
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    <MapPin className="h-3 w-3 mr-1" />
                    In Person
                  </Badge>
                )}
              </div>
              
              <p className="text-sm font-medium text-skillswap-dark">{formattedDate}</p>
              <p className="text-sm text-skillswap-neutral">{booking.timeSlot}</p>
            </div>
          </div>
          
          <div className="flex justify-end space-x-3 mt-4">
            <Button variant="outline" className="text-skillswap-primary border-skillswap-primary">
              <MessageSquare className="h-4 w-4 mr-2" />
              Message
            </Button>
            
            {booking.status === "confirmed" && booking.isVirtual && (
              <Button className="bg-skillswap-primary hover:bg-skillswap-secondary">
                <Video className="h-4 w-4 mr-2" />
                Join Session
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    );
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-skillswap-dark mb-2">Your Bookings</h1>
              <p className="text-skillswap-neutral">
                Manage your upcoming teaching and learning sessions.
              </p>
            </div>
            
            <Tabs defaultValue="learning" className="bg-white rounded-md">
              <TabsList className="mb-6 bg-gray-100">
                <TabsTrigger value="learning">Learning Sessions</TabsTrigger>
                <TabsTrigger value="teaching">Teaching Sessions</TabsTrigger>
              </TabsList>
              
              <TabsContent value="learning">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-skillswap-dark">
                      Sessions You're Taking
                    </h2>
                    <Button asChild>
                      <Link to="/discover">
                        <CalendarCheck className="h-4 w-4 mr-2" />
                        Book New Session
                      </Link>
                    </Button>
                  </div>
                  
                  {userLearningBookings.length > 0 ? (
                    <div className="space-y-4">
                      {userLearningBookings.map(booking => renderBookingCard(booking, false))}
                    </div>
                  ) : (
                    <Card>
                      <CardContent className="p-8 text-center">
                        <h3 className="font-semibold text-lg text-skillswap-dark mb-2">
                          No learning sessions booked yet
                        </h3>
                        <p className="text-skillswap-neutral mb-6">
                          Start learning new skills by booking sessions with our teachers.
                        </p>
                        <Button asChild>
                          <Link to="/discover">Browse Skills</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="teaching">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-skillswap-dark">
                      Sessions You're Teaching
                    </h2>
                  </div>
                  
                  {userTeachingBookings.length > 0 ? (
                    <div className="space-y-4">
                      {userTeachingBookings.map(booking => renderBookingCard(booking, true))}
                    </div>
                  ) : (
                    <Card>
                      <CardContent className="p-8 text-center">
                        <h3 className="font-semibold text-lg text-skillswap-dark mb-2">
                          No teaching sessions scheduled yet
                        </h3>
                        <p className="text-skillswap-neutral mb-6">
                          Once someone books a session for a skill you offer, it will appear here.
                        </p>
                        <Button asChild>
                          <Link to="/profile">Manage Your Skills</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Bookings;
