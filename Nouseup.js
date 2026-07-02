/* ======================================================
   1) NOSE UP Slider JavaScript
====================================================== */

(function () {

  /*
    مدة الانتقال التلقائي.

    غيري الرقم فقط:

    3000 = 3 ثوانٍ
    4000 = 4 ثوانٍ
    5000 = 5 ثوانٍ
    6000 = 6 ثوانٍ
  */
  var AUTO_TIME = 4000;


  var slider =
    document.getElementById(
      "noseup-main-slider"
    );


  if (!slider) {
    return;
  }


  var slides =
    slider.getElementsByClassName(
      "noseup-home-slide"
    );


  var dots =
    slider.getElementsByClassName(
      "noseup-slider-dot"
    );


  var currentSlide = 0;

  var autoTimer = null;

  var touchStartX = 0;

  var touchStartY = 0;


  /*
    إضافة هذا الكلاس تعني نجاح JavaScript
    وإيقاف حركة CSS الاحتياطية.
  */
  slider.classList.add(
    "noseup-js-ready"
  );


  /* ================================================
     عرض بانر محدد
  ================================================ */

  window.noseUpSliderShow =
    function (slideNumber) {


      if (!slides.length) {
        return;
      }


      /*
        العودة إلى أول بانر بعد آخر بانر.
      */
      if (slideNumber >= slides.length) {
        slideNumber = 0;
      }


      /*
        العودة إلى آخر بانر عند الرجوع
        من البانر الأول.
      */
      if (slideNumber < 0) {
        slideNumber = slides.length - 1;
      }


      currentSlide = slideNumber;


      var i;


      for (i = 0; i < slides.length; i++) {

        if (i === currentSlide) {

          slides[i].classList.add(
            "is-active"
          );

        } else {

          slides[i].classList.remove(
            "is-active"
          );

        }

      }


      for (i = 0; i < dots.length; i++) {

        if (i === currentSlide) {

          dots[i].classList.add(
            "is-active"
          );

          dots[i].setAttribute(
            "aria-current",
            "true"
          );

        } else {

          dots[i].classList.remove(
            "is-active"
          );

          dots[i].setAttribute(
            "aria-current",
            "false"
          );

        }

      }

    };


  /* ================================================
     إيقاف الحركة التلقائية
  ================================================ */

  function noseUpSliderStopAuto() {

    if (autoTimer !== null) {

      window.clearInterval(
        autoTimer
      );

      autoTimer = null;

    }

  }


  /* ================================================
     تشغيل الحركة التلقائية
  ================================================ */

  function noseUpSliderStartAuto() {

    noseUpSliderStopAuto();


    autoTimer =
      window.setInterval(
        function () {

          window.noseUpSliderShow(
            currentSlide + 1
          );

        },
        AUTO_TIME
      );

  }


  /* ================================================
     زر التالي
  ================================================ */

  window.noseUpSliderNext =
    function () {

      window.noseUpSliderShow(
        currentSlide + 1
      );

      noseUpSliderStartAuto();

    };


  /* ================================================
     زر السابق
  ================================================ */

  window.noseUpSliderPrevious =
    function () {

      window.noseUpSliderShow(
        currentSlide - 1
      );

      noseUpSliderStartAuto();

    };


  /* ================================================
     الضغط على نقطة محددة
  ================================================ */

  window.noseUpSliderGoTo =
    function (slideNumber) {

      window.noseUpSliderShow(
        slideNumber
      );

      noseUpSliderStartAuto();

    };


  /* ================================================
     السحب بالموبايل
  ================================================ */

  slider.addEventListener(
    "touchstart",
    function (event) {

      if (
        !event.changedTouches ||
        !event.changedTouches.length
      ) {
        return;
      }


      touchStartX =
        event.changedTouches[0].clientX;


      touchStartY =
        event.changedTouches[0].clientY;

    },
    {
      passive: true
    }
  );


  slider.addEventListener(
    "touchend",
    function (event) {

      if (
        !event.changedTouches ||
        !event.changedTouches.length
      ) {
        return;
      }


      var touchEndX =
        event.changedTouches[0].clientX;


      var touchEndY =
        event.changedTouches[0].clientY;


      var distanceX =
        touchEndX - touchStartX;


      var distanceY =
        touchEndY - touchStartY;


      /*
        تنفيذ السحب فقط عندما تكون الحركة أفقية.
      */
      if (
        Math.abs(distanceX) > 45 &&
        Math.abs(distanceX) >
        Math.abs(distanceY)
      ) {

        if (distanceX > 0) {

          window.noseUpSliderPrevious();

        } else {

          window.noseUpSliderNext();

        }

      }

    },
    {
      passive: true
    }
  );


  /* ================================================
     إيقاف الحركة عند مغادرة تبويب الموقع
  ================================================ */

  document.addEventListener(
    "visibilitychange",
    function () {

      if (document.hidden) {

        noseUpSliderStopAuto();

      } else {

        noseUpSliderStartAuto();

      }

    }
  );


  /*
    عرض أول بانر.
  */
  window.noseUpSliderShow(0);


  /*
    بدء الحركة التلقائية.
  */
  noseUpSliderStartAuto();

})();


