
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Shield, UserCheck, Bell } from "lucide-react";

const Safety = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-skillswap-dark mb-8">Safety & Trust</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-sm text-center">
            <Shield className="h-12 w-12 text-skillswap-primary mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-skillswap-dark mb-2">Secure Platform</h2>
            <p className="text-skillswap-neutral">Your data and privacy are protected with industry-standard security measures.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm text-center">
            <UserCheck className="h-12 w-12 text-skillswap-primary mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-skillswap-dark mb-2">Verified Users</h2>
            <p className="text-skillswap-neutral">All users go through a verification process to ensure community safety.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm text-center">
            <Bell className="h-12 w-12 text-skillswap-primary mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-skillswap-dark mb-2">24/7 Support</h2>
            <p className="text-skillswap-neutral">Our support team is always available to help with any safety concerns.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Safety;
