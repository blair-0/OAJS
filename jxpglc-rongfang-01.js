<!-- script代码，如果需要引用js文件，请使用与HTML中相同的方式。 -->
<script type="text/javascript">
    jQuery(document).ready(function(){


// field7717 --- 季度
        $("#field7717").bindPropertyChange(function () {


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



