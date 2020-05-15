const express = require('express');
const router = express.Router();
const mysql = require('../../../api/mysql/index');


/* GET home page. */
router.post('/', async function (req, res, next) {
    res.append('Access-Control-Allow-Origin', '*');
    const body = req.body
    const name = body.name
    const data = {}   //返回的data数据
    let i = 0
    let payload = []
    let SELECT = await mysql(`SELECT product_id,p_name FROM product WHERE p_name LIKE '%${name}%'`)

    SELECT.map(item => {
        if (i != item.product_id) {
            i = item.product_id
            payload.push(item)
        }
    })
    try {
        data.code = 0
        data.msg = "请求成功"
        data.param = payload
    } catch (error) {
        data.code = 400
        data.param = []
        data.msg = error
    }
    res.json(data)
});

module.exports = router;
