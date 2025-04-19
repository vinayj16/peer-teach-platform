
import { Link } from "react-router-dom";
import { Button } from "./button";
import { 
  Book, 
  CalendarCheck, 
  Home, 
  MessageSquare, 
  Search, 
  User 
} from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Book className="h-6 w-6 text-skillswap-primary" />
          <span className="text-xl font-bold text-skillswap-dark">SkillSwap</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="flex items-center gap-1 text-skillswap-neutral hover:text-skillswap-primary transition-colors">
            <Home className="h-4 w-4" />
            <span>Home</span>
          </Link>
          <Link to="/discover" className="flex items-center gap-1 text-skillswap-neutral hover:text-skillswap-primary transition-colors">
            <Search className="h-4 w-4" />
            <span>Discover</span>
          </Link>
          <Link to="/bookings" className="flex items-center gap-1 text-skillswap-neutral hover:text-skillswap-primary transition-colors">
            <CalendarCheck className="h-4 w-4" />
            <span>Bookings</span>
          </Link>
          <Link to="/messages" className="flex items-center gap-1 text-skillswap-neutral hover:text-skillswap-primary transition-colors">
            <MessageSquare className="h-4 w-4" />
            <span>Messages</span>
          </Link>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/login">Log in</Link>
          </Button>
          <Button size="sm" className="bg-skillswap-primary hover:bg-skillswap-secondary" asChild>
            <Link to="/signup">Sign up</Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <span className="sr-only">Open menu</span>
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
