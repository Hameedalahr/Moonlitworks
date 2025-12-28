import { Link } from "wouter";
import { Instagram, Twitter, Linkedin, Mail, Moon } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6 cursor-pointer">
              <img src="/logo.png" alt="Moonlit Works Logo" className="w-8 h-8 object-contain" />
              <span className="font-display font-bold text-xl tracking-tight">MOONLIT</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              We are Moonlit Works, a creative video production studio dedicated to bringing your vision to life through stunning visuals and compelling storytelling.
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div> */}
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-6">Navigation</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
            
              <li>Event Videos</li>
              <li>Social Media Content</li>
              <li>Music Videos</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>moonlitworks2024@gmail.com</span>
              </li>
              <li>+91 9490627247</li>
            
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground/50">
          <p>&copy; {new Date().getFullYear()} Moonlit Works. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://drive.google.com/file/d/1cDAvrBBBwSEm0owjdjy7knHhzVO2jPe7/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="https://drive.google.com/file/d/1Xc3kSXg1JAggBJRIa1S36QhqbgGalXRu/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
