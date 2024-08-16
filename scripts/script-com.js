
// navigation buttons related 
function changeover()
{
  document.getElementById("CATEGORIES").style.color = "rgba(0,0,0,1)";
  document.getElementById("Rectangle_9").style.fill = "rgba(255,119,119,1)";
  document.getElementsByClassName("Rectangle_9")[0].style.filter = "drop-shadow(0px 15px 40px rgba(255,119,119,0.6))";
  document.getElementById("cat-menu").style.visibility = "visible";
  document.getElementById("about-me-main").style.visibility = "hidden";
  document.getElementById("ABOUT_ME").style.color = "";
  document.getElementById("Rectangle_7").style.fill = "";
  document.getElementsByClassName("Rectangle_7")[0].style.filter = "";
  document.getElementById("REVIEWS").style.color = "";
  document.getElementById("Rectangle_8").style.fill = "";
  document.getElementsByClassName("Rectangle_8")[0].style.filter = "";
  document.getElementById("reviews-main").style.visibility = "hidden";
  document.getElementById("cat-cross").style.visibility = "visible";
  document.getElementById("about-cross").style.visibility = "hidden";
  document.getElementById("reviews-cross").style.visibility = "hidden";
  document.getElementById("menu-pointer").style.visibility = "visible";
  document.getElementById("menu-pointer-review").style.visibility = "hidden";
  document.getElementById("menu-pointer-about").style.visibility = "hidden";
}
function changeout() {  }

function catclickmainappear()
{
  document.getElementById("cat-menu").style.visibility = "visible";
}
function reviewclickmainappear()
{
  document.getElementById("reviews-main").style.visibility = "visible";
}
function aboutclickmainappear()
{
  document.getElementById("about-me-main").style.visibility = "visible";
}

function changefirst()
{
  document.getElementById("ABOUT_ME").style.color = "rgba(0,0,0,1)";
  document.getElementById("Rectangle_7").style.fill = "rgba(255,119,119,1)";
  document.getElementsByClassName("Rectangle_7")[0].style.filter = "drop-shadow(0px 15px 40px rgba(255,119,119,0.6))";
  document.getElementById("about-me-main").style.visibility = "visible";
  document.getElementById("cat-menu").style.visibility = "hidden";
  document.getElementById("submenu-phones").style.visibility = "hidden";
  document.getElementById("submenu-speakers").style.visibility = "hidden";
  document.getElementById("submenu-earbuds").style.visibility = "hidden";
  document.getElementById("submenu-accessories").style.visibility = "hidden";
  document.getElementById("CATEGORIES").style.color = "";
  document.getElementById("Rectangle_9").style.fill = "";
  document.getElementsByClassName("Rectangle_9")[0].style.filter = "";
  document.getElementById("REVIEWS").style.color = "";
  document.getElementById("Rectangle_8").style.fill = "";
  document.getElementsByClassName("Rectangle_8")[0].style.filter = "";
  document.getElementById("reviews-main").style.visibility = "hidden";
  document.getElementById("about-cross").style.visibility = "visible";
  document.getElementById("cat-cross").style.visibility = "hidden";
  document.getElementById("reviews-cross").style.visibility = "hidden";
  document.getElementById("speakers-style").style.border = "";
  document.getElementById("earbuds-style").style.border = "";
  document.getElementById("phones-style").style.border = "";
  document.getElementById("accessories-style").style.border = "";
  document.getElementById("menu-pointer").style.visibility = "hidden";
  document.getElementById("menu-pointer-review").style.visibility = "hidden";
  document.getElementById("menu-pointer-about").style.visibility = "visible";
}
function changesecond() {  } 

