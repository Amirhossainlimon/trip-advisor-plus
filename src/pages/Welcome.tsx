import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Plane, Hotel, MapPin, Wallet, Sparkles, TrendingDown } from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";

const Welcome = () => {
  const features = [
    {
      icon: Plane,
      title: "Smart Booking",
      description: "Book flights, hotels, and transportation all in one place"
    },
    {
      icon: Sparkles,
      title: "AI-Powered Planning",
      description: "Get personalized trip recommendations and cost estimates"
    },
    {
      icon: Wallet,
      title: "Budget Tracking",
      description: "Manage your travel wallet and track expenses effortlessly"
    },
    {
      icon: TrendingDown,
      title: "Best Prices",
      description: "Real-time price monitoring and alerts for the best deals"
    },
    {
      icon: MapPin,
      title: "Local Discovery",
      description: "Find attractions, restaurants, and hidden gems"
    },
    {
      icon: Hotel,
      title: "Easy Management",
      description: "All your bookings and documents in one secure place"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-background" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Your Journey Starts Here
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Plan, book, and manage your entire trip with AI-powered recommendations and seamless booking
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button variant="hero" size="lg" className="w-full sm:w-auto text-lg px-8 py-6">
                Get Started Free
              </Button>
            </Link>
            <Link to="/signin">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Everything You Need to Travel Smart
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From planning to booking to managing, TourBuddy simplifies every step of your journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-card rounded-xl p-8 border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-lg w-fit mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Explore the World?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of travelers who trust TourBuddy for their adventures
          </p>
          <Link to="/signup">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-xl"
            >
              Start Your Journey
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 TourBuddy. Your travel companion.</p>
        </div>
      </footer>
    </div>
  );
};

export default Welcome;
