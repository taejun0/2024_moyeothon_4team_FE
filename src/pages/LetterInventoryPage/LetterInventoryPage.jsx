// 목업 데이터
const mockLetters = [
  // 받은 편지 (과거)
  {
    type: "received",
    letter: "어릴 적 함께 놀았던 그 시절이 그립구나.",
    sendAt: "2022-06-15T14:00:00Z", // 과거의 날짜
  },
  {
    type: "received",
    letter: "지난 생일 파티, 정말 고마웠어!",
    sendAt: "2023-02-10T10:30:00Z", // 과거의 날짜
  },
  {
    type: "received",
    letter: "너와 나눴던 추억을 떠올리며 이 편지를 써.",
    sendAt: "2023-09-25T18:45:00Z", // 과거의 날짜
  },

  // 받은 편지 (현재)
  {
    type: "received",
    letter: "지금도 네가 웃는 얼굴을 떠올리면 힘이 나.",
    sendAt: new Date().toISOString(), // 현재 시점
  },

  // 받은 편지 (미래)
  {
    type: "received",
    letter: "앞으로의 너의 미래가 항상 빛나길 바래.",
    sendAt: "2024-12-01T10:30:00Z", // 미래의 날짜
  },
  {
    type: "received",
    letter: "새해에 꼭 만나자! 내년에 좋은 일만 있길.",
    sendAt: "2025-01-01T00:00:00Z", // 미래의 날짜
  },

  // 보낸 편지 (과거)
  {
    type: "sent",
    letter: "그동안 수고 많았어. 항상 응원해!",
    sendAt: "2023-05-20T08:00:00Z", // 과거의 날짜
  },
  {
    type: "sent",
    letter: "네가 잘 해낼 줄 알고 있어. 화이팅!",
    sendAt: "2023-11-02T15:30:00Z", // 과거의 날짜
  },

  // 보낸 편지 (현재)
  {
    type: "sent",
    letter: "오늘도 좋은 하루 되길 바라!",
    sendAt: new Date().toISOString(), // 현재 시점
  },

  // 보낸 편지 (미래)
  {
    type: "sent",
    letter: "미리 축하해! 생일에 이 편지를 보겠지?",
    sendAt: "2024-06-15T09:00:00Z", // 미래의 날짜
  },
  {
    type: "sent",
    letter: "내가 준비한 이벤트, 기대해도 좋아!",
    sendAt: "2024-11-25T20:00:00Z", // 미래의 날짜
  },
];


// 수정된 LetterInventoryPage.js
import * as S from "./styled";
import { useState } from "react";
import LetterPaper from "@components/LetterPaper";
import { toast } from "react-toastify";
import ToastOne from "@components/common/Toasts/ToastOne";

export const LetterInventoryPage = () => {
  const [type, setType] = useState("received");
  const [letters, setLetters] = useState(mockLetters);

  // 현재 시간 기준으로 편지를 필터링 (보낸 편지는 항상 표시, 받은 편지는 시간에 상관없이 표시)
  const filteredLetters = letters.filter((letter) => letter.type === type);

  const handleOptionClick = (selectedType) => {
    setType(selectedType);
  };

  const showToast = (message) => {
    toast.info(message, { autoClose: 2000 });
  };

  return (
    <S.Wrapper>
      <S.MiniHeader>
        <S.HeaderOption onClick={() => handleOptionClick("received")}>받은 편지</S.HeaderOption>
        <S.HeaderOption onClick={() => handleOptionClick("sent")}>보낸 편지</S.HeaderOption>
      </S.MiniHeader>
      <div>
        {filteredLetters.length === 0 ? (
          <div>아직 편지함에 편지가 없습니다!</div>
        ) : (
          filteredLetters.map((letter, index) => (
            <LetterPaper key={index} letter={letter} onClick={showToast} />
          ))
        )}
      </div>
      <ToastOne />
    </S.Wrapper>
  );
};

export default LetterInventoryPage;
