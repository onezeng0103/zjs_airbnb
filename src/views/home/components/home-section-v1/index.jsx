import { memo } from "react";
import PropTypes from "prop-types";
import SectionHeader from "@/components/sectionHeader";
import SectionRooms from "@/components/sectionRooms";
import SectionFooter from "@/components/sectionFooter";
import { SectionV1Wrapper } from "./style.js";
const SectionV1 = memo((props) => {
  const { info = {}, width = "25%" } = props;
  return (
    <SectionV1Wrapper>
      <SectionHeader title={info?.title} subtitle={info?.subtitle} />
      <SectionRooms roomList={info?.list} width={width} />
      <SectionFooter />
    </SectionV1Wrapper>
  );
});

SectionV1.propTypes = {
  info: PropTypes.object,
};

export default SectionV1;
