
export function setCookie(name,value)  
{  
var exp = new Date();   
exp.setTime(exp.getTime() + 11.8*60*60*1000);  
document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();  

}  
//读取cookies  
export function getCookie(name)  
{  
var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");  
if(arr=document.cookie.match(reg)) return unescape(arr[2]);  
else return null;  
}  

//删除cookies  
export function delCookie(name)  
{  
var exp = new Date();  
exp.setTime(exp.getTime() - 60*60*1000*11.8);  
var cval=getCookie(name);  
if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString();  
}  