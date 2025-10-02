import React from 'react'

const ContactUs = () => {
  return (
   <main className="h-screen md:h-auto sm:bg-gray-50 bg-transparent mt-1">
  <section className="flex flex-col md:flex-row items-center justify-between gap-8 p-15 pb-8 pt-8"> 
    <div className="w-full md:w-1/2 bg-white p-8 shadow-md rounded-sm">
      <h1 className="text-3xl font-bold mb-6">Reach out to us</h1>
      <p className="text-gray-600 mb-6">
        Fill out the form and we'll get back to you.
      </p>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Phone Number (Optional)</label>
          <input
            type="tel"
            placeholder="Enter phone number"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Comment or Message</label>
          <textarea
            placeholder="Leave a message"
            rows={4}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>

    <div className=" order-1 md:order-2 w-full md:w-1/2 flex justify-center">
      <img
        src="/images/rafiki.svg"
        alt="Send message illustration"
        className="max-w-sm w-full h-auto"
      />
    </div>
  </section>


 <section className="flex flex-col md:flex-row items-center justify-between gap-8 p-15 pb-0 pt-0 "> 
  <div className="w-full md:w-1/2 flex justify-center">
      <img
        src="/images/rafiki1.svg"
        alt="Get in touch illustration"
        className="max-w-sm w-full h-auto"
      />
    </div>

    
    {/* <div className="order-1 md:order-2 w-full md:w-1/2 bg-white p-8 rounded-sm pr-10"> */}
    <div className="w-full md:w-1/2 bg-white p-10 rounded-md -mb-2 ">
     <div className="order-1 lg:order-2 p-0 pr-22 pb-15 " >
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in touch</h2>
      <p className="text-gray-600 mb-8 ">
        Lorem ipsum dolor sit amet consectetur. Sit sed placerat odio volutpat purus.
      </p>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="bg-blue-900 p-3 rounded-lg flex-shrink-0">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
            <p className="text-gray-600 "><a href="mailto:Flowsatetechteam@gmail.com">Flowsatetechteam@gmail.com</a></p>
          </div>
        </div>


        <div className="flex items-start gap-4">
          <div className="bg-blue-900 p-3 rounded-lg flex-shrink-0">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
            <p className="text-gray-600">+2348167193766</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-blue-900 p-3 rounded-lg flex-shrink-0">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Follow Us</h3>
            <p className="text-gray-600">flowsatetech</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-blue-900 p-3 rounded-lg flex-shrink-0">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Follow Us</h3>
            <p className="text-gray-600">@Flowsatetech_ng</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-blue-900 p-3 rounded-lg flex-shrink-0">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Connect With Us</h3>
            <p className="text-gray-600">Flowsatetech_ng</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
</main>

  );
}

export default ContactUs