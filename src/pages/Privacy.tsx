
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-skillswap-dark mb-8">Privacy Policy</h1>
        <div className="bg-white rounded-lg p-8 shadow-sm space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-skillswap-dark mb-4">Data Collection</h2>
            <p className="text-skillswap-neutral">Learn about what information we collect and how we use it to improve your experience.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-skillswap-dark mb-4">Data Protection</h2>
            <p className="text-skillswap-neutral">We implement various security measures to maintain the safety of your personal information.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-skillswap-dark mb-4">Your Rights</h2>
            <p className="text-skillswap-neutral">Understand your rights regarding your personal data and how to exercise them.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
