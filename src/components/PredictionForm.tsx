import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Calendar, Sparkles } from "lucide-react";
import { toast } from "sonner";

const PredictionForm = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [time, setTime] = useState("");

  const handlePredict = () => {
    if (!from || !to || !time) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Generating prediction...", {
      description: "This will be connected to your ML model"
    });
  };

  return (
    <section id="prediction-section" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get Your Route Prediction</h2>
          <p className="text-lg text-muted-foreground">Enter your journey details for AI-powered traffic insights</p>
        </div>

        <Card className="shadow-card border-2 hover:shadow-glow transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Route Details
            </CardTitle>
            <CardDescription>We'll analyze traffic patterns to give you the best prediction</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="from">From Location</Label>
                <Input 
                  id="from" 
                  placeholder="e.g., Koramangala" 
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className="border-2 focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="to">To Location</Label>
                <Input 
                  id="to" 
                  placeholder="e.g., Whitefield" 
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="border-2 focus:border-primary"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="time" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Time of Travel
                </Label>
                <Select value={time} onValueChange={setTime}>
                  <SelectTrigger className="border-2">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning (6-10 AM)</SelectItem>
                    <SelectItem value="afternoon">Afternoon (12-2 PM)</SelectItem>
                    <SelectItem value="evening">Evening (5-9 PM)</SelectItem>
                    <SelectItem value="night">Night (9 PM-6 AM)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="day">Day of Week</Label>
                <Select>
                  <SelectTrigger className="border-2">
                    <SelectValue placeholder="Select day" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="monday">Monday</SelectItem>
                    <SelectItem value="tuesday">Tuesday</SelectItem>
                    <SelectItem value="wednesday">Wednesday</SelectItem>
                    <SelectItem value="thursday">Thursday</SelectItem>
                    <SelectItem value="friday">Friday</SelectItem>
                    <SelectItem value="saturday">Saturday</SelectItem>
                    <SelectItem value="sunday">Sunday</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button 
              className="w-full text-lg shadow-glow hover:scale-105 transition-transform" 
              size="lg"
              onClick={handlePredict}
            >
              <Sparkles className="mr-2 w-5 h-5" />
              Predict Traffic
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PredictionForm;
