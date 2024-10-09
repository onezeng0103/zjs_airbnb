import styled from "styled-components";

export const DetailWrapper = styled.div`
  position: relative;
  display: flex;
  height: 600px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  .left {
    position: relative;
    flex: 1;
    flex-shrink: 0;
    overflow: hidden;
    &:hover {
      img {
        transform: scale(1.1); /*整体放大到原来的一半*/
      }
    }
    .cover {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgba(255, 255, 255, 0.2);
      z-index: 10;
      &:hover {
        background: none;
      }
    }
  }

  .right {
    flex: 1;
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    .item {
      position: relative;
      width: 50%;
      height: 50%;
      border: 1px solid #000;
      box-sizing: border-box;
      overflow: hidden;
      &:hover {
        img {
          transform: scale(1.1);
        }
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .cover {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(255, 255, 255, 0.2);
        z-index: 10;
        &:hover {
          background: none;
        }
      }
    }
  }
  .btn {
    display: flex;
    align-items: center;
    position: absolute;
    z-index: 10;
    bottom: 25px;
    right: 25px;
    padding: 7px 15px;
    background-color: #fff;
    border-radius: 8px;
    box-sizing: border-box;
    color: #000;
    cursor: pointer;
    span {
      margin-left: 8px;
    }
  }
`;
