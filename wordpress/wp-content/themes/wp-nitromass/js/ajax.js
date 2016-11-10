function CAjaxThread(t){this.TID=t,this.httpRequest=this._CreateHttpObject(),this.arAction=[]}function CAjax(){this.arThreads={},this.obTemporary=null}function CAjaxForm(t,e,n){this.obForm=t,this.obHandler=e,this.obFrame=null,this.isFormProcessed=!1,null==n?this.bFirst=!1:this.bFirst=n,this.__tmpFormTarget="",this.obAJAXIndicator=null,this.currentBrowserDetected="",window.opera?this.currentBrowserDetected="Opera":navigator.userAgent&&(navigator.userAgent.indexOf("MSIE")!=-1?this.currentBrowserDetected="IE":navigator.userAgent.indexOf("Firefox")!=-1&&(this.currentBrowserDetected="Firefox")),this.IsIE9=!!document.documentMode&&document.documentMode>=9}CAjaxThread.prototype._CreateHttpObject=function(){var t=null;if(window.XMLHttpRequest)try{t=new XMLHttpRequest}catch(e){}else if(window.ActiveXObject){try{t=new ActiveXObject("Microsoft.XMLHTTP")}catch(e){}if(!t)try{t=new ActiveXObject("Msxml2.XMLHTTP")}catch(e){}}return t},CAjaxThread.prototype.addAction=function(t){this.arAction.push(t)},CAjaxThread.prototype.clearActions=function(){this.arAction=[]},CAjaxThread.prototype.nextAction=function(){return this.arAction.shift()},CAjaxThread.prototype.Clear=function(){this.arAction=null,this.httpRequest=null},CAjax.prototype._PrepareData=function(t,e){var n="";if(null!=t)for(var o in t){n.length>0&&(n+="&");var i=jsAjaxUtil.urlencode(o);e&&(i=e+"["+i+"]"),n+="object"==typeof t[o]?this._PrepareData(t[o],i):i+"="+jsAjaxUtil.urlencode(t[o])}return n},CAjax.prototype.GetThread=function(t){return this.arThreads[t]},CAjax.prototype.InitThread=function(){for(;;){var t="TID"+Math.floor(1e6*Math.random());if(!this.arThreads[t])break}return this.arThreads[t]=new CAjaxThread(t),t},CAjax.prototype.AddAction=function(t,e){this.arThreads[t]&&this.arThreads[t].addAction(e)},CAjax.prototype._OnDataReady=function(t,e){if(this.arThreads[t])for(;obHandler=this.arThreads[t].nextAction();)obHandler(e)},CAjax.prototype._Close=function(t){this.arThreads[t]&&(this.arThreads[t].Clear(),this.arThreads[t]=null)},CAjax.prototype._SetHandler=function(t){function e(e){e||(e=window.event),e&&27==e.keyCode&&(o._Close(t),jsEvent.removeEvent(document,"keypress",this))}function n(){if(!o.bCancelled&&o.arThreads[t]&&o.arThreads[t].httpRequest&&4==o.arThreads[t].httpRequest.readyState){var e=o.arThreads[t].httpRequest.getResponseHeader("X-Bitrix-Ajax-Status"),n="Redirect"==e,i=o.arThreads[t].httpRequest.responseText;jsAjaxParser.mode="implode",i=jsAjaxParser.process(i),n||o._OnDataReady(t,i),o.__prepareOnload(),jsAjaxParser.code.length>0&&jsAjaxUtil.EvalPack(jsAjaxParser.code),o.__runOnload(),o._Close(t)}}var o=this;this.arThreads[t].httpRequest.onreadystatechange=n,jsEvent.addEvent(document,"keypress",e)},CAjax.prototype.__prepareOnload=function(){this.obTemporary=window.onload,window.onload=null},CAjax.prototype.__runOnload=function(){window.onload&&window.onload(),window.onload=this.obTemporary,this.obTemporary=null},CAjax.prototype.Send=function(t,e,n){if(this.arThreads[t]){if(null!=n)var o=this._PrepareData(n);else var o="";return o.length>0&&(e+=e.indexOf("?")==-1?"?"+o:"&"+o),this.arThreads[t].httpRequest?(this.arThreads[t].httpRequest.open("GET",e,!0),this._SetHandler(t),this.arThreads[t].httpRequest.send("")):void 0}},CAjax.prototype.Post=function(t,e,n){var o="";if(null!=n&&(o=this._PrepareData(n)),this.arThreads[t].httpRequest)return this.arThreads[t].httpRequest.open("POST",e,!0),this._SetHandler(t),this.arThreads[t].httpRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),this.arThreads[t].httpRequest.send(o)},CAjaxForm.prototype.setProcessedFlag=function(t){t=null==t||!!t,this.obForm.bxAjaxProcessed=t,this.isFormProcessed=t},CAjaxForm.isFormProcessed=function(t){return!!t.bxAjaxProcessed&&t.bxAjaxProcessed},CAjaxForm.prototype.process=function(){function t(){if(e.obFrame.contentWindow.document&&0!=e.obFrame.contentWindow.document.body.innerHTML.length&&(null!=e.obHandler&&e.obHandler(e.obFrame.contentWindow.document.body.innerHTML),e.obFrame.contentWindow.AJAX_runExternal&&e.obFrame.contentWindow.AJAX_runExternal(),e.obFrame.contentWindow.AJAX_runGlobal&&e.obFrame.contentWindow.AJAX_runGlobal(),e.bFirst)){try{e.obForm.target=e.__tmpFormTarget,e.obAJAXIndicator.parentNode.removeChild(e.obAJAXIndicator),e.obForm.bxAjaxProcessed=!1}catch(t){e.obForm=null}e.obAJAXIndicator=null,"IE"!=this.currentBrowserDetected&&jsEvent.removeAllEvents(e.obFrame);setTimeout("document.body.removeChild(document.getElementById('"+e.obFrame.id+"'));",100);e.obFrame=null,window.onFormLoaded&&(window.onFormLoaded(),window.onFormLoaded=null)}}var e=this;if(!this.obForm.target||"AJAX_"!=this.obForm.target.substring(0,5)){"IE"==this.currentBrowserDetected?this.IsIE9?(this.obAJAXIndicator=document.createElement("input"),this.obAJAXIndicator.setAttribute("name","AJAX_CALL"),this.obAJAXIndicator.setAttribute("type","hidden")):this.obAJAXIndicator=document.createElement('<input name="AJAX_CALL" type="hidden" />'):(this.obAJAXIndicator=document.createElement("INPUT"),this.obAJAXIndicator.type="hidden",this.obAJAXIndicator.name="AJAX_CALL"),this.obAJAXIndicator.value="Y",this.obForm.appendChild(this.obAJAXIndicator);var n="AJAX_"+Math.round(1e5*Math.random());"IE"==this.currentBrowserDetected?this.IsIE9?(this.obFrame=document.createElement("iframe"),this.obFrame.setAttribute("name",n)):this.obFrame=document.createElement('<iframe name="'+n+'"></iframe>'):this.obFrame=document.createElement("IFRAME"),this.obFrame.style.display="none",this.obFrame.src="javascript:''",this.obFrame.id=n,this.obFrame.name=n,document.body.appendChild(this.obFrame),this.__tmpFormTarget=this.obForm.target,this.obForm.target=n,"IE"==this.currentBrowserDetected?this.obFrame.attachEvent("onload",t):jsEvent.addEvent(this.obFrame,"load",t),this.setProcessedFlag()}};var jsAjaxParser={code:[],mode:"implode",regexp:null,regexp_src:null,process:function(t){for(this.code=[],null==this.regexp&&(this.regexp=/(<script([^>]*)>)([\S\s]*?)(<\/script>)/i);;){var e=t.match(this.regexp);if(null==e)break;var n=e.index,o=e[0].length;if(n>0&&this.code.push({TYPE:"STRING",DATA:t.substring(0,n)}),"undefined"==typeof e[1]||e[1].indexOf("src=")==-1){var i=e[3];i=i.replace("<!--",""),this.code.push({TYPE:"SCRIPT",DATA:i})}else{null==this.regexp_src&&(this.regexp_src=/src="([^"]*)?"/i);var r=this.regexp_src.exec(e[1]);null!=r&&r[1]&&this.code.push({TYPE:"SCRIPT_EXT",DATA:r[1]})}t=t.substring(n+o)}if(t.length>0&&this.code.push({TYPE:"STRING",DATA:t}),"implode"==this.mode){t="";for(var a=0,s=this.code.length;a<s;a++)"STRING"==this.code[a].TYPE&&(t+=this.code[a].DATA);return t}return this.code}},jsAjaxUtil={RemoveAllChild:function(t){try{for(;t.childNodes.length>0;)jsEvent.clearObject(t.childNodes[0]),t.removeChild(t.childNodes[0])}catch(e){}},EvalGlobal:function(t){window.execScript?window.execScript(t,"javascript"):jsAjaxUtil.IsSafari()?window.setTimeout(t,0):window.eval(t)},arLoadedScripts:[],__isScriptLoaded:function(t){for(var e=0;e<jsAjaxUtil.arLoadedScripts.length;e++)if(jsAjaxUtil.arLoadedScripts[e]==t)return!0;return!1},EvalExternal:function(t){if(!/\/bitrix\/js\/main\/ajax.js$/i.test(t)&&!/\/bitrix\/js\/main\/core\/core.js$/i.test(t)&&!jsAjaxUtil.__isScriptLoaded(t)){jsAjaxUtil.arLoadedScripts.push(t);var e=new CAjaxThread;e.httpRequest.open("GET",t,!1),e.httpRequest.send("");var n=e.httpRequest.responseText;e.Clear(),e=null,jsAjaxUtil.EvalGlobal(n)}},EvalPack:function(t){for(var e=0,n=t.length;e<n;e++)"SCRIPT_EXT"==t[e].TYPE||"SCRIPT_SRC"==t[e].TYPE?jsAjaxUtil.EvalExternal(t[e].DATA):"SCRIPT"==t[e].TYPE&&jsAjaxUtil.EvalGlobal(t[e].DATA)},urlencode:function(t){return escape(t).replace(new RegExp("\\+","g"),"%2B")},trim:function(t){var e,n;return n=/^[ \r\n]+/g,e=t.replace(n,""),n=/[ \r\n]+$/g,e=e.replace(n,"")},GetWindowSize:function(){var t,e;self.innerHeight?(t=self.innerWidth,e=self.innerHeight):document.documentElement&&document.documentElement.clientHeight?(t=document.documentElement.clientWidth,e=document.documentElement.clientHeight):document.body&&(t=document.body.clientWidth,e=document.body.clientHeight);var n,o;self.pageYOffset?(n=self.pageXOffset,o=self.pageYOffset):document.documentElement&&document.documentElement.scrollTop?(n=document.documentElement.scrollLeft,o=document.documentElement.scrollTop):document.body&&(n=document.body.scrollLeft,o=document.body.scrollTop);var i,r;return document.compatMode&&"CSS1Compat"==document.compatMode?(i=document.documentElement.scrollWidth,r=document.documentElement.scrollHeight):(r=document.body.scrollHeight>document.body.offsetHeight?document.body.scrollHeight:document.body.offsetHeight,i=document.body.scrollWidth>document.body.offsetWidth||document.compatMode&&"BackCompat"==document.compatMode||document.documentElement&&!document.documentElement.clientWidth?document.body.scrollWidth:document.body.offsetWidth),{innerWidth:t,innerHeight:e,scrollLeft:n,scrollTop:o,scrollWidth:i,scrollHeight:r}},GetRealPos:function(t){if(t.getBoundingClientRect){var e=t.getBoundingClientRect(),n=jsAjaxUtil.GetWindowSize(),o={left:e.left+n.scrollLeft,top:e.top+n.scrollTop,right:e.right+n.scrollLeft,bottom:e.bottom+n.scrollTop};return o}if(!t||!t.offsetParent)return!1;var i=Array();i.left=t.offsetLeft,i.top=t.offsetTop;for(var r=t.offsetParent;r&&"BODY"!=r.tagName;)i.left+=r.offsetLeft,i.top+=r.offsetTop,r=r.offsetParent;return i.right=i.left+t.offsetWidth,i.bottom=i.top+t.offsetHeight,i},IsIE:function(){return document.attachEvent&&!jsAjaxUtil.IsOpera()},IsOpera:function(){return navigator.userAgent.toLowerCase().indexOf("opera")!=-1},IsSafari:function(){var t=navigator.userAgent.toLowerCase();return/webkit/.test(t)},LoadData:function(t,e){if(e){var n=jsAjax.InitThread();return jsAjax.AddAction(n,e),jsAjax.Send(n,t),n}},PostData:function(t,e,n){if(n){var o=jsAjax.InitThread();return jsAjax.AddAction(o,n),jsAjax.Post(o,t,e),o}},__LoadDataToDiv:function(t,e,n,o){function i(t){r&&(jsAjaxUtil.CloseLocalWaitWindow(a,r),n?(jsAjaxUtil.RemoveAllChild(r),r.innerHTML=t):r.innerHTML+=t)}if(null==n&&(n=!0),null==o&&(o=!0),"string"==typeof e||"object"==typeof e&&e.constructor==String)var r=document.getElementById(e);else var r=e;if(r){var a=Math.round(1e6*Math.random());jsAjaxUtil.ShowLocalWaitWindow(a,r,o);jsAjaxUtil.LoadData(t,i)}},InsertDataToNode:function(t,e,n){null==n&&(n=!0),jsAjaxUtil.__LoadDataToDiv(t,e,!0,n)},AppendDataToNode:function(t,e,n){null==n&&(n=!0),jsAjaxUtil.__LoadDataToDiv(t,e,!1,n)},GetStyleValue:function(t,e){if(t.currentStyle)var n=t.currentStyle[e];else if(window.getComputedStyle)var n=document.defaultView.getComputedStyle(t,null).getPropertyValue(e);return n},ShowLocalWaitWindow:function(t,e,n){function o(n){n||(n=window.event),n&&27==n.keyCode&&(jsAjaxUtil.CloseLocalWaitWindow(t,e),jsEvent.removeEvent(document,"keypress",o))}if("string"==typeof e||"object"==typeof e&&e.constructor==String)var i=document.getElementById(e);else var i=e;if(i.getBoundingClientRect)var r=i.getBoundingClientRect(),a=jsAjaxUtil.GetWindowSize(),s={left:r.left+a.scrollLeft,top:r.top+a.scrollTop,right:r.right+a.scrollLeft,bottom:r.bottom+a.scrollTop};else var s=jsAjaxUtil.GetRealPos(i);var d=i.id;if(s){if(null==n&&(n=!0),n){var l=document.body.appendChild(document.createElement("DIV"));l.id="waitshadow_"+d+"_"+t,l.className="waitwindowlocalshadow",l.style.top=s.top-5+"px",l.style.left=s.left-5+"px",l.style.height=s.bottom-s.top+10+"px",l.style.width=s.right-s.left+10+"px"}var c=document.body.appendChild(document.createElement("DIV"));c.id="wait_"+d+"_"+t,c.className="waitwindowlocal";var h=s.top+5;if(h<document.body.scrollTop&&(h=document.body.scrollTop+5),c.style.top=h+"px",c.style.left=s.left+5+"px",jsAjaxUtil.IsIE()){var u=document.createElement("IFRAME");u.src="javascript:''",u.id="waitframe_"+d+"_"+t,u.className="waitwindowlocal",u.style.width=c.offsetWidth+"px",u.style.height=c.offsetHeight+"px",u.style.left=c.style.left,u.style.top=c.style.top,document.body.appendChild(u)}jsEvent.addEvent(document,"keypress",o)}},CloseLocalWaitWindow:function(t,e){if("string"==typeof e||"object"==typeof e&&e.constructor==String)var n=document.getElementById(e);else var n=e;var o=n.id,i=document.getElementById("waitshadow_"+o+"_"+t);i&&document.body.removeChild(i);var r=document.getElementById("waitframe_"+o+"_"+t);r&&document.body.removeChild(r);var a=document.getElementById("wait_"+o+"_"+t);a&&document.body.removeChild(a)},SendForm:function(t,e){if("string"==typeof t||"object"==typeof t&&t.constructor==String)var n=document.getElementById(t);else var n=t;(!n.name||n.name.length<=0)&&(n.name="AJAXFORM_"+Math.floor(1e6*Math.random()));var o=new CAjaxForm(n,e,(!0));return o.process(),!0},InsertFormDataToNode:function(t,e,n){return null==n&&(n=!0),jsAjaxUtil.__LoadFormToDiv(t,e,!0,n)},AppendFormDataToNode:function(t,e,n){return null==n&&(n=!0),jsAjaxUtil.__LoadFormToDiv(t,e,!1,n)},__LoadFormToDiv:function(t,e,n,o){function i(t){r&&(n?(jsAjaxUtil.RemoveAllChild(r),r.innerHTML=t):r.innerHTML+=t,jsAjaxUtil.CloseLocalWaitWindow(r.id,r))}if(null==n&&(n=!0),null==o&&(o=!0),"string"==typeof e||"object"==typeof e&&e.constructor==String)var r=document.getElementById(e);else var r=e;if(r)return jsAjaxUtil.ShowLocalWaitWindow(r.id,r,o),jsAjaxUtil.SendForm(t,i)},UpdatePageData:function(t){t.TITLE&&jsAjaxUtil.UpdatePageTitle(t.TITLE),t.NAV_CHAIN&&jsAjaxUtil.UpdatePageNavChain(t.NAV_CHAIN),t.CSS&&t.CSS.length>0&&jsAjaxUtil.UpdatePageCSS(t.CSS),t.SCRIPTS&&t.SCRIPTS.length>0&&jsAjaxUtil.UpdatePageScripts(t.SCRIPTS)},UpdatePageScripts:function(t){for(var e=0;e<t.length;e++)jsAjaxUtil.EvalExternal(t[e])},UpdatePageCSS:function(t){jsStyle.UnloadAll();for(var e=0;e<t.length;e++)jsStyle.Load(t[e])},UpdatePageTitle:function(t){var e=document.getElementById("pagetitle");e&&(e.removeChild(e.firstChild),e.firstChild?e.insertBefore(document.createTextNode(t),e.firstChild):e.appendChild(document.createTextNode(t))),document.title=t},UpdatePageNavChain:function(t){var e=document.getElementById("navigation");e&&(e.innerHTML=t)},ScrollToNode:function(t){if("string"==typeof t||"object"==typeof t&&t.constructor==String)var e=document.getElementById(t);else var e=t;if(e.scrollIntoView)e.scrollIntoView(!0);else{var n=jsAjaxUtil.GetRealPos(e);window.scrollTo(n.left,n.top)}}},jsStyle={arCSS:{},bInited:!1,Init:function(){var t=document.getElementsByTagName("LINK");if(t.length>0)for(var e=0;e<t.length;e++)if(t[e].href){var n=t[e].href,o=n.indexOf("://");o!=-1&&(n=n.substr(n.indexOf("/",o+3))),t[e].bxajaxflag=!1,this.arCSS[n]=t[e]}this.bInited=!0},Load:function(t){if(this.bInited||this.Init(),null!=this.arCSS[t])return void(this.arCSS[t].disabled=!1);var e=document.createElement("STYLE");e.type="text/css";var n=document.getElementsByTagName("HEAD")[0];if(n.insertBefore(e,n.firstChild),jsAjaxUtil.IsIE())e.styleSheet.addImport(t);else{var o=new CAjaxThread;o.httpRequest.onreadystatechange=null,o.httpRequest.open("GET",t,!1),o.httpRequest.send("");var i=o.httpRequest.responseText,r=t.lastIndexOf("/");if(r!=-1){var a=t.substring(0,r);i=i.replace(/url\(([^\/\\].*?)\)/gi,"url("+a+"/$1)")}o.Clear(),o=null,e.appendChild(document.createTextNode(i))}},Unload:function(t){this.bInited||this.Init(),null!=this.arCSS[t]&&(this.arCSS[t].disabled=!0)},UnloadAll:function(){if(this.bInited)for(var t in this.arCSS)this.arCSS[t].bxajaxflag&&this.Unload(t);else this.Init()}},jsEvent={objectList:[null],objectEventList:[null],__eventManager:function(t){t||(t=window.event);var e=!0;try{t.srcElement&&(t.currentTarget=t.srcElement)}catch(t){}if(this.bxEventIndex&&jsEvent.objectEventList[this.bxEventIndex]&&jsEvent.objectEventList[this.bxEventIndex][t.type])for(var n=jsEvent.objectEventList[this.bxEventIndex][t.type].length,o=0;o<n;o++)if(jsEvent.objectEventList[this.bxEventIndex][t.type]&&jsEvent.objectEventList[this.bxEventIndex][t.type][o]){var i=jsEvent.objectEventList[this.bxEventIndex][t.type][o](t);if("boolean"==typeof i&&(e=e&&i),!e)return!1}return!0},addEvent:function(t,e,n){t.bxEventIndex||(t.bxEventIndex=jsEvent.objectList.length,jsEvent.objectList[t.bxEventIndex]=t),jsEvent.objectEventList[t.bxEventIndex]||(jsEvent.objectEventList[t.bxEventIndex]={}),jsEvent.objectEventList[t.bxEventIndex][e]||(jsEvent.objectEventList[t.bxEventIndex][e]=[],t["on"+e]&&jsEvent.objectEventList[t.bxEventIndex][e].push(t["on"+e]),t["on"+e]=null,t["on"+e]=jsEvent.__eventManager),jsEvent.objectEventList[t.bxEventIndex][e].push(n)},removeEvent:function(t,e,n){if(t.bxEventIndex&&jsEvent.objectEventList[t.bxEventIndex][e])for(var o=0;o<jsEvent.objectEventList[t.bxEventIndex][e].length;o++)if(n==jsEvent.objectEventList[t.bxEventIndex][e][o])return void delete jsEvent.objectEventList[t.bxEventIndex][e][o]},removeAllHandlers:function(t,e){t.bxEventIndex&&jsEvent.objectEventList[t.bxEventIndex][e]&&(jsEvent.objectEventList[t.bxEventIndex][e]=[])},removeAllEvents:function(t){t.bxEventIndex&&jsEvent.objectEventList[t.bxEventIndex]&&(jsEvent.objectEventList[t.bxEventIndex]=[])},clearObject:function(t){t.bxEventIndex&&(jsEvent.objectEventList[t.bxEventIndex]&&delete jsEvent.objectEventList[t.bxEventIndex],jsEvent.objectList[t.bxEventIndex]&&delete jsEvent.objectList[t.bxEventIndex],delete t.bxEventIndex)}},jsAjaxHistory={expected_hash:"",counter:0,bInited:!1,obFrame:null,obImage:null,bHashCollision:!1,obTimer:null,__hide_object:function(t){t.style.position="absolute",t.style.top="-1000px",t.style.left="-1000px",t.style.height="10px",t.style.width="10px"},init:function(t){if(!jsAjaxHistory.bInited){jsAjaxHistory.expected_hash=window.location.hash,jsAjaxHistory.expected_hash&&"#"!=jsAjaxHistory.expected_hash||(jsAjaxHistory.expected_hash="__bx_no_hash__");var e={node:t,title:window.document.title,data:document.getElementById(t).innerHTML},n=document.getElementById("navigation");null!=n&&(e.nav_chain=n.innerHTML),jsAjaxHistoryContainer.put(jsAjaxHistory.expected_hash,e),jsAjaxHistory.obTimer=setTimeout(jsAjaxHistory.__hashListener,500),jsAjaxUtil.IsIE()?(jsAjaxHistory.obFrame=document.createElement("IFRAME"),jsAjaxHistory.__hide_object(jsAjaxHistory.obFrame),document.body.appendChild(jsAjaxHistory.obFrame),jsAjaxHistory.obFrame.contentWindow.document.open(),jsAjaxHistory.obFrame.contentWindow.document.write(jsAjaxHistory.expected_hash),jsAjaxHistory.obFrame.contentWindow.document.close(),jsAjaxHistory.obFrame.contentWindow.document.title=window.document.title):jsAjaxUtil.IsOpera()&&(jsAjaxHistory.obImage=document.createElement("IMG"),jsAjaxHistory.__hide_object(jsAjaxHistory.obImage),document.body.appendChild(jsAjaxHistory.obImage),jsAjaxHistory.obImage.setAttribute("src","javascript:location.href = 'javascript:jsAjaxHistory.__hashListener();';")),jsAjaxHistory.bInited=!0}},__hashListener:function(){if(jsAjaxHistory.obTimer&&(window.clearTimeout(jsAjaxHistory.obTimer),jsAjaxHistory.obTimer=null),null!=jsAjaxHistory.obFrame)var t=jsAjaxHistory.obFrame.contentWindow.document.body.innerText;else var t=window.location.hash;if(t&&"#"!=t||(t="__bx_no_hash__"),0==t.indexOf("#")&&(t=t.substring(1)),t!=jsAjaxHistory.expected_hash){var e=jsAjaxHistoryContainer.get(t);if(e&&(document.getElementById(e.node).innerHTML=e.data,jsAjaxUtil.UpdatePageTitle(e.title),e.nav_chain&&jsAjaxUtil.UpdatePageNavChain(e.nav_chain),jsAjaxHistory.expected_hash=t,null!=jsAjaxHistory.obFrame)){var n="__bx_no_hash__"==t?"":t;window.location.hash!=n&&window.location.hash!="#"+n&&(window.location.hash=n)}}jsAjaxHistory.obTimer=setTimeout(jsAjaxHistory.__hashListener,500)},put:function(t,e){var n={node:t,title:window.document.title,data:document.getElementById(t).innerHTML},o=document.getElementById("navigation");o&&(n.nav_chain=o.innerHTML),jsAjaxHistoryContainer.put(e,n),jsAjaxHistory.expected_hash=e,window.location.hash=jsAjaxUtil.urlencode(e),null!=jsAjaxHistory.obFrame&&(jsAjaxHistory.obFrame.contentWindow.document.open(),jsAjaxHistory.obFrame.contentWindow.document.write(e),jsAjaxHistory.obFrame.contentWindow.document.close(),jsAjaxHistory.obFrame.contentWindow.document.title=n.title)},checkRedirectStart:function(t,e){var n=window.location.hash;"#"==n.substring(0,1)&&(n=n.substring(1)),"view/"==n.substring(0,5)&&(jsAjaxHistory.bHashCollision=!0,document.write('<div id="__ajax_hash_collision_'+e+'" style="display: none;">'))},checkRedirectFinish:function(t,e){document.write("</div>");var n=window.location.hash;"#"==n.substring(0,1)&&(n=n.substring(1)),jsEvent.addEvent(window,"load",function(){if("view/"==n.substring(0,5)){var o=document.getElementById("__ajax_hash_collision_"+e),i=o.firstChild;jsAjaxUtil.RemoveAllChild(i),o.style.display="block",jsAjaxUtil.IsIE()||jsAjaxUtil.IsOpera()||jsAjaxUtil.IsSafari()||(n=jsAjaxHistory.urlencode(n)),n+=(n.indexOf("%3F")==-1?"%3F":"%26")+t+"="+e;var r="/bitrix/tools/ajax_redirector.php?hash="+n;jsAjaxUtil.InsertDataToNode(r,i,!1)}})},urlencode:function(t){return window.encodeURIComponent?encodeURIComponent(t):window.encodeURI?encodeURI(t):jsAjaxUtil.urlencode(t)}},jsAjaxHistoryContainer={arHistory:{},put:function(t,e){this.arHistory[t]=e},get:function(t){return this.arHistory[t]}};[].pop||(Array.prototype.pop=function(){if(this.length<=0)return!1;var t=this[this.length-1];return delete this[this.length-1],this.length--,t},Array.prototype.shift=function(){if(this.length<=0)return!1;var t=this.reverse(),e=t.pop();return this.prototype=t.reverse(),e},Array.prototype.push=function(t){this[this.length]=t});var jsAjax=new CAjax;
//# sourceMappingURL=maps/ajax.js.map
