
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Film, 
  Search, 
  Brain, 
  User,
  Menu,
  X
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Film className="h-6 w-6 text-cosmic-purple" />
            <span className="font-orbitron text-xl font-bold text-glow">
              Room<span className="text-cosmic-purple">Sync</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link text-foreground/90 hover:text-cosmic-purple transition-colors">
              <div className="flex items-center space-x-1.5">
                <Home className="h-4 w-4" />
                <span>Home</span>
              </div>
            </Link>
            <Link to="/rooms" className="nav-link text-foreground/90 hover:text-cosmic-purple transition-colors">
              <div className="flex items-center space-x-1.5">
                <Film className="h-4 w-4" />
                <span>Watch Rooms</span>
              </div>
            </Link>
            <Link to="/explore" className="nav-link text-foreground/90 hover:text-cosmic-purple transition-colors">
              <div className="flex items-center space-x-1.5">
                <Search className="h-4 w-4" />
                <span>Explore</span>
              </div>
            </Link>
            <Link to="/assistant" className="nav-link text-foreground/90 hover:text-cosmic-purple transition-colors">
              <div className="flex items-center space-x-1.5">
                <Brain className="h-4 w-4" />
                <span>AI Assistant</span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="border-cosmic-purple text-cosmic-purple hover:bg-cosmic-purple/20">
              Login
            </Button>
            <Button size="sm" className="bg-cosmic-purple hover:bg-cosmic-purple/90 btn-glow">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-6 space-y-4 flex flex-col">
            <Link to="/" className="flex items-center space-x-2 p-2 hover:bg-muted rounded-md">
              <Home className="h-5 w-5 text-cosmic-purple" />
              <span>Home</span>
            </Link>
            <Link to="/rooms" className="flex items-center space-x-2 p-2 hover:bg-muted rounded-md">
              <Film className="h-5 w-5 text-cosmic-purple" />
              <span>Watch Rooms</span>
            </Link>
            <Link to="/explore" className="flex items-center space-x-2 p-2 hover:bg-muted rounded-md">
              <Search className="h-5 w-5 text-cosmic-purple" />
              <span>Explore</span>
            </Link>
            <Link to="/assistant" className="flex items-center space-x-2 p-2 hover:bg-muted rounded-md">
              <Brain className="h-5 w-5 text-cosmic-purple" />
              <span>AI Assistant</span>
            </Link>
            <div className="flex flex-col pt-2 space-y-2 border-t border-border">
              <Button variant="outline" size="sm" className="border-cosmic-purple text-cosmic-purple hover:bg-cosmic-purple/20 w-full">
                Login
              </Button>
              <Button size="sm" className="bg-cosmic-purple hover:bg-cosmic-purple/90 w-full">
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
