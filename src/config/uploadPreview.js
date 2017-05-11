//代码整理：懒人之家  www.lanrenzhijia.com
function uploadPreview(setting) {

    var _self = this;

    _self.IsNull = function(value) {
        if (typeof (value) == "function") { return false; }
        if (value == undefined || value == null || value == "" || value.length == 0) {
            return true;
        }
        return false;
    }

    _self.DefautlSetting = {
        UpBtn: "",
        DivShow: "",
        ImgShow: "",
        Width: 100,
        Height: 100,
        ImgType: ["gif", "jpeg", "jpg", "bmp", "png"],
        ErrMsg: "选择文件错误,图片类型必须是(gif,jpeg,jpg,bmp,png)中的一种",
        callback: function() { }
    };

    _self.Setting = {
        UpBtn: _self.IsNull(setting.UpBtn) ? _self.DefautlSetting.UpBtn : setting.UpBtn,
        DivShow: _self.IsNull(setting.DivShow) ? _self.DefautlSetting.DivShow : setting.DivShow,
        ImgShow: _self.IsNull(setting.ImgShow) ? _self.DefautlSetting.ImgShow : setting.ImgShow,
        Width: _self.IsNull(setting.Width) ? _self.DefautlSetting.Width : setting.Width,
        Height: _self.IsNull(setting.Height) ? _self.DefautlSetting.Height : setting.Height,
        ImgType: _self.IsNull(setting.ImgType) ? _self.DefautlSetting.ImgType : setting.ImgType,
        ErrMsg: _self.IsNull(setting.ErrMsg) ? _self.DefautlSetting.ErrMsg : setting.ErrMsg,
        callback: _self.IsNull(setting.callback) ? _self.DefautlSetting.callback : setting.callback
    };

    _self.getObjectURL = function(file) {
        var url = null;
        if (window.createObjectURL != undefined) {
            url = window.createObjectURL(file);
        } else if (window.URL != undefined) {
            url = window.URL.createObjectURL(file);
        } else if (window.webkitURL != undefined) {
            url = window.webkitURL.createObjectURL(file);
        }
        return url;
    }

    _self.Bind = function() {

			document.getElementById(_self.Setting.UpBtn).onchange = function() {
				if (this.value) {
					if (!RegExp("\.(" + _self.Setting.ImgType.join("|") + ")$", "i").test(this.value.toLowerCase())) {
						alert(_self.Setting.ErrMsg);
						this.value = "";
						return false;
					}
					if (navigator.userAgent.indexOf("MSIE") > -1) {
						try {
							document.getElementById(_self.Setting.ImgShow).src = _self.getObjectURL(this.files[0]);
						} catch (e) {
							var div = document.getElementById(_self.Setting.DivShow);
							this.select();
							top.parent.document.body.focus();
							var src = document.selection.createRange().text;
							document.selection.empty();
							document.getElementById(_self.Setting.ImgShow).style.display = "none";
							div.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
							div.style.width = _self.Setting.Width + "px";
							div.style.height = _self.Setting.Height + "px";
							div.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = src;
						}
					} else {
						document.getElementById(_self.Setting.ImgShow).src = _self.getObjectURL(this.files[0]);
					}
					_self.Setting.callback();
				}
	
        }
    }

    _self.Bind();
}



//function file_click(i){
	// var WARP = document.getElementById('warp');
	// var WARP_LI = WARP.getElementsByTagName('li');
	// for(var i=0; i<WARP_LI.length;i++){
		//new uploadPreview({ UpBtn: "up_img_WU_FILE_0"+i, ImgShow: "imgShow_WU_FILE_0"+i});		
	// }
//}
//window.onload = file_click;
export default uploadPreview


/*用法：
<input type="file" id="input_file" @change="changeTheme"/>
<img id="imgSrc" />
new uploadPreview({
    UpBtn: "input_file",
    ImgShow: "imgSrc"
});*/