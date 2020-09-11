//upLoaderImg.js
import axios from 'axios'		//引入axios
import { Toast } from 'vant'	//引入Toast

function upLoaderImg (file) {	//file为 你读取成功的回调文件信息
    //new 一个FormData格式的参数
    let params = new FormData()
    params.append('file', file)
    let config = {
        headers: { //添加请求头
            'Content-Type': 'multipart/form-data'
        }
    }
    return new Promise((resolve, reject) => {
        //把 uploadUrl 换成自己的 上传路径
        axios.post('upload/fileUpload/file', params, config).then(res => {
            console.log(res,'111')
            if (res && res.data) {
                //console.log(res.data,params,'999000')//如果为真 resolve出去
                resolve(res.data,'234')
            }
        }).catch(err => {
            Toast.fail('系统异常')
            reject(err)
        });
    })
}
export default upLoaderImg