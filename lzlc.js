<!-- script代码，如果需要引用js文件，请使用与HTML中相同的方式。 -->
<script type="text/javascript">
    var gwID= 15708; //岗位

    //需要设置隐藏的字段ID
    var modFields = new Array(15681, 15682, 15683, 15700, 15685, 15696, 15686);

    $(document).ready(function() {
            var jobtitle = $("#field" + gwID +"span a").text();

            // 实习生问卷只读
            if (jobtitle == "资深软件技术支持") {
                for (i in modFields) {
                    $("#field" + modFields[i]).attr("onchange", "");
                    $("#field" + modFields[i]).attr("type", "hidden");
                    $("#field" + modFields[i]).attr("readOnly", "true");
                }
            }
    });

</script>
