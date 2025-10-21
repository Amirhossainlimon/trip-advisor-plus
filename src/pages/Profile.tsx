import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Wallet, Heart, Settings, Bell, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

const Profile = () => {
  const menuItems = [
    { icon: User, label: "Personal Information", path: "/profile/edit", color: "text-primary" },
    { icon: Wallet, label: "Travel Wallet", path: "/wallet", color: "text-secondary" },
    { icon: Heart, label: "Favorites", path: "/favorites", color: "text-accent" },
    { icon: Bell, label: "Notifications", path: "/notifications", color: "text-primary" },
    { icon: Settings, label: "Settings", path: "/settings", color: "text-muted-foreground" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-8">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-accent text-white p-6 rounded-b-3xl shadow-lg mb-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="bg-white/20 backdrop-blur w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center">
            <User className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-2xl font-bold mb-1">John Doe</h1>
          <p className="text-white/90">john.doe@example.com</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 space-y-4">
        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card className="text-center">
            <CardContent className="p-4">
              <p className="text-3xl font-bold text-primary mb-1">12</p>
              <p className="text-sm text-muted-foreground">Trips</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-4">
              <p className="text-3xl font-bold text-secondary mb-1">28</p>
              <p className="text-sm text-muted-foreground">Countries</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-4">
              <p className="text-3xl font-bold text-accent mb-1">2.4K</p>
              <p className="text-sm text-muted-foreground">Balance</p>
            </CardContent>
          </Card>
        </div>

        {/* Menu Items */}
        <div className="space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link key={index} to={item.path}>
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`${item.color} bg-muted/30 p-3 rounded-lg`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-medium text-foreground">{item.label}</span>
                    </div>
                    <svg
                      className="h-5 w-5 text-muted-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Sign Out Button */}
        <Card className="border-destructive/20">
          <CardContent className="p-4">
            <Button 
              variant="ghost" 
              className="w-full text-destructive hover:text-destructive hover:bg-destructive/10"
            >
              <LogOut className="h-5 w-5 mr-2" />
              Sign Out
            </Button>
          </CardContent>
        </Card>

        {/* App Info */}
        <p className="text-center text-sm text-muted-foreground pt-4">
          TourBuddy v1.0.0
        </p>
      </main>

      <Navigation />
    </div>
  );
};

export default Profile;
