import { useState } from "react";
import { useProjects } from "@/hooks/use-projects";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Loader2 } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const categories = ["All", "Brand", "Reels", "Events", "YouTube"];

export default function Portfolio() {
  const { data: projects, isLoading, error } = useProjects();
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects?.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-5xl md:text-6xl font-bold mb-6"
            >
              Our <span className="text-gradient">Work</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg"
            >
              A curated selection of our finest productions.
            </motion.p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeCategory === category
                    ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                    : "bg-transparent text-muted-foreground border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="w-10 h-10 text-primary animate-spin" />
            </div>
          ) : error ? (
            <div className="text-center py-20 text-destructive">
              Failed to load projects. Please try again later.
            </div>
          ) : (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence>
                {filteredProjects?.map((project) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={project.id}
                  >
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="group cursor-pointer rounded-2xl overflow-hidden bg-card border border-white/5 relative aspect-[16/9] hover:border-primary/50 transition-colors duration-300">
                          <img 
                            src={project.thumbnail || `https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&auto=format&fit=crop`} 
                            alt={project.title}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center">
                            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-4 transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-75">
                              <Play className="w-5 h-5 ml-1" />
                            </div>
                            <h3 className="font-display text-xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.title}</h3>
                            <p className="text-sm text-primary/80 uppercase tracking-widest mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{project.category}</p>
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-5xl bg-black border-white/10 p-0 overflow-hidden aspect-video">
                        <iframe 
                          src={project.videoUrl} 
                          title={project.title}
                          className="w-full h-full" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen
                        />
                      </DialogContent>
                    </Dialog>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          {/* Empty State if no projects */}
          {!isLoading && filteredProjects?.length === 0 && (
            <div className="text-center py-24 border border-dashed border-white/10 rounded-2xl">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
