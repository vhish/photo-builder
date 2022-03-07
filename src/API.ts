import axios from "axios";

const api_uri = process.env.REACT_APP_UNSPLASH_API_URL;

export default axios.create({
  baseURL: api_uri,
  timeout: 30000,
});
