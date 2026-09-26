import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
});

export const getPrograms = () => api.get("/programs").then((r) => r.data);
export const getProgram = (slug) => api.get(`/programs/${slug}`).then((r) => r.data);
export const getImpactStories = () => api.get("/impact-stories").then((r) => r.data);
export const getBlogPosts = () => api.get("/blog").then((r) => r.data);
export const postDonation = (data) => api.post("/donate", data).then((r) => r.data);
export const postContact = (data) => api.post("/contact", data).then((r) => r.data);

export default api;
