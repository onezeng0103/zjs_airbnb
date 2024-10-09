import styled from "styled-components";

export const RoomItemWrapper = styled.div`
  width: ${(props) => props.width};
  padding: 8px;
  box-sizing: border-box;
  flex-shrink: 0;
  cursor: pointer;
  .swiper {
    position: relative;
    cursor: pointer;
    &:hover {
      .control {
        display: flex;
      }
    }
    .control {
      position: absolute;
      z-index: 10;
      left: 0;
      right: 0;
      top: 0;
      display: none;
      align-items: center;
      justify-content: space-between;
      bottom: 0;
      color: #fff;
      .btn {
        height: 100%;
        width: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .left {
        left: 0;
        background: linear-gradient(
          to right,
          transparent 0%,
          rgba(0, 0, 0, 0.25) 100%
        );
      }
      .right {
        background: linear-gradient(
          to left,
          transparent 0%,
          rgba(0, 0, 0, 0.25) 100%
        );
        right: 0;
      }
    }
  }
  .cover {
    position: relative;
    box-sizing: border-box;
    padding: 66.66% 8px 0;
    border-radius: 3px;
    overflow: hidden;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .verify_info {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: ${(props) => props.text_color};
  }
  .name {
    font-size: 16px;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .price {
    margin: 8px 0;
  }
  .bottom {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: #484848;
    .extra {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;
