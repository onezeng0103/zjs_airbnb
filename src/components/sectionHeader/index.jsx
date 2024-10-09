import React, { memo } from "react";
import PropTypes from "prop-types";

import { SectionHeaderWrapper } from "./style";
const SectionHeader = memo((props) => {
  return (
    <SectionHeaderWrapper>
      <div className="title">{props.title}</div>
      <div className="subtitle">{props.subtitle}</div>
    </SectionHeaderWrapper>
  );
});
SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default SectionHeader;
