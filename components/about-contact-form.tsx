'use client';

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button"; 

interface ContactFormSectionProps {
  title?: string;
  buttonText?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const ContactFormSection: React.FC<ContactFormSectionProps> = ({
  title = "Let’s Work Together",
  buttonText = "Submit",
  imageSrc = "/images/contact-illustration.png",
  imageAlt = "Contact Illustration",
}) => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">


        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={500}
            height={400}
            className="w-full max-w-md h-auto"
          />
        </motion.div>

        
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.h2
            className="text-2xl font-semibold mb-6"
            variants={{
              hidden: { opacity: 0, y: -50, rotateX: -45 },
              visible: { opacity: 1, y: 0, rotateX: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {title}
          </motion.h2>

          <form className="space-y-5">
            <motion.input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg p-3"
              variants={{
                hidden: { opacity: 0, y: 50, rotateX: -45 },
                visible: { opacity: 1, y: 0, rotateX: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <motion.input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-lg p-3"
              variants={{
                hidden: { opacity: 0, y: 50, rotateX: -45 },
                visible: { opacity: 1, y: 0, rotateX: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            />
            <motion.textarea
              placeholder="Your Message"
              rows={4}
              className="w-full border rounded-lg p-3"
              variants={{
                hidden: { opacity: 0, y: 50, rotateX: -45 },
                visible: { opacity: 1, y: 0, rotateX: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            />
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50, rotateX: -45 },
                visible: { opacity: 1, y: 0, rotateX: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              <Button className="w-full bg-[#010066] text-white hover:opacity-90 py-3">
                {buttonText}
              </Button>
            </motion.div>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactFormSection;