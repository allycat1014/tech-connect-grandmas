import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Smartphone, Monitor, Wifi } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const techHelpTypes = [
  { value: "smartphone", label: "Smartphone/iPhone", icon: Smartphone },
  { value: "computer", label: "Computer/Laptop", icon: Monitor },
  { value: "internet", label: "Internet/WiFi", icon: Wifi },
  { value: "email", label: "Email Setup", icon: Monitor },
  { value: "social", label: "Social Media", icon: Smartphone },
  { value: "video-calls", label: "Video Calls", icon: Monitor },
  { value: "apps", label: "Apps & Software", icon: Smartphone },
  { value: "other", label: "Other Tech Help", icon: Monitor }
];

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
];

export const SeniorHelpForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    helpType: "",
    description: "",
    preferredDate: "",
    preferredTime: "",
    meetingType: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically submit to a backend
    toast({
      title: "Help Request Submitted!",
      description: "We'll match you with a volunteer and send you confirmation details via email.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      helpType: "",
      description: "",
      preferredDate: "",
      preferredTime: "",
      meetingType: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="get-help" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get Tech Help
            </h2>
            <p className="text-xl text-muted-foreground">
              Tell us what you need help with and when you're available. 
              We'll connect you with a friendly volunteer.
            </p>
          </div>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Calendar className="h-6 w-6 text-primary" />
                Request Help Session
              </CardTitle>
              <CardDescription className="text-lg">
                Fill out this form and we'll match you with an available volunteer
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base font-medium">Your Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="text-base py-3"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base font-medium">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="text-base py-3"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-base font-medium">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="text-base py-3"
                    required
                  />
                </div>

                <div className="space-y-3">
                  <Label className="text-base font-medium">What do you need help with?</Label>
                  <Select onValueChange={(value) => handleInputChange("helpType", value)}>
                    <SelectTrigger className="text-base py-3">
                      <SelectValue placeholder="Choose the type of tech help you need" />
                    </SelectTrigger>
                    <SelectContent>
                      {techHelpTypes.map((type) => {
                        const Icon = type.icon;
                        return (
                          <SelectItem key={type.value} value={type.value} className="text-base py-3">
                            <div className="flex items-center gap-2">
                              <Icon className="h-4 w-4" />
                              {type.label}
                            </div>
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-base font-medium">
                    Describe what you need help with
                  </Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    placeholder="For example: I need help setting up email on my new phone, or I can't figure out how to video call my grandchildren..."
                    className="text-base min-h-[100px]"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="preferredDate" className="text-base font-medium">Preferred Date</Label>
                    <Input
                      id="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                      className="text-base py-3"
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-base font-medium">Preferred Time</Label>
                    <Select onValueChange={(value) => handleInputChange("preferredTime", value)}>
                      <SelectTrigger className="text-base py-3">
                        <SelectValue placeholder="Choose your preferred time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time} className="text-base">
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4" />
                              {time}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="text-base font-medium">How would you prefer to meet?</Label>
                  <Select onValueChange={(value) => handleInputChange("meetingType", value)}>
                    <SelectTrigger className="text-base py-3">
                      <SelectValue placeholder="Choose your preferred meeting type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="video" className="text-base">Video Call (online)</SelectItem>
                      <SelectItem value="phone" className="text-base">Phone Call</SelectItem>
                      <SelectItem value="in-person" className="text-base">In Person (if available in your area)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-lg py-6 bg-gradient-hero shadow-soft"
                >
                  Submit Help Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};