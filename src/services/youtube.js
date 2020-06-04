import axios from "axios";
const KEY = process.env.API_KEY;

export const baseTerms = {
  part: "snippet",
  maxResults: 5,
  key: KEY,
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
});
