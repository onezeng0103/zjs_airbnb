import React, { memo, useRef, useEffect, useState } from "react";
import { SectionScrollViewWrapper } from "./style";
import IconArrowLeft from "@/assets/svg/iconArrowLeft";
import IconArrowRight from "@/assets/svg/iconArrowRight";
const SectionScrollView = memo((props) => {
  const [isRight, setIsRight] = useState(false);
  const [isLeft, setIsLeft] = useState(false);
  const [posIndex, setPosIndex] = useState(0);
  const scrollContentRef = useRef(null);
  const totalDistanceRef = useRef();
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth; // 一共可以滚动的宽度
    const clientWidth = scrollContentRef.current.clientWidth; // 本身占据的宽度
    const totalDistance = scrollWidth - clientWidth;
    totalDistanceRef.current = totalDistance;
    setIsRight(totalDistance > 0);
  }, [props.children]);
  const handleClick = (isRight) => {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1;
    const newEl = scrollContentRef.current.children[newIndex];
    const newOffsetLeft = newEl.offsetLeft;
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`;
    setPosIndex(newIndex);

    // 是否继续显示右侧的按钮
    setIsRight(totalDistanceRef.current > newOffsetLeft);
    setIsLeft(newOffsetLeft > 0);
  };
  return (
    <SectionScrollViewWrapper>
      {isLeft && (
        <div className="control left" onClick={() => handleClick(false)}>
          <IconArrowLeft />
        </div>
      )}
      <div className="scroll">
        <div className="center" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>

      {isRight && (
        <div className="control right" onClick={() => handleClick(true)}>
          <IconArrowRight />
        </div>
      )}
    </SectionScrollViewWrapper>
  );
});
export default SectionScrollView;
