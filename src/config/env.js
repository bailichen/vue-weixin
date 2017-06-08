//获取图片地址
const imgurl = 'http://images.cangdu.org/';
let baseUrl;

if (process.env.NODE_ENV == 'development') {
	baseUrl = 'http://cangdu.org:8003'
}else{
	baseUrl = 'http://cangdu.org:8003'
}
export {
	baseUrl,
	imgurl 
}
