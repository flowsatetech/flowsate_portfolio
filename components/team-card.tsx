import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { teamCard } from "@/constants/team-card";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const TeamCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      {teamCard.map((team, index) => {
        return (
          <Card key={index} className="w-full max-w-sm border-[#5BA0D7] ">
            <CardHeader className="flex flex-col items-center justify-between">
              <Avatar className="w-14 h-14">
                <AvatarImage src={team.image} />
                <AvatarFallback>{team.name[0]}</AvatarFallback>
              </Avatar>
              <CardTitle className="text-lg font-medium">{team.name}</CardTitle>
              <p className="text-[#5BA0D7] font-medium text-normal">{team.job}</p>
              <p >{team.experience}</p>
            </CardHeader>
            <CardContent className="text-center">
              <p className="font-medium mb-2">{team.expertise.title}:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {team.expertise.skills.map((skill, i) => (
                  <p key={i} className="px-2 py-1 text-sm">
                    {skill}
                  </p>
                ))}
              </div>
            </CardContent>
            <div className="mt-auto">
              <CardFooter className="flex flex-col text-center gap-2">
              <p className="font-medium">{team.certifications.title}:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {team.certifications.list.map((cert, i) => (
                  <span key={i} className=" px-2 py-1 text-sm">
                    {cert}
                  </span>
                ))}
              </div>
            </CardFooter>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default TeamCard;