/* ======================================================
   2) Header + Splash Screen Main Script
====================================================== */

(function(){

  "use strict";


  if(window.__NU_HEADER_SPLASH_READY__){
    return;
  }


  window.__NU_HEADER_SPLASH_READY__ =
    true;


  /* =====================================================
     مدة شاشة التحميل

     عدلي الرقم فقط:

     1000 = ثانية
     1500 = ثانية ونصف
     2000 = ثانيتان
     2500 = ثانيتان ونصف
  ====================================================== */

  var SPLASH_TIME = 1000;


  /* =====================================================
     عناصر الصفحة
  ====================================================== */

  var html =
    document.documentElement;


  var shell =
    document.getElementById(
      "nu-premium-header-shell"
    );


  var splash =
    document.getElementById(
      "nu-splash-screen"
    );


  var progress =
    document.getElementById(
      "nu-splash-progress"
    );


  var menuButton =
    document.getElementById(
      "nu-mobile-menu-button"
    );


  var drawer =
    document.getElementById(
      "nu-mobile-drawer"
    );


  var drawerClose =
    document.getElementById(
      "nu-drawer-close"
    );


  var overlay =
    document.getElementById(
      "nu-mobile-overlay"
    );


  var headerCount =
    document.getElementById(
      "nu-header-cart-count"
    );


  var drawerCount =
    document.getElementById(
      "nu-drawer-cart-count"
    );


  /* =====================================================
     تحديد صفحة Checkout
  ====================================================== */

  function updatePageState(){

    var path =
      String(
        window.location.pathname || ""
      )
      .replace(/\/+$/,"")
      .toLowerCase();


    var isCheckout =
      path === "/checkout";


    html.classList.toggle(
      "nu-checkout-page",
      isCheckout
    );


    if(document.body){

      document.body.classList.toggle(
        "nu-checkout-page",
        isCheckout
      );

    }

  }


  /* التنقل الداخلي في Easy Orders */

  ["pushState","replaceState"]
    .forEach(function(methodName){

      var original =
        window.history[methodName];


      if(
        typeof original !==
        "function"
      ){
        return;
      }


      window.history[methodName] =
        function(){

          var result =
            original.apply(
              window.history,
              arguments
            );


          window.setTimeout(
            updatePageState,
            0
          );


          return result;

        };

    });


  /* =====================================================
     شاشة التحميل
  ====================================================== */

  function closeSplash(){

    if(!splash){
      return;
    }


    splash.classList.add(
      "nu-splash-hidden"
    );


    window.setTimeout(
      function(){

        if(
          splash &&
          splash.parentNode
        ){

          splash.parentNode.removeChild(
            splash
          );

        }

      },
      700
    );

  }


  if(progress){

    progress.style.transition =
      "width " +
      SPLASH_TIME +
      "ms cubic-bezier(.65,0,.35,1)";


    window.setTimeout(
      function(){

        progress.style.width =
          "100%";

      },
      60
    );

  }


  window.setTimeout(
    closeSplash,
    SPLASH_TIME
  );


  /* الضغط يغلق شاشة التحميل للحماية */

  if(splash){

    splash.addEventListener(
      "click",
      closeSplash
    );


    splash.addEventListener(
      "touchstart",
      closeSplash,
      {
        passive:true
      }
    );

  }


  /* حماية قصوى */

  window.setTimeout(
    closeSplash,
    7000
  );


  /* =====================================================
     القائمة الجانبية
  ====================================================== */

  function openDrawer(){

    if(
      window.matchMedia(
        "(min-width:901px)"
      ).matches
    ){
      return;
    }


    document.body.classList.add(
      "nu-menu-open"
    );


    if(menuButton){

      menuButton.setAttribute(
        "aria-expanded",
        "true"
      );

    }


    if(drawer){

      drawer.setAttribute(
        "aria-hidden",
        "false"
      );

    }

  }


  function closeDrawer(){

    if(document.body){

      document.body.classList.remove(
        "nu-menu-open"
      );

    }


    if(menuButton){

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

    }


    if(drawer){

      drawer.setAttribute(
        "aria-hidden",
        "true"
      );

    }

  }


  if(menuButton){

    menuButton.addEventListener(
      "click",
      openDrawer
    );

  }


  if(drawerClose){

    drawerClose.addEventListener(
      "click",
      closeDrawer
    );

  }


  if(overlay){

    overlay.addEventListener(
      "click",
      closeDrawer
    );

  }


  if(drawer){

    drawer
      .querySelectorAll("a")
      .forEach(function(link){

        link.addEventListener(
          "click",
          closeDrawer
        );

      });

  }


  document.addEventListener(
    "keydown",
    function(event){

      if(
        event.key ===
        "Escape"
      ){

        closeDrawer();

      }

    }
  );


  window.addEventListener(
    "resize",
    function(){

      if(
        window.matchMedia(
          "(min-width:901px)"
        ).matches
      ){

        closeDrawer();

      }

    }
  );


  /* =====================================================
     قائمة المزيد
  ====================================================== */

  var moreMenu =
    document.querySelector(
      ".nu-more-menu"
    );


  var moreButton =
    document.getElementById(
      "nu-more-button"
    );


  if(
    moreMenu &&
    moreButton
  ){

    moreButton.addEventListener(
      "click",
      function(event){

        event.stopPropagation();


        var opened =
          moreMenu.classList.toggle(
            "nu-open"
          );


        moreButton.setAttribute(
          "aria-expanded",
          String(opened)
        );

      }
    );


    document.addEventListener(
      "click",
      function(event){

        if(
          !moreMenu.contains(
            event.target
          )
        ){

          moreMenu.classList.remove(
            "nu-open"
          );


          moreButton.setAttribute(
            "aria-expanded",
            "false"
          );

        }

      }
    );

  }


  /* =====================================================
     تأثير السكرول
  ====================================================== */

  function updateScrollState(){

    if(shell){

      shell.classList.toggle(
        "nu-scrolled",
        window.scrollY > 28
      );

    }

  }


  window.addEventListener(
    "scroll",
    updateScrollState,
    {
      passive:true
    }
  );


  /* =====================================================
     تمييز الرابط الحالي
  ====================================================== */

  function normalizePath(path){

    return (
      String(path || "/")
        .split("?")[0]
        .split("#")[0]
        .replace(/\/+$/,"")
        .toLowerCase()
      || "/"
    );

  }


  function highlightLinks(){

    var current =
      normalizePath(
        window.location.pathname
      );


    document
      .querySelectorAll(
        "#nu-premium-header a[href]," +
        "#nu-mobile-drawer a[href]"
      )
      .forEach(function(link){

        var href =
          link.getAttribute(
            "href"
          );


        if(!href){
          return;
        }


        try{

          var linkPath =
            normalizePath(
              new URL(
                href,
                window.location.origin
              ).pathname
            );


          link.classList.toggle(
            "nu-active",
            linkPath === current
          );

        }catch(error){}

      });

  }


  /* =====================================================
     عداد السلة
  ====================================================== */

  function setCartCount(value){

    var count =
      String(value || "0")
        .replace(/[^\d]/g,"")
      || "0";


    if(headerCount){

      headerCount.textContent =
        count;


      headerCount.style.display =
        Number(count) > 0
          ? "flex"
          : "none";

    }


    if(drawerCount){

      drawerCount.textContent =
        count;

    }

  }


  function startCartSync(){

    var original =
      document.getElementById(
        "header-cart-count"
      );


    if(!original){

      setCartCount("0");

      return;

    }


    setCartCount(
      original.textContent
    );


    var observer =
      new MutationObserver(
        function(){

          setCartCount(
            original.textContent
          );

        }
      );


    observer.observe(
      original,
      {
        childList:true,
        subtree:true,
        characterData:true
      }
    );

  }


  /* =====================================================
     التشغيل
  ====================================================== */

  function initialize(){

    updatePageState();

    updateScrollState();

    highlightLinks();

    startCartSync();

  }


  if(
    document.readyState ===
    "loading"
  ){

    document.addEventListener(
      "DOMContentLoaded",
      initialize,
      {
        once:true
      }
    );

  }else{

    initialize();

  }


  window.addEventListener(
    "popstate",
    function(){

      updatePageState();

      highlightLinks();

      closeDrawer();

    }
  );


  window.addEventListener(
    "pageshow",
    function(){

      updatePageState();

      highlightLinks();

      closeDrawer();

    }
  );


  window.addEventListener(
    "hashchange",
    function(){

      updatePageState();

      closeDrawer();

    }
  );

})();


