import styled from "styled-components";

export const ChatWrapper = styled.div`
  height: 100%;
  border-radius: 32px;
  background-color: ${(props) => props.theme.primary};
  border: 3px solid ${(props) => props.theme.interactive};
  display: grid;
  grid-template-rows: 80px auto;
  overflow: hidden;

  @media (max-width: 768px) {
    border: none;
    border-radius: 0;
  }
`;

export const ChatGrid = styled.div`
  display: grid;
  height: 100%;
  transition: 500ms;
`;

export const ChatTop = styled.div`
  width: 100%;
  border-bottom: 3px solid ${(props) => props.theme.interactive};
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ChatTopLeft = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
`;

export const ChatTopRight = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
`;

export const ChatViewTop = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.interactive};
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  padding: 0.5rem;
  align-items: center;
`;

export const ChatTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const ChatTitleName = styled.div`
  font-family: "Montserrat";
  font-size: 18px;
  font-weight: 500;
  text-align: center;
`;

export const Chat = styled.div`
  display: grid;
  grid-template-rows: 50px auto;
`;
