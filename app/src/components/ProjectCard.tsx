import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ChevronDown } from "lucide-react";
import { useState } from "react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 1,
        delay: index * 0.15,
        ease: [0.165, 0.84, 0.44, 1] as const,
      }}
      whileHover={{ y: -8 }}
      className="bg-dark-secondary border border-white/10 rounded-3xl overflow-hidden card-hover cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-coral/10 text-coral border-0 text-xs uppercase tracking-wider"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <h3 className="text-xl md:text-2xl font-semibold uppercase tracking-tight text-white mb-2">
          {project.title}
        </h3>

        <p className="text-white/60 text-base mb-4">{project.summary}</p>

        {/* Expandable Content */}
        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{
            duration: 0.4,
            ease: [0.165, 0.84, 0.44, 1] as const,
          }}
          className="overflow-hidden"
        >
          <div className="pt-4 border-t border-white/10 space-y-4">
            <div>
              <h4 className="text-sm uppercase tracking-wider text-coral mb-2">
                Problem
              </h4>
              <p className="text-white/60 text-sm">{project.problem}</p>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-coral mb-2">
                Solution
              </h4>
              <p className="text-white/60 text-sm">{project.solution}</p>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-coral mb-2">
                Architecture
              </h4>
              <ul className="space-y-1">
                {project.architecture.map((item, i) => (
                  <li
                    key={i}
                    className="text-white/60 text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-coral rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-coral mb-2">
                Key Outcomes
              </h4>
              <ul className="space-y-1">
                {project.outcomes.map((outcome, i) => (
                  <li
                    key={i}
                    className="text-white/60 text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-coral rounded-full" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>

            {project.repoLink && (
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-coral hover:text-coral-light transition-colors duration-200 text-sm"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-4 h-4" />
                View Repository
              </a>
            )}
          </div>
        </motion.div>

        {/* Expand Toggle */}
        <div className="flex items-center justify-center mt-4 pt-4 border-t border-white/10">
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-white/40"
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
