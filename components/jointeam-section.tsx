"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import CareerForm from "@/components/careerform-section";

const JoinTeam = () => {
  const [showForm, setShowForm] = useState(false);

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <section className="relative py-10 px-6 text-center text-white">
      <div className="absolute inset-0 bg-[#4579A4] opacity-90"></div>

      <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Join Our Team</h2>

        <p className="mb-6 max-w-3xl">
          At <span className="text-[#010066] font-semibold">Flowsate</span> we
          believe people are our greatest strength. We foster a culture of
          innovation, collaboration, and growth - where every idea counts and
          every contribution matters. Join us to build impactful solutions and
          grow your career in a team that values excellence and purpose.
        </p>

        <Button
          type="button"
          className="text-white bg-[#010066] hover:bg-[#414141] cursor-pointer"
          onClick={openForm}
        >
          Explore Careers →
        </Button>
      </div>

      {showForm && <CareerForm onClose={closeForm} />}
    </section>
  );
};

export default JoinTeam;