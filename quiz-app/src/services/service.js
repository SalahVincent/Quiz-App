import api from "./api";

export const getQuestionsById = async () => {
  return await api.get("questions").json();
};
