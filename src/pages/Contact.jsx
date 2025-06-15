import React from "react"
import { useForm, ValidationError } from "@formspree/react"

const Contact = () => {
  const [state, handleSubmit] = useForm("mgvyyklw")

  if (state.succeeded) {
    return (
      <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        <h2 className="text-2xl">Thank you! Your message has been sent. 🚀</h2>
      </section>
    )
  }

  return (
    <section className="min-h-screen px-6 py-20 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 border-b-2 border-blue-600 inline-block">
          Contact Me
        </h2>

        <p className="mb-6 text-gray-700 dark:text-gray-300">
          Feel free to reach out through this form or connect with me via social media.
          I’m open to freelance, collaborations, or full-time opportunities!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            id="company"
            type="text"
            name="company"
            placeholder="Company Name"
            required
            className="w-full p-3 rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            id="name"
            type="text"
            name="name"
            placeholder="Person Name"
            required
            className="w-full p-3 rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

         <input
  id="phone"
  type="tel"
  name="phone"
  placeholder="Mobile Number"
  required
  pattern="[0-9]{10}"
  title="Please enter a valid 10-digit mobile number"
  inputMode="numeric"
  onInput={(e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10)
  }}
  className="w-full p-3 rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>


          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email ID"
            required
            className="w-full p-3 rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <button
            type="submit"
            disabled={state.submitting}
            className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        <div className="mt-10 text-sm">
          Or email me directly at:
          <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline ml-1">
            your.email@example.com
          </a>
        </div>

        <div className="mt-6 flex gap-4 text-2xl">
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
