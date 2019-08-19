<!-- script代码，如果需要引用js文件，请使用与HTML中相同的方式。 -->
<script type="text/javascript">
var sqr=jQuery("#field15164span").find("a").text(); //获取登陆人名字
$(document).ready(function(){
    jQuery("#field15172").bindPropertyChange(function () {

        var lc=jQuery("#field15172span").find("a").text();  //相关付款流程

        jQuery("#field15186").val(sqr+lc+"用款到票");


    });

    var sehj = "field14849"; // 税额
    var xgfklc = "field15326"; // 相关付款流程

//税额合计不能 <= 0
// 金额转换类型 使用 blur 函数无效
    jQuery("#" + sehj).bindPropertyChange(function() {
        var result = jQuery("#" + sehj).val();
        if (result <= 0) {
            alert("【税额合计】小于等于0不能提交");
            return false;
        }
        return true;
    });

    //设置相关付款流程只能选一个
    $("#" + xgfklc + "__").attr("issingle", "true");
});
</script>



















