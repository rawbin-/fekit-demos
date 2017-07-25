module.exports = {
    '/api/list.json':'./data/listData.json',
    '^\\/api\\/\\w+\\.json.*^^^':'./data/listData.json',
    rules:[{
        pattern:'/api/list.json',
        respondwith:'./data/listData.json'
    },{
        pattern:/^\/api\/\w+\.json.*$/,
        respondwith:'./data/listData.json'
    },{
        pattern:'/api/list.json',
        respondwith:'./data/listData.json',
        jsonp:'thecallback'
    },{
        pattern:/^\/api\/\w+\.json.*$/,
        respondwith:'./data/listData.json',
        jsonp:'thecallback',
    },{
        pattern:/^\/api\/\w+\.json.*$/,
        respondwith:function(req,res,context){
            //这里可以有更多其他的处理过程
            var callbackKey = 'thecallback'
            var dataStr = JSON.stringify({
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
            });
            var jsonpCallback = req.query[callbackKey];
            if(jsonpCallback){
                res.end([jsonpCallback,'(',dataStr,')'].join(''))
            }else{
                res.end(dataStr)
            }
        }
    }]
}