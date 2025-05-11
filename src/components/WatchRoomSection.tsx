
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Users, Lock, Unlock, Play } from "lucide-react";

export default function WatchRoomSection() {
  // Sample watch rooms data
  const watchRooms = [
    {
      id: 1,
      name: "Sci-Fi Marathon",
      movie: "Dune: Part Two",
      host: "Sarah L.",
      members: 12,
      status: "live",
      isPrivate: false,
      thumbnail: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2056&q=80"
    },
    {
      id: 2,
      name: "Classic Movies Club",
      movie: "The Godfather",
      host: "Michael B.",
      members: 8,
      status: "waiting",
      isPrivate: false,
      thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1759&q=80"
    },
    {
      id: 3,
      name: "Horror Night",
      movie: "The Shining",
      host: "Alex K.",
      members: 5,
      status: "live",
      isPrivate: true,
      thumbnail: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1777&q=80"
    },
    {
      id: 4,
      name: "Anime Watch Party",
      movie: "Your Name",
      host: "Kai T.",
      members: 15,
      status: "waiting",
      isPrivate: false,
      thumbnail: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80"
    }
  ];

  return (
    <section className="py-16 container mx-auto px-4 bg-cosmic-black/30">
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-2 text-glow">Watch Rooms</h2>
        <p className="text-foreground/80">Join a room to watch movies together or create your own</p>
      </div>

      <div className="mb-8">
        <Button className="bg-cosmic-purple hover:bg-cosmic-purple/90 animate-pulse-glow">
          <Plus className="mr-2 h-4 w-4" /> Create New Watch Room
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {watchRooms.map((room) => (
          <Card key={room.id} className="glass-card overflow-hidden hover:shadow-[0_0_15px_rgba(155,135,245,0.3)] transition-all">
            <div className="relative h-36">
              <img 
                src={room.thumbnail} 
                alt={room.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2">
                <Badge 
                  className={room.status === "live" 
                    ? "bg-green-500" 
                    : "bg-amber-500"
                  }
                >
                  {room.status === "live" ? "LIVE" : "WAITING"}
                </Badge>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent">
                <h3 className="font-medium text-white text-lg">{room.name}</h3>
                <p className="text-sm text-white/70">Watching: {room.movie}</p>
              </div>
            </div>
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center text-sm text-foreground/80">
                  <Users className="h-3.5 w-3.5 mr-1" />
                  {room.members} viewers
                </div>
                <div className="flex items-center text-sm text-foreground/80">
                  {room.isPrivate ? (
                    <>
                      <Lock className="h-3.5 w-3.5 mr-1 text-cosmic-purple" />
                      Private
                    </>
                  ) : (
                    <>
                      <Unlock className="h-3.5 w-3.5 mr-1" />
                      Public
                    </>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  Host: <span className="text-cosmic-purple">{room.host}</span>
                </div>
                <Button size="sm" className="bg-cosmic-purple hover:bg-cosmic-purple/90">
                  <Play className="h-3.5 w-3.5 mr-1.5" /> Join
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button variant="outline" className="border-cosmic-purple hover:bg-cosmic-purple/10 hover:text-cosmic-purple">
          View All Rooms
        </Button>
      </div>
    </section>
  );
}
