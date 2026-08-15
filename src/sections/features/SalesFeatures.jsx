import { motion } from "framer-motion";
import {
  MapPin,
  Camera,
  UserRound,
  FileText,
  CheckCircle2,
  MessageCircle,
  ArrowUpRight,
  Smartphone,
} from "lucide-react";

import styles from "./SalesFeatures.module.css";

const features = [
  {
    number: "01",
    eyebrow: "SITE VISIT",
    title: "Log customer visits",
    description:
      "Capture every site visit with customer, project and plot details — including a selfie and live meeting location.",
    type: "visit",
  },
  {
    number: "02",
    eyebrow: "QUOTATION",
    title: "Generate quotations",
    description:
      "Create a professional quotation instantly with your project and plot details.",
    type: "quotation",
  },
  {
    number: "03",
    eyebrow: "WHATSAPP",
    title: "Share a Plot Location",
    description:
      "Share a exact Plot location directly with your customer.",
    type: "whatsapp",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const VisitMockup = () => {
  return (
    <div className={styles.visitMockup}>
      <div className={styles.mockupTop}>
        <div>
          <span className={styles.mockupLabel}>SITE VISIT</span>

          <strong>New Visit</strong>
        </div>

        <span className={styles.liveDot}>LIVE</span>
      </div>

      <div className={styles.visitFields}>
        <div className={styles.field}>
          <span className={styles.fieldIcon}>
            <UserRound size={13} />
          </span>

          <div>
            <small>CUSTOMER</small>

            <strong>Rahul Sharma</strong>
          </div>
        </div>

        <div className={styles.field}>
          <span className={styles.fieldIcon}>
            <MapPin size={13} />
          </span>

          <div>
            <small>PROJECT / PLOT</small>

            <strong>Green Valley · 106</strong>
          </div>
        </div>
      </div>

      <div className={styles.visitBottom}>
        <div className={styles.selfie}>
          <Camera size={15} />

          <span>Customer selfie</span>

          <CheckCircle2 size={14} />
        </div>

        <div className={styles.location}>
          <MapPin size={12} />
          Live location captured
        </div>
      </div>
    </div>
  );
};

const QuotationMockup = () => {
  return (
    <div className={styles.quotationMockup}>
      <div className={styles.quoteTop}>
        <div>
          <span>QUOTATION</span>

          <strong>Green Valley</strong>
        </div>

        <FileText size={20} />
      </div>

      <div className={styles.quoteDetails}>
        <div>
          <span>PLOT</span>

          <strong>106</strong>
        </div>

        <div>
          <span>AREA</span>

          <strong>123 sq.m</strong>
        </div>

        <div>
          <span>FACING</span>

          <strong>East</strong>
        </div>
      </div>

      <div className={styles.quotePrice}>
        <div>
          <span>PLOT PRICE</span>

          <strong>₹24,60,000</strong>
        </div>

        <div>
          <span>TOTAL</span>

          <strong>₹25,80,000</strong>
        </div>
      </div>

      <div className={styles.quoteAction}>
        <span>Create quotation</span>

        <ArrowUpRight size={14} />
      </div>
    </div>
  );
};

const WhatsappMockup = () => {
  return (
    <div className={styles.whatsappMockup}>
      <div className={styles.phoneHeader}>
        <div className={styles.phoneBrand}>
          <span className={styles.whatsappIcon}>
            <MessageCircle size={15} />
          </span>

          <div>
            <strong>Share Plot</strong>

            <small>WhatsApp</small>
          </div>
        </div>

        <Smartphone size={16} />
      </div>

      <div className={styles.plotShareCard}>
        <div className={styles.plotVisual}>
          <div className={styles.plotGrid}>
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className={styles.plotMarker}>
            <MapPin size={15} />
          </div>
        </div>

        <div className={styles.plotInfo}>
          <div>
            <small>AVAILABLE PLOT</small>

            <strong>Plot 106</strong>
          </div>

          <span className={styles.available}>Available</span>
        </div>

        <div className={styles.plotMeta}>
          <span>123 sq.m</span>

          <span>East Facing</span>

          <span>₹24.6L</span>
        </div>
      </div>

      <div className={styles.shareLocation}>
        <MapPin size={13} />

        <span>Exact plot location</span>

        <ArrowUpRight size={13} />
      </div>
    </div>
  );
};

const SalesFeatures = () => {
  return (
    <section className={styles.section} id="sales-features">
      <div className={styles.container}>
        {/* =========================================
            HEADER
        ========================================= */}

        <motion.div
          className={styles.header}
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <span className={styles.eyebrow}>BUILT FOR SALES TEAMS</span>

          <h2>
            Turn site visits
            <span> into sales.</span>
          </h2>

          <p>
            Simple tools that help your team capture visits, create quotations
            and share plots faster.
          </p>
        </motion.div>

        {/* =========================================
            FEATURES
        ========================================= */}

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
        >
          {features.map((feature) => (
            <motion.article
              key={feature.number}
              className={`${styles.card} ${
                feature.type === "whatsapp" ? styles.featuredCard : ""
              }`}
              variants={cardVariants}
            >
              <div className={styles.cardTop}>
                <span className={styles.number}>{feature.number}</span>

                <span className={styles.cardEyebrow}>{feature.eyebrow}</span>
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

              {/* =================================
                  MOCKUPS
              ================================= */}

              <div className={styles.mockupWrapper}>
                {feature.type === "visit" && <VisitMockup />}

                {feature.type === "quotation" && <QuotationMockup />}

                {feature.type === "whatsapp" && <WhatsappMockup />}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SalesFeatures;
