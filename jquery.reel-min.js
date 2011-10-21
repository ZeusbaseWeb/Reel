/*
 Copyright (c) 2009-2011 Petr Vostrel (http://petr.vostrel.cz/)
 Dual licensed under the MIT (MIT-LICENSE.txt)
 and GPL (GPL-LICENSE.txt) licenses.

 jQuery Reel
 http://jquery.vostrel.cz/reel
 Version: 1.1.3-devel
 Updated: 2011-10-21

 Requires jQuery 1.4.2 or higher
*/
jQuery.reel||function(h,kb,ja,s){function B(i){return h.reel.instances.length?h.reel.instances.first().data(i):null}function lb(i){return h.reel.instances.push(i[0])&&i}function mb(i){return(h.reel.instances=h.reel.instances.not("#"+i.attr(O)))&&i}function ka(i){return nb&&"data:image/gif;base64,R0lGODlh"+i}function ob(i){return"<"+i+"/>"}function la(i){return"."+i}function ma(i){return"http://code.vostrel.cz/"+i}function na(i){return"url("+i+")"}function P(i,a,v){return Q(i,La(a,v))}function pb(i){function a(){h.fn[this]||
(h.fn[this]=function(){return this})}h.each(i,a)}function oa(i,a){return w(i)*(a?-1:1)}function X(i){return i.originalEvent.touches[0]}h.reel={version:"1.1.3-devel",def:{footage:6,frame:1,frames:36,hint:"",horizontal:true,hotspot:s,indicator:0,klass:"",loops:true,reversed:s,spacing:0,stitched:0,suffix:"-reel",tooltip:"",area:s,brake:0.5,clickfree:false,cw:false,delay:-1,directional:false,draggable:true,entry:s,graph:s,image:s,images:[],inversed:false,laziness:6,monitor:s,opening:0,orbital:0,path:"",
preloader:4,rebound:0.5,revolution:s,row:1,rows:0,speed:0,step:s,steps:s,tempo:36,timeout:2,throwable:true,vertical:false,wheelable:true,attr:{},scrollable:true}};h.fn.reel=function(i){var a=h.extend({},h.reel.def,i);i=function(f){var t=[];f.filter(qb).each(function(){var c=h(this),d=a.images.length&&a.images||a.image||a.attr.src||c.attr(Ma),u=Y(a.attr.width||c.css(Na)),n=Y(a.attr.height||c.css(Oa));!d||d==Pa||!u||!n||t.push(c)});f.filter(la(x)).each(function(){t.push(h(this).trigger("teardown"))});
return h(t)}(this);var v=[];a.reversed&&(a.cw=true);a.tooltip&&(a.hint=a.tooltip);a.hotspot&&(a.area=a.hotspot);i.each(function(){var f=h(this),t=f.data(),c=function(g,b){t[g]=b;f.trigger("store",[g,b]);return b},d=function(g){var b=t[g];f.trigger("recall",[g,b]);return b},u={setup:function(g){if(f.hasClass(x))return n.call(g);var b=f.attr(a.attr).attr(Ma),e=c(O,f.attr(O)||f.attr(O,x+"-"+ +new Date).attr(O)),k=f.attr("style"),j=h.extend({},f.data()),l=a.images,m=a.stitched,o=a.loops,q={x:Y(f.css(Na)||
a.attr.width),y:Y(f.css(Oa)||a.attr.height)},y=c(Qa,a.orbital&&a.footage||a.rows<=1&&l.length||a.frames),z=m?1:Ra(y/a.footage),R={display:"block",width:q.x,height:q.y};e="#"+e+a.suffix;var Sa=f.attr("class")||"",pa={position:"relative",width:q.x,height:q.y};pa=h(S,{id:e.substr(1),"class":Sa+qa+rb,css:pa});R=f.wrap(pa).attr({"class":x}).css(R).bind(u);v.push(lb(R)[0]);c(Ta,l.length&&l.length||a.image||b.replace(/^(.*)\.(jpg|jpeg|png|gif)$/,"$1"+a.suffix+".$2"));c(Ua,[]);c(C,a.frame);c(Va,a.spacing);
c(I,q);c(p,0);c(ra,a.steps||a.frames);c(Z,a.revolution||m/2||q.x*2);c(sa,z);c($,1/(y-(o&&!m?0:1)));c(sb,1/Q(y,d(ra)));c(ta,m);c(Wa,m-(o?0:q.x));c(ua,e);c(F,c(va,a.speed)<0);c(J,0);c(K,a.vertical);c(A,(a.row-1)/(a.rows-1));c(aa,oa(1,!a.cw&&!m));c(T,false);c(Xa,a.brake);c(wa,!!a.orbital);c(D,a.tempo/(h.reel.lazy?a.laziness:1));c(ba,0);c(Ya,{src:b,classes:Sa,style:k||Pa,data:j});E.bind(G,u.tick);n.call(g);f.trigger("start")},teardown:function(g){var b=f.data(Ya);f.parent().children("img").unbind(r);
f.unbind(r).unbind(u).attr({"class":b.classes,src:b.src,style:b.style}).removeClass(x);f.data(b.data).siblings().remove();f.unwrap();mb(f);ca();E.unbind(G,u.tick).unbind(G,u.opening_tick);da.unbind(xa).unbind(ya);n.call(g)},start:function(){var g=d(I),b=d(Qa),e=Q(b,d(ra));e=c(p,1/e*((a.step||a.frame)-1));c(C,U(e*b)+1);f.attr("id");b=f.parent();e=h(S,{"class":tb,css:{position:ea,left:0,top:0,width:g.x,height:g.y,background:za,opacity:0}}).appendTo(b);var k=!d(T)||a.rows<=1||!a.orbital||a.scrollable;
e=c(Za,h(a.area||e));if(h.reel.touchy){f.css({WebkitUserSelect:"none",WebkitBackgroundSize:a.images.length?"auto":d(ta)&&d(ta)+"px "+g.y+"px"||g.x*a.footage+"px "+g.y*d(sa)*(a.rows||1)*(a.directional?2:1)+"px"});e.bind(ub,function(j){f.trigger("down",[X(j).clientX,X(j).clientY,true])}).bind(vb,function(j){f.trigger("slide",[X(j).clientX,X(j).clientY,true]);return!k}).bind(wb,function(){f.trigger("up",[true]);return false}).bind(xb,function(){f.trigger("up",[true]);return false})}else e.css({cursor:"url("+
$a+"), "+Aa}).bind(a.wheelable?yb:"",function(j,l){f.trigger("wheel",[l]);return false}).bind(zb,function(){f.trigger("play")}).bind(a.clickfree?Ab:Bb,function(j){f.trigger("down",[j.clientX,j.clientY]);return false}).bind(a.clickfree?Cb:"",function(){f.trigger("up");return false}).disableTextSelect();a.hint&&e.attr(Db,a.hint);a.monitor&&b.append(Ba=h(S,{"class":Eb,css:{position:ea,left:0,top:0}}))||(Ba=h());a.indicator&&b.append(ab("x"));a.rows>1&&a.indicator&&b.append(ab("y"));f.trigger("preload")},
preload:function(g){var b=d(I),e=f.parent(),k=d(Ta),j=a.images,l=!j.length?[k]:[].concat(j),m=[],o=f[0];o.frames=l.length;o.preloaded=0;f.trigger("stop");for(e.append(Ca=h(S,{"class":Fb,css:{position:ea,left:0,top:b.y-a.preloader,height:a.preloader,overflow:bb,backgroundColor:za}}));l.length;){var q=a.path+l.shift(),y=h(new Image).hide().bind("load"+r,function(){o.preloaded++;h(this).unbind(r);Ca.css({width:1/o.frames*o.preloaded*b.x});if(o.frames==o.preloaded){Ca.remove();j.length||f.css({backgroundImage:na(a.path+
k)});f.attr({src:Gb}).trigger(a.rows>1&&!a.stitched?"rowChange":"frameChange").trigger("loaded").trigger("opening");n.call(g)}});e.append(y);m.push(q);setTimeout(function(z,R){return function(){z.attr({src:R})}}(y,q),0)}c(Ua,m)},tick:function(g){var b=d(J);if(V){var e=b-d(Xa)/B(D)*V;b=!(b*e<=0||b<w(e))&&c(J,b>w(d(va))?e:(V=H=0))}Ba.text(d(a.monitor));b&&V++;H&&H++;cb(0);Da=true;if(H&&!b)return n.call(g);if(d(fa))return n.call(g,L());e=d(aa)*oa(1,d(F));var k=(d(Ea)?b:w(d(va))+b)/B(D);b=d(p);e=c(p,
b-k*e);n.call(g);e!=b&&f.trigger("fractionChange")},opening:function(){var g=a.entry||a.speed,b=d(p),e=a.opening;c(p,b-g*a.opening);c(ba,e*B(D));E.bind(G,u.opening_tick)},opening_tick:function(g){var b=(a.entry||a.speed)/B(D)*(a.cw?-1:1),e=d(p);c(p,e+b);b=c(ba,d(ba)-1);f.trigger("fractionChange");n.call(g);if(!(b>1)){E.unbind(G,u.opening_tick);Hb()}},play:function(g){var b=c(Fa,true);c(Ea,!b);db();n.call(g)},pause:function(g){c(Fa,false);L();n.call(g)},stop:function(g){var b=c(Ea,true);c(Fa,!b);n.call(g)},
down:function(g,b,e,k){if(a.draggable){c(fa,d(C));c(J,0);ga=ha(b,e,d(p),d(Z),d(A));L();ca();if(!k){da.css({cursor:na(Ib)+", "+Aa}).bind(ya,function(j){f.trigger("slide",[j.clientX,j.clientY]);n.call(j);return false});a.clickfree||da.bind(xa,function(j){f.trigger("up");n.call(j)})}}n.call(g)},up:function(g,b){if(!a.draggable)return n.call(g);c(fa,false);c(T,false);var e=c(J,!a.throwable?0:w(W[0]+W[1])/60);V=e?1:0;e?db():L();ca();!b&&da.unbind(xa).unbind(ya)&&d(Za).css({cursor:na($a)+", "+Aa});n.call(g)},
slide:function(g,b,e){if(a.draggable&&Da){Da=false;L();var k={x:b-ga.x,y:e-ga.y};if(w(k.x)>0||w(k.y)>0){ga={x:b,y:e};var j=d(Z),l=d(eb),m=d(K),o=c(p,fb(m?e-l.y:b-l.x,d(Ga),j,d(Ha),d(Ia),d(aa)));c(T,d(T)||d(C)!=d(fa));(k=cb(m?k.y:k.x||0))&&c(F,k<0);if(a.orbital&&d(wa)){c(K,w(e-l.y)>w(b-l.x));l=ha(b,e,o,j,d(A))}if(a.rows>1){k=d(I).y;m=d(gb);var q=-m*k;c(A,h.reel.math.envelope(e-l.y,m,k,q,q+k,-1))}!(o%1)&&!a.loops&&ha(b,e,o,j,d(A));f.trigger("fractionChange")}}n.call(g)},wheel:function(g,b){var e=Ra(Jb(w(b))/
2);e=oa(e,b>0);b=0.2*d(Z);ha(s,s,d(p),b,d(A));c(p,fb(e,d(Ga),b,d(Ha),d(Ia),d(aa)));e&&c(F,e<0);c(J,0);L();n.call(g);f.trigger("fractionChange");return false},fractionChange:function(g,b){b=!b?d(p):c(p,b);b=c(p,a.loops?b-M(b):P(0,1,b));var e=c(C,1+M(b/d($))),k=a.rows>1,j=a.orbital;c(wa,!!j&&(e<=j||e>=a.footage-j+2));if(!a.loops&&a.rebound){!H&&!(b%1)?Ja++:(Ja=0);Ja>=a.rebound*1E3/B(D)&&c(F,!d(F))}f.trigger(k?"rowChange":"frameChange");n.call(g)},rowChange:function(g,b){var e=d(p)/d($)+1;b=c(A,P(0,
1,b!=s?(b-1)/(a.rows-1):d(A)));b=P(0,a.rows-1,M(b*a.rows));c(C,M(e+b*a.frames));n.call(g);f.trigger("frameChange")},frameChange:function(g,b){var e=!b?d(p):c(p,d($)*(b-1)),k=d(hb);b=c(hb,c(C,U(b?b:d(C))));var j=a.images,l=a.footage,m=d(I),o=a.rows>1,q=a.horizontal;if(d(K)){b=a.inversed?l+1-b:b;b+=l}var y=(d(K)?m.y:m.x)-a.indicator,z=P(0,y,U(h.reel.math.interpolate(d(p),-1,y+2)));z=!a.cw||a.stitched?z:y-z;h(la(Ka+".x"),d(ua)).css(d(K)?{left:0,top:z}:{left:z,top:m.y-a.indicator});if(o){o=m.y-a.indicator;
o=P(0,o,U(h.reel.math.interpolate(d(A),-1,o+2)));h(la(Ka+".y"),d(ua)).css({top:o})}if(b!=k)if(j.length)f.attr({src:a.path+j[b-1]});else{if(a.stitched)j=[-U(e*d(Wa))+N,0+N];else{e=b%l-1;e=e<0?l-1:e;l=M((b-0.1)/l);l+=a.rows>1?0:d(F)?0:d(sa);b=d(Va);l=l*((q?m.y:m.x)+b);m=e*((q?m.x:m.y)+b);j=j.length?[0,0]:q?[-m+N,-l+N]:[-l+N,-m+N]}f.css({backgroundPosition:j.join(qa)})}n.call(g)}},n=function(g){ib||delete this;return g},H,V=0,db=function(){return H=0},L=function(){clearTimeout(jb);E.unbind(G,u.opening_tick);
f.trigger("play");return H=-a.timeout*B(D)},jb,Hb=function(){jb=setTimeout(function(){f.trigger("play")},a.delay*1E3||0)},Ba,Ca,ab=function(g){return h(S,{"class":[Ka,g].join(qa),css:{width:a.indicator,height:a.indicator,overflow:bb,top:d(I).y-a.indicator,left:0,position:ea,backgroundColor:za}})},Ja=0,ga={x:0,y:0},cb=function(g){return W.push(g)&&W.shift()&&g},ca=function(){return W=[0,0]},W=ca(),fb=a.graph||h.reel.math[a.loops?"hatch":"envelope"],ha=function(g,b,e,k,j){c(Ga,e);c(gb,j);c(Ha,a.loops?
0:-e*k);c(Ia,a.loops?k:k-e*k);return g&&c(eb,{x:g,y:b})||s},Da=true,da=h.browser.opera?E:h.unique(E.add(kb.top.document));u.setup()});ia=ia||function f(){var t=+new Date,c=B(D);if(c){E.trigger(G);h.reel.cost=(+new Date+h.reel.cost-t)/2;return ia=setTimeout(f,Q(4,1E3/c-h.reel.cost))}else return ia=s}();return h(v)};h.reel.math={envelope:function(i,a,v,f,t,c){return a+Q(f,La(t,-i*c))/v},hatch:function(i,a,v,f,t,c){i=(i<f?t:0)+i%t;i=a+-i*c/v;return i-M(i)},interpolate:function(i,a,v){return a+i*(v-a)}};
h.reel.touchy=/iphone|ipod|ipad|android/i.test(navigator.userAgent);h.reel.lazy=/iphone|ipod|android/i.test(navigator.userAgent);h.reel.instances=h();h.reel.cost=0;h.reel.leader=B;pb("mousewheel disableTextSelect enableTextSelect".split(/ /));var E=h(ja);ja=+h.browser.version.split(".").slice(0,2).join(".");var ib=h.browser.msie,nb=!(ib&&ja<8),Aa="ew-resize",ia,x="jquery-reel",rb=x+"-overlay",Ka=x+"-indicator",Fb=x+"-preloader",Eb=x+"-monitor",tb=x+"-interface",Gb=ka("CAAIAIAAAAAAAAAAACH5BAEAAAAALAAAAAAIAAgAAAIHhI+py+1dAAA7")||
ma("blank.gif"),$a=ka("EAAQAJECAAAAAP///////wAAACH5BAEAAAIALAAAAAAQABAAQAI3lC8AeBDvgosQxQtne7yvLWGStVBelXBKqDJpNzLKq3xWBlU2nUs4C/O8cCvU0EfZGUwt19FYAAA7")||ma("jquery.reel.cursor-drag.gif"),Ib=ka("EAAQAJECAAAAAP///////wAAACH5BAEAAAIALAAAAAAQABAAQAIslI95EB3MHECxNjBVdE/5b2zcRV1QBabqhwltq41St4hj5konmVioZ6OtEgUAOw==")||ma("jquery.reel.cursor-drag-down.gif"),U=Math.round,M=Math.floor,Ra=Math.ceil,La=Math.min,Q=Math.max,w=Math.abs,Jb=Math.sqrt,Y=parseInt,Za="area",Ya="backup",F="backwards",$="bit",Xa="brake",
wa="center",fa="clicked",eb="clicked_location",Ga="clicked_on",gb="clicked_row",aa="cwish",I="dimensions",p="fraction",C="frame",hb="_frame",Qa="frames",Ia="hi",bb="hidden",Ta="image",Ua="images",ba="opening_ticks",Ha="lo",Fa="playing",T="reeling",Z="revolution",A="row",sa="rows",Va="spacing",va="speed",ua="stage",ra="steps",ta="stitched",Wa="stitched_travel",Ea="stopped",D="tempo",J="velocity",K="vertical",sb="wheel_step",r=".reel",zb="dblclick"+r,Bb="mousedown"+r,Ab="mouseenter"+r,Cb="mouseleave"+
r,ya="mousemove"+r,xa="mouseup"+r,yb="mousewheel"+r,G="tick"+r,xb="touchcancel"+r,wb="touchend"+r,ub="touchstart"+r,vb="touchmove"+r,Pa="",qa=" ",ea="absolute",S=ob("div"),Oa="height",za="#000",O="id",qb="img",N="px",Ma="src",Db="title",Na="width"}(jQuery,window,document);
