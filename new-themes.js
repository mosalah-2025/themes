 
 <div id="splash-screen" style="
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  transition: opacity 1s ease-out;
">
  <div style="
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  ">
    <img src="https://easyorders.fra1.digitaloceanspaces.com/1771804682232729450.png"
         alt="Welcome"
         style="max-width:180px; animation: bounce 1.5s infinite; display:block;">

    <h1 style="
      font-family: 'Poppins', 'Tajawal', sans-serif;
      font-size: 45px;
      font-weight: 900;
      color: #fff;
      margin: 20px 0 5px 0;
      letter-spacing: 3px;
      text-transform: uppercase;
      line-height: 1;
    ">
      BLUE LINES
    </h1>

    <p style="
      font-family: 'Tajawal', sans-serif;
      font-size: 16px;
      font-weight: 300;
      color: #ccc;
      margin: 0;
      letter-spacing: 5px;
      text-transform: uppercase;
    ">
      THE BEST WITH US
    </p>
  </div>
</div>

<style>
/* أنميشن ارتداد اللوجو */
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
</style>

<script>
document.addEventListener("DOMContentLoaded", function () {
  var splash = document.getElementById("splash-screen");

  if (splash) {
    // تم زيادة مدة الظهور قليلاً لكي يلحق الزائر قراءة الجمل الجديدة
    setTimeout(function () {
      splash.style.opacity = "0";
      setTimeout(function () {
        splash.style.display = "none";
      }, 100); // وقت التلاشي
    }, 800); // مدة بقاء السكرين (2 ثانية)
  }
});
</script>











<script>
  function toggleBlockById(blockId) {
    const block = document.querySelector(`#${blockId}`);
    if (!block) return;
    const isHome = location.pathname === "/" || location.pathname === "/index.html";
    
    // التعديل الأساسي لضمان عدم خروج الصور تحت الكلام
    if (isHome) {
      if (blockId === "main-theme-section") {
        block.style.setProperty('display', 'flex', 'important');
      } else {
        block.style.display = "block";
      }
    } else {
      block.style.display = "none";
    }
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

  // الاستدعاء
  initHideBlocks(["MainScrollSection", "clients", "CustomersSection", "main-theme-section", "videoBannerBlock", "partnersMarqueeSection", "professional-bio-section", "faqSection-v2", "bl-reviews", "bl-projects-container", "Themes", "pricing-section", "Themes", "Themes"]);
</script>




 



 
 
 
<!-- Scroll To Top Button -->

<div id="scrollToTopBtn" onclick="window.scrollTo({ top: 0, behavior: 'smooth' });">

  <div class="circle-bg"></div>

  <svg class="progress-ring" width="60" height="60">
    <circle class="ring-progress" r="26" cx="30" cy="30"></circle>
  </svg>

  <img class="arrow-icon" src="https://cdn-icons-png.flaticon.com/128/4436/4436159.png" alt="أعلى">

</div>


<style>

#scrollToTopBtn {

  position: fixed;

  bottom: 45px;

  right: auto;
  left: 20px;

  width: 60px;

  height: 60px;

  cursor: pointer;

  z-index: 999999;

  display: flex;

  align-items: center;

  justify-content: center;

  opacity: 0;

  pointer-events: none;

  transition: opacity 0.3s ease;

}

#scrollToTopBtn.visible {

  opacity: 1;

  pointer-events: all;

}

.circle-bg {

  position: absolute;

  width: 50px;

  height: 50px;

  background: #ffffff;

  border-radius: 50%;

  z-index: 1;

}

.progress-ring {

  position: absolute;

  width: 60px;

  height: 60px;

  transform: rotate(-90deg);

  z-index: 2;

}

.ring-progress {

  fill: none;

  stroke-width: 4;

  stroke: #fe0001;

  stroke-linecap: round;

  stroke-dasharray: 163;

  stroke-dashoffset: 163;

  transition: stroke-dashoffset 0.2s linear;

}

.arrow-icon {

  width: 25px;

  height: 25px;

  z-index: 3;

  animation: bounceArrow 1s infinite ease-in-out;

}

@keyframes bounceArrow {

  0%   { transform: translateY(0); }

  50%  { transform: translateY(-6px); }

  100% { transform: translateY(0); }

}

</style>


<script>

document.addEventListener("DOMContentLoaded", function () {

  const btn = document.getElementById("scrollToTopBtn");
  const progressCircle = document.querySelector(".ring-progress");

  const radius = 26;
  const circumference = 2 * Math.PI * radius;

  progressCircle.style.strokeDasharray = circumference;
  progressCircle.style.strokeDashoffset = circumference;

  function updateProgress() {

    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollTop / docHeight;
    const offset = circumference - progress * circumference;

    progressCircle.style.strokeDashoffset = offset;

    if (scrollTop > 200) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }

  }

  window.addEventListener("scroll", updateProgress);

});

</script>








<script>
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("img").forEach(img => {
    img.loading = "lazy";
  });
});
</script>



<script>
// تأجيل تحميل السكريبتات التقيلة لحد ما الصفحة تحمل
document.addEventListener("DOMContentLoaded", function () {
    const scripts = [
        ...document.querySelectorAll('script[src*="facebook"], script[src*="fb"], script[src*="clarity"], script[src*="gtag"], script[src*="pixel"], script[src*="tiktok"], script[src*="analytics"]')
    ];

    scripts.forEach(script => {
        script.setAttribute("defer", "");
        script.setAttribute("loading", "lazy");
    });
});

