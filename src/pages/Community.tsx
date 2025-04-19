
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const Community = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-skillswap-dark mb-8">Our Community</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-skillswap-dark mb-4">Community Guidelines</h2>
            <p className="text-skillswap-neutral">Our community thrives on mutual respect, continuous learning, and skill sharing.</p>
          </section>
          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-skillswap-dark mb-4">Get Involved</h2>
            <p className="text-skillswap-neutral">Join our growing community of learners and teachers from around the world.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Community;
