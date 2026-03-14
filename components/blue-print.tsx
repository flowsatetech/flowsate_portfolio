"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const BlueprintSection = () => {
  const cards = [
    {
      title: "Mission",
      description:
        "Our mission is to design, develop, and secure websites that empower businesses to thrive online.",
      bgImage: "/images/blue-wave.jpg",
      icon: "/images/mission-icon.png",
      iconBg: "bg-blue-600",
    },
    {
      title: "Vision",
      description:
        "Our vision is to create impactful solutions that transform businesses and help them grow.",
      bgImage: "/images/yellow-wave.jpg",
      icon: "/images/vision-icon.png",
      iconBg: "bg-yellow-500",
    },
    {
      title: "Values",
      description:
        "Our values focus on innovation, collaboration, and excellence in everything we do.",
      bgImage: "/images/red-wave.jpg",
      icon: "/images/values-icon.png",
      iconBg: "bg-red-600",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Our Blueprint
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We design, develop, and secure websites that help businesses grow with confidence.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden border cursor-pointer"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div
                className="h-40 flex items-center justify-center relative"
                style={{
                  backgroundImage: `url(${card.bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute -bottom-8 flex justify-center w-full">
                  <div
                    className={`${card.iconBg} rounded-full p-4 shadow-md`}
                  >
                    <Image
                      src={card.icon}
                      alt={card.title}
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
              </div>
              <div className="pt-12 pb-6 px-6 text-center text-gray-700">
                {card.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlueprintSection;