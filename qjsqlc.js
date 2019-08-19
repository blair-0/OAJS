<!-- script代码，如果需要引用js文件，请使用与HTML中相同的方式。 -->
<script type="text/javascript">
    $('#field7261').bind('input propertychange', function() {
        var qjlxqjlx=jQuery("#field7261").val();//获取其他假

        if(qjlxqjlx==9){

            window.top.Dialog.alert("如果你选择的休假类型为其他假，请关联一个请假日期，这个关联日期的上班和下班打卡时间将会作为请假审批参考");
        }
    });

var brower = browerInfo();//获取浏览器属性

//获取浏览器属性
function browerInfo() {
    var brower = {name: "unknown", version: 0},
        userAgent = window.navigator.userAgent.toLowerCase();

    if (/(msie|firefox|chrome)\D+(\d[\d.]*)/.test(userAgent)) {
        brower.name  = RegExp.$1;
        brower.version = RegExp.$2;

        // safari
    } else if (/version\D+(\d[\d.]*).*safari/.test(userAgent)) {
    }

    return brower;
}
//绑定事件
function bindEvent(bdid) {

    var arr = new Array('field7257','field7256','field7258','field7259','field7261');
    if (brower.name == "firefox" || brower.name == "chrome"
        || (brower.name  == "msie" && brower.version >= 9)
        || brower.name  == "unknown") {//火狐，谷歌，ie9以上

        for (var i = 0; i < arr.length; i++) {
            var tmp = arr[i];
            if(tmp=='field7259'||tmp=='field7258'){
                jQuery("#" + tmp).bindPropertyChange(function(){
                    jsbd();
                    ksbd();
                })
            }else if(tmp=='field7257'||tmp=='field7256'){
                jQuery("#" + tmp).bindPropertyChange(function(){
                    ksbd();
                })
            }else if(tmp=='field7261'){
                jQuery("#" + tmp).bindPropertyChange(function(){
                    jqbd();
                })
            }
        }
    } else {

        for (var i = 0; i < arr.length; i++) {
            var tmp = arr[i];


            if(tmp=='field7259'||tmp=='field7258'){
                jQuery("#" + tmp).bind("propertychange",function(){
                    jsbd();
                })
            }else if(tmp=='field7257'||tmp=='field7256'){
                jQuery("#" + tmp).bind("propertychange",function(){
                    ksbd();
                })
            }else if(tmp=='field7261'){
                jQuery("#" + tmp).bind("propertychange",function(){
                    jqbd();
                })
            }



        }
    }
}
$(document).ready(function(){

    bindEvent();
    zdyJuffer= function() {

        var state= cus_CompareTime("field7256", "field7258");


        if(!state){
            if(jQuery("#field7256").val()!=jQuery("#field7258").val()){

                window.top.Dialog.alert("结束时间必须大于开始时间");

                return false;
            }


        }


        return true;

    }

    jQuery("#field14646").bindPropertyChange(function () {
        if(jQuery("#field7261").val()==9 && jQuery("#field14646").val()!=''){


        }else{
            alert("选择 其他假 时请关联当天的加班时间！");
            return false;
        }

        var qjlx=jQuery("#field7261").val();//获取其他假
        var loginid=jQuery("#field7252").val();//获取请假人
        var jiabanshijian=jQuery("#field14646").val();//当天加班时间
        if( jiabanshijian !='' ){

            //$("#field14246").change(function(){
            // window.top.Dialog.alert("请假类型+"+qjlx+"当天加班时间+"+jiabanshijian);
            $.ajax({
                url: 'http://home.yingyinggroup.com/mobile/plugin/qingjia.jsp',
                type: 'get',
                dataType: 'json',
                data: {
                    loginid: loginid,
                    jiabanshijian: jiabanshijian
                },
                success: function (data) {
                    var data = eval(data.data);
                    //var data = data.parseJSON();
                    //var data = JSON.parse(data.data);
                    //var dataObj = eval('(''+data+'')');
                    var signtime1 = data.signtime1;
                    var signtime2 = data.signtime2;

                    document.getElementById("field14647").value = signtime1;
                    document.getElementById("field14648").value = signtime2 ;
                }
            });
            //});
        }

    });





});
//置空
function handleEmpty(val) {
    if (val == undefined || val == null) {
        return "";
    } else {
        return val;
    }
}
//设置为空
function setTextValue(fieldId,fieldValue) {
    try {
        jQuery("#" + fieldId).val(fieldValue);
        jQuery("#" + fieldId +"span").html(fieldValue);
    } catch (e) {}
}
//在结束时间绑定事件
function jsbd() {
    var field7257 = jQuery("#field7257").val();//开始时间
    var field7259 = jQuery("#field7259").val();//结束时间
    var field7256 = jQuery("#field7256").val();//开始日期
    var field7258= jQuery("#field7258").val();//结束日期
    var field7471 = jQuery("#field7471").val();//隐藏时间差
    if(handleEmpty(field7257)==''||handleEmpty(field7259)==''||handleEmpty(field7256)==''||handleEmpty(field7258)==''){
        setTextValue('field7260','');
        return '';
    }
    if (field7259== "0") {
        jQuery("#field7589").val("12:00");
        jQuery("#field7589span").html("12:00");
    }
    else if (field7259== "1") {
        jQuery("#field7589").val("18:30");
        jQuery("#field7589span").html("18:30");
    }
    setLeaveDays();
}
//在开始时间绑定事件
function ksbd() {

    document.getElementsByClassName("sbSelector ac_input").value = '6';
    var field7257 = jQuery("#field7257").val();//开始时间
    var field7259 = jQuery("#field7259").val();//结束时间
    var field7256 = jQuery("#field7256").val();//开始日期
    var field7258= jQuery("#field7258").val();//结束日期
    var field7471 = jQuery("#field7471").val();//时间差
    if(handleEmpty(field7257)==''||handleEmpty(field7259)==''||handleEmpty(field7256)==''||handleEmpty(field7258)==''){
        setTextValue('field7260','');
        return '';
    }
    if (field7257== "0") {
        jQuery("#field7590").val("08:00");
        jQuery("#field7590span").html("08:00");
    }
    else if (field7257== "1") {
        jQuery("#field7590").val("14:00");
        jQuery("#field7590span").html("14:00");
    }
    setLeaveDays();
}
function jqbd() {

    var objSelect = document.getElementById("field7264");

    if(jQuery("#field7261").val()=='0'){
//病假
        for(var i=0;i<objSelect.options.length;i++) {
            if(objSelect.options[i].value == '26') {
                objSelect.options[i].selected = true;
                break;
            }
        }
        jQuery("input[name=field7264]").val('26');

//jsSelectItemByValue(document.getElementById("field7264"),'27');
    }
    if(jQuery("#field7261").val()=='1'){
//病假
        for(var i=0;i<objSelect.options.length;i++) {
            if(objSelect.options[i].value == '27') {
                objSelect.options[i].selected = true;
                break;
            }
        }
        jQuery("input[name=field7264]").val('27');

//jsSelectItemByValue(document.getElementById("field7264"),'27');
    }
    if(jQuery("#field7261").val()=='2'){
//年假

        for(var i=0;i<objSelect.options.length;i++) {
            if(objSelect.options[i].value == '-6') {
                objSelect.options[i].selected = true;
                break;
            }
        }






        jQuery("input[name=field7264]").val('-6');

//jsSelectItemByValue(document.getElementById("field7264"),'-6');

    }
    if(jQuery("#field7261").val()=='3'){
//婚假
        for(var i=0;i<objSelect.options.length;i++) {
            if(objSelect.options[i].value == '32') {
                objSelect.options[i].selected = true;
                break;
            }
        }
        jQuery("input[name=field7264]").val('32');
//jsSelectItemByValue(document.getElementById("field7264"),'32');
    }
    if(jQuery("#field7261").val()=='4'){
//丧假
        for(var i=0;i<objSelect.options.length;i++) {
            if(objSelect.options[i].value == '35') {
                objSelect.options[i].selected = true;
                break;
            }
        }
        jQuery("input[name=field7264]").val('35');
//jsSelectItemByValue(document.getElementById("field7264"),'35');
    }
    if(jQuery("#field7261").val()=='5'){
//产假
        for(var i=0;i<objSelect.options.length;i++) {
            if(objSelect.options[i].value == '37') {
                objSelect.options[i].selected = true;
                break;
            }
        }
        jQuery("input[name=field7264]").val('37');
//jsSelectItemByValue(document.getElementById("field7264"),'37');
    }
    if(jQuery("#field7261").val()=='6'){
//产检假
        for(var i=0;i<objSelect.options.length;i++) {
            if(objSelect.options[i].value == '38') {
                objSelect.options[i].selected = true;
                break;
            }
        }
        jQuery("input[name=field7264]").val('38');
//jsSelectItemByValue(document.getElementById("field7264"),'38');
    }
    if(jQuery("#field7261").val()=='7'){
//陪产假
        for(var i=0;i<objSelect.options.length;i++) {
            if(objSelect.options[i].value == '39') {
                objSelect.options[i].selected = true;
                break;
            }
        }
        jQuery("input[name=field7264]").val('39');

//jsSelectItemByValue(document.getElementById("field7264"),'39');
    }
//if(jQuery("#field7261").val()=='8'){
    //调休
//for(var i=0;i<objSelect.options.length;i++) {
    //if(objSelect.options[i].value == '-13') {
    //  objSelect.options[i].selected = true;
    //   break;
    //  }
    //  }
    //  jQuery("input[name=field7264]").val('-13');
//jsSelectItemByValue(document.getElementById("field7264"),'-13');
//}


    //默认选择输入框

}

jQuery(document).ready(function()
{
    checkCustomize=function()
    {
        var qjsc=jQuery("#field7260").val();//请假时长（天）
        var qjlx=jQuery("#field7261").val(); //请假类型，  3：婚假， 4：丧假
        if(qjsc<=0)
        {
            alert("请假时长小于或等于0不能提交！");
            return false;
        } else if((qjlx == 3 || qjlx == 4) && qjsc > 3) {
            alert("婚假或丧假最高不允许超过3天！");
            return false;
        }  else if(qjlxqjlx == 2 && qjsc > 1) { // 1：病假大于1天,必须上传附件
            jQuery("#field8801").val("0");
            jQuery("#field8801").attr("readOnly", "true");
            jQuery("#field7263").attr("viewtype", "1");
        }
        return true;
    }
});
</script>
