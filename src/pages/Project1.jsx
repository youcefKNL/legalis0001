import React from "react";
import Mouse from "../components/Mouse";
import Navigations from "../components/Navigation";
import Buttons from "../components/Buttons";
import logo from "../assets/logo/OIG-removebg-preview.png";
import Project from "../components/Project";

const Project1 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigations />

        <img src={logo} alt="" className="logo" />

        <Project projectNumber={0} />
        <Buttons left={"/"} right={"/projet-2"} />
      </div>
    </main>
  );
};

export default Project1;
