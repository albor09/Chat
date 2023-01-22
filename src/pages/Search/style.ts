import styled from "styled-components";

export const SearchBox = styled.div`
  width: 500px;
  background-color: ${(props) => props.theme.primary};
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 16px;
  height: 100%;
  box-sizing: border-box;
  gap: 2rem;
`;

export const SearchFWrapper = styled.div`
  padding: 2rem;
`;

export const Users = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
`;

export const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;
