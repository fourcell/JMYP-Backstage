const express = require('express')
const multer = require('multer') //引入multer中间件
const fs = require('fs') //引入fs模块
const path = require('path') //引入path模块

const router = express.Router()

let upload = multer({ dest: 'upload' }) //设置上传文件后保存的位置

//添加图片
router.post('/', upload.array('file', 10), (req, res) => {
    const files = req.files[0] //上传图片的信息
    console.log(files.path)
    let data = {}
    let extname = path.extname(files.originalname) //获取图片的后缀名
    files.filename += extname //给文件名加后缀名

    //图片完整路径
    let url = files.path.split('\\')
    files.url = `http://localhost:3000/${url[0]}/${url[1]}${extname}`
    // console.log(files.url.slice(files.url.lastIndexOf('/') + 1))
    newPath = `${files.path}${extname}` //新的文件路径名
    fs.rename(files.path, newPath, err => { //修改文件路径名path，给文件路径名path加后缀名
        if (err) {
            // res.send(formatData({ status: 0 })) //上传失败
            data.code = 400
            data.files = files
            res.json(data)
        } else {
            data.code = 0
            data.files = files
            res.json(data)
        }
    })
})

//删除服务器已上传的图片
router.get('/', (req, res) => {
    let { imgurl } = req.query
    console.log(imgurl)
    let filename = `upload\\${imgurl.slice(imgurl.lastIndexOf('/') + 1)}`
    let data = {}
    fs.unlink(filename, err => { //删除图片
        if (err) {
            data.code = 400
            data.msg = err
            res.json(data)
        } else {
            data.code = 0
            data.msg = "删除成功"
            res.json(data)
        }
    })
})

module.exports = router