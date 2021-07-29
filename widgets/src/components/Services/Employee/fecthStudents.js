import axios from "axios";
export const fetchStudents = async () => {
  try {
    const response = await axios.get("http://localhost:8081/students");
    return response.data;
  } catch (error) {
    console.log("errpr --->", error);
    throw error;
  }
};
