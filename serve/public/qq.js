require('dotenv').config({path: './.env'});

// 邮箱参数
const email = process.env.email
const pass = process.env.pass


module.exports = {
    email: email,
    name: 'Qianfan',
    pass: pass
}