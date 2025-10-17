import React from "react";
import ClientCard from "./client-card";

const Clients = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-12 md:py-20">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black leading-tight">
        What Our Clients Say
      </h1>

      {/* Subheading */}
      <p className="text-black/65 font-medium text-xs sm:text-sm md:text-base mt-4 max-w-2xl">
        Don&apos;t just take our word for it — here&apos;s what industry leaders say about our work.
      </p>

      {/* Client Cards */}
      <div className="w-full mt-10 max-w-6xl">
        <ClientCard />
      </div>
    </section>
  );
};

export default Clients;