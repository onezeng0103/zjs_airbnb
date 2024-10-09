import PropTypes from "prop-types";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { SectionRoomsWrapper } from "./style.js";
import IconMoreArrow from "@/assets/svg/iconMoreArrow.jsx";
const SectionFooter = memo((props) => {
  const { name } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/entire`);
  };
  return (
    <SectionRoomsWrapper color={name ? "#00848A" : "#000"}>
      <div className="text" onClick={handleClick}>
        {name ? `显示更多${name}房源` : "显示全部"}
      </div>
      <div className="icon">
        <IconMoreArrow />
      </div>
    </SectionRoomsWrapper>
  );
});

SectionFooter.propTypes = {
  name: PropTypes.string,
};

export default SectionFooter;
