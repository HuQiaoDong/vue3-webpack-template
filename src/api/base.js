
import { service } from "../utils/http/request";
const request = service;
export const testApi = (status) => {
    return request({
        url: `/service/swagger/testDecrypt`,
        method: "POST",
        data: {
            age: 18,
            name: "Bob"
        }
    });
};
