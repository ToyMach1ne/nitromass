!function(t){function i(){function i(t){var s=t<1e12?s=performance.now?performance.now()+performance.timing.navigationStart:Date.now():t||(new Date).getTime();s-n>=1e3&&(_._updateTargets(),n=s),e(i)}this.regional=[],this.regional[""]={labels:["Years","Months","Weeks","Days","Hours","Minutes","Seconds"],labels1:["Year","Month","Week","Day","Hour","Minute","Second"],compactLabels:["y","m","w","d"],whichLabels:null,digits:["0","1","2","3","4","5","6","7","8","9"],timeSeparator:":",isRTL:!1},this._defaults={until:null,since:null,timezone:null,serverSync:null,format:"dHMS",layout:"",compact:!1,significant:0,description:"",expiryUrl:"",expiryText:"",alwaysExpire:!1,onExpiry:null,onTick:null,tickInterval:1},t.extend(this._defaults,this.regional[""]),this._serverSyncs=[];var e=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||null,n=0;!e||t.noRequestAnimationFrame?(t.noRequestAnimationFrame=null,setInterval(function(){_._updateTargets()},980)):(n=window.animationStartTime||window.webkitAnimationStartTime||window.mozAnimationStartTime||window.oAnimationStartTime||window.msAnimationStartTime||(new Date).getTime(),e(i))}function e(i,e){return"option"==i&&(0==e.length||1==e.length&&"string"==typeof e[0])||t.inArray(i,d)>-1}var n=0,s=1,o=2,a=3,r=4,l=5,p=6;t.extend(i.prototype,{markerClassName:"hasCountdown",propertyName:"countdown",_rtlClass:"countdown_rtl",_sectionClass:"countdown_section",_amountClass:"countdown_amount",_rowClass:"countdown_row",_holdingClass:"countdown_holding",_showClass:"countdown_show",_descrClass:"countdown_descr",_timerTargets:[],setDefaults:function(i){this._resetExtraLabels(this._defaults,i),t.extend(this._defaults,i||{})},UTCDate:function(t,i,e,n,s,o,a,r){"object"==typeof i&&i.constructor==Date&&(r=i.getMilliseconds(),a=i.getSeconds(),o=i.getMinutes(),s=i.getHours(),n=i.getDate(),e=i.getMonth(),i=i.getFullYear());var l=new Date;return l.setUTCFullYear(i),l.setUTCDate(1),l.setUTCMonth(e||0),l.setUTCDate(n||1),l.setUTCHours(s||0),l.setUTCMinutes((o||0)-(Math.abs(t)<30?60*t:t)),l.setUTCSeconds(a||0),l.setUTCMilliseconds(r||0),l},periodsToSeconds:function(t){return 31557600*t[0]+2629800*t[1]+604800*t[2]+86400*t[3]+3600*t[4]+60*t[5]+t[6]},_attachPlugin:function(i,e){if(i=t(i),!i.hasClass(this.markerClassName)){var n={options:t.extend({},this._defaults),_periods:[0,0,0,0,0,0,0]};i.addClass(this.markerClassName).data(this.propertyName,n),this._optionPlugin(i,e)}},_addTarget:function(t){this._hasTarget(t)||this._timerTargets.push(t)},_hasTarget:function(i){return t.inArray(i,this._timerTargets)>-1},_removeTarget:function(i){this._timerTargets=t.map(this._timerTargets,function(t){return t==i?null:t})},_updateTargets:function(){for(var t=this._timerTargets.length-1;t>=0;t--)this._updateCountdown(this._timerTargets[t])},_optionPlugin:function(i,e,n){i=t(i);var s=i.data(this.propertyName);if(!e||"string"==typeof e&&null==n){var o=e;return e=(s||{}).options,e&&o?e[o]:e}if(i.hasClass(this.markerClassName)){if(e=e||{},"string"==typeof e){var o=e;e={},e[o]=n}this._resetExtraLabels(s.options,e);var a=s.options.timezone!=e.timezone;t.extend(s.options,e),this._adjustSettings(i,s,null!=e.until||null!=e.since||a);var r=new Date;(s._since&&s._since<r||s._until&&s._until>r)&&this._addTarget(i[0]),this._updateCountdown(i,s)}},_updateCountdown:function(i,e){var n=t(i);if(e=e||n.data(this.propertyName)){if(n.html(this._generateHTML(e)).toggleClass(this._rtlClass,e.options.isRTL),t.isFunction(e.options.onTick)){var s="lap"!=e._hold?e._periods:this._calculatePeriods(e,e._show,e.options.significant,new Date);1!=e.options.tickInterval&&this.periodsToSeconds(s)%e.options.tickInterval!=0||e.options.onTick.apply(i,[s])}var o="pause"!=e._hold&&(e._since?e._now.getTime()<e._since.getTime():e._now.getTime()>=e._until.getTime());if(o&&!e._expiring){if(e._expiring=!0,this._hasTarget(i)||e.options.alwaysExpire){if(this._removeTarget(i),t.isFunction(e.options.onExpiry)&&e.options.onExpiry.apply(i,[]),e.options.expiryText){var a=e.options.layout;e.options.layout=e.options.expiryText,this._updateCountdown(i,e),e.options.layout=a}e.options.expiryUrl&&(window.location=e.options.expiryUrl)}e._expiring=!1}else"pause"==e._hold&&this._removeTarget(i);n.data(this.propertyName,e)}},_resetExtraLabels:function(t,i){var e=!1;for(var n in i)if("whichLabels"!=n&&n.match(/[Ll]abels/)){e=!0;break}if(e)for(var n in t)n.match(/[Ll]abels[02-9]|compactLabels1/)&&(t[n]=null)},_adjustSettings:function(i,e,n){for(var s,o=0,a=null,r=0;r<this._serverSyncs.length;r++)if(this._serverSyncs[r][0]==e.options.serverSync){a=this._serverSyncs[r][1];break}if(null!=a)o=e.options.serverSync?a:0,s=new Date;else{var l=t.isFunction(e.options.serverSync)?e.options.serverSync.apply(i,[]):null;s=new Date,o=l?s.getTime()-l.getTime():0,this._serverSyncs.push([e.options.serverSync,o])}var p=e.options.timezone;p=null==p?-s.getTimezoneOffset():p,(n||!n&&null==e._until&&null==e._since)&&(e._since=e.options.since,null!=e._since&&(e._since=this.UTCDate(p,this._determineTime(e._since,null)),e._since&&o&&e._since.setMilliseconds(e._since.getMilliseconds()+o)),e._until=this.UTCDate(p,this._determineTime(e.options.until,s)),o&&e._until.setMilliseconds(e._until.getMilliseconds()+o)),e._show=this._determineShow(e)},_destroyPlugin:function(i){i=t(i),i.hasClass(this.markerClassName)&&(this._removeTarget(i[0]),i.removeClass(this.markerClassName).empty().removeData(this.propertyName))},_pausePlugin:function(t){this._hold(t,"pause")},_lapPlugin:function(t){this._hold(t,"lap")},_resumePlugin:function(t){this._hold(t,null)},_hold:function(i,e){var n=t.data(i,this.propertyName);if(n){if("pause"==n._hold&&!e){n._periods=n._savePeriods;var s=n._since?"-":"+";n[n._since?"_since":"_until"]=this._determineTime(s+n._periods[0]+"y"+s+n._periods[1]+"o"+s+n._periods[2]+"w"+s+n._periods[3]+"d"+s+n._periods[4]+"h"+s+n._periods[5]+"m"+s+n._periods[6]+"s"),this._addTarget(i)}n._hold=e,n._savePeriods="pause"==e?n._periods:null,t.data(i,this.propertyName,n),this._updateCountdown(i,n)}},_getTimesPlugin:function(i){var e=t.data(i,this.propertyName);return e?"pause"==e._hold?e._savePeriods:e._hold?this._calculatePeriods(e,e._show,e.options.significant,new Date):e._periods:null},_determineTime:function(t,i){var e=function(t){var i=new Date;return i.setTime(i.getTime()+1e3*t),i},n=function(t){t=t.toLowerCase();for(var i=new Date,e=i.getFullYear(),n=i.getMonth(),s=i.getDate(),o=i.getHours(),a=i.getMinutes(),r=i.getSeconds(),l=/([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g,p=l.exec(t);p;){switch(p[2]||"s"){case"s":r+=parseInt(p[1],10);break;case"m":a+=parseInt(p[1],10);break;case"h":o+=parseInt(p[1],10);break;case"d":s+=parseInt(p[1],10);break;case"w":s+=7*parseInt(p[1],10);break;case"o":n+=parseInt(p[1],10),s=Math.min(s,_._getDaysInMonth(e,n));break;case"y":e+=parseInt(p[1],10),s=Math.min(s,_._getDaysInMonth(e,n))}p=l.exec(t)}return new Date(e,n,s,o,a,r,0)},s=null==t?i:"string"==typeof t?n(t):"number"==typeof t?e(t):t;return s&&s.setMilliseconds(0),s},_getDaysInMonth:function(t,i){return 32-new Date(t,i,32).getDate()},_normalLabels:function(t){return t},_generateHTML:function(i){var e=this;i._periods=i._hold?i._periods:this._calculatePeriods(i,i._show,i.options.significant,new Date);for(var d=!1,c=0,u=i.options.significant,h=t.extend({},i._show),m=n;m<=p;m++)d|="?"==i._show[m]&&i._periods[m]>0,h[m]="?"!=i._show[m]||d?i._show[m]:null,c+=h[m]?1:0,u-=i._periods[m]>0?1:0;for(var g=[!1,!1,!1,!1,!1,!1,!1],m=p;m>=n;m--)i._show[m]&&(i._periods[m]?g[m]=!0:(g[m]=u>0,u--));var f=i.options.compact?i.options.compactLabels:i.options.labels,w=i.options.whichLabels||this._normalLabels,v=function(t){var n=i.options["compactLabels"+w(i._periods[t])];return h[t]?e._translateDigits(i,i._periods[t])+(n?n[t]:f[t])+" ":""},y=function(t){var n=i.options["labels"+w(i._periods[t])];return!i.options.significant&&h[t]||i.options.significant&&g[t]?'<span class="dot">:</span><span class="'+_._sectionClass+'"><span class="'+_._amountClass+'">'+e._translateDigits(i,i._periods[t])+'</span><br/><span class="title">'+(n?n[t]:f[t])+"</span></span>":""};return i.options.layout?this._buildLayout(i,h,i.options.layout,i.options.compact,i.options.significant,g):(i.options.compact?'<span class="'+this._rowClass+" "+this._amountClass+(i._hold?" "+this._holdingClass:"")+'">'+v(n)+v(s)+v(o)+v(a)+(h[r]?this._minDigits(i,i._periods[r],2):"")+(h[l]?(h[r]?i.options.timeSeparator:"")+this._minDigits(i,i._periods[l],2):"")+(h[p]?(h[r]||h[l]?i.options.timeSeparator:"")+this._minDigits(i,i._periods[p],2):""):'<span class="'+this._rowClass+" "+this._showClass+(i.options.significant||c)+(i._hold?" "+this._holdingClass:"")+'">'+y(n)+y(s)+y(o)+y(a)+y(r)+y(l)+y(p))+"</span>"+(i.options.description?'<span class="'+this._rowClass+" "+this._descrClass+'">'+i.options.description+"</span>":"")},_buildLayout:function(i,e,d,_,c,u){for(var h=i.options[_?"compactLabels":"labels"],m=i.options.whichLabels||this._normalLabels,g=function(t){return(i.options[(_?"compactLabels":"labels")+m(i._periods[t])]||h)[t]},f=function(t,e){return i.options.digits[Math.floor(t/e)%10]},w={desc:i.options.description,sep:i.options.timeSeparator,yl:g(n),yn:this._minDigits(i,i._periods[n],1),ynn:this._minDigits(i,i._periods[n],2),ynnn:this._minDigits(i,i._periods[n],3),y1:f(i._periods[n],1),y10:f(i._periods[n],10),y100:f(i._periods[n],100),y1000:f(i._periods[n],1e3),ol:g(s),on:this._minDigits(i,i._periods[s],1),onn:this._minDigits(i,i._periods[s],2),onnn:this._minDigits(i,i._periods[s],3),o1:f(i._periods[s],1),o10:f(i._periods[s],10),o100:f(i._periods[s],100),o1000:f(i._periods[s],1e3),wl:g(o),wn:this._minDigits(i,i._periods[o],1),wnn:this._minDigits(i,i._periods[o],2),wnnn:this._minDigits(i,i._periods[o],3),w1:f(i._periods[o],1),w10:f(i._periods[o],10),w100:f(i._periods[o],100),w1000:f(i._periods[o],1e3),dl:g(a),dn:this._minDigits(i,i._periods[a],1),dnn:this._minDigits(i,i._periods[a],2),dnnn:this._minDigits(i,i._periods[a],3),d1:f(i._periods[a],1),d10:f(i._periods[a],10),d100:f(i._periods[a],100),d1000:f(i._periods[a],1e3),hl:g(r),hn:this._minDigits(i,i._periods[r],1),hnn:this._minDigits(i,i._periods[r],2),hnnn:this._minDigits(i,i._periods[r],3),h1:f(i._periods[r],1),h10:f(i._periods[r],10),h100:f(i._periods[r],100),h1000:f(i._periods[r],1e3),ml:g(l),mn:this._minDigits(i,i._periods[l],1),mnn:this._minDigits(i,i._periods[l],2),mnnn:this._minDigits(i,i._periods[l],3),m1:f(i._periods[l],1),m10:f(i._periods[l],10),m100:f(i._periods[l],100),m1000:f(i._periods[l],1e3),sl:g(p),sn:this._minDigits(i,i._periods[p],1),snn:this._minDigits(i,i._periods[p],2),snnn:this._minDigits(i,i._periods[p],3),s1:f(i._periods[p],1),s10:f(i._periods[p],10),s100:f(i._periods[p],100),s1000:f(i._periods[p],1e3)},v=d,y=n;y<=p;y++){var D="yowdhms".charAt(y),T=new RegExp("\\{"+D+"<\\}(.*)\\{"+D+">\\}","g");v=v.replace(T,!c&&e[y]||c&&u[y]?"$1":"")}return t.each(w,function(t,i){var e=new RegExp("\\{"+t+"\\}","g");v=v.replace(e,i)}),v},_minDigits:function(t,i,e){return i=""+i,i.length>=e?this._translateDigits(t,i):(i="0000000000"+i,this._translateDigits(t,i.substr(i.length-e)))},_translateDigits:function(t,i){return(""+i).replace(/[0-9]/g,function(i){return t.options.digits[i]})},_determineShow:function(t){var i=t.options.format,e=[];return e[n]=i.match("y")?"?":i.match("Y")?"!":null,e[s]=i.match("o")?"?":i.match("O")?"!":null,e[o]=i.match("w")?"?":i.match("W")?"!":null,e[a]=i.match("d")?"?":i.match("D")?"!":null,e[r]=i.match("h")?"?":i.match("H")?"!":null,e[l]=i.match("m")?"?":i.match("M")?"!":null,e[p]=i.match("s")?"?":i.match("S")?"!":null,e},_calculatePeriods:function(t,i,e,d){t._now=d,t._now.setMilliseconds(0);var c=new Date(t._now.getTime());t._since?d.getTime()<t._since.getTime()?t._now=d=c:d=t._since:(c.setTime(t._until.getTime()),d.getTime()>t._until.getTime()&&(t._now=d=c));var u=[0,0,0,0,0,0,0];if(i[n]||i[s]){var h=_._getDaysInMonth(d.getFullYear(),d.getMonth()),m=_._getDaysInMonth(c.getFullYear(),c.getMonth()),g=c.getDate()==d.getDate()||c.getDate()>=Math.min(h,m)&&d.getDate()>=Math.min(h,m),f=function(t){return 60*(60*t.getHours()+t.getMinutes())+t.getSeconds()},w=Math.max(0,12*(c.getFullYear()-d.getFullYear())+c.getMonth()-d.getMonth()+(c.getDate()<d.getDate()&&!g||g&&f(c)<f(d)?-1:0));u[n]=i[n]?Math.floor(w/12):0,u[s]=i[s]?w-12*u[n]:0,d=new Date(d.getTime());var v=d.getDate()==h,y=_._getDaysInMonth(d.getFullYear()+u[n],d.getMonth()+u[s]);d.getDate()>y&&d.setDate(y),d.setFullYear(d.getFullYear()+u[n]),d.setMonth(d.getMonth()+u[s]),v&&d.setDate(y)}var D=Math.floor((c.getTime()-d.getTime())/1e3),T=function(t,e){u[t]=i[t]?Math.floor(D/e):0,D-=u[t]*e};if(T(o,604800),T(a,86400),T(r,3600),T(l,60),T(p,1),D>0&&!t._since)for(var C=[1,12,4.3482,7,24,60,60],b=p,M=1,S=p;S>=n;S--)i[S]&&(u[b]>=M&&(u[b]=0,D=1),D>0&&(u[S]++,D=0,b=S,M=1)),M*=C[S];if(e)for(var S=n;S<=p;S++)e&&u[S]?e--:e||(u[S]=0);return u}});var d=["getTimes"];t.fn.countdown=function(t){var i=Array.prototype.slice.call(arguments,1);return e(t,i)?_["_"+t+"Plugin"].apply(_,[this[0]].concat(i)):this.each(function(){if("string"==typeof t){if(!_["_"+t+"Plugin"])throw"Unknown command: "+t;_["_"+t+"Plugin"].apply(_,[this].concat(i))}else _._attachPlugin(this,t||{})})};var _=t.countdown=new i}(jQuery),$(document).ready(function(){$("body").on("change",".row-shadow .pull-left select",function(){var t=$(this).val(),i=$("input[name="+t+"]").val();$(this).parents("li").find("input.item_id").val(t),"notavailable"==i?($(this).parents("li").find("div.product-counter").addClass("disabled"),$(this).parents("li").find("div.product-counter").find("input").attr("disabled","disabled"),$(this).parents("li").find(".icon-cart").removeClass("icon-cart").addClass("icon-cart-empty"),$(this).parents("li").find(".product-price__new").hide(),$(this).parents("li").find(".product-price__none").show()):($(this).parents("li").find("div.product-counter").removeClass("disabled"),$(this).parents("li").find("div.product-counter").find("input").removeAttr("disabled"),$(this).parents("li").find(".icon-cart-empty").removeClass("icon-cart-empty").addClass("icon-cart"),$(this).parents("li").find(".product-price__none").hide(),$(this).parents("li").find(".product-price__new").show())}),$("body").on("click",".row-shadow .icon-cart",function(){var t=$(this).parents(".box-product"),i=$(t).find(".box-product__img a").html(),e=$(t).find("input.item_id").val(),n=$(t).find("input.kol").val();return $.get("/ajax/addtobasket.php",{id:e,quantity:n},function(t){refreshSmallBasket(),$("#popup-added").find(".popup-thanks__icon").html(i),$(".popup-open-added").click()}),!1}),$("body").on("click",".row-shadow .icon-cart-empty",function(){var t=$(this).parents("li"),i=$(t).find("input.item_id").val();return $("#product_id_reminder").val(i),$("#popup-open-reminder").click(),!1})});
//# sourceMappingURL=maps/page_54.js.map