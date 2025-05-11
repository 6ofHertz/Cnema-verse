
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Brain, SendHorizonal } from "lucide-react";
import { cn } from "@/lib/utils";
import MovieCard from "@/components/MovieCard";

// Sample messages for the AI conversation
const initialMessages = [
  {
    id: 1,
    isAi: true,
    message: "Hello! I'm Movie-GPT, your AI movie assistant. I can help you discover films based on your preferences, answer questions about movies, and provide recommendations. What would you like to know about movies today?"
  }
];

// Sample recommendation movies
const recommendedMovies = [
  {
    id: 1,
    title: "Dune: Part Two",
    imageUrl: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2056&q=80",
    year: "2024",
    genre: "Sci-Fi"
  },
  {
    id: 2,
    title: "Blade Runner 2049",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    year: "2017",
    genre: "Sci-Fi"
  },
  {
    id: 3,
    title: "Arrival",
    imageUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
    year: "2016",
    genre: "Sci-Fi"
  }
];

const Assistant = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [inputMessage, setInputMessage] = useState("");
  const [showRecommendations, setShowRecommendations] = useState(false);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    // Add user message
    const newUserMessage = {
      id: messages.length + 1,
      isAi: false,
      message: inputMessage
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setInputMessage("");
    
    // Simulate AI response for demo
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        isAi: true,
        message: `Based on your interest in "${inputMessage}", I've found some sci-fi movies you might enjoy. These titles explore similar themes of space exploration, technology, and human connection.`
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setShowRecommendations(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <Brain className="h-10 w-10 mr-3 text-cosmic-purple animate-pulse-glow" />
              <h1 className="text-4xl font-bold text-glow">Movie-GPT</h1>
            </div>
            <p className="text-xl text-foreground/80">
              Your intelligent movie assistant powered by AI
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-cosmic-black to-cosmic-indigo/30 border border-cosmic-purple/20 shadow-lg p-6">
              <div className="space-y-6 mb-6 h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-cosmic-purple/20">
                {messages.map(msg => (
                  <div key={msg.id} className={cn(
                    "flex gap-4",
                    msg.isAi ? "flex-row" : "flex-row-reverse"
                  )}>
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
                      msg.isAi ? "bg-cosmic-purple text-white" : "bg-cosmic-blue text-white"
                    )}>
                      {msg.isAi ? (
                        <Brain className="h-5 w-5" />
                      ) : (
                        <div className="font-bold">U</div>
                      )}
                    </div>
                    <div className={cn(
                      "rounded-2xl px-5 py-3 max-w-[85%]",
                      msg.isAi 
                        ? "bg-muted/50 border border-cosmic-purple/20 text-foreground/90" 
                        : "bg-cosmic-blue text-white ml-auto"
                    )}>
                      {msg.message}
                    </div>
                  </div>
                ))}
              </div>

              {showRecommendations && (
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-3 text-cosmic-purple">Recommended Movies</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {recommendedMovies.map(movie => (
                      <MovieCard 
                        key={movie.id}
                        title={movie.title}
                        imageUrl={movie.imageUrl}
                        year={movie.year}
                        genre={movie.genre}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div className="flex space-x-2 items-center">
                <Input
                  placeholder="Ask about movies, directors, or get recommendations..."
                  className="bg-background/50 border-cosmic-purple/30 focus-visible:ring-cosmic-purple/50"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Button 
                  onClick={handleSendMessage}
                  className="bg-cosmic-purple hover:bg-cosmic-purple/90 animate-pulse-glow"
                >
                  <SendHorizonal className="h-5 w-5" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Assistant;
