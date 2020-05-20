const express = require('express');
const router = express.Router();
const mysql = require('../../../api/mysql/index');


/* GET home page. */
router.get('/', async function (req, res, next) {
    // res.append('Access-Control-Allow-Origin', '*');
    const user_id = req.query.userId   //接受post参数
    const sku_id = req.query.skuId
    const data = {}   //返回的data数据

    let DELETE = await mysql(`DELETE FROM cart WHERE user_id = ${user_id} AND sku_id = ${sku_id}`)
    try {
        data.code = 0
        data.msg = "删除成功"
        data.payload = []
    } catch (error) {
        data.code = 400
        data.param = []
        data.msg = error
    }
    res.json(data)
});

module.exports = router;
