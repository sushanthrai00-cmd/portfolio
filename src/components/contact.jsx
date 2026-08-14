
import { motion } from "framer-motion";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Read response safely
      const contentType = response.headers.get("content-type");

      let data;

      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        const text = await response.text();
        throw new Error(
          `Server returned ${response.status}: ${text.substring(0, 100)}`
        );
      }

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setStatus("Message sent successfully! ✓");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus(
        error.message ||
          "Unable to send message. Please check your connection."
      );
    }
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-red-400 uppercase tracking-[0.3em] text-sm mb-4">
            Get In Touch
          </p>

          <h2 className="text-5xl md:text-7xl font-bold">
            Let's work
            <br />
            <span className="text-red-400">together.</span>
          </h2>

          <p className="mt-6 text-white/60 max-w-xl text-lg leading-8">
            Have a project in mind or want to connect? I'd love to hear
            from you.
          </p>
        </motion.div>

        {/* Contact content */}
        <div className="grid md:grid-cols-2 gap-16 mt-16">
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <p className="text-white/40 text-sm uppercase tracking-widest">
                Email
              </p>

              <a
                href="mailto:sushanthrai00@gmail.com"
                className="text-lg mt-2 inline-block hover:text-red-400 transition"
              >
                sushanthrai00@gmail.com
              </a>
            </div>

            <div>
              <p className="text-white/40 text-sm uppercase tracking-widest">
                Location
              </p>

              <p className="text-lg mt-2">Karnataka, India</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-red-400 transition"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-red-400 transition"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your Message"
              required
              className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-red-400 transition resize-none"
            />

            <button
              type="submit"
              disabled={status === "Sending..."}
              className="px-7 py-3 rounded-full bg-red-500 text-white font-semibold hover:bg-red-600 hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "Sending..." ? "Sending..." : "Send Message"}
            </button>

            {/* Status */}
            {status && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-white/70"
              >
                {status}
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