// تحميل كل السكريبتات الخارجية بعد 3 ثواني فقط
setTimeout(() => {
    const lazyScripts = [
        "https://connect.facebook.net/en_US/fbevents.js",
        "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX",
        "https://www.clarity.ms/tag/XXXXXXXX"
    ];

    lazyScripts.forEach(src => {
        const s = document.createElement("script");
        s.src = src;
        s.async = true;
        document.body.appendChild(s);
    });
}, 3000);

// منع أي CSS مش مستخدم من أنه يعطّل اللود
document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
    link.setAttribute("media", "print");
    setTimeout(() => link.setAttribute("media", "all"), 1);
});

// تحسين الخطوط (يرفع الأداء 10–20 نقطة)
let pre1 = document.createElement("link");
pre1.rel = "preconnect";
pre1.href = "https://fonts.gstatic.com";
pre1.crossOrigin = "anonymous";

let pre2 = document.createElement("link");
pre2.rel = "preconnect";
pre2.href = "https://fonts.googleapis.com";

document.head.appendChild(pre1);
document.head.appendChild(pre2);
</script>



<script>
// تفعيل خاصية تحميل الصور عند الظهور فقط
document.addEventListener("DOMContentLoaded", function () {
  const imgs = document.querySelectorAll("img");
  imgs.forEach(img => {
    img.setAttribute("loading", "lazy");
  });
});
</script>




<style>
/* تحسين الـ Rendering ومنع الـ Layout Shift */
* {
  backface-visibility: hidden;
  -webkit-font-smoothing: antialiased;
}

/* منع الحركة اللي بتكسر الأداء */
img, video {
  content-visibility: auto;
  contain-intrinsic-size: 300px;
}

/* تسريع تحميل الصور */
img {
  loading: lazy !important;
}

/* منع Jump أثناء التحميل */
:root {
  scroll-behavior: smooth;
}

/* أي UI Block تقيل بنخفف تأثيره */
[class*="css"], [class*="section"], [class*="block"] {
  contain: content;
}
</style>

<!-- تحسين سرعة الخطوط -->
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preconnect" href="https://fonts.googleapis.com">

<!-- تأجيل التحميل لأي سكريبت غير ضروري -->
<script>
document.addEventListener("DOMContentLoaded", () => {
  const scripts = document.querySelectorAll("script[src]");
  scripts.forEach(s => s.setAttribute("defer","true"));
});
</script>




<!-- الفافيكون -->
<link rel="icon" href="https://bluelines.store/favicon.ico" type="image/x-icon">

<!-- Open Graph (لجوجل والسوشيال) -->
<meta property="og:title" content="BlueLines Store">
<meta property="og:description" content="أفضل متجر لتقديم الخدمات الرقمية.">
<meta property="og:image" content="https://bluelines.store/og-image.jpg">
<meta property="og:url" content="https://bluelines.store/">
<meta property="og:type" content="website">










 
 
 
 
 
 

 




<script>
let currentLang = 'en';

