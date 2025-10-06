"use client";

import { TeamMemberCard } from "./TeamMemberCard";

const team = [
  {
    name: "Alex Thompson",
    role: "Lead Architect",
    experience: "12+ years",
    expertise: ["Cloud", "Architecture", "Microservices", "DevOps"],
    certifications: ["AWS Solutions Architect", "Kubernetes Certified"],
    image: "/images/team/alex.jpg",
  },
  {
    name: "Chisome Moses",
    role: "Lead Designer",
    experience: "16+ years",
    expertise: ["User Research", "Design Systems", "Accessibility"],
    certifications: ["Google UX Certificate", "Nielsen Norman Group"],
    image: "/images/team/chisome.jpg",
  },
  {
    name: "David Kim",
    role: "Full-Stack Developer",
    experience: "7+ years",
    expertise: ["React", "Node.js", "Database Design"],
    certifications: ["AWS Certified", "MongoDB Professional"],
    image: "/images/team/david.jpg",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
            Expert Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the certified professionals who will work on your project.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-10 justify-items-center">
          {team.map((member, index) => (
            <TeamMemberCard key={index} {...member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}