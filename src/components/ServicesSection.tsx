"use client";

import { ServiceCard } from "./ServiceCard";

const services = [
  {
    title: "UI/UX Design",
    description:
      "User-centered design solutions that combine aesthetic excellence with functional usability.",
    timeline: "4–8 weeks",
    complexity: "Medium",
    starting: "₦8m",
    features: [
      "User Research",
      "Prototyping",
      "Design System",
      "Usability Testing",
      "+4 more features",
    ],
    technologies: ["Figma", "Adobe", "Sketch", "Zeplin"],
    image: "/images/services/uiux.jpg",
  },
{
  title: "Web Development",
  description:
    "Enterprise-grade web applications built with cutting-edge technologies and architecture.",
  timeline: "16–24 weeks",    // ← use a property name, not "16-24 weeks:"
  complexity: "High",
  starting: "₦15m",
  features: [
    "React/Next.js",
    "Node.js Backend",
    "Database",
    "API Integration",
  ],
  technologies: ["React", "Next.js", "Node.js", "MongoDB"],
  image: "/images/services/webdev.jpg",
},

  {
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and migration services for modern businesses.",
    timeline: "6–12 weeks",
    complexity: "High",
    starting: "₦8m",
    features: ["Cloud Migration", "DevOps Setup", "Monitoring", "Maintenance"],
    technologies: ["AWS", "Azure", "GCP"],
    image: "/images/services/cloud.jpg",
  },
  {
    title: "Mobile Development",
    description:
      "Enterprise-grade mobile apps built with modern frameworks for iOS and Android.",
    timeline: "16–24 weeks",
    complexity: "High",
    starting: "₦15m",
    features: [
      "iOS & Android",
      "React Native",
      "Flutter",
      "App Store Deployment",
    ],
    technologies: ["React Native", "Flutter", "Swift"],
    image: "/images/services/mobile.jpg",
  },
  {
    title: "Digital Transformation",
    description:
      "Strategic consulting to modernize operations and enable data-driven growth.",
    timeline: "6–12 weeks",
    complexity: "High",
    starting: "₦5m",
    features: [
      "Cloud Migration",
      "Process Automation",
      "Legacy Modernization",
      "Tech Strategy",
    ],
    technologies: ["AWS", "Azure", "Salesforce"],
    image: "/images/services/digital.jpg",
  },
  {
    title: "Data Analytics",
    description:
      "Advanced analytics and BI solutions for data-driven decisions.",
    timeline: "8–16 weeks",
    complexity: "High",
    starting: "₦15m",
    features: [
      "Data Warehousing",
      "BI Dashboard",
      "Machine Learning",
      "Predictive Analysis",
    ],
    technologies: ["Power BI", "Tableau", "Python"],
    image: "/images/services/analytics.jpg",
  },
  {
    title: "Artificial Intelligence",
    description:
      "We use modern tools for scalable AI models and automation.",
    timeline: "10–18 weeks",
    complexity: "High",
    starting: "₦9m",
    features: [
      "Model Training",
      "Machine Learning",
      "Deep Learning",
      "Maintenance",
    ],
    technologies: ["Python", "Django", "SQL"],
    image: "/images/services/ai.jpg",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Comprehensive Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our full range of technology solutions designed to accelerate your <br/> business growth and digital transformation journey
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}