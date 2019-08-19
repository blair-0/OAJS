<!-- script代码，如果需要引用js文件，请使用与HTML中相同的方式。 -->
<script type="text/javascript">
var field14413=jQuery("#field15278span").find("a").text(); //获取登陆人名字
var field14517=jQuery("#field15279").val();

$(document).ready(function(){
    jQuery("#field15328").val(field14413+field14517+"差旅费报销");
    var loginid=jQuery("#field15278").val();//获取请假人

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

            document.getElementById("field15324").value = signtime+"_差旅费_其他";
        }
    });

    var sfcz = "#field15304"; //是否冲账, 是:0, 否:1
    var czje = "#field15305"; //冲账金额

    //冲账金额不能 <= 0
    jQuery(czje).blur(function() {
        var result = jQuery(czje).val();
        var sf = jQuery(sfcz).val();
        if (sf == 0 && result <= 0) {
            alert("【冲账金额】小于等于0不能提交");
            return false;
        }
        return true;
    });

});
</script>



