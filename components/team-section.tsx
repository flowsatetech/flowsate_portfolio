"use client";
import Image from "next/image";
import Carousel from "@/components/carousel";

const teamMembers = [
  { name: "Onuora Ruth", role: "Founder / COO", image: "/images/team1.png" },
  { name: "Mattia Lavai", role: "PM Support / Operations", image: "/images/team2.png" },
  { name: "Sifan Yemane", role: " Frontend Lead", image: "/images/team3.jpeg" },
  { name: "Ayomide Jolaoso", role: "Design Lead", image: "/images/team4.png" },
  { name: "Sandra Olisama", role: "DevOps Engineer Lead", image: "/images/team5.jpeg" },
  { name: "Onasoga Emmanuel", role: "Backend Lead", image: "/images/team6.jpeg" },
  { name: "Sharon Jebet Bungei", role: "Growth Lead", image: "/images/team7.png" },
  { name: "Esirioghene Joshua", role: "QA Engineer Lead", image: "/images/team8.jpeg" },
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
          <div className="w-[180px] h-[220px] overflow-hidden rounded-xl mb-4">
            <Image
              src={member.image}
              alt={member.name}
              width={180}
              height={220}
              className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
            />
          </div>

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