function toggleLanguage() {
    const btn = document.getElementById('translateBtn');

    const navLinks = document.querySelectorAll('.nav-link');
    const mainTitle = document.querySelector('.hero-main-title');
    const heroBtn = document.querySelector('.hero-btn-explore');
    const customersTitle = document.getElementById('CustomersTitle');
    const themeTitle = document.querySelector('#content-column h2');
    const themeDesc = document.querySelector('#content-column p');
    const marqueeTitle = document.querySelector('.marquee-title');
    const clientsHeading = document.querySelector('#clients h2');
    const portfolioGridTitle = document.querySelector('#portfolio-grid h2');
    const portfolioGridDesc = document.querySelector('#portfolio-grid p');
    const cardBtns = document.querySelectorAll('#portfolio-grid .btn');
    const faqLeftTitle = document.querySelector('#faqSection-v2 .faq-left h2');
    const faqLeftDesc = document.querySelector('#faqSection-v2 .faq-left p');
    const faqQuestions = document.querySelectorAll('#faqSection-v2 summary span');
    const faqAnswers = document.querySelectorAll('#faqSection-v2 .faq-answer');
    const footerAboutTitle = document.querySelector('.cf-about h4');
    const footerAboutText = document.querySelector('.cf-about p');
    const footerMenuTitle = document.querySelector('.cf-categories h4');
    const footerMenuLinks = document.querySelectorAll('.cf-categories ul li a');
    const footerCareTitle = document.querySelector('.cf-policies h4');
    const footerCareLinks = document.querySelectorAll('.cf-policies ul li a');
    const footerSignupTitle = document.querySelector('.cf-signup h4');
    const footerCopyright = document.querySelector('.cf-copyright');
    const themesTitle = document.querySelector('#Themes .blog-header h2');
    const themesSubtext = document.querySelector('#Themes .blog-subtext');
    const themesViewAll = document.querySelector('#Themes .blog-view-all');
    const themesExploreBtn = document.querySelector('#Themes .blog-explore-btn');
    const themesCards = document.querySelectorAll('#Themes .blog-card h3');

    const pricingTitle = document.getElementById('pricing-title');
    const planNames = document.querySelectorAll('.card-plan-name');
    const cardOnce = document.querySelectorAll('.card-once');
    const pricingBtns = document.querySelectorAll('#pricing-cards .card-btn');
    const featuredBadge = document.querySelector('.featured-badge');
    const basicFeatures = document.querySelectorAll('#pricing-card-basic .card-features li');
    const standardFeatures = document.querySelectorAll('#pricing-card-standard .card-features li');
    const proFeatures = document.querySelectorAll('#pricing-card-pro .card-features li');

    function setLiText(li, text, noteText) {
        const note = li.querySelector('.feature-note');
        const textNode = [...li.childNodes].find(n => n.nodeType === 3);
        if(textNode) textNode.textContent = text + ' ';
        if(note && noteText !== undefined) note.innerText = noteText;
    }

    if (currentLang === 'en') {
        // ===== عربي =====
        if(navLinks.length > 0) { navLinks[0].innerText = "الرئيسية"; navLinks[1].innerText = "سابقة الأعمال"; navLinks[2].innerText = "تصميم التطبيقات"; navLinks[3].innerText = "خدماتنا"; }
        if(mainTitle) mainTitle.innerHTML = "أطلق موقعك الإلكتروني <br>معنا الآن";
        if(heroBtn) heroBtn.innerText = "استكشف أعمالنا";
        if(customersTitle) customersTitle.innerText = "عملاؤنا";
        if(themeTitle) themeTitle.innerText = "أي تصميم يناسب علامتك التجارية؟";
        if(themeDesc) themeDesc.innerText = "كلا التصميمين يتميزان بالاحترافية وبنفس الخصائص الأساسية، الفرق يكمن فقط في النمط البصري لمتجرك.";
        if(marqueeTitle) marqueeTitle.innerText = "شركاء النجاح";
        if(clientsHeading) clientsHeading.innerHTML = `انضم لأكثر من <span style="color:#ffd700;">200 عميل</span> وثقوا في خدماتنا خلال العام الماضي`;
        if(portfolioGridTitle) portfolioGridTitle.innerText = "سابقة أعمالنا";
        if(portfolioGridDesc) portfolioGridDesc.innerText = "استكشف نماذجنا ومشاريعنا الأكثر تميزاً في قسم سابقة الأعمال.";
        cardBtns.forEach(b => b.innerText = "شاهد المشروع");

        if(faqLeftTitle) faqLeftTitle.innerText = "الأسئلة الشائعة";
        if(faqLeftDesc) faqLeftDesc.innerHTML = "فريق الدعم متاح يومياً.<br>متوسط وقت الرد: ساعتان";
        const qAr = ["هل تقومون بتصميم مواقع متوافقة مع الهواتف المحمولة؟","ما الذي يميز BlueLines في مجال تصميم المواقع؟","هل تقدمون خدمات إدارة الموقع بعد التسليم؟","كم من الوقت يستغرق تسليم الموقع الإلكتروني؟","كيف يمكنني البدء معكم؟","هل تقومون بتطوير تطبيقات أندرويد و iOS؟"];
        const aAr = ["كل موقع نصممه متوافق بنسبة 100% مع جميع الأجهزة (أجهزة الكمبيوتر، الأجهزة اللوحية، والهواتف المحمولة)، مما يضمن لزوارك الحصول على أفضل تجربة في أي وقت ومن أي مكان.","في BlueLines، نقدم حلولاً احترافية متكاملة مع التركيز على التجربة البصرية، الأداء العالي، وسهولة الاستخدام. هدفنا هو تجسيد هوية علامتك التجارية وتحقيق نتائج ملموسة.","نعم، نقدم باقات دعم وصيانة شهرية تشمل التحديثات المستمرة، النسخ الاحتياطي الدوري، والدعم الفني الفوري لأي مشكلة قد تواجهك.","تختلف الجداول الزمنية حسب المشروع: المواقع الصغيرة أو الشخصية تستغرق 1-3 أيام عمل، بينما تستغرق المواقع التجارية أو المتاجر 2-5 أيام. نحن نلتزم دائماً بالمواعيد النهائية.","ببساطة، أرسل فكرة موقعك أو مجال عملك عبر واتساب أو البريد الإلكتروني. وسيقوم فريقنا بإعداد عرض سعر مفصل وخطة تنفيذ واضحة لك في أقل من 24 ساعة.","نعم، نحن نصمم ونطور تطبيقات Android و iOS باستخدام أحدث التقنيات لضمان الأداء السريع وتجربة مستخدم ممتازة."];
        faqQuestions.forEach((q, i) => { if(qAr[i]) q.innerText = qAr[i]; });
        faqAnswers.forEach((a, i) => { if(aAr[i]) a.innerText = aAr[i]; });

        if(footerAboutTitle) footerAboutTitle.innerText = "من نحن";
        if(footerAboutText) footerAboutText.innerHTML = 'في <strong>BLUE LINES</strong>، نصنع تجارب رقمية قوية للشركات التي تهدف إلى النمو والتميز. نجمع بين التصميم العصري والتطوير الذكي لتحويل أفكارك إلى واقع رقمي مؤثر. 💙🚀';
        if(footerMenuTitle) footerMenuTitle.innerText = "القائمة";
        if(footerMenuLinks.length > 0) { footerMenuLinks[0].innerText = "الرئيسية"; footerMenuLinks[1].innerText = "سابقة الأعمال"; footerMenuLinks[2].innerText = "تصميم التطبيقات"; }
        if(footerCareTitle) footerCareTitle.innerText = "خدمة العملاء";
        if(footerCareLinks.length > 0) { footerCareLinks[0].innerText = "سياسة الخصوصية"; footerCareLinks[1].innerText = "الشروط والأحكام"; footerCareLinks[2].innerText = "من نحن"; }
        if(footerSignupTitle) footerSignupTitle.innerText = "اشترك للحصول على أحدث العروض";
        if(footerCopyright) footerCopyright.innerHTML = 'BLUE LINES – جميع الحقوق محفوظة © 2026';

        if(themesTitle) themesTitle.innerText = "الثيمات";
        if(themesSubtext) themesSubtext.innerText = "نصمم ثيمات احترافية في مختلف المجالات — من الأزياء والعطور إلى مستحضرات التجميل والساعات وغيرها.";
        if(themesViewAll) themesViewAll.innerText = "عرض الكل ›";
        if(themesExploreBtn) themesExploreBtn.innerText = "استكشف سابقة أعمالنا";
        const themesAr = ["ثيمات الأزياء","ثيمات العطور","ثيمات مستحضرات التجميل","الساعات والإكسسوارات","أخرى"];
        themesCards.forEach((card, i) => { if(themesAr[i]) card.innerText = themesAr[i]; });

        // Pricing عربي
        if(pricingTitle) pricingTitle.innerText = "الباقات";
        if(featuredBadge) featuredBadge.innerText = "الأكثر طلباً";
        planNames.forEach((el, i) => { const ar = ["الباقة الأساسية","الباقة الاحترافية","الباقة المتقدمة"]; if(ar[i]) el.innerText = ar[i]; });
        cardOnce.forEach(el => el.innerText = "دفع مرة واحدة");
        pricingBtns.forEach(el => el.innerText = "ابدأ الآن");

        const basicAr = [["$5 كاش باك في محفظتك","~١.٧٠ جنيه خصم على كل طلب"],["دومين .store / .online / .shop"],["تخصيص وإعداد الثيم"],["تصميم السيكشنز والصفحات"],["دعم لمدة 1 شهر"]];
        basicFeatures.forEach((li, i) => { if(basicAr[i]) setLiText(li, basicAr[i][0], basicAr[i][1]); });

        const standardAr = [["$5 كاش باك في محفظتك","~١.٧٠ جنيه خصم على كل طلب"],["دومين .com / .store / .online / .shop"],["تخصيص وإعداد الثيم"],["تصميم السيكشنز والصفحات"],["إضافة الموقع على Google Search Console"],["دعم لمدة 1 شهر"]];
        standardFeatures.forEach((li, i) => { if(standardAr[i]) setLiText(li, standardAr[i][0], standardAr[i][1]); });

        const proAr = [["$10 كاش باك في محفظتك","~١.٧٠ جنيه خصم على كل طلب"],["دومين .com / .net"],["تخصيص وإعداد الثيم"],["تصميم السيكشنز والصفحات"],["إضافة الموقع على Google Search Console"],["دعم لمدة 1 شهر"],["رفع وإدارة المنتجات — حتى 50 منتج"],["تطوير تطبيق أندرويد APK"]];
        proFeatures.forEach((li, i) => { if(proAr[i]) setLiText(li, proAr[i][0], proAr[i][1]); });

        btn.innerText = "English";
        currentLang = 'ar';

    } else {
        // ===== إنجليزي =====
        if(navLinks.length > 0) { navLinks[0].innerText = "HOME"; navLinks[1].innerText = "Portfolio"; navLinks[2].innerText = "Applications Design"; navLinks[3].innerText = "Services"; }
        if(mainTitle) mainTitle.innerHTML = "LAUNCH YOUR WEBSITE <br>WITH US";
        if(heroBtn) heroBtn.innerText = "EXPLORE OUR PORTFOLIO";
        if(customersTitle) customersTitle.innerText = "OUR CUSTOMERS";
        if(themeTitle) themeTitle.innerText = "WHICH THEME IS RIGHT FOR YOUR BRAND?";
        if(themeDesc) themeDesc.innerText = "Both themes look clean and use the same core features, the difference is only in the visual style.";
        if(marqueeTitle) marqueeTitle.innerText = "SUCCESS PARTNERS";
        if(clientsHeading) clientsHeading.innerHTML = `JOIN MORE THAN <span style="color:#ffd700;">200 CUSTOMERS</span> WHO TRUSTED OUR SERVICES OVER THE PAST YEAR`;
        if(portfolioGridTitle) portfolioGridTitle.innerText = "Portfolio";
        if(portfolioGridDesc) portfolioGridDesc.innerText = "Explore our most outstanding templates and projects in the Portfolio section.";
        cardBtns.forEach(b => b.innerText = "View Project");

        if(faqLeftTitle) faqLeftTitle.innerText = "FAQs";
        if(faqLeftDesc) faqLeftDesc.innerHTML = "Our customer support is available daily.<br>Average answer time: 2h";
        const qEn = ["Do you design mobile-responsive websites?","What makes BlueLines unique in web design?","Do you provide post-delivery management services?","How long does it take to deliver a website?","How do I get started with you?","Do you develop Android and iOS applications?"];
        const aEn = ["Every website we design is 100% responsive across all devices—desktops, tablets, and mobile phones—ensuring your visitors get the best experience anytime, anywhere.","At BlueLines, we provide integrated professional solutions with a focus on visual experience, high performance, and ease of use. Our goal is to embody your brand identity and achieve tangible results.","Yes, we offer monthly support and maintenance packages that include continuous updates, regular backups, and immediate technical support for any problem you may face.","Timelines vary by project: Small or personal sites take 1–3 business days, while e-commerce or business sites take 2–5 days. We always stick to deadlines.","Simply send your website idea or business field via WhatsApp or email. Our team will prepare a detailed quote and a clear implementation plan for you in less than 24 hours.","Yes, we design and develop Android and iOS apps using the latest technologies to ensure fast performance and an excellent user experience."];
        faqQuestions.forEach((q, i) => { if(qEn[i]) q.innerText = qEn[i]; });
        faqAnswers.forEach((a, i) => { if(aEn[i]) a.innerText = aEn[i]; });

        if(footerAboutTitle) footerAboutTitle.innerText = "About Us";
        if(footerAboutText) footerAboutText.innerHTML = 'At <strong>BLUE LINES</strong>, we craft powerful digital experiences for businesses that aim to grow and stand out. Turning Ideas Into Digital Reality. 💙🚀';
        if(footerMenuTitle) footerMenuTitle.innerText = "MENU";
        if(footerMenuLinks.length > 0) { footerMenuLinks[0].innerText = "HOME"; footerMenuLinks[1].innerText = "Portfolio"; footerMenuLinks[2].innerText = "Applications Design"; }
        if(footerCareTitle) footerCareTitle.innerText = "Customer Care";
        if(footerCareLinks.length > 0) { footerCareLinks[0].innerText = "Privacy Policy"; footerCareLinks[1].innerText = "Terms & Conditions"; footerCareLinks[2].innerText = "About Us"; }
        if(footerSignupTitle) footerSignupTitle.innerText = "Sign up for new stories and personal offers";
        if(footerCopyright) footerCopyright.innerHTML = 'BLUE LINES – All Rights Reserved © 2026';

        if(themesTitle) themesTitle.innerText = "Themes";
        if(themesSubtext) themesSubtext.innerText = "We craft professional themes across various industries — from fashion and perfumes to cosmetics, watches, and more.";
        if(themesViewAll) themesViewAll.innerText = "View all ›";
        if(themesExploreBtn) themesExploreBtn.innerText = "Explore Our Portfolio";
        const themesEn = ["Fashion Themes","Perfumes Themes","Cosmetics Themes","Watches & Accessories","Other"];
        themesCards.forEach((card, i) => { if(themesEn[i]) card.innerText = themesEn[i]; });

        // Pricing إنجليزي
        if(pricingTitle) pricingTitle.innerText = "Pricing";
        if(featuredBadge) featuredBadge.innerText = "Most Popular";
        planNames.forEach((el, i) => { const en = ["Basic Plan","Standard Plan","Pro Plan"]; if(en[i]) el.innerText = en[i]; });
        cardOnce.forEach(el => el.innerText = "One-time payment");
        pricingBtns.forEach(el => el.innerText = "Get Started");

        const basicEn = [["$5 Cashback on your wallet","~1.70 EGP off every order"],[".store / .online / .shop domain"],["Theme customization & setup"],["Sections & page design"],["1 month support"]];
        basicFeatures.forEach((li, i) => { if(basicEn[i]) setLiText(li, basicEn[i][0], basicEn[i][1]); });

        const standardEn = [["$5 Cashback on your wallet","~1.70 EGP off every order"],[".com / .store / .online / .shop domain"],["Theme customization & setup"],["Sections & page design"],["Google Search Console setup"],["1 month support"]];
        standardFeatures.forEach((li, i) => { if(standardEn[i]) setLiText(li, standardEn[i][0], standardEn[i][1]); });

        const proEn = [["$10 Cashback on your wallet","~1.70 EGP off every order"],[".com / .net domain"],["Theme customization & setup"],["Sections & page design"],["Google Search Console setup"],["1 month support"],["Products upload & management — up to 50 products"],["Android APK app development"]];
        proFeatures.forEach((li, i) => { if(proEn[i]) setLiText(li, proEn[i][0], proEn[i][1]); });

        btn.innerText = "Arabic";
        currentLang = 'en';
    }
}
</script>




