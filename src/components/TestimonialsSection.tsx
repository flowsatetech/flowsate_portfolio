import { TestimonialCard } from "./TestimonialCard";

const testimonials = [
  {
    name: "Emmanuel Ugochukwu",
    role: "CTO",
    company: "TechCorp Global",
    text: "Flowsate transformed our entire digital infrastructure. Their expertise in cloud migration and process automation helped us reduce operational costs by 40% while improving efficiency.",
    service: "Digital Transformation",
    image: "/images/clients/emmanuel.jpg",
    rating: 5,
  },
  {
    name: "Martha Eze",
    role: "VP Product",
    company: "RetailMax",
    text: "The e-commerce platform they built for us exceeded all expectations. We saw a 300% increase in online sales within the first quarter after launch.",
    service: "Web Development",
    image: "/images/clients/martha.jpg",
    rating: 5,
  },
  {
    name: "Fatima Ibrahim",
    role: "CTO",
    company: "TechCorp Global",
    text: "Their UI/UX design work completely transformed our user experience. Customer satisfaction scores improved by 45% and user engagement doubled.",
    service: "UI/UX Design",
    image: "/images/clients/fatima.jpg",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section id="clients" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don’t just take our word for it. Here’s what industry leaders say about our work.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}