import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Calendar, GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "Full Stack Development",
    school: "SOLICODE - OFPPT",
    duration: "2024 – 2025",
    bullets: [
      "Developed responsive front-end and back-end web applications.",
      "Designed and optimized relational databases for scalable applications.",
      "Collaborated using Agile methodologies and Git version control.",
      "Delivered full-stack projects following modern development practices.",
    ],
  },
  {
    degree: "Software Engineering",
    school: "ALX Bootcamp (Remote)",
    duration: "2023 – 2025",
    bullets: [
      "Pursued Software Engineering studies remotely through ALX.",
      "Developed practical programming and software development skills.",
      "Completed hands-on projects using industry-standard tools.",
      "Applied problem-solving and collaborative development practices.",
    ],
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            My <span className="text-gradient">Education</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Academic pathways and specialized bootcamps
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex"
              >
                <Card className="p-6 md:p-8 hover:shadow-soft transition-all border border-border/80 flex flex-col justify-between w-full">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground leading-tight">{edu.degree}</h3>
                        <p className="text-primary font-medium text-base mt-0.5">{edu.school}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground font-medium bg-muted/65 px-3 py-1 rounded-full text-xs w-fit mb-6">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.duration}</span>
                    </div>

                    <ul className="space-y-2.5">
                      {edu.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start text-foreground/80 text-sm leading-relaxed">
                          <span className="text-primary mr-2.5 mt-1.5 text-[8px] flex-shrink-0">●</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
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

export default Education;