<script>
/**
 * 🚀 BLUE LINES - ULTRA LIGHTSPEED VERSION (Unified)
 * وظيفة الكود: حماية المحتوى، تسريع الصور، وفتح القفل بكلمة سر
 */
(function() {
    const _d = document;
    let isAdmin = false;
    let buf = "";

    // الإعدادات
    const PASS = "الله";
    const COMBO = "5-5*5";

    // 1️⃣ حماية الكليك يمين (تعتمد على حالة isAdmin)
    // بمجرد أن تصبح isAdmin = true، سيعود الكليك يمين للعمل تلقائياً
    _d.addEventListener('contextmenu', e => {
        if (!isAdmin) {
            e.preventDefault();
        }
    }, true);

    // 2️⃣ المعالج الذكي للأزرار (الفتح والحظر)
    _d.addEventListener('keydown', function(e) {
        // تسجيل آخر 10 ضغطات فقط لتوفير الذاكرة
        buf = (buf + e.key).slice(-10);

        // التحقق من كلمة السر أو الكومبو لفك الحظر
        if (buf.includes(PASS) || buf.includes(COMBO)) {
            isAdmin = true;
            console.log("🔓 تم فك حماية الصفحة بنجاح");
            return; 
        }

        // إذا لم يكن "آدمن"، يتم تنفيذ القيود التالية:
        if (!isAdmin) {
            // منع F12
            if (e.keyCode === 123) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }

            // منع Shift و Control وأي اختصارات مرتبطة بهما
            if (e.ctrlKey || e.shiftKey || e.key === "Control" || e.key === "Shift") {
                e.preventDefault();
                e.stopImmediatePropagation();
                return false;
            }
        }
    }, true);

    // 3️⃣ تقنية الفلاش لتحسين أداء الصور (LCP)
    _d.addEventListener('DOMContentLoaded', () => {
        const imgs = _d.querySelectorAll('img');
        imgs.forEach(img => {
            if(!img.getAttribute('loading')) img.setAttribute('loading', 'lazy');
            img.setAttribute('decoding', 'async'); // تسريع رندر الصور
        });
    });

    // 4️⃣ تحسين بسيط للتمرير (Smooth Scroll)
    _d.documentElement.style.scrollBehavior = 'smooth';

})();
</script>








