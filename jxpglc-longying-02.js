<!-- script代码，如果需要引用js文件，请使用与HTML中相同的方式。 -->
<script type="text/javascript">
    jQuery(document).ready(function(){
        /*
        field10748 --- 价值观考核结果
        field7708 --- 倡导行为得分
        field7707 --- 不倡导行为得分
         */

        $("#field10748").attr("readOnly","true");
//alert("倡导行为得分");
        $("#field7708").bindPropertyChange(function () {
            var cdxw =jQuery("#field7708").val();
            var bcdxw = jQuery("#field7707").val();
            if(bcdxw>=1){

                jQuery("#field10748").val("2");
//jQuery("#field10748span").html("2");
            }
            if(bcdxw==0&&cdxw<=1){

                jQuery("#field10748").val("3");
//jQuery("#field10748span").html("3");
            }
            if(bcdxw==0&&cdxw>1){

                jQuery("#field10748").val("4");
//jQuery("#field10748span").html("4");
            }
        });
        $("#field7707").bindPropertyChange(function () {
            var cdxw =jQuery("#field7708").val();
            var bcdxw = jQuery("#field7707").val();
            if(bcdxw>=1){

                jQuery("#field10748").val("2");
//jQuery("#field10748span").html("2");
            }
            if(bcdxw==0&&cdxw<=1){

                jQuery("#field10748").val("3");
//jQuery("#field10748span").html("3");
            }
            if(bcdxw==0&&cdxw>1){

                jQuery("#field10748").val("4");
//jQuery("#field10748span").html("4");
            }
        });
//重写checkCustomize函数
        //checkCustomize = function (){

        // alert(111);
        // return false;

        // }






    });

</script>

















