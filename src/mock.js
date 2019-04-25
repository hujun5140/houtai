// 引入mockjs
// const Mock = require('mockjs')
import Mock from 'mockjs'
// 获取mock.Random对象
const Random = Mock.Random
// 定义默认域名
const domain = 'http://mockjs.com/api' 

// 登录数据
const loginData = function(){
    return {
        "status":200,
        "statusText": "ok",
        "data": {
            "id": 510,
            "rid": 30,
            "username": "root",
            "mobile": "13312345678",
            "email": "123456@qq.com",
            "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjUwMCwicmlkIjowLCJpYXQiOjE1MTI1NDQyOTksImV4cCI6MTUxMjYzMDY5OX0.eGrsrvwHm-tPsO9r_pxHIQ5i5L1kX9RX444uwnRGaIM"
        },
        "meta": {
            "msg": "登录成功",
            "status": 200
        }
    }
}
// 用户数据列表
const usersData = function(){
    return {
        "data": {
            "totalpage": 5,
            "pagenum": 4,
            "users": [{

                "id": 25,
                "username": "tige117",
                "mobile": "18616358651",
                "type": 1,
                "openid": "",
                "email": "tige112@163.com",
                "create_time": "2017-11-09T20:36:26.000Z",
                "modify_time": null,
                "is_delete": false,
                "is_active": false
            }]
        },
        "meta": {
            "msg": "获取成功",
            "status": 200
        }
    }
}
// 所有权限菜单
const rightsData = function(){
    if(type == 'list'){
        return {
            "data": [{

                "id": 101,
                "authName": "商品管理",
                "level": "0",
                "pid": 0,
                "path": null
            },
            {
                "id": 102,
                "authName": "订单管理",
                "level": "0",
                "pid": 0,
                "path": null
            }],
            "meta": {
                "msg": "获取权限列表成功",
                "status": 200
            }
        }
    } else if(type == tree){
        return {
            "data": [
                {
                    "id": 101,
                    "authName": "商品管理",
                    "path": null,
                    "pid": 0,
                    "children": [
                        {
                            "id": 104,
                            "authName": "商品列表",
                            "path": null,
                            "pid": 101,
                            "children": [
                                {
                                    "id": 105,
                                    "authName": "添加商品",
                                    "path": null,
                                    "pid": "104,101"
                                }
                            ]
                        }
                    ]
                }
            ],
            "meta": {
                "msg": "获取权限列表成功",
                "status": 200
            }
        }
        
    }
}

// 用户菜单权限
const getmenus = function(){
    return {
        "code":200,
        "data": [
            {
                "id": 125,
                "authName": "用户管理",
                "path": 'users',
                "children": [
                    {
                        "id": 110,
                        "authName": "用户列表",
                        "path": 'users',
                        "children": [],
                        order: null
                    }
                ],
                "order": 1
            },
            {
                "id": 103,
                "authName": "权限管理",
                "path": 'rights',
                "children": [
                    {
                        "id": 111,
                        "authName": "角色列表",
                        "path": 'roles',
                        "children": [],
                        order: null
                    },
                    {
                        "id": 112,
                        "authName": "权限列表",
                        "path": 'rights',
                        "children": [],
                        order: null
                    }
                ],
                "order": 2
            },
            {
                "id": 101,
                "authName": "商品管理",
                "path": 'goods',
                "children": [
                    {
                        "id": 104,
                        "authName": "商品列表",
                        "path": 'goods',
                        "children": [],
                        order: 1
                    },
                    {
                        "id": 115,
                        "authName": "分类参数",
                        "path": 'params',
                        "children": [],
                        order: 2
                    },
                    {
                        "id": 121,
                        "authName": "商品分类",
                        "path": 'categories',
                        "children": [],
                        order: 3
                    },
                ],
                "order": 3
            },
            {
                "id": 102,
                "authName": "订单管理",
                "path": 'orders',
                "children": [
                    {
                        "id": 107,
                        "authName": "订单列表",
                        "path": 'orders',
                        "children": [],
                        order: null
                    }
                ],
                "order": 4
            },
            {
                "id": 145,
                "authName": "数据统计",
                "path": 'reports',
                "children": [
                    {
                        "id": 117,
                        "authName": "数据报表",
                        "path": 'reports',
                        "children": [],
                        order: null
                    }
                ],
                "order": 5
            }
        ],
        "meta": {
            "msg": "获取菜单列表成功",
            "status": 200
        }
        
    }
}
 

// 用户登录
Mock.mock(RegExp(`${domain}/login`+'.*'),'post',loginData)
// 用户数据列表
Mock.mock(RegExp(`${domain}/users`+'.*'),'get',usersData)
// 获取所有权限菜单
Mock.mock(`${domain}/rights/:type`,'get',rightsData)
// 用户菜单权限
Mock.mock(`${domain}/menus`,'get',getmenus)