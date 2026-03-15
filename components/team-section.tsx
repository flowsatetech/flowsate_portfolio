"use client";
import Image from "next/image";
import Carousel from "@/components/carousel";

const teamMembers = [
  { name: "John Doe", role: "CEO", image: "/images/team1.jpg" },
  { name: "Jane Smith", role: "CTO", image: "/images/team2.jpg" },
  { name: "Alex Brown", role: "Designer", image: "/images/team3.jpg" },
  { name: "Mia Lee", role: "Developer", image: "/images/team4.jpg" },
  { name: "Mia Lee", role: "Developer", image: "/images/team4.jpg" },
  { name: "Mia Lee", role: "Developer", image: "/images/team4.jpg" },
  { name: "Mia Lee", role: "Developer", image: "/images/team4.jpg" },
  { name: "Mia Lee", role: "Developer", image: "/images/team4.jpg" },
];

const TeamSection = () => (
  <section className="py-20 px-6 bg-gray-50">
    <h2 className="text-3xl font-semibold text-gray-800 text-center mb-4">
      The Team
    </h2>

    <p className="text-center max-w-2xl mx-auto text-gray-600 mb-12">
      A creative mix of designers, developers, and strategists, united by a
      passion for turning ideas into impactful digital experiences.
    </p>

    <Carousel
      items={teamMembers.map((member, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-4 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          <Image
            src={member.image}
            alt={member.name}
            width={150}
            height={150}
            className="rounded-xl mb-4 object-cover w-50 h-50 transition-transform duration-300 hover:scale-105"
          />

          <h4 className="font-semibold text-lg text-gray-800">
            {member.name}
          </h4>

          <p className="text-gray-500 text-sm">{member.role}</p>
        </div>
      ))}
      itemMinWidth={250}
    />
  </section>
);

export default TeamSection;