// LoginPage.jsx
import React from "react";
import * as S from "./styled";
import { useNavigate } from "react-router-dom";
import { useLogin } from "@hooks/useLogin";

export const LoginPage = () => {
  const { loginData, handleChange, handleSubmit } = useLogin();
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.Section>
        <S.MainText>본인의 별명을 입력해 주세요.</S.MainText>
        <S.Rowing>
          <input
            type="text"
            name="nickname"
            value={loginData.nickname}
            onChange={handleChange}
            placeholder="닉네임"
            style={{ background: "inherit", outline: "none" }}
          />
        </S.Rowing>
      </S.Section>
      <S.Section>
        <S.MainText>본인의 비밀번호를 입력해 주세요.</S.MainText>
        <S.Rowing>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            placeholder="비밀번호"
            style={{ background: "inherit", outline: "none" }}
          />
        </S.Rowing>
      </S.Section>
      <S.Buttons>
        <S.Button onClick={() => navigate(-1)}>돌아가기</S.Button>
        <S.Button onClick={handleSubmit}>완료</S.Button>
      </S.Buttons>
    </S.Wrapper>
  );
};

export default LoginPage;
