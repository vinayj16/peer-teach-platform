import { Link, useNavigate } from "react-router-dom";
import { Button } from "./button";
import { 
  Book, 
  CalendarCheck, 
  Home, 
  MessageSquare, 
  Search, 
  User 
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [user, setUser] = useState<{ name: string } | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("skillswap_user");
    setUser(userData ? JSON.parse(userData) : null);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);

  const handleLogout = () => {
    localStorage.removeItem("skillswap_user");
    setUser(null);
    setMenuOpen(false);
    navigate("/");
  };

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
          {!user ? (
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/login">Log in</Link>
              </Button>
              <Button size="sm" className="bg-skillswap-primary hover:bg-skillswap-secondary" asChild>
                <Link to="/signup">Sign up</Link>
              </Button>
            </>
          ) : (
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                className="flex items-center gap-2 px-3 py-2 rounded-md bg-skillswap-primary/10 hover:bg-skillswap-primary/20 transition-all focus:outline-none"
                onClick={() => setMenuOpen((open) => !open)}
              >
                <User className="h-5 w-5 text-skillswap-primary" />
                <span className="text-skillswap-dark font-semibold">{user.name}</span>
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-md shadow-lg z-50 animate-fade-in">
                  <button
                    onClick={() => { navigate(`/profile/1`); setMenuOpen(false); }}
                    className="w-full text-left px-4 py-2 text-skillswap-neutral hover:bg-skillswap-primary/10 rounded-t"
                  >
                    View Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-red-500 hover:bg-skillswap-primary/10 rounded-b"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
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
