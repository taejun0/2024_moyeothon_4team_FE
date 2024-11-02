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
  const { letter: letterContent, sendAt } = letter;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sendDate = new Date(sendAt);
  const currentDate = new Date();

  const handleClick = () => {
    if (sendDate > currentDate) {
      onClick("이 편지는 아직 열 수 없습니다.");
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
        {sendDate > currentDate ? "비공개 편지" : letterContent}
      </StyledLetterPaper>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <h2>편지 내용</h2>
          <p>{letterContent}</p>
          <button onClick={closeModal}>닫기</button>
        </Modal>
      )}
    </>
  );
};

export default LetterPaper;
