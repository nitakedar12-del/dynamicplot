import { motion } from "framer-motion";
import { ArrowUpRight, Maximize2 } from "lucide-react";

import styles from "./Demo.module.css";

const DEMO_URL = "https://dynamicplot.vercel.app/";

const Demo = () => {
  const handleFullscreen = async () => {
    const iframe = document.getElementById("dynamic-plot-demo");

    if (!iframe) return;

    try {
      await iframe.requestFullscreen();
    } catch (error) {
      console.error("Unable to enter fullscreen:", error);
    }
  };

  return (
    <section id="demo" className={styles.demo}>
      <div className={styles.container}>
        {/* ================= HEADER ================= */}

        <motion.div
          className={styles.header}
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div className={styles.headingContent}>
            <span className={styles.eyebrow}>LIVE PRODUCT</span>

            <h2>
              See your land
              <span> come alive.</span>
            </h2>

            <p>
              Explore an interactive plot experience built for modern real
              estate teams.
            </p>
          </div>

          {/* Fullscreen */}

          <button
            type="button"
            className={styles.fullscreenButton}
            onClick={handleFullscreen}
          >
            <Maximize2 size={17} />

            <span>Fullscreen</span>

            <ArrowUpRight size={16} />
          </button>
        </motion.div>

        {/* ================= PRODUCT ================= */}

        <motion.div
          className={styles.frameWrapper}
          initial={{
            opacity: 0,
            y: 50,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Browser header */}

          <div className={styles.frameTopBar}>
            <div className={styles.windowDots}>
              <span />
              <span />
              <span />
            </div>

            <div className={styles.urlBar}>dynamicplot.vercel.app</div>

            <div className={styles.liveStatus}>
              <span />
              LIVE
            </div>
          </div>

          {/* Iframe */}

          <div className={styles.iframeWrapper}>
            <iframe
              id="dynamic-plot-demo"
              src={DEMO_URL}
              title="Dynamic Plot Product Demo"
              className={styles.iframe}
              allow="fullscreen"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Demo;
