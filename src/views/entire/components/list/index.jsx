import React, { memo } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeDetailInfoAction } from "@/store/modules/detail";
import RoomItem from "@/components/roomItem";
import { ListWrapper } from "./style";
const List = memo(() => {
  const dispatch = useDispatch();
  const { list, loading } = useSelector(
    (state) => ({
      list: state.entire.list,
      loading: state.entire.loading,
    }),
    shallowEqual
  );
  const navigate = useNavigate();
  const handleClick = (item) => {
    dispatch(changeDetailInfoAction(item));
    navigate("/detail");
  };
  return (
    <ListWrapper>
      {list.map((item) => (
        <RoomItem
          key={item._id}
          item={item}
          width={"20%"}
          navigateClick={handleClick}
        ></RoomItem>
      ))}
      {loading && <div className="cover"></div>}
    </ListWrapper>
  );
});

List.propTypes = {};

export default List;
