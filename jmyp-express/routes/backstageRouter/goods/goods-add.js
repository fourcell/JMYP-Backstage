const express = require('express');
const router = express.Router();
const mysql = require('../../../api/mysql/index');

/* GET home page. */
router.post('/', async function (req, res, next) {
    //  res.append('Access-Control-Allow-Origin', '*');
    const { sku, imgList, goods } = req.body  //返回的data数据
    let sizeList = []
    let colorList = []
    // let select = await mysql(`SELECT * FROM classify`)

    //添加商品数据，返回商品id
    const product = await mysql(`INSERT INTO product(p_name,p_title,p_place,class_id,describes,diss_num,is_put)
     VALUES('${goods.name}','${goods.title}','${goods.site}','${goods.type}','${goods.details}','0','0')`)

    //商品id
    const product_id = product.insertId

    //添加color，size，并获取id
    for (let i in sku) {
        //添加颜色和img，并获取其color_id
        const color = await mysql(`INSERT INTO color(color,img) VALUES('${sku[i].color}','${imgList.length > i ? imgList[i] : imgList[imgList.length - 1]}')`)
        colorList.push(color.insertId)

        //查看是否已存在size
        const size = await mysql(`SELECT * FROM size WHERE size.name = '${sku[i].size}'`)
        if (size.length) {
            sizeList.push(size[0].size_id)
        } else {
            const inSize = await mysql(`INSERT INTO size(name,type) VALUES('${sku[i].size}',${goods.type})`)
            sizeList.push(inSize.insertId)
        }

    }

    //添加sku数据
    for (let i in sku) {
        const sku_product = await mysql(`INSERT INTO sku_product(product_id,color_id,size_id,price,vip_price,stock,sales) 
        VALUES('${product_id}','${colorList[i]}','${sizeList[i]}','${sku[i].price}','${sku[i].vipPrice}','${sku[i].sku}','0')`)
    }



    let data = {}
    try {
        data.code = 0
        data.msg = "请求成功"
    } catch (error) {
        data.code = 400
        data.msg = error
    }
    res.json(data)

});

module.exports = router;
