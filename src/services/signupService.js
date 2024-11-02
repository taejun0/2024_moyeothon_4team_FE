import { instance } from "./instance";

export const signupService = async (signupData) => {
  try {
    const response = await instance.post("/signup", signupData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("회원 가입 실패", error);
    throw error;
  }
};
