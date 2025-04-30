
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
  const [user, setUser] = useState<{ name?: string; email?: string } | null>(null);
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

  // Show username (from login, or email if missing)
  const getDisplayName = () => {
    if (user?.name) return user.name;
    if (user?.email) return user.email.split("@")[0];
    return "User";
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-indigo-100 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <Book className="h-6 w-6 text-skillswap-primary group-hover:text-indigo-800 transition-colors" />
          <span className="text-xl font-bold text-indigo-900 group-hover:text-skillswap-primary transition-colors">SkillSwap</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="flex items-center gap-1 text-indigo-700 hover:text-skillswap-primary transition-colors">
            <Home className="h-4 w-4" />
            <span>Home</span>
          </Link>
          <Link to="/discover" className="flex items-center gap-1 text-indigo-700 hover:text-skillswap-primary transition-colors">
            <Search className="h-4 w-4" />
            <span>Discover</span>
          </Link>
          <Link to="/bookings" className="flex items-center gap-1 text-indigo-700 hover:text-skillswap-primary transition-colors">
            <CalendarCheck className="h-4 w-4" />
            <span>Bookings</span>
          </Link>
          <Link to="/messages" className="flex items-center gap-1 text-indigo-700 hover:text-skillswap-primary transition-colors">
            <MessageSquare className="h-4 w-4" />
            <span>Messages</span>
          </Link>
        </div>
        <div className="flex items-center gap-3">
          {!user ? (
            <>
              <Button variant="ghost" size="sm" className="text-indigo-700 hover:bg-indigo-100" asChild>
                <Link to="/login">Log in</Link>
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-skillswap-primary to-indigo-600 hover:from-indigo-600 hover:to-skillswap-primary transition-all duration-300 border-none" asChild>
                <Link to="/signup">Sign up</Link>
              </Button>
            </>
          ) : (
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                className="flex items-center gap-2 px-3 py-2 rounded-md bg-indigo-100 hover:bg-indigo-200 transition-all focus:outline-none"
                onClick={() => setMenuOpen((open) => !open)}
              >
                <User className="h-5 w-5 text-skillswap-primary" />
                <span className="text-indigo-900 font-semibold">{getDisplayName()}</span>
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white border border-indigo-100 rounded-md shadow-lg z-50 animate-fade-in">
                  <button
                    onClick={() => { navigate(`/profile/1`); setMenuOpen(false); }}
                    className="w-full text-left px-4 py-2 text-indigo-700 hover:bg-indigo-50 rounded-t"
                  >
                    View Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-pink-600 hover:bg-indigo-50 rounded-b"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
          <Button variant="ghost" size="icon" className="md:hidden text-indigo-700 hover:bg-indigo-100">
            <span className="sr-only">Open menu</span>
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
