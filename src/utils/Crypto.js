import CryptoJS from "crypto-js"

const key = CryptoJS.enc.Latin1.parse(CRYPTO_KEY);
// const iv = CryptoJS.enc.Latin1.parse(ENV.CRYPTO_IV);

class Crypto {
    // 加密
    static EncryptData(data) {
        console.log("加密前：" + data)
        const stime = new Date().getTime();
        const srcs = CryptoJS.enc.Utf8.parse(JSON.stringify(data));
        const encrypted = CryptoJS.AES.encrypt(srcs, key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
        const etime = new Date().getTime();
        console.log("加密后：" + encrypted.toString())
        console.log("加密耗时:" + (etime - stime) + "ms");
        return encrypted.toString();
    }

    // 解密
    static DecryptData(data) {
        console.log("解密前：" + data)
        const stime = new Date().getTime();
        const decrypted = CryptoJS.AES.decrypt(data, key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
        const result = JSON.parse(JSON.stringify(CryptoJS.enc.Utf8.stringify(decrypted).toString()));
        const etime = new Date().getTime();
        console.log("解密后：" + result)
        console.log("解密耗时:" + (etime - stime) + "ms");
        return result;
    }

}
export default Crypto
