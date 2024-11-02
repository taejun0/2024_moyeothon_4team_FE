import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastOne = () => {
  return (
    <ToastContainer
      position="top-center" // 토스트 위치
      autoClose={2000} // 자동 닫힘 시간 (밀리초)
      hideProgressBar={true} // 진행 바 숨기기 여부
      newestOnTop={false} // 새로운 토스트를 위에 표시할지 여부
      rtl={false} // 오른쪽에서 왼쪽으로 텍스트 표시 여부
    />
  );
};

export default ToastOne;
