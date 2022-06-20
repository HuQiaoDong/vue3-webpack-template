const env = process.env.NODE_ENV;
const config = {
    development: {
        BASE_API: 'http://127.0.0.1:9000'
    },
    production: {
        BASE_API: 'http://prod.api.hxcapital.cn'
    }
};
module.exports = config[env];
