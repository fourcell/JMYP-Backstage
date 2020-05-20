const express = require('express');
const router = express.Router();
const mysql = require('../../../api/mysql/index');

/* GET home page. */
router.get('/', async function (req, res, next) {
    //  res.append('Access-Control-Allow-Origin', '*');
    const data = {}   //返回的data数据
    const {pages,branches} = req.query
    let select = await mysql(`SELECT * FROM product,sku_product,color WHERE
     product.product_id = sku_product.product_id AND sku_product.color_id = color.color_id LIMIT ${branches * (pages - 1)},${branches};`)

    let select2 = await mysql(`SELECT * FROM product,sku_product,color WHERE
     product.product_id = sku_product.product_id AND sku_product.color_id = color.color_id;`)

    try {
        data.code = 0
        data.msg = "请求成功"
        data.payload = select
        data.total = select2.length
    } catch (error) {
        data.code = 400
        data.param = []
        data.msg = error
    }
    res.json(data)

});

module.exports = router;
