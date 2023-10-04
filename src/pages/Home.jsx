import React from "react";
import Navigation from "../components/Navigation";
// import Mouse from "../components/Mouse";
import SocialLink from "../components/SocialLink";
import DynamicText from "../components/DynamicText";
import logo from "../assets/logo/logo-Legalis.png";
import logo2 from "../assets/logo/OIG-removebg-preview.png";
import Footer from "../components/Footer";
import ParticlesContainer from "../components/ParticlesContainer";
import Buttons from "../components/Buttons";

import { motion } from "framer-motion";

const Home = () => {
  // const logoBadge = document.querySelector(".logoBadge");

  // logoBadge.addEventListener("animationend", () => {
  //   logoBadge.style.animation = "h1Anim 1s ease-in-out infinite alternate";
  // });

  const variants = {
    initial: {
      opacity: 0,
      transition: {
        duration: 10,
      },
      x: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.9 },
      x: -100,
    },
  };

  return (
    <motion.section
      className="home"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
    >
      <ParticlesContainer />
      <Navigation />
      <SocialLink />
      <img
        className="logoBadge"
        src={logo2}
        alt="Logo de la société LEGALIS. tous droit réservé"
      />
      <div className="home-main">
        <div className="main-content">
          {/* DRAG & DROP MOTION  */}
          <motion.h1
            drag
            dragConstraints={{
              left: -250,
              right: 250,
              top: -200,
              bottom: 250,
            }}
          >
            Agence Web <strong>- LEGALIS -</strong>
            <img src={logo} alt="" />
          </motion.h1>

          <h2>
            <DynamicText />
          </h2>
        </div>
      </div>
      <Buttons right={"/projet-1"} />
      <Footer />
    </motion.section>
  );
};

export default Home;
