import axios from "axios";

const API_HOST = process.env.REACT_APP_API_URL;

export const convertJsonToTypeScript = async (json) => {
  try {
    const result = await axios.post(`${API_HOST}/api/convert`);
    return result.data;
  } catch (err) {
    console.error(err.response.data ?? err.message);
    throw err;
  }
};
