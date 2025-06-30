import React from "react"
import { useForm, ValidationError } from "@formspree/react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import imagelogo from "../../img/My_Logo.jpeg";

const Contact = () => {
  const [state, handleSubmit] = useForm("mgvyyklw")

  if (state.succeeded) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50/50 via-white to-blue-100/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 10
          }}
          className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl shadow-2xl rounded-3xl p-12 text-center max-w-lg w-full border border-blue-200/50 dark:border-gray-700 relative overflow-hidden"
        >
          {/* Confetti effect */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-blue-500"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ y: -20, opacity: 0 }}
              animate={{ 
                y: [0, 40, 0],
                opacity: [1, 0],
                x: (Math.random() - 0.5) * 40
              }}
              transition={{
                delay: i * 0.1,
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 5
              }}
            />
          ))}
          
          <div className="relative z-10">
            <motion.div
              animate={{ 
                rotate: [0, 15, -15, 0],
                y: [0, -10, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 3
              }}
              className="text-6xl mb-6 inline-block"
            >
              🎉
            </motion.div>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
              Message Sent!
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
              Thanks for reaching out! I'll get back to you within 24 hours.
            </p>
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium shadow-lg hover:shadow-xl transition-all"
            >
              Return Home
            </motion.a>
          </div>
        </motion.div>
      </section>
    )
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-blue-100/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-6 py-20 flex items-center justify-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400/10 dark:bg-blue-600/10 blur-xl"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6,
          type: "spring",
          stiffness: 100
        }}
        viewport={{ once: true }}
        className="w-full max-w-6xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-blue-200/50 dark:border-gray-700 overflow-hidden relative"
      >
        {/* Decorative accent */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

        <div className="p-10">
          {/* Header section */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <motion.div
              whileHover={{ rotate: 0, scale: 1.05 }}
              className="relative"
            >
              <img
                src={imagelogo}
                alt="My Logo"
                className="w-24 h-24 object-contain rounded-2xl border-2 border-blue-300/50 shadow-lg dark:border-gray-600/50"
              />
              <div className="absolute -inset-3 rounded-2xl border-2 border-blue-400/20 pointer-events-none"></div>
            </motion.div>

            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-3"
              >
                Let's Build Something Awesome
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl"
              >
                I specialize in creating beautiful, functional web experiences with React, Tailwind, and modern frameworks. Whether you have a project in mind or just want to connect, I'd love to hear from you!
              </motion.p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact form */}
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700/50 dark:text-white transition-all"
                    placeholder=""
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Company (Optional)
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700/50 dark:text-white transition-all"
                    placeholder=""
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700/50 dark:text-white transition-all"
                  placeholder="you@example.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    title="Enter a 10-digit number"
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 10)
                    }}
                    className="w-full pl-10 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700/50 dark:text-white transition-all"
                    placeholder="1234567890"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700/50 dark:text-white transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <motion.button
                type="submit"
                disabled={state.submitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all relative overflow-hidden"
              >
                <span className="relative z-10">
                  {state.submitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 hover:opacity-100 transition-opacity"></span>
              </motion.button>
            </motion.form>

            {/* Contact info */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="bg-blue-50/50 dark:bg-gray-700/50 rounded-2xl p-6 border border-blue-100/50 dark:border-gray-600/50">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Email me at</p>
                      <a 
                        href="mailto:your.email@example.com" 
                        className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                      >
                        ajrathore217@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Call me at</p>
                      <a 
                        href="tel:+1234567890" 
                        className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                      >
                       +91 63534 92283
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="bg-blue-50/50 dark:bg-gray-700/50 rounded-2xl p-6 border border-blue-100/50 dark:border-gray-600/50">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  <motion.a
                    href="https://github.com/yourgithub"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white"
                  >
                    <Github className="h-6 w-6" />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/yourlinkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-200 dark:border-gray-700 text-blue-600 dark:text-blue-400"
                  >
                    <Linkedin className="h-6 w-6" />
                  </motion.a>
                </div>
              </div> */}

              <div className="bg-gradient-to-br from-blue-100/50 to-purple-100/50 dark:from-gray-700/50 dark:to-gray-800/50 rounded-2xl p-6 border border-blue-200/50 dark:border-gray-600/50">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">What to Expect</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 dark:text-blue-400">✓</span>
                    <span>Response within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 dark:text-blue-400">✓</span>
                    <span>No spam, guaranteed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 dark:text-blue-400">✓</span>
                    <span>Confidentiality respected</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact