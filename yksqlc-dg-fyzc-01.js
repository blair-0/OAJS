<!-- script代码，如果需要引用js文件，请使用与HTML中相同的方式。 -->
<script type="text/javascript">

var field14413=jQuery("#field15232span").find("a").text(); //获取登陆人名字
$(document).ready(function(){
    jQuery("#field15244span").bindPropertyChange(function () {

        var field14425=jQuery("#field15244span").find("a").text();  //获取 收款单位
        var field14456=  jQuery("#field15275").find("option:selected").text();  //获取 用款用途
        jQuery("#field15273").val(field14413+field14425+field14456+"用款");
    });
    jQuery("#field15275").bindPropertyChange(function () {

        var field14425=jQuery("#field15244span").find("a").text();  //获取 收款单位
        var field14456=  jQuery("#field15275").find("option:selected").text(); //获取 用款用途
        jQuery("#field15273").val(field14413+field14425+field14456+"用款");
    });

    var sehj = "#field15271"; // 税额

//税额合计不能 <= 0
// 金额转换类型 使用 blur 函数无效
    jQuery(sehj).bindPropertyChange(function() {
        var result = jQuery(sehj).val();
        if (result <= 0) {
            alert("【税额合计】小于等于0不能提交");
            return false;
        }
        return true;
    });
});


<script type="text/javascript">
checkCustomize = function (){


    var field9021 = jQuery("#field9021").val();//开始日期
    if(field9021==100){
        return true;
    }else{
        window.top.Dialog.alert("权重总和必须是100");
        return false;
    }


</script>

