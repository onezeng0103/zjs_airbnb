import React, { memo, useState } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { FilterWrapper } from "./style";
import classNames from "classnames";
const filterList = [
  "人数",
  "可免费取消",
  "房源类型",
  "价格",
  "位置区域",
  "内定",
  "卧室/床数",
  "促销优惠",
  "更多筛选条件",
];
const Filter = memo((props) => {
  const [actives, setActives] = useState([]);
  const { fixed } = useSelector((state) => {
    return {
      fixed: state.main.fixed,
    };
  }, shallowEqual);

  console.log(fixed);

  const handleClick = (item) => {
    if (actives.includes(item)) {
      setActives(actives.filter((i) => i !== item));
    } else {
      setActives([...actives, item]);
    }
  };
  return (
    <FilterWrapper className={classNames({ fixed })}>
      {filterList.map((item) => {
        return (
          <div
            key={item}
            className={classNames("item", { active: actives.includes(item) })}
            onClick={(e) => handleClick(item)}
          >
            {item}
          </div>
        );
      })}
    </FilterWrapper>
  );
});
export default Filter;
