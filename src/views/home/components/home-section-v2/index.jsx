import { memo, useState, useCallback } from "react";
import PropTypes from "prop-types";
import SectionHeader from "@/components/sectionHeader";
import SectionRooms from "@/components/sectionRooms";
import TabNames from "@/components/sectionTabNames";
import SectionFooter from "@/components/sectionFooter";
import { SectionV1Wrapper } from "./style";
const SectionV2 = memo((props) => {
  const { info = {}, width = "25%" } = props;
  const names = info.dest_address?.map((item) => item.name);
  const [name, setName] = useState(names[0]);
  const handleIndex = useCallback(
    (index) => {
      setName(names[index]);
    },
    [names]
  );
  const currentName = info.dest_list[name];
  return (
    <SectionV1Wrapper>
      <SectionHeader title={info?.title} subtitle={info?.subtitle} />
      <TabNames names={names} handleIndex={handleIndex} />
      <SectionRooms roomList={currentName} width={width} />
      <SectionFooter name={name} />
    </SectionV1Wrapper>
  );
});

SectionV2.propTypes = {
  info: PropTypes.object,
};

export default SectionV2;
