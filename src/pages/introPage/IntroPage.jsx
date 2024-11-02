import * as S from "./styled";
import { useNavigate } from "react-router-dom";

export const IntroPage = () => {
  const navigate = useNavigate();
  return (
    <S.Wrapper>
      <S.MainText>내일의 편지</S.MainText>
      <S.Login onClick={() => navigate("/login")}>로그인</S.Login>
      <S.Login onClick={() => navigate("/signup")}>회원가입</S.Login>
    </S.Wrapper>
  )
}

export default IntroPage;