function BxShowAuthService(t,e){var _="";window["bxCurrentAuthId"+e]&&(_=window["bxCurrentAuthId"+e]),BX("bx_auth_serv"+e).style.display="",""!=_&&_!=t&&(BX("bx_auth_href_"+e+_).className="",BX("bx_auth_serv_"+e+_).style.display="none"),BX("bx_auth_href_"+e+t).className="bx-ss-selected",BX("bx_auth_href_"+e+t).blur(),BX("bx_auth_serv_"+e+t).style.display="";var u=BX.findChild(BX("bx_auth_serv_"+e+t),{tag:"input",attribute:{type:"text"}},!0);if(u)try{u.focus()}catch(a){}window["bxCurrentAuthId"+e]=t,document.forms["bx_auth_services"+e]?document.forms["bx_auth_services"+e].auth_service_id.value=t:document.forms["bx_user_profile_form"+e]&&(document.forms["bx_user_profile_form"+e].auth_service_id.value=t)}function BxShowAuthFloat(t,e){var _=!1;bxAuthWnd||(bxAuthWnd=new BX.CDialog({content:'<div id="bx_auth_float_container"></div>',width:640,height:400,resizable:!1}),_=!0),bxAuthWnd.Show(),_&&BX("bx_auth_float_container").appendChild(BX("bx_auth_float")),BxShowAuthService(t,e)}var bxAuthWnd=!1;
//# sourceMappingURL=maps/ss.js.map