function outsideclick()
{ 
  document.getElementById('about-me-main');
  document.getElementById('cat-menu');
  document.getElementById('submenu-phones');
  document.getElementById('submenu-speakers');
  document.getElementById('submenu-earbuds');
  document.getElementById('submenu-accessories');

  document.onclick = function(e)
  {
    if(e.target.id !== 'about-me-main' && e.target.id !== 'about-me' && e.target.id !== 'about-site' && e.target.id !== 'privacy-policy' && e.target.id !== 'contact' && e.target.id !== 'cat-menu' && e.target.id !== 'submenu-accessories' && e.target.id !== 'submenu-earbuds' && e.target.id !== 'submenu-speakers' && e.target.id !== 'submenu-phones' && e.target.id !== 'phones-style' && e.target.id !== 'speakers-style' && e.target.id !== 'earbuds-style' && e.target.id !== 'accessories-style' && e.target.id !== 'next-icon' && e.target.id !== 'reviews-main' && e.target.id !== 'cat-hover' && e.target.id !== 'reviews-hover' && e.target.id !== 'about-me-hover' && e.target.id !== 'btn-post' && e.target.id !== 'ID3380378_exploration_zoom_mag')
    {
      //element clicked wasn't the div; hide the div
      document.getElementById("about-me-main").style.visibility = 'hidden';
      document.getElementById("ABOUT_ME").style.color = "";
      document.getElementById("Rectangle_7").style.fill = "";
      document.getElementsByClassName("Rectangle_7")[0].style.filter = "";
      document.getElementById("CATEGORIES").style.color = "";
      document.getElementById("Rectangle_9").style.fill = "";
      document.getElementsByClassName("Rectangle_9")[0].style.filter = "";
      document.getElementById("cat-menu").style.visibility = "hidden";
      document.getElementById("submenu-phones").style.visibility = "hidden";
      document.getElementById("submenu-speakers").style.visibility = "hidden";
      document.getElementById("submenu-earbuds").style.visibility = "hidden";
      document.getElementById("submenu-accessories").style.visibility = "hidden";
      document.getElementById("reviews-main").style.visibility = "hidden";
      document.getElementById("REVIEWS").style.color = "";
      document.getElementById("Rectangle_8").style.fill = "";
      document.getElementsByClassName("Rectangle_8")[0].style.filter = "";
      document.getElementById("cat-cross").style.visibility = "hidden";
      document.getElementById("about-cross").style.visibility = "hidden";
      document.getElementById("reviews-cross").style.visibility = "hidden";
      document.getElementById("thank-you").style.visibility = "hidden";
      document.getElementById("speakers-style").style.border = "";
      document.getElementById("earbuds-style").style.border = "";
      document.getElementById("phones-style").style.border = "";
      document.getElementById("accessories-style").style.border = "";
      document.getElementById("search-tip-text").style.visibility = "";
      document.getElementById("menu-pointer").style.visibility = "hidden";
      document.getElementById("menu-pointer-review").style.visibility = "hidden";
      document.getElementById("menu-pointer-about").style.visibility = "hidden"; 
    }
  }
}

var outcheck = outsideclick();

function changeabouton()
{
  document.getElementById("about-me").style.border = "6px rgba(255,119,119,0.5) solid";
}
function changeaboutout()
{
  document.getElementById("about-me").style.border = "";
}

function changesiteon()
{
  document.getElementById("about-site").style.border = "6px rgba(255,119,119,0.5) solid";  
}
function changesiteout()
{
  document.getElementById("about-site").style.border = "";
}

function changeprivacyon()
{
  document.getElementById("privacy-policy").style.border = "6px rgba(255,119,119,0.5) solid";  
}
function changeprivacyout()
{
  document.getElementById("privacy-policy").style.border = "";
}

function changecontacton()
{
  document.getElementById("contact").style.border = "6px rgba(255,119,119,0.5) solid";  
}
function changecontactout()
{
  document.getElementById("contact").style.border = "";
}

function changephoneon()
{
    document.getElementById("submenu-phones").style.visibility = "visible";
    document.getElementById("submenu-earbuds").style.visibility = "hidden";
    document.getElementById("submenu-accessories").style.visibility = "hidden";
    document.getElementById("submenu-speakers").style.visibility = "hidden";
    document.getElementById("phones-style").style.border = "6px rgba(255,119,119,0.5) solid";
    document.getElementById("speakers-style").style.border = "";
	  document.getElementById("earbuds-style").style.border = "";
	  document.getElementById("accessories-style").style.border = "";
    document.getElementById("article-links").style.visibility = "visible";
}
function changephoneout()
{
	document.getElementById("submenu-phones").style.visibility = "visible";
	document.getElementById("article-links").style.visibility = "";
}
function subphoneclickappear()
{
	document.getElementById("submenu-phones").style.visibility = "visible";
}

