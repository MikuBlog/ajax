
var $$ = (function() {

    var getData = function(url,callback) {

        //如果分页总数据的url为空，返回函数
        if(url == "") {

            console.log("分页总数据url为空，请配置分页总数据url")

            return

        }

        //获取分页总数据
        $.ajax({

            url:url,

            type:"GET",

            success(data) {

                //获取数据成功回调函数
                callback(data)

            },error() {

                console.log("请求总页数数据失败")

            }

        })

    }

    //返回一个对象
    return {

        getData

    }

})()