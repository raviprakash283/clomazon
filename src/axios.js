import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://clomazon-server.vercel.app/'
});

export default instance;