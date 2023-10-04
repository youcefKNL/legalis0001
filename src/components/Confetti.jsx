import React from "react";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

const Confettis = () => {
  const { width, height } = useWindowSize();

  return (
    <>
      <Confetti
        //direction vent confetti
        wind={-0.05}
        //effet de gravité au sol
        gravity={0.2}
        //nombre de confetti
        numberOfPieces={100}
        // S adapte a la largeur de la fenetre si redimmentionnement avec react-use/lib/useWindowSize
        width={width}
        height={height}
        // Couleur des confetti
        colors={["#aa8950", "#ffbf00", "#263672"]}
        duration={20}
        //   tweenDuration={200}
      />
    </>
  );
};

export default Confettis;
