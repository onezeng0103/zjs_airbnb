import PropTypes from "prop-types";
import React, { memo, useRef } from "react";
import { Rating } from "@mui/material";
import { RoomItemWrapper } from "./style";
import IconArrowLeft from "@/assets/svg/iconArrowLeft";
import IconArrowRight from "@/assets/svg/iconArrowRight";
import { Carousel } from "antd";

const RoomItem = memo((props) => {
  const { item, width, navigateClick } = props;
  const carouselRef = useRef();
  const clickEl = (
    <div className="control">
      <div className="btn left" onClick={(e) => handleIcon(e, true)}>
        <IconArrowLeft fontSize={20} />
      </div>
      <div className="btn right" onClick={(e) => handleIcon(e, false)}>
        <IconArrowRight fontSize={20} />
      </div>
    </div>
  );
  const carouselEl = (
    <Carousel dots={false} ref={carouselRef}>
      {item.picture_urls?.map((item) => {
        return (
          <div className="cover" key={item}>
            <img src={item} alt="" />
          </div>
        );
      })}
    </Carousel>
  );
  const noEl = (
    <div className="cover">
      <img src={item.picture_url} alt="" />
    </div>
  );
  const handleIcon = (e, isLeft) => {
    e.stopPropagation();
    if (isLeft) {
      carouselRef.current.prev();
    } else {
      carouselRef.current.next();
    }
  };
  const handleClick = (item) => {
    if (navigateClick) navigateClick(item);
  };
  return (
    <RoomItemWrapper
      text_color={item.verify_info?.text_color || "#767676"}
      width={width}
    >
      <div onClick={(e) => handleClick(item)}>
        <div className="swiper">
          {item.picture_urls?.length > 1 && clickEl}
          {item.picture_urls?.length > 1 ? carouselEl : noEl}
        </div>
        <div className="verify_info">{item.verify_info.messages.join("·")}</div>
        <div className="name">{item.name}</div>
        <div className="price">￥{item.price}/晚</div>
        <div className="bottom">
          <Rating
            value={item.star_rating ?? 5}
            precision={0.1}
            readOnly
            sx={{ fontSize: "12px", color: "#00848A", marginRight: "-1px" }}
          />
          <span className="count">{item.reviews_count}</span>
          {item.bottom_info && (
            <span className="extra">·{item.bottom_info?.content}</span>
          )}
        </div>
      </div>
    </RoomItemWrapper>
  );
});

RoomItem.propTypes = {
  item: PropTypes.object,
};

export default RoomItem;
