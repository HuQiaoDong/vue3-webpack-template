import Crypto from "@/utils/Crypto";

test("crypto aes test",()=>{
    // var data = [{id: 1}, {id: 2}]
    var data = {
        name: "Bob",
        age: 18
    }
    var ciphertext = Crypto.EncryptData(data)
    console.log(ciphertext)
    var decryptedData = Crypto.DecryptData(ciphertext)
    console.log(decryptedData)
})

