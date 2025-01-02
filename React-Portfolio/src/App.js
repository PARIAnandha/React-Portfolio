import React from "react";
import { motion } from "framer-motion";
import About from "./components/About";
import Bot from "./components/Bot";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Hireme from "./components/Hireme";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";

function App() {
  // Animation Variants for Slow Fade-In Effect
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 2.8, ease: "easeOut" } }, // Slow transition
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />
      
      {/* Bot */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Bot />
      </motion.div>

      {/* Hero Section */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Hero />
      </motion.div>

      {/* About Section */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <About />
      </motion.div>

      {/* Skills Section */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Skills />
      </motion.div>

      {/* Hireme Section */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Hireme />
      </motion.div>

      {/* Project Section */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Project />
      </motion.div>

      {/* Contact Section */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Contact />
      </motion.div>

      {/* Footer */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;
