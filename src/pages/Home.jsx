// import { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { ArrowUpRight, Play, MapPin, MousePointer2 } from "lucide-react";

// import logo from "../assets/logo.png";
// import heroMap from "../assets/hero-map.png";

// import "../styles/theme.css";
// import "../styles/home.css";

// const Home = () => {
//   const heroRef = useRef(null);

//   useEffect(() => {
//     const handleMouseMove = (event) => {
//       if (!heroRef.current) return;

//       const { innerWidth, innerHeight } = window;

//       const x = (event.clientX / innerWidth - 0.5) * 2;
//       const y = (event.clientY / innerHeight - 0.5) * 2;

//       heroRef.current.style.setProperty("--mouse-x", `${x * 10}px`);

//       heroRef.current.style.setProperty("--mouse-y", `${y * 10}px`);
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);


  
//   return (
//     <main className="home">
//       {/* ================= NAVBAR ================= */}

//       <motion.nav
//         className="pl-navbar"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{
//           duration: 0.7,
//           ease: [0.22, 1, 0.36, 1],
//         }}
//       >
//         <a href="/" className="pl-navbar-logo">
//           <img src={logo} alt="Plot Layout Land" />
//         </a>

//         <div className="pl-navbar-actions">
//           <button className="pl-watch-demo">
//             <span className="pl-watch-icon">
//               <Play size={14} fill="currentColor" />
//             </span>

//             <span>Watch Demo</span>
//           </button>

//           <button className="pl-book-demo">
//             <span>Book Demo</span>

//             <span className="pl-book-arrow">
//               <ArrowUpRight size={17} />
//             </span>
//           </button>
//         </div>
//       </motion.nav>

//       {/* ================= HERO ================= */}

//       <section ref={heroRef} className="hero">
//         {/* Decorative grid */}

//         <div className="hero-grid" />

//         {/* Glow */}

//         <div className="hero-glow hero-glow-one" />
//         <div className="hero-glow hero-glow-two" />

//         <div className="hero-container">
//           {/* ================= LEFT CONTENT ================= */}

//           <div className="hero-content">
//             <motion.div
//               className="hero-eyebrow"
//               initial={{
//                 opacity: 0,
//                 y: 20,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               transition={{
//                 delay: 0.3,
//                 duration: 0.7,
//               }}
//             >
//               <span className="eyebrow-dot" />

//               <span>DYNAMIC PLOT INTELLIGENCE</span>
//             </motion.div>

//             <h1 className="hero-title">
//               <motion.span
//                 initial={{
//                   opacity: 0,
//                   y: 60,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{
//                   delay: 0.45,
//                   duration: 0.9,
//                   ease: [0.22, 1, 0.36, 1],
//                 }}
//               >
//                 Your Land.
//               </motion.span>

//               <motion.span
//                 initial={{
//                   opacity: 0,
//                   y: 60,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{
//                   delay: 0.55,
//                   duration: 0.9,
//                   ease: [0.22, 1, 0.36, 1],
//                 }}
//               >
//                 Live on the
//               </motion.span>

//               <motion.span
//                 className="orange-text"
//                 initial={{
//                   opacity: 0,
//                   y: 60,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{
//                   delay: 0.65,
//                   duration: 0.9,
//                   ease: [0.22, 1, 0.36, 1],
//                 }}
//               >
//                 Map.
//               </motion.span>
//             </h1>

//             <motion.p
//               className="hero-description"
//               initial={{
//                 opacity: 0,
//                 y: 30,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               transition={{
//                 delay: 0.85,
//                 duration: 0.8,
//               }}
//             >
//               Turn static plot layouts into interactive map experiences. Let
//               buyers see plots, locations, availability and details — all in one
//               place.
//             </motion.p>

//             {/* CTA */}

//             {/* <motion.div
//               className="hero-actions"
//               initial={{
//                 opacity: 0,
//                 y: 25,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               transition={{
//                 delay: 1,
//                 duration: 0.7,
//               }}
//             >
//               <button className="primary-cta">
//                 <span>Explore the Platform</span>

//                 <span className="cta-arrow">
//                   <ArrowUpRight size={18} />
//                 </span>
//               </button>

