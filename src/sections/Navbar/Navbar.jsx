import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import logo from "../../assets/logo.png";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 20) {
        setIsScrolled(false);
        setIsVisible(true);

        lastScrollY.current = currentScrollY;

        return;
      }

      setIsScrolled(true);

      if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =====================================================
     ACTIONS
  ===================================================== */

  const handleWatchDemo = () => {
    navigate("/demo");
  };

  const handleBookDemo = () => {
    const section = document.getElementById("book-demo");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      return;
    }

    navigate("/#book-demo");
  };

  return (
    <motion.header
      className={`
        ${styles.navbar}
        ${isScrolled ? styles.scrolled : ""}
        ${isVisible ? styles.visible : styles.hidden}
      `}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to="/" className={styles.brand} aria-label="Plot Layout Land home">
        <img src={logo} alt="Plot Layout Land" />
      </Link>

      <div className={styles.actions}>
        <button
          type="button"
          className={styles.watchButton}
          onClick={handleWatchDemo}
        >
          <span className={styles.watchIcon}>
            <Play size={14} fill="currentColor" strokeWidth={2} />
          </span>

          <span className={styles.watchText}>Watch Demo</span>
        </button>

        <button
          type="button"
          className={styles.bookButton}
          onClick={handleBookDemo}
        >
          <span className={styles.bookText}>Book Demo</span>

          <span className={styles.bookArrow}>
            <ArrowUpRight size={17} strokeWidth={2.2} />
          </span>
        </button>
      </div>
    </motion.header>
  );
};

export default Navbar;
