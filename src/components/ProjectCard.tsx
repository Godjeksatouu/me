import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Info } from "lucide-react";

interface ProjectCardProps {
  title: string;
  role: string;
  description: string;
  features: string[];
  techStack: string[];
  repoUrl?: string;
  demoUrl?: string;
  onViewDetails?: () => void;
  image?: string; // ✅ new prop for project image
}

const ProjectCard = ({
  title,
  role,
  description,
  features,
  techStack,
  repoUrl,
  demoUrl,
  onViewDetails,
  image,
}: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden h-full flex flex-col shadow-soft hover:shadow-glow transition-shadow">
        {/* Project Image or Fallback */}
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-48 w-full object-cover"
          />
        ) : (
          <div className="h-48 bg-gradient-primary flex items-center justify-center text-white text-6xl font-bold">
            {title.charAt(0)}
          </div>
        )}

        <div className="p-6 flex-1 flex flex-col">
          {/* Header */}
          <div className="mb-4">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-2xl font-bold">{title}</h3>
            </div>
            <Badge variant="secondary" className="mb-3">
              {role}
            </Badge>
            <p className="text-muted-foreground">{description}</p>
          </div>

          {/* Features */}
          <div className="mb-4">
            <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-primary">
              Key Features
            </h4>
            <ul className="space-y-1">
              {features.slice(0, 4).map((feature, index) => (
                <li key={index} className="text-sm text-foreground/80 flex items-start">
                  <span className="text-primary mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-primary">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {repoUrl && (
              <Button variant="outline" size="sm" asChild>
                <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Repo
                </a>
              </Button>
            )}
            {demoUrl && (
              <Button variant="outline" size="sm" asChild>
                <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </a>
              </Button>
            )}
            {onViewDetails && (
              <Button
                variant="default"
                size="sm"
                onClick={onViewDetails}
                className="bg-gradient-primary hover:opacity-90"
              >
                <Info className="w-4 h-4 mr-2" />
                Case Study
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
