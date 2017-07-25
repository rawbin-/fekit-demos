module.exports = function (req, res, context) {
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