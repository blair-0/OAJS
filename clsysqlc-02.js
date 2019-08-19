<!-- script代码，如果需要引用js文件，请使用与HTML中相同的方式。 -->
<script type="text/javascript">
    jQuery(document).ready(function(){

    var xqlx = "field15257"; //需求类型
    var cph = "field15255"; //车牌号
    var ycqgls = "field15256"; //用车前公里数

    // 0: 借车， 1: 还车
    if (jQuery("#" + xqlx).val() == 1) {
        var fieldStr = $("input[name=needcheck]").val();

        $("#" + cph).attr("viewtype", "0");
        $("#" + cph + "span").html("");

        $("#" + ycqgls).attr("viewtype", "0");
        $("#" + ycqgls + "span").html("");

        $("input[name=needcheck]").val(fieldStr.replace("," + ycqgls, "").replace("," + cph, ""))
        $("#exp_tr").hide(); // exp_tr是给隐藏行添加的自定义属性ID
    }
});


</script>
