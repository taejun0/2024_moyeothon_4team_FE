import { instance } from "./instance";

export const getReceivedLetters = async () => {
  try {
    const response = await instance.get("/get/received/letter");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch received letters", error); // 에러 출력
    throw error; // 에러를 다시 던짐
  }
};

export const getSentLetters = async () => {
  try {
    const response = await instance.get("/get/sent/letter");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch sent letters", error); // 에러 출력
    throw error; // 에러를 다시 던짐
  }
};
