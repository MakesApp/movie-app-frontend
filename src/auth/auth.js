import axios from "axios";
export const login = (data) => {
	return axios.post("api/auth/login", data, {
		withCredentials: true,
		baseURL: process.env.REACT_APP_BASE_URL,
	});
};

export const register = (data) => {
	return axios.post("api/auth/register", data, {
		baseURL: process.env.REACT_APP_BASE_URL,
	});
};
