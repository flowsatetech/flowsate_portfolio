import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Projects from "@/components/Projects";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  return (
    <div>
      <div className="px-20 pb-10">
        <Card className="w-full h-[400px] relative rounded-2xl overflow-hidden ">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url("/images/card-background.png")`, 
            }}
          ></div>
          <div className="absolute inset-0 bg-black/50"></div>
          <CardContent className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-6">
            <h1 className="text-5xl font-bold mb-2">The Workbench</h1>
            <p className="text-[19px] max-w-2xl">
              We merge technology and creativity to craft solutions that don’t
              just work,they inspire. Every project is a blend of precision,
              elegance, and impact.
            </p>
          </CardContent>
        </Card>
        <Tabs defaultValue="projects" className="w-full  mt-8">
          <div className="flex justify-center">
            <TabsList className="flex space-x-6 bg-transparent border-none p-0">
              <TabsTrigger
                value="projects"
                className="text-[#41414199] data-[state=active]:text-[#414141] 
                   data-[state=active]:underline data-[state=active]:underline-offset-4 
                   data-[state=active]:decoration-[#414141] 
                   bg-transparent border-none shadow-none"
              >
                All Projects
              </TabsTrigger>
              <TabsTrigger
                value="website"
                className="text-[#41414199] data-[state=active]:text-[#414141] 
                   data-[state=active]:underline data-[state=active]:underline-offset-4 
                   data-[state=active]:decoration-[#414141] 
                   bg-transparent border-none shadow-none"
              >
                Website
              </TabsTrigger>
              <TabsTrigger
                value="application"
                className="text-[#41414199] data-[state=active]:text-[#414141] 
                   data-[state=active]:underline data-[state=active]:underline-offset-4 
                   data-[state=active]:decoration-[#414141] 
                   bg-transparent border-none shadow-none"
              >
                Application
              </TabsTrigger>
              <TabsTrigger
                value="branding"
                className="text-[#41414199] data-[state=active]:text-[#414141] 
                   data-[state=active]:underline data-[state=active]:underline-offset-4 
                   data-[state=active]:decoration-[#414141] 
                   bg-transparent border-none shadow-none"
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
      <Card className="bg-[#F7F7F7] w-full p-20">
        <CardContent className="flex items-center justify-between">
          <h1 className="text-[#414141] text-[48px] text-bold">Ready to work with us?</h1>
          <div className="flex gap-8">
            <Button className="bg-[#010066] text-white text-md p-7" >
              Start Your Project
            </Button>
            <Button className="bg-[#e6e6e6] text-[#010066] text-md p-7" >
              Our Services
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Portfolio;
