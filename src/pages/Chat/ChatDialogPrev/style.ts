import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 3%;
  border-radius: 16px;
  background-color: #262626;
  display: grid;
  grid-template-columns: auto 1fr;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  overflow: hidden;
  cursor: pointer;
`;

export const WrapperSelected = styled(Wrapper)`
  background-color: #363636;
`;

export const CircleAvatar = styled.div`
  background-color: ${(props) => props.theme.interactive};
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-size: cover;
  background-position: top center;
`;

export const DialogInfo = styled.div`
  min-width: 10%;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const DialogInfoTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DialogTitle = styled.div`
  font-size: 14px;
  font-family: "Montserrat";
  overflow: hidden;
`;

export const DialogTime = styled.div`
  align-self: center;
  font-size: 10px;
  font-family: "Roboto Mono";
  overflow: hidden;
  color: gray;
`;

export const DialogLastMsg = styled.div`
  font-size: 12px;
  font-family: "Roboto Mono";
  overflow: hidden;
  color: gray;
`;
