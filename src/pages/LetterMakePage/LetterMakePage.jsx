import React, { useState } from "react";
import * as S from "./styled";
import { useNavigate } from "react-router-dom";
import { LetterOne } from "@components/Letters/LetterOne";
import { LetterTwo } from "@components/Letters/LetterTwo";
import ToastOne from "@components/common/Toasts/ToastOne";
import { toast } from "react-toastify";

export const LetterMakePage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [letterContent, setLetterContent] = useState(""); // 편지 내용 상태
  const [receiverInfo, setReceiverInfo] = useState({
    year: "",
    monthDay: "",
    time: "",
    phoneNumber: "",
  });

  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const navigate = useNavigate();

  const handleNextStep = () => setCurrentStep((prev) => prev + 1);
  const handlePrevStep = () => setCurrentStep((prev) => prev - 1);

  const handleSubmit = () => {
    if (!letterContent || !receiverInfo.year || !receiverInfo.monthDay || !receiverInfo.time || !receiverInfo.phoneNumber) {
      toast.error("모든 필수 정보를 입력해 주세요!"); // 토스트 알림 표시
      return;
    }

    const combinedDateTime = `${receiverInfo.year}-${receiverInfo.monthDay}T${receiverInfo.time}`;
    console.log("Submitting letter data:", letterContent);
    console.log("Receiver Info:", {
      ...receiverInfo,
      dateTime: combinedDateTime,
    });
    navigate("/inventory");
  };

  return (
    <S.Wrapper>
      <S.MakeLetter onClick={() => setCurrentStep(1)}>편지 작성하기</S.MakeLetter>

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