function changespeakeron()
{
    document.getElementById("submenu-speakers").style.visibility = "visible";
    document.getElementById("submenu-phones").style.visibility = "hidden";
    document.getElementById("submenu-earbuds").style.visibility = "hidden";
    document.getElementById("submenu-accessories").style.visibility = "hidden";
    document.getElementById("speakers-style").style.border = "6px rgba(255,119,119,0.5) solid";
    document.getElementById("phones-style").style.border = "";
	  document.getElementById("earbuds-style").style.border = "";
	  document.getElementById("accessories-style").style.border = "";
}
function changespeakerout()
{
	document.getElementById("submenu-speakers").style.visibility = "visible";
}

function changeearbudon()
{
    document.getElementById("submenu-earbuds").style.visibility = "visible";
    document.getElementById("submenu-speakers").style.visibility = "hidden";
    document.getElementById("submenu-phones").style.visibility = "hidden";
    document.getElementById("submenu-accessories").style.visibility = "hidden";
    document.getElementById("earbuds-style").style.border = "6px rgba(255,119,119,0.5) solid";
    document.getElementById("speakers-style").style.border = "";
	  document.getElementById("phones-style").style.border = "";
	  document.getElementById("accessories-style").style.border = "";
}
function changeearbudout()
{
	document.getElementById("submenu-earbuds").style.visibility = "visible";
}

function changeaccessoryon()
{
    document.getElementById("submenu-accessories").style.visibility = "visible";
    document.getElementById("submenu-earbuds").style.visibility = "hidden";
    document.getElementById("submenu-speakers").style.visibility = "hidden";
    document.getElementById("submenu-phones").style.visibility = "hidden";
    document.getElementById("accessories-style").style.border = "6px rgba(255,119,119,0.5) solid";
    document.getElementById("speakers-style").style.border = "";
	  document.getElementById("earbuds-style").style.border = "";
	  document.getElementById("phones-style").style.border = "";
}
function changeaccessoryout()
{
	document.getElementById("submenu-accessories").style.visibility = "visible";
}

function changereviewon()
{
    document.getElementById("reviews-main").style.visibility = "visible";
    document.getElementById("REVIEWS").style.color = "rgba(0,0,0,1)";
    document.getElementById("Rectangle_8").style.fill = "rgba(255,119,119,1)";
    document.getElementsByClassName("Rectangle_8")[0].style.filter = "drop-shadow(0px 15px 40px rgba(255,119,119,0.6))";
    document.getElementById("ABOUT_ME").style.color = "";
    document.getElementById("Rectangle_7").style.fill = "";
    document.getElementsByClassName("Rectangle_7")[0].style.filter = "";
    document.getElementById("CATEGORIES").style.color = "";
    document.getElementById("Rectangle_9").style.fill = "";
    document.getElementsByClassName("Rectangle_9")[0].style.filter = "";
    document.getElementById("cat-menu").style.visibility = "hidden";
    document.getElementById("submenu-phones").style.visibility = "hidden";
    document.getElementById("submenu-speakers").style.visibility = "hidden";
    document.getElementById("submenu-earbuds").style.visibility = "hidden";
    document.getElementById("submenu-accessories").style.visibility = "hidden";
    document.getElementById("about-me-main").style.visibility = "hidden";
    document.getElementById("reviews-cross").style.visibility = "visible";
    document.getElementById("cat-cross").style.visibility = "hidden";
    document.getElementById("about-cross").style.visibility = "hidden";
    document.getElementById("speakers-style").style.border = "";
    document.getElementById("earbuds-style").style.border = "";
    document.getElementById("phones-style").style.border = "";
    document.getElementById("accessories-style").style.border = "";
    document.getElementById("menu-pointer").style.visibility = "hidden";
    document.getElementById("menu-pointer-review").style.visibility = "visible";
    document.getElementById("menu-pointer-about").style.visibility = "hidden";     
}
function changereviewout() {  }

function reviewoneon()
{
	document.getElementById("review-one").style.border = "6px rgba(255,119,119,0.5) solid";
	document.getElementById("review-one-tip-text").style.visibility = "visible";
}
function reviewoneout()
{
	document.getElementById("review-one").style.border = "";
	document.getElementById("review-one-tip-text").style.visibility = "";
}

function reviewtwoon()
{
	document.getElementById("review-two").style.border = "6px rgba(255,119,119,0.5) solid";
	document.getElementById("review-two-tip-text").style.visibility = "visible";
}
function reviewtwoout()
{
	document.getElementById("review-two").style.border = "";
	document.getElementById("review-two-tip-text").style.visibility = "";
}

