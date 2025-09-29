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
      <section className="bg-blue-600 text-white py-16 sm:py-20 px-4 sm:px-6 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Our Story
        </h1>
        <p className="max-w-2xl mx-auto text-base sm:text-lg opacity-90 leading-relaxed">
          At Flowsate, we specialize in delivering smart, reliable, and modern
          tech services to both companies and individuals. Our mission is simple
          — to make technology work seamlessly for you.
          We combine innovation, expertise, and a customer-first approach to
          create tailored solutions that solve real problems, drive growth, and
          simplify digital experiences. Whether it’s building scalable systems,
          providing IT support, or helping businesses transform digitally, we
          are committed to excellence in everything we do.
          With a team of skilled professionals and a passion for innovation,
          Flowsate is more than just a service provider — we are your trusted
          partner in navigating today’s fast-moving digital world.
        </p>
      </section>

      {/* What We Offer */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-4">
          What We Offer
        </h2>
        <p className="text-center max-w-2xl mx-auto text-sm sm:text-base text-gray-600 mb-10 sm:mb-12">
          We create brands, designs, and digital solutions that drive growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Branding */}
          <div className="bg-blue-500 text-white rounded-xl p-8 flex flex-col items-center text-center shadow-md">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-6">
              <Image
                src="/images/branding.svg"
                alt="Branding"
                width={50}
                height={50}
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Branding</h3>
            <ul className="text-sm sm:text-base space-y-1 text-left">
              <li>• Logo design</li>
              <li>• Brand guidelines</li>
              <li>• Color palettes & typography</li>
              <li>• Brand voice development</li>
            </ul>
            <Button
              variant="outline"
              className="mt-6 border-white text-black hover:bg-white hover:text-blue-500 rounded-full px-4 py-2"
            >
              →
            </Button>
          </div>

          {/* UI/UX Design */}
          <div className="bg-blue-500 text-white rounded-xl p-8 flex flex-col items-center text-center shadow-md">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-6">
              <Image
                src="/images/uiux.svg"
                alt="UI/UX Design"
                width={50}
                height={50}
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              UI/UX Design
            </h3>
            <ul className="text-sm sm:text-base space-y-1 text-left">
              <li>• Wireframing & prototyping</li>
              <li>• User research & testing</li>
              <li>• Mobile & web UI design</li>
              <li>• Interaction design</li>
            </ul>
            <Button
              variant="outline"
              className="mt-6 border-white text-black hover:bg-white hover:text-blue-500 rounded-full px-4 py-2"
            >
              →
            </Button>
          </div>

          {/* Web Development */}
          <div className="bg-blue-500 text-white rounded-xl p-8 flex flex-col items-center text-center shadow-md">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-6">
              <Image
                src="/images/webdev.svg"
                alt="Web Development"
                width={50}
                height={50}
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              Web Development
            </h3>
            <ul className="text-sm sm:text-base space-y-1 text-left">
              <li>• Front & backend development</li>
              <li>• E-commerce solutions</li>
              <li>• CMS integration</li>
              <li>• Website maintenance</li>
            </ul>
            <Button
              variant="outline"
              className="mt-6 border-white text-black hover:bg-white hover:text-blue-500 rounded-full px-4 py-2"
            >
              →
            </Button>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Button
            variant="outline"
            className="border-blue-500 text-black hover:bg-blue-50 px-6 hover:text-blue-600 py-2 sm:px-8 sm:py-3 rounded-lg"
          >
            View All →
          </Button>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-4">
          The Team
        </h2>
        <p className="text-center max-w-2xl mx-auto text-sm sm:text-base text-gray-600 mb-10 sm:mb-12">
          A creative mix of designers, developers, and strategists, united by a passion for turning ideas into impactful digital experiences.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-10 max-w-6xl mx-auto">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="text-center">
              <Image
                src={member.image}
                alt={member.name}
                width={120}
                height={120}
                className="rounded-full mx-auto mb-3 sm:mb-4 object-cover w-24 h-24 sm:w-28 sm:h-28"
              />
              <h4 className="font-semibold text-sm sm:text-base">
                {member.name}
              </h4>
              <p className="text-xs sm:text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>

        {/* View Open Positions Button */}
        <div className="text-center mt-10">
          <Button
            variant="outline"
            className="border-blue-500 text-black hover:bg-blue-50 px-6 hover:text-blue-600 py-2 sm:px-8 sm:py-3 rounded-lg"
          >
            View all →
          </Button>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="bg-blue-600 text-white py-16 sm:py-20 px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
          Join Our Team
        </h2>
        <p className="mb-6 text-sm sm:text-base">
          Want to be part of something big? Come and work with us.
        </p>
        <Button
          variant="outline"
          className="border-white text-black hover:bg-white hover:text-blue-600 px-6 py-2 sm:px-8 sm:py-3 rounded-lg"
        >
          View Open Positions
        </Button>
      </section>

      {/* Contact Form */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {/* Illustration */}
          <div className="flex justify-center items-center">
            <Image
              src="/images/contact-illustration.svg"
              alt="Contact"
              width={500}
              height={400}
              className="w-full max-w-sm sm:max-w-md h-auto"
            />
          </div>

          {/* Form */}
          <div className="bg-white shadow-md rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-6">
              Let’s Work Together
            </h2>
            <form className="space-y-4 sm:space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg p-3 text-sm sm:text-base"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-lg p-3 text-sm sm:text-base"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full border rounded-lg p-3 text-sm sm:text-base"
              />
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 text-sm sm:text-base py-2 sm:py-3">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
