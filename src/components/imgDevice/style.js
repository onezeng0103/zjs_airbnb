import styled from "styled-components";

export const ImgDeviceWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
  color: #fff;
  z-index: 99;
  .top {
    margin: 40px 40px 20px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .close {
      display: flex;
      align-items: center;
      color: #fff;
      cursor: pointer;
      span {
        margin-left: 10px;
      }
    }
    .share {
      display: flex;
      .item {
        width: 32px;
        height: 32px;
      }
    }
  }
  .main {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    color: #000;
    width: 100vw;
    width: calc(100% - 192px);
    height: calc(100% - 112px);
    img {
      height: 100%;
      object-fit: scale-down;
    }
  }
  .left {
    position: absolute;
    top: 50%;
    left: 50px;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    cursor: pointer;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #fff;
    border-radius: 50%;
  }
  .right {
    position: absolute;
    top: 50%;
    right: 50px;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    cursor: pointer;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #fff;
    border-radius: 50%;
  }
`;
