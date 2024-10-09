import styled from "styled-components";
export const HeaderWrapper = styled.div`
  height: 80px;
  background-color: #fff;
  border: 1px solid #eee;
  display: flex;
  text-align: center;
  align-items: center;
  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
  }
`;
