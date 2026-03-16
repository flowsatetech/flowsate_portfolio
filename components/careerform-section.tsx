"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface CareerFormProps {
  onClose: () => void;
}

const CareerForm = ({ onClose }: CareerFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mnngvnbg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", reason: "" });
        setTimeout(() => {
          setSubmitted(false);
          onClose();
        }, 3000);
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
      <div className="bg-white w-full max-w-md rounded-xl shadow-xl p-6 relative">
        {/* CLOSE BUTTON */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl font-bold text-gray-600 hover:text-black"
        >
          ×
        </button>

        <h2 className="text-xl font-semibold text-center mb-4 text-[#010066]">
          Start Your Journey With Flowsate
        </h2>

        <form className="space-y-3" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 text-gray-900 rounded-md p-2.5 text-sm"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 text-gray-900 rounded-md p-2.5 text-sm"
            required
          />

          <textarea
            name="reason"
            placeholder="Why do you want to join Flowsate?"
            rows={3}
            value={formData.reason}
            onChange={handleChange}
            className="w-full border border-gray-300 text-gray-900 rounded-md p-2.5 text-sm"
            required
          />

          <Button type="submit" className="w-full bg-[#4579A4] text-white py-2.5 hover:bg-[#4579A4]/90">
            Submit Application
          </Button>
        </form>

        {submitted && (
          <div className="mt-4 text-center text-gray-600 font-semibold">
            Application submitted successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default CareerForm;