<script>
const slider = document.querySelector('.testi-slider');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

const step = 405;

leftArrow.addEventListener('click', () => {
  slider.scrollLeft -= step;
});

rightArrow.addEventListener('click', () => {
  slider.scrollLeft += step;
});
</script>

<!-- منع الترجمة التلقائية نهائياً -->
<meta name="google" content="notranslate">

<script>
  // منع الترجمة عن الصفحة كلها
  document.documentElement.setAttribute("translate", "no");
  document.documentElement.setAttribute("lang", "ar");
  document.documentElement.setAttribute("dir", "rtl");
</script>




 
<!DOCTYPE html>
<html dir="rtl" lang="ar">
  <head>
    <meta charset="UTF-8" />
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-Y1F28T2SY8"
    ></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-Y1F28T2SY8");
    </script>
    <script>
      !(function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js",
      );
      fbq("init", "1527228694442831");
      fbq("track", "PageView");
    </script>
    <script>
      // @ts-ignore
      !(function (w, d, t) {
        w.TiktokAnalyticsObject = t;
        var ttq = (w[t] = w[t] || []);
        (ttq.methods = [
          "page",
          "track",
          "identify",
          "instances",
          "debug",
          "on",
          "off",
          "once",
          "ready",
          "alias",
          "group",
          "enableCookie",
          "disableCookie",
          "holdConsent",
          "revokeConsent",
          "grantConsent",
        ]),
          (ttq.setAndDefer = function (t, e) {
            t[e] = function () {
              t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
            };
          });
        for (var i = 0; i < ttq.methods.length; i++)
          ttq.setAndDefer(ttq, ttq.methods[i]);
        (ttq.instance = function (t) {
          for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++)
            ttq.setAndDefer(e, ttq.methods[n]);
          return e;
        }),
          (ttq.load = function (e, n) {
            var r = "https://analytics.tiktok.com/i18n/pixel/events.js",
              o = n && n.partner;
            (ttq._i = ttq._i || {}),
              (ttq._i[e] = []),
              (ttq._i[e]._u = r),
              (ttq._t = ttq._t || {}),
              (ttq._t[e] = +new Date()),
              (ttq._o = ttq._o || {}),
              (ttq._o[e] = n || {});
            n = document.createElement("script");
            (n.type = "text/javascript"),
              (n.async = !0),
              (n.src = r + "?sdkid=" + e + "&lib=" + t);
            e = document.getElementsByTagName("script")[0];
            e.parentNode.insertBefore(n, e);
          });

        ttq.load("D1V1TLRC77U6OAPOQFB0");
        ttq.page();
      })(window, document, "ttq");
    </script>
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title> EasyOrders - أفضل منصة متاجر عربية</title>
    <link href="/favicon.ico" rel="icon" sizes="16x16" type="image/png" />
    <link href="/favicon.ico" rel="icon" sizes="32x32" type="image/png" />
    <link href="/icon-192x192.png" rel="apple-touch-icon" />
    <link color="#FFFFFF" href="/icon-192x192.png" rel="mask-icon" />

    <link href="https://fonts.googleapis.com" rel="preconnect" />
    <link crossorigin href="https://fonts.gstatic.com" rel="preconnect" />
