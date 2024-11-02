import React from "react";
import * as S from "./styled";
import { useNavigate } from "react-router-dom";
import { useSignup } from "@hooks/useSignup";

export const SignupPage = () => {
  const { signupData, handleChange, handleSubmit } = useSignup();
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.Section>
        <S.MainText>사용할 별명을 입력해 주세요.</S.MainText>
        <S.Rowing>
          <input
            type="text"
            name="nickname"
            value={signupData.nickname}
            onChange={handleChange}
            placeholder="닉네임"
            style={{ background: "inherit", outline: "none" }}
          />
        </S.Rowing>
      </S.Section>
      <S.Section>
        <S.MainText>사용할 비밀번호를 입력해 주세요.</S.MainText>
        <S.Rowing>
          <input
            type="password"
            name="password"
            value={signupData.password}
            onChange={handleChange}
            placeholder="비밀번호"
            style={{ background: "inherit", outline: "none" }}
          />
        </S.Rowing>
      </S.Section>
      <S.Section>
        <S.MainText>비밀번호를 다시 입력해 주세요.</S.MainText>
        <S.Rowing>
          <input
            type="password"
            name="confirmPassword"
            value={signupData.confirmPassword}
            onChange={handleChange}
            placeholder="비밀번호 확인"
            style={{ background: "inherit", outline: "none" }}
          />
        </S.Rowing>
      </S.Section>
      <S.Section>
        <S.MainText>핸드폰 번호 (선택사항)</S.MainText>
        <S.Rowing>
          <input
            type="text"
            name="phone"
            value={signupData.phone}
            onChange={handleChange}
            placeholder="핸드폰 번호"
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

export default SignupPage;
