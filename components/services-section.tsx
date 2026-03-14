import Image from "next/image";
import Link from "next/link";
import icon1 from "@/public/images/icon1.png";
import icon2 from "@/public/images/icon2.png";
import icon3 from "@/public/images/icon3.png";
import icon4 from "@/public/images/icon4.png";
import icon5 from "@/public/images/icon5.png";

const services = [
  {
    icon: (
      <Image
        src={icon1}
        alt="UI/UX Icon"
        width={48}
        height={48}
        className="w-12 h-12"
      />
    ),
    title: "UI/UX Design",
    description:
      "Redesigned product dashboards, cutting user onboarding time from 5 minutes to under 2 minutes.",
  },
  {
    icon: (
      <Image
        src={icon2}
        alt="Web Development Icon"
        width={48}
        height={48}
        className="w-12 h-12"
      />
    ),
    title: "Web Development",
    description:
      "Delivered lightning fast websites that improved client conversion by 42% and reduced bounce rate by 35%.",
  },
  {
    icon: (
      <Image
        src={icon2}
        alt="Mobile App Development Icon"
        width={48}
        height={48}
        className="w-12 h-12"
      />
    ),
    title: "Mobile App Development",
    description:
      "Built scalable cross-platform apps that grew user engagement by 55% within months.",
  },
  {
    icon: (
      <Image
        src={icon3}
        alt="Cloud Solutions Icon"
        width={48}
        height={48}
        className="w-12 h-12"
      />
    ),
    title: "Cloud Solutions",
    description:
      "Migrated legacy systems to the cloud, saving clients up to 40% in annual infrastructure costs.",
  },
  {
    icon: (
      <Image
        src={icon4}
        alt="Data Analytics Icon"
        width={48}
        height={48}
        className="w-12 h-12"
      />
    ),
    title: "Data Analytics",
    description:
      "Transformed raw data into insights that helped clients make smarter decisions and increase ROI by 25%.",
  },
  {
    icon: (
      <Image
        src={icon5}
        alt="Branding Icon"
        width={48}
        height={48}
        className="w-12 h-12"
      />
    ),
    title: "Branding",
    description:
      "Complete brand identity solutions that make your business stand out from the competition.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              {/* Icon */}
              <div className="mb-4 text-blue-600 text-4xl">{service.icon}</div>

              {/* Text Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>

            
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;