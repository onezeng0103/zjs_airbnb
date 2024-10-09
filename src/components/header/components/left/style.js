import styled from "styled-components";
export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  .icon {
    display: flex;
    cursor: pointer;
    margin-left: 24px;
    color: ${(props) => props.theme.color.primaryColor};
  }
`;
