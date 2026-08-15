import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import heroMap from "../../assets/hero-map.png";

import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* Background */}
      <div className={styles.grid} />
      <div className={styles.glow} />
      <div className={styles.glowSecondary} />

      <div className={styles.container}>
        {/* Content */}

        <div className={styles.content}>
          <motion.div
            className={styles.eyebrow}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className={styles.eyebrowDot} />
            <span>SMART PLOT VISUALIZATION</span>
          </motion.div>

          <h1 className={styles.title}>
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              Dynamic Plot.
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
            >
              Layout On
            </motion.span>

            <motion.span
              className={styles.orange}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
            >
              Google Map.
            </motion.span>
          </h1>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
          >
            Turn static plot layouts into interactive map experiences. Let
            buyers explore plots, locations and availability in one place.
          </motion.p>

          {/* <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <button className={styles.primaryButton}>
              <span>Explore Platform</span>
              <span className={styles.arrow}>
                <ArrowUpRight size={18} />
              </span>
            </button>
          </motion.div> */}

          <motion.div
            className={styles.stats}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05 }}
          >
            <div>
              <strong>1,200+</strong>
              <span>Plots Mapped</span>
            </div>

            <div>
              <strong>40+</strong>
              <span>Live Projects</span>
            </div>

            <div>
              <strong>98%</strong>
              <span>Client Satisfaction</span>
            </div>
          </motion.div>
        </div>

        {/* Product Visual */}

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.9, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.imageWrapper}>
            <motion.img
              src={heroMap}
              alt="Interactive plot map"
              className={styles.image}
              animate={{ scale: [1, 1.025, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className={styles.imageOverlay} />

            {/* Live indicator */}

            <motion.div
              className={styles.liveBadge}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <span className={styles.liveDot} />
              LIVE PLOT MAP
            </motion.div>

            {/* Availability chip */}

            <motion.div
              className={styles.miniStat}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
            >
              <strong>18</strong>
              <span>Plots Available</span>
            </motion.div>

            {/* Plot information */}

            <motion.div
              className={styles.plotCard}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.7 }}
            >
              <span className={styles.plotLabel}>SELECTED PLOT</span>

              <h3>
                Plot <span>25</span>
              </h3>

              <div className={styles.plotInfo}>
                <div>
                  <small>AREA</small>
                  <strong>165 sq.m</strong>
                </div>

                <div>
                  <small>FACING</small>
                  <strong>East</strong>
                </div>
              </div>

              <div className={styles.available}>
                <span />
                Available
                <ArrowUpRight size={14} />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
