import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MapPinned,
  MousePointer2,
  Navigation,
} from "lucide-react";

import mapImage from "../../assets/features/map-overlay.png";
import styles from "./FeatureMap.module.css";

const FeatureMap = () => {
  const features = [
    {
      icon: MapPinned,
      title: "Real-world location",
      description:
        "Your layout is positioned directly on its actual Google Map location.",
    },
    {
      icon: MousePointer2,
      title: "Interactive plots",
      description:
        "Buyers can explore individual plots instead of viewing a static layout.",
    },
    {
      icon: Navigation,
      title: "Location-aware selling",
      description:
        "Show buyers exactly where their plot sits before they visit the site.",
    },
  ];

  return (
    <section className={styles.section} id="features">
      <div className={styles.container}>
        {/* ==============================
            SECTION HEADER
        ============================== */}

        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className={styles.eyebrow}>FEATURE 01</span>

          <h2>
            Your layout,
            <br />
            <span>live on the map.</span>
          </h2>

          <p>
            Turn static plot layouts into location-aware digital experiences
            that help buyers understand exactly where their plot sits.
          </p>
        </motion.div>

        {/* ==============================
            MAIN FEATURE
        ============================== */}

        <div className={styles.featureGrid}>
          {/* LEFT CONTENT */}

          <motion.div
            className={styles.content}
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className={styles.intro}>
              <div className={styles.iconBox}>
                <MapPinned size={21} strokeWidth={1.8} />
              </div>

              <div>
                <span>LIVE LOCATION</span>
                <strong>Real map integration</strong>
              </div>
            </div>

            <h3>
              From a static drawing
              <br />
              to a <span>real place.</span>
            </h3>

            <p className={styles.description}>
              Your existing plot layout doesn't have to remain a flat PDF or
              image. Place it precisely over the real-world map so buyers can
              understand the project, surrounding roads and the exact location
              of each plot.
            </p>

            {/* Feature points */}

            <div className={styles.featureList}>
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    className={styles.featureItem}
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                  >
                    <div className={styles.featureIcon}>
                      <Icon size={17} />
                    </div>

                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}

            <motion.a
              href="#book-demo"
              className={styles.cta}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>See how it works</span>

              <span className={styles.ctaIcon}>
                <ArrowUpRight size={17} />
              </span>
            </motion.a>
          </motion.div>

          {/* RIGHT VISUAL */}

          <motion.div
            className={styles.visualWrapper}
            initial={{
              opacity: 0,
              x: 45,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className={styles.visual}>
              {/* Decorative grid */}

              <div className={styles.gridPattern} />

              {/* Map */}

              <motion.div
                className={styles.mapFrame}
                whileHover={{
                  scale: 1.015,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                <img
                  src={mapImage}
                  alt="Plot layout positioned on a real map"
                />

                <div className={styles.mapOverlay} />
              </motion.div>

              {/* Live badge */}

              <motion.div
                className={styles.liveBadge}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                }}
              >
                <span className={styles.liveDot} />
                <span>LIVE MAP</span>
              </motion.div>

              {/* Location badge */}

              <motion.div
                className={styles.locationBadge}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.7,
                  duration: 0.5,
                }}
              >
                <div className={styles.locationIcon}>
                  <MapPinned size={16} />
                </div>

                <div>
                  <span>PROJECT LOCATION</span>
                  <strong>Precisely mapped</strong>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureMap;
