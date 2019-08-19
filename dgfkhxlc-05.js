<!-- script代码，如果需要引用js文件，请使用与HTML中相同的方式。 -->
<script type="text/javascript">
    $(document).ready(function(){
        var kjkmlxjf1 = "field15309"; //会计科目类型（借方1）
        var kjkmlxjf3 = "field15308"; //会计科目类型（借方3）

        $("#" + kjkmlxjf1).bindPropertyChange(function () {
            $("#" + kjkmlxjf3).val($("#"+kjkmlxjf1).val());
            $("#" + kjkmlxjf3+"span").text($("#"+kjkmlxjf1+"span a").text());
        });

    });
</script>
