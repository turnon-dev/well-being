// !function(){var s,l,c,a,o={frameRate:150,animationTime:400,stepSize:100,pulseAlgorithm:!0,pulseScale:4,pulseNormalize:1,accelerationDelta:50,accelerationMax:3,keyboardSupport:!0,arrowScroll:50,fixedBackground:!0,excluded:""},p=o,u=!1,d=!1,i={x:0,y:0},f=!1,m=document.documentElement,h=[],w=/^Mac/.test(navigator.platform),v={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},y={37:1,38:1,39:1,40:1};function b(){if(!f&&document.body){f=!0;var e=document.body,t=document.documentElement,o=window.innerHeight,n=e.scrollHeight;if(m=0<=document.compatMode.indexOf("CSS")?t:e,s=e,p.keyboardSupport&&Y("keydown",D),top!=self)d=!0;else if(Z&&o<n&&(e.offsetHeight<=o||t.offsetHeight<=o)){var r,a=document.createElement("div");a.style.cssText="position:absolute; z-index:-10000; top:0; left:0; right:0; height:"+m.scrollHeight+"px",document.body.appendChild(a),c=function(){r||(r=setTimeout(function(){u||(a.style.height="0",a.style.height=m.scrollHeight+"px",r=null)},500))},setTimeout(c,10),Y("resize",c);if((l=new R(c)).observe(e,{attributes:!0,childList:!0,characterData:!1}),m.offsetHeight<=o){var i=document.createElement("div");i.style.clear="both",e.appendChild(i)}}p.fixedBackground||u||(e.style.backgroundAttachment="scroll",t.style.backgroundAttachment="scroll")}}var g=[],S=!1,x=Date.now();function k(d,f,m){var e,t;if(e=0<(e=f)?1:-1,t=0<(t=m)?1:-1,(i.x!==e||i.y!==t)&&(i.x=e,i.y=t,g=[],x=0),1!=p.accelerationMax){var o=Date.now()-x;if(o<p.accelerationDelta){var n=(1+50/o)/2;1<n&&(n=Math.min(n,p.accelerationMax),f*=n,m*=n)}x=Date.now()}if(g.push({x:f,y:m,lastX:f<0?.99:-.99,lastY:m<0?.99:-.99,start:Date.now()}),!S){var r=q(),h=d===r||d===document.body;null==d.$scrollBehavior&&function(e){var t=M(e);if(null==B[t]){var o=getComputedStyle(e,"")["scroll-behavior"];B[t]="smooth"==o}return B[t]}(d)&&(d.$scrollBehavior=d.style.scrollBehavior,d.style.scrollBehavior="auto");var w=function(e){for(var t=Date.now(),o=0,n=0,r=0;r<g.length;r++){var a=g[r],i=t-a.start,l=i>=p.animationTime,c=l?1:i/p.animationTime;p.pulseAlgorithm&&(c=F(c));var s=a.x*c-a.lastX>>0,u=a.y*c-a.lastY>>0;o+=s,n+=u,a.lastX+=s,a.lastY+=u,l&&(g.splice(r,1),r--)}h?window.scrollBy(o,n):(o&&(d.scrollLeft+=o),n&&(d.scrollTop+=n)),f||m||(g=[]),g.length?j(w,d,1e3/p.frameRate+1):(S=!1,null!=d.$scrollBehavior&&(d.style.scrollBehavior=d.$scrollBehavior,d.$scrollBehavior=null))};j(w,d,0),S=!0}}function e(e){f||b();var t=e.target;if(e.defaultPrevented||e.ctrlKey)return!0;if(N(s,"embed")||N(t,"embed")&&/\.pdf/i.test(t.src)||N(s,"object")||t.shadowRoot)return!0;var o=-e.wheelDeltaX||e.deltaX||0,n=-e.wheelDeltaY||e.deltaY||0;w&&(e.wheelDeltaX&&K(e.wheelDeltaX,120)&&(o=e.wheelDeltaX/Math.abs(e.wheelDeltaX)*-120),e.wheelDeltaY&&K(e.wheelDeltaY,120)&&(n=e.wheelDeltaY/Math.abs(e.wheelDeltaY)*-120)),o||n||(n=-e.wheelDelta||0),1===e.deltaMode&&(o*=40,n*=40);var r=z(t);return r?!!function(e){if(!e)return;h.length||(h=[e,e,e]);e=Math.abs(e),h.push(e),h.shift(),clearTimeout(a),a=setTimeout(function(){try{localStorage.SS_deltaBuffer=h.join(",")}catch(e){}},1e3);var t=120<e&&P(e);return!P(120)&&!P(100)&&!t}(n)||(1.2<Math.abs(o)&&(o*=p.stepSize/120),1.2<Math.abs(n)&&(n*=p.stepSize/120),k(r,o,n),e.preventDefault(),void C()):!d||!W||(Object.defineProperty(e,"target",{value:window.frameElement}),parent.wheel(e))}function D(e){var t=e.target,o=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&e.keyCode!==v.spacebar;document.body.contains(s)||(s=document.activeElement);var n=/^(button|submit|radio|checkbox|file|color|image)$/i;if(e.defaultPrevented||/^(textarea|select|embed|object)$/i.test(t.nodeName)||N(t,"input")&&!n.test(t.type)||N(s,"video")||function(e){var t=e.target,o=!1;if(-1!=document.URL.indexOf("www.youtube.com/watch"))do{if(o=t.classList&&t.classList.contains("html5-video-controls"))break}while(t=t.parentNode);return o}(e)||t.isContentEditable||o)return!0;if((N(t,"button")||N(t,"input")&&n.test(t.type))&&e.keyCode===v.spacebar)return!0;if(N(t,"input")&&"radio"==t.type&&y[e.keyCode])return!0;var r=0,a=0,i=z(s);if(!i)return!d||!W||parent.keydown(e);var l=i.clientHeight;switch(i==document.body&&(l=window.innerHeight),e.keyCode){case v.up:a=-p.arrowScroll;break;case v.down:a=p.arrowScroll;break;case v.spacebar:a=-(e.shiftKey?1:-1)*l*.9;break;case v.pageup:a=.9*-l;break;case v.pagedown:a=.9*l;break;case v.home:i==document.body&&document.scrollingElement&&(i=document.scrollingElement),a=-i.scrollTop;break;case v.end:var c=i.scrollHeight-i.scrollTop-l;a=0<c?c+10:0;break;case v.left:r=-p.arrowScroll;break;case v.right:r=p.arrowScroll;break;default:return!0}k(i,r,a),e.preventDefault(),C()}function t(e){s=e.target}var n,r,M=(n=0,function(e){return e.uniqueID||(e.uniqueID=n++)}),E={},T={},B={};function C(){clearTimeout(r),r=setInterval(function(){E=T=B={}},1e3)}function H(e,t,o){for(var n=o?E:T,r=e.length;r--;)n[M(e[r])]=t;return t}function z(e){var t=[],o=document.body,n=m.scrollHeight;do{var r=(!1?E:T)[M(e)];if(r)return H(t,r);if(t.push(e),n===e.scrollHeight){var a=O(m)&&O(o)||X(m);if(d&&L(m)||!d&&a)return H(t,q())}else if(L(e)&&X(e))return H(t,e)}while(e=e.parentElement)}function L(e){return e.clientHeight+10<e.scrollHeight}function O(e){return"hidden"!==getComputedStyle(e,"").getPropertyValue("overflow-y")}function X(e){var t=getComputedStyle(e,"").getPropertyValue("overflow-y");return"scroll"===t||"auto"===t}function Y(e,t,o){window.addEventListener(e,t,o||!1)}function A(e,t,o){window.removeEventListener(e,t,o||!1)}function N(e,t){return e&&(e.nodeName||"").toLowerCase()===t.toLowerCase()}if(window.localStorage&&localStorage.SS_deltaBuffer)try{h=localStorage.SS_deltaBuffer.split(",")}catch(e){}function K(e,t){return Math.floor(e/t)==e/t}function P(e){return K(h[0],e)&&K(h[1],e)&&K(h[2],e)}var $,j=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e,t,o){window.setTimeout(e,o||1e3/60)},R=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,q=($=document.scrollingElement,function(){if(!$){var e=document.createElement("div");e.style.cssText="height:10000px;width:1px;",document.body.appendChild(e);var t=document.body.scrollTop;document.documentElement.scrollTop,window.scrollBy(0,3),$=document.body.scrollTop!=t?document.body:document.documentElement,window.scrollBy(0,-3),document.body.removeChild(e)}return $});function V(e){var t;return((e*=p.pulseScale)<1?e-(1-Math.exp(-e)):(e-=1,(t=Math.exp(-1))+(1-Math.exp(-e))*(1-t)))*p.pulseNormalize}function F(e){return 1<=e?1:e<=0?0:(1==p.pulseNormalize&&(p.pulseNormalize/=V(1)),V(e))}var I=window.navigator.userAgent,_=/Edge/.test(I),W=/chrome/i.test(I)&&!_,U=/safari/i.test(I)&&!_,G=/firefox/i.test(I),J=/mobile/i.test(I),Q=/Windows NT 6.1/i.test(I)&&/rv:11/i.test(I),Z=U&&(/Version\/8/i.test(I)||/Version\/9/i.test(I)),ee=(W||U||Q||G)&&!J,te=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){te=!0}}))}catch(e){}var oe=!!te&&{passive:!1},ne="onwheel"in document.createElement("div")?"wheel":"mousewheel";function re(e){for(var t in e)o.hasOwnProperty(t)&&(p[t]=e[t])}ne&&ee&&(Y(ne,e,oe),Y("mousedown",t),Y("load",b)),re.destroy=function(){l&&l.disconnect(),A(ne,e),A("mousedown",t),A("keydown",D),A("resize",c),A("load",b)},window.SmoothScrollOptions&&re(window.SmoothScrollOptions),"function"==typeof define&&define.amd?define(function(){return re}):"object"==typeof exports?module.exports=re:window.SmoothScroll=re}();


