class Moovie{constructor(e){let t={selector:"defaultId",dimensions:{width:"100%"},config:{storage:{captionOffset:!1,playrateSpeed:!1,captionSize:!1},controls:{playtime:!0,mute:!0,volume:!0,subtitles:!0,config:!0,fullscreen:!0,submenuCaptions:!0,submenuOffset:!0,submenuSpeed:!0,allowLocalSubtitles:!0},i18n:{play:"(Play:Pause)",mute:"(Mute:Unmute)",subtitles:"(Enable:Disable) Subtitles",config:"Settings",fullscreen:"(Enter:Exit) Fullscreen",main_topic:"settings:",main_caption:"Captions",main_offset:"Caption Offset",main_speed:"Speed",main_disabled:"Disabled",main_default:"Default",caption_topic:"Captions:",caption_back:"Back",caption_load:"Load Locally",offset_topic:"Adjust Caption Offset",speed_topic:"Speed Adjust"}},icons:{path:"./icons/"},customEvents:[{type:"",to:"",starttime:"",endtime:"",content:"",position:"",class:""}]};var i=Math.floor(1e4*Math.random())+0;for(var n in void 0==e.config?e.config=t.config:e.config,void 0==e.config.controls?e.config.controls=t.config.controls:e.config.controls,t.config.controls)void 0==e.config.controls[n]?e.config.controls[n]=t.config.controls[n]:e.config.controls[n]=e.config.controls[n];for(var n in void 0==e.config.storage?e.config.storage=t.config.storage:e.config.storage,t.config.storage)void 0==e.config.storage[n]?e.config.storage[n]=t.config.storage[n]:e.config.storage[n]=e.config.storage[n];for(var n in void 0==e.config.i18n?e.config.i18n=t.config.i18n:e.config.i18n,t.config.i18n)void 0==e.config.i18n[n]?e.config.i18n[n]=t.config.i18n[n]:e.config.i18n[n]=e.config.i18n[n];this.selector=e.selector.substring(1)||t.selector.substring(1),this.dimensions=e.dimensions||t.dimensions,this.config=e.config||t.config,this.i18n=e.config.i18n||t.config.i18n,this.icons=e.icons||t.icons,this.customEvents=e.customEvents||t.customEvents,this.element=document.getElementById(this.selector),this.randomID=i,this.options=e||t,this.events={captions:{name:!1,subtitles:!1},offset:{value:!1}};var o,s,l,a,r,c,d,u,m,p,v,g,f,y,h,b,$,E,_,L,k,I,S,B,x,T,w,C,M=this,A=0,O=0,H=0,F=1,P=0,j=0,z=0,D=0,q=[],R=this.icons,V=this.config,W=this.dimensions,N=this.selector,K=this.customEvents,G=this.mainmenu=[{name:"play_button",element:"<button class='player__button toggle' id='tooglebutton_"+i+"'><img id='moovie_bplay_"+i+"' src='"+R.path+"play.svg'></button>",opcional:!1,tooltip:this.i18n.play},{name:"progress_bar",element:"<div class='moovie_cuetime' id='moovie_cue_timer_"+i+"'>loading...</div><div id='moovie_moovie_el_progressbar_"+i+"' class='moovie_progress player__slider' top:15px;><input type='range' id='range_progress_"+i+"' class='styled-slider slider-progress' min='0' value='0' step='0.01' autocomplete='off' style='width: 100%; cursor:pointer;' /><canvas id='moovie_buffered_"+i+"' style='position: absolute; bottom: 14px; left: 0; opacity: 0.4;  width: 100%; height:5px;'></canvas></div>",opcional:!1,tooltip:!1},{name:"playtime",element:"<div id='moovie_el_current_"+i+"' class='player__button player_button_disabled moovie_currentime'><span id='moovie_currentime_"+i+"'>00:00</span> / <span id='moovie_fulltime_"+i+"'></span></div>",opcional:!0,tooltip:!1},{name:"mute",element:"<button id='mooviegrid_mute_"+i+"' class='player__button'><img id='icon_volume_"+i+"' src='"+R.path+"volume.svg'></button>",opcional:!0,tooltip:this.i18n.mute},{name:"volume",element:"<input type='range' id='mooviegrid_volume_"+i+"' style='max-width:100px; min-width:50px;' name='volume' class='moovie_progress_sound' min=0 max='1' step='0.01' value='1'>",opcional:!0,tooltip:!1},{name:"subtitles",element:"<button id='moovie_subtitle_"+i+"' style='margin-left:5px' class='player__button'><img class='opacity_svg' id='moovie_subtitle_svg_"+i+"' src='"+R.path+"cc.svg'></button>",opcional:!0,tooltip:this.i18n.subtitles},{name:"config",element:"<button id='moovie_el_cog_"+i+"' class='player__button'><img src='"+R.path+"cog.svg'></button>",opcional:!0,tooltip:this.i18n.config},{name:"fullscreen",element:"<button id='fullscreen_"+i+"' class='player__button fullscreen_button'><img src='"+R.path+"fullscreen.svg'></button>",opcional:!0,tooltip:this.i18n.fullscreen},{name:"Main Submenu",element:"<div style='display:none;' class='moovie_submenu menuclosed' id='moovie_submenu_"+i+"'></div>",opcional:!1,tooltip:!1}],U=this.submenu={mainSubmenu:{mainElement:"<ul id='moovie_submenu_main_"+i+"'></ul>",parentID:"moovie_submenu_main_",elements:[{name:"topic",element:"<li class='topic_submenu'>"+this.i18n.main_topic+"</li>",opcional:!1},{name:"submenuCaptions",element:"<li id='this.moovie_el_topicCaption_"+i+"'><span>"+this.i18n.main_caption+"</span><span class='option_submenu' id='option_submenu_caption_"+i+"'>"+this.i18n.main_disabled+"</span></li>",opcional:!0},{name:"submenuOffset",element:"<li id='moovie_el_capoffset_"+i+"'><span >"+this.i18n.main_offset+"</span><span class='option_submenu' id='option_submenu_range_"+i+"'>0s</span></li>",opcional:!0},{name:"submenuSpeed",element:"<li id='topic_submenu_speed_"+i+"'><span>"+this.i18n.main_speed+"</span><span class='option_submenu' id='option_submenu_speed_"+i+"'>"+this.i18n.main_default+"</span></li>",opcional:!0}]},captionSubmenu:{mainElement:"<ul style='display:none;' id='moovie_submenu_captions_"+i+"'><input style='display:none;' type='file' id='localsub_"+i+"'><li class='topic_submenu'>"+this.i18n.caption_topic+"</li><li id='moovie_el_capback_"+i+"' style='font-weight:bold;'>"+this.i18n.caption_back+"</li></ul>",parentID:"moovie_submenu_captions_",elements:[{name:"allowLocalSubtitles",element:"<li id='locally_"+i+"' style='font-weight:bold;'>"+this.i18n.caption_load+"</li>",opcional:!0}]},rangeSubmenu:{mainElement:"<ul style='display:none; width:250px;' id='moovie_range_captions_"+i+"'><li class='topic_submenu'>"+this.i18n.offset_topic+"<output style='position:absolute; right:22px;' id='valoffset_"+i+"'>0</output></li><li class='topic_submenu'><span>-5s</span><span style='float: right;'>+5s</span><input type='range' oninput='valoffset_"+i+".value = offset_range_input_"+i+".value' id='offset_range_input_"+i+"' min='-5' max='5' step='0.2'></li>",parentID:"moovie_range_captions_"},speedSubmenu:{mainElement:"<ul style='display:none; width:250px;' id='moovie_range_speed_"+i+"'><li class='topic_submenu'>"+this.i18n.speed_topic+"<output style='position:absolute; right:22px;' id='valoffset_speed_"+i+"'>1</output></li><li class='topic_submenu'><span>0.1x</span><span style='float: right;'>8x</span><input type='range' value='1' oninput='valoffset_speed_"+i+".value = offset_range_speed_"+i+".value' id='offset_range_speed_"+i+"' min='0.1' max='8' step='0.1'></li>",parentID:"moovie_range_speed_"}};let X=new CustomEvent("captionchange",{detail:this.events.captions,bubbles:!1,cancelable:!1,composed:!1}),Y=new CustomEvent("offsetchange",{detail:this.events.offset,bubbles:!1,cancelable:!1}),J=new CustomEvent("togglecaption",{detail:this.events.captions,bubbles:!1,cancelable:!1});function Q(e,t){var i;return function(){var n=arguments,o=function(){i=!1};i||(e.apply(this,n),i=!0,setTimeout(o,t))}}function Z(e){M.video.currentTime=e,M.moovie_el_progressbar.value=e}var ee=this.handleCustomEvents=function e(){for(var t=0;t<K.length;t++){let i=K[t].to,n=Math.floor(1e4*Math.random())+0;if(K[t].hasOwnProperty("fired")&&K[t].fired)s.currentTime>K[t].endtime&&(K[t].fired=!1,document.getElementById("moovie_ce_"+K[t].eventID).remove());else if(s.currentTime>K[t].starttime&&s.currentTime<K[t].endtime){Object.assign(K[t],{fired:!0}),Object.assign(K[t],{eventID:n}),I.insertAdjacentHTML("beforeend","<div id='moovie_ce_"+n+"' class='moovie_cevent "+K[t].position+" "+K[t].class+"'>"+K[t].content+"</div>");let o=document.getElementById("moovie_ce_"+n);switch(K[t].type){case"skip":K[t].to<=s.duration&&!isNaN(K[t].to)&&K[t].to&&o.addEventListener("click",function(){Z(i)});break;case"redirect":K[t].to&&o.addEventListener("click",function(){window.location.href=i});break;case"function":K[t].to&&o.addEventListener("click",function(){i()});break;default:console.log("No action was added to this event")}}}},et=this.handleStorage=function e(t,n,o){switch(t){case"set":localStorage.setItem(n,o);break;case"get":break;case"setStorage":V.storage.captionOffset&&(v.value=localStorage.getItem("captionOffset"),ey()),V.storage.playrateSpeed&&(p.value=localStorage.getItem("playrateSpeed"),eh()),V.storage.captionSize&&(document.getElementById("caption_track_"+i).style.fontSize=localStorage.getItem("captionSize")+"px")}},ei=this.togglePlay=function e(){document.getElementById("poster_layer_"+i).style.backgroundImage="none",!0==s.paused?(s.play(),document.getElementById("moovie_bplay_"+i).src=R.path+"pause.svg",el("hide"),e_("play_button",1)):(s.pause(),document.getElementById("moovie_bplay_"+i).src=R.path+"play.svg",el("show"),e_("play_button",0))},en=this.SetFullScreen=function e(t){switch(t){case"toggleFullscreen":b.requestFullscreen?b.requestFullscreen():b.webkitRequestFullscreen?b.webkitRequestFullscreen():b.msRequestFullscreen&&b.msRequestFullscreen(),e_("fullscreen",1),1>=outerHeight-innerHeight&&(document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen(),e_("fullscreen",0)),eI("CAll");break;case"checkFullscreen":1>=outerHeight-innerHeight?e_("fullscreen",1):e_("fullscreen",0)}};function eo(){var e,t,i=a.getContext("2d"),n=M.video.buffered,o=n.length,s=a.width,l=a.height,r=M.video.duration;for(i.clearRect(0,0,s,l),i.fillStyle="#e1e1dd";o--;)e=n.start(o)/r*s,t=n.end(o)/r*s,i.fillRect(e,0,t-e,l);setTimeout(eo,500)}function es(){s.focus()}function el(e){"show"==e?(S.style.display="block",S.classList.remove("posteroff"),S.classList.add("posteron")):"hide"==e&&(S.style.display="none",S.classList.remove("posteron"),S.classList.add("posteroff"))}function ea(){s.currentTime+=parseFloat(this.dataset.skip)}function er(){s[this.name]=this.value}function ec(e,t){switch(t){case"left":var i=s.currentTime;s.currentTime=i-e;var n=T.value;T.value=Number(n)-5;break;case"right":var i=s.currentTime;s.currentTime=i+e;var n=T.value;T.value=Number(n)+5}}function ed(e){return e.offsetX/e.target.clientWidth*parseInt(e.target.getAttribute("max"))}function eu(e){H=ed(e).toFixed(2),h.style.opacity="1",h.style.left=e.offsetX+"px",h.innerHTML=ev(H)}function em(){return/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)}function ep(){let e=navigator.userAgent;return/android/i.test(e)?"android":/iPad|iPhone|iPod/i.test(e)?"ios":void 0}function ev(e){var t=new Date(1970,0,1);t.setSeconds(e);var i=t.toTimeString().substr(0,8);return e>86399&&(i=Math.floor((t-Date.parse("1/1/70"))/36e5)+i.substr(2)),e<3600&&(i=i.substring(3)),i}function e8(){0==j&&(document.getElementById("moovie_currentime_"+i).innerHTML=ev(s.currentTime)),s.currentTime>=s.duration&&(s.currentTime=0,T.value=0,ei())}function eg(){let e=[".vtt",".srt"],t=e=>new Promise((t,i)=>{let n=new FileReader;n.readAsDataURL(e),n.onload=()=>t(n.result),n.onerror=e=>i(e)});new Promise(async function(n,o){let s=document.querySelector("#localsub_"+i).files[0];var l=s.name.substr(s.name.length-4);if(e.includes(l)){document.querySelectorAll("#moovie_submenu_captions_"+i+" .caption_track").forEach(e=>{e.remove()});let a=await t(s),r=s.name.substring(0,10);document.getElementById(N).insertAdjacentHTML("beforeend","<track label='"+r+"...' format='"+l+"' srclang='Local' src='"+a+"'>"),n()}else console.log("Only .vtt and .srt formats are allowed.")}).then(function(){ew(),console.log("Local caption added successfully.")})}var ef=Q(function(){if(eo(),!s.paused){var e=T.value;T.value=Number(e)+1}},1e3),ey=this.OffsetChange=function e(){z=document.getElementById("offset_range_input_"+i).value,document.getElementById("option_submenu_range_"+i).innerHTML=z+"s",document.getElementById("valoffset_"+i).value=z,V.storage.captionOffset&&et("set","captionOffset",z),M.events.offset.value=z,M.video.dispatchEvent(Y)},eh=this.SpeedChange=function e(){F=document.getElementById("offset_range_speed_"+i).value,document.getElementById("valoffset_speed_"+i).value=F,1==F?document.getElementById("option_submenu_speed_"+i).innerHTML=M.i18n.main_default:document.getElementById("option_submenu_speed_"+i).innerHTML=F+"x",s.playbackRate=F,V.storage.playrateSpeed&&et("set","playrateSpeed",F)};function eb(e){if(em()){var t=document.getElementById("range_progress_"+i).value;if(void 0==t){let n=(t=e.touches[0].clientX)/$.offsetWidth*s.duration;n>=s.duration&&(n=s.duration),s.currentTime=n}else s.currentTime=t}else{var t=e.offsetX;let o=t/$.offsetWidth*s.duration;o>=s.duration&&(o=s.duration),s.currentTime=o}}function e$(e){s.volume=m.value,et("set","scrubsound",s.volume),ek("checkMute")}function eE(e){"close"==e?0==D&&!1==s.paused&&(eI("CAll"),document.getElementById("moovie__controls_"+i).style.opacity=0,document.getElementById("caption_track_"+i).style.marginBottom="0px"):"open"==e&&1==O&&(document.getElementById("caption_track_"+i).style.marginBottom="40px",document.getElementById("moovie__controls_"+i).style.opacity=1)}var e_=M.ChangeTooltip=function e(t,i){let n=M.tooltips_menu[t].element;for(var s=0,l=0;l<M.mainmenu.length;l++)M.mainmenu[l].name==t&&(s=M.mainmenu[l].tooltip);if(s.indexOf("(")>-1){o=s.substring(s.lastIndexOf("(")+1,s.lastIndexOf(")")).split(":");var a=s.replace(/\(.*\)/,"");a=a.replace(" ","");var r=o[i]+" "+a}r&&(n.innerText=r);let c=n.offsetWidth/2-7;if(n.style.marginLeft="-"+c+"px",n.offsetLeft+n.offsetWidth>=M.moovie_el_controlbar.offsetWidth){let d=n.offsetLeft+n.offsetWidth-M.moovie_el_controlbar.offsetWidth;d=c+d+5,n.style.marginLeft="-"+d+"px"}n.offsetLeft<=0&&(n.style.marginLeft="-19px")},eL=this.ActivateSubtitles=function e(){1==P?0==A?(A=1,document.getElementById("moovie_subtitle_svg_"+i).classList.remove("opacity_svg"),e_("subtitles",1),M.events.captions.subtitles=!0):1==A&&(A=0,document.getElementById("moovie_subtitle_svg_"+i).classList.add("opacity_svg"),e_("subtitles",0),M.events.captions.subtitles=!1):console.log("You must choose an Subtitle first."),M.video.dispatchEvent(J)},ek=this.checkSoundLevel=function e(t){switch(t){case"checkMute":s.muted||0==s.volume?(s.muted=!1,m.value=localStorage.getItem("scrubsound"),s.volume=localStorage.getItem("scrubsound"),document.getElementById("icon_volume_"+i).src=R.path+"mute.svg",e_("mute",1)):(document.getElementById("icon_volume_"+i).src=R.path+"volume.svg",e_("mute",0));break;case"toogleMute":!0==s.muted?e("unmutePlayer"):e("mutePlayer");break;case"checkStorage":localStorage.getItem("scrubsound")?(m.value=localStorage.getItem("scrubsound"),s.volume=localStorage.getItem("scrubsound")):(m.value="1",s.muted=!1,et("set","scrubsound",1)),e("checkMute");break;case"mutePlayer":s.muted=!0,s.volume=0,document.getElementById("icon_volume_"+i).src=R.path+"mute.svg",document.getElementById("mooviegrid_volume_"+i).value="0",e_("mute",1);break;case"unmutePlayer":s.muted=!1,e("checkMute"),localStorage.getItem("scrubsound")?m.value=localStorage.getItem("scrubsound"):m.value="1",e_("mute",0),0!=s.volume&&(document.getElementById("icon_volume_"+i).src=R.path+"volume.svg")}},eI=this.Submenu=function e(t){switch(t){case"toggleSubmenu":C.style.display="block",w.style.display="none",y.style.display="none",g.style.display="none",B.classList.contains("menuclosed")?(B.style.display="block",B.classList.add("menuopen"),B.classList.remove("menuclosed"),D=1):(B.style.display="none",B.classList.add("menuclosed"),B.classList.remove("menuopen"),D=0);break;case"CAll":C.style.display="none",w.style.display="none",y.style.display="none",g.style.display="none",B.classList.add("menuclosed"),D=0;break;case"OCaption":C.style.display="none",w.style.display="block";break;case"CCaption":C.style.display="block",w.style.display="none";break;case"OSpeed":C.style.display="none",document.getElementById("moovie_range_speed_"+i).style.display="block";break;case"ORange":C.style.display="none",document.getElementById("moovie_range_captions_"+i).style.display="block"}},eS=this.TransformPlayer=function e(t){I.offsetWidth<=460?(j=1,document.getElementById("moovie_el_current_"+i).style.display="none",document.getElementById("moovie_moovie_el_progressbar_"+i).classList.add("responsive_bar"),h.classList.add("moovie_cuetime_small")):(j=0,document.getElementById("moovie_el_current_"+i).style.display="block",document.getElementById("moovie_moovie_el_progressbar_"+i).classList.remove("responsive_bar"),document.getElementById("moovie_fulltime_"+i).innerHTML=ev(s.duration),h.classList.remove("moovie_cuetime_small"))},eB=this.SetCaptionSize=function e(t){let n=document.getElementById("caption_track_"+i);var o=window.getComputedStyle(n).fontSize;if(t)"sizeUp"==t?(o=Number(o=o.slice(0,-2))+Number(1),n.style.fontSize=o+"px"):"sizeDown"==t&&(o=Number(o=o.slice(0,-2))-Number(1),n.style.fontSize=o+"px"),V.storage.captionSize&&et("set","captionSize",o);else{var s=.1*I.offsetWidth;n.style.fontSize=s+"%",n.style.lineHeight=s/3+"px"}},ex=this.PlayCaption=function e(t){function n(e){var t=function(e,t){return("000"+e).slice(-1*t)},i=parseFloat(e).toFixed(3),n=Math.floor(i/60)%60,o=i.slice(-3);return t(Math.floor(i/60/60),2)+":"+t(n,2)+":"+t(Math.floor(i-60*n),2)+"."+t(o,3)}function l(){for(var e=1;e<q.length;e++)if(void 0!=q[e].starttime&&void 0!=q[e].endtime){var t=q[e].starttime,o=q[e].endtime;if(z>=0)var l=s.currentTime-z;else var a=String(z).substring(1),l=s.currentTime+Number(a);(l=n(l))>=t&&l<=o&&1==A&&(void 0!=q[e].text2?document.getElementById("caption_track_"+i).innerHTML=q[e].text1+"<br>"+q[e].text2:document.getElementById("caption_track_"+i).innerHTML=q[e].text1),l>o&&(document.getElementById("caption_track_"+i).innerHTML="")}}q=[];var a=new XMLHttpRequest;if(a.open("GET",t.attributes.src.nodeValue,!0),t.attributes.format)var r=t.attributes.src.nodeValue+t.attributes.format.nodeValue;else var r=t.attributes.src.nodeValue;M.events.captions.name=t.attributes.label.nodeValue,a.onload=function(){if(this.status>=200&&this.status<400){var e=this.response;e=e.replace(/(\r\n|\r|\n)/g,"\n");var t=r.substr(r.length-4);".srt"==t&&(e="STR\n\n"+e),e.split("\n\n").map(function(e){if(void 0!=(o=e.split("\n"))[1]){if(isNaN(o[0])){var i=o[0].replace(/-/g,""),n=i;if(n=n.replace(/ /g,"")){".srt"==t&&(i=o[0].replace(/,/g,"."));var s=i.substr(0,i.indexOf(">"));s=s.replace(/ /g,"");var l=i.split(">",2);l=l[1].replace(/ /g,""),s=s.replace(/--/g,""),l=l.replace(/--/g,""),".srt"==t&&(l=l.replace(/,/g,"."),s=s.replace(/,/g,".")),q.push({starttime:s,endtime:l,text1:o[1],text2:o[2]})}}else{var i=o[1].replace(/-/g,""),n=i;if(n=n.replace(/ /g,"")){var s=i.substr(0,i.indexOf(">"));s=s.replace(/ /g,"");var l=i.split(">",2);l=l[1].replace(/ /g,""),".srt"==t&&(l=l.replace(/,/g,"."),s=s.replace(/,/g,".")),q.push({starttime:s,endtime:l,text1:o[2],text2:o[3]})}}}else q.push({starttime:void 0,endtime:void 0,text1:void 0,text2:void 0})})}},a.send(),s.addEventListener("timeupdate",l,!0),1==P?s.removeEventListener("timeupdate",l,!0):(P=1,eL()),M.video.dispatchEvent(X)},eT=this.SetCaptions=function e(t){let n=t.attributes.src.nodeValue.substr(t.attributes.src.nodeValue.length-4),o=t.track.label;var s=Math.floor(1e4*Math.random())+0;t.attributes.format&&(n=t.attributes.format.nodeValue),w.insertAdjacentHTML("beforeend","<li class='caption_track' id='captionid_"+s+"'><span>"+o+"</span><span class='labelformat'>"+n+"</span></li>"),document.getElementById("captionid_"+s).addEventListener("click",function(){ex(t),document.getElementById("option_submenu_caption_"+i).innerHTML=o,eI("toggleSubmenu")})},ew=this.GetCaptions=function e(){for(var t=document.getElementById(M.selector).getElementsByTagName("track"),i=0;i<t.length;i++)M.SetCaptions(t[i])},eC=this.Keybinds=function e(){let t={keycode_32(){ei()},keycode_75(){ei()},keycode_70(){en("toggleFullscreen")},keycode_39(){ec(5,"right")},keycode_37(){ec(5,"left")},keycode_77(){ek("toogleMute")},keycode_67(){eL()},keycode_shift87(){eB("sizeUp")},keycode_shift83(){eB("sizeDown")}};s.addEventListener("keydown",function(e){let i;(32==e.keyCode||e.shiftKey&&87==e.keyCode||e.shiftKey&&83==e.keyCode)&&e.preventDefault(),(i=e.shiftKey?t["keycode_shift"+e.keyCode]:t["keycode_"+e.keyCode])&&i()})},eM=this.SetupLogic=function e(){if(s=(b=document.querySelector("#moovie__video_"+i)).querySelector("#moovie_vid_"+i),this.video=s,s.addEventListener("loadedmetadata",e=>{this.medialoading.style.display="none",x.style.opacity=1,O=1,T.setAttribute("max",s.duration),0==j&&(document.getElementById("moovie_fulltime_"+i).innerHTML=ev(s.duration)),eo(),et("setStorage"),ek("checkStorage")}),s.addEventListener("timeupdate",ef),s.addEventListener("timeupdate",e8),s.addEventListener("timeupdate",ee),b.addEventListener("click",es),(L=b.querySelector(".fullscreen_button")).addEventListener("click",function(){en("toggleFullscreen")},!0),document.addEventListener("fullscreenchange",function(){en("checkFullscreen")},!0),(E=b.querySelector(".toggle")).addEventListener("click",ei),(_=b.querySelectorAll(".player__slider")).forEach(e=>e.addEventListener("change",er)),this.moovie_el_rangeinput.addEventListener("change",ey),this.moovie_el_speedinput.addEventListener("change",eh),m=document.getElementById("mooviegrid_volume_"+i),document.getElementById("mooviegrid_mute_"+i).addEventListener("click",function(){ek("toogleMute")},!1),$=b.querySelector(".moovie_progress"),this.control_buttons.config.addEventListener("click",function(){eI("toggleSubmenu")},!0),this.moovie_el_topicCaption.addEventListener("click",function(){eI("OCaption")},!0),this.moovie_el_topicSpeed.addEventListener("click",function(){eI("OSpeed")},!0),this.moovie_el_capback.addEventListener("click",function(){eI("CCaption")},!0),this.control_buttons.subtitles.addEventListener("click",eL),I.addEventListener("mouseleave",function(){eI("CAll")},!1),this.moovie_el_capoffset.addEventListener("click",function(){eI("ORange")},!0),em()){"ios"==ep()&&(this.moovie_el_volume.style.display="none",L.style.display="none",s.style.transformStyle="preserve-3d"),T.addEventListener("touchmove",function(e){eb(e),s.pause()}),T.addEventListener("change",function(e){eb(e),s.pause()||ei(),el("hide")},!1),S.addEventListener("touchend",function(e){s.pause()||ei()}),m.addEventListener("touchmove",function(e){e$(e)}),m.addEventListener("change",function(e){e$(e)},!1),u.style.display="none";var t=null;I.addEventListener("touchstart",e=>{clearTimeout(t),eE("open"),t=setTimeout(function(){eE("close")},4e3)}),I.addEventListener("touchmove",e=>{clearTimeout(t)}),I.addEventListener("touchend",e=>{clearTimeout(t),t=setTimeout(function(){eE("close")},4e3)})}else{let n=!1;$.addEventListener("click",eb),$.addEventListener("mousemove",e=>n&&eb(e)),m.addEventListener("click",e$);let o=!1;m.addEventListener("mousemove",e=>o&&e$(e)),m.addEventListener("mousedown",()=>o=!0),m.addEventListener("mouseup",()=>o=!1),(S=b.querySelector("#poster_layer_"+i)).addEventListener("click",ei),s.addEventListener("click",ei),u.addEventListener("click",function(){f.click()},!0),f.addEventListener("change",eg),document.getElementById("range_progress_"+i).addEventListener("mousemove",function(e){eu(e)}),document.getElementById("range_progress_"+i).addEventListener("mouseleave",function(e){h.style.opacity=0}),$.addEventListener("mousedown",()=>n=!0),$.addEventListener("mouseup",()=>n=!1),x.addEventListener("mouseover",e=>{D=1}),x.addEventListener("mouseleave",e=>{D=0}),T.addEventListener("input",function(e){s.pause()},!1),T.addEventListener("change",function(e){ei(),el("hide")},!1),eE("close");var t=null;I.addEventListener("mousemove",e=>{clearTimeout(t),eE("open"),t=setTimeout(function(){eE("close")},2e3)}),I.addEventListener("mouseleave",e=>{clearTimeout(t),eE("close")})}},e6=this.SetupMenu=function e(){for(var t=0;t<G.length;t++)void 0!=this.config.controls[G[t].name]&&!0==this.config.controls[G[t].name]||!1==G[t].opcional?x.insertAdjacentHTML("beforeend",G[t].element):x.insertAdjacentHTML("beforeend","<div style='display:none;'>"+G[t].element+"</div>");for(var n=this.tooltips_menu=[],t=0;t<G.length;t++)if(G[t].tooltip){let o=new DOMParser().parseFromString(G[t].element,"text/html");document.getElementById(o.body.firstChild.id).insertAdjacentHTML("beforeend","<div id='moovie_"+G[t].name+"_tooltip_"+i+"' class='moovie_tooltip'>"+G[t].tooltip+"</div>"),document.getElementById(o.body.firstChild.id);let s=document.getElementById("moovie_"+G[t].name+"_tooltip_"+i);n[G[t].name]={element:s},this.ChangeTooltip(G[t].name,0)}for(let m in B=document.getElementById("moovie_submenu_"+i),U)if(B.insertAdjacentHTML("beforeend",U[m].mainElement),U[m].hasOwnProperty("elements"))for(var t=0;t<U[m].elements.length;t++)void 0!=this.config.controls[U[m].elements[t].name]&&!0==this.config.controls[U[m].elements[t].name]||!1==U[m].elements[t].opcional?document.getElementById(U[m].parentID+i).insertAdjacentHTML("beforeend",U[m].elements[t].element):document.getElementById(U[m].parentID+i).insertAdjacentHTML("beforeend","<div style='display:none;'>"+U[m].elements[t].element);T=document.getElementById("range_progress_"+i),w=document.getElementById("moovie_submenu_captions_"+i),g=document.getElementById("moovie_range_captions_"+i),y=document.getElementById("moovie_range_speed_"+i),this.moovie_el_topicCaption=document.getElementById("this.moovie_el_topicCaption_"+i),this.moovie_el_topicSpeed=document.getElementById("topic_submenu_speed_"+i),this.moovie_el_capback=document.getElementById("moovie_el_capback_"+i),this.moovie_el_capoffset=document.getElementById("moovie_el_capoffset_"+i),this.moovie_el_speedinput=p=document.getElementById("offset_range_speed_"+i),this.moovie_el_rangeinput=v=document.getElementById("offset_range_input_"+i),this.moovie_el_progressbar=T,this.moovie_el_volume=k=document.getElementById("mooviegrid_volume_"+i),this.moovie_el_cuetimer=h=document.getElementById("moovie_cue_timer_"+i),this.moovie_el_submenuBase=B,this.moovie_el_localsub=f=document.getElementById("localsub_"+i),this.moovie_el_locally=u=document.getElementById("locally_"+i),this.moovie_el_submain=C=document.getElementById("moovie_submenu_main_"+i),this.moovie_el_buffered=a=document.getElementById("moovie_buffered_"+i),this.control_buttons={play:this.moovie_el_play=l=document.getElementById("tooglebutton_"+i),mute:this.moovie_el_mute=r=document.getElementById("mooviegrid_mute_"+i),subtitles:this.moovie_el_subtitles=c=document.getElementById("moovie_subtitle_"+i),config:this.moovie_el_cog=document.getElementById("moovie_el_cog_"+i),fullscreen:this.moovie_el_fullscreen=d=document.getElementById("fullscreen_"+i)}},eA=this.SetupPlayer=function e(){var t=this.element.getAttribute("src");null==t&&void 0!=this.element.getElementsByTagName("source")[0]?t=this.element.getElementsByTagName("source")[0].src:console.log("No video source found. Read documentation to a add video source dynamically.");var n=document.getElementById(this.selector).getAttribute("poster");this.element.style.display="none",this.element.insertAdjacentHTML("afterend","<div style='width:"+W.width+"' id='moovie__video_"+i+"' class='moovie'></div>"),this.moovie_el_video=I=document.getElementById("moovie__video_"+i),I.insertAdjacentHTML("beforeend","<video tabindex='1' id='moovie_vid_"+i+"' preload='auto' class='player__video viewer' style='width:100%; height:100%;' src='"+t+"' playsinline></video>"),I.insertAdjacentHTML("beforeend","<div style='opacity:0;' id='moovie__controls_"+i+"' class='moovie_controls'></div>"),this.moovie_el_controlbar=x=document.getElementById("moovie__controls_"+i),I.insertAdjacentHTML("afterbegin","<div id='medialoading_"+i+"' class='loadingv'><div class='loading animated fadeIn'><div class='moovie_bg'></div></div></div><div class='poster_layer posteron' id='poster_layer_"+i+"'></div>"),this.medialoading=document.getElementById("medialoading_"+i),this.moovie_el_poster=S=document.getElementById("poster_layer_"+i),S.insertAdjacentHTML("afterbegin","<div class='poster_center' id='poster_center_"+i+"' style=''></div>"),document.getElementById("poster_center_"+i).insertAdjacentHTML("afterbegin","<div class='poster_button'><img src='"+R.path+"play.svg' style='width: 24px; position: relative; left: 3px;'></div>"),null!=n&&(S.style.backgroundImage="url("+n+")",S.style.backgroundSize="100%",S.style.backgroundPositionY="center"),I.insertAdjacentHTML("beforeend","<div class='moovie_captionspot caption_size'><p class='moovie_caption' id='caption_track_"+i+"'></p></div>"),this.SetupMenu(),this.SetupLogic(),this.GetCaptions(),this.Keybinds(),eB(),eS()};this.SetupPlayer();var eO=Q(function(){eB(),eS()},100);window.addEventListener("resize",eO)}togglePlay(){this.togglePlay()}toggleSubtitles(){this.ActivateSubtitles()}toggleFullscreen(){this.SetFullScreen("toggleFullscreen")}destroy(){this.moovie_el_video.remove()}build(){this.SetupPlayer()}addTrack(e){if(e.options&&"object"==typeof e.options){for(var t,i,n,o,s=Object.keys(e.options).length,l=0;l<s;l++)i=e.options[l].label?"label='"+e.options[l].label+"'":"label='New Subtitle'",n=e.options[l].srclang?"srclang='"+e.options[l].srclang+"'":"srclang='New'",(o=e.options[l].src?"src='"+e.options[l].src+"'":"")?document.getElementById(this.selector).insertAdjacentHTML("beforeend","<track "+i+" "+n+" "+o+">"):console.log("Error, 'src' can not be empty.");document.querySelectorAll("#moovie_submenu_captions_"+this.randomID+" .caption_track").forEach(e=>{e.remove()}),this.GetCaptions(),"function"==typeof e.onComplete&&"function"==typeof(t=e.onComplete)&&t()}else console.error("Options must be and Object. Read documentation.")}change(e){if(e.video&&"object"==typeof e.video){if(e.video.videoSrc&&(this.video.pause(),this.video.src=e.video.videoSrc),e.video.posterSrc&&(this.element.setAttribute("poster",e.video.posterSrc),this.moovie_el_poster.style.backgroundImage="url("+e.video.posterSrc+")"),e.captions&&"object"==typeof e.captions&&e.captions.clearCaptions&&document.querySelectorAll("#moovie_submenu_captions_"+this.randomID+" .caption_track").forEach(e=>{e.remove()}),"function"==typeof e.onComplete){var t;"function"==typeof(t=e.onComplete)&&t()}}else console.error("Options must be and Object. Read documentation.")}get playerElement(){return this.video}get playing(){return Boolean(this.video.ready&&!this.video.paused&&!this.video.ended)}get paused(){return Boolean(this.video.paused)}get stopped(){return Boolean(this.video.paused&&0===this.video.currentTime)}get ended(){return Boolean(this.video.ended)}get duration(){let e=parseFloat(this.video.duration),t=(this.video.media||{}).duration;return e||(t||t===1/0?0:t)}get seeking(){return Boolean(this.video.seeking)}get currentTime(){return Number(this.video.currentTime)}get volume(){return this.video.volume}get muted(){return Boolean(this.video.muted)}get speed(){return Number(this.video.playbackRate)}get minimumSpeed(){return .1}get maximumSpeed(){return 8}get minimumOffset(){return -5}get maximumOffset(){return 5}get source(){return this.video.currentSrc}get captionOffset(){return this.moovie_el_rangeinput.value}set currentTime(e){this.video.currentTime=e,this.moovie_el_progressbar.value=e}set volume(e){this.video.volume=e,this.moovie_el_volume.value=e,this.checkSoundLevel("checkMute")}set speed(e){if(e<-.1||e>8)return"Value must be between -0.1 and 8";this.video.playbackRate=e,this.moovie_el_speedinput.value=e,this.SpeedChange()}set captionOffset(e){if(e<-5||e>5)return"Value must be between -5 and 5";this.moovie_el_rangeinput.value=e,this.OffsetChange()}set source(e){this.video.pause(),this.video.src=e,this.video.play()}set muted(e){e?this.checkSoundLevel("mutePlayer"):this.checkSoundLevel("unmutePlayer")}}try{module.exports=exports=Moovie}catch(e){}