<!--    <link-->
<!--      href="https://fonts.googleapis.com/css2?family=Noto Sans Arabic:wght@200;300;400;500;600;700;800&display=swap"-->
<!--      rel="stylesheet"-->
<!--    />  -->
    <link
      href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@200;300;400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
    <!--    <link href="/manifest.webmanifest" rel="manifest">-->
    <meta content="#22c55e" name="theme-color" />
    <script type="module" crossorigin src="/assets/index-Db6cFWfy.js"></script>
    <link rel="stylesheet" crossorigin href="/assets/index-DY7Huc2q.css">
  </head>
  <body dir="rtl">
    <div id="root"></div>
    <script>
      const global = globalThis;
    </script>
   
  </body>
</html>














<div id="videoBannerBlock">
  <section class="video-hero" id="videoHero">
    <div class="video-overlay"></div>

    <video id="desktopVideo" autoplay muted loop playsinline fetchpriority="high">
      <source src="https://template.canva.com/EAF3SVNMK9k/1/document_1440w-fn3sLRZQqRo.mp4" type="video/mp4">
    </video>

    <video id="mobileVideo" autoplay muted loop playsinline fetchpriority="high">
      <source src="https://files.easy-orders.net/1777763596681939421.mp4" type="video/mp4">
    </video>

    <div class="hero-content-wrapper">
      <h1 class="hero-main-title">LAUNCH YOUR WEBSITE <br>WITH US</h1>
      <a href="/collections/TOP-10-DESIGN" class="hero-btn-explore">EXPLORE OUR PORTFOLIO </a>
    </div>
  </section>

  <style>
    /* تحسين الرندر: استخدام content-visibility لتقليل جهد المتصفح */
    .video-hero {
      position: relative;
      width: 100%;
      height: 75vh;
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;
      overflow: hidden;
      background: #000; /* خلفية سوداء فورية حتى لا تظهر مساحة بيضاء */
      padding-bottom: 60px;
      contain: layout; 
    }

    .video-overlay {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0, 0, 0, 0.2);
      z-index: 2;
    }

    /* تحسين أداء الفيديو */
    .video-hero video {
      position: absolute;
      top: 50%; left: 50%;
      min-width: 100%; min-height: 100%;
      transform: translate(-50%, -50%);
      object-fit: cover;
      z-index: 1;
      will-change: transform; /* تسريع المعالجة بواسطة كارت الشاشة */
    }

    .hero-content-wrapper {
      position: relative;
      z-index: 3;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 40px;
    }

    .hero-main-title {
      color: #ffffff;
      font-size: clamp(2rem, 6vw, 4.5rem);
      font-weight: 900;
      line-height: 1.1;
      margin-bottom: 30px;
      text-transform: uppercase;
      font-family: 'Arial Black', sans-serif;
    }

    .hero-btn-explore {
      display: inline-block;
      background-color: #ffffff;
      color: #000000;
      text-decoration: none;
      padding: 18px 45px;
      font-size: 14px;
      font-weight: bold;
      transition: transform 0.2s ease;
    }

    #desktopVideo { display: block; }
    #mobileVideo { display: none; }

    @media (max-width: 768px) {
      .video-hero { height: 75vh; padding-bottom: 40px; }
      #desktopVideo { display: none; }
      #mobileVideo { display: block; }
      .hero-content-wrapper { padding: 0 20px; margin-bottom: -10px; }
      .hero-main-title { font-size: 2.1rem; line-height: 1.0; margin-bottom: 20px; }
      .hero-btn-explore { width: auto; padding: 14px 25px; }
    }
  </style>
