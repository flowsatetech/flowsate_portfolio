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
  imageSrc = "/images/contact-illustration.png",
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

          <form className="space-y-5" ref={formRef} onSubmit={handleSubmit}>
            <motion.input
              name="name"
              type="text"
              required
              placeholder="Your Name"
              className="w-full border rounded-lg p-3"
              variants={{
                hidden: { opacity: 0, y: 50, rotateX: -45 },
                visible: { opacity: 1, y: 0, rotateX: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <motion.input
              name="email"
              type="email"
              required
              placeholder="Your Email"
              className="w-full border rounded-lg p-3"
              variants={{
                hidden: { opacity: 0, y: 50, rotateX: -45 },
                visible: { opacity: 1, y: 0, rotateX: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            />
            <motion.textarea
              name="message"
              required
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
              <Button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-[#010066] text-white hover:opacity-90 py-3"
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
