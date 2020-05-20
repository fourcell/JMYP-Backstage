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
    let list = []    //sku 商品list数据
    let color = []   //sku 颜色集合
    let size = []    //sku尺寸集合
    let stock_num = 0 //商品的所有库存

    let select = await mysql(`SELECT * FROM product,sku_product,color,size WHERE product.product_id = ${id} AND sku_product.product_id = ${id} AND
    sku_product.color_id = color.color_id AND sku_product.sku_id = size.size_id `)

    select.map(item => {
        stock_num += item.stock
        console.log(item)
        list.push({
            img:item.img,//sku图片
            p_name:item.p_name,    //sku商品名称
            p_title:item.p_title,   //商品标题
            sku_id: item.sku_id, // skuId，下单时后端需要
            price: item.vip_price, // 价格（单位分）
            s1: item.color_id, // 规格类目 k_s 为 s1 的对应规格值 id 颜色id
            s2: item.size_id, // 规格类目 k_s 为 s2 的对应规格值 id  尺寸id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: item.stock// 当前 sku 组合对应的库存
        })
        color.push({
            id: item.color_id, // skuValueId：规格值 id
            name: item.color,// skuValueName：规格值名称
            imgUrl: item.img, // 规格类目图片，只有第一个规格类目可以定义图片
            previewImgUrl: item.img,// 用于预览显示的规格类目图片
        })
        size.push({
            id: item.size_id, // skuValueId：规格值 id
            name: item.name // skuValueName：规格值名称
        })
    })
    sku = {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
            {
                k: "颜色", // skuKeyName：规格类目名称
                v: color,
                k_s: "s1" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
            },
            {
                k: "尺寸", // skuKeyName：规格类目名称
                v: size,
                k_s: "s2" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
            }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: list,
        price: select[0].vip_price, // 默认价格（单位元）
        stock_num: stock_num, // 商品总库存
        collection_id: select[0].sku_id, // 无规格商品 skuId 取 colle
        hide_stock: false
    }
    //商品详情页数据
    param = {
        title: select[0].p_title,     //标题
        stock: select[0].stock,   //库存
        sales: select[0].sales,   //销量
        describes: select[0].describes,   //销量
        is_put: select[0].is_put, //评论
        price: select[0].price, //商品的原价
        vip_price: select[0].vip_price, //商品降价之后的价格
        p_place:select[0].p_place   //商品发货地址
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
