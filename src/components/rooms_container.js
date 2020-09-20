import React from "react";
import RoomsFilter from "./rooms_filter";
import RoomsList from "./rooms_list.js";
import { withRoomConsumer } from "../context";
import Loading from "./loading";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomContainer);

// import React from "react";
// import RoomsFilter from "./rooms_filter.js";
// import RoomsList from "./rooms_list.js";
// import { RoomConsumer } from "../context";
// import Loading from "./loading";

// function RoomContainer() {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         const { loading, sortedRooms, rooms } = value;

//         if (loading) {
//           return <Loading />;
//         }

//         return (
//           <>
//             <RoomsFilter rooms={rooms} />
//             <RoomsList rooms={sortedRooms} />
//           </>
//         );
//       }}
//     </RoomConsumer>
//   );
// }

// export default RoomContainer;