function reviewthreeon()
{
    document.getElementById("review-three").style.border = "6px rgba(255,119,119,0.5) solid";
    document.getElementById("review-three-tip-text").style.visibility = "visible";
}
function reviewthreeout()
{
    document.getElementById("review-three").style.border = "";
    document.getElementById("review-three-tip-text").style.visibility = "";
}

function reviewfouron()
{
    document.getElementById("review-four").style.border = "6px rgba(255,119,119,0.5) solid";
    document.getElementById("review-four-tip-text").style.visibility = "visible";
}
function reviewfourout()
{
    document.getElementById("review-four").style.border = "";
    document.getElementById("review-four-tip-text").style.visibility = "";
}

function reviewsallon()
{
    document.getElementById("reviews-all").style.border = "4px rgba(255,119,119,0.4) solid";
    document.getElementById("reviews-all").style.color = "rgba(0,0,0,0.60)";
    document.getElementById("reviews-all-tip-text").style.visibility = "visible";
}
function reviewsallout()
{
    document.getElementById("reviews-all").style.border = "";
    document.getElementById("reviews-all").style.color = "";
    document.getElementById("reviews-all-tip-text").style.visibility = "";
}

function thanksappear()
{
    document.getElementById("thank-you").style.visibility = "visible";
    setTimeout(function() 
    {
        alert('Your Feedback has been sent successfully.');

    }, 1000); 
}

function blankfieldson()
{
	document.getElementById("blank-fields").style.visibility = "visible";
}
function blankfieldsout()
{
	document.getElementById("blank-fields").style.visibility = "";
}

function popcrosstipon()
{
	document.getElementById("cross-tip-text").style.visibility = "visible";
}
function popcrosstipout()
{
	document.getElementById("cross-tip-text").style.visibility = "";
}

function searchtips()
{
	document.getElementById("search-tip-text").style.visibility = "visible";
}

function toppickson()
{
	document.getElementById("top-picks-text").style.visibility = "visible";
}
function toppicksout()
{
	document.getElementById("top-picks-text").style.visibility = "";
}

function scrolldown()
{
  var artcontainer = document.querySelector(".articles-container"); 
  artcontainer.style.overflowY = "scroll"; var containerheight = artcontainer.offsetHeight; 
  var contentheight = artcontainer.scrollHeight; var currentscroll = artcontainer.scrollTop; 
  var newscroll = currentscroll + 1000; artcontainer.scrollTo({ top: newscroll, behavior: 'smooth' }); 
  if (currentscroll + containerheight >= contentheight - 1000) { 
  document.querySelector(".scroll-clk-button").style.display = "none"; } 
}
function scrltipon() { document.querySelector(".scroll-here-tip").style.visibility = "visible"; }
function scrltipout() { document.querySelector(".scroll-here-tip").style.visibility = ""; }

