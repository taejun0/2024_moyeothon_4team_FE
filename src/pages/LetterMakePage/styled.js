import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const MakeLetter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  
  font-family: ${({theme}) => theme.fonts.GowunDodum["font-family"]};
  color: ${({theme}) => theme.colors.black};
  font-size: 30px;
  font-weight: 400;
  font-style: normal;
`;