
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-skillswap-dark mb-8">Cookie Policy</h1>
        <div className="bg-white rounded-lg p-8 shadow-sm space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-skillswap-dark mb-4">What Are Cookies</h2>
            <p className="text-skillswap-neutral">Cookies are small text files that are placed on your device when you visit our website.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-skillswap-dark mb-4">How We Use Cookies</h2>
            <p className="text-skillswap-neutral">We use cookies to improve your browsing experience and provide personalized services.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-skillswap-dark mb-4">Managing Cookies</h2>
            <p className="text-skillswap-neutral">Learn how to control and manage cookies in your browser settings.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cookies;
