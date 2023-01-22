import styled from "styled-components";

export const TextInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 16px;
  padding: 0.5em;
  background-color: transparent;
  transition: 500ms;
  color: white;
  font-size: 14px;

  &:hover {
    border: 2px solid rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    border: 2px solid rgba(255, 255, 255, 0.6);
  }
`;

export const InvalidTextInput = styled(TextInput)`
  border-color: rgba(255, 0, 0, 0.2) !important;
`;
