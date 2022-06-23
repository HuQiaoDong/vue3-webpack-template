const env = process.env.NODE_ENV;
const config = {
    development: {
        BASE_API: 'http://127.0.0.1:9000',
        CRYPTO_KEY: 'abcdef0123456789',
        CRYPTO_IV: 'abcdef0123456789'
    },
    production: {
        BASE_API: 'http://prod.api.hxcapital.cn',
        CRYPTO_KEY: 'abcdef0123456789',
        CRYPTO_IV: 'abcdef0123456789'
    }
};
module.exports = config[env];