</div>











<style>
  /* تنسيق الحاوية الرئيسية باستخدام الـ ID */
  #CustomersSection {
    background: #000000;
    padding: 30px 0;
    overflow: hidden;
    direction: ltr;
  }

  /* تنسيق العنوان باستخدام الـ ID */
  #CustomersTitle {
    text-align: center;
    color: #ffffff;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 20px;
    font-family: sans-serif;
  }

  /* منطقة العرض */
  #LogosViewport {
    display: flex;
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  /* الشريط المتحرك */
  #LogosTrack {
    display: flex;
    gap: 40px;
    animation: scroll-left 30s linear infinite;
    will-change: transform;
    align-items: center;
  }

  /* كلاس للعناصر (بقي كلاس لتسهيل التكرار) */
  .logo-item {
    flex: 0 0 100px; /* عرض الصورة للكمبيوتر */
  }

  .logo-item img {
    width: 100%;
    height: 50px;
    object-fit: contain;
    display: block;
  }

  /* حركة الشريط */
  @keyframes scroll-left {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  /* الموبايل: عرض 3 صور */
  @media (max-width: 767px) {
    .logo-item {
      flex: 0 0 calc(33.33vw - 40px);
    }
    #LogosTrack {
      gap: 30px;
    }
  }
</style>

