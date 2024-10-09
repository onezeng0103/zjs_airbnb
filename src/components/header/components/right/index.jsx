import React, { memo } from "react";
import { useState, useEffect } from "react";
import { RightWrapper } from "./style.js";
import IconLang from "@/assets/svg/iconLang.jsx";
import IconMore from "@/assets/svg/iconMore.jsx";
import IconUser from "@/assets/svg/iconUser.jsx";
const HeaderRight = memo(() => {
  const [isMore, setIsMore] = useState(false);
  const handleMore = () => {
    setIsMore(true);
  };
  useEffect(() => {
    function windowHandleClick() {
      setIsMore(false);
    }
    window.addEventListener("click", windowHandleClick, true);
    return () => {
      window.removeEventListener("click", windowHandleClick, true);
    };
  }, []);
  return (
    <RightWrapper>
      <div className="text">登录</div>
      <div className="text">注册</div>
      <div className="text">
        <IconLang />
      </div>
      <div className="profile" onClick={handleMore}>
        <IconMore />
        <IconUser />
        {isMore && (
          <div className="more">
            <div className="top">
              <div className="btn">注册</div>
              <div className="btn">登录</div>
            </div>
            <div className="bottom">
              <div className="btn">出租房源</div>
              <div className="btn">开展体验</div>
              <div className="btn">帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;
