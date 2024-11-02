import styled from "styled-components";
import backgroundImage from "/images/BackgroundImage.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



export const Wrapper = styled.div`
  position: relative;
  width: 350px;
  height: 540px;
  background: url(${backgroundImage}) no-repeat center center fixed;
	background-size: cover;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.25);
`;

export const Wrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  width: 350px;
  height: 540px;
  background: url(${backgroundImage}) no-repeat center center fixed;
	background-size: cover;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.25);
`;

export const Textinput = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 30px;
  outline: none;
  resize: none;

  color: ${({theme}) => theme.colors.black};

  font-family: ${({theme}) => theme.fonts.GowunDodum["font-family"]};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.4;
`;

export const Button = styled.button`
  cursor: pointer;

  color: ${({theme}) => theme.colors.black};

  font-family: ${({theme}) => theme.fonts.GowunDodum["font-family"]};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
`;

export const Section = styled.div`
  display: flex;  
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;  
  gap: 20px;
`;

export const Rowing = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  gap: 4px;
  justify-content: space-around;
`;

export const MainText = styled.div`
  color: ${({theme}) => theme.colors.black};

  font-family: ${({theme}) => theme.fonts.GowunDodum["font-family"]};
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.4;
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

export const CustomDatePicker = styled(DatePicker)`
  color: ${({theme}) => theme.colors.black};

  font-family: ${({theme}) => theme.fonts.GowunDodum["font-family"]};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;

  background: inherit;
  outline: none;
  display: flex;
  width: 80px;

  transform: translateY(5px);
`;