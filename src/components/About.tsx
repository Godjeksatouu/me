import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            About <span className="text-gradient">Me</span>
          </h2>

          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
            I'm a passionate full-stack developer with 2+ years of experience building modern web applications. My expertise spans both frontend and backend development, from crafting responsive user interfaces with React and Next.js to designing robust APIs and SQL database architectures.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
             I specialize in delivering complete solutions for real-world business needs—whether it's a point-of-sale system managing thousands of transactions, a complex inventory management platform, or a custom WordPress site with pixel-perfect design.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              I focus on clean, maintainable code, modern best practices, and creating applications that are both efficient and user-friendly. My goal is to build solid, scalable solutions that make a real impact.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
