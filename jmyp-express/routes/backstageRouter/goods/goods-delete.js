const express = require('express');
const router = express.Router();
const mysql = require('../../../api/mysql/index');

/* GET home page. */
router.get('/', async function (req, res, next) {
    //  res.append('Access-Control-Allow-Origin', '*');
    const data = {}   //返回的data数据
    const {sku_id} = req.query
    let dele = await mysql(`DELETE FROM sku_product,color USING sku_product,color
      WHERE sku_product.sku_id = ${sku_id} AND sku_product.color_id = color.color_id`)

    try {
        data.code = 0
        data.msg = "删除成功"
    } catch (error) {
        data.code = 400
        data.msg = error
    }
    res.json(data)

});

module.exports = router;
