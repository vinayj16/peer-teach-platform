
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Book } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center max-w-md p-8">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-skillswap-light p-4">
              <Book className="h-12 w-12 text-skillswap-primary" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-skillswap-dark mb-4">404</h1>
          <p className="text-xl text-skillswap-dark mb-2">Page Not Found</p>
          <p className="text-skillswap-neutral mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="space-y-3">
            <Button className="w-full bg-skillswap-primary hover:bg-skillswap-secondary" asChild>
              <Link to="/">Back to Home</Link>
            </Button>
            
            <Button variant="outline" className="w-full" asChild>
              <Link to="/discover">Discover Skills</Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
