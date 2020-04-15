import axios from "axios";

const url = process.env.NODE_ENV === "development" ? "http://localhost:9000" : "https://some.url.com";

const client = axios.create({
    baseURL: url,
    responseType: "json"
});

export default client;
