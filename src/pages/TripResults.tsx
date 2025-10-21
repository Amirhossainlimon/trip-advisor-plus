import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, Hotel, MapPin, DollarSign, Star, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const TripResults = () => {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-8">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-accent text-white p-6 rounded-b-3xl shadow-lg mb-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Your Trip Plan</h1>
          <p className="text-white/90">New York → Paris • Dec 15-22 • 2 Travelers</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 space-y-6">
        {/* Budget Overview */}
        <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-6 w-6 text-accent" />
              Estimated Total Cost
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-foreground mb-2">$3,245</p>
            <p className="text-muted-foreground">Per person for 7 days</p>
          </CardContent>
        </Card>

        {/* Flights */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plane className="h-5 w-5 text-primary" />
              Recommended Flights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-l-4 border-primary pl-4 py-2">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-semibold text-lg">Air France AF123</p>
                  <p className="text-sm text-muted-foreground">Direct flight</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary">$650</p>
                  <p className="text-xs text-muted-foreground">per person</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  7h 30m
                </span>
                <span>JFK → CDG</span>
              </div>
            </div>

            <div className="border-l-4 border-secondary pl-4 py-2">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-semibold text-lg">Delta DL456</p>
                  <p className="text-sm text-muted-foreground">1 stop</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-secondary">$520</p>
                  <p className="text-xs text-muted-foreground">per person</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  11h 15m
                </span>
                <span>JFK → ATL → CDG</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Hotels */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Hotel className="h-5 w-5 text-secondary" />
              Recommended Hotels
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4">
              <div className="w-24 h-24 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg flex-shrink-0" />
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">Hotel Le Marais</h3>
                    <div className="flex items-center gap-1 text-secondary">
                      {[1, 2, 3, 4].map((i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xl font-bold text-foreground">$180/night</p>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Central location, Free WiFi, Breakfast included
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex-shrink-0" />
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">Boutique Saint-Germain</h3>
                    <div className="flex items-center gap-1 text-secondary">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xl font-bold text-foreground">$250/night</p>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Luxury amenities, Spa, Restaurant
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Attractions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-accent" />
              Top Attractions & Activities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: "Eiffel Tower", price: "$30", duration: "3 hours" },
                { name: "Louvre Museum", price: "$22", duration: "4 hours" },
                { name: "Seine River Cruise", price: "$18", duration: "2 hours" },
                { name: "Notre-Dame Cathedral", price: "Free", duration: "2 hours" }
              ].map((attraction, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                  <div>
                    <p className="font-medium text-foreground">{attraction.name}</p>
                    <p className="text-sm text-muted-foreground">{attraction.duration}</p>
                  </div>
                  <p className="font-semibold text-accent">{attraction.price}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="hero" size="lg" className="flex-1">
            Book This Trip
          </Button>
          <Link to="/plan" className="flex-1">
            <Button variant="outline" size="lg" className="w-full">
              Customize Plan
            </Button>
          </Link>
        </div>
      </main>

      <Navigation />
    </div>
  );
};

export default TripResults;
