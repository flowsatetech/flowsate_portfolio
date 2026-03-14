"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button" // shadcn button

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12 text-gray-900">Contact Us</h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Joe" required className="mt-2 block w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Sam" required className="mt-2 block w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="joesam@gmail.com" required className="mt-2 block w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="+234 7463928716" className="mt-2 block w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Tell Us About Your Project</label>
            <textarea rows={5} name="message" value={formData.message} onChange={handleChange} placeholder="Hello, I would like to..." required className="mt-2 block w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
          </div>

          <div className="text-center">
            <Button type="submit" className="px-10 py-3 bg-[#010066] text-white hover:bg-[#010066]  shadow-md">
              Submit
            </Button>
          </div>
        </form>

        {submitted && (
          <div className="fixed top-20 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-4 rounded shadow-lg">
            Thank you! Your message has been received.
          </div>
        )}
      </div>
    </section>
  )
}

export default ContactSection
