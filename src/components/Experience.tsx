import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Calendar, Briefcase } from "lucide-react";

const experienceData = [
  {
    role: "Robotics Trainer",
    company: "IQRAE SCHOOL",
    duration: "2022 – 2023",
    details: [
      "Taught students robot construction and block-based programming.",
      "Guided students in robot assembly and mechanical design.",
      "Trained students in robotics, coding, and robot control.",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 md:py-32 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            My professional journey and roles in the industry
          </p>

          <div className="space-y-6">
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 md:p-8 hover:shadow-soft transition-all border border-border/80">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <Briefcase className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                        <p className="text-primary font-medium text-lg">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground font-medium md:self-start bg-muted/65 px-3 py-1 rounded-full text-sm w-fit">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.details.map((item, idx) => (
                      <li key={idx} className="flex items-start text-foreground/80 text-base leading-relaxed">
                        <span className="text-primary mr-3 mt-1.5 text-xs">●</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
