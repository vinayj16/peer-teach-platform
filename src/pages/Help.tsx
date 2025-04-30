
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const Help = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-skillswap-dark mb-8 text-center">Help Center</h1>
        <div className="max-w-3xl mx-auto">
          <Card className="p-6 shadow-md bg-white">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="account" className="border-b border-indigo-100">
                <AccordionTrigger className="text-lg font-medium text-skillswap-dark py-4 hover:text-skillswap-primary">
                  Account Management
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4 px-4 bg-gray-50 rounded-md">
                  <p className="text-skillswap-dark mb-3">
                    Learn how to manage your account settings, update your profile, and secure your account.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-skillswap-dark">
                    <li>How to update your profile information</li>
                    <li>Changing your password and security settings</li>
                    <li>Managing your notification preferences</li>
                    <li>Connecting your social accounts</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="booking" className="border-b border-indigo-100">
                <AccordionTrigger className="text-lg font-medium text-skillswap-dark py-4 hover:text-skillswap-primary">
                  Booking Sessions
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4 px-4 bg-gray-50 rounded-md">
                  <p className="text-skillswap-dark mb-3">
                    Find out how to schedule, modify, or cancel skill exchange sessions.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-skillswap-dark">
                    <li>How to book a session with a skill provider</li>
                    <li>Rescheduling or canceling your booking</li>
                    <li>Setting up your availability as a skill provider</li>
                    <li>Joining a scheduled session</li>
                  </ul>
                  <div className="mt-4">
                    <a href="/bookings" className="text-skillswap-primary hover:underline font-medium">
                      Go to My Bookings →
                    </a>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="payments" className="border-b border-indigo-100">
                <AccordionTrigger className="text-lg font-medium text-skillswap-dark py-4 hover:text-skillswap-primary">
                  Payments & Billing
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4 px-4 bg-gray-50 rounded-md">
                  <p className="text-skillswap-dark mb-3">
                    Understand our payment processes and billing system.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-skillswap-dark">
                    <li>Available payment methods</li>
                    <li>Understanding your invoices</li>
                    <li>Refund policy and how to request a refund</li>
                    <li>Setting up automatic payments</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
          
          <div className="mt-10 text-center">
            <h2 className="text-2xl font-semibold text-skillswap-dark mb-4">Need more help?</h2>
            <p className="text-skillswap-dark mb-6">Our support team is here to assist you with any questions or concerns.</p>
            <a 
              href="/contact" 
              className="inline-block px-6 py-3 bg-gradient-to-r from-skillswap-primary to-indigo-600 text-white font-medium rounded-md hover:from-indigo-600 hover:to-skillswap-primary transition-all"
            >
              Contact Support
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Help;
