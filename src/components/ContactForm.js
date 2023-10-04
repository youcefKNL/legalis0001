import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
import Confettis from "./Confetti";
init(process.env.id);

const ContactForm = () => {
  //  Pour pouvoir utiliser les reference d un formulaire
  const form = useRef();

  const [showConfetti, setshowConfetti] = useState(false);

  // *****************Arrête les confettis après 2 secondes
  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => {
        setshowConfetti(false);
      }, 6000);

      // Nettoyer le timer si le composant est démonté
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  const sendEmail = (e) => {
    e.preventDefault();
    const formMessage = document.querySelector(".formMessage");
    // const formMessSuccess = document.querySelector(".form-message-sucess");
    // const formConfetti = document.querySelector(".formulaire");

    emailjs
      .sendForm(
        "service_yu9p83a",
        "template_hn9ev4u",
        form.current,
        process.env.REACT_APP_ID
      )
      .then(
        (result) => {
          //   console.log(result.text);
          // Reset les input direct
          form.current.reset();
          formMessage.innerHTML = "<p class='success'>Message envoyé !</p>";
          setshowConfetti(true);

          setTimeout(() => {
            formMessage.innerHTML = "";
          }, 10000);
        },
        (error) => {
          //   console.log(error.text);
          formMessage.innerHTML =
            "<p class='error'>Une erreur s'est produite, veuillez réessayer</p>";

          //   setTimeout(() => {
          //     formMessError.innerHTML = "";
          //   }, 2500);
        }
      );
  };

  return (
    <div className="form-container">
      <h2>Contactez Nous</h2>
      <form ref={form} onSubmit={sendEmail} className="form-content">
        <label>Nom</label>
        <input type="text" name="name" required autoComplete="off" id="name" />
        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          autoComplete="off"
          id="email"
        />
        <label>Message</label>
        <textarea name="message" required id="mess" />
        <input type="submit" value="Envoyer" className="hover button" />
        <div className="form-message-error"></div>
      </form>
      <div className="formMessage"></div>
      <div className="form-message-sucess"></div>
      {/* Conteneur pour les confettis */}
      {showConfetti && (
        <Confettis
          showConfetti={showConfetti}
          setshowConfetti={setshowConfetti}
        />
      )}
    </div>
  );
};

export default ContactForm;
