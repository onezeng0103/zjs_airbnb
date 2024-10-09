import { memo } from "react";
import PropTypes from "prop-types";
import SectionHeader from "@/components/sectionHeader";
import SectionScrollView from "@/components/sectionScrollView";
import SectionFooter from "@/components/sectionFooter";
import RoomItem from "@/components/roomItem";
import { SectionV3Wrapper } from "./style";
const SectionV2 = memo((props) => {
  const { info = {}, width = "20%" } = props;
  return (
    <SectionV3Wrapper>
      <SectionHeader title={info?.title} subtitle={info?.subtitle} />
      <div className="room-list">
        <SectionScrollView>
          {info.list.map((item) => {
            return (
              <RoomItem
                item={item}
                width={width}
                key={item.id}
                color={"#914669"}
              />
            );
          })}
        </SectionScrollView>
      </div>
      <SectionFooter name={info.type} />
    </SectionV3Wrapper>
  );
});

SectionV2.propTypes = {
  info: PropTypes.object,
};

export default SectionV2;