let outvalTimer = false;
function outscale()
{
     let checkscale, sizedetection;
     let fcone = false, fctwo = false;
     let valTimer1 = false, valTimer2 = false, valTimer3 = false, valTimer4 = false;
     const viewportWidth = window.innerWidth;
     var initialWidth = viewportWidth;
     function scaleMe2(initialWidth)
     {
        let ftstyle1, ftstyle2, ftstyle3, ftstyle4, ftsize;
        const parentElementNew = document.querySelector('.fc-consent-root');
        const bodyOverflow = window.getComputedStyle(document.body).overflow;
        const footerDiv = document.querySelector('.fc-footer.fc-dialog-restricted-content');

        const documentHeight = document.documentElement.scrollHeight;
        const viewportHeight = window.innerHeight; const scrollPosition = window.scrollY;
        const mediain = window.matchMedia("(max-width: 615px)").matches;
        const topButton = document.querySelector('#scroll-top-button');
        const topArrow = document.querySelector('#Path_1');

        const tran1 = document.getElementById("out-cmnt");
        const tran2 = document.getElementById("ads-vertical-two");
        const tran3 = document.getElementById("hot-dvs-sctn");
        const tran4 = document.getElementById("ads-vertical-one");
        const tran5 = document.getElementById("top-pos");

        if (parentElementNew || bodyOverflow === "hidden") 
        {
            if (parentElementNew) { window.scrollTo(0, 0); }
            document.body.style.overflow = "hidden";
            document.body.style.transform = "none";
            checkscale = "present"; fcone = false;

            tran1.style.visibility = "hidden"; tran2.style.visibility = "hidden"; tran3.style.visibility = "hidden"; 
            tran4.style.display = "none"; tran5.style.visibility = "hidden";
        }
        else 
        { 
            document.body.style.overflow = "visible"; 
            if (!fcone) { setTimeout(doso, 2500); fcone = true; }
            tran1.style.visibility = "visible"; tran2.style.visibility = "visible"; tran3.style.visibility = "visible"; 
            tran4.style.display = "block"; tran5.style.visibility = "visible";

            if (checkscale === "present") {
                if (window.matchMedia("(max-width: 615px)").matches) {
                    document.body.style.transform = "none"; // for pos-fxd
                }
                if (window.matchMedia("(min-width: 615px)").matches && window.matchMedia("(max-width: 1040.99px)").matches) {
                    document.body.style.transform = "scale(1.0)";
                }
                if (window.matchMedia("(min-width: 1041px)").matches && window.matchMedia("(max-width: 1241.99px)").matches) {
                    document.body.style.transform = "scale(0.920)";
                }
                if (window.matchMedia("(min-width: 1242px)").matches && window.matchMedia("(max-width: 1500.99px)").matches) {
                    document.body.style.transform = "scale(0.860)";
                }
                if (window.matchMedia("(min-width: 1501px)").matches) {
                    document.body.style.transform = "scale(0.80)";
                }
            }
            checkscale = "absent"; document.body.style.transform = "";
        }

        if (footerDiv) 
        {
            const secondPTag = footerDiv.querySelector('p:nth-child(2)');
            if (secondPTag) 
            {
                secondPTag.innerText = 'Some vendors may process your personal data on the basis of legitimate interest, which you can object to by managing your options below. Look for a link at the bottom of this page or in our privacy policy where you can withdraw consent at anytime.';
            }
        }

        function afterftclose() 
        {
            const documentHeight = document.documentElement.scrollHeight;
            const viewportHeight = window.innerHeight; const scrollPosition = window.scrollY;
            if (mediain && ((scrollPosition + viewportHeight) > (documentHeight - 400))) { topButton.style.boxShadow = 'none';
            topArrow.style.stroke = '#5c5c5c'; topButton.style.background = 'white'; }
            if (mediain && ((scrollPosition + viewportHeight) < (documentHeight - 400))) { topButton.style.boxShadow = '';
            topArrow.style.stroke = ''; topButton.style.background = ''; }
        }

        if (window.matchMedia("(min-width: 615px)").matches) { 
        sizedetection = "desk"; topButton.style.display = 'none'; }
        if (window.matchMedia("(max-width: 615px)").matches && sizedetection === "desk") 
        { buttonfxd(); topButton.style.boxShadow = ''; topButton.style.background = ''; topArrow.style.stroke = ''; }

        console.log("interval check");
        const annosa = document.getElementById('google-anno-sa');
        const hostElements = document.querySelectorAll('div[style*="color-scheme: initial"][style*="forced-color-adjust: initial"][style*="mask: initial"][style*="math-depth: initial"]');
        hostElements.forEach(hostElement => { alldynamic(hostElement, annosa, initialWidth); });

        const vignettes = document.querySelectorAll('.adsbygoogle.adsbygoogle-noablate');
        vignettes.forEach(vignette => { const inlineDisplay = vignette.style.getPropertyValue('display');
        if (inlineDisplay !== 'none' && vignette.hasAttribute('data-vignette-loaded')) {
        document.body.style.removeProperty('top'); } });

        function alldynamic(hostElement, annosa, initialWidth)
        {
           if (hostElement.shadowRoot) 
           {
               const shadowdom = hostElement.shadowRoot;
               const toolbar = shadowdom.getElementById('ft-floating-toolbar'); 
               const contain = shadowdom.querySelector('.ipr-container'); 

               const regMessageInfo = hostElement.shadowRoot.querySelector('.ft-reg-message-info');
               const regBubble = hostElement.shadowRoot.querySelector('.ft-reg-bubble');
               const regBubbleCloseIcon = hostElement.shadowRoot.querySelector('.ft-reg-bubble-close-icon');
               const regButton = hostElement.shadowRoot.querySelector('.ft-styless-button');
               const regMenu = hostElement.shadowRoot.querySelector('.ft-menu');

               if (contain)
               {
                   shadowdom.innerHTML = '';
                   shadowdom.host.remove();
                   console.log("removed");
               }

               if (toolbar)
               {
                   var style = document.createElement('style');
                   if (annosa) 
                   {
                       style.innerHTML = '#ft-floating-toolbar {'+'bottom: 75px !important;'+'}'; 
                       if (!valTimer4) { shadowdom.appendChild(style); valTimer4 = true; } 
                   }
                   else 
                   {
                       style.innerHTML = '#ft-floating-toolbar {'+'bottom: 50px !important;'+'}';
                       if (!valTimer3) { shadowdom.appendChild(style); valTimer3 = true; } 
                   }

                   if (regMessageInfo) {
                       regMessageInfo.style.setProperty('display', 'none', 'important');
                       ftstyle1 = "reg-message";
                   }
                   if (regMenu) {
                       regMenu.style.setProperty('box-shadow', 'none', 'important');
                   }
                   if (regBubble && ftstyle1 === "reg-message") {
                       regBubble.style.setProperty('bottom', '10px', 'important');
                       regBubble.style.setProperty('padding-left', '20px', 'important');
                       regBubble.style.setProperty('width', '220px', 'important');
                       regBubble.style.setProperty('border-radius', '50px', 'important');
                       regBubble.style.setProperty('max-height', '32px', 'important');
                       ftstyle2 = "reg-bubble";
                   }
                   if (regBubbleCloseIcon) {
                       regBubbleCloseIcon.onclick = function() { 
                       setInterval(afterftclose, 1000); valTimer1 = true; }
                       regBubbleCloseIcon.style.setProperty('right', '15px', 'important');
                       regBubbleCloseIcon.style.setProperty('position', 'absolute', 'important');
                       regBubbleCloseIcon.style.setProperty('top', '13px', 'important');
                       ftstyle3 = "reg-icon";
                   }
                   if (regButton) {
                       regButton.style.setProperty('border-radius', '55px', 'important');
                       ftstyle4 = "reg-button";
                   }
                   if (window.matchMedia("(min-width: 615px)").matches) {
                       hostElement.shadowRoot.innerHTML = '';
                       hostElement.shadowRoot.host.remove();
                       ftsize = "window-resized";
                   }
                   if (window.matchMedia("(max-width: 340px)").matches) {
                       shadowdom.innerHTML = '';
                       shadowdom.host.remove();
                   }
                   if (mediain && sizedetection === "desk") {
                       shadowdom.innerHTML = '';
                       shadowdom.host.remove();
                   }
               }

               if (ftstyle1 === "reg-message" && ftstyle2 === "reg-bubble" && ftstyle3 === "reg-icon" 
               && ftstyle4 === "reg-button" && (sizedetection !== "desk")) { topButton.style.boxShadow = 'none';
               topButton.style.background = 'white'; topArrow.style.stroke = '#5c5c5c'; }
               if (ftsize === "window-resized" && (sizedetection === "desk")) { topButton.style.boxShadow = '';
               topButton.style.background = ''; topArrow.style.stroke = ''; }

               const iframe = shadowdom.querySelector('#prose-iframe');
               if (iframe) 
               {
                   const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                   const iframeHtml = iframeDoc.documentElement; // select html element
                   iframeHtml.style.setProperty('overflow', 'hidden', 'important');
               }
           }

           const mediaout = window.matchMedia("(min-width: 615px)").matches;
           const mozFox = navigator.userAgent.toLowerCase().includes('firefox');
           const isdesk = (navigator.userAgent.match(/Win32|Win64|Windows|Macintosh|MacIntel|MacPPC|Mac68K/i));
           if ((annosa && mozFox && mediaout) || (annosa && !isdesk && mediaout)) { 
           document.body.style.removeProperty('padding-bottom');
           document.body.style.height = ""; document.body.style.transformOrigin = "";
           annosa.remove(); console.log("moz sa removed"); }

           const blank = document.querySelector('.after-hot-blank');
           const bodyStyles = window.getComputedStyle(document.body);
           const bodyTop = parseInt(bodyStyles.getPropertyValue('top'), 10) || 0; 
           const rect = blank.getBoundingClientRect(); 

           let parent, rectParent, leftPos, parentLeft;
           const viewportHeight = window.innerHeight;
           const viewportWidth = window.innerWidth;
           const annowidth = annosa.clientWidth;

           if (annosa && !mozFox && isdesk && mediaout) 
           {
               if (mediaout && !valTimer2) { 
               window.addEventListener('scroll', scrollsa, false); valTimer2 = true; }

               document.body.style.removeProperty('padding-bottom');
               if (window.matchMedia("(min-width: 615px)").matches && window.matchMedia("(max-width: 1040.99px)").matches) 
               {
                   var topPos = rect.top + window.scrollY; 
                   var adjustedTopPos = topPos + Math.abs(bodyTop); 
                   document.body.style.height = adjustedTopPos + "px"; 
                   document.body.style.transformOrigin = "50% 0%";

                   parent = document.querySelector('.articles-container');
                   rectParent = parent.getBoundingClientRect(); leftPos = rectParent.left;
                   parentLeft = ''+leftPos+'px'; // getting left value
               }
               if (window.matchMedia("(min-width: 1041px)").matches && window.matchMedia("(max-width: 1241.99px)").matches) 
               {
                   document.documentElement.style.height = "0px";
                   var topPos = (rect.top + window.scrollY) * 1.087; 
                   var adjustedTopPos = topPos + Math.abs(bodyTop); 
                   document.body.style.height = adjustedTopPos + "px"; 
                   document.body.style.transformOrigin = "50% 0%";

                   leftPos = viewportWidth * 0.035;
                   parentLeft = ''+leftPos+'px';
               }
               if (window.matchMedia("(min-width: 1242px)").matches && window.matchMedia("(max-width: 1500.99px)").matches) 
               {
                   document.documentElement.style.height = "0px";
                   var topPos = (rect.top + window.scrollY) * 1.1628; 
                   var adjustedTopPos = topPos + Math.abs(bodyTop); 
                   document.body.style.height = adjustedTopPos + "px"; 
                   document.body.style.transformOrigin = "50% 0%";

                   leftPos = viewportWidth * 0.035;
                   parentLeft = ''+leftPos+'px';
               }
               if (window.matchMedia("(min-width: 1501px)").matches) 
               {
                   document.documentElement.style.height = "0px";
                   var topPos = (rect.top + window.scrollY) * 1.250; 
                   var adjustedTopPos = topPos + Math.abs(bodyTop); 
                   document.body.style.height = adjustedTopPos + "px"; 
                   document.body.style.transformOrigin = "50% 0%";

                   leftPos = (viewportWidth * 0.035) + 100;
                   parentLeft = ''+leftPos+'px';
               }

               if (annowidth > 100) 
               {
                   annosa.style.setProperty('width', '400px', 'important');
                   annosa.style.setProperty('left', parentLeft, 'important');
                   // console.log("parent left = ", parentLeft);
               }
               if (annowidth < 100) 
               {
                   if (window.matchMedia("(min-width: 1501px)").matches) 
                   {
                       leftPos = (viewportWidth * 0.035) + 12.5; parentLeft = ''+leftPos+'px'; 
                       annosa.style.setProperty('left', parentLeft, 'important');
                   }
                   else { annosa.style.setProperty('left', parentLeft, 'important'); }
               }

               if (viewportWidth > (initialWidth + 10) || viewportWidth < (initialWidth - 10)) 
               {
                   if (mediaout) {
                   document.body.style.height = ""; 
                   document.body.style.transformOrigin = ""; annosa.remove();
                   window.removeEventListener('scroll', scrollsa); 
                   valTimer2 = false; }

                   if (mediaout && !fctwo) {
                   setTimeout(() => { doso(); fctwo = true; }, 1000); }
               }   else { fctwo = false; } 
           }

           if (annosa && mediain && (sizedetection !== "desk")) 
           {
               const annowidth = annosa.clientWidth;
               const lastele = document.getElementById('after-ft-phone');
               const rectin = lastele.getBoundingClientRect(); const topPos = rectin.top + window.scrollY; 
               lastele.style.border = "1px transparent solid"; const adjustedTopPos = topPos + Math.abs(bodyTop);
               document.body.style.removeProperty('padding-bottom');
               document.body.style.height = adjustedTopPos + "px"; 
               const viewportWidth = window.innerWidth;
               topButton.style.bottom = "80px";

               calwidth = viewportWidth - 30;
               sawidth = ''+calwidth+'px';

               if (annowidth > 100) 
               {
                   annosa.style.removeProperty('left');
                   annosa.style.removeProperty('width');
                   annosa.style.removeProperty('border-radius');
                   annosa.style.setProperty('width', sawidth, 'important');
                   annosa.style.setProperty('left', '15px', 'important');
                   annosa.style.setProperty('border-radius', '15px', 'important');
               }
               if (annowidth < 100 && annowidth > 10) 
               {
                   annosa.style.removeProperty('left');
                   annosa.style.removeProperty('border-radius');
                   annosa.style.setProperty('left', '15px', 'important');
                   annosa.style.setProperty('border-radius', '55px', 'important');
                   topButton.style.bottom = "15px";
               }
               if (annowidth < 100 && annowidth > 10 && ftstyle1 === "reg-message") 
               {
                   hostElement.shadowRoot.innerHTML = ''; hostElement.shadowRoot.host.remove();
                   if (!valTimer1) { setInterval(afterftclose, 1000); valTimer1 = true; }
               }
           }

           if (annosa && mediain && (sizedetection === "desk")) 
           {
               annosa.style.removeProperty('display');
               document.body.style.removeProperty('padding-bottom');
               annosa.style.setProperty('display', 'none', 'important');
               window.removeEventListener('scroll', scrollsa, false);
               annosa.remove(); console.log("annosa removed");
               document.body.style.height = ""; 
           }
        }

        // console.log("ftstyle1 = ", ftstyle1);
        if (mediain && ((scrollPosition + viewportHeight) > (documentHeight - 400)) 
        && (ftstyle1 !== "reg-message") && (sizedetection !== "desk")) { topButton.style.boxShadow = 'none';
        topArrow.style.stroke = '#5c5c5c'; topButton.style.background = 'white'; }
        if (mediain && ((scrollPosition + viewportHeight) < (documentHeight - 400)) 
        && (ftstyle1 !== "reg-message") && (sizedetection !== "desk")) { topButton.style.boxShadow = '';
        topArrow.style.stroke = ''; topButton.style.background = ''; }
    }

    if (!outvalTimer) { const ftinterval = setInterval(() => scaleMe2(initialWidth), 1000); 
    outvalTimer = true; } scaleMe2(initialWidth);
}
outscale();
// outscale called here ---- 

