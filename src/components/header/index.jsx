import { memo } from "react";
import { useSelector } from "react-redux";
import HeaderLeft from "./components/left/index.jsx";
import HeaderCenter from "./components/center/index.jsx";
import HeaderRight from "./components/right/index.jsx";
import { HeaderWrapper } from "./style.js";
import classNames from "classnames";
const Header = memo(() => {
  const { fixed } = useSelector((state) => {
    console.log(state.main);
    return {
      fixed: state.main.fixed,
    };
  });
  console.log(fixed);
  return (
    <HeaderWrapper className={classNames({ fixed })}>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </HeaderWrapper>
  );
});

export default Header;
