

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import styles from "./FloatingWhatsApp.module.css";

const FloatingWhatsApp = () => {
  const phoneNumber = "919284614144"; 

  const [showTooltip, setShowTooltip] = useState(false);

  const message = encodeURIComponent(
    "Hello, I am interested in Plot Layout Land. I would like to know more about the platform.",
  );

  useEffect(() => {
    if (!phoneNumber) {
      console.warn(
        "[FloatingWhatsApp] phoneNumber is empty — the WhatsApp link will not work.",
      );
    }

    // Briefly surface the tooltip once on load to draw attention,
    // then let hover control it normally.
    const showTimer = setTimeout(() => setShowTooltip(true), 1600);
    const hideTimer = setTimeout(() => setShowTooltip(false), 4200);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [phoneNumber]);

  const handleWhatsApp = () => {
    if (!phoneNumber) return;

    window.open(
      `https://wa.me/${phoneNumber}?text=${message}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <motion.button
      type="button"
      className={styles.whatsapp}
      onClick={handleWhatsApp}
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className={styles.pulse} />
      <span className={styles.pulseSecondary} />

      <span className={styles.icon}>
        <svg viewBox="0 0 32 32" width="26" height="26" fill="currentColor">
          <path d="M16.004 3C9.06 3 3.43 8.62 3.43 15.56c0 2.44.68 4.72 1.86 6.67L3 29l6.95-2.24a12.5 12.5 0 0 0 6.05 1.54h.005c6.943 0 12.57-5.62 12.57-12.56C28.58 8.8 22.95 3 16.004 3zm0 22.9h-.004a10.4 10.4 0 0 1-5.31-1.46l-.38-.23-3.99 1.29 1.31-3.9-.25-.4a10.34 10.34 0 0 1-1.6-5.6c0-5.75 4.68-10.43 10.44-10.43 2.79 0 5.41 1.09 7.38 3.06a10.35 10.35 0 0 1 3.06 7.38c0 5.75-4.69 10.43-10.65 10.29zm5.72-7.79c-.31-.16-1.85-.91-2.14-1.02-.29-.1-.5-.16-.71.16-.21.31-.81 1.02-1 1.23-.18.21-.37.23-.68.08-.31-.16-1.3-.48-2.48-1.53-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.14-.63.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.7-.97-2.33-.26-.61-.52-.53-.71-.54h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.22 3.39 5.38 4.75.75.32 1.34.51 1.8.66.76.24 1.45.21 2 .13.61-.09 1.85-.76 2.11-1.49.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.6-.37z" />
        </svg>
      </span>

      <span
        className={`${styles.tooltip} ${showTooltip ? styles.tooltipVisible : ""}`}
      >
        Chat with us
      </span>
    </motion.button>
  );
};

export default FloatingWhatsApp;
