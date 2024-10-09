import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { TabNamesWrapper } from "./style";
import SectionScrollView from "@/components/sectionScrollView";
import classNames from "classnames";
const TabNames = memo((props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleClick = (name, index) => {
    props.handleIndex(index);
    setCurrentIndex(index);
  };
  return (
    <TabNamesWrapper>
      <SectionScrollView>
        {props.names.map((item, index) => {
          return (
            <div
              className={classNames("item", { active: index === currentIndex })}
              key={item}
              onClick={(e) => {
                handleClick(item, index);
              }}
            >
              {item}
            </div>
          );
        })}
      </SectionScrollView>
    </TabNamesWrapper>
  );
});

TabNames.propTypes = {
  names: PropTypes.array,
};

export default TabNames;
