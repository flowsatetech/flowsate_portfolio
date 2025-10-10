import React from "react";
import TeamCard from "./team-card";

const Team = () => {
  return (
    <div className="flex flex-col item-center justify-center text-center p-4">
      <h1 className="text-3xl md:text-5xl font-bold text-black">Expert Team</h1>
      <p className="text-black/65 font-medium text-sm md:text-base mt-4 ">
        Meet the certified professionals who will work on your project.
      </p>
      <TeamCard />
    </div>
  );
};

export default Team;
