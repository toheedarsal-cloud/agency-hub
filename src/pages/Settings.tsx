import { useState } from "react";
import { 
  User, 
  Bell, 
  Shield, 
  Palette, 
  Globe,
  Mail,
  Lock,
  Smartphone,
  Save,
  Moon,
  Sun
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import DashboardNav from "@/components/DashboardNav";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);

  const handleSaveProfile = () => {
    toast.success("Profile settings saved successfully");
  };

  const handleSaveNotifications = () => {
    toast.success("Notification preferences updated");
  };

  const handleSaveSecurity = () => {
    toast.success("Security settings updated");
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    toast.info(`${!darkMode ? 'Dark' : 'Light'} mode ${!darkMode ? 'enabled' : 'disabled'}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardNav />
      
      <main className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6 lg:space-y-8">
        {/* Header */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Settings
          </h1>
          <p className="text-muted-foreground mt-2 text-sm sm:text-base">
            Manage your account settings and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 border-border/50 shadow-elegant">
              <CardContent className="p-4 space-y-2">
                {[
                  { icon: User, label: "Profile", id: "profile" },
                  { icon: Bell, label: "Notifications", id: "notifications" },
                  { icon: Shield, label: "Security", id: "security" },
                  { icon: Palette, label: "Appearance", id: "appearance" },
                ].map((item) => (
                  <button
                    key={item.id}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors text-left group"
                  >
                    <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="font-medium group-hover:text-primary transition-colors">
                      {item.label}
                    </span>
                  </button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Settings */}
            <Card className="border-border/50 shadow-elegant animate-in fade-in duration-500">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Profile Information
                </CardTitle>
                <CardDescription>
                  Update your personal details and contact information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="Admin" className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="User" className="bg-background" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Address
                  </Label>
                  <Input 
                    id="email" 
                    type="email" 
                    defaultValue="admin@marketpro.com" 
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4" />
                    Phone Number
                  </Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+1 (555) 000-0000" 
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input 
                    id="company" 
                    defaultValue="MarketPro Agency" 
                    className="bg-background"
                  />
                </div>

                <Button onClick={handleSaveProfile} className="w-full sm:w-auto bg-gradient-primary">
                  <Save className="w-4 h-4 mr-2" />
                  Save Profile
                </Button>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card className="border-border/50 shadow-elegant animate-in fade-in duration-700">
              <CardHeader className="bg-gradient-to-r from-secondary/5 to-transparent">
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5 text-secondary" />
                  Notification Preferences
                </CardTitle>
                <CardDescription>
                  Choose how you want to receive updates and alerts
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:bg-muted/30 transition-colors">
                  <div className="space-y-1">
                    <Label htmlFor="email-notif" className="text-base font-medium cursor-pointer">
                      Email Notifications
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Receive campaign updates via email
                    </p>
                  </div>
                  <Switch 
                    id="email-notif"
                    checked={emailNotifications}
                    onCheckedChange={setEmailNotifications}
                  />
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:bg-muted/30 transition-colors">
                  <div className="space-y-1">
                    <Label htmlFor="push-notif" className="text-base font-medium cursor-pointer">
                      Push Notifications
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Get real-time alerts on your device
                    </p>
                  </div>
                  <Switch 
                    id="push-notif"
                    checked={pushNotifications}
                    onCheckedChange={setPushNotifications}
                  />
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:bg-muted/30 transition-colors">
                  <div className="space-y-1">
                    <Label htmlFor="marketing" className="text-base font-medium cursor-pointer">
                      Marketing Emails
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Receive tips, news, and promotions
                    </p>
                  </div>
                  <Switch 
                    id="marketing"
                    checked={marketingEmails}
                    onCheckedChange={setMarketingEmails}
                  />
                </div>

                <Button onClick={handleSaveNotifications} className="w-full sm:w-auto bg-gradient-secondary">
                  <Save className="w-4 h-4 mr-2" />
                  Save Preferences
                </Button>
              </CardContent>
            </Card>

            {/* Security */}
            <Card className="border-border/50 shadow-elegant animate-in fade-in duration-900">
              <CardHeader className="bg-gradient-to-r from-accent/5 to-transparent">
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-accent" />
                  Security Settings
                </CardTitle>
                <CardDescription>
                  Manage your password and security preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="space-y-2">
                  <Label htmlFor="current-password" className="flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    Current Password
                  </Label>
                  <Input 
                    id="current-password" 
                    type="password" 
                    placeholder="••••••••" 
                    className="bg-background"
                  />
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input 
                    id="new-password" 
                    type="password" 
                    placeholder="••••••••" 
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input 
                    id="confirm-password" 
                    type="password" 
                    placeholder="••••••••" 
                    className="bg-background"
                  />
                </div>

                <div className="p-4 rounded-lg bg-muted/50 border border-border/50">
                  <p className="text-sm text-muted-foreground">
                    Password must be at least 8 characters long and include uppercase, lowercase, numbers, and special characters.
                  </p>
                </div>

                <Button onClick={handleSaveSecurity} className="w-full sm:w-auto bg-accent text-accent-foreground">
                  <Save className="w-4 h-4 mr-2" />
                  Update Password
                </Button>
              </CardContent>
            </Card>

            {/* Appearance */}
            <Card className="border-border/50 shadow-elegant animate-in fade-in duration-1000">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-5 h-5 text-primary" />
                  Appearance
                </CardTitle>
                <CardDescription>
                  Customize how the app looks and feels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:bg-muted/30 transition-colors">
                  <div className="space-y-1">
                    <Label htmlFor="dark-mode" className="text-base font-medium cursor-pointer flex items-center gap-2">
                      {darkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                      Dark Mode
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Toggle between light and dark themes
                    </p>
                  </div>
                  <Switch 
                    id="dark-mode"
                    checked={darkMode}
                    onCheckedChange={toggleDarkMode}
                  />
                </div>

                <div className="p-4 rounded-lg border border-border/50 space-y-3">
                  <Label className="flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    Language
                  </Label>
                  <select className="w-full p-2 rounded-lg border border-border bg-background text-foreground">
                    <option>English (US)</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                  </select>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
