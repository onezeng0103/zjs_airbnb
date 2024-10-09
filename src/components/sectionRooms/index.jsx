import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionRoomsWrapper } from "./style";
import RoomItem from "../roomItem";
const SectionRooms = memo((props) => {
  return (
    <SectionRoomsWrapper>
      {props.roomList?.slice(0, 8).map((item) => (
        <RoomItem item={item} key={item.id} width={props.width} />
      ))}
    </SectionRoomsWrapper>
  );
});

SectionRooms.propTypes = {
  roomList: PropTypes.array,
};

export default SectionRooms;
