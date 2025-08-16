
  // Function to handle the subscription logic
  function initPushSubscription() {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
        console.log('Service Worker registered', registration);

        Notification.requestPermission().then(function(permission) {
          if (permission === 'granted') {
            console.log('Notification permission granted');

            registration.pushManager.subscribe({
              userVisibleOnly: true,
              applicationServerKey: urlBase64ToUint8Array('BC3EtR6wSN_ps84dibghU0B0U-tLMozTW8s2AHlY7Dj8oQSXtaNeddfqESD5jnUMNA2BsSymbibq9q1U4EyMmjE')
            }).then(function(subscription) {
              console.log('User is subscribed:', subscription);

              const subscriptionJSON = subscription.toJSON();
              const currentAuthKey = subscriptionJSON.keys.auth;

              // Check stored subscription data
              const hasSubscribed = localStorage.getItem('hasSubscribed');
              const storedAuthKey = localStorage.getItem('subscriptionAuthKey');

              // Send subscription if it's the first time OR if the auth key has changed
              if (!hasSubscribed || storedAuthKey !== currentAuthKey) {
                const formData = new FormData();
                formData.append('endpoint', subscription.endpoint || "No endpoint");
                formData.append('auth', currentAuthKey || "No auth key");
                formData.append('p256dh', subscriptionJSON.keys.p256dh || "No p256dh key");
                formData.append('user', navigator.userAgent || "Unknown");

                sendSubscriptionToServer(formData).then(() => {
                  localStorage.setItem('hasSubscribed', 'true');
                  localStorage.setItem('subscriptionAuthKey', currentAuthKey);
                  console.log('Subscription data updated in localStorage');
                });
              } else {
                console.log('Subscription unchanged, no update needed');
              }
            }).catch(function(error) {
              console.error('Subscription failed', error);
            });
          }
        });
      }).catch(function(error) {
        console.error('Service Worker registration failed', error);
      });
    } else {
      console.log('Push notifications are not supported in this browser.');
    }
  }

  // Convert the VAPID public key to Uint8Array
  function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/\_/g, '/');
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  function sendSubscriptionToServer(formData) {
    return fetch('https://script.google.com/macros/s/AKfycbxdNE69cgEQIJwnuWMDThp1VWvtZI3vdNyuL_L4_pMo_YSc2GWV3MmjAshikvBk9nic/exec', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      console.log('Subscription sent successfully:', data);
    })
    .catch(error => {
      console.error('Error saving subscription:', error);
    });
  }

  var divTmr = null; 
  let hasTr = false; let eleDiv = null; let com2 = false;
  function artDivNoti() 
  { 
    if (divTmr !== null) { clearTimeout(divTmr); }
    divTmr = setTimeout(function() { const element = document.querySelector('.art-text-div');
    const rect = element.getBoundingClientRect(); const inner = window.innerHeight;
    const eH = rect.height; if (!hasTr) { let trig;

    if (eH < 8500) { trig = 3; } else if (eH < 12500) { trig = 5; } else if (eH < 16500) { 
    trig = 6; } else { trig = 7; } if (rect.bottom <= (inner * trig)) { notiOverlay(); hasTr = true; console.log('Pop Up Trigger');
    eleDiv.removeEventListener('scroll', artDivNoti, false); } } }, 2000); 
  }

  function articleDiv()
  {
    eleDiv = document.querySelector('.articles-container');
    if (window.matchMedia("(min-width: 615px)").matches && !isdesk && Notification.permission === 'default' && (noticounter <= 1 || noticounter > 5)) { com2 = true; 
    eleDiv.addEventListener('scroll', artDivNoti, false); }
  }
  setTimeout(articleDiv, 3500);

  // local storage set up for noti counts 
  let countcheck = parseInt(localStorage.getItem('checkView')) || 0; 
  let noticounter = parseInt(localStorage.getItem('pageLoadCount')) || 0; 
  noticounter += 1; if (countcheck === 1) { localStorage.setItem('pageLoadCount', noticounter); }
  console.log("Page Load Counter =", noticounter);

  function notiOverlay()
  {
    console.log("Noti Permission =", Notification.permission);
    if ((Notification.permission === 'default' && noticounter <= 1) 
    || (Notification.permission === 'default' && noticounter > 5)) 
    {
        if (noticounter <= 1) { let rstValue = 1; 
        localStorage.setItem('checkView', rstValue); 
        localStorage.setItem('pageLoadCount', noticounter); }
        const notistyle = document.createElement('style'); notistyle.type = 'text/css'; notistyle.id = 'dynamic-style';
        notistyle.innerHTML = '.noti-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);z-index:1000;overflow:auto}.noti-main{position:absolute;left:0;right:0;top:0;bottom:0;margin:auto;width:75%;height:max-content;text-align:center;color:rgba(255,255,255,0.5);font-family:roboto,sans-serif;border-radius:20px;background:black}.top-img{position:relative;width:105px;border:4px #545454 solid;border-radius:90px;left:0;right:0;margin:40px auto 25px auto;padding:10px 10px 6px 10px}.middle-text{position:relative;width:90%;border:3px #545454 solid;border-radius:15px;color:#b9b9b9;font-size:14px;line-height:20px;left:0;right:0;margin:5px auto 5px auto;padding:16px}.act-buttons{position:relative;width:200px;border-radius:40px;left:0;right:0;margin:10px auto 30px auto;text-align:center}.noti-button{position:relative;padding:15px 25px 15px 25px;font-family:roboto,sans-serif;background:#464646;color:#b0b0b0;border-radius:40px;font-size:14px;margin:15px;cursor:pointer}@media only screen and (min-width:615px){.noti-main{width:580px;background:white}.middle-text{color:#565656;border:3px #cdcdcd solid;font-size:18px;line-height:25px}.top-img{border:4px #cdcdcd solid}.noti-button:nth-of-type(1){background:#393939 !important;color:#cfcfcf !important;font-size:17px}.noti-button:nth-of-type(2){background:#e6e6e6;color:#5b5b5b;font-size:17px}.act-buttons{width:250px}}';
        document.head.appendChild(notistyle); // style tag insertion 

        const notidiv = document.createElement('div');
        notidiv.className = 'noti-overlay'; notidiv.innerHTML = '<div class="noti-main"><div class="top-img"><img style="width:75px;height:75px" src="old-images/circle-trans.png" alt="my profile picture"></div><div class="middle-text">I assure you that you are not going to get spammy notifications from my website. You will get a lot of valuable information from my articles. <br><br> Please kindly turn on the notification so that my hard work can reach to people like you.</div><div class="act-buttons"><button class="noti-button" style="background:#929bd4;font-family:cus-roboto-medium,sans-serif;color:black" onclick="notiButtonClick()">Allow Notification</button><br><button class="noti-button" style="margin-top:0px" onclick="removeNotiOverlay()">Not Now</button></div></div>';
        document.body.appendChild(notidiv); if (noticounter > 5) { let resetValue = 1;
        localStorage.setItem('pageLoadCount', resetValue); }
    }
  }

  function notiButtonClick() { initPushSubscription(); 
  setTimeout(removeNotiOverlay, 500); }

  function removeNotiOverlay() 
  {
    const fstyle = document.getElementById('dynamic-style'); const findnotidiv = document.querySelector('.noti-overlay');
    if (findnotidiv) { findnotidiv.remove(); fstyle.remove();
    document.body.style.overflow = ""; }
  }


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

