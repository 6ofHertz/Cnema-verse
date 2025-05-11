
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MovieExplorer from "@/components/MovieExplorer";

const Explore = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-2 text-glow">Explore Movies</h1>
          <p className="text-xl text-foreground/80 mb-8">Discover your next favorite films</p>
          <MovieExplorer />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Explore;
