"use client";
import Image from "next/image";

const BlueprintSection = () => (
  <section className="py-20 px-6 bg-white">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Blueprint</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        We design, develop, and secure websites that help businesses grow with confidence.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Mission */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border">
          <div
            className="h-40 flex items-center justify-center relative"
            style={{
              backgroundImage: "url('/images/blue-wave.jpg')",
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
            Our mission is to design, develop, and secure websites that empower businesses to thrive online.
          </div>
        </div>

        {/* Vision */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border">
          <div
            className="h-40 flex items-center justify-center relative"
            style={{
              backgroundImage: "url('/images/yellow-wave.jpg')",
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
            Our vision is to design, develop, and secure websites that empower businesses to thrive online.
          </div>
        </div>

        {/* Values */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border">
          <div
            className="h-40 flex items-center justify-center relative"
            style={{
              backgroundImage: "url('/images/red-wave.jpg')",
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
            Our values are to design, develop, and secure websites that empower businesses to thrive online.
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BlueprintSection;