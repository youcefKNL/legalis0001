import React from "react";
import Mouse from "../components/Mouse";
import Navigations from "../components/Navigation";
import logo from "../assets/logo/OIG-removebg-preview.png";
import ContactForm from "../components/ContactForm";
import Buttons from "../components/Buttons";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SocialLink from "../components/SocialLink";
import { motion } from "framer-motion";

const Contact = () => {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 200,
    },
  };

  return (
    <main>
      <Mouse />
      <motion.div
        className="contact"
        initial="out"
        exit="out"
        animate="in"
        variants={pageTransition}
        transition={{ duration: 0.5 }}
      >
        <Navigations />
        <img src={logo} alt="" className="logo" />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>adresse</h4>
              <p>9 rue du Jasmin</p>
              <p>91000 Evry</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>téléphone</h4>

              <CopyToClipboard text="0601312152" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => {
                    alert("Téléphone copié !");
                  }}
                >
                  06 01 31 21 52
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>email</h4>
              <CopyToClipboard
                text="khenichil_youcef@hotmail.fr"
                className="hover"
              >
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => {
                    alert("Email copié !");
                  }}
                >
                  khenichil_youcef@hotmail.fr
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialLink />
          <div className="credits">
            <p>Powered By LEGALIS 2023.Tous droits résérvés.</p>
          </div>
        </div>
        <Buttons left={"/projet-4"} right={""} />
      </motion.div>
    </main>
  );
};

export default Contact;
