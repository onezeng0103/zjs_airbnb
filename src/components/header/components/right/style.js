import styled from "styled-components";
export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 24px;
  color: #484848;
  font-weight: 600;
  .text {
    height: 18px;
    line-height: 18px;
    padding: 12px 15px;
    border-radius: 22px;
    cursor: pointer;
    box-sizing: content-box;
    &:hover {
      background-color: #f5f5f5;
    }
  }
  .profile {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 77px;
    height: 42px;
    box-sizing: border-box;
    border-radius: 25px;
    border: 1px solid #ccc;
    background-color: #fff;
    cursor: pointer;
    ${(props) => props.theme.mixin.boxShadow}
    .more {
      position: absolute;
      top: 54px;
      right: 0;
      width: 240px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
      color: #666;
      text-align: left;
      .top {
        border-bottom: 1px solid #eee;
        padding: 10px 0;
      }
      .bottom {
        padding: 10px 0;
      }
      .btn {
        height: 40px;
        line-height: 40px;
        cursor: pointer;
        padding: 0 16px;
        &:hover {
          background-color: #f5f5f5;
        }
      }
    }
  }
`;
