
function scaleMe2()
{
    console.log("interval check"); let sizedetection;
    const annosa = document.getElementById('google-anno-sa');
    const mediain = window.matchMedia("(max-width: 615px)").matches;
    const mediaout = window.matchMedia("(min-width: 615px)").matches;
    const hostElements = document.querySelectorAll('div[style*="color-scheme: initial"][style*="forced-color-adjust: initial"][style*="mask: initial"][style*="math-depth: initial"]');
    hostElements.forEach(hostElement => { alldynamic(hostElement, annosa); });

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
           const lastele = document.getElementById('after-ft-phone');
           const bodyStyles = window.getComputedStyle(document.body);
           const bodyTop = parseInt(bodyStyles.getPropertyValue('top'), 10) || 0; 
           const rect = lastele.getBoundingClientRect(); const topPos = rect.top + window.scrollY; 
           lastele.style.border = "1px transparent solid"; const adjustedTopPos = topPos + Math.abs(bodyTop);
           document.body.style.removeProperty('padding-bottom');
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
               annosa.remove(); console.log("annosa removed");
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
}
const ftinterval = setInterval(scaleMe2, 1000); scaleMe2(); 

// document ends here -------

