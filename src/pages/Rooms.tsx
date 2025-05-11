
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WatchRoomSection from "@/components/WatchRoomSection";

const Rooms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-2 text-glow">Watch Rooms</h1>
          <p className="text-xl text-foreground/80 mb-8">Join a room or create your own to watch movies with friends</p>
          <WatchRoomSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Rooms;
