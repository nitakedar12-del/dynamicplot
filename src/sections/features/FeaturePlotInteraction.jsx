import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import plotClickImage from "../../assets/features/plot-click.png";
import plotInfoImage from "../../assets/features/plot-info.png";
import plotDetailsImage from "../../assets/features/plot-detailes.png";

import styles from "./FeaturePlotInteraction.module.css";

const steps = [
  {
    number: "01",
    title: "Select a plot",
    description: "Click any plot directly from the interactive layout.",
    image: plotClickImage,
  },
  {
    number: "02",
    title: "See plot information",
    description: "Instantly see area, facing, road and availability.",
    image: plotInfoImage,
  },
  {
    number: "03",
    title: "View full details",
    description: "Open the complete plot information when you need more.",
    image: plotDetailsImage,
  },
];

const FeaturePlotInteraction = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* =========================================
            HEADER
        ========================================= */}

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
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className={styles.eyebrow}>
            <span>FEATURE 02</span>
          </div>

          <h2>
            Every plot.
            <br />
            <span>Every detail.</span>
          </h2>

          <p>
            Give buyers a simple way to explore individual plots, understand the
            important information and open complete details when they need them.
          </p>
        </motion.div>

        {/* =========================================
            INTERACTION FLOW
        ========================================= */}

        <div className={styles.flow}>
          {steps.map((step, index) => (
            <motion.div
              className={styles.step}
              key={step.number}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.14,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Step heading */}

              <div className={styles.stepHeader}>
                <div className={styles.stepNumber}>{step.number}</div>

                <div>
                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </div>
              </div>

              {/* Image */}

              <div className={styles.imageWrapper}>
                <motion.div
                  className={styles.imageCard}
                  whileHover={{
                    y: -6,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                >
                  <img src={step.image} alt={step.title} />

                  <div className={styles.imageGlow} />
                </motion.div>
              </div>

              {/* Arrow between steps */}

              {index < steps.length - 1 && (
                <div className={styles.connector}>
                  <ArrowRight size={18} />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* =========================================
            BOTTOM MESSAGE
        ========================================= */}

        <motion.div
          className={styles.bottom}
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
            duration: 0.6,
            delay: 0.25,
          }}
        >
          <div className={styles.bottomIcon}>
            <CheckCircle2 size={18} />
          </div>

          <div>
            <strong>Simple for buyers.</strong>

            <span>Powerful for sales teams.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturePlotInteraction;
