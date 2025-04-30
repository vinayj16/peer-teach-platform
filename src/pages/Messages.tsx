
import React, { useState } from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { toast } from "@/components/ui/use-toast";
import { MessageSquare, Video, Calendar, UserPlus, ArrowRight } from "lucide-react";

const MOCK_MESSAGES = [
  {
    id: 1,
    user: "Sophia Lee",
    avatar: "https://i.pravatar.cc/150?img=5",
    lastMessage: "Hey, are we still meeting tomorrow for the design session?",
    time: "10:30 AM",
    unread: true,
  },
  {
    id: 2,
    user: "Marcus Chen",
    avatar: "https://i.pravatar.cc/150?img=12",
    lastMessage: "Thanks for the guitar lesson! I've been practicing those chords.",
    time: "Yesterday",
    unread: false,
  },
  {
    id: 3,
    user: "Taylor Wilson",
    avatar: "https://i.pravatar.cc/150?img=8",
    lastMessage: "Your coding tips were super helpful! When can we schedule another session?",
    time: "2 days ago",
    unread: true,
  }
];

const Messages = () => {
  const [activeChat, setActiveChat] = useState<number | null>(null);
  const [messages, setMessages] = useState(MOCK_MESSAGES);

  const handleJoinSession = (userId: number) => {
    // In a real app, this would connect to a video call service
    toast({
      title: "Joining session",
      description: `Connecting to video call with ${messages.find(m => m.id === userId)?.user}...`,
    });
    
    // For demonstration, we'll just show a toast
    setTimeout(() => {
      toast({
        title: "Session started",
        description: "You've successfully joined the video session",
        variant: "success",
      });
    }, 1500);
  };

  const selectChat = (id: number) => {
    setActiveChat(id);
    // Mark as read when selected
    setMessages(messages.map(msg => 
      msg.id === id ? {...msg, unread: false} : msg
    ));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="container mx-auto flex-grow p-4">
        <h1 className="text-3xl font-bold text-skillswap-dark mb-6">Messages</h1>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Message List */}
          <Card className="md:col-span-1 p-4 h-[calc(100vh-220px)] overflow-y-auto">
            <h2 className="font-semibold text-lg mb-4 text-skillswap-dark border-b pb-2">Conversations</h2>
            <div className="space-y-3">
              {messages.map((msg) => (
                <div 
                  key={msg.id}
                  className={`p-3 rounded-lg cursor-pointer transition-all ${
                    activeChat === msg.id 
                      ? 'bg-skillswap-primary/10 border-l-4 border-skillswap-primary' 
                      : 'hover:bg-gray-100'
                  }`}
                  onClick={() => selectChat(msg.id)}
                >
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <img src={msg.avatar} alt={msg.user} className="object-cover" />
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium text-skillswap-dark truncate">{msg.user}</h3>
                        <span className="text-xs text-gray-500">{msg.time}</span>
                      </div>
                      <p className={`text-sm truncate ${msg.unread ? 'font-medium text-skillswap-dark' : 'text-gray-500'}`}>
                        {msg.lastMessage}
                      </p>
                    </div>
                    {msg.unread && (
                      <div className="w-3 h-3 bg-skillswap-primary rounded-full"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Chat Area */}
          <Card className="md:col-span-2 flex flex-col h-[calc(100vh-220px)]">
            {activeChat ? (
              <>
                <div className="p-4 border-b flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <img 
                        src={messages.find(m => m.id === activeChat)?.avatar} 
                        alt={messages.find(m => m.id === activeChat)?.user} 
                        className="object-cover"
                      />
                    </Avatar>
                    <h3 className="font-semibold text-skillswap-dark">
                      {messages.find(m => m.id === activeChat)?.user}
                    </h3>
                  </div>
                  
                  <div className="flex gap-2">
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          Schedule
                        </Button>
                      </SheetTrigger>
                      <SheetContent>
                        <SheetHeader>
                          <SheetTitle>Schedule a Session</SheetTitle>
                        </SheetHeader>
                        <div className="py-6">
                          <p className="text-skillswap-dark mb-4">
                            Select a date and time to schedule your next skill exchange session with 
                            {" " + messages.find(m => m.id === activeChat)?.user}.
                          </p>
                          {/* Calendar would go here in a real implementation */}
                          <Button className="mt-4 w-full">
                            Confirm Schedule
                          </Button>
                        </div>
                      </SheetContent>
                    </Sheet>
                    
                    <Button 
                      onClick={() => handleJoinSession(activeChat)}
                      className="bg-skillswap-primary hover:bg-indigo-600"
                    >
                      <Video className="h-4 w-4 mr-1" />
                      Join Session
                    </Button>
                  </div>
                </div>
                
                <div className="flex-grow p-4 bg-gray-50 overflow-y-auto">
                  {/* Message content would go here */}
                  <div className="flex justify-center items-center h-full text-gray-400">
                    <p className="text-center">Select a message to view conversation history</p>
                  </div>
                </div>
                
                <div className="p-4 border-t">
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      className="flex-grow rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-skillswap-primary"
                      placeholder="Type your message..."
                    />
                    <Button>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-full">
                <MessageSquare className="h-16 w-16 text-gray-300 mb-4" />
                <h2 className="text-xl font-semibold text-skillswap-dark mb-2">Your Messages</h2>
                <p className="text-gray-500 mb-6 text-center max-w-md">
                  Select a conversation or start a new one to begin messaging
                </p>
                <Button className="bg-skillswap-primary hover:bg-indigo-600">
                  <UserPlus className="h-4 w-4 mr-2" />
                  New Message
                </Button>
              </div>
            )}
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Messages;
