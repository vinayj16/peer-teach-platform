
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-skillswap-dark mb-8">Contact Us</h1>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-skillswap-dark mb-2">Name</label>
                <Input id="name" placeholder="Your name" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-skillswap-dark mb-2">Email</label>
                <Input id="email" type="email" placeholder="Your email" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-skillswap-dark mb-2">Message</label>
                <Textarea id="message" placeholder="How can we help?" className="min-h-[150px]" />
              </div>
              
              <Button type="submit" className="w-full bg-skillswap-primary hover:bg-skillswap-secondary">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
