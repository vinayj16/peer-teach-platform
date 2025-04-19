
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-skillswap-dark mb-8">How SkillSwap Works</h1>
        <div className="space-y-8">
          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-skillswap-dark mb-4">1. Discover Skills</h2>
            <p className="text-skillswap-neutral">Browse through a diverse range of skills offered by our community members.</p>
          </section>
          
          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-skillswap-dark mb-4">2. Connect</h2>
            <p className="text-skillswap-neutral">Find someone with the skills you want to learn and skills to share in return.</p>
          </section>
          
          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-skillswap-dark mb-4">3. Exchange</h2>
            <p className="text-skillswap-neutral">Schedule sessions and start learning while teaching what you know best.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
