import styled from "styled-components";

export const SectionLongForWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 20%;
  .inner {
    padding: 8px;
    .content {
      border-radius: 3px;
      overflow: hidden;
      .cover {
        width: 100%;
      }
      .overlay {
        position: absolute;
        left: 8px;
        right: 8px;
        bottom: 0;
        height: 60%;
        background-image: linear-gradient(
          -180deg,
          rgba(0, 0, 0, 0) 3%,
          rgba(0, 0, 0) 100%
        );
      }
      .info {
        position: absolute;
        left: 8px;
        right: 8px;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 24px 32px;
        color: #fff;
        .city {
          font-size: 18px;
          font-weight: 600;
          text-align: center;
        }
        .price {
          font-size: 14px;
          margin-top: 5px;
          text-align: center;
        }
      }
    }
  }
`;
