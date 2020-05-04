const express = require('express');
const router = express.Router();
const mysql = require('../../../api/mysql/index');


/* GET home page. */
router.get('/', async function (req, res, next) {
    res.append('Access-Control-Allow-Origin', '*');
    const id = req.query.id   //接受post参数

    const data = {}   //返回的data数据
    let sku = []    //sku
    let param = {}

    let select = await mysql(`SELECT * FROM product,sku_product,color,size WHERE product.procuct_id = ${id} AND sku_product.product_id = ${id} AND
    sku_product.sku_id = color.color_id AND sku_product.sku_id = size.size_id `)
    //    console.log(JSON.parse( select[0].sp_data).sex)
    console.log(typeof select)
    sku = select.map(item => {
        console.log(item)
        return {
            skuId: item.sku_id, //skuId
            // img: item.picture,  //sku图片
            size: JSON.parse(item.sp_data).size,   //sku商品的尺码
            color: JSON.parse(item.sp_data).color,    //sku商品颜色
            price: item.price,   //sku显示的价格，原价
            vip_price: item.price,//sku显示的价格，就是实际支付的价格
        }
    })

    param = {
        title: select[0].p_title,     //标题
        stock: select[0].stock,   //库存
        sales: select[0].sales,   //销量
        describes: select[0].describes,   //销量
        is_put: select[0].is_put, //评论
        price: select[0].price, //商品的原价
        vip_price: select[0].vip_price //商品降价之后的价格
    }

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
