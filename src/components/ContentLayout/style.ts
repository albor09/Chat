import styled from "styled-components";

export const Content = styled.div`
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 0;
  }
`;
