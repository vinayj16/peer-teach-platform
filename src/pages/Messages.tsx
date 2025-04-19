
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { BadgeCheck, Send } from "lucide-react";
import { useState } from "react";
import { users } from "@/data/mockData";

interface Message {
  id: string;
  senderId: string;
  recipientId: string;
  content: string;
  timestamp: Date;
  read: boolean;
}

// Mock conversation data
const mockConversations = [
  {
    userId: "u2",
    lastMessage: "Looking forward to our session tomorrow!",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    unread: 1,
  },
  {
    userId: "u3",
    lastMessage: "Thanks for the Italian cooking session! I'll definitely be trying that recipe this weekend.",
    timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
    unread: 0,
  },
  {
    userId: "u4",
    lastMessage: "Are you available next Tuesday for a marketing strategy discussion?",
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    unread: 0,
  },
];

// Mock messages for the selected conversation
const mockMessages: Record<string, Message[]> = {
  "u2": [
    {
      id: "m1",
      senderId: "u2",
      recipientId: "u1",
      content: "Hi Alex! I'm interested in your JavaScript course.",
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000 - 30 * 60 * 1000),
      read: true,
    },
    {
      id: "m2",
      senderId: "u1",
      recipientId: "u2",
      content: "Hello Samantha! That's great to hear. What specific areas are you looking to learn?",
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
      read: true,
    },
    {
      id: "m3",
      senderId: "u2",
      recipientId: "u1",
      content: "I'm mainly interested in learning about React and building interactive UIs.",
      timestamp: new Date(Date.now() - 23 * 60 * 60 * 1000),
      read: true,
    },
    {
      id: "m4",
      senderId: "u1",
      recipientId: "u2",
      content: "Perfect! I can definitely help with that. When would you like to schedule our first session?",
      timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000),
      read: true,
    },
    {
      id: "m5",
      senderId: "u2",
      recipientId: "u1",
      content: "Looking forward to our session tomorrow!",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      read: false,
    },
  ],
  "u3": [
    {
      id: "m6",
      senderId: "u1",
      recipientId: "u3",
      content: "Hi Michael! I just booked your Italian cooking class for tomorrow.",
      timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      read: true,
    },
    {
      id: "m7",
      senderId: "u3",
      recipientId: "u1",
      content: "Hello Alex! That's wonderful. I'm looking forward to it. Do you have any specific dishes you'd like to learn?",
      timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000 + 30 * 60 * 1000),
      read: true,
    },
    {
      id: "m8",
      senderId: "u1",
      recipientId: "u3",
      content: "I'd love to learn how to make authentic pasta from scratch if possible!",
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000 - 12 * 60 * 60 * 1000),
      read: true,
    },
    {
      id: "m9",
      senderId: "u3",
      recipientId: "u1",
      content: "Absolutely! We'll make fresh pasta and a classic sauce. Make sure you have flour, eggs, and olive oil ready.",
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000 - 11 * 60 * 60 * 1000),
      read: true,
    },
    {
      id: "m10",
      senderId: "u3",
      recipientId: "u1",
      content: "Thanks for the Italian cooking session! I'll definitely be trying that recipe this weekend.",
      timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      read: true,
    },
  ],
  "u4": [
    {
      id: "m11",
      senderId: "u4",
      recipientId: "u1",
      content: "Hello Alex! I saw your profile and I'm interested in learning more about your digital marketing expertise.",
      timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
      read: true,
    },
    {
      id: "m12",
      senderId: "u1",
      recipientId: "u4",
      content: "Hi Emily! I'd be happy to share what I know about digital marketing. What aspects are you most interested in?",
      timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000 + 45 * 60 * 1000),
      read: true,
    },
    {
      id: "m13",
      senderId: "u4",
      recipientId: "u1",
      content: "I'm particularly interested in SEO and content marketing strategies for my small business.",
      timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
      read: true,
    },
    {
      id: "m14",
      senderId: "u1",
      recipientId: "u4",
      content: "Those are great areas to focus on. I can help you develop a comprehensive strategy. When would you like to meet?",
      timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      read: true,
    },
    {
      id: "m15",
      senderId: "u4",
      recipientId: "u1",
      content: "Are you available next Tuesday for a marketing strategy discussion?",
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      read: true,
    },
  ],
};

