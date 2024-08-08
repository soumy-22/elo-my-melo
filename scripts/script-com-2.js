
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
     function scaleMe2()
     {
        let ftstyle1, ftstyle2, ftstyle3, ftstyle4;
        const parentElementNew = document.querySelector('.fc-consent-root');
        const bodyOverflow = window.getComputedStyle(document.body).overflow;
        const footerDiv = document.querySelector('.fc-footer.fc-dialog-restricted-content');

        const documentHeight = document.documentElement.scrollHeight;
        const viewportHeight = window.innerHeight; const scrollPosition = window.scrollY;
        const mediaout = window.matchMedia("(min-width: 615px)").matches;
        const mediain = window.matchMedia("(max-width: 615px)").matches;
        const topButton = document.querySelector('#scroll-top-button');
        const topArrow = document.querySelector('#Path_1');

        if (parentElementNew || bodyOverflow === "hidden") 
        {
            if (parentElementNew) { window.scrollTo(0, 0); }
            document.body.style.overflow = "hidden";
            document.body.style.transform = "none";
            checkscale = "present"; // assigned
        }
        else { document.body.style.overflow = "visible";

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

        if (footerDiv) {
            const secondPTag = footerDiv.querySelector('p:nth-child(2)');
            if (secondPTag) {
                secondPTag.innerText = 'Some vendors may process your personal data on the basis of legitimate interest, which you can object to by managing your options below. Look for a link at the bottom of this page or in our privacy policy where you can withdraw consent at anytime.';
            }
        }

        if (window.matchMedia("(min-width: 615px)").matches) { 
        sizedetection = "desk"; topButton.style.display = 'none'; }
        if (window.matchMedia("(max-width: 615px)").matches && sizedetection === "desk") 
        { buttonfxd(); topButton.style.boxShadow = ''; topButton.style.background = ''; topArrow.style.stroke = ''; }

        console.log("interval check");
        const annosa = document.getElementById('google-anno-sa');
        const hostElements = document.querySelectorAll('div[style*="color-scheme: initial"][style*="forced-color-adjust: initial"][style*="mask: initial"][style*="math-depth: initial"]');
        hostElements.forEach(hostElement => { alldynamic(hostElement, annosa); });

        function alldynamic(hostElement, annosa)
        {
           if (hostElement.shadowRoot) 
           {
               const shadowdom = hostElement.shadowRoot;
               const toolbar = shadowdom.getElementById('ft-floating-toolbar'); 
               const contain = shadowdom.querySelector('.ipr-container'); 

               if (toolbar || contain)
               {
                   shadowdom.innerHTML = '';
                   shadowdom.host.remove();
                   console.log("111");
               }

               const iframe = shadowdom.querySelector('#prose-iframe');
               if (iframe) 
               {
                   const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                   const iframeHtml = iframeDoc.documentElement; // select html element
                   iframeHtml.style.setProperty('overflow', 'hidden', 'important');
               }
           }

           if (annosa && mediain && (sizedetection !== "desk")) 
           {
               const annowidth = annosa.clientWidth;
               const lastele = document.getElementById('after-ft-phone');
               const bodyStyles = window.getComputedStyle(document.body);
               const topButton = document.querySelector('#scroll-top-button');
               const bodyTop = parseInt(bodyStyles.getPropertyValue('top'), 10) || 0; 
               const rect = lastele.getBoundingClientRect(); const topPos = rect.top + window.scrollY; 
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
           }

           if ((annosa && mediain && sizedetection === "desk") || (annosa && mediaout)) 
           {
               annosa.style.removeProperty('display');
               document.body.style.removeProperty('padding-bottom');
               annosa.style.setProperty('display', 'none', 'important');
               annosa.remove(); console.log("annosa removed");
               document.body.style.height = ""; 
           }
        }

        if (mediain && ((scrollPosition + viewportHeight) > (documentHeight - 400)) && (sizedetection !== "desk")) {
        topButton.style.boxShadow = 'none'; topArrow.style.stroke = '#5c5c5c'; topButton.style.background = 'white'; }
        if (mediain && ((scrollPosition + viewportHeight) < (documentHeight - 400)) && (sizedetection !== "desk")) {
        topButton.style.boxShadow = ''; topArrow.style.stroke = ''; topButton.style.background = ''; }
    }

    if (!outvalTimer) { const ftinterval = setInterval(scaleMe2, 1000); 
    outvalTimer = true; } scaleMe2(); 
}
outscale();

// document ends here ---------