var swiper = new Swiper('#slider_herobanner', {
  paginationClickable: true,
  speed: 500,
  autoplay: {
    delay: 4000,
  },
  pagination: {
    el: '.swiper-pagination-herobanner',
    clickable: true
  },
});


function loadShow(){
  $('.card-privilege').each(function() {
    let scrollCard = gsap.fromTo(this,0.7,{alpha:0,y:120},{alpha: 1, y: 0, ease:'power4.out'});
    let controller = new ScrollMagic.Controller();
    let sceneCard = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook:1,
      reverse:false
    })
    .setTween(scrollCard)
      // .addIndicators()
      .addTo(controller);
    });
}












// $('.btn_properties').click(function() {
//  $('.box-properties').slideToggle();
//  $('.box-condition').slideUp();
// });

// $('.btn_condition').click(function() {
//  $('.box-condition').slideToggle();
//  $('.box-properties').slideUp();
// });













$('#tab1').click(function(event) {
  tab1()
});

$('#tab2').click(function(event) {
  tab2()
});

$('#tab3').click(function(event) {
  tab3()
});

// $('#tab4').click(function(event) {
//   tab4()
// });

// $('#tab5').click(function(event) {
//   tab5()
// });






function tab1 (){
  $('.tab').removeClass('active');
  $('#tab1').addClass('active');
  $('.group').hide();
  $('#inc_telemedicine').show();
  loadShow();
  $('html, body').animate({scrollTop: $(".pin_tabber").offset().top - 50 }, 400)
}

