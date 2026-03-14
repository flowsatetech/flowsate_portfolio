"use client";
import Image from "next/image";
import Carousel from "@/components/carousel";

const services = [
  {
    title: "Branding",
    img: "/images/branding.png",
    points: ["Logo design", "Brand guidelines", "Color palettes & typography", "Brand voice development"],
  },
  {
    title: "App development",
    img: "/images/branding.png",
    points: ["Custom mobile and web app solutions", "Seamless user experience design", "Integration with third-party APIs", "App maintenance and updates"],
  },
  {
    title: "Cloud solutions",
    img: "/images/branding.png",
    points: ["Scalable cloud infrastructure setup", "Data storage and management", "Secure cloud migration", "Monitoring and optimization"],
  },
  {
    title: "Data analytics",
    img: "/images/branding.png",
    points: ["Collect and analyze business data", "Generate actionable insights", "Dashboard and reporting solutions", "Predictive modeling and forecasting"],
  },
  {
    title: "UI/UX Design",
    img: "/images/uiux.png",
    points: ["Wireframing & prototyping", "User research & testing", "Mobile & web UI design", "Interaction design"],
  },
  {
    title: "Web Development",
    img: "/images/webdev.png",
    points: ["Front & backend development", "E-commerce solutions", "CMS integration", "Website maintenance"],
  },
];

const ServicesCarousel = () => (
  <section className="py-20 px-6 bg-gray-50">
    <h2 className="text-3xl font-semibold text-gray-800 text-center mb-4">What We Offer</h2>
    <p className="text-center max-w-2xl mx-auto text-gray-600 mb-12">
      We create brands, designs, and digital solutions that drive growth.
    </p>

    <Carousel
      items={services.map(service => (
        <div key={service.title} className="bg-[#4579A4] text-white rounded-2xl p-8 shadow-lg flex-shrink-0 flex flex-col items-center text-center min-w-[300px]">
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
    />
  </section>
);

export default ServicesCarousel;