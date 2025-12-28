import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Film, Zap, Globe, Music, Camera, PenTool, Check } from "lucide-react";

const services = [
  {
    icon: <Film className="w-10 h-10" />,
    title: "Commercial Production",
    description: "High-end commercials for TV and digital platforms that communicate your brand's unique value proposition.",
    features: ["Concept Development", "Scriptwriting", "4K/8K Production", "Color Grading"]
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: "Social Media Content",
    description: "Engaging short-form content designed specifically for TikTok, Reels, and YouTube Shorts to maximize organic reach.",
    features: ["Trend Analysis", "Vertical Video", "Fast Turnaround", "Monthly Packages"]
  },
  {
    icon: <Globe className="w-10 h-10" />,
    title: "Event Coverage",
    description: "Cinematic documentation of corporate events, festivals, and launches that captures the energy and scale of the moment.",
    features: ["Multi-cam Setup", "Live Streaming", "Same-day Edits", "Highlight Reels"]
  },
  {
    icon: <Music className="w-10 h-10" />,
    title: "Music Videos",
    description: "Creative visual storytelling for artists and labels. We bring your sonic vision to life through stunning imagery.",
    features: ["Art Direction", "Location Scouting", "VFX & Animation", "Narrative Flow"]
  },
  {
    icon: <Camera className="w-10 h-10" />,
    title: "Product Videography",
    description: "Showcase your products in motion. Clean, dynamic lighting and movement that highlights details and features.",
    features: ["Studio Lighting", "Macro Videography", "360 Rotation", "Lifestyle Context"]
  },
  {
    icon: <PenTool className="w-10 h-10" />,
    title: "Brand Strategy",
    description: "We don't just film; we strategize. Consulting on video marketing funnels and content distribution.",
    features: ["Audience Research", "Content Calendar", "Platform Strategy", "Analytics Review"]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-32 pb-24">
        {/* Header */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-5xl md:text-6xl font-bold mb-6"
            >
              Our <span className="text-gradient">Services</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              We offer a comprehensive suite of video production and creative services tailored to modern brands.
            </motion.p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group p-8 rounded-3xl bg-card border border-white/5 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--primary),0.1)]"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold font-display mb-4 text-white group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground mb-8 min-h-[80px]">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground/80">
                      <Check className="w-4 h-4 text-accent mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-32">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">How We Work</h2>
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", desc: "We learn about your goals, audience, and vision." },
                { step: "02", title: "Pre-Production", desc: "Scripting, storyboarding, and logistical planning." },
                { step: "03", title: "Production", desc: "Lights, camera, action. We bring the vision to life." },
                { step: "04", title: "Post-Production", desc: "Editing, sound design, and color grading mastery." }
              ].map((item, i) => (
                <div key={i} className="relative bg-background md:bg-transparent p-6 md:p-0 z-10 text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-card border border-white/20 flex items-center justify-center font-mono font-bold text-primary mb-4 shadow-xl">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
