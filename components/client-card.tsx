import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { clientCard } from "@/constants/client-card";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const ClientCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4 md:px-0">
      {clientCard.map((client, index) => (
        <Card
          key={index}
          className="w-full border-[#5BA0D7]/40 hover:shadow-lg transition-all duration-300 flex flex-col rounded-2xl"
        >
          {/* Header */}
          <CardHeader className="flex items-center justify-between p-4 sm:p-6">
            <div className="flex gap-1">
              {[...Array(client.stars)].map((_, i) => (
                <Image
                  key={i}
                  src="/images/star.png"
                  width={16}
                  height={16}
                  alt="star"
                />
              ))}
            </div>
            <CardTitle className="text-sm sm:text-base font-medium text-black/80">
              {client.title}
            </CardTitle>
          </CardHeader>

          {/* Content */}
          <CardContent className="text-left text-sm sm:text-base text-black/70 flex-grow px-4 sm:px-6 pb-6">
            “{client.testimonial}”
          </CardContent>

          {/* Footer */}
          <div className="mt-auto border-t border-[#5BA0D7]/40">
            <CardFooter className="flex items-center gap-3 p-4 sm:p-6">
              <Avatar className="w-12 h-12 sm:w-14 sm:h-14">
                <AvatarImage src={client.person.image} />
                <AvatarFallback>{client.person.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col text-left">
                <p className="font-semibold text-sm sm:text-base text-black">
                  {client.person.name}
                </p>
                <p className="text-xs sm:text-sm text-black/70">
                  {client.person.job}
                </p>
                <p className="text-xs sm:text-sm text-black/50">
                  {client.person.company}
                </p>
              </div>
            </CardFooter>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ClientCard;