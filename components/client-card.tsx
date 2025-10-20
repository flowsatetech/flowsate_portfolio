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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      {clientCard.map((client, index) => {
        return (
          <Card key={index} className="w-full max-w-sm border-[#5BA0D7] flex flex-col">
            <CardHeader className="flex items-center justify-between">
              <div className="flex gap-1">
                {[...Array(client.stars)].map((_, i) => (
                  <Image
                    key={i}
                    src="/images/star.png"
                    width={16.67}
                    height={16.67}
                    alt="star"
                  />
                ))}
              </div>
              <CardTitle className="text-sm font-normal">
                {client.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-left flex-grow">&quot;{client.testimonial}&quot;</CardContent>
            <div className="mt-auto">
            <div className="border-t border-[#5BA0D7]"></div>
            <CardFooter className="flex gap-2 pt-4">
              <Avatar className="w-14 h-14">
                <AvatarImage src={client.person.image} />
                <AvatarFallback>{client.person.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col text-left">
                <p className="font-semibold text-sm">{client.person.name}</p>
                <p className="font-normal text-xs">{client.person.job}</p>
                <p className="font-extralight text-xs">{client.person.company}</p>
              </div>
            </CardFooter>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default ClientCard;
