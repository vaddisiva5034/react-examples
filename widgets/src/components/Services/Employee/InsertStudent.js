import axios from "axios";
export const insertStudent = async (body) => {
  try {
    const result = await axios.post("http://localhost:8080/students", body);
    return result.data;
  } catch (e) {
    console.log("error");
    throw e;
  }
};
