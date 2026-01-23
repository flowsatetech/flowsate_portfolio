"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

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

const services = [
  {
    title: "Branding",
    img: "/images/branding.png",
    points: [
      "Logo design",
      "Brand guidelines",
      "Color palettes & typography",
      "Brand voice development",
    ],
  },
 {
  title: "App development",
  img: "/images/branding.png",
  points: [
    "Custom mobile and web app solutions",
    "Seamless user experience design",
    "Integration with third-party APIs",
    "App maintenance and updates",
  ],
},
{
  title: "Cloud solutions",
  img: "/images/branding.png",
  points: [
    "Scalable cloud infrastructure setup",
    "Data storage and management",
    "Secure cloud migration",
    "Monitoring and optimization",
  ],
},
{
  title: "Data analytics",
  img: "/images/branding.png",
  points: [
    "Collect and analyze business data",
    "Generate actionable insights",
    "Dashboard and reporting solutions",
    "Predictive modeling and forecasting",
  ],
},

  {
    title: "UI/UX Design",
    img: "/images/uiux.png",
    points: [
      "Wireframing & prototyping",
      "User research & testing",
      "Mobile & web UI design",
      "Interaction design",
    ],
  },
  {
    title: "Web Development",
    img: "/images/webdev.png",
    points: [
      "Front & backend development",
      "E-commerce solutions",
      "CMS integration",
      "Website maintenance",
    ],
  },
];

