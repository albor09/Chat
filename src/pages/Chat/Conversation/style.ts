import styled from "styled-components";

export const ConversationWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 80px;
`;

export const ConversationMessages = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5em;
  gap: 0.5rem;
  overflow-y: auto;
  max-height: calc(100vh - 340px);

  &::-webkit-scrollbar-thumb {
    border: 5px solid transparent;
    border-radius: 100px;
    background-color: #3b3b3b;
  }

  &::-webkit-scrollbar {
    width: 4px;
  }
`;

export const ConversationBottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
`;

export const Input = styled.input`
  color: grey;
  resize: none;
  width: 100%;
  border-radius: 16px;
  border: 1px solid ${(props) => props.theme.interactive};
  background-color: transparent;
  outline: none;
  color: white;
  padding: 1rem;
`;

export const ConversationLine = styled.div`
  display: flex;
`;

export const Message = styled.div`
  border-radius: 16px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  max-width: 80%;
`;

export const MyMessage = styled(Message)`
  background-color: ${(props) => props.theme.myMsg};
`;

export const PeerMessage = styled(Message)`
  background-color: ${(props) => props.theme.peerMsg};
`;

export const MessageDate = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme.interactive};
  align-self: end;
`;

export const MsgText = styled.div`
  word-break: break-all;
  font-family: "Roboto Mono";
  color: white;
  font-size: 12px;
`;