const Messages = () => {
  const [selectedConversation, setSelectedConversation] = useState<string | null>("u2");
  const [messageInput, setMessageInput] = useState("");
  const [conversations, setConversations] = useState(mockConversations);
  const [messages, setMessages] = useState<Record<string, Message[]>>(mockMessages);
  
  // Format timestamp
  const formatTime = (date: Date) => {
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else if (diffDays === 1) {
      return 'Yesterday';
    } else if (diffDays < 7) {
      return date.toLocaleDateString([], { weekday: 'short' });
    } else {
      return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
    }
  };
  
  // Send a new message
  const sendMessage = () => {
    if (!messageInput.trim() || !selectedConversation) return;
    
    const newMessage: Message = {
      id: `m${Date.now()}`,
      senderId: "u1", // Current user
      recipientId: selectedConversation,
      content: messageInput,
      timestamp: new Date(),
      read: true,
    };
    
    setMessages(prev => ({
      ...prev,
      [selectedConversation]: [...(prev[selectedConversation] || []), newMessage],
    }));
    
    // Update conversation
    setConversations(prev => 
      prev.map(conv => 
        conv.userId === selectedConversation 
          ? { ...conv, lastMessage: messageInput, timestamp: new Date(), unread: 0 }
          : conv
      )
    );
    
    setMessageInput("");
  };
  
  // Mark messages as read when selecting a conversation
  const selectConversation = (userId: string) => {
    setSelectedConversation(userId);
    
    // Mark messages as read
    setMessages(prev => ({
      ...prev,
      [userId]: (prev[userId] || []).map(msg => ({
        ...msg,
        read: true,
      })),
    }));
    
    // Update unread count
    setConversations(prev => 
      prev.map(conv => 
        conv.userId === userId 
          ? { ...conv, unread: 0 }
          : conv
      )
    );
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-skillswap-dark mb-2">Messages</h1>
            <p className="text-skillswap-neutral">
              Chat with your teachers and students.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Conversations list */}
            <div className="md:col-span-1">
              <Card className="overflow-hidden">
                <div className="p-4 border-b">
                  <h2 className="font-semibold text-skillswap-dark">Conversations</h2>
                </div>
                
                <div className="divide-y max-h-[600px] overflow-y-auto">
                  {conversations.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime()).map((conv) => {
                    const user = users.find(u => u.id === conv.userId);
                    if (!user) return null;
                    
                    return (
                      <div 
                        key={conv.userId}
                        className={`p-4 hover:bg-gray-50 cursor-pointer ${selectedConversation === conv.userId ? 'bg-skillswap-light/50' : ''}`}
                        onClick={() => selectConversation(conv.userId)}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="relative">
                            <Avatar>
                              <AvatarImage src={user.avatar} alt={user.name} />
                              <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                            </Avatar>
                            {conv.unread > 0 && (
                              <span className="absolute -top-1 -right-1 bg-skillswap-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                {conv.unread}
                              </span>
                            )}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-center">
                              <h3 className="font-medium text-skillswap-dark truncate">{user.name}</h3>
                              <span className="text-xs text-skillswap-neutral">{formatTime(conv.timestamp)}</span>
                            </div>
                            <p className={`text-sm truncate ${conv.unread > 0 ? 'font-medium text-skillswap-dark' : 'text-skillswap-neutral'}`}>
                              {conv.lastMessage}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </div>
            
            {/* Chat area */}
            <div className="md:col-span-2">
              <Card className="flex flex-col h-[600px]">
                {selectedConversation ? (
                  <>
                    {/* Chat header */}
                    <div className="p-4 border-b flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarImage 
                            src={users.find(u => u.id === selectedConversation)?.avatar} 
                            alt={users.find(u => u.id === selectedConversation)?.name} 
                          />
                          <AvatarFallback>
                            {users.find(u => u.id === selectedConversation)?.name.substring(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div>
                          <div className="flex items-center">
                            <h2 className="font-semibold text-skillswap-dark">
                              {users.find(u => u.id === selectedConversation)?.name}
                            </h2>
                            <BadgeCheck className="h-4 w-4 text-skillswap-primary ml-1" />
                          </div>
                          <p className="text-xs text-skillswap-neutral">
                            {users.find(u => u.id === selectedConversation)?.skillsOffered.join(", ")}
                          </p>
                        </div>
                      </div>
                      
                      <Button size="sm" variant="ghost">
                        View Profile
                      </Button>
                    </div>
                    
                    {/* Messages */}
                    <div className="flex-1 p-4 overflow-y-auto flex flex-col space-y-4">
                      {messages[selectedConversation]?.map((message) => {
                        const isCurrentUser = message.senderId === "u1";
                        const sender = users.find(u => u.id === message.senderId);
                        
                        return (
                          <div 
                            key={message.id}
                            className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'}`}
                          >
                            <div className="flex items-end space-x-2 max-w-[75%]">
                              {!isCurrentUser && (
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src={sender?.avatar} alt={sender?.name} />
                                  <AvatarFallback>{sender?.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                                </Avatar>
                              )}
                              
                              <div>
                                <div 
                                  className={`p-3 rounded-lg ${
                                    isCurrentUser 
                                      ? 'bg-skillswap-primary text-white rounded-br-none' 
                                      : 'bg-gray-100 text-skillswap-dark rounded-bl-none'
                                  }`}
                                >
                                  <p className="text-sm">{message.content}</p>
                                </div>
                                <p className="text-xs text-skillswap-neutral mt-1">
                                  {formatTime(message.timestamp)}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    
                    {/* Message input */}
                    <div className="p-4 border-t">
                      <div className="flex space-x-2">
                        <Input
                          placeholder="Type a message..."
                          value={messageInput}
                          onChange={(e) => setMessageInput(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                              e.preventDefault();
                              sendMessage();
                            }
                          }}
                          className="flex-1"
                        />
                        <Button 
                          className="bg-skillswap-primary hover:bg-skillswap-secondary"
                          onClick={sendMessage}
                        >
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <h3 className="font-semibold text-skillswap-dark mb-2">Select a conversation</h3>
                      <p className="text-skillswap-neutral">
                        Choose a conversation from the list to start chatting
                      </p>
                    </div>
                  </div>
                )}
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Messages;
