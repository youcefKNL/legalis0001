import React from "react";

const SocialLink = () => {
  const anim = () => {
    const icons = document.querySelectorAll(".social-network a");
    icons.forEach((link) => {
      link.addEventListener("mouseover", (e) => {
        link.style.transform = `translate(${e.offsetX - 20}px, ${
          e.offsetY - 13
        }px)`;
      });

      link.addEventListener("mouseleave", () => {
        link.style.transform = "";
      });
    });
  };

  return (
    <div className="social-network">
      <ul className="content">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          className="hover"
          rel="noopener noreferrer"
          onMouseOver={anim}
        >
          <li>
            <i className="fab fa-facebook-f"></i>
          </li>
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          className="hover"
          rel="noopener noreferrer"
          onMouseOver={anim}
        >
          <li>
            <i className="fab fa-twitter"></i>
          </li>
        </a>
        <a
          target="_blank"
          className="hover"
          href="https://www.instagram.com"
          rel="noopener noreferrer"
          onMouseOver={anim}
        >
          <li>
            <i className="fab fa-instagram"></i>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default SocialLink;
