const express = require('express');
const router = express.Router();
const mysql = require('../../../api/mysql/index');


/* GET home page. */
router.get('/', async function (req, res, next) {
    res.append('Access-Control-Allow-Origin', '*');
    const type = req.query.type   //接受post参数

    const data = {}   //返回的data数据

    let select = await mysql(`SELECT procuct_id,p_name,p_title,diss_num,price,vip_price,describes,is_put,img FROM product,sku_product,color,size WHERE class_id = ${type} AND product.procuct_id = sku_product.product_id
    AND product.is_put =  ${type} AND sku_product.sku_id = color.color_id AND sku_product.sku_id=size.size_id`)
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