// Reusable Carousel component
const Carousel = ({
  items,
  itemMinWidth,
  speed = 50, // px per second
}: {
  items: React.ReactNode[];
  itemMinWidth: number;
  speed?: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const totalWidth = containerRef.current.scrollWidth / 2;
      setScrollWidth(totalWidth);

      controls.start({
        x: [-0, -totalWidth],
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: totalWidth / speed,
        },
      });
    }
  }, [items, speed, controls]);

  return (
    <div className="overflow-hidden">
      <motion.div ref={containerRef} className="flex gap-8" animate={controls}>
        {items.concat(items).map((item, idx) => (
          <div key={idx} className={`flex-shrink-0 min-w-[${itemMinWidth}px]`}>
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function AboutPage() {
  return (
    <main className="flex flex-col">
    {/* Hero Section - Our Story with animated text */}
<section className="relative flex justify-center py-20 px-6 bg-gray-50">
  <div className="relative w-full max-w-6xl rounded-md overflow-hidden">
    {/* Background image */}
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.4 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
    >
      <Image
        src="/images/about-bg.png"
        alt="About background"
        fill
        className="object-cover"
      />
    </motion.div>

    {/* Blue overlay */}
    <motion.div
      className="absolute inset-0 bg-[#4579A4]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.9 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    ></motion.div>

    {/* Content */}
    <motion.div
      className="relative z-10 flex flex-col items-center max-w-3xl mx-auto py-16 px-6 text-center text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.05 } },
      }}
    >
      {/* Heading slides from top */}
      <motion.h1
        className="text-4xl sm:text-5xl text-[#010066] font-bold mb-6"
        variants={{
          hidden: { opacity: 0, y: -30 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8 }}
      >
        Our Story
      </motion.h1>

      {/* Paragraph with word-by-word animation */}
      <motion.p className="text-base sm:text-lg leading-relaxed opacity-95">
        {"At ".split(" ").map((word, idx) => (
          <motion.span
            key={idx}
            className="inline-block mr-1"
            variants={{
              hidden: { opacity: 0, y: 20, rotate: idx % 2 === 0 ? -5 : 5 },
              visible: { opacity: 1, y: 0, rotate: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            {word}
          </motion.span>
        ))}
        <motion.span
          className="inline-block mr-1 text-[#010066] font-semibold"
          variants={{
            hidden: { opacity: 0, y: 20, rotate: -5 },
            visible: { opacity: 1, y: 0, rotate: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          Flowsate
        </motion.span>
        {", we specialize in delivering smart, reliable, and modern tech services to both companies and individuals. Our mission is simple — to make technology work seamlessly for you. We combine innovation, expertise, and a customer-first approach to create tailored solutions that solve real problems, drive growth, and simplify digital experiences. Whether it’s building scalable systems, providing IT support, or helping businesses transform digitally, we are committed to excellence in everything we do. With a team of skilled professionals and a passion for innovation, Flowsate is more than just a service provider — we are your trusted partner in navigating today’s fast-moving digital world.".split(" ").map((word, idx) => (
          <motion.span
            key={idx + 1000}
            className="inline-block mr-1"
            variants={{
              hidden: { opacity: 0, y: 20, rotate: idx % 2 === 0 ? -5 : 5 },
              visible: { opacity: 1, y: 0, rotate: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            {word}
          </motion.span>
        ))}
      </motion.p>
    </motion.div>
  </div>
</section>


   {/* Our Blueprint Section */}
<section className="py-20 px-6 bg-white">
  <motion.div
    className="max-w-6xl mx-auto text-center"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: 0.25 } },
    }}
  >
    {/* Heading slides from top */}
    <motion.h2
      className="text-3xl font-semibold text-gray-900 mb-4"
      variants={{
        hidden: { opacity: 0, y: -40 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.8 }}
    >
      Our Blueprint
    </motion.h2>

    {/* Paragraph fades from bottom */}
    <motion.p
      className="text-gray-600 max-w-2xl mx-auto mb-12"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      We design, develop, and secure websites that help businesses grow with confidence.
    </motion.p>

    {/* Cards grid with flip effect */}
    <motion.div
      className="grid md:grid-cols-3 gap-8"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.25 } },
      }}
    >
      {/* Mission */}
      <motion.div
        className="bg-white rounded-xl shadow-md overflow-hidden border"
        variants={{
          hidden: { opacity: 0, rotateY: -90, y: 50 },
          visible: { opacity: 1, rotateY: 0, y: 0 },
        }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        style={{ perspective: 1000 }}
      >
        <div
          className="h-40 flex items-center justify-center relative"
          style={{
            backgroundImage: "url('/images/blue-wave.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute -bottom-8 flex justify-center w-full">
            <div className="bg-blue-600 rounded-full p-4 shadow-md">
              <Image src="/images/mission-icon.png" alt="Mission" width={40} height={40} />
            </div>
          </div>
        </div>
        <div className="pt-12 pb-6 px-6 text-center text-gray-700">
          Our mission is to design, develop, and secure websites that empower
          businesses to thrive online.
        </div>
      </motion.div>

      {/* Vision */}
      <motion.div
        className="bg-white rounded-xl shadow-md overflow-hidden border"
        variants={{
          hidden: { opacity: 0, rotateY: 90, y: 50 },
          visible: { opacity: 1, rotateY: 0, y: 0 },
        }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        style={{ perspective: 1000 }}
      >
        <div
          className="h-40 flex items-center justify-center relative"
          style={{
            backgroundImage: "url('/images/yellow-wave.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute -bottom-8 flex justify-center w-full">
            <div className="bg-yellow-500 rounded-full p-4 shadow-md">
              <Image src="/images/vision-icon.png" alt="Vision" width={40} height={40} />
            </div>
          </div>
        </div>
        <div className="pt-12 pb-6 px-6 text-center text-gray-700">
          Our vision is to design, develop, and secure websites that empower
          businesses to thrive online.
        </div>
      </motion.div>

      {/* Values */}
      <motion.div
        className="bg-white rounded-xl shadow-md overflow-hidden border"
        variants={{
          hidden: { opacity: 0, rotateY: -90, y: 50 },
          visible: { opacity: 1, rotateY: 0, y: 0 },
        }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        style={{ perspective: 1000 }}
      >
        <div
          className="h-40 flex items-center justify-center relative"
          style={{
            backgroundImage: "url('/images/red-wave.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute -bottom-8 flex justify-center w-full">
            <div className="bg-red-600 rounded-full p-4 shadow-md">
              <Image src="/images/values-icon.png" alt="Values" width={40} height={40} />
            </div>
          </div>
        </div>
        <div className="pt-12 pb-6 px-6 text-center text-gray-700">
          Our values are to design, develop, and secure websites that empower
          businesses to thrive online.
        </div>
      </motion.div>
    </motion.div>
  </motion.div>
</section>


      {/* What We Offer */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-gray-600 text-center mb-4">
          What We Offer
        </h2>
        <p className="text-center max-w-2xl mx-auto text-gray-600 mb-12">
          We create brands, designs, and digital solutions that drive growth.
        </p>

        {/* Services Carousel */}
        <Carousel
          items={services.map(service => (
            <div className="bg-[#4579A4] text-white rounded-2xl p-8 shadow-lg flex-shrink-0 flex flex-col items-center text-center min-w-[300px]">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-6">
                <Image src={service.img} alt={service.title} width={50} height={50} />
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <ul className="space-y-1 text-left">
                {service.points.map((point, i) => <li key={i}>• {point}</li>)}
              </ul>
            </div>
          ))}
          itemMinWidth={300}
          speed={50}
        />
      </section>


      {/* Team Section */}

       <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-4">The Team</h2>
        <p className="text-center max-w-2xl mx-auto text-gray-600 mb-12">
          A creative mix of designers, developers, and strategists, united by a
          passion for turning ideas into impactful digital experiences.
        </p>

        {/* Team Carousel */}
       <Carousel
  items={teamMembers.map(member => (
    <motion.div 
    >
      <Image
        src={member.image}
        alt={member.name}
        width={150}
        height={150}
        className="rounded-xl mb-4 object-cover w-36 h-36"
      />
      <h4 className="font-semibold text-lg">{member.name}</h4>
      <p className="text-gray-500 text-sm">{member.role}</p>
    </motion.div>
  ))}
  itemMinWidth={250}
  speed={40}
/>
      </section> 


{/* Join Our Team */}
<section className="relative py-20 px-6 text-center text-white">
  {/* Background */}
  <motion.div
    className="absolute inset-0 bg-[#4579A4] opacity-90"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 0.9 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.8 }}
  />

  {/* Content */}
  <motion.div
    className="relative z-10 flex flex-col items-center max-w-3xl mx-auto"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: 0.05 } },
    }}
  >
    {/* Heading slides from top */}
    <motion.h2
      className="text-3xl font-semibold mb-4"
      variants={{
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.8 }}
    >
      Join Our Team
    </motion.h2>

    {/* Paragraph with word-by-word animation */}
    <motion.p className="mb-6 text-left">
      {"At ".split(" ").map((word, idx) => (
        <motion.span
          key={idx}
          className="inline-block mr-1"
          variants={{
            hidden: { opacity: 0, y: 20, rotate: idx % 2 === 0 ? -5 : 5 },
            visible: { opacity: 1, y: 0, rotate: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          {word}
        </motion.span>
      ))}
      <motion.span
        className="inline-block mr-1 text-[#010066] font-semibold"
        variants={{
          hidden: { opacity: 0, y: 20, rotate: -5 },
          visible: { opacity: 1, y: 0, rotate: 0 },
        }}
        transition={{ duration: 0.6 }}
      >
        Flowsate
      </motion.span>
      {" , we believe people are our greatest strength. We foster a culture of innovation, collaboration, and growth—where every idea counts and every contribution matters. Join us to build impactful solutions and grow your career in a team that values excellence and purpose.".split(" ").map((word, idx) => (
        <motion.span
          key={idx + 1000} // offset key to avoid duplicates
          className="inline-block mr-1"
          variants={{
            hidden: { opacity: 0, y: 20, rotate: idx % 2 === 0 ? -5 : 5 },
            visible: { opacity: 1, y: 0, rotate: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>

    {/* Button slides from bottom */}
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.8 }}
    >
      <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
        <Button
          variant="outline"
          className="border-white text-black hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg"
        >
          Apply Now →
        </Button>
      </motion.div>
    </motion.div>
  </motion.div>
</section>


     {/* Contact Form */}
<section className="py-20 px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

    {/* Illustration slides in from left */}
    <motion.div
      className="flex justify-center items-center"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Image
        src="/images/contact-illustration.png"
        alt="Contact"
        width={500}
        height={400}
        className="w-full max-w-md h-auto"
      />
    </motion.div>

    {/* Form slides in from right with flip animation */}
    <motion.div
      className="bg-white rounded-2xl shadow-lg p-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
      }}
    >
      <motion.h2
        className="text-2xl font-semibold mb-6"
        variants={{
          hidden: { opacity: 0, y: -50, rotateX: -45 },
          visible: { opacity: 1, y: 0, rotateX: 0 },
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Let’s Work Together
      </motion.h2>

      <form className="space-y-5">
        <motion.input
          type="text"
          placeholder="Your Name"
          className="w-full border rounded-lg p-3"
          variants={{
            hidden: { opacity: 0, y: 50, rotateX: -45 },
            visible: { opacity: 1, y: 0, rotateX: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        <motion.input
          type="email"
          placeholder="Your Email"
          className="w-full border rounded-lg p-3"
          variants={{
            hidden: { opacity: 0, y: 50, rotateX: -45 },
            visible: { opacity: 1, y: 0, rotateX: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        />
        <motion.textarea
          placeholder="Your Message"
          rows={4}
          className="w-full border rounded-lg p-3"
          variants={{
            hidden: { opacity: 0, y: 50, rotateX: -45 },
            visible: { opacity: 1, y: 0, rotateX: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        />
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50, rotateX: -45 },
            visible: { opacity: 1, y: 0, rotateX: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          <Button className="w-full bg-[#010066] text-white hover:opacity-90 py-3">
            Submit
          </Button>
        </motion.div>
      </form>
    </motion.div>

  </div>
</section>

    </main>
  );
}
