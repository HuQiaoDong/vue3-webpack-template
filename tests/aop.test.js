import {SuperFunction} from "@huqiaodong/wrench";
SuperFunction.install(); //Function切面注册
test("aop test",()=>{
    const test = () => {
        console.log("do something");
    };

    const aopTest = test.around(()=>{
        console.log("before");
    },()=>{
        console.log("after");
    });
    aopTest();
});
