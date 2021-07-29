import axios from "axios";
const unsplash = axios.create({
  headers: {
    Authorization: "Client-ID Pjz--hC5RSoqrOgMSl7A8F9XKh4Ufs7YRM7KxYYGqUk",
  },
  baseURL: "https://api.unsplash.com/",
});
export default unsplash;
