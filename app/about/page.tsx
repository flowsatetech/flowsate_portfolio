import Image from "next/image";
import { Button } from "@/components/ui/button";

const teamMembers = [
  { name: "John Doe", role: "CEO", image: "/images/team1.jpg" },
  { name: "Jane Smith", role: "CTO", image: "/images/team2.jpg" },
  { name: "Alex Brown", role: "Designer", image: "/images/team3.jpg" },
  { name: "Mia Lee", role: "Developer", image: "/images/team4.jpg" },
  // add more
];

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex justify-center py-20 px-6 bg-gray-50">
        <div className="relative w-full max-w-6xl rounded-md overflow-hidden">
          {/* Background image */}
          <Image
            src="/images/about-bg.png"
            alt="About background"
            fill
            className="object-cover opacity-40"
          />
          {/* Blue overlay */}
          <div className="absolute inset-0 bg-[#4579A4] opacity-90"></div>

          {/* Content inside */}
          <div className="relative z-10 text-center text-white max-w-3xl mx-auto py-16 px-6">
            <h1 className="text-4xl sm:text-5xl text-[#010066] font-bold mb-6">
              Our Story
            </h1>
            <p className="text-base sm:text-lg leading-relaxed opacity-95">
              {" "}
              <span className="text-[#010066] font-semibold">
                Flowsate Tech
              </span>{" "}
              was founded to help startups and businesses transform their
              digital presence through design and technology that deliver real
              results.{" "}
              <br />
              What started as a small passion for web innovation has grown into
              a{" "}
              <strong>creative tech agency shaping tomorrow’s brands.</strong>{" "}
              We blend creativity, innovation, and strategy to empower businesses
              with digital experiences that inspire growth and lasting impact.
            </p>
          </div>
        </div>
      </section>

      {/* Our Blueprint Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Our Blueprint
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            We design, develop, and secure websites that help businesses grow with confidence.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border">
              <div
                className="h-48 flex flex-col items-center justify-center relative text-white font-semibold text-2xl"
                style={{
                  backgroundImage: "url('/images/blue-wave.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h3 className="z-10 text-white-950">Mission</h3>
                <div className="absolute -bottom-8 flex justify-center w-full">
                  <div className="bg-blue-600 rounded-full p-4 shadow-md">
                    <Image
                      src="/images/mission-icon.png"
                      alt="Mission Icon"
                      width={50}
                      height={50}
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-black opacity-20"></div>
              </div>
              <div className="pt-12 pb-6 px-6 text-center text-gray-700">
                Our mission is to combine design and technology to create products people love to use.
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border">
              <div
                className="h-48 flex flex-col items-center justify-center relative text-white font-semibold text-2xl"
                style={{
                  backgroundImage: "url('/images/yellow-wave.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h3 className="z-10 text-white-950">Vision</h3>
                <div className="absolute -bottom-8 flex justify-center w-full">
                  <div className="bg-yellow-500 rounded-full p-4 shadow-md">
                    <Image
                      src="/images/vision-icon.png"
                      alt="Vision Icon"
                      width={50}
                      height={50}
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-black opacity-20"></div>
              </div>
              <div className="pt-12 pb-6 px-6 text-center text-gray-700">
                Our vision is to empower businesses through simple, impactful, and scalable digital solutions.
              </div>
            </div>

            {/* Values */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border">
              <div
                className="h-48 flex flex-col items-center justify-center relative text-white font-semibold text-2xl"
                style={{
                  backgroundImage: "url('/images/red-wave.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h3 className="z-10 text-white-950">Values</h3>
                <div className="absolute -bottom-8 flex justify-center w-full">
                  <div className="bg-red-600 rounded-full p-4 shadow-md">
                    <Image
                      src="/images/values-icon.png"
                      alt="Values Icon"
                      width={50}
                      height={50}
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-black opacity-20"></div>
              </div>
              <div className="pt-12 pb-6 px-6 text-center text-gray-700">
                Our values: Innovation | Integrity | Collaboration | Excellence.
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* What We Offer */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-4">
          What We Offer
        </h2>
        <p className="text-center max-w-2xl mx-auto text-gray-600 mb-12">
          We create brands, designs, and digital solutions that drive growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
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
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-[#4579A4] text-white rounded-2xl p-8 shadow-lg flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-6">
                <Image src={service.img} alt={service.title} width={50} height={50} />
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <ul className="space-y-1 text-left">
                {service.points.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>
              <Button
                variant="outline"
                className="mt-6 border-white text-black hover:bg-white hover:text-blue-600 rounded-full px-5 py-3"
              >
                →
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            variant="outline"
            className="border-blue-600 text-black hover:bg-blue-50 hover:text-blue-600 px-6 py-3 rounded-lg"
          >
            View All →
          </Button>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-4">The Team</h2>
        <p className="text-center max-w-2xl mx-auto text-gray-600 mb-12">
          A creative mix of designers, developers, and strategists, united by a
          passion for turning ideas into impactful digital experiences.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center"
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
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            variant="outline"
            className="border-blue-600 text-black hover:bg-blue-50 hover:text-blue-600 px-6 py-3 rounded-lg"
          >
            View all →
          </Button>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="relative py-20 px-6 text-center text-white">
        <div className="absolute inset-0 bg-[#4579A4] opacity-90"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-semibold mb-4">Join Our Team</h2>
          <p className="mb-6"> At{" "}
            <span className="text-[#010066] font-semibold">Flowsate</span>, we believe people are our greatest strength. We foster a culture of innovation, collaboration, and growth—where every idea counts and every contribution matters. Join us to build impactful solutions and grow your career in a team that values excellence and purpose.</p>
          <Button
            variant="outline"
            className="border-white text-black hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg"
          >
            Apply Now →
          </Button>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Illustration */}
          <div className="flex justify-center items-center">
            <Image
              src="/images/contact-illustration.png"
              alt="Contact"
              width={500}
              height={400}
              className="w-full max-w-md h-auto"
            />
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Let’s Work Together</h2>
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg p-3"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-lg p-3"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full border rounded-lg p-3"
              />
              <Button className="w-full bg-[#010066] text-white hover:opacity-90 py-3">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
