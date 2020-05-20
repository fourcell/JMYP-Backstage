const express = require('express');
const router = express.Router();
const mysql = require('../../../api/mysql/index');


/* GET home page. */
router.post('/', async function (req, res, next) {
    // res.append('Access-Control-Allow-Origin', '*');
    const body = req.body
    const user_id = body.userId
    const sku_id = body.skuId   //接受post参数
    const procuct_id = body.procuctId
    const shopping_number = body.shoppingNumber
    const data = {}   //返回的data数据

    let SELECT = await mysql(`SELECT * FROM cart WHERE user_id = ${user_id} AND sku_id = ${sku_id}`)

    if (!SELECT.length) {
        let INSERT = await mysql(`INSERT INTO cart(user_id,sku_id,product_id,num) VALUES('${user_id}','${sku_id}','${procuct_id}','${shopping_number}')`)
    } else{
        let UPDATE = await mysql(`UPDATE cart SET num=${shopping_number} WHERE user_id = ${user_id} AND sku_id = ${sku_id}`)
    }

    try {
        data.code = 0
        data.msg = "添加成功"
    } catch (error) {
        data.code = 400
        data.param = []
        data.msg = error
    }
    res.json(data)
});

module.exports = router;
