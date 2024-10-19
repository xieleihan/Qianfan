const express = require('express');
const axios = require('axios');
const app = express();
const router = require('express').Router();
require('dotenv').config({path: './.env'});
const db = require('../db/index')

const AK =  process.env.AK;
const SK =  process.env.SK;

async function validateUser(username,usertoken){
	const sql = `SELECT * FROM user WHERE username = '${username}' AND usertoken = '${usertoken}'`
	const result = await db.query(sql);
	return result.length > 0;
}

router.get('/baiduai', async (req, res) => {
	const {username,usertoken} = req.query;
	
	const isValidate = await validateUser(username,usertoken);
	if(!isValidate){
		return res.status(403).send({
			code:403,
			err:'未经授权的访问'
		})
	}
	
	
    const userMessage = req.query.message; // 获取前端传递的 input.value
	
	if(userMessage === ''){
		return res.status(500).send({
			code:500,
			error:'消息不能为空'
		})
	}
	
	// console.log(userMessage)
    try {
        const accessToken = await getAccessToken();

        // 构建语言模型的请求
        var options = {
            'method': 'POST',
            'url': 'https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/yi_34b_chat?access_token=' + accessToken,
            'headers': {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                "messages": [
                    {
                        "role": "user",
                        "content": userMessage // 使用前端传递的用户消息
                    }
                    
                ]
            })
        };

        // 向语言模型发起请求
        const response = await axios(options);
        res.json(response.data); // 将响应发送回前端
    } catch (error) {
        res.status(500).send({ error: 'Error communicating with the language model: ' + error.message });
    }
});

/**
 * 使用 AK，SK 生成鉴权签名（Access Token）
 * @return string 鉴权签名信息（Access Token）
 */
function getAccessToken() {
    let options = {
        'method': 'POST',
        'url': 'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=' + AK + '&client_secret=' + SK,
    }
    return new Promise((resolve, reject) => {
        axios(options)
            .then(res => {
                resolve(res.data.access_token);
            })
            .catch(error => {
                reject(error);
            })
    });
}

module.exports = router;