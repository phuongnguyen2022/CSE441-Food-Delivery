import axios from "axios";

const BASE_URL = "https://6672aabf6ca902ae11b13d46.mockapi.io/restaurants";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchData = async (endpoint, params) => {
  try {
    const response = await api.get(endpoint, { params });
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

// Add more functions as needed for different API endpoints
