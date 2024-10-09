import styled from "styled-components";

export const EntirePaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
  .MuiPaginationItem-root {
    margin: 0 8px;
    &.Mui-selected {
      color: #fff;
      background-color: #484848;
    }
  }
  .text {
    margin-top: 18px;
    color: #222;
  }
`;
