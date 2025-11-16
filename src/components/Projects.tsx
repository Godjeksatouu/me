import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";


const projectsData = [
  {
    id: "pos",
    title: "POS / Caisse System",
    role: "Full-stack Developer",
    description: "Complete point-of-sale solution for retail businesses with real-time inventory tracking and comprehensive reporting.",
    features: [
      "Sales register with barcode scanning",
      "Automatic receipt generation",
      "Real-time inventory updates",
      "Daily/monthly sales reports",
      "Multi-user authentication & roles",
      "Customer management system",
    ],
    techStack: ["React", "Node.js", "Express", "Sql", "JWT Auth"],
    repoUrl: "#",
    demoUrl: "https://rafik.app/login",
    architecture: "3-tier architecture with REST API, JWT authentication, and normalized database design",
    lessons: "Learned importance of transaction handling, real-time data sync, and building intuitive UIs for non-technical users.",
    hasDetails: true,
    image: "/images/caisse.png",
  },
  {
    id: "inventory",
    title: "Inventory Management",
    role: "Full-stack Developer",
    description: "Enterprise-level inventory tracking system with supplier management and automated alerts.",
    features: [
      "CRUD operations for products & suppliers",
      "Low stock alerts & notifications",
      "CSV import/export functionality",
      "Advanced search & filtering",
      "Stock movement history",
      "Multi-warehouse support",
    ],
    techStack: ["Next", "TypeScript", "Node.js", "MySQL", "Redis"],
    repoUrl: "#",
    demoUrl: "https://osccarrafik.ma/",
    architecture: "Microservices architecture with caching layer, event-driven notifications, and optimized queries",
    lessons: "Gained experience in complex data relationships, query optimization, and building scalable backend services.",
    hasDetails: true,
    image: "/images/pos.png",
  },
  {
  id: "rectjs-ecommerce",
  title: "E-commerce ",
  role: "Full-stack Developer",
  description: "Complete e-commerce platform built with React, Node.js, Express, and SQL, including a full admin panel to manage products, orders, and users.",
  features: [
    "Responsive online store with product catalog",
    "Shopping cart and checkout system",
    "Order management via admin panel",
    "User authentication and role management",
    "SQL database with relational design",
    "Real-time stock updates and reporting"
  ],
  techStack: ["React.js", "Node.js", "Express", "SQL", "JWT Auth"],
  repoUrl: "#",
  demoUrl: "https://topleader.ma/",
  hasDetails: true,
  image: "/images/topleader.png", 
  },
  {
  id: "nextjs-laptops-store",
  title: "Next.js E-commerce Store",
  role: "Full-stack Developer",
  description: "Modern e-commerce platform built with Next.js, Node.js, Express, and SQL. Includes automated email notifications, invoice generation, and Cash on Delivery payments.",
  features: [
    "Responsive online store with product catalog",
    "Shopping cart and checkout system",
    "Order confirmation emails to clients",
    "Automated invoice generation and email delivery",
    "Admin panel to manage products, orders, and customers",
    "User authentication and role-based access control",
    "Real-time stock updates and reporting"
  ],
  techStack: ["Next.js", "React.js", "Node.js", "Express", "SQL", "Nodemailer", "JWT Auth"],
  repoUrl: "https://github.com/Godjeksatouu/ordinateur-store",
  demoUrl: "https://www.ordinateurstore.ma/",
  hasDetails: true,
  image: "/images/store.png", 
},
{
  id: "react-perfume-store",
  title: "Perfume E-commerce Website",
  role: "Full-stack Developer",
  description: "A modern perfume e-commerce platform built with React.js, Node.js, Express, and SQL, featuring a full admin panel, order tracking, and inventory management.",
  features: [
    "Responsive product catalog with detailed perfume pages",
    "Shopping cart and secure checkout",
    "Admin panel to manage products, orders, and users",
    "Stock management with real-time updates",
    "User authentication and role-based access control",
    "Supports multiple payment methods including Cash on Delivery"
  ],
  techStack: ["React.js", "Node.js", "Express", "SQL", "JWT Auth", "Nodemailer"],
  repoUrl: "#",
  demoUrl: "https://enkey.ma/",
  hasDetails: true,
  image: "/images/enkey.png", 
},
{
  id: "wordpress-foods",
  title: "Food Selling Website (WordPress)",
  role: "Frontend & WordPress Developer",
  description: "Custom WordPress site for a local food business, featuring a responsive menu, online ordering, and customer management.",
  features: [
    "Custom WordPress theme development",
    "Responsive design for all devices",
    "Menu and product catalog management",
    "Online ordering system integrated with backend",
    "Customer registration and order tracking",
    "SEO optimization and performance enhancements"
  ],
  techStack: ["WordPress", "PHP", "JavaScript", "CSS", "ACF"],
  repoUrl: "#",
  demoUrl: "https://mocreativ.online/",
  hasDetails: false,
  image: "/images/wp.png", 
},
{
  id: "gym-reservation",
  title: "Gym Reservation Platform",
  role: "Front-end Developer",
  description: "A modern front-end only platform for gym reservations, built with React, Tailwind CSS, and Vite. Users can browse programs, book classes, and view schedules.",
  features: [
    "Responsive UI for browsing gym programs and classes",
    "Class reservation system with available slots",
    "Schedule overview for programs and trainers",
    "User-friendly interface with Tailwind styling",
    "Dynamic filtering and search for classes",
    "Front-end only; ready to integrate with backend API"
  ],
  techStack: ["React.js", "Tailwind CSS", "Vite", "JavaScript"],
  repoUrl: "#",
  demoUrl: "https://ui-website-gym.vercel.app/",
  hasDetails: false,
  image: "/images/gym.png", 
}
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Real-world applications showcasing full-stack development expertise
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard
                  {...project}
                  onViewDetails={
                    project.hasDetails
                      ? () => setSelectedProject(project)
                      : undefined
                  }
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Case Study Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedProject?.title}</DialogTitle>
            <DialogDescription className="text-base">
              {selectedProject?.role}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 mt-4">
            {/* Architecture */}
            <div>
              <h3 className="text-lg font-semibold mb-2 text-primary">Architecture</h3>
              <p className="text-foreground/80">{selectedProject?.architecture}</p>
            </div>

            {/* All Features */}
            <div>
              <h3 className="text-lg font-semibold mb-2 text-primary">Complete Feature Set</h3>
              <ul className="space-y-2">
                {selectedProject?.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-foreground/80">
                    <span className="text-primary mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Lessons Learned */}
            <div>
              <h3 className="text-lg font-semibold mb-2 text-primary">Key Learnings</h3>
              <p className="text-foreground/80">{selectedProject?.lessons}</p>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-lg font-semibold mb-2 text-primary">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject?.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-muted rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Why This Matters */}
            <div className="bg-muted/50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-primary">Why This Project Matters</h3>
              <p className="text-foreground/80">
                This project demonstrates end-to-end ownership of a complex system—from database
                design and API development to building an intuitive user interface. It showcases
                ability to handle real business requirements, data integrity, and user experience
                simultaneously.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
