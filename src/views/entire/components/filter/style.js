import styled from "styled-components";

export const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 16px;
  border: 1px solid #dce0e0;
  margin-top: -1px;
  height: 48px;
  box-sizing: border-box;
  background-color: #fff;
  &.fixed {
    position: fixed;
    top: 82px;
    left: 0;
    right: 0;
    z-index: 9999999;
  }
  .item {
    margin: 0 4px 0 8px;
    padding: 6px 12px;
    border: 1px solid #dce0e0;
    border-radius: 4px;
    color: #484848;
    cursor: pointer;
    &.active {
      background: #008489;
      border: 1px solid #008489;
      color: #ffffff;
    }
  }
`;
