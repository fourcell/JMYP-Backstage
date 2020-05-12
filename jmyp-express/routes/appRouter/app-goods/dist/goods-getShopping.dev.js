"use strict";

var express = require('express');

var router = express.Router();

var mysql = require('../../../api/mysql/index');
/* GET home page. */


router.get('/', function _callee(req, res, next) {
  var user_id, data, select;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*');
          user_id = req.query.userId; //接受post参数

          data = {}; //返回的data数据

          _context.next = 5;
          return regeneratorRuntime.awrap(mysql("SELECT product.product_id,p_name,p_title,describes,diss_num,sku_product.sku_id,sku_product.color_id,sku_product.size_id,vip_price,stock,num,color,img,name FROM product,sku_product,cart,color,size WHERE cart.user_id = '".concat(user_id, "'\n    AND cart.sku_id = sku_product.sku_id AND sku_product.product_id = product.product_id\n    AND sku_product.color_id = color.color_id AND sku_product.size_id = size.size_id ")));

        case 5:
          select = _context.sent;
          select.map(function (item) {
            item.checked = false, item.updateShow = true;
          });

          try {
            data.code = 0;
            data.msg = "请求成功";
            data.payload = select;
          } catch (error) {
            data.code = 400;
            data.param = [];
            data.msg = error;
          }

          res.json(data);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
});
module.exports = router;