import styled from "styled-components";

export const ListWrapper = styled.div`
  position: relative;
  display: flex;
  padding: 40px 20px;
  flex-wrap: wrap;
  margin-top: 130px;
  > .cover {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.8);
    z-index: 10;
  }
`;