function tab2 (){
  $('.tab').removeClass('active');
  $('#tab2').addClass('active');
  $('.group').hide();
  $('#inc_health_solution').show();
  loadShow();
  $('html, body').animate({scrollTop: $(".pin_tabber").offset().top - 50 }, 400)
}

function tab3 (){
  $('.tab').removeClass('active');
  $('#tab3').addClass('active');
  $('.group').hide();
  $('#inc_hospital').show();
  loadShow();
  $('html, body').animate({scrollTop: $(".pin_tabber").offset().top - 50 }, 400)
}

// function tab4 (){
//   $('.tab').removeClass('active');
//   $('#tab4').addClass('active');
//   $('.group').hide();
//   $('#inc_health_insurance').show();
//   loadShow();
//   $('html, body').animate({scrollTop: $(".pin_tabber").offset().top - 50 }, 400)
// }

// function tab5 (){
//   $('.tab').removeClass('active');
//   $('#tab5').addClass('active');
//   $('.group').hide();
//   $('#inc_spa_relax').show();
//   loadShow();
//   $('html, body').animate({scrollTop: $(".pin_tabber").offset().top - 50 }, 400)
// }









$('#inc_health_solution').show().load('inc_health_solution.html',function(){
  loadShow();

  $('#health_solution01 .btn_properties').click(function(){
    $('#health_solution01 .btn_condition').removeClass('active');
    $(this).toggleClass('active');
    $('#health_solution01 .box-properties').slideToggle();
    $('#health_solution01 .box-condition').slideUp();
  });
  $('#health_solution01 .btn_condition').click(function(){
    $('#health_solution01 .btn_properties').removeClass('active');
    $(this).toggleClass('active');
    $('#health_solution01 .box-properties').slideUp();
    $('#health_solution01 .box-condition').slideToggle();
  });

  $('#health_solution02 .btn_properties').click(function(){
    $('#health_solution02 .btn_condition').removeClass('active');
    $(this).toggleClass('active');
    $('#health_solution02 .box-properties').slideToggle();
    $('#health_solution02 .box-condition').slideUp();
  });
  $('#health_solution02 .btn_condition').click(function(){
    $('#health_solution02 .btn_properties').removeClass('active');
    $(this).toggleClass('active');
    $('#health_solution02 .box-properties').slideUp();
    $('#health_solution02 .box-condition').slideToggle();
  });

  $('#health_solution03 .btn_properties').click(function(){
    $('#health_solution03 .btn_condition').removeClass('active');
    $(this).toggleClass('active');
    $('#health_solution03 .box-properties').slideToggle();
    $('#health_solution03 .box-condition').slideUp();
  });
  $('#health_solution03 .btn_condition').click(function(){
    $('#health_solution03 .btn_properties').removeClass('active');
    $(this).toggleClass('active');
    $('#health_solution03 .box-properties').slideUp();
    $('#health_solution03 .box-condition').slideToggle();
  });

  $('#health_solution04 .btn_properties').click(function(){
    $('#health_solution04 .btn_condition').removeClass('active');
    $(this).toggleClass('active');
    $('#health_solution04 .box-properties').slideToggle();
    $('#health_solution04 .box-condition').slideUp();
  });
  $('#health_solution04 .btn_condition').click(function(){
    $('#health_solution04 .btn_properties').removeClass('active');
    $(this).toggleClass('active');
    $('#health_solution04 .box-properties').slideUp();
    $('#health_solution04 .box-condition').slideToggle();
  });

  $('#health_solution05 .btn_properties').click(function(){
    $('#health_solution05 .btn_condition').removeClass('active');
    $(this).toggleClass('active');
    $('#health_solution05 .box-properties').slideToggle();
    $('#health_solution05 .box-condition').slideUp();
  });
  $('#health_solution05 .btn_condition').click(function(){
    $('#health_solution05 .btn_properties').removeClass('active');
    $(this).toggleClass('active');
    $('#health_solution05 .box-properties').slideUp();
    $('#health_solution05 .box-condition').slideToggle();
  });



  $('#health_solution06 .btn_properties').click(function(){
    $('#health_solution06 .btn_condition').removeClass('active');
    $(this).toggleClass('active');
    $('#health_solution06 .box-properties').slideToggle();
    $('#health_solution06 .box-condition').slideUp();
  });
  $('#health_solution06 .btn_condition').click(function(){
    $('#health_solution06 .btn_properties').removeClass('active');
    $(this).toggleClass('active');
    $('#health_solution06 .box-properties').slideUp();
    $('#health_solution06 .box-condition').slideToggle();
  });

});






