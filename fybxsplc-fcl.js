<!-- script代码，如果需要引用js文件，请使用与HTML中相同的方式。 -->
<script type="text/javascript">
var field14413=jQuery("#field15336span").find("a").text(); //获取登陆人名字
var field14517=jQuery("#field15337").val(); //申请日期

$(document).ready(function(){

    jQuery("#field15382").bindPropertyChange(function () { //报销内容
        var field14689=  jQuery("#field15382").find("option:selected").text();  //

        jQuery("#field15380").val(field14413+field14517+field14689+"报销");

        var loginid=jQuery("#field15336").val();//获取请假人

        $.ajax({
            url: 'http://10.100.2.111:8888/mobile/plugin/baoxiao.jsp',
            type: 'get',
            dataType: 'json',
            data: {
                loginid: loginid
            },
            success: function (data) {
                var data = eval(data.data);

                //var data = data.parseJSON();
                //var data = JSON.parse(data.data);
                //var dataObj = eval('(''+data+'')');
                var signtime = data.field18;

                document.getElementById("field15376").value = signtime+"_"+field14689;
            }
        });
    });

    var sehj = "field14786"; // 税额合计
    var czje = "#field15343"; //冲账金额
    var sfszzszyfp = "#field15375"; //是否是增值税专用发票, 是:0, 否:1
    var sfcz = "#field15358"; //是否冲账, 是:0, 否:1


    // 当“是否增值税专用发票”选择否时， 将“税额合计”重置为0
    jQuery(sfszzszyfp).change(function(){
        var sf = jQuery(sfszzszyfp).val();
        if(sf == "0") {
            jQuery("#" + sehj + "_tab").html("<tbody><tr><td><input datatype=\"float\" onkeypress=\"ItemDecimal_KeyPress('field_lable14786',15,2)\" " +
                "style=\"ime-mode:disabled;width:95%\" onafterpaste=\"if(isNaN(value))execCommand('undo')\" type=\"text\" class=\"Inputstyle\" " +
                "id=\"field_lable14786\" name=\"field_lable14786\" temptitle=\"税额合计\" value=\"\" onfocus=\"FormatToNumber('14786')\" " +
                "onblur=\"checkFloat(this);numberToFormat('14786');checkinput2('field_lable14786','field_lable14786span',field14786.getAttribute('viewtype'))\" " +
                "viewtype=\"1\"><span id=\"field_lable14786span\"><img src=\"/images/BacoError_wev8.gif\" align=\"absMiddle\"></span><span id=\"field14786span\" " +
                "style=\"word-break:break-all;word-wrap:break-word\"></span><input fieldtype=\"4\" datatype=\"float\" filedtype=\"4\" datalength=\"2\" " +
                "viewtype=\"1\" temptitle=\"税额合计\" type=\"hidden\" class=\"Inputstyle\" id=\"field14786\" name=\"field14786\" value=\"\" " +
                "onpropertychange=\"doMathFieldAttr7198();\" _listener=\"doMathFieldAttr7198();;__bindPropertyChangefn['field14786'](document.getElementById('field14786'))\" " +
                "_hasinit=\"true\"></td></tr><tr><td><input type=\"text\" class=\"Inputstyle\" style=\"width:95%\" id=\"field_chinglish14786\" " +
                "name=\"field_chinglish14786\" value=\"\" readonly=\"true\"></td></tr></tbody>");

        }else {
            jQuery("#" + sehj + "_tab").html("<tbody><tr><td><input datatype=\"float\" onkeypress=\"ItemDecimal_KeyPress('field_lable14786',15,2)\" " +
                "style=\"width: 95%; display: none;\" onafterpaste=\"if(isNaN(value))execCommand('undo')\" type=\"text\" class=\"Inputstyle\" " +
                "id=\"field_lable14786\" name=\"field_lable14786\" temptitle=\"税额合计\" value=\"\" onfocus=\"FormatToNumber('14786')\" " +
                "onblur=\"checkFloat(this);numberToFormat('14786');checkinput2('field_lable14786','field_lable14786span',field14786.getAttribute('viewtype'))\" " +
                "viewtype=\"1\"><span id=\"field14786_readonlytext\" style=\"line-height:30px!important;\"></span><span id=\"field_lable14786span\"></span>" +
                "<span id=\"field14786span\" style=\"word-break:break-all;word-wrap:break-word\"></span><input fieldtype=\"4\" datatype=\"float\" filedtype=\"4\" " +
                "datalength=\"2\" viewtype=\"0\" temptitle=\"税额合计\" type=\"hidden\" class=\"Inputstyle\" id=\"field14786\" name=\"field14786\" " +
                "value=\"\" onpropertychange=\"doMathFieldAttr7198();\" _listener=\"doMathFieldAttr7198();;__bindPropertyChangefn['field14786'](document.getElementById('field14786'))\" " +
                "_hasinit=\"true\"></td></tr><tr><td><input type=\"text\" class=\"Inputstyle\" style=\"width: 95%; display: none;\" id=\"field_chinglish14786\" " +
                "name=\"field_chinglish14786\" value=\"\" readonly=\"true\"><span id=\"field14786_readonlytext_cn\"></span></td></tr></tbody>");
        }
        return true;
    });

    //税额合计不能 <= 0
    //冲账金额不能 <= 0
jQuery(function () {
    checkCustomize=function () {
        var result_se = jQuery("#" + sehj).val(); //税额合计
        var sf_zzs = jQuery(sfszzszyfp).val()   //是否有增值税
        var result_cz = jQuery(czje).val();     //冲账金额
        var sf_cz = jQuery(sfcz).val();         //是否冲账

        if(sf_zzs == 0 && result_se <= 0) {
            alert("【税额合计】小于等于0不能提交");
            return false;
        }

        if(sf_cz == 0 && result_cz <= 0) {
            alert("【冲账金额】小于等于0不能提交");
            return false;
        }

        return true;
    }
});

});


</script>


