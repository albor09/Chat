import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 4px solid grey;
  border-right: 4px solid ${(props) => props.theme.secondaryFont};
  border-bottom: 4px solid grey;
  border-left: 4px solid ${(props) => props.theme.secondaryFont};
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  color: blue;
`;

export default Spinner;
