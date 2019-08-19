<!-- script代码，如果需要引用js文件，请使用与HTML中相同的方式。 -->
<script type = "text/javascript">

    var qjksrq = "15046";//外出开始日期1
    var qjkssj1 = "14986"; //外出开始时间1 下拉框
    var qjjsrq = "15047";//外出结束日期1
    var qjjssj1 = "14987"; //外出结束时间1 下拉框


    var qjkssj2 = "8124"; //请假开始时间隐藏 浏览框
    var qjjssj2 = "8123"; //请假结束时间隐藏 浏览框

    jQuery(document).ready(function() {

    jQuery("#field" + qjkssj1).change(function() {
        if (jQuery("#field" + qjkssj1).val() == "0") {
            jQuery("#field" + qjkssj2).val("00:00");
            jQuery("#field" + qjkssj2 + "span").html("00:00");
        }
        if (jQuery("#field" + qjkssj1).val() == "1") {
            jQuery("#field" + qjkssj2).val("12:00");
            jQuery("#field" + qjkssj2 + "span").html("12:00");
        }
        setLeaveDays();
    });

    jQuery("#field" + qjjssj1).change(function() {
    if (jQuery("#field" + qjjssj1).val() == "0") {
    jQuery("#field" + qjjssj2).val("12:00");
    jQuery("#field" + qjjssj2 + "span").html("12:00");
}
    if (jQuery("#field" + qjjssj1).val() == "1") {
    jQuery("#field" + qjjssj2).val("23:59");
    jQuery("#field" + qjjssj2 + "span").html("23:59");
}

    setLeaveDays();

});
});

    jQuery(document).ready(function() { //加载的时候执行
    checkCustomize_ml = function() { //重写checkCustomize函数 提交前验证
        var state= cus_CompareTime("field"+qjksrq+",field"+qjkssj2+"", "field"+qjjsrq+",field"+qjjssj2+"");
        if(!state){
            window.top.Dialog.alert("结束时间必须大于开始时间");
            return false;
        }
        return true;
    }
});
</script>
