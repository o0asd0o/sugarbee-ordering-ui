import client from "../axios";

const fetch = (value) => {
    return client.get("/order/find", {
        createdDate: value.dateNow,
    });
};

export default fetch;