/* ======================================================
   3) Hide Blocks on Non-Home Pages
====================================================== */

function toggleBlockById(blockId) {
  const block = document.querySelector(`#${blockId}`);
  if (!block) return;
  const isHome = location.pathname === "/" || location.pathname === "/index.html";
  block.style.display = isHome ? "block" : "none";
}

function initHideBlocks(blockIds = []) {
  let tryCount = 0;
  const tryInterval = setInterval(() => {
    const allExist = blockIds.every(id => document.querySelector(`#${id}`));
    if (allExist || tryCount > 100) {
      clearInterval(tryInterval);
      blockIds.forEach(toggleBlockById);
    }
    tryCount++;
  }, 50);

  const toggleAll = () => blockIds.forEach(toggleBlockById);
  const observer = new MutationObserver(toggleAll);
  observer.observe(document.body, { childList: true, subtree: true });

  window.addEventListener('popstate', toggleAll);
  window.addEventListener('pushstate', toggleAll);
  window.addEventListener('replacestate', toggleAll);

  let lastPath = location.pathname;
  setInterval(() => {
    if (location.pathname !== lastPath) {
      lastPath = location.pathname;
      toggleAll();
    }
  }, 200);
}

// استدعاء الدالة لكل البلوكات اللي عايزين نخفيها
initHideBlocks(["noseup-trust-section", "features-section-wrapper", "custom-banner" , "videoBannerBlock" , "custom-reviews-section" , "bannerBlock2"]);


