<!-- script代码，如果需要引用js文件，请使用与HTML中相同的方式。 -->
<script type="text/javascript">
    jQuery(document).ready(function(){
        var cdxw =jQuery("#field7770").val();
        var bcdxw =jQuery("#field7769").val();

        $("#field10749").attr("readOnly","true");
        $("#field7750").attr("readOnly","true");

        $("#field7770").bindPropertyChange(function () {
            var cdxw =jQuery("#field7770").val();
            var bcdxw =jQuery("#field7769").val();

            if(bcdxw>=1){

                jQuery("#field10749").val("2");
//jQuery("#field9042span").html("2");
            }else if(bcdxw ==0 && cdxw<=3){

                jQuery("#field10749").val("3");
            }else if(bcdxw ==0 && cdxw>=4){

                jQuery("#field10749").val("4");
            }
        });
        $("#field7769").bindPropertyChange(function () {
            var cdxw =jQuery("#field7770").val();
            var bcdxw =jQuery("#field7769").val();

            if(bcdxw>=1){

                jQuery("#field10749").val("2");
//jQuery("#field9042span").html("2");
            }else if(bcdxw ==0 && cdxw<=3){

                jQuery("#field10749").val("3");
            }else if(bcdxw ==0 && cdxw>=4){

                jQuery("#field10749").val("4");
            }
        });

        $("#field10749").bindPropertyChange(function () {
            var zgpf =jQuery("#field7750").val()*1;
            var jzgkh=jQuery("#field10749").val()*1;

            var tem = zgpf  * 0.5 +jzgkh*0.5;
            jQuery("#field7752").val(tem );
        });
        $("#field7750").bindPropertyChange(function () {
            var zgpf =jQuery("#field7750").val()*1;
            var jzgkh=jQuery("#field10749").val()*1;

            var tem = zgpf  * 0.5 +jzgkh*0.5;
            jQuery("#field7752").val(tem );
        });

        $("#field7745").bindPropertyChange(function () {


            var a = $("#oTable0").find("tr").length ;


            for(var i =3;i<=a;i++){
//alert(i);
                $('#oTable0 tr:eq(3)').remove();
//alert('删除第'+i+'行');
            }
//重写checkCustomize函数
            checkCustomize = function (){

                var a = $("#oTable0").find("tr").length ;

                if(a<4){
                    alert("必须有考核明细数据！");
                    return false;
                }else{
                    return true;
                }
            }




        });
    });


</script>












