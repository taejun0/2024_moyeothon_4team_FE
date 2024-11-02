import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MiniHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const HeaderOption = styled.div`
  display: flex;
  cursor: pointer;
  
  color: ${({theme}) => theme.colors.black};

  font-family: ${({theme}) => theme.fonts.GowunDodum["font-family"]};
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
`;