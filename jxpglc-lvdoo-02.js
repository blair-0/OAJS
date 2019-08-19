<!-- script代码，如果需要引用js文件，请使用与HTML中相同的方式。 -->
<script type="text/javascript">
// field7600 --- 价值观考核主管评分
    jQuery("#field7600").attr("readonly",true);

jQuery(document).ready(function(){
    $("#field7600").attr("readOnly","true");
//alert("倡导行为得分");
    // field10760 --- 主观评分2
    $("#field10760").bindPropertyChange(function () {
        var cdxw =jQuery("#field10760").val();

        if(cdxw>=2){

            jQuery("#field7600").val("2");
//jQuery("#field7600span").html("2");
        }
        if(cdxw>=1){

            jQuery("#field7600").val("3");
//jQuery("#field7600span").html("3");
        }
        if(cdxw<1){

            jQuery("#field7600").val("4");
//jQuery("#field7600span").html("4");
        }
    });

//重写checkCustomize函数
    //  checkCustomize = function (){

    // alert(111);
    // return false;

    //}





});
</script>












