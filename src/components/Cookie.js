import React, { useEffect, useState } from "react";
import CookieConsentPopup from "./CookieConsentPopup";
import Cookies from "js-cookie";

import CookieIcon3d from "../assets/emoji3d/cookie-icon.png";

const Cookie = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const cookiesConsent = Cookies.get("cookies-LEGALIS-Consent");

    if (
      cookiesConsent === "All Cookies Accepted" ||
      cookiesConsent === "GoogleAnalytics Cookie accepted"
    ) {
      setShowPopup(false);
    } else if (
      cookiesConsent === "ALL Cookies declined" ||
      cookiesConsent === "GoogleAnalytics Cookie declined"
    ) {
      Object.keys(Cookies.get()).forEach((cookieName) => {
        if (cookieName.startsWith("_ga")) {
          Cookies.remove(cookieName);
        }
      }); // Supprimer le cookie Google Analytics
      setShowPopup(false); // Ne pas afficher la pop-up dans ce cas non plus
    } else {
      setTimeout(() => {
        setShowPopup(true);
      }, 13000); // Afficher la pop-up lors de la première visite après 13s aprés mes belles animations
    }
  }, []);

  // *********************************CONSSENTEMENT COOKIES ET TAG

  return (
    <>
      <CookieConsentPopup
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        showCookieConsent={showCookieConsent} // Passez l'état showCookieConsent
        setShowCookieConsent={setShowCookieConsent} // Passez la fonction de mise à jour de l'état showCookieConsent
      />
      {/* <CookieIcon showPopup={showPopup} setShowPopup={setShowPopup} /> */}

      {/* icone Cookies INJECTION */}
      <section className={`cookie-icon ${showPopup ? "hidden" : "visible"}`}>
        <button
          onClick={() => setShowPopup(true)}
          title="Personnaliser les préférences de cookies"
          className="hover"
        >
          <img src={CookieIcon3d} alt="" />
        </button>
      </section>
    </>
  );
};

export default Cookie;
