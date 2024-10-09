import PropTypes from "prop-types";
import React, { memo } from "react";

import { SectionLongForWrapper } from "./style";
const SectionLongFor = memo((props) => {
  const { item } = props;
  return (
    <SectionLongForWrapper>
      <div className="inner">
        <div className="content">
          <img className="cover" src={item.picture_url} alt="" />
          <div className="overlay"></div>
          <div className="info">
            <div className="city">{item.city}</div>
            <div className="price">均价 {item.price}</div>
          </div>
        </div>
      </div>
    </SectionLongForWrapper>
  );
});

SectionLongFor.propTypes = {
  item: PropTypes.object,
};

export default SectionLongFor;
