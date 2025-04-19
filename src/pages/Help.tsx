
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Help = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-skillswap-dark mb-8">Help Center</h1>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            <AccordionItem value="account">
              <AccordionTrigger>Account Management</AccordionTrigger>
              <AccordionContent>
                Learn how to manage your account settings, update your profile, and secure your account.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="booking">
              <AccordionTrigger>Booking Sessions</AccordionTrigger>
              <AccordionContent>
                Find out how to schedule, modify, or cancel skill exchange sessions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="payments">
              <AccordionTrigger>Payments & Billing</AccordionTrigger>
              <AccordionContent>
                Understand our payment processes and billing system.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Help;
