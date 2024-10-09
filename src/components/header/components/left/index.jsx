import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { LeftWrapper } from "./style.js";
import IconLogo from "@/assets/svg/iconLogo.jsx";
const HeaderLeft = memo(() => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };
  return (
    <LeftWrapper>
      <div className="icon" onClick={handleClick}>
        <IconLogo />
      </div>
    </LeftWrapper>
  );
});

export default HeaderLeft;
