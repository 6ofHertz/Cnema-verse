
import { Link } from "react-router-dom";
import { Film, Twitter, Instagram, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-cosmic-black/70 border-t border-cosmic-purple/20 text-foreground/80 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Film className="h-6 w-6 text-cosmic-purple" />
              <span className="font-orbitron text-xl font-bold text-glow">
                Room<span className="text-cosmic-purple">Sync</span>
              </span>
            </Link>
            <p className="text-sm mb-4">
              Experience movies together with friends, get AI recommendations,
              and discover your next favorite film.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-cosmic-purple transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-cosmic-purple transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-cosmic-purple transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-orbitron text-cosmic-purple mb-4">Features</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/rooms" className="hover:text-cosmic-purple transition-colors">
                  Watch Rooms
                </Link>
              </li>
              <li>
                <Link to="/explore" className="hover:text-cosmic-purple transition-colors">
                  Movie Explorer
                </Link>
              </li>
              <li>
                <Link to="/assistant" className="hover:text-cosmic-purple transition-colors">
                  AI Assistant
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-cosmic-purple transition-colors">
                  User Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-orbitron text-cosmic-purple mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-cosmic-purple transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cosmic-purple transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cosmic-purple transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cosmic-purple transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-orbitron text-cosmic-purple mb-4">Stay Updated</h4>
            <p className="text-sm mb-4">
              Join our newsletter for the latest features and movie recommendations.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-muted/40 border border-cosmic-purple/20 rounded-md py-2 px-3 focus:outline-none focus:border-cosmic-purple/50 focus:ring-1 focus:ring-cosmic-purple/30"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1 bg-cosmic-purple text-white rounded-md text-xs">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-border text-center text-sm">
          <p>&copy; {new Date().getFullYear()} RoomSync. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
