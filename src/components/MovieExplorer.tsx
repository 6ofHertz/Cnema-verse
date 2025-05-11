
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import MovieCard from "./MovieCard";

// Sample movie data
const sampleMovies = [
  {
    id: 1,
    title: "Dune: Part Two",
    imageUrl: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2056&q=80",
    year: "2024",
    genre: "Sci-Fi"
  },
  {
    id: 2,
    title: "Inception",
    imageUrl: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    year: "2010",
    genre: "Sci-Fi"
  },
  {
    id: 3,
    title: "Interstellar",
    imageUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
    year: "2014",
    genre: "Sci-Fi"
  },
  {
    id: 4,
    title: "The Shawshank Redemption",
    imageUrl: "https://images.unsplash.com/photo-1543536448-d209d2d13a1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    year: "1994",
    genre: "Drama"
  },
  {
    id: 5,
    title: "The Dark Knight",
    imageUrl: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    year: "2008",
    genre: "Action"
  },
  {
    id: 6,
    title: "Pulp Fiction",
    imageUrl: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    year: "1994",
    genre: "Crime"
  },
  {
    id: 7,
    title: "The Matrix",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    year: "1999",
    genre: "Sci-Fi"
  },
  {
    id: 8,
    title: "Forrest Gump",
    imageUrl: "https://images.unsplash.com/photo-1581237058004-7b6d6a490661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    year: "1994",
    genre: "Drama"
  },
];

export default function MovieExplorer() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMovies = sampleMovies.filter(movie => 
    movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    movie.genre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-16 container mx-auto px-4">
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-2 text-glow">Discover Movies</h2>
        <p className="text-foreground/80">Find your next favorite film to watch alone or with friends</p>
      </div>

      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search movies..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" className="border-cosmic-purple/50 text-cosmic-purple">
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            imageUrl={movie.imageUrl}
            year={movie.year}
            genre={movie.genre}
          />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button size="lg" variant="outline" className="border-cosmic-purple hover:bg-cosmic-purple/10 hover:text-cosmic-purple">
          Load More Movies
        </Button>
      </div>
    </section>
  );
}
