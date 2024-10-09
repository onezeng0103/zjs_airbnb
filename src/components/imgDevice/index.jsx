import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { ImgDeviceWrapper } from "./style";
import IconClose from "@/assets/svg/iconClose";
import IconShare from "@/assets/svg/iconShare";
import IconLove from "@/assets/svg/iconLove";
import IconArrowLeft from "@/assets/svg/iconArrowLeft";
import IconArrowRight from "@/assets/svg/iconArrowRight";

const ImgDevice = memo((props) => {
  const { handleShowImg, currentImgIndex, urls } = props;
  const [currentIndex, setCurrentIndex] = useState(currentImgIndex);
  const handleClose = () => {
    if (handleShowImg) {
      handleShowImg();
    }
  };

  const handleClick = (isLeft) => {
    if (isLeft) {
      setCurrentIndex(currentIndex === 0 ? urls.length - 1 : currentIndex - 1);
    } else {
      setCurrentIndex(currentIndex === urls.length - 1 ? 0 : currentIndex + 1);
    }
  };

  const currentUrl = urls[currentIndex];

  return (
    <ImgDeviceWrapper>
      <div className="top">
        <div className="close" onClick={handleClose}>
          <IconClose />
          <span>关闭</span>
        </div>
        <div className="indicator">
          {currentIndex + 1} / {urls.length}
        </div>
        <div className="share">
          <div className="item">
            <IconShare />
          </div>
          <div className="item">
            <IconLove />
          </div>
        </div>
      </div>
      <div className="main">
        <img src={currentUrl} alt="" />
      </div>
      <div className="left" onClick={(e) => handleClick(true)}>
        <IconArrowLeft />
      </div>
      <div className="right" onClick={(e) => handleClick(false)}>
        <IconArrowRight />
      </div>
    </ImgDeviceWrapper>
  );
});

ImgDevice.propTypes = {
  handleShowImg: PropTypes.func,
};

export default ImgDevice;
