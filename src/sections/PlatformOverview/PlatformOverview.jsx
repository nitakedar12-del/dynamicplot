import { motion } from "framer-motion";
import { ArrowUpRight, FileText, Map, Users } from "lucide-react";

import styles from "./PlatformOverview.module.css";

const solutions = [
  {
    number: "01",
    title: "Maps & PDFs",
    description:
      "Turn static plot layouts into interactive digital experiences.",
    icon: Map,
    featured: true,
  },
  {
    number: "02",
    title: "Brochure",
    description:
      "Present your project information in a clearer digital format.",
    icon: FileText,
  },
  {
    number: "03",
    title: "CRM",
    description: "Keep plots, customers and sales activity connected.",
    icon: Users,
  },
];

const PlatformOverview = () => {
  return (
    <section className={styles.section} id="platform">
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />

            <span>ONE CONNECTED PLATFORM</span>
          </div>

          <h2>
            One place.
            <br />
            <span>All solutions.</span>
          </h2>

          <p>
            Bring your layouts, project information and customer interactions
            together in one connected digital experience.
          </p>
        </motion.div>

        {/* =========================================
            SOLUTIONS
        ========================================= */}

        <div className={styles.solutions}>
          {solutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <motion.article
                key={solution.number}
                className={`${styles.solution} ${
                  solution.featured ? styles.featured : ""
                }`}
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
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Number */}

                <div className={styles.number}>{solution.number}</div>

                {/* Icon */}

                <div className={styles.icon}>
                  <Icon size={20} strokeWidth={1.8} />
                </div>

                {/* Content */}

                <div className={styles.content}>
                  <h3>{solution.title}</h3>

                  <p>{solution.description}</p>
                </div>

                {/* Arrow */}

                <div className={styles.arrow}>
                  <ArrowUpRight size={20} />
                </div>

                {/* Featured accent */}

                {solution.featured && <div className={styles.featuredAccent} />}
              </motion.article>
            );
          })}
        </div>

        {/* =========================================
            BOTTOM MESSAGE
        ========================================= */}

        <motion.div
          className={styles.bottom}
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
        >
          <span>Built for modern real estate teams</span>

          <div className={styles.bottomLine} />

          <strong>
            Clearer.
            <span> Faster.</span>
            Connected.
          </strong>
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformOverview;
