
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Film, Brain, Search } from "lucide-react";

const heroBackgrounds = [
  'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80',
  'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
  'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
];

export default function HeroSection() {
  const [currentBackground, setCurrentBackground] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % heroBackgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[85vh] overflow-hidden">
      {/* Background image with transition */}
      {heroBackgrounds.map((bg, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: index === currentBackground ? 1 : 0,
          }}
        />
      ))}
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay"></div>
      
      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-float">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-glow">
              <span className="shimmer-text">RoomSync</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto text-white/90">
              Experience movies together with friends, get AI recommendations,
              and discover your next favorite film.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Button size="lg" className="animate-pulse-glow bg-cosmic-purple hover:bg-cosmic-purple/90 w-full md:w-auto">
                <Film className="mr-2 h-5 w-5" />
                Create Watch Room
              </Button>
              <Button size="lg" variant="outline" className="border-cosmic-blue text-cosmic-blue hover:bg-cosmic-blue/20 w-full md:w-auto">
                <Brain className="mr-2 h-5 w-5" />
                Talk to AI
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white/90 hover:bg-white/10 w-full md:w-auto">
                <Search className="mr-2 h-5 w-5" />
                Explore Films
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
