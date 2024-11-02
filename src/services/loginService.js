import { instance } from "./instance";

export const loginService = async (loginData) => {
  try{
    const response = await instance.post("/login", loginData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to Login", error);
    throw error;
  }
};