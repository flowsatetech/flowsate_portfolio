import Image from "next/image"


const WhyFlowsateSection = () => {
  return (
   
  <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    {/* Title */}
    <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
      Why Flowsate?
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
      {/* Left column: Image */}
      <div className="relative w-full h-64 lg:h-[350px] rounded-2xl overflow-hidden shadow-lg">
        <Image
          src="/images/tech.png"
          alt="Why Flowsate"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right column: Text content */}
      <div className="flex flex-col justify-center space-y-6">
        {[
          {
            text: "At Flowsate, we bring together experts from different areas of tech to deliver solutions that are modern, reliable, and built to scale.",
            bold: false,
          },
          {
            text: "Cross-disciplinary Expertise - A team of designers, developers, and strategists working together to deliver end-to-end solutions.",
            bold: true,
          },
          {
            text: "Proven Reliability - Transparent process, clear communication, and results you can trust.",
            bold: true,
          },
          {
            text: "Tailored Solutions - We design and build with your unique business needs in mind, not just templates.",
            bold: true,
          },
          {
            text: "Modern & Scalable Tech - From web and mobile apps to cloud solutions, we use technologies that grow with your business.",
            bold: true,
          },
        ].map((point, index) => (
          <div key={index}>
            <p className="text-gray-600">
              {point.bold ? (
                <>
                  <span className="font-bold lg:font-semibold">
                    {point.text.split(" - ")[0]}
                  </span>{" "}
                  - {point.text.split(" - ")[1]}
                </>
              ) : (
                <span className="text-gray-900 font-bold lg:font-semibold">
                  {point.text}
                </span>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
  )
}

export default WhyFlowsateSection