$('#inc_telemedicine').show().load('inc_telemedicine.html',function(){
  loadShow();
  $('#telemedicine01 .btn_properties').click(function(){
    $('#telemedicine01 .btn_condition').removeClass('active');
    $(this).toggleClass('active');
    $('#telemedicine01 .box-properties').slideToggle();
    $('#telemedicine01 .box-condition').slideUp();
  });
  $('#telemedicine01 .btn_condition').click(function(){
    $('#telemedicine01 .btn_properties').removeClass('active');
    $(this).toggleClass('active');
    $('#telemedicine01 .box-properties').slideUp();
    $('#telemedicine01 .box-condition').slideToggle();
  });

  $('#telemedicine02 .btn_properties').click(function(){
    $('#telemedicine02 .btn_condition').removeClass('active');
    $(this).toggleClass('active');
    $('#telemedicine02 .box-properties').slideToggle();
    $('#telemedicine02 .box-condition').slideUp();
  });
  $('#telemedicine02 .btn_condition').click(function(){
    $('#telemedicine02 .btn_properties').removeClass('active');
    $(this).toggleClass('active');
    $('#telemedicine02 .box-properties').slideUp();
    $('#telemedicine02 .box-condition').slideToggle();
  });

  $('#telemedicine03 .btn_properties').click(function(){
    $('#telemedicine03 .btn_condition').removeClass('active');
    $(this).toggleClass('active');
    $('#telemedicine03 .box-properties').slideToggle();
    $('#telemedicine03 .box-condition').slideUp();
  });
  $('#telemedicine03 .btn_condition').click(function(){
    $('#telemedicine03 .btn_properties').removeClass('active');
    $(this).toggleClass('active');
    $('#telemedicine03 .box-properties').slideUp();
    $('#telemedicine03 .box-condition').slideToggle();
  });

  // $('#telemedicine04 .btn_properties').click(function(){
  //   $('#telemedicine04 .btn_condition').removeClass('active');
  //   $(this).toggleClass('active');
  //   $('#telemedicine04 .box-properties').slideToggle();
  //   $('#telemedicine04 .box-condition').slideUp();
  // });
  // $('#telemedicine04 .btn_condition').click(function(){
  //   $('#telemedicine04 .btn_properties').removeClass('active');
  //   $(this).toggleClass('active');
  //   $('#telemedicine04 .box-properties').slideUp();
  //   $('#telemedicine04 .box-condition').slideToggle();
  // });

  $('#telemedicine05 .btn_properties').click(function(){
    $('#telemedicine05 .btn_condition').removeClass('active');
    $(this).toggleClass('active');
    $('#telemedicine05 .box-properties').slideToggle();
    $('#telemedicine05 .box-condition').slideUp();
  });
  $('#telemedicine05 .btn_condition').click(function(){
    $('#telemedicine05 .btn_properties').removeClass('active');
    $(this).toggleClass('active');
    $('#telemedicine05 .box-properties').slideUp();
    $('#telemedicine05 .box-condition').slideToggle();
  });

  $('#telemedicine06 .btn_properties').click(function(){
    $('#telemedicine06 .btn_condition').removeClass('active');
    $(this).toggleClass('active');
    $('#telemedicine06 .box-properties').slideToggle();
    $('#telemedicine06 .box-condition').slideUp();
  });
  $('#telemedicine06 .btn_condition').click(function(){
    $('#telemedicine06 .btn_properties').removeClass('active');
    $(this).toggleClass('active');
    $('#telemedicine06 .box-properties').slideUp();
    $('#telemedicine06 .box-condition').slideToggle();
  });


});







