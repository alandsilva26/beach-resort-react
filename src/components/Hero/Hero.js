import React from "react";

function Hero({ hero, children }) {
  return <header className={hero}>{children}</header>;
}

Hero.defaultProps = {
  hero: "defaultHero",
};

export default Hero;
