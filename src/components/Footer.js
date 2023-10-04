import React from "react";
import Logo from "../assets/logo/logo-Legalis2.png";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <span>
        -Cabinet de conseil LEGALIS SASU- © 2023. Tous droits réservés. &ensp;
      </span>
      {/* //on click vers le bas transition */}
      <NavLink to="Mentions+légales" className="hover mention">
        Mentions légales.
      </NavLink>
      <span className="poweredLegalis">
        powered by
        {/* //onclick effet spéciaux */}
        <NavLink className="hover">
          <img src={Logo} alt="" />
        </NavLink>
      </span>
    </footer>
  );
};

export default Footer;
