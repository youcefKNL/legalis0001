import React from "react";

import Mouse from "../components/Mouse";
import Navigations from "../components/Navigation";
import Buttons from "../components/Buttons";
import logo from "../assets/logo/OIG-removebg-preview.png";
import Project from "../components/Project";

const Project2 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigations />

        <img src={logo} alt="" className="logo" />

        <Project projectNumber={1} />
        <Buttons left={"/projet-1"} right={"/projet-3"} />
      </div>
    </main>
  );
};
export default Project2;
