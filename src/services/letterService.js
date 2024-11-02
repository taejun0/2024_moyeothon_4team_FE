import { instance } from "./instance";

export const letterService = async (letterData) => {
  try {
    const response = await instance.post("/letter/add", letterData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to submit letter", error);
    throw error;
  }
};
