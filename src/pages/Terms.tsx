
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-skillswap-dark mb-8">Terms of Service</h1>
        <div className="bg-white rounded-lg p-8 shadow-sm space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-skillswap-dark mb-4">1. Acceptance of Terms</h2>
            <p className="text-skillswap-neutral">By accessing and using SkillSwap, you agree to be bound by these Terms of Service.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-skillswap-dark mb-4">2. User Responsibilities</h2>
            <p className="text-skillswap-neutral">Users are responsible for maintaining the confidentiality of their account information.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-skillswap-dark mb-4">3. Service Rules</h2>
            <p className="text-skillswap-neutral">Users must follow community guidelines and respect other members of the platform.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
