import React, { useState } from "react";
import * as S from "./styled";

export const LetterTwo = ({ 
  onPrev,
  onSubmit,
  receiverInfo,
  setReceiverInfo,
  selectedYear,
  setSelectedYear,
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime 
}) => {
  const handleYearChange = (date) => {
    setSelectedYear(date);
    setReceiverInfo((prevInfo) => ({
      ...prevInfo,
      year: date.getFullYear(),
    }));
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setReceiverInfo((prevInfo) => ({
      ...prevInfo,
      monthDay: `${date.getMonth() + 1}-${date.getDate()}`,
    }));
  };

  const handleTimeChange = (date) => {
    setSelectedTime(date);
    setReceiverInfo((prevInfo) => ({
      ...prevInfo,
      time: `${date.getHours()}:${date.getMinutes().toString().padStart(2, "0")}`,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReceiverInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  return (
    <S.Wrapper2>
      <S.Section>
        <S.MainText>수신인 전화번호를 입력해 주세요.</S.MainText>
        <S.Rowing>
          <S.MainText style={{width:"40px"}}>:</S.MainText>
          <input
            type="text"
            name="phoneNumber"
            placeholder="전화번호"
            value={receiverInfo.phoneNumber}
            onChange={handleInputChange}
            style={{background:"inherit", outline: "none", width: "100px", textAlign: "center"}}
          />
          <div style={{width:"40px"}}></div>
        </S.Rowing>
      </S.Section>
      <S.Section>
        <S.MainText>몇 년도에 보낼까요?</S.MainText>
        <S.Rowing>
          <S.MainText style={{width:"80px"}}>:</S.MainText>
          <S.CustomDatePicker
            selected={selectedYear}
            onChange={handleYearChange}
            showYearPicker
            dateFormat="yyyy"
            placeholderText="연도 선택"
          />
          <S.MainText style={{width:"40px"}}>년도</S.MainText>
        </S.Rowing>
      </S.Section>
      <S.Section>
        <S.MainText>몇 월 며칠에 보낼까요?</S.MainText>
        <S.Rowing>
          <S.MainText style={{width:"80px"}}>:</S.MainText>
          <S.CustomDatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="MM/dd"
            placeholderText="월/일 선택"
          />
          <div style={{width:"40px"}}></div>
        </S.Rowing>
      </S.Section>
      <S.Section>
        <S.MainText>몇 시 몇 분에 보낼까요?</S.MainText>
        <S.Rowing>
          <S.MainText style={{width:"80px"}}>:</S.MainText>
          <S.CustomDatePicker
            selected={selectedTime}
            onChange={handleTimeChange}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeFormat="HH:mm"
            dateFormat="HH:mm"
            placeholderText="시간 선택"
          />  
          <div style={{width:"40px"}}></div>
        </S.Rowing>
      </S.Section>

      <S.Buttons>
        <S.Button onClick={onPrev}>이전</S.Button>
        <S.Button onClick={onSubmit}>완료</S.Button>
      </S.Buttons>
    </S.Wrapper2>
  );
};
