const TopList = [{
    path: '/manage',
    list: [{
        name: '首页',
    }]
},
{
    path: '/manage/goods',
    list: [{
        name: '首页',
        path: '/manage'
    }, {
        name: '商品',
        path: '/manage/goods'
    }, {
        name: '商品列表',
        path: '/manage/goods'
    }]
},
{
    path: '/manage/add',
    list: [{
        name: '首页',
        path: '/manage'
    }, {
        name: '商品',
        path: '/manage/goods'
    }, {
        name: '添加商品',
        path: '/manage/add'
    }]
},
{
    path: '/manage/classify',
    list: [{
        name: '首页',
        path: '/manage'
    }, {
        name: '商品',
        path: '/manage/goods'
    }, {
        name: '商品分类',
        path: '/manage/classify'
    }]
},
{
    path: '/manage/type',
    list: [{
        name: '首页',
        path: '/manage'
    }, {
        name: '商品',
        path: '/manage/goods'
    }, {
        name: '商品类型',
        path: '/manage/type'
    }]
},
{
    path: '/manage/attribute',
    list: [{
        name: '首页',
        path: '/manage'
    }, {
        name: '商品',
        path: '/manage/goods'
    }, {
        name: '商品属性列表',
        path: '/manage/attribute'
    }]
}, 
{
    path: '/manage/upadteattribute',
    list: [{
        name: '首页',
        path: '/manage'
    }, {
        name: '商品',
        path: '/manage/goods'
    }, {
        name: '商品属性列表',
        path: '/manage/upadteattribute'
    }]
},
{
    path: '/manage/update',
    list: [{
        name: '首页',
        path: '/manage'
    }, {
        name: '商品',
        path: '/manage/goods'
    }, {
        name: '修改商品分类',
        path: '/manage/update'
    }]
},
{
    path: '/manage/comodity',
    list: [{
        name: '首页',
        path: '/manage'
    }, {
        name: '商品',
        path: '/manage/goods'
    }, {
        name: '商品管理',
        path: '/manage/comodity'
    }]
},
{
    path: '/manage/indent/indent-list',
    list: [{
        name: '首页',
        path: '/manage'
    }, {
        name: '订单',
        path: '/manage/indent'
    }, {
        name: '订单列表',
        path: '/manage/indent/indent-list'
    }]
},
{
    path: '/manage/indent/indent-config',
    list: [{
        name: '首页',
        path: '/manage'
    }, {
        name: '订单',
        path: '/manage/indent'
    }, {
        name: '订单设置',
        path: '/manage/indent/indent-config'
    }]
},
{
    path: '/manage/indent/indent-dispose',
    list: [{
        name: '首页',
        path: '/manage'
    }, {
        name: '订单',
        path: '/manage/indent'
    }, {
        name: '订退款申请处理',
        path: '/manage/indent/indent-dispose'
    }]
},
{
    path: '/manage/indent/indent-cause',
    list: [{
        name: '首页',
        path: '/manage'
    }, {
        name: '订单',
        path: '/manage/indent'
    }, {
        name: '退款原因',
        path: '/manage/indent/indent-cause'
    }]
},
{
    path: '/manage/user',
    list: [{
        name: '首页',
        path: '/manage'
    }, {
        name: '订单',
        path: '/manage/user'
    }, {
        name: '用户类别',
        path: '/manage/user'
    }]
},
]

export default TopList