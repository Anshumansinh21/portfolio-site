import React from "react"
import { useForm, ValidationError } from "@formspree/react"
import { motion } from "framer-motion"
import { Github, Linkedin } from "lucide-react"

const Contact = () => {
  const [state, handleSubmit] = useForm("mgvyyklw")

  if (state.succeeded) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-2xl rounded-2xl p-8 text-center max-w-lg w-full border border-blue-100 dark:border-gray-700"
        >
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Thank you!</h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Your message has been sent. I’ll get back to you shortly. 🚀
          </p>
        </motion.div>
      </section>
    )
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-6 py-20 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-blue-100 dark:border-gray-700 p-8"
      >
        <h2 className="text-4xl font-bold text-center mb-6 text-blue-700 dark:text-white">
          Let’s Work Together
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
          Interested in working together or have a project idea? Fill out the form below or reach out via email.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="company"
              type="text"
              placeholder="Company Name"
              required
              className="input-style"
            />
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="input-style"
            />
          </div>

          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            required
            pattern="[0-9]{10}"
            title="Enter a 10-digit number"
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 10)
            }}
            className="input-style"
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
            className="input-style"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="input-style resize-none"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-300 shadow-md"
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        <div className="mt-8 text-center text-gray-600 dark:text-gray-400 text-sm">
          Or email me at{" "}
          <a
            href="mailto:your.email@example.com"
            className="text-blue-600 hover:underline"
          >
            your.email@example.com
          </a>
        </div>

        <div className="mt-6 flex justify-center gap-6 text-blue-600 dark:text-white text-2xl">
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition"
          >
            <Github />
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition"
          >
            <Linkedin />
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
