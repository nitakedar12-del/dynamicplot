import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";

import styles from "./Contact.module.css";

const WHATSAPP_NUMBER = "919284614144";

const initialForm = {
  name: "",
  company: "",
  phone: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialForm);

  const [status, setStatus] = useState("idle");

  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  };

  const validateForm = () => {
    const name = formData.name.trim();
    const company = formData.company.trim();
    const phone = formData.phone.trim();
    const email = formData.email.trim();

    if (!name) {
      return "Please enter your name.";
    }

    if (!company) {
      return "Please enter your company name.";
    }

    if (!phone) {
      return "Please enter your WhatsApp number.";
    }

    const phoneRegex = /^[+]?[0-9\s()-]{10,15}$/;

    if (!phoneRegex.test(phone)) {
      return "Please enter a valid WhatsApp number.";
    }

    if (!email) {
      return "Please enter your email address.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return "Please enter a valid email address.";
    }

    return null;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    setStatus("loading");

    const whatsappMessage = `
Hello Plot Layout Land,

I would like to book a demo.

*Name:* ${formData.name.trim()}
*Company:* ${formData.company.trim()}
*WhatsApp Number:* ${formData.phone.trim()}
*Email:* ${formData.email.trim()}

*Project Details:*
${formData.message.trim() || "Not provided"}

Thank you.
    `.trim();

    const encodedMessage = encodeURIComponent(whatsappMessage);

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setStatus("success");

    setFormData(initialForm);
  };

  const handleReset = () => {
    setStatus("idle");
    setError("");
    setFormData(initialForm);
  };

  return (
    <section id="book-demo" className={styles.contact}>
      <div className={styles.container}>
        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <motion.div
          className={styles.content}
          initial={{
            opacity: 0,
            x: -40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className={styles.eyebrow}>BOOK A DEMO</span>

          <h2>
            Let's bring your
            <span> plots to life.</span>
          </h2>

          <p className={styles.description}>
            See how Plot Layout Land can transform your static layouts into an
            interactive experience for your buyers.
          </p>

          {/* Highlights */}

          <div className={styles.highlights}>
            <div className={styles.highlight}>
              <span className={styles.number}>01</span>

              <div>
                <strong>Interactive Plot Maps</strong>

                <p>Give buyers a better way to explore your projects.</p>
              </div>
            </div>

            <div className={styles.highlight}>
              <span className={styles.number}>02</span>

              <div>
                <strong>Faster Sales</strong>

                <p>
                  Turn project information into an engaging digital experience.
                </p>
              </div>
            </div>

            <div className={styles.highlight}>
              <span className={styles.number}>03</span>

              <div>
                <strong>One Connected Platform</strong>

                <p>Keep maps, plots and customer interactions connected.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =================================================
            FORM
        ================================================= */}

        <motion.div
          className={styles.formWrapper}
          initial={{
            opacity: 0,
            x: 40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* =================================================
              SUCCESS STATE
          ================================================= */}

          {status === "success" ? (
            <div className={styles.success}>
              <div className={styles.successIcon}>
                <MessageCircle size={32} />
              </div>

              <h3>WhatsApp is ready.</h3>

              <p>
                Your demo details have been prepared in WhatsApp. Press Send to
                complete your request.
              </p>

              <button
                type="button"
                className={styles.resetButton}
                onClick={handleReset}
              >
                Back to Form
              </button>
            </div>
          ) : (
            /* =================================================
               FORM
            ================================================= */

            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              {/* Form Header */}

              <div className={styles.formHeader}>
                <span>GET IN TOUCH</span>

                <h3>Book your demo</h3>
              </div>

              {/* =================================================
                  NAME + COMPANY
              ================================================= */}

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="name">Full Name</label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="company">Company</label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Company name"
                    value={formData.company}
                    onChange={handleChange}
                    autoComplete="organization"
                  />
                </div>
              </div>

              {/* =================================================
                  PHONE + EMAIL
              ================================================= */}

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="phone">WhatsApp Number</label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    inputMode="tel"
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="email">Email</label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                </div>
              </div>

              {/* =================================================
                  MESSAGE
              ================================================= */}

              <div className={styles.field}>
                <label htmlFor="message">Project Details</label>

                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              {/* =================================================
                  ERROR
              ================================================= */}

              {error && (
                <motion.div
                  className={styles.error}
                  initial={{
                    opacity: 0,
                    y: -5,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                >
                  {error}
                </motion.div>
              )}

              {/* =================================================
                  SUBMIT
              ================================================= */}

              <button
                type="submit"
                className={styles.submit}
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <span>Opening WhatsApp...</span>

                    <span className={styles.loadingDot} />
                  </>
                ) : (
                  <>
                    <span>Continue to WhatsApp</span>

                    <span className={styles.submitIcon}>
                      <ArrowUpRight size={18} />
                    </span>
                  </>
                )}
              </button>

              {/* Note */}

              <p className={styles.formNote}>
                Your details will be prepared in WhatsApp so our team can get in
                touch with you.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
