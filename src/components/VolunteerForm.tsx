import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Users, Heart, Calendar, Clock, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const techSkills = [
  "Smartphones/iPhone", "Android phones", "Computers/Laptops", "Internet/WiFi",
  "Email setup", "Social Media", "Video calls", "Apps & Software",
  "Smart home devices", "Tablets/iPads", "Online shopping", "Banking apps"
];

const availabilitySlots = [
  { day: "Monday", times: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"] },
  { day: "Tuesday", times: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"] },
  { day: "Wednesday", times: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"] },
  { day: "Thursday", times: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"] },
  { day: "Friday", times: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"] },
  { day: "Saturday", times: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"] },
  { day: "Sunday", times: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"] }
];

export const VolunteerForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    experience: "",
    skills: [] as string[],
    availability: {} as Record<string, string[]>,
    meetingTypes: [] as string[]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for volunteering!",
      description: "We've received your application. We'll notify you when seniors need help in your area of expertise.",
    });
    setFormData({
      name: "",
      email: "",
      age: "",
      experience: "",
      skills: [],
      availability: {},
      meetingTypes: []
    });
  };

  const handleSkillToggle = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const handleAvailabilityToggle = (day: string, time: string) => {
    setFormData(prev => {
      const dayAvailability = prev.availability[day] || [];
      const newDayAvailability = dayAvailability.includes(time)
        ? dayAvailability.filter(t => t !== time)
        : [...dayAvailability, time];
      
      return {
        ...prev,
        availability: {
          ...prev.availability,
          [day]: newDayAvailability
        }
      };
    });
  };

  const handleMeetingTypeToggle = (type: string) => {
    setFormData(prev => ({
      ...prev,
      meetingTypes: prev.meetingTypes.includes(type)
        ? prev.meetingTypes.filter(t => t !== type)
        : [...prev.meetingTypes, type]
    }));
  };

  return (
    <section id="volunteer" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Become a Volunteer
            </h2>
            <p className="text-xl text-muted-foreground">
              Share your tech knowledge and help seniors navigate the digital world. 
              Set your availability and we'll match you with those who need help.
            </p>
          </div>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Heart className="h-6 w-6 text-trust" />
                Volunteer Application
              </CardTitle>
              <CardDescription className="text-lg">
                Tell us about yourself and when you're available to help
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="volunteerName" className="text-base font-medium">Your Name</Label>
                    <Input
                      id="volunteerName"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="text-base py-3"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="volunteerEmail" className="text-base font-medium">Email Address</Label>
                    <Input
                      id="volunteerEmail"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="text-base py-3"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="age" className="text-base font-medium">Age</Label>
                  <Select onValueChange={(value) => setFormData(prev => ({ ...prev, age: value }))}>
                    <SelectTrigger className="text-base py-3">
                      <SelectValue placeholder="Select your age range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="13-17">13-17 years old</SelectItem>
                      <SelectItem value="18-25">18-25 years old</SelectItem>
                      <SelectItem value="26-35">26-35 years old</SelectItem>
                      <SelectItem value="36+">36+ years old</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label className="text-base font-medium">Tech skills you can help with</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {techSkills.map((skill) => (
                      <div key={skill} className="flex items-center space-x-2">
                        <Checkbox
                          id={skill}
                          checked={formData.skills.includes(skill)}
                          onCheckedChange={() => handleSkillToggle(skill)}
                        />
                        <Label
                          htmlFor={skill}
                          className="text-sm font-normal cursor-pointer"
                        >
                          {skill}
                        </Label>
                      </div>
                    ))}
                  </div>
                  {formData.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {formData.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-sm">
                          {skill}
                          <button
                            type="button"
                            onClick={() => handleSkillToggle(skill)}
                            className="ml-2 hover:text-destructive"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience" className="text-base font-medium">
                    Tell us about your tech experience
                  </Label>
                  <Textarea
                    id="experience"
                    value={formData.experience}
                    onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))}
                    placeholder="For example: I've been helping my grandparents with their phones for years, or I study computer science and love teaching others..."
                    className="text-base min-h-[100px]"
                    required
                  />
                </div>

                <div className="space-y-4">
                  <Label className="text-base font-medium">Your availability</Label>
                  <p className="text-sm text-muted-foreground">Select the days and times when you're available to help</p>
                  
                  <div className="space-y-4">
                    {availabilitySlots.map((daySlot) => (
                      <div key={daySlot.day} className="border rounded-lg p-4">
                        <h4 className="font-medium mb-3 flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {daySlot.day}
                        </h4>
                        <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                          {daySlot.times.map((time) => (
                            <button
                              key={`${daySlot.day}-${time}`}
                              type="button"
                              onClick={() => handleAvailabilityToggle(daySlot.day, time)}
                              className={`p-2 rounded text-sm border transition-colors ${
                                formData.availability[daySlot.day]?.includes(time)
                                  ? 'bg-primary text-primary-foreground border-primary'
                                  : 'border-border hover:bg-accent'
                              }`}
                            >
                              <Clock className="h-3 w-3 mx-auto mb-1" />
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="text-base font-medium">How can you help? (select all that apply)</Label>
                  <div className="space-y-2">
                    {["Video calls", "Phone calls", "In-person (if in same area)"].map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox
                          id={type}
                          checked={formData.meetingTypes.includes(type)}
                          onCheckedChange={() => handleMeetingTypeToggle(type)}
                        />
                        <Label htmlFor={type} className="text-sm font-normal cursor-pointer">
                          {type}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-lg py-6 bg-trust hover:bg-trust/90 shadow-soft"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Submit Volunteer Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};