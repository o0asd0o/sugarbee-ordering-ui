import client from "../axios";

const login = (loginRequest) => {
    return client.post("/login", {
        username: loginRequest.username,
        password: loginRequest.password
    });
};

export default login;
