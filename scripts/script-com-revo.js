
let sizedetection;
function scaleMe2()
{
    // for consent message detection and mod 
    const parentElementNew = document.querySelector('.fc-consent-root');
    const bodyOverflow = window.getComputedStyle(document.body).overflow;
    const footerDiv = document.querySelector('.fc-footer.fc-dialog-restricted-content');

    if (parentElementNew || bodyOverflow === "hidden") 
    {
        if (parentElementNew) { window.scrollTo(0, 0); }
        document.body.style.overflow = "hidden";
        document.body.style.transform = "none";
    }
    else { document.body.style.overflow = "visible"; document.body.style.transform = ""; }

    if (footerDiv) {
        const secondPTag = footerDiv.querySelector('p:nth-child(2)');
        if (secondPTag) {
            secondPTag.innerText = 'Some vendors may process your personal data on the basis of legitimate interest, which you can object to by managing your options below. Look for a link at the bottom of this page or in our privacy policy where you can withdraw consent at anytime.';
        }
    }

    // console.log("interval check"); 
    const annosa = document.getElementById('google-anno-sa');
    const mediain = window.matchMedia("(max-width: 615px)").matches;
    const mediaout = window.matchMedia("(min-width: 615px)").matches;
    const chromeEle = Array.from(document.querySelectorAll('div[style*="color-scheme: initial"][style*="forced-color-adjust: initial"][style*="mask: initial"][style*="math-depth: initial"]'));
    const safaEle = Array.from(document.querySelectorAll('div[style*="font-feature-settings: initial"][style*="font-kerning: initial"][style*="font-optical-sizing: initial"][style*="font-stretch: initial"]'));
    const edgeEle = Array.from(document.querySelectorAll('div[style*="animation-delay: 0s !important"][style*="animation-direction: normal !important"][style*="animation-duration: 0s !important"][style*="animation-fill-mode: none !important"]'));
    const hostElements = chromeEle.concat(edgeEle, safaEle); hostElements.forEach(hostElement => { alldynamic(hostElement, annosa); });

    if (window.matchMedia("(min-width: 615px)").matches) { sizedetection = "desk"; }

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
               console.log("removed");
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
           const lastele = document.getElementById('footer-phone');
           const bodyStyles = window.getComputedStyle(document.body);
           const bodyTop = parseInt(bodyStyles.getPropertyValue('top'), 10) || 0; 
           const rect = lastele.getBoundingClientRect(); const topPos = rect.bottom + window.scrollY; 
           const adjustedTopPos = topPos + Math.abs(bodyTop); document.body.style.removeProperty('padding-bottom');
           document.body.style.height = adjustedTopPos + "px"; 
           const viewportWidth = window.innerWidth;

           calwidth = viewportWidth * 0.75;
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
               annosa.style.removeProperty('left');
               annosa.style.removeProperty('border-radius');
               annosa.style.setProperty('left', '15px', 'important');
               annosa.style.setProperty('border-radius', '55px', 'important');
               annosa.remove(); document.body.style.height = ""; 
               console.log("annosa removed");
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

    // for not annosa cases change body 
    if (!annosa && sizedetection !== "desk") { document.body.style.height = ""; }
}
const ftinterval = setInterval(scaleMe2, 1000); scaleMe2(); 

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

  // calling the noti service
  setTimeout(initPushSubscription, 25000);

// document ends here -------

