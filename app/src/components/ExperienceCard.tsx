import { motion } from "framer-motion";
import type { Experience } from "@/data/experience";
import { Briefcase, MapPin, Calendar } from "lucide-react";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 1,
        delay: index * 0.2,
        ease: [0.165, 0.84, 0.44, 1] as const,
      }}
      className="relative"
    >
      {/* Timeline connector */}
      {index === 0 && (
        <div className="absolute left-6 top-16 bottom-0 w-px bg-gradient-to-b from-coral to-transparent" />
      )}

      <div className="bg-dark-secondary border border-white/10 rounded-3xl p-6 md:p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-coral/10 rounded-xl text-coral shrink-0">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold uppercase tracking-tight text-white">
                {experience.title}
              </h3>
              <p className="text-coral text-lg">{experience.company}</p>
            </div>
          </div>
          <div className="flex flex-col items-start md:items-end gap-1 text-white/50 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{experience.period}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{experience.location}</span>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="space-y-3">
          {experience.achievements.map((achievement, achievementIndex) => (
            <motion.div
              key={achievementIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2 + achievementIndex * 0.1,
                ease: [0.165, 0.84, 0.44, 1] as const,
              }}
              className="flex items-start gap-3 p-3 rounded-xl bg-white/5"
            >
              <span className="w-2 h-2 bg-coral rounded-full mt-2 shrink-0" />
              <p className="text-white/60 text-sm md:text-base leading-relaxed">
                {achievement}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
