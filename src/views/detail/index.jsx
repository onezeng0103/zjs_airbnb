import React, { memo, useState } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { DetailWrapper } from "./style";
import IconPoint from "@/assets/svg/iconPoint";
import ImgDevice from "@/components/imgDevice";
const Details = memo(() => {
  const { detailInfo } = useSelector(
    (state) => ({
      detailInfo: state.detail.detailInfo,
    }),
    shallowEqual
  );
  const [showImg, setShowImg] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleShowImg = (item) => {
    if (!item) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(detailInfo.picture_urls.indexOf(item));
    }
    setShowImg(true);
  };
  return (
    <DetailWrapper>
      <div
        className="left"
        onClick={(e) => handleShowImg(detailInfo.picture_urls?.[0])}
      >
        <img src={detailInfo.picture_urls?.[0]} alt="" />
        <div className="cover"></div>
      </div>
      <div className="right">
        {detailInfo.picture_urls?.slice(1, 5).map((item, index) => {
          return (
            <div
              className="item"
              key={item}
              onClick={(e) => handleShowImg(item)}
            >
              <img key={item} src={item} alt="" />
              <div className="cover"></div>
            </div>
          );
        })}
      </div>
      <div className="btn" onClick={(e) => handleShowImg()}>
        <IconPoint />
        <span>显示所有照片</span>
      </div>
      {showImg && (
        <ImgDevice
          handleShowImg={setShowImg}
          urls={detailInfo.picture_urls}
          currentImgIndex={currentIndex}
        />
      )}
    </DetailWrapper>
  );
});

export default Details;
