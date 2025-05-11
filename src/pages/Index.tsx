
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MovieExplorer from "@/components/MovieExplorer";
import WatchRoomSection from "@/components/WatchRoomSection";
import AiAssistantSection from "@/components/AiAssistantSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <MovieExplorer />
        <WatchRoomSection />
        <AiAssistantSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
