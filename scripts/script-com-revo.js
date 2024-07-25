
function scaleMe2()
{
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
       }

       if (annosa && window.matchMedia("(min-width: 615px)").matches) 
       {
           annosa.style.removeProperty('display');
           document.body.style.removeProperty('padding-bottom');
           annosa.style.setProperty('display', 'none', 'important');
           console.log("Display 222");
       }
       if (annosa && window.matchMedia("(max-width: 615px)").matches) 
       {
           annosa.style.removeProperty('display');
           document.body.style.removeProperty('padding-bottom');
           annosa.style.setProperty('display', 'none', 'important');
           console.log("Display 333");
       }
    }
}

const ftinterval = setInterval(scaleMe2, 1000); scaleMe2(); 

// document ends here -------

