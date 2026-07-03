import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";

const skillsData = [
  { name: "React.js", level: 95, icon: "⚛️" },
  { name: "Next.js", level: 95, icon: "▲" },
  { name: "Node.js", level: 80, icon: "🟢" },
  { name: "TypeScript", level: 85, icon: "🔷" },
  { name: "Tailwind CSS", level: 90, icon: "🎨" },
  { name: "SQL", level: 75, icon: "🗄️" },
  { name: "PHP", level: 60, icon: "🐘" },
  { name: "WordPress", level: 70, icon: "📝" },
  { name: "Git/GitHub", level: 95, icon: "🔀" },
  { name: "REST APIs", level: 80, icon: "🔌" },
  { name: "Responsive Design", level: 90, icon: "📱" },
  { name: "UI/UX", level: 95, icon: "✨" },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, full-stack web applications
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skillsData.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="p-6 hover:shadow-soft transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{skill.icon}</span>
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="absolute top-0 left-0 h-full bg-gradient-primary"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.05 + 0.3, ease: "easeOut" }}
                    />
                  </div>
                  
                  <div className="mt-2 text-sm text-muted-foreground text-right">
                    {skill.level}%
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
