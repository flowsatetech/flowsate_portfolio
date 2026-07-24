"use client";

import React, { useEffect, useRef, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const [state, handleSubmit] = useForm("mnngvnbg");
  const formRef = useRef<HTMLFormElement | null>(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const validateField = (name: string, value: string) => {
    let error = "";

    switch (name) {
      case "firstName":
      case "lastName":
        if (!value.trim()) {
          error = "This field is required";
        } else if (value.length < 2) {
          error = "Minimum 2 characters";
        } else if (!/^[A-Za-z\s]+$/.test(value)) {
          error = "Only letters allowed";
        }
        break;

      case "email":
        if (!value.trim()) {
          error = "Email is required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
        ) {
          error = "Enter a valid email";
        }
        break;

      case "phone":
        if (
          value &&
          !/^\+?[0-9\s]{8,15}$/.test(value)
        ) {
          error = "Invalid phone number";
        }
        break;

      case "message":
        if (!value.trim()) {
          error = "Message is required";
        } else if (value.trim().length < 10) {
          error = "Message must be at least 10 characters";
        } else if (value.length > 500) {
          error = "Maximum 500 characters";
        }
        break;
    }

    return error;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  useEffect(() => {
    if (state.succeeded && formRef.current) {
      formRef.current.reset();

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });

      setErrors({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  }, [state.succeeded]);

  return (
    <section className="py-13 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-center mb-12 text-gray-900"
        >
          Contact Us
        </motion.h2>

       <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          noValidate
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8 border border-gray-200 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm bg-white"
        >

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>

              <input
                id="firstName"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Joe"
                className={`mt-2 block w-full rounded-md border text-gray-700 bg-gray-100 px-4 py-3 shadow-sm placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500 ${
                  errors.firstName
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />

              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.firstName}
                </p>
              )}

              <ValidationError
                prefix="First Name"
                field="firstName"
                errors={state.errors}
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>

              <input
                id="lastName"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Sam"
                className={`mt-2 block w-full rounded-md border text-gray-700 bg-gray-100 px-4 py-3 shadow-sm placeholder-gray-500 ${
                  errors.lastName
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />

              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.lastName}
                </p>
              )}
            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="joesam@gmail.com"
                className={`mt-2 block w-full rounded-md border text-gray-700 bg-gray-100 px-4 py-3 shadow-sm ${
                  errors.email
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mobile Number
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+234 7463928716"
                className={`mt-2 block w-full rounded-md border text-gray-700 bg-gray-100 px-4 py-3 shadow-sm ${
                  errors.phone
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />

              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone}
                </p>
              )}
            </div>

          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Tell Us About Your Project
            </label>

            <textarea
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChange}
              maxLength={500}
              placeholder="Hello, I would like to..."
              className={`mt-2 block w-full rounded-md border text-gray-700 bg-gray-100 px-4 py-3 shadow-sm ${
                errors.message
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />

            <div className="flex justify-between mt-1">
              {errors.message && (
                <p className="text-red-500 text-sm">
                  {errors.message}
                </p>
              )}

              <p className="text-xs text-gray-500 ml-auto">
                {formData.message.length}/500
              </p>
            </div>

            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <div className="flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                type="submit"
                disabled={
                  state.submitting ||
                  Object.values(errors).some(Boolean)
                }
                 className="w-full sm:w-64 h-12 text-base font-medium text-white bg-[#010066] hover:bg-[#414141] shadow-md transition-all duration-300 cursor-pointer"
              >
                {state.submitting ? "Sending..." : "Submit"}
              </Button>
            </motion.div>
          </div>

        </motion.form>

        <AnimatePresence>
          {state.succeeded && (
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="fixed top-20 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-6 py-4 rounded shadow-lg z-50"
            >
              Thank you! Your message has been received.
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default ContactSection;