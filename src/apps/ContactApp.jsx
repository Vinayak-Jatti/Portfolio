import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactApp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration
      // Get these from your EmailJS dashboard: https://dashboard.emailjs.com
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: "Vinayak Jatti",
        },
        publicKey
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      // Check if EmailJS credentials are configured
      if (
        serviceId === "YOUR_SERVICE_ID" ||
        templateId === "YOUR_TEMPLATE_ID" ||
        publicKey === "YOUR_PUBLIC_KEY"
      ) {
        setSubmitStatus("config_error");
      } else {
        setSubmitStatus("error");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-full p-6 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-2xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-white mb-2">Get In Touch</h1>
        <p className="text-white/70 mb-8">Let's discuss your next project</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="glass-card p-6 rounded-2xl"
          >
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-lg font-bold text-white mb-2">Email</h3>
            <p className="text-white/70 text-sm mb-2">Send me an email</p>
            <a
              href="mailto:vinayakjatti044@gmail.com"
              className="text-blue-400 hover:text-blue-300 text-sm"
            >
              vinayakjatti044@gmail.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="glass-card p-6 rounded-2xl"
          >
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-lg font-bold text-white mb-2">LinkedIn</h3>
            <p className="text-white/70 text-sm mb-2">Connect with me</p>
            <a
              href="https://www.linkedin.com/in/vinayak-jatti"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm"
            >
              linkedin.com/in/vinayak-jatti
            </a>
          </motion.div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          onSubmit={handleSubmit}
          className="glass-card p-6 rounded-2xl"
        >
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-white/90 text-sm font-medium mb-2"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg bg-white/10 border ${
                  errors.name ? "border-red-500" : "border-white/20"
                } text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="mt-1 text-red-400 text-xs">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-white/90 text-sm font-medium mb-2"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg bg-white/10 border ${
                  errors.email ? "border-red-500" : "border-white/20"
                } text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                placeholder="your.email@gmail.com"
              />
              {errors.email && (
                <p className="mt-1 text-red-400 text-xs">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-white/90 text-sm font-medium mb-2"
              >
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg bg-white/10 border ${
                  errors.subject ? "border-red-500" : "border-white/20"
                } text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                placeholder="Subject"
              />
              {errors.subject && (
                <p className="mt-1 text-red-400 text-xs">{errors.subject}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-white/90 text-sm font-medium mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`w-full px-4 py-2 rounded-lg bg-white/10 border ${
                  errors.message ? "border-red-500" : "border-white/20"
                } text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none`}
                placeholder="Your message..."
              />
              {errors.message && (
                <p className="mt-1 text-red-400 text-xs">{errors.message}</p>
              )}
            </div>

            {submitStatus === "success" && (
              <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 text-sm">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 text-sm">
                Something went wrong. Please try again or contact me directly
                via email.
              </div>
            )}

            {submitStatus === "config_error" && (
              <div className="p-4 bg-yellow-500/20 border border-yellow-500/30 rounded-lg text-yellow-300 text-sm">
                Email service not configured. Please contact me directly via
                email.
              </div>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className="w-full px-6 py-3 bg-blue-500/20 hover:bg-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg text-white font-medium transition-colors border border-blue-500/30"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default ContactApp;
