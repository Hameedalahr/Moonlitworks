import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Play, Award, Zap, Globe } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Unsplash abstract dark cinematic background */}
          <img 
            src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop"
            alt="Cinematic Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
        </div>

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center"
          >
            <motion.div variants={itemVariants} className="mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm inline-flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-medium tracking-wide uppercase text-primary-foreground/80">Available for projects</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-tight">
              We Craft <span className="text-gradient">Visual</span><br />
              <span className="italic font-serif font-light text-muted-foreground/80">Masterpieces</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              Moonlit Works is a digital cinema agency specializing in high-end video production, creative direction, and brand storytelling.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4">
              <Link href="/portfolio">
                <button className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(var(--primary),0.3)] flex items-center">
                  View Our Work <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-8 py-4 rounded-full bg-white/5 text-white font-semibold text-lg hover:bg-white/10 border border-white/10 backdrop-blur-sm transition-all duration-300">
                  Get in Touch
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-primary font-mono text-sm tracking-wider uppercase">Selected Projects</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">Our Latest Work</h2>
            </div>
            <Link href="/portfolio" className="hidden md:flex items-center text-muted-foreground hover:text-white transition-colors group">
              View All Projects <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {[1, 2].map((i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                      <Play className="w-6 h-6 text-white fill-white ml-1" />
                    </div>
                  </div>
                  {/* Unsplash tech/abstract placeholder */}
                  <img 
                    src={i === 1 ? "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&auto=format&fit=crop" : "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=800&auto=format&fit=crop"} 
                    alt="Project Thumbnail"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-2xl font-bold font-display mb-2 group-hover:text-primary transition-colors">Project Title {i}</h3>
                <p className="text-muted-foreground">Brand Campaign • 2024</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link href="/portfolio">
              <button className="w-full py-4 rounded-xl border border-white/10 text-white font-medium hover:bg-white/5">
                View All Projects
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-card/50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-mono text-sm tracking-wider uppercase">What We Do</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-6">Cinematic excellence for every platform.</h2>
            <p className="text-muted-foreground text-lg">We combine technical expertise with creative vision to deliver content that stands out in a crowded digital landscape.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Film className="w-8 h-8" />, 
                title: "Production", 
                desc: "Full-service video production from concept to final delivery. We handle logistics, filming, and post-production." 
              },
              { 
                icon: <Zap className="w-8 h-8" />, 
                title: "Social Content", 
                desc: "High-impact short-form content designed for virality. Reels, TikToks, and YouTube Shorts that engage." 
              },
              { 
                icon: <Globe className="w-8 h-8" />, 
                title: "Brand Strategy", 
                desc: "Visual identity and content strategy that aligns with your brand goals and speaks to your target audience." 
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                className="p-8 rounded-2xl bg-card border border-white/5 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold font-display mb-4 text-white group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative p-12 md:p-24 rounded-3xl overflow-hidden border border-white/10"
          >
            {/* Background image for CTA */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://pixabay.com/get/g8178419e970f5729e2c30f40b8add4249f20a9fe7a87f67a512bd6a8425b2b10c2ad531d564f7f74bf295082d5c2391199c991a85d4df29fe85023b3d0c74452_1280.jpg"
                alt="Studio Background"
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/95" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-8">Ready to create something <span className="text-gradient">extraordinary?</span></h2>
              <p className="text-xl text-muted-foreground mb-10">Let's tell your story with the cinematic quality it deserves.</p>
              <Link href="/contact">
                <button className="px-10 py-5 rounded-full bg-white text-black font-bold text-lg hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300 shadow-xl">
                  Start Your Project
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