//               <button className="secondary-cta">
//                 <span className="secondary-play">
//                   <Play size={14} fill="currentColor" />
//                 </span>

//                 <span>Watch Demo</span>
//               </button>
//             </motion.div> */}

//             {/* Small trust statement */}

//             <motion.div
//               className="hero-trust"
//               initial={{
//                 opacity: 0,
//               }}
//               animate={{
//                 opacity: 1,
//               }}
//               transition={{
//                 delay: 1.2,
//                 duration: 0.8,
//               }}
//             >
//               <span className="trust-line" />

//               <span>Built for modern real estate teams</span>
//             </motion.div>
//           </div>

//           {/* ================= RIGHT VISUAL ================= */}

//           <div className="hero-visual">
//             <motion.div
//               className="map-wrapper"
//               initial={{
//                 opacity: 0,
//                 scale: 0.92,
//                 x: 80,
//               }}
//               animate={{
//                 opacity: 1,
//                 scale: 1,
//                 x: 0,
//               }}
//               transition={{
//                 delay: 0.35,
//                 duration: 1.2,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//             >
//               {/* Image */}

//               <motion.img
//                 src={heroMap}
//                 alt="Interactive plot map"
//                 className="hero-map-image"
//                 style={{
//                   transform: "translate(var(--mouse-x), var(--mouse-y))",
//                 }}
//               />

//               {/* Dark overlay */}

//               <div className="map-overlay" />

//               {/* Floating label */}

//               <motion.div
//                 className="map-label"
//                 initial={{
//                   opacity: 0,
//                   y: -20,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{
//                   delay: 1.2,
//                   duration: 0.7,
//                 }}
//               >
//                 <span className="live-dot" />

//                 <span>LIVE PLOT MAP</span>
//               </motion.div>

//               {/* Location marker */}

//               <motion.div
//                 className="map-marker"
//                 initial={{
//                   opacity: 0,
//                   scale: 0,
//                   y: -50,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   scale: 1,
//                   y: 0,
//                 }}
//                 transition={{
//                   delay: 1.3,
//                   duration: 0.8,
//                   type: "spring",
//                   stiffness: 180,
//                   damping: 12,
//                 }}
//               >
//                 <MapPin size={25} />
//               </motion.div>

//               {/* Selected plot */}

//               <motion.div
//                 className="selected-plot"
//                 initial={{
//                   opacity: 0,
//                   y: 30,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{
//                   delay: 1.45,
//                   duration: 0.8,
//                 }}
//               >
//                 <div className="selected-heading">SELECTED PLOT</div>

//                 <div className="selected-title">
//                   Plot <span>25</span>
//                 </div>

//                 <div className="selected-details">
//                   <div>
//                     <small>AREA</small>
//                     <strong>165 sq.m</strong>
//                   </div>

//                   <div>
//                     <small>FACING</small>
//                     <strong>East</strong>
//                   </div>
//                 </div>

//                 <div className="plot-status">
//                   <span />
//                   Available
//                   <span className="view-details">
//                     View Details
//                     <ArrowUpRight size={14} />
//                   </span>
//                 </div>
//               </motion.div>

//               {/* Side controls */}

//               <motion.div
//                 className="map-controls"
//                 initial={{
//                   opacity: 0,
//                   x: -20,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   x: 0,
//                 }}
//                 transition={{
//                   delay: 1.5,
//                   duration: 0.7,
//                 }}
//               >
//                 <button>
//                   <MousePointer2 size={18} />
//                 </button>

//                 <button>
//                   <MapPin size={18} />
//                 </button>
//               </motion.div>
//             </motion.div>

//             {/* Bottom caption */}

//             <motion.div
//               className="visual-caption"
//               initial={{
//                 opacity: 0,
//               }}
//               animate={{
//                 opacity: 1,
//               }}
//               transition={{
//                 delay: 1.7,
//               }}
//             >
//               <span>SCROLL TO EXPLORE</span>

//               <span className="caption-line" />

//               <span>YOUR LAYOUT. YOUR LOCATION.</span>

//               <span className="caption-line" />
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Home;
