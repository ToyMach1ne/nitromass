if (typeof window.jivo_magic_var == "undefined"){var jivo_magic_var = 123321;
window.jivo_config={"widget_id":"KOEoSukOAr","site_id":342755,"widget_color":"#607D8B","widget_font_color":"light","widget_padding":"50","widget_height":"33","widget_orientation":"right","font_size":"14","font_family":"Arial","font_type":"normal","locale":"ru_RU","show_rate_form":0,"hide_ad":0,"secure":0,"contacts_ask":0,"style_string":"jivo_shadow jivo_rounded_corners jivo_gradient jivo_3d_effect jivo_border jivo_3px_border","chat_mode":1?"online":"offline","options":0,"hide_offline":0,"vox_login":"jivosite@chat.jivosite.voximplant.com","avatar_url":"\/\/s3-eu-west-1.amazonaws.com\/jivo-userdata","online_widget_label":"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043d\u0430\u043c, \u043c\u044b \u043e\u043d\u043b\u0430\u0439\u043d!","offline_widget_label":"\u041e\u0442\u043f\u0440\u0430\u0432\u044c\u0442\u0435 \u043d\u0430\u043c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435","offline_form_text":"\u041e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0441\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0432 \u044d\u0442\u043e\u0439 \u0444\u043e\u0440\u043c\u0435, \u0438 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u043c \u0435\u0433\u043e \u043d\u0430 e-mail \u0438 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u043e\u0442\u0432\u0435\u0442\u0438\u043c!","bubble_color":"blue","base_url":"\/\/code2.jivosite.com","static_host":"cdn.jivosite.com\/v2","comet":{"host":"node1.jivosite.com"},"contacts_settings":{"name":{"show":true,"required":false},"phone":{"show":true,"required":false},"email":{"show":true,"required":true}}};
(function(){
var RETRIES_LIMIT = 3, retriesCount = 0, timerId;
var isMobile = /iPhone|iPad|iPod|Android|Windows Phone/i.test(navigator.userAgent);
var timeoutTime = isMobile? 8000 : 6000;
var onerrorCb = function(type) {
    clearTimeout(timerId);
    if (++retriesCount >= RETRIES_LIMIT) {return;}
    try {
        localStorage.setItem("jv_store_cdn_resolve_time", (new Date().getTime() + 120000).toString());
        localStorage.setItem("jv_store_cdn_unavailable", type);
    } catch (e) {}
    jivoLoad();
};
var getUrl = function() {
    var timestamp = null;
    try {
        timestamp = parseInt(localStorage.getItem("jv_store_cdn_resolve_time"), 10);
    } catch (e) {}
    var cdnUnavailable = timestamp && timestamp >= (new Date()).getTime();
    return (cdnUnavailable? window.jivo_config.base_url : "//cdn.jivosite.com/v2") + "/js/iframe_loader.js?rand=1478613331";
};
function jivoLoad() {
    var sc = document.getElementsByTagName("script");
    var iA = sc[0];
    var se = document.createElement("script");
    se.type = "text/javascript"; se.async = true; se.charset="UTF-8";
    se.onerror = function(){ onerrorCb("error")};
    iA.parentNode.insertBefore(se, iA).src = getUrl();
    timerId = setTimeout(function () {
        if (typeof window.jivo_init === "undefined") {
            iA.parentNode.removeChild(se);
            onerrorCb("timeout");
        }
    }, timeoutTime);
}
jivoLoad();
})();};