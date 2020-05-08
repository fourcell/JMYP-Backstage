const express = require('express');
const router = express.Router();
const mysql = require('../../../api/mysql/index');


/* GET home page. */
router.get('/', async function (req, res, next) {
    res.append('Access-Control-Allow-Origin', '*');
    const user_id = req.query.userId   //接受post参数

    const data = {}   //返回的data数据

    let select = await mysql(`SELECT product.product_id,p_name,p_title,describes,diss_num,sku_product.sku_id,sku_product.color_id,sku_product.size_id,vip_price,stock,num,color,img,name FROM product,sku_product,cart,color,size WHERE cart.user_id = '${user_id}'
    AND cart.sku_id = sku_product.sku_id AND sku_product.product_id = product.product_id
    AND sku_product.color_id = color.color_id AND sku_product.size_id = size.size_id `)
    select.map(item => {
        item.checked = false
    })
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
