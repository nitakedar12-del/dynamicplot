import { motion } from "framer-motion";
import { ArrowRight, Check, SlidersHorizontal } from "lucide-react";

import smartFilterImage from "../../assets/features/smart-filter.png";
import smartFilterResultImage from "../../assets/features/smart-filter-result.png";

import styles from "./FeatureSmartFilter.module.css";

const filters = ["Area", "Road", "Facing", "Status", "RL"];

const FeatureSmartFilter = () => {
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className={styles.eyebrow}>
            <span>FEATURE 03</span>
          </div>

          <h2>
            Find the right plot.
            <br />
            <span>In seconds.</span>
          </h2>

          <p>
            Let buyers quickly narrow down plots using the details that matter
            most — then instantly see the matching plots on the map.
          </p>
        </motion.div>

        {/* =========================================
            FILTER TAGS
        ========================================= */}

        <motion.div
          className={styles.filterTags}
          initial={{
            opacity: 0,
            y: 20,
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
            delay: 0.1,
          }}
        >
          <div className={styles.filterIcon}>
            <SlidersHorizontal size={16} />
          </div>

          {filters.map((filter) => (
            <div className={styles.filterTag} key={filter}>
              <span className={styles.filterDot}>
                <Check size={10} />
              </span>

              {filter}
            </div>
          ))}
        </motion.div>

        {/* =========================================
            WORKFLOW
        ========================================= */}

        <div className={styles.workflow}>
          {/* =======================================
              STEP 01
          ======================================= */}

          <motion.div
            className={styles.workflowItem}
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className={styles.workflowHeader}>
              <div className={styles.workflowNumber}>01</div>

              <div>
                <span>CHOOSE YOUR CRITERIA</span>

                <h3>Apply filters</h3>
              </div>
            </div>

            {/* Only ONE visual container */}

            <div className={styles.imageContainer}>
              <img
                src={smartFilterImage}
                alt="Smart filter panel showing area, road, facing, status and RL filters"
              />
            </div>
          </motion.div>

          {/* =======================================
              CONNECTOR
          ======================================= */}

          <motion.div
            className={styles.workflowConnector}
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: 0.3,
            }}
          >
            <ArrowRight size={20} />
          </motion.div>

          {/* =======================================
              STEP 02
          ======================================= */}

          <motion.div
            className={styles.workflowItem}
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className={styles.workflowHeader}>
              <div className={styles.workflowNumber}>02</div>

              <div>
                <span>INSTANT RESULTS</span>

                <h3>Highlight matching plots</h3>
              </div>
            </div>

            {/* Only ONE visual container */}

            <div className={styles.imageContainer}>
              <img
                src={smartFilterResultImage}
                alt="Map showing highlighted plots matching applied filters"
              />

              <div className={styles.resultBadge}>
                <span />
                30 plots matched
              </div>
            </div>
          </motion.div>
        </div>

        {/* =========================================
            BOTTOM MESSAGE
        ========================================= */}

        <motion.div
          className={styles.bottomMessage}
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
            <Check size={16} />
          </div>

          <span>Less searching. More selling.</span>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSmartFilter;