function outscale()
{
     let sizedetection, visHide;
     let fcone = false, fctwo = false;
     let valTimer2 = false, valTimer3 = false, valTimer4 = false;
     const viewportWidth = window.innerWidth; var initialWidth = viewportWidth;
     let fctb = false, fctc = false, fctl = false, fctm = false;
     function scaleMe2(initialWidth)
     {
        let ftstyle1, ftsize; // declaring variables 
        const parentElementNew = document.querySelector('.fc-consent-root');
        const bodyOverflow = window.getComputedStyle(document.body).overflow;
        const footerDiv = document.querySelector('.fc-footer.fc-dialog-restricted-content');
        const isdesk = (navigator.userAgent.match(/Win32|Win64|Windows|Macintosh|MacIntel|MacPPC|Mac68K/i));

        const documentHeight = document.documentElement.scrollHeight; const viewportHeight = window.innerHeight; 
        const scrollPosition = window.scrollY; const topArrow = document.querySelector('#Path_1');
        const mediaout = window.matchMedia("(min-width: 615px)").matches;
        const mediain = window.matchMedia("(max-width: 615px)").matches;
        const topButton = document.querySelector('#scroll-top-button');
        const annosa = document.getElementById('google-anno-sa');

        const tran1 = document.getElementById("out-cmnt");
        const tran2 = document.getElementById("ads-vertical-two");
        const tran3 = document.getElementById("hot-dvs-sctn");
        const tran4 = document.getElementById("ads-vertical-one");
        const tran6 = document.getElementById("footer-id");
        const tran5 = document.getElementById("top-pos");

        if (parentElementNew || bodyOverflow === "hidden") 
        {
            if (parentElementNew) { window.scrollTo(0, 0); }
            document.body.style.overflow = "hidden"; if (fcone) {
            clearTimeout(visHide); fcone = false; }
        }
        else 
        {
            document.body.style.overflow = "visible"; 
            tran1.style.visibility = "visible"; tran2.style.visibility = "visible"; tran3.style.visibility = "visible"; 
            if (!fcone && isdesk) { visHide = setTimeout(() => { doso(); tran5.style.visibility = "visible"; }, 2000); fcone = true; } 
            if (mediaout && isdesk) { tran4.style.display = "block"; tran6.style.display = "block"; } 
            if (mediain && isdesk) { tran4.style.display = "none"; tran6.style.display = "none"; } 
        }

        if (footerDiv) 
        {
            const secondPTag = footerDiv.querySelector('p:nth-child(2)');
            if (secondPTag) 
            {
                secondPTag.innerText = 'Some vendors may process your personal data on the basis of legitimate interest, which you can object to by managing your options below. Look for a link at the bottom of this page or in our privacy policy where you can withdraw consent at anytime.';
            }
        }

        function hideA() {
        tran1.style.visibility = "hidden"; tran2.style.visibility = "hidden"; 
        tran3.style.visibility = "hidden"; tran4.style.display = "none"; 
        tran5.style.visibility = "hidden"; }

        if (window.matchMedia("(min-width: 615px)").matches) {
        sizedetection = "desk"; topButton.style.display = 'none'; }
        if (window.matchMedia("(max-width: 615px)").matches && sizedetection === "desk") { var shadow = window.innerWidth * 0.05;
        buttonfxd(); topButton.style.background = ''; topArrow.style.stroke = '';
        topButton.style.boxShadow = '0px 0px '+shadow+'px #ff7777bf'; }

        const chromeEle = Array.from(document.querySelectorAll('div[style*="color-scheme: initial"][style*="forced-color-adjust: initial"][style*="mask: initial"][style*="math-depth: initial"]'));
        const safaEle = Array.from(document.querySelectorAll('div[style*="font-feature-settings: initial"][style*="font-kerning: initial"][style*="font-optical-sizing: initial"][style*="font-stretch: initial"]'));
        const edgeEle = Array.from(document.querySelectorAll('div[style*="animation-delay: 0s !important"][style*="animation-direction: normal !important"][style*="animation-duration: 0s !important"][style*="animation-fill-mode: none !important"]'));
        const hostElements = chromeEle.concat(edgeEle, safaEle); hostElements.forEach(hostElement => { alldynamic(hostElement, annosa, initialWidth); });

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
                   var parentH = document.querySelector('.articles-container');
                   var rectParentH = parentH.getBoundingClientRect(); var leftPosL = rectParentH.left + 410 - 410;
                   var leftPosH = rectParentH.left + 415; var leftPosS = rectParentH.left + 65;
                   var parentLeftH = ''+leftPosH+'px'; var parentLeftL = ''+leftPosL+'px';
                   var parentLeftS = ''+leftPosS+'px'; style.id = 'dy-style';
                   if (!fctm) { shadowdom.appendChild(style); fctm = true; }
                   var exStyle = shadowdom.getElementById('dy-style');

                   if (annosa && mediain && !valTimer3) 
                   {
                       exStyle.innerHTML = '#ft-floating-toolbar { bottom: 75px !important; }'; 
                       valTimer3 = true; valTimer2 = false; 
                   }
                   if (!annosa && mediain && !valTimer2) 
                   {
                       exStyle.innerHTML = '#ft-floating-toolbar { bottom: 50px !important; }'; 
                       valTimer2 = true; valTimer3 = false; 
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
                       // ftstyle2 = "reg-bubble";
                   }
                   if (regBubbleCloseIcon) {
                       regBubbleCloseIcon.onclick = function() {
                       shadowdom.innerHTML = ''; shadowdom.host.remove(); }
                       regBubbleCloseIcon.style.setProperty('right', '15px', 'important');
                       regBubbleCloseIcon.style.setProperty('position', 'absolute', 'important');
                       regBubbleCloseIcon.style.setProperty('top', '13px', 'important');
                       // ftstyle3 = "reg-icon";
                   }
                   if (regButton) {
                       regButton.style.setProperty('border-radius', '55px', 'important');
                       // ftstyle4 = "reg-button";
                   }

                   if (window.matchMedia("(min-width: 615px)").matches) 
                   {
                       regMenu.style.setProperty('box-shadow', '', 'important');
                       regMenu.style.setProperty('background', 'white', 'important');
                       if (!annosa && !fctl) { exStyle.innerHTML = '#ft-floating-toolbar { left: '+parentLeftL+' !important; bottom: 11px !important; }'; fctl = true; fctb = false; fctc = false; }
                       if (annosa && annosa.clientWidth > 100 && !fctb) { exStyle.innerHTML = '#ft-floating-toolbar { left: '+parentLeftH+' !important; bottom: 11px !important; }'; fctb = true; fctc = false; fctl = false; }
                       if (annosa && annosa.clientWidth < 100 && !fctc) { exStyle.innerHTML = '#ft-floating-toolbar { left: '+parentLeftS+' !important; bottom: 11px !important; }'; fctc = true; fctb = false; fctl = false; }
                       regMenu.style.setProperty('border-radius', '65px', 'important');
                       ftsize = "window-resized";
                   }

                   if ((scrollPosition + viewportHeight) > (documentHeight - 60) && mediaout) {
                   toolbar.style.setProperty('filter', 'opacity(0)', 'important');
                   toolbar.style.setProperty('z-index', '-999999', 'important'); }
                   if ((scrollPosition + viewportHeight) < (documentHeight - 60) && mediaout) {
                   toolbar.style.setProperty('z-index', '999999', 'important');
                   toolbar.style.setProperty('filter', '', 'important'); }

                   if (window.matchMedia("(max-width: 340px)").matches) {
                       shadowdom.innerHTML = '';
                       shadowdom.host.remove();
                   }
                   if (mediain && sizedetection === "desk") {
                       shadowdom.innerHTML = '';
                       shadowdom.host.remove();
                   }
               }

               if (ftstyle1 === "reg-message" && (sizedetection !== "desk") && regMessageInfo) {
               topButton.style.boxShadow = 'none'; topButton.style.background = 'white'; topArrow.style.stroke = '#5c5c5c'; }
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

           if (annosa && !isdesk && mediaout) { 
           document.body.style.removeProperty('padding-bottom');
           document.body.style.height = ""; document.body.style.transformOrigin = "";
           annosa.remove(); console.log("annosa removed"); }

           if (!isdesk && mediaout) { if (hostElement.shadowRoot && mediaout) { 
           hostElement.shadowRoot.innerHTML = ''; hostElement.shadowRoot.host.remove(); } }

           const blank = document.querySelector('.after-hot-blank');
           const bodyStyles = window.getComputedStyle(document.body);
           const bodyTop = parseInt(bodyStyles.getPropertyValue('top'), 10) || 0; 
           const rect = blank.getBoundingClientRect(); var topPos = rect.top + window.scrollY; 
           const adjustTopPos = topPos + Math.abs(bodyTop);
           let parent, rectParent, leftPos, parentLeft;

           if (annosa && isdesk && mediaout) 
           {
               const annowidth = annosa.clientWidth;
               const firstChild = annosa.firstElementChild; 
               document.body.style.removeProperty('padding-bottom');
               parent = document.querySelector('.articles-container');
               rectParent = parent.getBoundingClientRect(); leftPos = rectParent.left + 5;
               parentLeft = ''+leftPos+'px'; // getting left value
               document.body.style.height = adjustTopPos + "px";
               const viewportWidth = window.innerWidth;

               if (annowidth < 100) { // checking on width 
               annosa.style.setProperty('left', parentLeft, 'important'); }
               if (annowidth > 100) { annosa.style.setProperty('width', '400px', 'important'); 
               annosa.style.setProperty('left', parentLeft, 'important'); }
               if (!fctwo && firstChild.tagName === 'SPAN') { fctwo = true;
               firstChild.addEventListener('click', hideA); }

               if ((scrollPosition + viewportHeight) > (documentHeight - 60)) {
               annosa.style.setProperty('filter', 'opacity(0)', 'important');
               annosa.style.setProperty('z-index', '-999999', 'important'); }
               if ((scrollPosition + viewportHeight) < (documentHeight - 60)) {
               annosa.style.setProperty('z-index', '999999', 'important');
               annosa.style.setProperty('filter', '', 'important'); }
           }

           if (isdesk && mediaout) 
           {
               const viewportWidth = window.innerWidth;
               if (viewportWidth > (initialWidth + 10) || viewportWidth < (initialWidth - 10)) 
               {
                   if (mediaout) { document.body.style.height = ""; }
                   if (annosa) { const firstChild = annosa.firstElementChild;
                   firstChild.removeEventListener('click', hideA); fctwo = false; annosa.remove(); }
                   if (hostElement.shadowRoot && mediaout) { hostElement.shadowRoot.innerHTML = ''; // blank shadow 
                   hostElement.shadowRoot.host.remove(); } if (mediaout && !valTimer4) { setTimeout(() => {
                   doso(); console.log("doso called"); valTimer4 = true; }, 1000); }
               }   else { valTimer4 = false; }
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
                   annosa.style.setProperty('border-radius', '15px', 'important');
                   annosa.style.setProperty('left', '15px', 'important');
               }
               if (annowidth < 100 && annowidth > 10) 
               {
                   topButton.style.bottom = "15px";
                   annosa.style.removeProperty('left');
                   annosa.style.removeProperty('border-radius');
                   annosa.style.setProperty('left', '15px', 'important');
                   annosa.style.setProperty('border-radius', '55px', 'important');
               }
               if (annowidth < 100 && annowidth > 10 && ftstyle1 === "reg-message") 
               {
                   if (hostElement.shadowRoot) { hostElement.shadowRoot.innerHTML = ""; 
                   hostElement.shadowRoot.host.remove(); }
               }
           }

           if (annosa && mediain && (sizedetection === "desk")) 
           {
               annosa.style.removeProperty('display');
               const firstChild = annosa.firstElementChild;
               document.body.style.removeProperty('padding-bottom');
               firstChild.removeEventListener('click', hideA); fctwo = false;
               annosa.style.setProperty('display', 'none', 'important');
               annosa.remove(); console.log("annosa removed");
               document.body.style.height = ""; 
           }
        }

        // console.log("ftstyle1 = ", ftstyle1);
        if (mediain && ((scrollPosition + viewportHeight) > (documentHeight - 400)) 
        && (ftstyle1 !== "reg-message") && (sizedetection !== "desk")) { topButton.style.boxShadow = 'none';
        topArrow.style.stroke = '#5c5c5c'; topButton.style.background = 'white'; }
        if ((!annosa && sizedetection !== "desk") || (!annosa && mediaout)) { topButton.style.bottom = ""; document.body.style.height = ""; }
        if (mediain && ((scrollPosition + viewportHeight) < (documentHeight - 400)) 
        && (ftstyle1 !== "reg-message") && (sizedetection !== "desk")) { topButton.style.boxShadow = '';
        topArrow.style.stroke = ''; topButton.style.background = ''; }
    }
    const ftinterval = setInterval(() => {
    scaleMe2(initialWidth); }, 1000);
}
outscale();

// document ends here --- 

