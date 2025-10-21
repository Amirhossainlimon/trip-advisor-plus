import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Plane, Hotel, MapPin, Wallet, Bell } from "lucide-react";
import flightIcon from "@/assets/flight-icon.jpg";
import hotelIcon from "@/assets/hotel-icon.jpg";
import planIcon from "@/assets/plan-icon.jpg";

const Dashboard = () => {
  const quickActions = [
    {
      title: "Book Flight",
      icon: Plane,
      image: flightIcon,
      path: "/plan",
      gradient: "from-primary to-primary/80"
    },
    {
      title: "Find Hotels",
      icon: Hotel,
      image: hotelIcon,
      path: "/plan",
      gradient: "from-secondary to-secondary/80"
    },
    {
      title: "Plan Trip",
      icon: MapPin,
      image: planIcon,
      path: "/plan",
      gradient: "from-accent to-accent/80"
    }
  ];

  const recentTrips = [
    {
      destination: "Paris, France",
      date: "Dec 15 - Dec 22",
      status: "Upcoming"
    },
    {
      destination: "Tokyo, Japan",
      date: "Jan 10 - Jan 20",
      status: "Upcoming"
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-8">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-accent text-white p-6 rounded-b-3xl shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold">Welcome back, Traveler!</h1>
              <p className="text-white/80">Ready for your next adventure?</p>
            </div>
            <button className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors">
              <Bell className="h-6 w-6" />
            </button>
          </div>

          {/* Wallet Card */}
          <Card className="bg-white/10 backdrop-blur border-white/20">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm mb-1">Travel Wallet</p>
                  <p className="text-3xl font-bold">$2,450.00</p>
                </div>
                <Wallet className="h-8 w-8 text-white/80" />
              </div>
              <Link to="/wallet">
                <Button variant="outline" size="sm" className="mt-3 w-full border-white text-white hover:bg-white hover:text-primary">
                  Manage Wallet
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Quick Actions */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickActions.map((action, index) => (
              <Link key={index} to={action.path}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                  <div className={`h-32 bg-gradient-to-br ${action.gradient} relative overflow-hidden`}>
                    <img 
                      src={action.image} 
                      alt={action.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity"
                    />
                    <div className="relative z-10 p-4 h-full flex items-end">
                      <h3 className="text-xl font-bold text-white">{action.title}</h3>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Recent Trips */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-foreground">Upcoming Trips</h2>
            <Link to="/trips">
              <Button variant="ghost" size="sm">View All</Button>
            </Link>
          </div>
          <div className="space-y-3">
            {recentTrips.map((trip, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-foreground">{trip.destination}</h3>
                      <p className="text-sm text-muted-foreground">{trip.date}</p>
                    </div>
                    <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                      {trip.status}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Recommended Destinations */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Trending Destinations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Bali", "Dubai", "New York", "Maldives"].map((dest, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="h-32 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <p className="text-lg font-semibold text-foreground">{dest}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Navigation />
    </div>
  );
};

export default Dashboard;
