import React, { useState } from "react";
import styled from "styled-components";
import Modal from "@components/common/Modal";
import BackgroundImage from "/images/BackgroundImage.svg";

const StyledLetterPaper = styled.div`
  cursor: pointer;
  padding: 20px;
  border-radius: 8px;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* 그림자 추가 */
  margin-bottom: 10px;
`;

const LetterPaper = ({ letter, onClick }) => {
  const { letter: letterContent, sendAt, type } = letter;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sendDate = new Date(sendAt);
  const currentDate = new Date();

  const handleClick = () => {
    if (type === "received" && sendDate > currentDate) {
      onClick("이 편지는 아직 열 수 없습니다."); // 받은 편지 중 미래의 편지는 열 수 없음
    } else {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <StyledLetterPaper onClick={handleClick}>
        {type === "received" && sendDate > currentDate ? "비공개 편지" : letterContent}
      </StyledLetterPaper>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <h2>편지 내용</h2>
          <p>{letterContent}</p>
        </Modal>
      )}
    </>
  );
};

export default LetterPaper;
