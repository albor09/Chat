import styled from "styled-components";

export const ChatList = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${(props) => props.theme.interactive};
  padding: 3%;
`;
