import React, { useState } from "react";
import * as S from "./styled";
import { LetterOne } from "@components/Letters/LetterOne";
import { LetterTwo } from "@components/Letters/LetterTwo";
import ToastOne from "@components/common/Toasts/ToastOne";
import { useLetterPost } from "@hooks/useLetterPost";

export const LetterMakePage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const {
    letterContent,
    setLetterContent,
    receiverInfo,
    setReceiverInfo,
    handleSubmit,
  } = useLetterPost();

  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleNextStep = () => setCurrentStep((prev) => prev + 1);
  const handlePrevStep = () => setCurrentStep((prev) => prev - 1);

  return (
    <S.Wrapper>
      <S.MakeLetter >편지 작성하기</S.MakeLetter>

      {currentStep === 1 && (
        <LetterOne
          onNext={handleNextStep}
          letterContent={letterContent}
          setLetterContent={setLetterContent}
        />
      )}

      {currentStep === 2 && (
        <LetterTwo
          onPrev={handlePrevStep}
          onSubmit={handleSubmit}
          receiverInfo={receiverInfo}
          setReceiverInfo={setReceiverInfo}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
        />
      )}
      <ToastOne />
    </S.Wrapper>
  );
};

export default LetterMakePage;
