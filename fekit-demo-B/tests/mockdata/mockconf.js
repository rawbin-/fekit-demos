module.exports = {
    '/api/list.json':'./data/listData.json',
    '/api/list.json':'./data/listData.mockjson',
    '/api/list.json':'./data/listData.js',
    '/api/list.json':'http://testdomain.com.cn/resp/listapi.json',
    rules: [{
        pattern:'/api/list.json',
        respondwith:'./data/listData.json'
    }, {
        pattern:'/api/list.json',
        respondwith:'./data/listData.mockjson'
    }, {
        pattern:'/api/list.json',
        respondwith:'./data/listData.js'
    }, {
        pattern:'/api/list.json',
        respondwith:'http://testdomain.com.cn/resp/listapi.json'
    },{
        pattern: '/api/list.json',
        respondwith: function (req, res, context) {
            //这里可以有更多其他的处理过程
            res.end(JSON.stringify({
                "ret": true,
                "data": [{
                    "name": "Li Lei",
                    "email": "lilei@test.com",
                    "registerDateTime": "2020-10-01 22:11:11"
                }, {
                    "name": "Han Meimei",
                    "email": "hanmeimei@test.com",
                    "registerDateTime": "2020-10-01 22:11:11"
                }]
            }))
        }
    }]
}