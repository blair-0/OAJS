<!-- script代码，如果需要引用js文件，请使用与HTML中相同的方式。 -->
<script type="text/javascript">
    jQuery(document).ready(function(){
        /*
        field9042 --- 价值观得分
        field10761 --- 隐藏合计
         */
        $("#field9042").attr("readOnly","true");
//alert("倡导行为得分");
        $("#field10761").bindPropertyChange(function () {
            var cdxw =jQuery("#field10761").val();

            if(cdxw>=2){

                jQuery("#field9042").val("2");
//jQuery("#field9042span").html("2");
            }
            if(cdxw==1){

                jQuery("#field9042").val("3");
//jQuery("#field9042span").html("3");
            }
            if(cdxw==0){

                jQuery("#field9042").val("4");
//jQuery("#field9042span").html("4");
            }
        });

//重写checkCustomize函数
        //  checkCustomize = function (){

        // alert(111);
        // return false;

        //}





    });
</script>










