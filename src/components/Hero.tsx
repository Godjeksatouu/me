// src/components/Hero.tsx
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Mohamedamine <span className="text-gradient">Satou</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground mb-2"
          >
            Frontend & Full-stack Developer
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-8"
          >
            23 years old • 2+ years of experience
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto"
          >
            Building modern web applications with clean UI and solid backend architecture.
            Specialized in full-stack solutions from POS systems to inventory management.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-soft"
              asChild
            >
              <a href="#projects">View Projects</a>
            </Button>

            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4"
          >
            <a
              href="https://instagram.com/satou.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>

            <a
              href="https://github.com/Godjeksatouu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>

            <a
              href="https://ma.linkedin.com/in/mohamedamine-satou-469b20221"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;