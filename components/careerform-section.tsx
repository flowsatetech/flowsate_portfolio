"use client";

import { Button } from "@/components/ui/button";

interface CareerFormProps {
  onClose: () => void;
}

const CareerForm = ({ onClose }: CareerFormProps) => {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl p-6 sm:p-8 md:p-10 animate-in fade-in zoom-in-95 duration-300"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full text-2xl text-gray-500 transition hover:bg-gray-100 hover:text-black"
        >
          ×
        </button>

        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#010066]/10">
            <span className="text-2xl sm:text-3xl">💼</span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-center text-xl sm:text-2xl font-semibold text-[#010066]">
          Careers at Flowsate
        </h2>

        {/* Description */}
        <p className="mt-5 text-center text-sm sm:text-base leading-7 text-gray-600">
          Thank you for your interest in joining <strong>Flowsate</strong>.
          We are not actively recruiting at the moment, but we&apos;re always
          excited to connect with talented professionals who share our passion
          for innovation and technology.
        </p>

        <p className="mt-4 text-center text-sm sm:text-base leading-7 text-gray-600">
          As we continue to grow, future career opportunities will be announced
          on our website and official social media channels.
        </p>

        <p className="mt-4 text-center text-sm sm:text-base text-gray-600">
          We appreciate your interest and hope to work with you in the future.
        </p>

        {/* Button */}
        <div className="mt-8 flex justify-center">
          <Button
            onClick={onClose}
            className="w-full sm:w-56 h-11 sm:h-12 bg-[#010066] text-white hover:bg-[#414141]"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CareerForm;