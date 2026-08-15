import {
  ArrowUpRight,
  FileCode2,
  MapPinned,
  Clock3,
  // IndianRupee,
  Check,
} from "lucide-react";

import styles from "./Requirements.module.css";

const requirements = [
  {
    number: "01",
    label: "PROJECT LAYOUT",
    title: "CAD File",
    description: "Provide your project layout drawing in DWG or DXF format.",
    icon: FileCode2,
    tags: ["DWG", "DXF"],
  },
  {
    number: "02",
    label: "SITE LOCATION",
    title: "Google Map Location",
    description: "Share the exact location coordinates of your project site.",
    icon: MapPinned,
    tags: ["Latitude", "Longitude"],
  },
];

const deliveryDetails = [
  {
    icon: Clock3,
    value: "24",
    unit: "Hours",
    label: "Turnaround time",
  },
  // {
  //   icon: IndianRupee,
  //   value: "xxx",
  //   unit: "per plot",
  //   label: "Project pricing",
  // },
];

const Requirements = () => {
  return (
    <section className={styles.section} id="requirements">
      <div className={styles.container}>
        {/* =========================================
            HEADER
        ========================================= */}

        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <span />
            WHAT WE NEED FROM YOU
          </div>

          <h2>
            Everything we need to put
            <span> your plots on the map.</span>
          </h2>

          <p>
            Share your layout drawing and exact site location. We'll transform
            your project into an interactive plot experience on Google Maps.
          </p>
        </div>

        {/* =========================================
            REQUIREMENT CARDS
        ========================================= */}

        <div className={styles.requirementsGrid}>
          {requirements.map((item) => {
            const Icon = item.icon;

            return (
              <article className={styles.requirementCard} key={item.number}>
                <div className={styles.cardTop}>
                  <div className={styles.number}>{item.number}</div>

                  <div className={styles.icon}>
                    <Icon size={21} strokeWidth={1.8} />
                  </div>
                </div>

                <div className={styles.cardContent}>
                  <span className={styles.cardLabel}>{item.label}</span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>

                <div className={styles.tags}>
                  {item.tags.map((tag) => (
                    <span key={tag}>
                      <Check size={12} strokeWidth={2.5} />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={styles.cardArrow}>
                  <ArrowUpRight size={18} strokeWidth={2} />
                </div>
              </article>
            );
          })}
        </div>

        {/* =========================================
            DELIVERY / PRICING
        ========================================= */}

        <div className={styles.delivery}>
          <div className={styles.deliveryIntro}>
            <span>DELIVERY & PRICING</span>

            <h3>
              Simple requirements.
              <br />
              <strong>Clear delivery.</strong>
            </h3>
          </div>

          <div className={styles.deliveryDetails}>
            {deliveryDetails.map((item) => {
              const Icon = item.icon;

              return (
                <div className={styles.detail} key={item.label}>
                  <div className={styles.detailIcon}>
                    <Icon size={18} strokeWidth={2} />
                  </div>

                  <div className={styles.detailContent}>
                    <div className={styles.detailValue}>
                      {item.value}
                      <small>{item.unit}</small>
                    </div>

                    <span>{item.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================
            CTA
        ========================================= */}

        <div className={styles.cta}>
          <div className={styles.ctaText}>
            <span>READY TO GET STARTED?</span>

            <h3>
              Put your plots <span> on the map.</span>
            </h3>
          </div>

          <a href="#book-demo" className={styles.ctaButton}>
            Book a Demo
            <span>
              <ArrowUpRight size={18} strokeWidth={2.2} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Requirements;
