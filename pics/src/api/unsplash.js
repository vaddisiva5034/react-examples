import axios from "axios";
const unsplash = axios.create({
  headers: {
    Authorization: "Client-ID key"
  },
  baseURL: "https://api.unsplash.com/",
});
export default unsplash;
