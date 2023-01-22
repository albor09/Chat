import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1080px;
  height: 100%;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 720px;
  }
`;

export const Container2x = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  height: 100%;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 720px;
  }
`;

export const FaBtn = styled.a`
  font-family: "Montserrat";
  text-decoration: none;
  color: ${(props) => props.theme.secondaryFont};
  display: flex;
  gap: 0.25rem;
  align-items: center;
  font-weight: 500;
`;

export const TextBtn = styled.div`
  cursor: pointer;
  font-size: 22px;
  color: ${(props) => props.theme.secondaryFont};
  font-family: "Montserrat";
  font-weight: 500;
`;

export const DivLine = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.interactive};
`;
