import React from "react";
import ClientCard from "./client-card";

const Clients = () => {
  return (
    <div className="flex flex-col item-center justify-center text-center px-4 py-20">
      <h1 className="text-3xl md:text-5xl font-bold text-black">What Our Clients Say</h1>
      <p className="text-black/65 font-medium text-sm md:text-base mt-4 ">
        Don&apos;t just take our word for it. Here&apos;s what industry leaders say about our work.
      </p>
      <ClientCard />
    </div>
  );
};

export default Clients;
