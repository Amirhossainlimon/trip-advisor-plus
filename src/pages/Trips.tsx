import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock } from "lucide-react";

const Trips = () => {
  const upcomingTrips = [
    {
      destination: "Paris, France",
      dates: "Dec 15 - Dec 22, 2024",
      status: "Confirmed",
      hotel: "Hotel Le Marais",
      flight: "Air France AF123"
    },
    {
      destination: "Tokyo, Japan",
      dates: "Jan 10 - Jan 20, 2025",
      status: "Pending",
      hotel: "Shibuya Grand",
      flight: "ANA NH789"
    }
  ];

  const pastTrips = [
    {
      destination: "London, UK",
      dates: "Oct 5 - Oct 12, 2024",
      status: "Completed"
    },
    {
      destination: "Dubai, UAE",
      dates: "Sep 1 - Sep 7, 2024",
      status: "Completed"
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-8">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-accent text-white p-6 rounded-b-3xl shadow-lg mb-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">My Trips</h1>
          <p className="text-white/90">Manage all your travel plans</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 space-y-8">
        {/* Upcoming Trips */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Upcoming Trips</h2>
          <div className="space-y-4">
            {upcomingTrips.map((trip, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {trip.destination}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <Calendar className="h-4 w-4" />
                        <span>{trip.dates}</span>
                      </div>
                    </div>
                    <Badge 
                      className={
                        trip.status === "Confirmed" 
                          ? "bg-accent text-accent-foreground" 
                          : "bg-secondary text-secondary-foreground"
                      }
                    >
                      {trip.status}
                    </Badge>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-muted/30 rounded-lg p-3">
                      <p className="text-sm text-muted-foreground mb-1">Accommodation</p>
                      <p className="font-semibold text-foreground">{trip.hotel}</p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-3">
                      <p className="text-sm text-muted-foreground mb-1">Flight</p>
                      <p className="font-semibold text-foreground">{trip.flight}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="default" size="sm" className="flex-1">
                      View Details
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Manage Booking
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Past Trips */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Past Trips</h2>
          <div className="space-y-3">
            {pastTrips.map((trip, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-1">
                        {trip.destination}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{trip.dates}</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-muted-foreground">
                      {trip.status}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Empty State for new users */}
        {upcomingTrips.length === 0 && pastTrips.length === 0 && (
          <div className="text-center py-12">
            <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              No trips yet
            </h3>
            <p className="text-muted-foreground mb-6">
              Start planning your next adventure!
            </p>
            <Button variant="hero" size="lg">
              Plan Your First Trip
            </Button>
          </div>
        )}
      </main>

      <Navigation />
    </div>
  );
};

export default Trips;
