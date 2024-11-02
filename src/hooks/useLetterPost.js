import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { letterService } from "@services/letterService";

export const useLetterPost = () => {
  const [letterContent, setLetterContent] = useState("");
  const [receiverInfo, setReceiverInfo] = useState({
    year: "",
    monthDay: "",
    time: "",
    phoneNumber: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (
      !letterContent ||
      !receiverInfo.year ||
      !receiverInfo.monthDay ||
      !receiverInfo.time ||
      !receiverInfo.phoneNumber
    ) {
      toast.error("모든 필수 정보를 입력해 주세요!");
      return;
    }

    const sendAt = `${receiverInfo.year}-${receiverInfo.monthDay}T${receiverInfo.time}`;
    const letterData = {
      letter: letterContent,
      receivePhone: receiverInfo.phoneNumber,
      sendAt: sendAt,
    };

    try {
      const response = await letterService(letterData);
      toast.success("편지가 성공적으로 제출되었습니다!");
      navigate("/inventory");
    } catch (error) {
      navigate("/inventory");
      toast.error("편지 제출에 실패했습니다. 다시 시도해 주세요.");
      console.error("Letter submission error:", error);
    }
  };

  return {
    letterContent,
    setLetterContent,
    receiverInfo,
    setReceiverInfo,
    handleSubmit,
  };
};
