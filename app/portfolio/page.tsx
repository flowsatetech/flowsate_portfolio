import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Projects from "@/components/Projects";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  return (
    <div>
      <div className=" px-11 md:px-20 pb-10 pt-10">
        <Card className="w-full h-[400px] sm:h-[350px] md:h-[380px] lg:h-[400px] relative rounded-2xl overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url("/images/card-background.png")`,
            }}
          ></div>

          <div className="absolute inset-0 bg-black/50"></div>

          <CardContent className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6 md:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
              The Workbench
            </h1>
            <p className="text-base sm:text-lg md:text-[19px] max-w-xl sm:max-w-2xl leading-relaxed">
              We merge technology and creativity to craft solutions that don’t
              just work, they inspire. Every project is a blend of precision,
              elegance, and impact.
            </p>
          </CardContent>
        </Card>
        <Tabs defaultValue="projects" className="w-full mt-8">
          <div className="flex justify-center">
            <TabsList
              className="flex overflow-x-auto scrollbar-hide space-x-2 sm:space-x-4 md:space-x-6 
                 bg-transparent border-none p-0 justify-start w-full md:w-auto pl-2 sm:pl-4"
            >
              <TabsTrigger
                value="projects"
                className="text-[#41414199] text-sm sm:text-base md:text-lg 
                   data-[state=active]:text-[#414141] 
                   data-[state=active]:underline data-[state=active]:underline-offset-4 
                   data-[state=active]:decoration-[#414141]
                   bg-transparent border-none shadow-none whitespace-nowrap"
              >
                All Projects
              </TabsTrigger>

              <TabsTrigger
                value="website"
                className="text-[#41414199] text-sm sm:text-base md:text-lg 
                   data-[state=active]:text-[#414141] 
                   data-[state=active]:underline data-[state=active]:underline-offset-4 
                   data-[state=active]:decoration-[#414141]
                   bg-transparent border-none shadow-none whitespace-nowrap"
              >
                Website
              </TabsTrigger>

              <TabsTrigger
                value="application"
                className="text-[#41414199] text-sm sm:text-base md:text-lg 
                   data-[state=active]:text-[#414141] 
                   data-[state=active]:underline data-[state=active]:underline-offset-4 
                   data-[state=active]:decoration-[#414141]
                   bg-transparent border-none shadow-none whitespace-nowrap"
              >
                Application
              </TabsTrigger>

              <TabsTrigger
                value="branding"
                className="text-[#41414199] text-sm sm:text-base md:text-lg 
                   data-[state=active]:text-[#414141] 
                   data-[state=active]:underline data-[state=active]:underline-offset-4 
                   data-[state=active]:decoration-[#414141]
                   bg-transparent border-none shadow-none whitespace-nowrap"
              >
                Branding
              </TabsTrigger>
            </TabsList>
          </div>
          <div className="mt-6 w-full">
            <TabsContent value="projects">
              <Projects />
            </TabsContent>
            <TabsContent value="website">List of Websites</TabsContent>
            <TabsContent value="application">List of Applications</TabsContent>
            <TabsContent value="branding">List of Branding</TabsContent>
          </div>
        </Tabs>
      </div>
      <Card className="bg-[#F7F7F7] w-full px-6 sm:px-10 md:px-16 lg:px-20 py-10">
        <CardContent className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-8">
          <h1 className="text-[#414141] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[48px]">
            Ready to work with us?
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-end w-full md:w-auto">
            <Button className="bg-[#010066] text-white text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4">
              Start Your Project
            </Button>
            <Button className="bg-[#e6e6e6] text-[#010066] text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4">
              Our Services
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Portfolio;
