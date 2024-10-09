import React, { memo } from "react";
import { CenterWrapper } from "./style.js";
import IconSearch from "@/assets/svg/iconSearch";
const HeaderCenter = memo(() => {
  return (
    <CenterWrapper>
      <div className="text">搜索房源和体验</div>
      <div className="icon">
        <IconSearch />
      </div>
    </CenterWrapper>
  );
});

export default HeaderCenter;
