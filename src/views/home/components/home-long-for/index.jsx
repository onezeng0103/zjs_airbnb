import { memo } from "react";
import PropTypes from "prop-types";
import SectionHeader from "@/components/sectionHeader";
import SectionLongFor from "@/components/sectionLongFor";
import SectionScrollView from "@/components/sectionScrollView";
import { HomeLongForWrapper } from "./style";
const SectionV2 = memo((props) => {
  const { info } = props;
  return (
    <HomeLongForWrapper>
      <SectionHeader title={info?.title} subtitle={info?.subtitle} />
      <div className="roomList">
        <SectionScrollView>
          {info?.list?.map((item) => {
            return <SectionLongFor key={item.city} item={item} />;
          })}
        </SectionScrollView>
      </div>
    </HomeLongForWrapper>
  );
});

SectionV2.propTypes = {
  info: PropTypes.object,
};

export default SectionV2;
