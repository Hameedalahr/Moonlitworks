import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(httpServer: Server, app: Express): Promise<Server> {
  // Configure mailer if SMTP env vars are provided
  let mailer: nodemailer.Transporter | null = null;
  if (process.env.SMTP_HOST && process.env.SMTP_USER) {
    mailer = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587", 10),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }
  // Contact Form
  app.post(api.messages.create.path, async (req, res) => {
    try {
      const input = api.messages.create.input.parse(req.body);
      const message = await storage.createMessage(input);

      // Attempt to send an email notification to the site owner
      try {
        if (mailer) {
          await mailer.sendMail({
            from: process.env.EMAIL_FROM || process.env.SMTP_USER,
            to: "moonlitworks2024@gmail.com",
            subject: `New contact message from ${input.name}`,
            text: `Name: ${input.name}\nEmail: ${input.email}\nProject Type: ${input.projectType}\n\nMessage:\n${input.message}`,
            html: `<p><strong>Name:</strong> ${input.name}</p><p><strong>Email:</strong> ${input.email}</p><p><strong>Project Type:</strong> ${input.projectType}</p><hr/><p>${input.message}</p>`,
          });
        } else {
          console.log("SMTP not configured — contact message:", input);
        }
      } catch (mailErr) {
        console.error("Failed to send contact email:", mailErr);
      }

      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid input", details: err.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Projects
  app.get(api.projects.list.path, async (req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  // Seeding Data
  const existingProjects = await storage.getProjects();
  if (existingProjects.length === 0) {
    await storage.createProject({
      title: "Village Vihari",
      category: "YouTube",
      videoUrl: "https://www.youtube.com/embed/7B-PGy50jRQ",
      thumbnail: "https://github.com/Hameedalahr/DIP-SIP/blob/main/maxresdefault.jpg?raw=true",
      description: "Vilage vihari is a youtube channel that showcase historical content."
    });
    await storage.createProject({
      title: "Genie Finance",
      category: "Reels",
      videoUrl: "https://www.youtube.com/embed/DPKkdtD6dmQ", // Rick Roll placeholder, replace with valid if available
      thumbnail: "https://github.com/Hameedalahr/DIP-SIP/blob/main/Genie%20Finance%20(1).png?raw=true",
      description: "Genie Finance is a Instagram page that provides financial tips and advice through engaging reels."
    });
    
    await storage.createProject({
      title: "Rishab Pant Comeback",
      category: "YouTube",
      videoUrl: "https://www.youtube.com/embed/UWqSdBv-gDg",
      thumbnail: "https://github.com/Hameedalahr/DIP-SIP/blob/main/UWqSdBv-gDg-HD.jpg?raw=true",
      description: "Full length basic Youtube video focusing on Rishab Pant's comeback."
    });
    await storage.createProject({
      title: "Tech Related Videos",
      category: "Reels",
      videoUrl: "https://www.youtube.com/embed/cjanl9LdRSA",
      thumbnail: "https://github.com/Hameedalahr/DIP-SIP/blob/main/Screenshot%202025-12-28%20164634.png?raw=true",
      description: "Videos that cover the latest trends and innovations in technology."
    });
    await storage.createProject({
      title: "RGM EXPO 2025",
      category: "Events",
      videoUrl: "https://www.youtube.com/embed/K8U0956TN7c",
      thumbnail: "https://github.com/Hameedalahr/DIP-SIP/blob/main/Screenshot%202025-12-28%20170753.png?raw=true",
      description: "A simple promo video for an expo event."
    });
    await storage.createProject({
      title: "Faculty Spotlight",
      category: "Events",
      videoUrl: "https://www.youtube.com/embed/Y8mtsyXAckg",
      thumbnail: "https://github.com/Hameedalahr/DIP-SIP/blob/main/Screenshot%202025-12-28%20170611.png?raw=true",
      description: "Faculty Introduction video for an educational institute."
    });
    await storage.createProject({
      title: "Stall poster",
      category: "Designs",
      videoUrl: "https://github.com/Hameedalahr/DIP-SIP/blob/main/Copy%20of%20DIP%20&%20SIP%20(5000%20x%202500%20px).png?raw=true",
      thumbnail: "https://github.com/Hameedalahr/DIP-SIP/blob/main/Copy%20of%20DIP%20&%20SIP%20(5000%20x%202500%20px).png?raw=true",
      description: "Poster for a food Stall."
    });
    await storage.createProject({
      title: "Logo Design",
      category: "Designs",
      videoUrl: "https://github.com/Hameedalahr/DIP-SIP/blob/main/Design%20-%207.png?raw=true",
      thumbnail: "https://github.com/Hameedalahr/DIP-SIP/blob/main/Design%20-%207.png?raw=true",
      description: "Logo for Cloud Kitchen."
    });
    await storage.createProject({
      title: "Food Menu",
      category: "Designs",
      videoUrl: "https://github.com/Hameedalahr/DIP-SIP/blob/main/KUTUMBAM%20MENU.png?raw=true",
      thumbnail: "https://github.com/Hameedalahr/DIP-SIP/blob/main/KUTUMBAM%20MENU.png?raw=true",
      description: "Menu for Food Stall."
    });
    
    
  }

  return httpServer;
}
