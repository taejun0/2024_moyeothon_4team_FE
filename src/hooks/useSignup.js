import { useState } from "react";
import { signupService } from "@services/signupService";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
  const [signupData, setSignupData] = useState({
    nickname: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (signupData.password !== signupData.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    const { nickname, password, phone } = signupData;
    const signupPayload = { nickname, password, phone };

    try {
      const response = await signupService(signupPayload);
      console.log("회원 가입 성공:", response);
      navigate("/homepage");
    } catch (error) {
      console.error("회원 가입 에러:", error);
      navigate("/homepage");
    }
  };

  return {
    signupData,
    handleChange,
    handleSubmit,
  };
};
