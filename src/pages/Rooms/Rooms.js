import React from "react";
import Hero from "../../components/Hero/Hero";
import Banner from "../../components/Banner/Banner";
import { Link } from "react-router-dom";
import "../../components/rooms_container";
import RoomContainer from "../../components/rooms_container";

function Rooms() {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link className="btn-primary" to="/">
            return
          </Link>
        </Banner>
      </Hero>
      <RoomContainer />
    </>
  );
}

export default Rooms;
