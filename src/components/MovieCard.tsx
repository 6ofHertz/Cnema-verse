
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Play, Brain } from "lucide-react";

interface MovieCardProps {
  title: string;
  imageUrl: string;
  year: string;
  genre: string;
}

export default function MovieCard({ title, imageUrl, year, genre }: MovieCardProps) {
  return (
    <Card className="movie-card overflow-hidden bg-card/50 border border-cosmic-purple/20">
      <div className="relative h-[260px] w-full">
        <img 
          src={imageUrl} 
          alt={title} 
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/90 to-transparent">
          <h3 className="font-semibold text-white truncate">{title}</h3>
          <div className="flex justify-between items-center text-xs text-white/80">
            <span>{year}</span>
            <span>{genre}</span>
          </div>
        </div>
      </div>
      <CardContent className="p-3 space-y-2">
        <div className="flex justify-between gap-2">
          <Button size="sm" variant="outline" className="flex-1 h-8 text-xs border-cosmic-blue/50 hover:bg-cosmic-blue/10 hover:text-cosmic-blue">
            <Plus className="h-3 w-3 mr-1" />
            Add
          </Button>
          <Button size="sm" variant="outline" className="flex-1 h-8 text-xs border-cosmic-purple/50 hover:bg-cosmic-purple/10 hover:text-cosmic-purple">
            <Play className="h-3 w-3 mr-1" />
            Watch
          </Button>
          <Button size="sm" variant="outline" className="flex-1 h-8 text-xs border-cosmic-indigo/50 hover:bg-cosmic-indigo/10 hover:text-cosmic-indigo">
            <Brain className="h-3 w-3 mr-1" />
            AI
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
