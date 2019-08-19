
/**
 * 给字段添加必填验证。
 */
var addInputCheckField = function(fieldId, spanImgId) {
    $('#' + fieldId).attr('viewtype', '1');
    var fieldStr = $('input[name=needcheck]').val();
    if (fieldStr.charAt(fieldStr.length - 1) != ',') {
        fieldStr += ',';
    }
    $('input[name=needcheck]').val(fieldStr + fieldId + ',');
    $('#' + spanImgId).html('<img src="/images/BacoError_wev8.gif" align="absMiddle">');
};

/**
 * 移除字段必填验证。
 */
var removeInputCheckField = function(fieldId, spanImgId) {
    $('#' + fieldId).attr('viewtype', '0');
    var fieldStr = $('input[name=needcheck]').val();
    $('input[name=needcheck]').val(fieldStr.replace(fieldId + ',', ''));
    $('#' + spanImgId).html('');
};

// 调用移除必填验证函数
removeInputCheckField('field10391', 'field10391span');	// 移除必填验证，主表文本框、选择框
removeInputCheckField('field10849', 'field10849spanimg');	// 移除必填验证，主表浏览框
removeInputCheckField('field10859_0', 'field10859_0span');	// 移除必填验证，明细表文本框、选择框
removeInputCheckField('field10859_0', 'field10859_0spanimg');	// 移除必填验证，明细表浏览框

// 调用添加必填验证函数
addInputCheckField('field10391', 'field10391span');	// 添加必填验证，主表文本框、选择框
addInputCheckField('field10849', 'field10849spanimg');	// 添加必填验证，主表浏览框
addInputCheckField('field10859_0', 'field10859_0span');	// 添加必填验证，明细表文本框、选择框
addInputCheckField('field10859_0', 'field10859_0spanimg');	// 添加必填验证，明细表浏览框
