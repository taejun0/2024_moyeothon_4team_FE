import styled from "styled-components";


export const Wrapper = styled.div`
  display: flex;
  position: relative;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 15px;
`;


export const MainText = styled.div`
  color: ${({theme}) => theme.colors.black};

  font-family: ${({theme}) => theme.fonts.GowunDodum["font-family"]};
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 3;
`;

export const SubText = styled.div`
  color: ${({theme}) => theme.colors.black};

  font-family: ${({theme}) => theme.fonts.GowunDodum["font-family"]};
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.4;
`;