import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  position: absolute;
  bottom: 50px;
`;

export const Text = styled.div`
  display: flex;

  cursor: pointer;

  font-family: ${({theme}) => theme.fonts.GowunDodum["font-family"]};
  color: ${({theme}) => theme.colors.black};
  font-size: 20px;
  font-weight: 400;
  font-style: normal;
`;