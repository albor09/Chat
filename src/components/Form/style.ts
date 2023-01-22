import styled from "styled-components";

export const Form = styled.div`
  width: 300px;
  min-height: 300px;
  background-color: ${(props) => props.theme.primary};
  border-radius: 3em;
  padding: 1em;
  box-sizing: border-box;

  & h2 {
    font-family: "Montserrat";
    text-align: center;
    margin-bottom: 3em;
  }

  & input {
    margin-bottom: 10px;
  }

  & a {
    color: rgba(255, 255, 255, 0.8);
  }
`;

export const Hint = styled.div`
  color: rgba(255, 255, 255, 0.4);
  font-size: 14px;
  text-align: center;
  transition: 500ms;
  margin-top: 20px;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }
`;
