const express = require('express');
const router = express.Router();
const mysql = require('../../../api/mysql/index');

/* GET home page. */
router.get('/', async function (req, res, next) {
    //  res.append('Access-Control-Allow-Origin', '*');
    const data = {}   //返回的data数据
    let order = '`order`'
    let select = await mysql(`SELECT * FROM ${order},app_user WHERE ${order}.u_id = app_user.id`)

    try {
        data.code = 0
        data.msg = "请求成功"
        data.payload = select
    } catch (error) {
        data.code = 400
        data.param = []
        data.msg = error
    }
    res.json(data)

});

module.exports = router;
