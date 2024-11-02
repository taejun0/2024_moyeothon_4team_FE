import React from "react";
import * as S from "./styled";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigation = useNavigate();
  
  return (
    <S.Wrapper>
      <S.Text onClick={() => navigation("/homepage")}>홈</S.Text>
      <S.Text onClick={() => navigation("/letter")}>편지 작성하기</S.Text>
      <S.Text onClick={() => navigation("/inventory")}>편지 보관함</S.Text>
    </S.Wrapper>
  );
};