<!-- script代码，如果需要引用js文件，请使用与HTML中相同的方式。 -->
<script type="text/javascript">
    //field7631 --- 价值观自评得分
    jQuery("#field7631").attr("readonly",true);


jQuery(document).ready(function(){




// field10501 --- 价值观自评得分2
    $("#field10501").bindPropertyChange(function () {

        var pd = jQuery("#field10501").val();

//if(pd>0&&pd<=5.5){
//jQuery("#field7631").val("2");
//jQuery("#field7631span").html("2");

//}
//if(pd>=6&&pd<=8.5){

//jQuery("#field7631").val('3');
//jQuery("#field7631span").html('3');
//}
//if(pd>=9&&pd<=12){

//jQuery("#field7631").val('4');
//jQuery("#field7631span").html('4');
//}

        // field7631 --- 价值观自评得分
        if(pd<1){
            jQuery("#field7631").val('4');
            jQuery("#field7631span").html('4');
        }
        if(pd<2&&pd>=1){
            jQuery("#field7631").val('3');
            jQuery("#field7631span").html('3');
        }
        if(pd>=2){
            jQuery("#field7631").val("2");
            jQuery("#field7631span").html("2");

        }
    });


//$("#sumvalue7663").bindPropertyChange(function () {

//var pd = jQuery("#sumvalue7663").val();

//if(pd>0&&pd<=5.5){
//jQuery("#field7600").val("2");
//jQuery("#field7600span").html("2");

//}
//if(pd>=6&&pd<=8.5){

//jQuery("#field7600").val('3');
//jQuery("#field7600span").html('3');
//}
//if(pd>=9&&pd<=12){

//jQuery("#field7600").val('4');
//jQuery("#field7600span").html('4');
//}
//});

// field7576 --- 季度
    $("#field7576").bindPropertyChange(function () {


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
















































