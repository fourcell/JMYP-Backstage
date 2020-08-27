var express = require('express');
var router = express.Router();
// 初始化Client
var OSS = require('ali-oss');
let client = new OSS({
  region: '',
  accessKeyId: '',
  accessKeySecret: '',
  bucket: '',
});

 const put = async ()=> {
  try {
    //object-name可以自定义为文件名（例如file.txt）或目录（例如abc/test/file.txt）的形式，实现将文件上传至当前Bucket或Bucket下的指定目录。
    let result = await client.put('object-name', 'local-file');
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}


var multer = require('multer')
var upload = multer({ dest: './tmp/' })
/* GET home page. */
router.all('/', upload.single('file'), function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')
  put();
});

module.exports = router;
