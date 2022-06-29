import CryptoJS from "crypto-js"
const key = CryptoJS.enc.Latin1.parse(CRYPTO_KEY);
// const iv = CryptoJS.enc.Latin1.parse(ENV.CRYPTO_IV);

// 日志装饰器
function log(type) {
    let t = ""
    switch (type) {
        case "encrypt":
            t = "加"
            break;
        case "decrypt":
            t = "解"
            break;
    }
    return function (target, name, descriptor){
        console.log(target, name, descriptor)
        let oldValue = descriptor.value;
        descriptor.value = function() {
            console.log(`${t}密前：`, ...arguments);
            const stime = new Date().getTime();
            let newValue = oldValue.apply(this, arguments)
            const etime = new Date().getTime();
            console.log(`${t}密后：`, newValue);
            console.log(`${t}密耗时:` + (etime - stime) + "ms");
            return newValue;
        };
        return descriptor
    }

}

class Crypto {

    // 加密
    @log("encrypt")
    static EncryptData(data) {
        const srcs = CryptoJS.enc.Utf8.parse(JSON.stringify(data));
        const encrypted = CryptoJS.AES.encrypt(srcs, key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
        return encrypted.toString();
    }

    // 解密
    @log("decrypt")
    static DecryptData(data) {
        const decrypted = CryptoJS.AES.decrypt(data, key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
        const result = JSON.parse(JSON.stringify(CryptoJS.enc.Utf8.stringify(decrypted).toString()));
        return result;
    }

}
export default Crypto
