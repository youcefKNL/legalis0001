import React, { useState } from "react";
import Cookies from "js-cookie";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/logo/logo-Legalis.png";
import CookieIcon3d from "../assets/emoji3d/cookie-icon2.png";
import CheckIcon3d from "../assets/emoji3d/check-icon.png";

const CookieConsentPopup = ({
  showPopup,
  setShowPopup,
  setShowCookieConsent,
}) => {
  const [customizeCookies, setCustomizeCookies] = useState(false);
  const [googleAnalytics, setGoogleAnalytics] = useState(false);
  const cookieOptions = {
    expires: 365,
    secure: true,
    sameSite: "strict",
  };

  //********************************************************Script Google Tag
  // useEffect(() => {
  //   const consent = Cookies.get("cookies-LEGALIS-Consent");

  //   if (consent === "All Cookies Accepted") {
  //     setShowPopup(false);
  //     setShowCookieConsent(false);
  //     loadGoogleTag();
  //   }
  // }, [setShowPopup, setShowCookieConsent]);

  const loadGoogleTag = () => {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-K6HK1NHGV1";
    script.async = true;

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-K6HK1NHGV1");
    };

    document.head.appendChild(script);
  };

  //********************************************************COOKIES = Accepter tout
  const handleAcceptAll = () => {
    Cookies.set(
      "cookies-LEGALIS-Consent",
      "All Cookies Accepted",
      cookieOptions
    );
    setShowPopup(false);
    setShowCookieConsent(false);
    loadGoogleTag();

    // window.gtag("event", "accept_all_cookies", {
    //   event_category: "Cookies",
    // });
  };

  //********************************************************COOKIES = Refuser tout
  const handleDeclineAll = () => {
    Object.keys(Cookies.get()).forEach((cookieName) => {
      if (cookieName.startsWith("_ga")) {
        Cookies.remove(cookieName);
      }
    });

    Cookies.set(
      "cookies-LEGALIS-Consent",
      "ALL Cookies declined",
      cookieOptions
    );
    setShowPopup(false);
    setShowCookieConsent(false);
    setGoogleAnalytics(true);
  };

  //********************************************************COOKIES = Personaliser
  const handleCustomize = () => {
    setCustomizeCookies(true);
  };

  const handleFinishCustomizing = () => {
    const googleAnalyticsAccepted = googleAnalytics;

    if (googleAnalyticsAccepted) {
      Cookies.set(
        "cookies-LEGALIS-Consent",
        "GoogleAnalytics Cookie accepted",
        cookieOptions
      );
      setShowPopup(false);
      setShowCookieConsent(false);
      setGoogleAnalytics(true);
      loadGoogleTag();

      // window.gtag("event", "accept_customized_cookies", {
      //   event_category: "Cookies",
      // });
    } else {
      Object.keys(Cookies.get()).forEach((cookieName) => {
        if (cookieName.startsWith("_ga")) {
          Cookies.remove(cookieName);
        }
      });
      Cookies.set(
        "cookies-LEGALIS-Consent",
        "GoogleAnalytics Cookie declined",
        cookieOptions
      );
      setShowPopup(false);
      setShowCookieConsent(false);
      setGoogleAnalytics(true);
    }
  };

  if (!showPopup) {
    return null;
  }

  //********************************************************JSX
  return (
    <section className="cookieContainer">
      <div className="cookie-popup">
        {customizeCookies ? (
          <div className="modal2">
            <h3>
              Expérience utilisateur <img src={CheckIcon3d} alt="" />
            </h3>
            <p>
              Les cookies servent à améliorer votre expérience. Nous
              enregistrons les informations que vous avez bien voulu nous
              confier afin d’adapter notre site à vos besoins et à votre profil.
              Nous vous permettons de prolonger l’expérience quand vous quittez
              notre site, en vous proposant des annonces personnalisées.
            </p>

            <div className="toggle-wrapper">
              <div className="toggle checkcross">
                <input
                  id="googleAnalytics"
                  type="checkbox"
                  checked={googleAnalytics}
                  onChange={() => setGoogleAnalytics(!googleAnalytics)}
                />
                <label className="toggle-item" htmlFor="googleAnalytics">
                  <div className="check"></div>
                </label>
              </div>
              <span>
                Permet d'analyser les statistiques de consultation de notre site
              </span>
              <FontAwesomeIcon icon={faCircleQuestion} />
              <span className="toggle-label">Google Analytics</span>
            </div>

            <div className="cookie-popup-buttons">
              <button
                className="cookie-popup-button accept"
                onClick={handleAcceptAll}
              >
                J'accepte tout
              </button>
              <button
                className="cookie-popup-button"
                onClick={handleFinishCustomizing}
              >
                Terminer
              </button>
            </div>
          </div>
        ) : (
          <div className="modal1">
            <h3>
              <img src={CookieIcon3d} alt="" /> Gestion des cookies{" "}
              <img src={CookieIcon3d} alt="" />
            </h3>
            <div>LEGALIS Cabinet de Conseil</div>
            <br />

            <p>
              Nous utilisons des cookies pour optimiser votre expérience
              utilisateur et pour améliorer nos contenus. Vous pouvez
              personnaliser et modifier vos choix à tout moment.
              <br />
              <br /> Consulter notre &nbsp;
              <NavLink
                to="/politique+confidentialité"
                title="Consulter la politique de confidentialité"
                onClick={() => setShowPopup(false)}
              >
                politique de confidentialité
              </NavLink>
              <br /> Consulter notre &nbsp;
              <NavLink
                to="/politique+cookies"
                title="Consulter la politique en matière de cookies"
                onClick={() => setShowPopup(false)}
              >
                politique en matière de cookies
              </NavLink>
            </p>
          </div>
        )}

        <div className="cookie-popup-buttons">
          {!customizeCookies && (
            <>
              <button
                className="cookie-popup-button accept"
                onClick={handleAcceptAll}
              >
                J'accepte tout
              </button>
              <button
                className="cookie-popup-button decline"
                onClick={handleDeclineAll}
                title="Pour une expérience personnalisée et sans interruption, nous vous encourageons à accepter nos cookies. Cela nous permet de vous proposer des contenus pertinents et de vous offrir un service de qualité. Merci"
              >
                Je refuse tout
              </button>
              <button
                className="cookie-popup-button customize"
                onClick={handleCustomize}
              >
                Personnaliser
              </button>
            </>
          )}
          {customizeCookies && (
            <button
              className="cookie-popup-button back"
              onClick={() => setCustomizeCookies(false)}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
          )}
        </div>
        <div className="footerPopUp">
          powered by <img src={Logo} alt="" />
        </div>
      </div>
    </section>
  );
};

export default CookieConsentPopup;
