import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const MainText = styled.div`
  display: flex;

  font-family: ${({theme}) => theme.fonts.GowunDodum["font-family"]};
  color: ${({theme}) => theme.colors.black};
  font-size: 40px;
  font-weight: 400;
  font-style: normal;
`;

export const Login = styled.div`
  display: flex;

  font-family: ${({theme}) => theme.fonts.GowunDodum["font-family"]};
  color: ${({theme}) => theme.colors.black};
  font-size: 30px;
  font-weight: 400;
  font-style: normal
`;