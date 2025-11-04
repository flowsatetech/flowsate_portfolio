"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useRef } from "react";

const ContactUs = () => {
  const [state, handleSubmit] = useForm("mnngvnbg");
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (state.succeeded && formRef.current) {
      formRef.current.reset();
    }
  }, [state.succeeded]);

  return (
    <main className="min-h-screen md:h-auto  sm:bg-gray-50 bg-transparent mt-1">
      <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12 justify-between sm:p-10  lg:p-15 pb-8 pt-8">
        <div className="order-2 md:order-1 flex-1 w-full md:w-1/2 bg-white p-8 rounded-sm">
          <h1 className="text-3xl font-bold mb-6">Reach out to us</h1>
          <p className="text-gray-600 mb-6">
            Fill out the form and we&#39;ll get back to you.
          </p>
          {state.succeeded && (
            <p className="text-green-600 mb-6">
              ✅ Thanks for your message! We&#39;ll get back to you soon.
            </p>
          )}
          <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
            <div>
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
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>

            <div>
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
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone Number (Optional)
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Comment or Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Leave a message"
                rows={4}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="px-6 py-2 bg-[#010066] text-white rounded-lg hover:bg-blue-700"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        <div className=" order-1 md:order-2 flex-1 w-full md:w-1/2 flex justify-center">
          <img
            src="/images/rafiki.svg"
            alt="Send message illustration"
            className="max-w-sm w-full h-auto"
          />
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-between gap-8  sm:p-10 lg:p-15 lg:pb-0 lg:pt-0 md:p-1 ">
        <div className="order-2 md:order-1  w-full md:w-1/2 flex justify-center">
          <img
            src="/images/rafiki1.svg"
            alt="Get in touch illustration"
            className="max-w-sm w-full h-auto  sm:pb-10"
          />
        </div>

        <div className="order-1 md:order-2 w-full md:w-1/2 bg-white p-10 rounded-sm -mb-2 ">
          <div className="sm:p-0 lg:p-0 sm:pr-10 md:pb-12 lg:pr-22 lg:pb-15">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get in touch
            </h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet consectetur. Sit sed placerat odio
              volutpat purus.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#010066] p-3 rounded-lg flex-shrink-0">
                  <a
                    href="mailto:Flowsatetechteam@gmail.com"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </a>
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                  <p className="text-gray-600  whitespace-normal break-words max-w-full block">
                    <a
                      href="mailto:Flowsatetechteam@gmail.com"
                      rel="noopener noreferrer"
                    >
                      Flowsatetechteam@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#010066] p-3 rounded-lg flex-shrink-0">
                  <a href="tel:+2348167193766" aria-label="call +2348167193766">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                  <a href="tel:+2348167193766" aria-label="call +2348167193766">
                    {" "}
                    <p className="text-gray-600">+2348167193766</p>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#010066] p-3 rounded-lg flex-shrink-0">
                  <a
                    href="https://x.com/flowsateo3?t=t3ylrM8lZc3N0tl13c6AoQ&s=09"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Follow Us
                  </h3>
                  <a
                    href="https://x.com/flowsateo3?t=t3ylrM8lZc3N0tl13c6AoQ&s=09"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="text-gray-600">flowsatetech</p>{" "}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#010066] p-3 rounded-lg flex-shrink-0">
                  <a
                    href="https://www.instagram.com/flowsate03?igsh=MTg3Y2pjNnMzaHlkbQ==&utm_source=ig_contact_invite"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Follow Us
                  </h3>
                  <a
                    href="https://www.instagram.com/flowsate03?igsh=MTg3Y2pjNnMzaHlkbQ==&utm_source=ig_contact_invite"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <p className="text-gray-600">@Flowsatetech_ng</p>
                  </a>{" "}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#010066] p-3 rounded-lg flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Connect With Us
                  </h3>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <p className="text-gray-600">Flowsatetech_ng</p>
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#010066] p-3 rounded-lg flex-shrink-0">
                  <a
                    href="https://www.facebook.com/share/1LTnaz5EfJ/"
                    target="_blank"
                    rel="noopener nonreferrer"
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.675 0h-21.35C.597 0 0 .598 0 1.333v21.333C0 23.403.597 24 1.325 24H12.82v-9.294H9.692V11.08h3.128V8.414c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.098 2.795.142v3.24l-1.918.001c-1.504 0-1.796.716-1.796 1.764v2.307h3.587l-.467 3.626h-3.12V24h6.116C23.403 24 24 23.403 24 22.667V1.333C24 .598 23.403 0 22.675 0z" />
                    </svg>
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 ">Engage With us</h3>
                  <a
                    href="https://www.facebook.com/share/1LTnaz5EfJ/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="text-gray-600">Flowsate Tech Company</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
