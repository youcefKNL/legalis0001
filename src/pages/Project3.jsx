import React from "react";

import Mouse from "../components/Mouse";
import Navigations from "../components/Navigation";
import Buttons from "../components/Buttons";
import logo from "../assets/logo/OIG-removebg-preview.png";
import Project from "../components/Project";

const Project3 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigations />

        <img src={logo} alt="" className="logo" />

        <Project projectNumber={2} />
        <Buttons left={"/projet-2"} right={"/projet-4"} />
      </div>
    </main>
  );
};
export default Project3;
