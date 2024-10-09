import styled from "styled-components";
export const CenterWrapper = styled.div`
  width: 300px;
  height: 48px;
  border: 1px solid #ddd;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  ${(props) => props.theme.mixin.boxShadow}
  .text {
    padding: 0 16px;
    color: #222;
    font-weight: 600;
  }
  .icon {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.color.primaryColor};
    border-radius: 50%;
    margin-right: 8px;
    color: #fff;
  }
`;
