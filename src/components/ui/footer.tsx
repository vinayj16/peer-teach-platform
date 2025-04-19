
import { Link } from "react-router-dom";
import { Book } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Book className="h-6 w-6 text-skillswap-primary" />
              <span className="text-xl font-bold text-skillswap-dark">SkillSwap</span>
            </Link>
            <p className="text-skillswap-neutral text-sm">
              Exchange skills, grow together. The platform where knowledge is the currency.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-skillswap-dark mb-4">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/discover" className="text-skillswap-neutral hover:text-skillswap-primary transition-colors">Discover Skills</Link></li>
              <li><Link to="/how-it-works" className="text-skillswap-neutral hover:text-skillswap-primary transition-colors">How It Works</Link></li>
              <li><Link to="/community" className="text-skillswap-neutral hover:text-skillswap-primary transition-colors">Community</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-skillswap-dark mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/help" className="text-skillswap-neutral hover:text-skillswap-primary transition-colors">Help Center</Link></li>
              <li><Link to="/safety" className="text-skillswap-neutral hover:text-skillswap-primary transition-colors">Safety & Trust</Link></li>
              <li><Link to="/contact" className="text-skillswap-neutral hover:text-skillswap-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-skillswap-dark mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/terms" className="text-skillswap-neutral hover:text-skillswap-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-skillswap-neutral hover:text-skillswap-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="text-skillswap-neutral hover:text-skillswap-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-8 border-t border-gray-200 text-center text-sm text-skillswap-neutral">
          <p>© {new Date().getFullYear()} SkillSwap. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
