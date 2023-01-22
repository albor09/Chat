import styled from "styled-components";

export const BottomBar = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: auto auto;
`;

export const Right = styled.div`
  width: fit-content;
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
  justify-self: end;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Left = styled.div`
  width: fit-content;
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
