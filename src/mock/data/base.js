import Mock from "mockjs";

const data = Mock.mock({
    "userList|10": [{
        "id|10000-11000": 0,
        username: "@cname",
        email: "@email",
        phone: /^1[385][1-9]\d{8}/,
        role: 0,
        createTime: 1479048325000,
        updateTime: 1479048365000
    }],
    "loginSuccess":{
        message: "成功",
        code: 20000,
        data: null
    },
    "loginError": {
        message: "失败",
        code: 50000,
        data: null
    }

});
export default data;
