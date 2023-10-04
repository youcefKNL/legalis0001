import React, { useEffect, useState } from "react";
import { projectsData } from "../data/projectsData";
import { motion } from "framer-motion";

const Project = ({ projectNumber }) => {
  const [currentProject] = useState(projectsData[projectNumber]);
  //   console.log(currentProject);

  const [left, setLeft] = useState();
  const [top, setTop] = useState();
  const [size, setSize] = useState();

  useEffect(() => {
    //Des que tu joue le composant tu joue :

    setLeft(Math.floor(Math.random() * 200 + 700) + "px");
    setTop(Math.floor(Math.random() * 200 + 150) + "px");
    setSize("scale(" + (Math.random() + 0.7) + ")");
  }, []);

  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: 200,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0.4,
      transition: { duration: 0.35 },
      x: -800,
    },
  };

  // cubib bezier
  const transition = {
    ease: [0.03, 0.87, 0.73, 0.9],
    duration: 0.6,
  };

  //image animation params

  const imgAnim = {
    initial: {
      opacity: 0,
      // transition: { duration: 0.5 },
      x: Math.floor(Math.random() * 350 * (Math.random() > 0.4 ? 1 : -1)),
      y: Math.floor(Math.random() * 120 * (Math.random() > 0.4 ? 1 : -1)),
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
    },
    // exit: {
    //   opacity: 0.4,
    //   transition: { duration: 0.35 },
    //   x: -800,
    // },
  };

  return (
    <motion.div
      className="project-main"
      initial="initial"
      animate="animate"
      exit="exit"
      transition={transition}
      variants={variants}
    >
      <div className="project-content">
        <h1>{currentProject.title}</h1>
        <p>{currentProject.date}</p>
        <ul className="languages">
          {currentProject.languages.map((item) => {
            return <li key={item}>{item} </li>;
          })}
        </ul>
      </div>
      <motion.div
        className="img-content"
        initial="initial"
        animate="animate"
        // exit="exit"
        transition={{ duration: 1.2 }}
        variants={imgAnim}
      >
        <div className="img-container hover">
          <span>
            <h3>{currentProject.title}</h3>
            <p>{currentProject.infos}</p>
          </span>
          <img
            src={currentProject.img}
            alt={currentProject.title}
            className="img"
          />
        </div>
        <div className="button-container">
          <a
            href={currentProject.link}
            target="_blank"
            className="hover"
            rel="noopener noreferrer"
          >
            <span className="button">voir le site</span>
          </a>
        </div>
      </motion.div>
      <span
        className="random-circle"
        style={{ left, top, transform: size }}
      ></span>
    </motion.div>
  );
};

export default Project;
