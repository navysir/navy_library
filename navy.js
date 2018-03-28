/**
 * Created by wanghaijun on 2017/5/23.
 */

/*目录：
* 1.formatSeconds(miao)---------时间转换
* 2.GetRequest()  --------------获取url？后跟属性名及跟参
* 3.format_date(id)-------------获取当前时间年-月-日 时：分：秒赋值给input
* 4.arr.unique3()-------------去重
* 5.extractStr(str)-------------解析字串
* 6.fibonacci(n)-------------记忆化斐波那契函数（Memoization）
* 6.
* */

//记忆化斐波那契函数（Memoization）
const fibonacci=((s)=>(f=(i)=>s[i]||(s[i]=f(i-1)+f(i-2))))([0,1,1]);

//时间转换
function formatSeconds(value) {
    var theTime = parseInt(value);// 秒
    var theTime1 = 0;// 分
    var theTime2 = 0;// 小时
    if(theTime > 60) {
        theTime1 = parseInt(theTime/60);
        theTime = parseInt(theTime%60);
        if(theTime1 > 60) {
            theTime2 = parseInt(theTime1/60);
            theTime1 = parseInt(theTime1%60);
        }
    }
    var result = ""//+parseInt(theTime)+"秒";
    if(theTime1 > 0) {
        result = ""+parseInt(theTime1)+"分"+result;
    }
    if(theTime2 > 0) {
        result = ""+parseInt(theTime2)+"小时"+result;
    }
    return result;
}

//获取url？后跟属性名及跟参
function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
}

//获取当前时间年-月-日 时：分：秒赋值给input
function format_date(id) {
    Date.prototype.Format = function(fmt)
    { //author: meizz
        var o = {
            "M+" : this.getMonth()+1,                 //月份
            "d+" : this.getDate(),                    //日
            "h+" : this.getHours(),                   //小时
            "m+" : this.getMinutes(),                 //分
            "s+" : this.getSeconds(),                 //秒
            "q+" : Math.floor((this.getMonth()+3)/3), //季度
            "S"  : this.getMilliseconds()             //毫秒
        };
        if(/(y+)/.test(fmt))
            fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
        for(var k in o)
            if(new RegExp("("+ k +")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        return fmt;
    };
    var dates=new Date().getTime();
    $(id).val(new Date(dates).Format("yyyy-MM-ddThh:mm:ss"));
}

//去重
Array.prototype.unique3 = function(){
  var res = [];
  var json = {};
  for(var i = 0; i < this.length; i++){
    if(!json[this[i]]){
      res.push(this[i]);
      json[this[i]] = 1;
    }
  }
  return res;
}

//解析字串
const extractStr = (str) => {
  const ret = str.match(/:([^:\.])*?\./g) || []
  return ret.map((subStr) => subStr.replace(/[:\.]/g, ''))
}