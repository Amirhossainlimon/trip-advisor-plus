import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Sparkles } from "lucide-react";

const Explore = () => {
  const destinations = [
    { name: "Bali, Indonesia", badge: "Trending", price: "From $890", gradient: "from-secondary to-secondary/70" },
    { name: "Dubai, UAE", badge: "Popular", price: "From $1,200", gradient: "from-primary to-primary/70" },
    { name: "Tokyo, Japan", badge: "New", price: "From $1,100", gradient: "from-accent to-accent/70" },
    { name: "Maldives", badge: "Hot Deal", price: "From $1,500", gradient: "from-secondary to-accent" },
    { name: "Barcelona, Spain", badge: "Trending", price: "From $750", gradient: "from-primary to-secondary" },
    { name: "New York, USA", badge: "Popular", price: "From $650", gradient: "from-accent to-primary" }
  ];

  const packages = [
    { title: "European Adventure", days: "10 Days", cities: "5 Cities", price: "$2,499" },
    { title: "Asian Discovery", days: "14 Days", cities: "6 Cities", price: "$3,200" },
    { title: "Caribbean Paradise", days: "7 Days", cities: "3 Islands", price: "$1,899" }
  ];

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-8">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-accent text-white p-6 rounded-b-3xl shadow-lg mb-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Explore</h1>
          <p className="text-white/90">Discover amazing destinations and deals</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 space-y-8">
        {/* Trending Destinations */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Trending Destinations</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {destinations.map((dest, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                <div className={`h-48 bg-gradient-to-br ${dest.gradient} relative`}>
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-white/90 text-foreground hover:bg-white">
                      {dest.badge}
                    </Badge>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <h3 className="text-xl font-bold text-white mb-1">{dest.name}</h3>
                    <p className="text-white/90 text-sm">{dest.price}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Travel Packages */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-secondary" />
            <h2 className="text-2xl font-bold text-foreground">Featured Packages</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {packages.map((pkg, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{pkg.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="font-medium text-foreground">{pkg.days}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Includes</span>
                      <span className="font-medium text-foreground">{pkg.cities}</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Starting at</span>
                      <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Popular Activities */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Popular Activities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Beach & Resort", "Adventure Sports", "City Tours", "Cultural Experiences"].map((activity, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className="h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-3 flex items-center justify-center">
                    <span className="text-2xl">🏖️</span>
                  </div>
                  <p className="font-medium text-foreground text-sm">{activity}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Navigation />
    </div>
  );
};

export default Explore;
