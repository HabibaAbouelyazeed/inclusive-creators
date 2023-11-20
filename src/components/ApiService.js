import axios from "axios";

// const baseUrl = "http://localhost:3000";
const baseUrl = "https://json-server-in-creators.vercel.app";

const fetchData = async (contentType) => {
  try {
    const response = await axios.get(`${baseUrl}/${contentType}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${contentType}:`, error);
    return [];
  }
};

export default fetchData;
