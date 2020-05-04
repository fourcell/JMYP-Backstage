const manage = [{
    path: '/manage',
    component: () => import('../../pages/Manage'),
    children: [{
        path: 'goods',
        component: () => import('../../pages/Goods/GoodsList'),
    },
    {
        path: 'add',
        component: () => import('../../pages/Goods/GoodsAdd')
    },
    {
        path: 'classify',
        component: () => import('../../pages/Goods/GoodsClassify')
    },
    {
        path: 'type',
        component: () => import('../../pages/Goods/GoodsType')
    },
    {
        path: 'comodity',
        component: () => import('../../pages/Goods/GoodsComodity')
    },
    {
        path: 'update',
        component: () => import('../../components/GoodsClassify/UpdateGood')
    },
    {
        path: 'attribute',
        component: () => import('../../components/GoodsType/Attribute')
    },
    {
        path: 'upadteattribute',
        component: () => import('../../components/GoodsType/UpdateAttribute'),
        meta: {
            title: '商品属性列表'
        }
    },
    {
        path: 'user',
        component: () => import('../../pages/User'),
        meta: {
            title: '用户管理'
        },
    },
    {
        path: 'indent',
        component: () => import('../../pages/Indent'),
        redirect: 'indent/indent-list',
        children: [
            {
                path: 'indent-cause',
                component: () => import('../../pages/Indent/indent-cause.vue'),
                meta: {
                    title: '退款原因'
                }
            },
            {
                path: 'indent-config',
                component: () => import('../../pages/Indent/indent-config'),
                meta: {
                    title: '订单设置'
                }
            },
            {
                path: 'indent-dispose',
                component: () => import('../../pages/Indent/indent-dispose'),
                meta: {
                    title: '订单处理原因'
                }
            },
            {
                path: 'indent-list',
                component: () => import('../../pages/Indent/indent-list'),
                meta: {
                    title: '订单列表'
                }
            },
        ]
    }
    ]
}]
export default manage