function saScroll()
{
    // console.log("window scroll");
    const annosa = document.getElementById('google-anno-sa'); 
    const mediain = window.matchMedia("(min-width: 615px)").matches;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.scrollY;

    annosa.style.removeProperty('transform');
    const viewportHeight = window.innerHeight;
    const elementRect = annosa.getBoundingClientRect();

    if (annosa && window.matchMedia("(min-width: 615px)").matches && window.matchMedia("(max-width: 1040.99px)").matches) 
    {
        var offset = viewportHeight - elementRect.top - 60;
        const transValue = 'translateY('+offset+'px)'; annosa.style.setProperty('transform', transValue, 'important');
    }
    if (annosa && window.matchMedia("(min-width: 1041px)").matches && window.matchMedia("(max-width: 1241.99px)").matches) 
    {
        var offset = (viewportHeight - elementRect.top - 60) * 1.087;
        const transValue = 'translateY('+offset+'px)'; annosa.style.setProperty('transform', transValue, 'important');
    }
    if (annosa && window.matchMedia("(min-width: 1242px)").matches && window.matchMedia("(max-width: 1500.99px)").matches) 
    {
        var offset = (viewportHeight - elementRect.top - 60) * 1.1628;
        const transValue = 'translateY('+offset+'px)'; annosa.style.setProperty('transform', transValue, 'important');
    }
    if (annosa && window.matchMedia("(min-width: 1501px)").matches) 
    {
        var offset = (viewportHeight - elementRect.top - 60) * 1.250;
        const transValue = 'translateY('+offset+'px) scale(1.5)'; annosa.style.setProperty('transform', transValue, 'important');
    }

    if (mediain && ((scrollPosition + viewportHeight) > (documentHeight - 400))) 
    {
        annosa.style.setProperty('display', 'none', 'important');
    }
    if (mediain && ((scrollPosition + viewportHeight) < (documentHeight - 400))) 
    {
        annosa.style.setProperty('display', '', 'important');
    }
}

    var satimer = null; 
    function scrollsa() { 
    saScroll(); if(satimer !== null) { clearTimeout(satimer); }
    satimer = setTimeout(function() { saScroll(); }, 2500); }

    // document ends here ---------

