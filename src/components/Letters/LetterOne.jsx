import React from "react";
import * as S from "./styled";

export const LetterOne = ({ onNext, letterContent, setLetterContent }) => {
  const handleChange = (e) => setLetterContent(e.target.value);

  return (
    <S.Wrapper>
      <S.Textinput 
        placeholder="편지 내용을 입력하세요" 
        value={letterContent} 
        onChange={handleChange} 
      />
      <S.Buttons>
        <div></div>
        <S.Button onClick={onNext}>다음</S.Button>
      </S.Buttons>
    </S.Wrapper>
  );
};
