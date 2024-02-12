import axios from "axios";

const API = axios.create({
    // baseURL: "http://localhost:8000/api/v1",
    baseURL: "https://smoggy-worm-windbreaker.cyclic.app/api/v1",
});

export default API;