<section id="CustomersSection">
  <h2 id="CustomersTitle">OUR CUSTOMERS</h2>
  
  <div id="LogosViewport">
    <div id="LogosTrack">
      <div id="CustLogo_1" class="logo-item"><img src="https://files.easy-orders.net/1770668006964829665.png"></div>
      <div id="CustLogo_2" class="logo-item"><img src="https://files.easy-orders.net/1770618581545731677.png"></div>
      <div id="CustLogo_3" class="logo-item"><img src="https://files.easy-orders.net/1770617521581488934.png"></div>
      <div id="CustLogo_4" class="logo-item"><img src="https://files.easy-orders.net/1770617538067938362.png"></div>
      <div id="CustLogo_5" class="logo-item"><img src="https://files.easy-orders.net/1770617553150107584.png"></div>
      <div id="CustLogo_6" class="logo-item"><img src="https://files.easy-orders.net/1770617800681361068.png"></div>
      <div id="CustLogo_7" class="logo-item"><img src="https://files.easy-orders.net/1770617906095129122.png"></div>
      <div id="CustLogo_8" class="logo-item"><img src="https://files.easy-orders.net/1770618076698827899.png"></div>
      <div id="CustLogo_9" class="logo-item"><img src="https://files.easy-orders.net/1770618199840923599.png"></div>
      <div id="CustLogo_10" class="logo-item"><img src="https://files.easy-orders.net/1770618277284379089.png"></div>
      <div id="CustLogo_11" class="logo-item"><img src="https://files.easy-orders.net/1770619350131257091.png"></div>
      <div id="CustLogo_12" class="logo-item"><img src="https://files.easy-orders.net/1770618482979438793.png"></div>
      <div id="CustLogo_13" class="logo-item"><img src="https://files.easy-orders.net/1770618339508616634.png"></div>
      <div id="CustLogo_14" class="logo-item"><img src="https://files.easy-orders.net/1770618411876682157.png"></div>
      <div id="CustLogo_15" class="logo-item"><img src="https://files.easy-orders.net/1770619313227653347.png"></div>
      <div id="CustLogo_16" class="logo-item"><img src="https://files.easy-orders.net/1770619330982057747.png"></div>
      <div id="CustLogo_17" class="logo-item"><img src="https://files.easy-orders.net/1770619803853773961.png"></div>
      <div id="CustLogo_18" class="logo-item"><img src="https://files.easy-orders.net/1770619820073733931.png"></div>
      <div id="CustLogo_19" class="logo-item"><img src="https://files.easy-orders.net/1770619808307249057.png"></div>

      <div class="logo-item"><img src="https://files.easy-orders.net/1770668006964829665.png"></div>
      <div class="logo-item"><img src="https://files.easy-orders.net/1770618581545731677.png"></div>
      <div class="logo-item"><img src="https://files.easy-orders.net/1770617521581488934.png"></div>
      <div class="logo-item"><img src="https://files.easy-orders.net/1770617538067938362.png"></div>
      <div class="logo-item"><img src="https://files.easy-orders.net/1770617553150107584.png"></div>
      <div class="logo-item"><img src="https://files.easy-orders.net/1770617800681361068.png"></div>
      <div class="logo-item"><img src="https://files.easy-orders.net/1770617906095129122.png"></div>
      <div class="logo-item"><img src="https://files.easy-orders.net/1770618076698827899.png"></div>
      <div class="logo-item"><img src="https://files.easy-orders.net/1770618199840923599.png"></div>
      <div class="logo-item"><img src="https://files.easy-orders.net/1770618277284379089.png"></div>
      <div class="logo-item"><img src="https://files.easy-orders.net/1770619350131257091.png"></div>
      <div class="logo-item"><img src="https://files.easy-orders.net/1770618482979438793.png"></div>
      <div class="logo-item"><img src="https://files.easy-orders.net/1770618339508616634.png"></div>
      <div class="logo-item"><img src="https://files.easy-orders.net/1770618411876682157.png"></div>
      <div class="logo-item"><img src="https://files.easy-orders.net/1770619313227653347.png"></div>
      <div class="logo-item"><img src="https://files.easy-orders.net/1770619330982057747.png"></div>
      <div class="logo-item"><img src="https://files.easy-orders.net/1770619803853773961.png"></div>
      <div class="logo-item"><img src="https://files.easy-orders.net/1770619820073733931.png"></div>
      <div class="logo-item"><img src="https://files.easy-orders.net/1770619808307249057.png"></div>
    </div>
  </div>
</section>



<script>
(function() {
  var videos = document.querySelectorAll('#Themes video');
  if (!videos.length) return;

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      var vid = entry.target;
      if (entry.isIntersecting) {
        vid.play();
      } else {
        vid.pause();
      }
    });
  }, { threshold: 0.2 });

  videos.forEach(function(vid) {
    observer.observe(vid);
  });
})();
</script><script>
(function() {
  var videos = document.querySelectorAll('#Themes video');
  if (!videos.length) return;

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      var vid = entry.target;
      if (entry.isIntersecting) {
        vid.play();
      } else {
        vid.pause();
      }
    });
  }, { threshold: 0.2 });

  videos.forEach(function(vid) {
    observer.observe(vid);
  }); 
})(); 
</script> 









<style>
  /* تغيير خلفية الكارد بالكامل للون الأسود */
.ab-mobile-menu-card {
    background-color: #000000 !important;
}

/* تنسيق الروابط والنصوص باللون الذهبي المطلوب */
.ab-mobile-nav .ab-mobile-nav-link,
.ab-mobile-nav .ab-mobile-nav-label {
    color: #fff!important;
    text-decoration: none; /* لإزالة أي خط تحت الكلام */
    transition: opacity 0.2s ease;
}

/* تأثير خفيف عند الضغط أو التمرير على اللينك */
.ab-mobile-nav .ab-mobile-nav-link:hover,
.ab-mobile-nav .ab-mobile-nav-link:active {
    opacity: 0.8;
}





.scroll-trans-v1-section {
  position: relative;
  
  /* تمديد السكشن لملء الشاشة بالعرض */
  margin-inline: calc(-50vw + 50%) !important;
  width: 100vw !important;

  /* إلغاء الحتة البيضاء فوق وتحت عن طريق هوامش سالبة */
  margin-top: -32px !important;    /* توافقاً مع pt-8 */
  margin-bottom: -32px !important; /* توافقاً مع pb-8 */
}

.stv1-sticky {
  position: sticky;
  top: 0;
  height: 100vh; /* ضبط الارتفاع ليكون على قد الشاشة بالظبط */
  overflow: hidden;
  isolation: isolate;
}

/* شاشات الموبايل والتابلت (أقل من 640px وما فوقها لتغطية كلاسات sm:) */
@media (min-width: 640px) {
  .scroll-trans-v1-section {
    margin-top: -40px !important;    /* توافقاً مع sm:pt-10 */
    margin-bottom: -40px !important; /* توافقاً مع sm:pb-10 */
  }
}

@media (max-width: 768px) {
  .scroll-trans-v1-section,
  .scroll-trans-v1-section .stv1-container {
    --init-width: 180px;
    --init-height: 270px;
  }
}
  </style>






