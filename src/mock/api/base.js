import Mock from "mockjs";

const data = Mock.mock("/service/swagger/testDecrypt",{
    code: 20000,
    message: "成功",
    data: "213"
});
export default data;
