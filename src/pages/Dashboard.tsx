import { 
  BarChart3, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Activity,
  Target,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  Sparkles
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
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
      
      <main className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6 lg:space-y-8">
        {/* Header */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Dashboard Overview
              </h1>
              <p className="text-muted-foreground flex items-center gap-2 mt-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm sm:text-base">
                  {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
              </p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-primary/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">All systems operational</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 animate-in fade-in slide-in-from-bottom-6 duration-700">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/30 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm overflow-hidden group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline justify-between">
                  <p className="text-2xl sm:text-3xl font-bold">{stat.value}</p>
                  <div className={`flex items-center gap-1 text-xs sm:text-sm font-semibold px-2 py-1 rounded-full ${
                    stat.trend === 'up' 
                      ? 'bg-green-500/10 text-green-600 dark:text-green-400' 
                      : 'bg-red-500/10 text-red-600 dark:text-red-400'
                  }`}>
                    {stat.trend === 'up' ? (
                      <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    ) : (
                      <ArrowDownRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    )}
                    {stat.change}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Campaigns */}
        <Card className="animate-in fade-in slide-in-from-bottom-8 duration-1000 shadow-elegant border-border/50 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
              <Activity className="w-5 h-5 text-primary" />
              Recent Campaigns
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <div className="space-y-3 sm:space-y-4">
              {recentCampaigns.map((campaign, index) => (
                <div 
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 rounded-xl border border-border/50 hover:border-primary/30 hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent transition-all duration-300 group"
                >
                  <div className="flex-1 space-y-2 sm:space-y-3">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <h3 className="font-semibold text-base sm:text-lg">{campaign.name}</h3>
                      <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                        campaign.status === 'Active' 
                          ? 'bg-gradient-primary text-primary-foreground shadow-sm' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {campaign.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <Users className="w-3 h-3" />
                      {campaign.client}
                    </p>
                    
                    <div className="flex items-center gap-3">
                      <Progress value={campaign.progress} className="flex-1 h-2" />
                      <span className="text-xs font-medium text-muted-foreground min-w-[3rem] text-right">
                        {campaign.progress}%
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 sm:text-right sm:ml-6">
                    <div>
                      <p className="font-bold text-lg sm:text-xl bg-gradient-primary bg-clip-text text-transparent">
                        {campaign.budget}
                      </p>
                      <p className="text-xs text-muted-foreground">Budget</p>
                    </div>
                    <button className="sm:hidden text-xs text-primary hover:underline">View</button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 animate-in fade-in duration-1000">
          <Card className="border-primary/20 hover:border-primary/50 transition-all duration-300 cursor-pointer hover:shadow-elegant group bg-gradient-to-br from-primary/5 to-transparent">
            <CardContent className="pt-6 p-4 sm:p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-primary flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg">New Campaign</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Launch a new project</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-secondary/20 hover:border-secondary/50 transition-all duration-300 cursor-pointer hover:shadow-elegant group bg-gradient-to-br from-secondary/5 to-transparent">
            <CardContent className="pt-6 p-4 sm:p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-secondary flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 sm:w-7 sm:h-7 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg">Add Client</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Onboard new client</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-accent/20 hover:border-accent/50 transition-all duration-300 cursor-pointer hover:shadow-elegant group bg-gradient-to-br from-accent/5 to-transparent sm:col-span-2 lg:col-span-1">
            <CardContent className="pt-6 p-4 sm:p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-accent flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg">View Reports</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Analyze performance</p>
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
