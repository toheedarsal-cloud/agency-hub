import { 
  BarChart3, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Activity,
  Target,
  Calendar,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardNav from "@/components/DashboardNav";

const Dashboard = () => {
  const stats = [
    {
      title: "Active Campaigns",
      value: "24",
      change: "+12%",
      trend: "up",
      icon: Target,
      color: "text-primary"
    },
    {
      title: "Total Clients",
      value: "152",
      change: "+8%",
      trend: "up",
      icon: Users,
      color: "text-secondary"
    },
    {
      title: "Monthly Revenue",
      value: "$84.5K",
      change: "+23%",
      trend: "up",
      icon: DollarSign,
      color: "text-accent"
    },
    {
      title: "Conversion Rate",
      value: "3.24%",
      change: "-2%",
      trend: "down",
      icon: TrendingUp,
      color: "text-muted-foreground"
    }
  ];

  const recentCampaigns = [
    { name: "Summer Sale 2024", client: "TechCorp", status: "Active", budget: "$12K", progress: 75 },
    { name: "Brand Awareness", client: "FashionHub", status: "Active", budget: "$8.5K", progress: 45 },
    { name: "Product Launch", client: "StartupX", status: "Planning", budget: "$15K", progress: 20 },
    { name: "Social Media Boost", client: "FoodCo", status: "Active", budget: "$6K", progress: 90 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <DashboardNav />
      
      <main className="p-6 lg:p-8 max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h1 className="text-3xl font-bold mb-2">Dashboard Overview</h1>
          <p className="text-muted-foreground flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-6 duration-700">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="hover:shadow-md transition-shadow duration-300 border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline justify-between">
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <div className={`flex items-center text-sm font-medium ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.trend === 'up' ? (
                      <ArrowUpRight className="w-4 h-4" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4" />
                    )}
                    {stat.change}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Campaigns */}
        <Card className="animate-in fade-in slide-in-from-bottom-8 duration-1000 shadow-md border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-primary" />
              Recent Campaigns
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentCampaigns.map((campaign, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-muted/30 transition-all duration-300"
                >
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold">{campaign.name}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        campaign.status === 'Active' 
                          ? 'bg-accent/20 text-accent' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {campaign.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{campaign.client}</p>
                    
                    {/* Progress Bar */}
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-primary transition-all duration-500"
                          style={{ width: `${campaign.progress}%` }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground min-w-[3rem]">
                        {campaign.progress}%
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-right ml-6">
                    <p className="font-bold text-lg">{campaign.budget}</p>
                    <p className="text-xs text-muted-foreground">Budget</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-1000">
          <Card className="border-primary/20 hover:border-primary/40 transition-colors cursor-pointer">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold">New Campaign</h3>
                  <p className="text-sm text-muted-foreground">Launch a new project</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-secondary/20 hover:border-secondary/40 transition-colors cursor-pointer">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-secondary flex items-center justify-center">
                  <Users className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold">Add Client</h3>
                  <p className="text-sm text-muted-foreground">Onboard new client</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-accent/20 hover:border-accent/40 transition-colors cursor-pointer">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold">View Reports</h3>
                  <p className="text-sm text-muted-foreground">Analyze performance</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