$('#inc_health_insurance').show().load('inc_health_insurance.html',function(){
  loadShow();
  $('#health_insurance01 .btn_properties').click(function(){
    $('#health_insurance01 .btn_condition').removeClass('active');
    $(this).toggleClass('active');
    $('#health_insurance01 .box-properties').slideToggle();
    $('#health_insurance01 .box-condition').slideUp();
  });
  $('#health_insurance01 .btn_condition').click(function(){
    $('#health_insurance01 .btn_properties').removeClass('active');
    $(this).toggleClass('active');
    $('#health_insurance01 .box-properties').slideUp();
    $('#health_insurance01 .box-condition').slideToggle();
  });
});









$('#inc_spa_relax').show().load('inc_spa_relax.html',function(){
  loadShow();
  $('#spa_relax01 .btn_properties').click(function(){
    $('#spa_relax01 .btn_condition').removeClass('active');
    $(this).toggleClass('active');
    $('#spa_relax01 .box-properties').slideToggle();
    $('#spa_relax01 .box-condition').slideUp();
  });
  $('#spa_relax01 .btn_condition').click(function(){
    $('#spa_relax01 .btn_properties').removeClass('active');
    $(this).toggleClass('active');
    $('#spa_relax01 .box-properties').slideUp();
    $('#spa_relax01 .box-condition').slideToggle();
  });
});









