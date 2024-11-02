import * as S from "./styled";
import { useState } from "react";
import { usegiveLetters } from "@hooks/usegiveLetters";
import LetterPaper from "@components/LetterPaper";
import { toast } from "react-toastify";
import ToastOne from "@components/common/Toasts/ToastOne";

export const LetterInventoryPage = () => {
  const [type, setType] = useState("received");
  const { letters, loading, error } = usegiveLetters(type);

  // 데이터 검증: letters가 배열이 아닐 경우 빈 배열로 설정
  const validLetters = Array.isArray(letters) ? letters : [];

  const handleOptionClick = (selectedType) => {
    setType(selectedType);
  };

  const showToast = (message) => {
    toast.info(message, { autoClose: 2000 });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message || "An unexpected error occurred"}</div>;

  return (
    <S.Wrapper>
      <S.MiniHeader>
        <S.HeaderOption onClick={() => handleOptionClick("received")}>받은 편지</S.HeaderOption>
        <S.HeaderOption onClick={() => handleOptionClick("sent")}>보낸 편지</S.HeaderOption>
      </S.MiniHeader>
      <div>
        {validLetters.length === 0 ? (
          <div>아직 편지함에 편지가 없습니다!</div>
        ) : (
          validLetters.map((letter, index) => (
            <LetterPaper key={index} letter={letter} onClick={showToast} />
          ))
        )}
      </div>
      <ToastOne />
    </S.Wrapper>
  );
};

export default LetterInventoryPage;
