"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you can add an API call to send the message
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Illustration */}
        <div className="flex justify-center items-center">
          <Image
            src="/images/contact-illustration.png"
            alt="Contact"
            width={500}
            height={400}
            className="w-full max-w-md h-auto"
          />
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Let’s Work Together</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            />
            <Button
              type="submit"
              className="w-full bg-[#010066] text-white py-3 hover:opacity-90"
            >
              Submit
            </Button>
          </form>

          {submitted && (
            <div className="fixed top-20 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-4 rounded shadow-lg">
              Thank you! Your message has been received.
            </div>
          )}
        </div>

      </div>
    </section>
  )
}

export default ContactSection