$('#inc_health_products').show().load('inc_health_products.html',function(){
  loadShow();
  $('#health_products01 .btn_properties').click(function(){
    $('#health_products01 .btn_condition').removeClass('active');
    $(this).toggleClass('active');
    $('#health_products01 .box-properties').slideToggle();
    $('#health_products01 .box-condition').slideUp();
  });
  $('#health_products01 .btn_condition').click(function(){
    $('#health_products01 .btn_properties').removeClass('active');
    $(this).toggleClass('active');
    $('#health_products01 .box-properties').slideUp();
    $('#health_products01 .box-condition').slideToggle();
  });

  $('#health_products08 .btn_properties').click(function(){
    $('#health_products08 .btn_condition').removeClass('active');
    $(this).toggleClass('active');
    $('#health_products08 .box-properties').slideToggle();
    $('#health_products08 .box-condition').slideUp();
  });
  $('#health_products08 .btn_condition').click(function(){
    $('#health_products08 .btn_properties').removeClass('active');
    $(this).toggleClass('active');
    $('#health_products08 .box-properties').slideUp();
    $('#health_products08 .box-condition').slideToggle();
  });

  $('#health_products09 .btn_properties').click(function(){
    $('#health_products09 .btn_condition').removeClass('active');
    $(this).toggleClass('active');
    $('#health_products09 .box-properties').slideToggle();
    $('#health_products09 .box-condition').slideUp();
  });
  $('#health_products09 .btn_condition').click(function(){
    $('#health_products09 .btn_properties').removeClass('active');
    $(this).toggleClass('active');
    $('#health_products09 .box-properties').slideUp();
    $('#health_products09 .box-condition').slideToggle();
  });

  $('#health_products18 .btn_properties').click(function(){
    $('#health_products18 .btn_condition').removeClass('active');
    $(this).toggleClass('active');
    $('#health_products18 .box-properties').slideToggle();
    $('#health_products18 .box-condition').slideUp();
  });
  $('#health_products18 .btn_condition').click(function(){
    $('#health_products18 .btn_properties').removeClass('active');
    $(this).toggleClass('active');
    $('#health_products18 .box-properties').slideUp();
    $('#health_products18 .box-condition').slideToggle();
  });

  $('#health_products20 .btn_properties').click(function(){
    $('#health_products20 .btn_condition').removeClass('active');
    $(this).toggleClass('active');
    $('#health_products20 .box-properties').slideToggle();
    $('#health_products20 .box-condition').slideUp();
  });
  $('#health_products20 .btn_condition').click(function(){
    $('#health_products20 .btn_properties').removeClass('active');
    $(this).toggleClass('active');
    $('#health_products20 .box-properties').slideUp();
    $('#health_products20 .box-condition').slideToggle();
  });
  $('#health_products21 .btn_properties').click(function(){
    $('#health_products21 .btn_condition').removeClass('active');
    $(this).toggleClass('active');
    $('#health_products21 .box-properties').slideToggle();
    $('#health_products21 .box-condition').slideUp();
  });
  $('#health_products21 .btn_condition').click(function(){
    $('#health_products21 .btn_properties').removeClass('active');
    $(this).toggleClass('active');
    $('#health_products21 .box-properties').slideUp();
    $('#health_products21 .box-condition').slideToggle();
  });
  
  $('#health_products25 .btn_properties').click(function(){
    $('#health_products25 .btn_condition').removeClass('active');
    $(this).toggleClass('active');
    $('#health_products25 .box-properties').slideToggle();
    $('#health_products25 .box-condition').slideUp();
  });
  $('#health_products25 .btn_condition').click(function(){
    $('#health_products25 .btn_properties').removeClass('active');
    $(this).toggleClass('active');
    $('#health_products25 .box-properties').slideUp();
    $('#health_products25 .box-condition').slideToggle();
  });
  $('#health_products26 .btn_properties').click(function(){
    $('#health_products26 .btn_condition').removeClass('active');
    $(this).toggleClass('active');
    $('#health_products26 .box-properties').slideToggle();
    $('#health_products26 .box-condition').slideUp();
  });
  $('#health_products26 .btn_condition').click(function(){
    $('#health_products26 .btn_properties').removeClass('active');
    $(this).toggleClass('active');
    $('#health_products26 .box-properties').slideUp();
    $('#health_products26 .box-condition').slideToggle();
  });
  

  $('#health_products32 .btn_properties').click(function(){
    $('#health_products32 .btn_condition').removeClass('active');
    $(this).toggleClass('active');
    $('#health_products32 .box-properties').slideToggle();
    $('#health_products32 .box-condition').slideUp();
  });
  $('#health_products32 .btn_condition').click(function(){
    $('#health_products32 .btn_properties').removeClass('active');
    $(this).toggleClass('active');
    $('#health_products32 .box-properties').slideUp();
    $('#health_products32 .box-condition').slideToggle();
  });
  $('#health_products33 .btn_properties').click(function(){
    $('#health_products33 .btn_condition').removeClass('active');
    $(this).toggleClass('active');
    $('#health_products33 .box-properties').slideToggle();
    $('#health_products33 .box-condition').slideUp();
  });
  $('#health_products33 .btn_condition').click(function(){
    $('#health_products33 .btn_properties').removeClass('active');
    $(this).toggleClass('active');
    $('#health_products33 .box-properties').slideUp();
    $('#health_products33 .box-condition').slideToggle();
  });
  $('#health_products34 .btn_properties').click(function(){
    $('#health_products34 .btn_condition').removeClass('active');
    $(this).toggleClass('active');
    $('#health_products34 .box-properties').slideToggle();
    $('#health_products34 .box-condition').slideUp();
  });
  $('#health_products34 .btn_condition').click(function(){
    $('#health_products34 .btn_properties').removeClass('active');
    $(this).toggleClass('active');
    $('#health_products34 .box-properties').slideUp();
    $('#health_products34 .box-condition').slideToggle();
  });
  
  $('#health_products37 .btn_properties').click(function(){
    $('#health_products37 .btn_condition').removeClass('active');
    $(this).toggleClass('active');
    $('#health_products37 .box-properties').slideToggle();
    $('#health_products37 .box-condition').slideUp();
  });
  $('#health_products37 .btn_condition').click(function(){
    $('#health_products37 .btn_properties').removeClass('active');
    $(this).toggleClass('active');
    $('#health_products37 .box-properties').slideUp();
    $('#health_products37 .box-condition').slideToggle();
  });


});


