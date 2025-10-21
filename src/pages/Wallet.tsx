import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet as WalletIcon, Plus, ArrowUpRight, ArrowDownLeft } from "lucide-react";

const Wallet = () => {
  const transactions = [
    { type: "debit", amount: 450, description: "Paris Hotel Booking", date: "Dec 10, 2024" },
    { type: "credit", amount: 1000, description: "Added Funds", date: "Dec 8, 2024" },
    { type: "debit", amount: 650, description: "Flight to Tokyo", date: "Dec 5, 2024" },
    { type: "credit", amount: 500, description: "Refund - Cancelled Trip", date: "Dec 1, 2024" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-8">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-accent text-white p-6 rounded-b-3xl shadow-lg mb-6">
        <div className="max-w-7xl mx-auto text-center">
          <WalletIcon className="h-12 w-12 mx-auto mb-3" />
          <h1 className="text-3xl font-bold mb-2">Travel Wallet</h1>
          <p className="text-4xl font-bold mb-2">$2,450.00</p>
          <p className="text-white/80">Available Balance</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 space-y-6">
        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Button variant="hero" size="lg" className="h-auto py-6 flex-col gap-2">
            <Plus className="h-8 w-8" />
            <span>Add Money</span>
          </Button>
          <Button variant="outline" size="lg" className="h-auto py-6 flex-col gap-2">
            <ArrowUpRight className="h-8 w-8" />
            <span>Withdraw</span>
          </Button>
        </div>

        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {transactions.map((transaction, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${
                    transaction.type === 'credit' 
                      ? 'bg-accent/10 text-accent' 
                      : 'bg-secondary/10 text-secondary'
                  }`}>
                    {transaction.type === 'credit' ? (
                      <ArrowDownLeft className="h-5 w-5" />
                    ) : (
                      <ArrowUpRight className="h-5 w-5" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{transaction.description}</p>
                    <p className="text-sm text-muted-foreground">{transaction.date}</p>
                  </div>
                </div>
                <p className={`text-lg font-semibold ${
                  transaction.type === 'credit' ? 'text-accent' : 'text-foreground'
                }`}>
                  {transaction.type === 'credit' ? '+' : '-'}${transaction.amount}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-muted-foreground text-sm mb-1">This Month</p>
              <p className="text-2xl font-bold text-foreground">$1,850</p>
              <p className="text-xs text-muted-foreground">Spent</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-muted-foreground text-sm mb-1">Total Saved</p>
              <p className="text-2xl font-bold text-accent">$420</p>
              <p className="text-xs text-muted-foreground">With deals</p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Navigation />
    </div>
  );
};

export default Wallet;
