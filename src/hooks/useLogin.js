import { useState } from "react";
import { loginService } from "@services/loginService";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [loginData, setLoginData] = useState({
    phone: "",
    nickname: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await loginService(loginData);
      console.log("Login successful:", response);
      navigate("/homepage");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return {
    loginData,
    handleChange,
    handleSubmit,
  };
};
