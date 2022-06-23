import CryptoJS from "crypto-js"

const key = CryptoJS.enc.Latin1.parse(ENV.CRYPTO_KEY);
const iv = CryptoJS.enc.Latin1.parse(ENV.CRYPTO_IV);
// const key = CryptoJS.enc.Latin1.parse("abcdef0123456789");
// const iv = CryptoJS.enc.Latin1.parse("abcdef0123456789");

class Crypto {

    // 加密
    static EncryptData(data) {
        const srcs = CryptoJS.enc.Utf8.parse(JSON.stringify(data));
        const encrypted = CryptoJS.AES.encrypt(srcs, key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
        return encrypted.toString();
    }

    // 解密
    static DecryptData(data) {
        // const stime = new Date().getTime();
        const decrypted = CryptoJS.AES.decrypt(data, key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
        const result = JSON.parse(CryptoJS.enc.Utf8.stringify(decrypted).toString());
        // const etime = new Date().getTime();
        // console.log("DecryptData Time:" + (etime - stime));
        return result;
    }

}
export default Crypto
