import styled from "styled-components";
export const SectionScrollViewWrapper = styled.div`
  position: relative;
  .control {
    position: absolute;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    text-align: center;
    border-width: 2px;
    border-style: solid;
    border-color: #fff;
    background: #fff;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.14);
    cursor: pointer;
  }
  .left {
    left: 0;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .scroll {
    overflow: hidden;
    .center {
      display: flex;
      transition: transform 250ms ease;
    }
  }

  .right {
    right: 0;
    top: 50%;
    transform: translate(50%, -50%);
  }
`;
