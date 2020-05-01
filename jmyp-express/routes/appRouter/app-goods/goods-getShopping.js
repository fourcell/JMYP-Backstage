const express = require('express');
const router = express.Router();
const mysql = require('../../../api/mysql/index');


/* GET home page. */
router.get('/', async function (req, res, next) {
    res.append('Access-Control-Allow-Origin', '*');
    const sku_id = req.query.skuId   //接受post参数
    const procuct_id = req.query.procuctId

    const data = {}   //返回的data数据

    let select = await mysql(`SELECT * FROM product,sku_product WHERE product.procuct_id = 1 AND sku_product.product_id = ${id} `)

    try {
        data.code = 0
        data.msg = "请求成功"
        data.payload = { param, sku }
    } catch (error) {
        data.code = 400
        data.param = []
        data.msg = error
    }
    res.json(data)
});

module.exports = router;
