
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, SendHorizonal } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AiAssistantSection() {
  const [inputMessage, setInputMessage] = useState('');

  return (
    <section className="py-16 container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Brain className="h-8 w-8 mr-3 text-cosmic-purple animate-pulse-glow" />
          <h2 className="text-3xl font-bold text-glow">Movie-GPT</h2>
        </div>

        <Card className="bg-gradient-to-br from-cosmic-black to-cosmic-indigo/30 border border-cosmic-purple/20 shadow-lg overflow-hidden">
          <CardContent className="p-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4 shimmer-text">Your Cinematic AI Assistant</h3>
              <p className="text-foreground/80">
                Get personalized movie recommendations, discover hidden gems, or find films based on your mood and preferences.
              </p>
            </div>

            <div className="space-y-4">
              <Message 
                isAi={true}
                message="Hi there! I'm Movie-GPT, your cinematic AI assistant. How can I help you discover your next favorite film today?"
              />

              <Message 
                isAi={false}
                message="Can you suggest a sci-fi movie similar to Interstellar?"
              />

              <Message 
                isAi={true}
                message={`Based on your interest in Interstellar, I recommend "Arrival" (2016). It's a cerebral sci-fi drama with themes of time, communication, and human connection. Like Interstellar, it blends emotional depth with high-concept science fiction. Would you like more recommendations in this vein?`}
              />
            </div>

            <div className="mt-8 relative">
              <Input
                placeholder="Ask about movies, directors, or get recommendations..."
                className="pr-12 bg-background/50 border-cosmic-purple/30 focus-visible:ring-cosmic-purple/50"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
              />
              <Button 
                size="sm"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 bg-cosmic-purple hover:bg-cosmic-purple/90"
              >
                <SendHorizonal className="h-4 w-4" />
              </Button>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <SuggestionChip text="Movies like Inception" />
              <SuggestionChip text="Best comedies of 2023" />
              <SuggestionChip text="Hidden gems on Netflix" />
              <SuggestionChip text="Films about time travel" />
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <Button size="lg" className="bg-cosmic-purple hover:bg-cosmic-purple/90 animate-pulse-glow">
            <Brain className="mr-2 h-5 w-5" />
            Open Full AI Assistant
          </Button>
        </div>
      </div>
    </section>
  );
}

function Message({ isAi, message }: { isAi: boolean, message: string }) {
  return (
    <div className={cn(
      "flex gap-3",
      isAi ? "flex-row" : "flex-row-reverse"
    )}>
      <div className={cn(
        "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
        isAi ? "bg-cosmic-purple text-white" : "bg-cosmic-blue text-white"
      )}>
        {isAi ? (
          <Brain className="h-4 w-4" />
        ) : (
          <div className="font-semibold">U</div>
        )}
      </div>
      <div className={cn(
        "rounded-2xl px-4 py-2.5 max-w-[80%]",
        isAi 
          ? "bg-muted/50 border border-cosmic-purple/20 text-foreground/90" 
          : "bg-cosmic-blue text-white ml-auto"
      )}>
        {message}
      </div>
    </div>
  );
}

function SuggestionChip({ text }: { text: string }) {
  return (
    <button className="px-3 py-1.5 bg-muted/50 hover:bg-muted rounded-full text-sm border border-cosmic-purple/20 hover:border-cosmic-purple/50 transition-colors">
      {text}
    </button>
  );
}
