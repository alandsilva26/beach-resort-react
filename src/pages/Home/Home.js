import React from "react";
import Hero from "../../components/Hero/Hero";
import Banner from "../../components/Banner/Banner";
import Services from "../../components/Services/Services";
import { Link } from "react-router-dom";
import FeaturedRooms from "../../components/FeaturedRooms/featured_rooms";
import StyledHero from "../../components/styled_hero";
function Home() {
  return (
    <>
      <Hero hero="defaultHero">
        <Banner title="luxurious rooms" subtitle="delux rooms starting at $299">
          <Link className="btn-primary" to="./rooms">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
}

export default Home;
