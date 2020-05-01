const express = require('express');
const router = express.Router();
const mysql = require('../../../api/mysql/index');


/* GET home page. */
router.get('/', async function (req, res, next) {
    res.append('Access-Control-Allow-Origin', '*');
    const type = req.query.type   //接受post参数

    const data = {}   //返回的data数据
    let sku = []    //sku
    let param = {}

    let select = await mysql(`SELECT * FROM product,sku_product WHERE product.procuct_id = 1 AND sku_product.product_id = ${type} `)
    //    console.log(JSON.parse( select[0].sp_data).sex)
    sku = select.map(item => {
        return {
            skuId: item.sku_id, //skuId
            img: item.picture,  //sku图片
            size: JSON.parse(item.sp_data).size,   //sku商品的尺码
            color: JSON.parse(item.sp_data).color,    //sku商品颜色
            price: item.price,   //原价
            vip_price: item.price,//降价之后
        }
    })

    param = {
        title: select[0].p_title,     //标题
        stock: select[0].stock,   //库存
        sales: select[0].sales,   //销量
        describes: select[0].describes,   //销量
        is_put: select[0].is_put, //评论
        price: select[0].price, //评论
        vip_price: select[0].vip_price //评论
    }

    try {
        data.code = 0
        data.msg = "请求成功"
        data.payload = { param, sku }
    } catch (error) {
        data.code = 400
        data.msg = error
    }
    res.json(data)
});

module.exports = router;
