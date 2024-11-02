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

export const Section = styled.div`
  display: flex;  
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;  
  gap: 20px;
`;

export const MainText = styled.div`
  color: ${({theme}) => theme.colors.black};

  font-family: ${({theme}) => theme.fonts.GowunDodum["font-family"]};
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.4;
`;

export const Rowing = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  gap: 4px;
  justify-content: space-around;
`;


export const Buttons = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 15px;
  justify-content: space-between;

  cursor: pointer;
`;

export const Button = styled.button`
  cursor: pointer;

  color: ${({theme}) => theme.colors.black};

  font-family: ${({theme}) => theme.fonts.GowunDodum["font-family"]};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
`;
