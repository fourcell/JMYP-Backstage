const express = require('express');
const router = express.Router();
const mysql = require('../../../api/mysql/index');


/* GET home page. */
router.post('/', async function (req, res, next) {
    // res.append('Access-Control-Allow-Origin', '*');
    const body = req.body
    const {s_id, o_num, p_id, p_num, u_id, phone, adderss, order_time, order_way, pay_time, total, pay_total, remark, validstatus, is_delete } = body
    const data = {}   //返回的data数据
    const order = '`order`'
    console.log(body)

    let INSERT = await mysql(`INSERT INTO ${order}(o_num,p_id,p_num,u_id,phone,adderss,order_time,
        order_way,pay_time,total,pay_total,remark,validstatus,is_delete,s_id)
        VALUES('${o_num}','${p_id}','${p_num}','${u_id}','${phone}','${adderss}',
        '${order_time}','${order_way}','${pay_time}','${total}','${pay_total}','${remark}','${validstatus}','${is_delete}'),${s_id}`)

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
