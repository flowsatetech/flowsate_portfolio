"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useForm } from "@formspree/react";
import { toast } from "sonner";

interface ContactFormSectionProps {
  title?: string;
  buttonText?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const ContactFormSection: React.FC<ContactFormSectionProps> = ({
  title = "Let’s Work Together",
  buttonText = "Submit",
  imageSrc = "/images/contact-illustration.webp",
  imageAlt = "Contact Illustration",
}) => {
  const [state, handleSubmit] = useForm("mnngvnbg");
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (state.succeeded && formRef.current) {
      formRef.current.reset();
      toast.success("Message Sent Successfully!", {
        position: "top-right",
      });
    }
  }, [state.succeeded]);

  return (
    <section className="py-13 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
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
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          <motion.h2
            className="text-2xl font-semibold mb-6 text-gray-900"
            variants={{
              hidden: { opacity: 0, y: -50, rotateX: -45 },
              visible: { opacity: 1, y: 0, rotateX: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {title}
          </motion.h2>

          <form className="space-y-5" ref={formRef} onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>

              <motion.input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-lg p-3 bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#010066]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>

              <motion.input
                id="email"
                name="email"
                type="email"
                required
                placeholder="example@email.com"
                className="w-full border border-gray-300 rounded-lg p-3 bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#010066]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Your Message
              </label>

              <motion.textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Tell us about your project..."
                className="w-full border border-gray-300 rounded-lg p-3 bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#010066]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              />
            </div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50, rotateX: -45 },
                visible: { opacity: 1, y: 0, rotateX: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              <Button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-[#010066] text-white hover:opacity-90 py-3 cursor-pointer"
              >
                {state.submitting ? "Submitting" : buttonText}
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactFormSection;
