const express = require('express');
const router = express.Router();
const mysql = require('../../../api/mysql/index');


/* GET home page. */
router.get('/', async function (req, res, next) {
    res.append('Access-Control-Allow-Origin', '*');
    const user_id = req.query.userId
    console.log(user_id)
    const data = {}   //返回的data数据
    const order = '`order`'

    let SELECT = await mysql(`SELECT * FROM ${order},product,sku_product,color WHERE u_id = ${user_id} AND ${order}.p_id = product.product_id 
    AND ${order}.s_id = sku_product.sku_id AND color.color_id = sku_product.color_id`)
    console.log(`SELECT * FROM ${order},product,sku_product,color WHERE u_id = ${user_id} AND ${order}.p_id = product.product_id 
    AND ${order}.s_id = sku_product.sku_id AND color.color_id = sku_product.color_id`)

    try {
        data.code = 0
        data.msg = "添加成功"
        data.param = SELECT
    } catch (error) {
        data.code = 400
        data.param = []
        data.msg = error
        res.json(data)
    }
    res.json(data)
});

module.exports = router;
