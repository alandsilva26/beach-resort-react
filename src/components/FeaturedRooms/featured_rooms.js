import React from "react";
import { RoomContext } from "../../context";
import Loading from "../loading";
import Room from "../Room/room";
import Title from "../Title/Title";
class FeaturedRooms extends React.Component {
  static contextType = RoomContext;
  render() {
    let { loading, featuredRooms: rooms } = this.context;
    console.log(rooms);
    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });
    return (
      <section className="featured-rooms">
        <Title title="Featured Rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}

export default FeaturedRooms;
