"use client";

import React, { useRef, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ModalProps {
  onClose: () => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const [state, handleSubmit] = useForm("mnngvnbg"); // Replace with your Formspree ID
  const formRef = useRef<HTMLFormElement | null>(null);
  const firstInputRef = useRef<HTMLInputElement | null>(null);

  // Auto-focus first input and lock scroll
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden"; // lock scroll

    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }

    return () => {
      document.body.style.overflow = previousOverflow; // restore scroll
    };
  }, []);

  // Reset form on success
  useEffect(() => {
    if (state.succeeded && formRef.current) {
      formRef.current.reset();
    }
  }, [state.succeeded]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-md relative"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Close button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4 text-[#010066]">Flowsate is here to give you a wonderful experience</h2>
        <p className="text-gray-600 mb-6">
          We value your input&apos; get in touch anytime.
        </p>

        {/* Form */}
        {state.succeeded ? (
          <motion.p
            className="text-green-600 mb-6"
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >
            ✅ Thanks for your message! We&apos;ll contact you shortly.
          </motion.p>
        ) : (
          <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
            <motion.div variants={fadeUp} initial="hidden" animate="show">
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                ref={firstInputRef} // auto-focus
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="show">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="show">
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Leave a message"
                rows={4}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="show" className="flex justify-between items-center">
              <Button
                type="submit"
                disabled={state.submitting}
                className="px-6 py-2 bg-[#010066] text-white rounded-lg hover:bg-blue-700 transition-all"
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </Button>
              <Button
                type="button"
                onClick={onClose}
                className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-all"
              >
                Cancel
              </Button>
            </motion.div>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Modal;