$('#inc_hospital').show().load('inc_hospital.html',function(){
  loadShow();

$('#hospital01 .btn_properties').click(function(){
  $('#hospital01 .btn_condition').removeClass('active');
  $(this).toggleClass('active');
  $('#hospital01 .box-properties').slideToggle();
  $('#hospital01 .box-condition').slideUp();
});
$('#hospital01 .btn_condition').click(function(){
  $('#hospital01 .btn_properties').removeClass('active');
  $(this).toggleClass('active');
  $('#hospital01 .box-properties').slideUp();
  $('#hospital01 .box-condition').slideToggle();
});

$('#hospital02 .btn_properties').click(function(){
  $('#hospital02 .btn_condition').removeClass('active');
  $(this).toggleClass('active');
  $('#hospital02 .box-properties').slideToggle();
  $('#hospital02 .box-condition').slideUp();
});
$('#hospital02 .btn_condition').click(function(){
  $('#hospital02 .btn_properties').removeClass('active');
  $(this).toggleClass('active');
  $('#hospital02 .box-properties').slideUp();
  $('#hospital02 .box-condition').slideToggle();
});


$('#hospital03 .btn_properties').click(function(){
  $('#hospital03 .btn_condition').removeClass('active');
  $(this).toggleClass('active');
  $('#hospital03 .box-properties').slideToggle();
  $('#hospital03 .box-condition').slideUp();
});
$('#hospital03 .btn_condition').click(function(){
  $('#hospital03 .btn_properties').removeClass('active');
  $(this).toggleClass('active');
  $('#hospital03 .box-properties').slideUp();
  $('#hospital03 .box-condition').slideToggle();
});


$('#hospital04 .btn_properties').click(function(){
  $('#hospital04 .btn_condition').removeClass('active');
  $(this).toggleClass('active');
  $('#hospital04 .box-properties').slideToggle();
  $('#hospital04 .box-condition').slideUp();
});
$('#hospital04 .btn_condition').click(function(){
  $('#hospital04 .btn_properties').removeClass('active');
  $(this).toggleClass('active');
  $('#hospital04 .box-properties').slideUp();
  $('#hospital04 .box-condition').slideToggle();
});


$('#hospital05 .btn_properties').click(function(){
  $('#hospital05 .btn_condition').removeClass('active');
  $(this).toggleClass('active');
  $('#hospital05 .box-properties').slideToggle();
  $('#hospital05 .box-condition').slideUp();
});
$('#hospital05 .btn_condition').click(function(){
  $('#hospital05 .btn_properties').removeClass('active');
  $(this).toggleClass('active');
  $('#hospital05 .box-properties').slideUp();
  $('#hospital05 .box-condition').slideToggle();
});


$('#hospital06 .btn_properties').click(function(){
  $('#hospital06 .btn_condition').removeClass('active');
  $(this).toggleClass('active');
  $('#hospital06 .box-properties').slideToggle();
  $('#hospital06 .box-condition').slideUp();
});
$('#hospital06 .btn_condition').click(function(){
  $('#hospital06 .btn_properties').removeClass('active');
  $(this).toggleClass('active');
  $('#hospital06 .box-properties').slideUp();
  $('#hospital06 .box-condition').slideToggle();
});


});











$('.group').hide();
$('#inc_telemedicine').show();




