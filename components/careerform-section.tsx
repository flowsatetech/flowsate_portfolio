"use client";

import { Button } from "@/components/ui/button";

interface CareerFormProps {
  onClose: () => void;
}

const CareerForm = ({ onClose }: CareerFormProps) => {
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

        <form className="space-y-3">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-md p-2.5 text-sm text-gray-900 placeholder-gray-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-md p-2.5 text-sm text-gray-900 placeholder-gray-500"
          />

          <textarea
            placeholder="Why do you want to join Flowsate?"
            rows={3}
            className="w-full border border-gray-300 rounded-md p-2.5 text-sm text-gray-900 placeholder-gray-500"
          />

          <Button className="w-full bg-[#4579A4] text-white py-2.5 hover:bg-[#4579A4]/90">
            Submit Application
          </Button>

        </form>

      </div>
    </div>
  );
};

export default CareerForm;