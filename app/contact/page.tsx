"use client";
import React, { useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";


const ContactUs = () => {
  const [state, handleSubmit] = useForm("mnngvnbg");
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (state.succeeded && formRef.current) {
      formRef.current.reset();
    }
  }, [state.succeeded]);

  // Motion Variants
  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  const fadeDown = { hidden: { opacity: 0, y: -40 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  const fadeLeft = { hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0, transition: { duration: 0.6 } } };
  const fadeRight = { hidden: { opacity: 0, x: -40 }, show: { opacity: 1, x: 0, transition: { duration: 0.6 } } };

  return (
    <main className="min-h-screen md:h-auto bg-transparent mt-1">

      {/* CONTACT FORM SECTION */}
      <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12 justify-between sm:p-10 lg:p-15 pb-8 pt-8">

        {/* Form */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
          className="order-2 md:order-1 flex-1 w-full md:w-1/2 bg-white p-8 rounded-sm"
        >
          <motion.h1 variants={fadeUp} initial="hidden" animate="show" className="text-3xl font-bold mb-6">
            Reach out today and lets have a conversation!
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="show" className="text-gray-600 mb-6">
            Your questions, feedback, or ideas are always welcome
          </motion.p>

          {state.succeeded && (
            <motion.p variants={fadeUp} initial="hidden" animate="show" className="text-green-600 mb-6">
              Your message is on its way to us thank you! we'll respond soon.
            </motion.p>
          )}

          <motion.form
            ref={formRef}
            className="space-y-4"
            onSubmit={handleSubmit}
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fadeLeft}>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </motion.div>

            <motion.div variants={fadeRight}>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
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

            <motion.div variants={fadeUp}>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number (Optional)</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </motion.div>

            <motion.div variants={fadeLeft}>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Comment or Message</label>
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

            <motion.button
              variants={fadeDown}
              type="submit"
              disabled={state.submitting}
              className="px-6 py-2 bg-[#010066] text-white rounded-lg hover:bg-blue-700 transition-all"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        </motion.div>

        {/* Form Image */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          animate="show"
          transition={{ delay: 1.2 }}
          className="order-1 md:order-2 flex-1 w-full md:w-1/2 flex justify-center"
        >
          <img src="/images/rafiki.svg" alt="Send message illustration" className="max-w-sm w-full h-auto" />
        </motion.div>
      </section>

      {/* SECOND SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-8 sm:p-10 lg:p-15 lg:pb-0 lg:pt-0">

        {/* Contact Image */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="order-2 md:order-1 w-full md:w-1/2 flex justify-center"
        >
          <img src="/images/rafiki1.svg" alt="Get in touch illustration" className="max-w-sm w-full h-auto sm:pb-10" />
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="order-1 md:order-2 w-full md:w-1/2 bg-white p-10 rounded-sm"
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold text-gray-900 mb-4">Get in touch</motion.h2>
          <motion.p variants={fadeUp} className="text-gray-600 mb-6">
            we're only a message away. let's connect!
          </motion.p>

          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="bg-[#010066] p-3 rounded-lg flex-shrink-0">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=Flowsate03@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4C2.897 4 2 4.897 2 6v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 5-8-5V6h16zm-16 12V9.489l7.381 4.613c.252.157.546.157.798 0L20 9.489V18H4z" />
                  </svg>
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                <p className="text-gray-600 break-words">
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=Flowsate03@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Flowsate03@gmail.com
                  </a>
                </p>
              </div>
            </div>


            {/* WhatsApp */}
            <motion.div variants={fadeRight} className="flex items-start gap-4">
              <div className="bg-[#010066] p-3 rounded-lg">
                <a href="https://wa.me/2349128800177" target="_blank" rel="noopener noreferrer">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.004 2.003c-5.523 0-10 4.477-10 10 0 1.765.46 3.41 1.264 4.855L2 22l5.335-1.253A9.963 9.963 0 0012.004 22c5.523 0 10-4.477 10-10s-4.477-10-10-10zm5.37 14.12c-.254.715-1.472 1.371-2.05 1.464-.545.084-1.226.12-2.44-.573-3.064-1.45-5.04-5.048-5.176-5.27-.133-.222-1.096-1.487-1.096-2.837 0-1.35.7-2.01.95-2.29.245-.282.54-.352.716-.352.182 0 .365.006.527.008.17.002.398-.064.607.452.205.516.7 1.78.762 1.914.062.133.104.288.02.466-.082.177-.123.283-.244.438-.123.154-.26.343-.37.46-.122.13-.248.276-.108.541.14.266.624 1.043 1.34 1.687.918.811 1.684 1.063 1.945 1.183.26.118.412.104.563-.063.15-.168.643-.771.81-.98.166-.21.33-.176.554-.105.225.072 1.42.67 1.666.792.247.122.412.183.473.285.062.102.062.593-.192 1.308z" />
                  </svg>
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">WhatsApp Us</h3>
                <p className="text-gray-600">+2349128800177</p>
              </div>
            </motion.div>

            {/* Socials: Twitter */}
            <motion.div variants={fadeUp} className="flex items-start gap-4">
              <div className="bg-[#010066] p-3 rounded-lg">
                <a href="https://x.com/flowsateo3" target="_blank">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z" />
                  </svg>
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Follow Us</h3>
                <p className="text-gray-600">flowsatetech</p>
              </div>
            </motion.div>

            {/* Instagram */}
            <motion.div variants={fadeUp} className="flex items-start gap-4">
              <div className="bg-[#010066] p-3 rounded-lg">
                <a href="https://www.instagram.com/flowsate03" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.427.402a4.918 4.918 0 011.797 1.044 4.918 4.918 0 011.044 1.797c.162.457.348 1.257.402 2.427.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.402 2.427a4.918 4.918 0 01-1.044 1.797 4.918 4.918 0 01-1.797 1.044c-.457.162-1.257.348-2.427.402-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.427-.402a4.918 4.918 0 01-1.797-1.044 4.918 4.918 0 01-1.044-1.797c-.162-.457-.348-1.257-.402-2.427C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.402-2.427a4.918 4.918 0 011.044-1.797 4.918 4.918 0 011.797-1.044c.457-.162 1.257-.348 2.427-.402C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.735 0 8.332.012 7.052.07 5.77.127 4.738.345 3.897.67 2.998 1.02 2.21 1.534 1.534 2.21.858 2.886.344 3.674.004 4.573c-.324.841-.543 1.873-.6 3.155C-.012 8.332 0 8.735 0 12c0 3.265.012 3.668.07 4.948.057 1.282.276 2.314.6 3.155.34.899.854 1.687 1.53 2.363.676.676 1.464 1.19 2.363 1.53.841.324 1.873.543 3.155.6 1.28.058 1.683.07 4.948.07s3.668-.012 4.948-.07c1.282-.057 2.314-.276 3.155-.6.899-.34 1.687-.854 2.363-1.53.676-.676 1.19-1.464 1.53-2.363.324-.841.543-1.873.6-3.155.058-1.28.07-1.683.07-4.948s-.012-3.668-.07-4.948c-.057-1.282-.276-2.314-.6-3.155-.34-.899-.854-1.687-1.53-2.363-.676-.676-1.464-1.19-2.363-1.53-.841-.324-1.873-.543-3.155-.6C15.668.012 15.265 0 12 0z" />
                    <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998z" />
                    <circle cx="18.406" cy="5.594" r="1.44" />
                  </svg>
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Follow Us</h3>
                <p className="text-gray-600">@Flowsatetech_ng</p>
              </div>
            </motion.div>

            {/* Facebook */}
            <motion.div variants={fadeUp} className="flex items-start gap-4">
              <div className="bg-[#010066] p-3 rounded-lg">
                <a href="https://www.facebook.com/share/1LTnaz5EfJ/" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.675 0h-21.35C.597 0 0 .598 0 1.326v21.348C0 23.403.597 24 1.326 24H12.82v-9.294H9.692V11.24h3.128V8.414c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.795.716-1.795 1.764v2.313h3.587l-.467 3.467h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .598 23.403 0 22.675 0z" />
                  </svg>
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Engage With Us</h3>
                <p className="text-gray-600">Flowsate Tech Company</p>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default ContactUs;