/* ======================================================
   4) Fix Product Grids Visibility
====================================================== */

(function(){

  function fixProductGrids(){

    var path = location.pathname.toLowerCase();

    var allowed =
      path.indexOf("/products/") === 0 ||
      path === "/collections/all-products" ||
      path === "/collections/bundles" ||
      path === "/collections/routine";

    if(!allowed){
      return;
    }

    document
      .querySelectorAll(
        "main section.ab-pgrid," +
        "main [class*='related-products']," +
        "main [class*='recommended-products']," +
        "main [class*='similar-products']"
      )
      .forEach(function(el){

        el.style.setProperty("display","grid","important");
        el.style.setProperty("visibility","visible","important");
        el.style.setProperty("opacity","1","important");
        el.style.setProperty("position","relative","important");
        el.style.setProperty("left","auto","important");
        el.style.setProperty("right","auto","important");
        el.style.setProperty("top","auto","important");
        el.style.setProperty("width","100%","important");
        el.style.setProperty("height","auto","important");
        el.style.setProperty("overflow","visible","important");
        el.style.setProperty("clip","auto","important");
        el.style.setProperty("clip-path","none","important");
        el.style.setProperty("pointer-events","auto","important");

        el.removeAttribute("hidden");
        el.setAttribute("aria-hidden","false");

      });

  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded",fixProductGrids);
  }else{
    fixProductGrids();
  }

  setTimeout(fixProductGrids,500);
  setTimeout(fixProductGrids,1500);
  setTimeout(fixProductGrids,3000);

})();
