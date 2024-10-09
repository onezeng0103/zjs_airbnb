import styled from "styled-components";

export const SectionRoomsWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: start;
  cursor: pointer;
  font-size: 17px;
  font-weight: 700;
  color: ${(props) => props.color};
  &:hover {
    text-decoration: underline;
  }
  .text {
    margin-right: 6px;
  }
`;
