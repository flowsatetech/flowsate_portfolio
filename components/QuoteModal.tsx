"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface QuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function QuoteModal({
  open,
  onOpenChange,
}: QuoteModalProps) {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
    ) => {
    e.preventDefault();

    setSubmitting(true);

    const response = await fetch(
        "https://formspree.io/f/mnngvnbg",
        {
        method: "POST",
        headers: {
            Accept: "application/json",
        },
        body: new FormData(e.currentTarget),
        }
    );

    setSubmitting(false);

    if (response.ok) {
        setSuccess(true);
        e.currentTarget.reset();
    }
    };

  if (success) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-lg rounded-2xl">
          <DialogHeader className="sr-only">
                <DialogTitle>
                    Quote Request Submitted
                </DialogTitle>
            </DialogHeader>
            <div className="py-8 text-center">
            <div className="text-6xl mb-4">🎉</div>

            <h2 className="text-2xl font-bold text-[#192C4F]">
              Quote Request Received
            </h2>

            <p className="mt-3 text-gray-600">
              Thank you for contacting Flowsate.
              <br />
              Our team will review your request and get back to you within
              <strong> 24 hours.</strong>
            </p>

            <Button
              className="mt-8 w-full bg-[#192C4F] hover:bg-[#16355F]"
              onClick={() => onOpenChange(false)}
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white text-gray-900 p-8">

        <DialogHeader>
          <DialogTitle className="text-3xl text-[#192C4F] font-bold">
            Request a Custom Quote
          </DialogTitle>

          <DialogDescription className="text-base">
            Tell us about your project and we&apos;ll prepare a tailored estimate.
            Our team typically responds within 24 hours.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div className="grid md:grid-cols-2 gap-5">

            <div>
              <label className="font-medium text-gray-900">
                Full Name *
              </label>

              <input
                type="text"
                name="full_name"
                required
                placeholder="John Doe"
                className="mt-2 w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900 placeholder:text-gray-400"
                />

            </div>

            <div>
              <label className="font-medium text-gray-900">
                Company Name
              </label>

              <input
                type="text"
                name="company"
                className="mt-2 w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900 placeholder:text-gray-400 focus:border-[#192C4F] focus:outline-none focus:ring-2 focus:ring-[#192C4F]/20"
                placeholder="ABC Limited"
              />
            </div>

            <div>
              <label className="font-medium text-gray-900">
                Business Email *
              </label>

              <input
                type="email"
                name="email"
                required
                className="mt-2 w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900 placeholder:text-gray-400 focus:border-[#192C4F] focus:outline-none focus:ring-2 focus:ring-[#192C4F]/20"
                placeholder="name@company.com"
              />

            </div>

            <div>
              <label className="font-medium text-gray-900">
                Phone Number *
              </label>

              <input
                type="tel"
                name="phone"
                required
                className="mt-2 w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900 placeholder:text-gray-400 focus:border-[#192C4F] focus:outline-none focus:ring-2 focus:ring-[#192C4F]/20"
                placeholder="+234..."
              />
            </div>

            <div>
              <label className="font-medium text-gray-900">
                Service Needed *
              </label>

              <select
                required
                name="service"
                className="mt-2 w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900 placeholder:text-gray-400 focus:border-[#192C4F] focus:outline-none focus:ring-2 focus:ring-[#192C4F]/20"
              >
                <option value="">Select Service</option>

                <option>Landing Page</option>

                <option>Business Website</option>

                <option>Advanced Website</option>

                <option>MVP Web Application</option>

                <option>Standard Web Application</option>

                <option>Enterprise SaaS</option>

                <option>Mobile Application</option>

                <option>UI/UX Product Design</option>

                <option>API & Backend Development</option>

                <option>Cloud & DevOps</option>

                <option>Branding & Identity</option>

                <option>AI Integration</option>

                <option>Custom AI Solution</option>

                <option>Other</option>

              </select>
            </div>

            <div>
              <label className="font-medium text-gray-900">
                Estimated Budget *
              </label>

              <select
                required
                name="budget"
                className="mt-2 w-full rounded-lg border p-3"
              >
                <option value="">Choose Budget</option>

                <option>$500 – $2,000</option>

                <option>$2,000 – $5,000</option>

                <option>$5,000 – $10,000</option>

                <option>$10,000+</option>

              </select>
            </div>

          </div>

          <div>
            <label className="font-medium text-gray-900">
                Project Timeline *
            </label>

            <select
                required
                name="timeline"
                className="mt-2 w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900 focus:border-[#192C4F] focus:outline-none focus:ring-2 focus:ring-[#192C4F]/20"
            >
                <option value="">Select Timeline</option>
                <option>ASAP</option>
                <option>Within 1 Month</option>
                <option>2–3 Months</option>
                <option>Flexible</option>
            </select>
            </div>

          <div>

            <label className="font-medium text-gray-900">
              Project Description *
            </label>

            <textarea
              required
              rows={7}
              name="project_description"
              className="mt-2 w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900 placeholder:text-gray-400 focus:border-[#192C4F] focus:outline-none focus:ring-2 focus:ring-[#192C4F]/20"
              placeholder="Describe your project, objectives, features, preferred technologies, reference websites, target audience, or any other important details..."
            />


          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6">

            <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                className="w-full sm:w-44 h-12"
                >
                Cancel
            </Button>

            <Button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-44 h-12 bg-[#192C4F] hover:bg-[#16355F]"
                >
                {submitting ? "Submitting..." : "Submit Quote Request"}
            </Button>

          </div>

        </form>

      </DialogContent>
    </Dialog>
  );
}