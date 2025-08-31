
let deskT = false;
let fontload = false;
console.log("defer-script-check"); 
function updateAdsAttributes() 
{
    // Array of IDs
    var ids = ['ins-feed-one', 'ins-feed-two', 'ins-feed-three', 'ins-feed-four']; 
    // Function to update the attributes for multiple elements 
    function updateElementsAttributes() {
    ids.forEach(function(id) {
    var element = document.getElementById(id);
    if (element) 
        {
           // Add the attributes now -----------
           element.setAttribute('data-ad-layout-key', '-co-n+45-2o+yn');
           element.setAttribute('data-ad-slot', '5190331789');
        }
     });
    }

    function updateClassOne() {
    ids.forEach(function(id) {
    var element = document.getElementById(id);
    if (element) { element.setAttribute('class', 'adsbygoogle'); } }); }

    // Call function to update all elements at once
    if (window.matchMedia("(min-width: 615px)").matches) {
    updateElementsAttributes(); }

    updateClassOne();

    var ids = ['ins-dis-one', 'ins-dis-two', 'ins-dis-three', 'ins-dis-four'];
    function updateAttributes() {
    ids.forEach(function(id) {
    var element = document.getElementById(id);
    if (element) 
        {
           element.removeAttribute('data-ad-format', 'fluid');
           element.setAttribute('style', 'display:block;width:100%;height:250px');
           element.setAttribute('data-full-width-responsive', 'null');
        }
     });
    }

    function updateClassTwo() {
    ids.forEach(function(id) {
    var element = document.getElementById(id);
    if (element) { element.setAttribute('class', 'adsbygoogle'); } }); }

    if (window.matchMedia("(min-width: 615px)").matches) {
    updateAttributes(); }

    updateClassTwo();

    // Find all elements with class ------- 
    var elementsWithClassOne = document.querySelectorAll('.dis-com');
    var elementsWithClassTwo = document.querySelectorAll('.feed-com');

    // Add the script tag to each ele ---
    function addScriptTagToElement(element) {
    var scriptElement = document.createElement('script');
    scriptElement.type = 'text/javascript';
    scriptElement.textContent = '(adsbygoogle = window.adsbygoogle || []).push({});';
    element.appendChild(scriptElement); }

    elementsWithClassOne.forEach(function(element) {
    addScriptTagToElement(element); });

    elementsWithClassTwo.forEach(function(element) {
    addScriptTagToElement(element); }); 

    // mutation observer code
    const observer = new MutationObserver( mutations => 
    { 
         // console.log(mutations); 
         mutations.forEach( record => 
            { 
                if(record.type === 'attributes')
                {
                  const idname = record.target.id; 
                  const attrname = record.attributeName;
                  const attrvalue = record.target.getAttribute(attrname);
                  var fids = ['ins-feed-one', 'ins-feed-two', 'ins-feed-three', 'ins-feed-four']; 
                  var dids = ['ins-dis-one', 'ins-dis-two', 'ins-dis-three', 'ins-dis-four']; 

                  // console.log(attrname);
                  // console.log(attrvalue);

                  if(window.matchMedia("(max-width: 615px)").matches)
                  {
                    fids.forEach(function(id) { 
                    var element = document.getElementById(id); 
                    if(element) { var parentDiv = element.parentNode; } 
                    if(idname === id && attrvalue === "filled") { parentDiv.style.background = "linear-gradient(to top, white 20%, #4f76b4 50%)"; } 
                    if(idname === id && attrvalue === "unfilled") { parentDiv.style.display = "none"; parentDiv.nextElementSibling.style.display = "block"; } });

                    dids.forEach(function(id) { 
                    var element = document.getElementById(id); 
                    if(element) { var parentDiv = element.parentNode; 
                    var childDivs = parentDiv.querySelectorAll('div'); } 
                    if(idname === id && attrvalue === "filled") { childDivs[1].style.display = "none"; parentDiv.style.background = "#4D4D4D"; parentDiv.style.border = "3px transparent solid"; } 
                    if(idname === id && attrvalue === "unfilled") { parentDiv.style.display = "none"; parentDiv.nextElementSibling.style.display = "block"; } }); 
                  } 

                  // desktop 
                  if(window.matchMedia("(min-width: 615px)").matches)
                  { 
                    fids.forEach(function(id) {  
                    var element = document.getElementById(id); 
                    if(element) { var parentDiv = element.parentNode; 
                    var childDivs = parentDiv.querySelectorAll('div'); } 
                    if(idname === id && attrvalue === "filled") { childDivs[1].style.display = "none"; } 
                    if(idname === id && attrvalue === "unfilled") 
                    { parentDiv.style.display = "none"; } }); 

                    dids.forEach(function(id) { 
                    var element = document.getElementById(id); 
                    if(element) { var parentDiv = element.parentNode; } 
                    if(idname === id && attrvalue === "unfilled") 
                    { parentDiv.style.display = "none"; } }); 
                    if(attrvalue === 'filled' && record.target.id === 'ins-dis-v1')
                    { document.getElementById("ads-v1-in").style.background = "#F7F7F7"; }  
                  }   
                } 
            });
    });

    var aids = ['ins-feed-one', 'ins-feed-two', 'ins-feed-three', 'ins-feed-four', 'ins-dis-one', 'ins-dis-two', 'ins-dis-three', 'ins-dis-four', 'ins-dis-v1']; 
    function updatemute() {
    aids.forEach(function(id) {
    var element = document.getElementById(id);
    if (element) 
    { observer.observe(element, { attributes: true, attributeFilter: ['data-ad-status'] }); } }); }
    updatemute(); 
}
updateAdsAttributes(); 

// setTimeout(updateLogo, 500); 
window.addEventListener('resize', updateLogo); 
function updateLogo() 
{
    if (window.matchMedia("(min-width: 615px)").matches) 
    {
           document.querySelectorAll(".dis-com").forEach(function(el) {
           el.style.left = "617px"; el.style.transform = "scale(2.25, 2.25)"; });
           document.getElementById("ads-v1-in").style.transform = "scale(2.72, 2.72)";
           document.querySelectorAll(".feed-com").forEach(function(el) {
           el.style.transform = "scale(2.45, 2.45)"; });
    }
    if (window.matchMedia("(max-width: 615px)").matches) 
    {
           document.querySelectorAll(".dis-com").forEach(function(el) {
           el.style.left = ""; el.style.transform = "scale(7.10, 7.10)"; });
           document.querySelectorAll(".feed-com").forEach(function(el) {
           el.style.transform = "scale(4.34, 4.34)"; });
    }

    // for changing the cross icon and pointer element's color
    const crossEle = document.querySelectorAll('[stroke="#FF7777"]'); crossEle.forEach(el => { el.setAttribute('stroke', '#A27A7A'); });
    const pointerEle = document.querySelectorAll('#menu-pointer, #menu-pointer-review, #menu-pointer-about');
    pointerEle.forEach(el => { el.style.backgroundColor = '#a27a7ad1'; });

    if (window.matchMedia("(min-width: 615px)").matches && deskT) 
    { clearTimeout(window.resized); window.resized = setTimeout(detectCharacter, 1700); deskT = false; } 
    if (window.matchMedia("(max-width: 615px)").matches && !deskT) 
    { clearTimeout(window.resized); window.resized = setTimeout(() => { if(fontload) 
    { detectCharacter(); } }, 1700); deskT = true; } 

    // Array of IDs
    var ids = ['ins-feed-one', 'ins-feed-two', 'ins-feed-three', 'ins-feed-four']; 
    var isios = (navigator.userAgent.match(/iPad|iPhone|iPod/i));
    // Function to update the style for multiple elements 
    function getAttributes() {
    ids.forEach(function(id) {
    var element = document.getElementById(id);
    if (element) 
        {
           // Get some attribute values 
           var parentDiv = element.parentNode;
           var childDivs = parentDiv.querySelectorAll('div'); var selectChild = childDivs[1];
           var value1 = element.getAttribute('data-ad-layout-key');
           var value3 = element.getAttribute('data-ad-status');
           // console.log("value 1 is = ", value1);
           if(value1 == '-co-n+45-2o+yn' && window.matchMedia("(max-width: 615px)").matches)
           {
              element.style.display = "none";
              parentDiv.style.display = "none";
           }
           if(value1 == '-co-n+45-2o+yn' && window.matchMedia("(min-width: 615px)").matches)
           {
              element.style.display = "block";
              parentDiv.style.display = "block";
              var selectNewChild = childDivs[0];
              selectNewChild.style.display = "none";
           }
           if((value1 == '-5c+c0-2e-5v+wq' || value1 == '-5l+d7-1g-7u+uc') && window.matchMedia("(min-width: 615px)").matches)
           {
              element.style.display = "none";
              parentDiv.style.display = "none";
           }
           if((value1 == '-5c+c0-2e-5v+wq' || value1 == '-5l+d7-1g-7u+uc') && window.matchMedia("(max-width: 615px)").matches && !isios)
           {
              element.style.display = "block";
              parentDiv.style.display = "block";
              selectChild.style.display = "none";
           }
           if((value1 == '-5c+c0-2e-5v+wq' || value1 == '-5l+d7-1g-7u+uc') && value3 == 'unfilled' && 
              window.matchMedia("(max-width: 615px)").matches)
           {
              parentDiv.style.display = "none";
           }
           if(value1 == '-co-n+45-2o+yn' && value3 == 'unfilled' && 
              window.matchMedia("(min-width: 615px)").matches)
           {
              parentDiv.style.display = "none";
           }
        }
     });
    }

    // Call the function to update all elements at once
    getAttributes();

    var ids = ['ins-dis-one', 'ins-dis-two', 'ins-dis-three', 'ins-dis-four']; 
    function getMoreAttributes() {
    ids.forEach(function(id) {
    var element = document.getElementById(id);
    if (element) 
        {
           var parentDiv = element.parentNode;
           var childDivs = parentDiv.querySelectorAll('div'); var selectChild = childDivs[0];
           var value2 = element.getAttribute('data-full-width-responsive');
           var value4 = element.getAttribute('data-ad-status');
           // console.log("value 2 is = ", value2);
           if(value2 == 'null' && window.matchMedia("(max-width: 615px)").matches)
           {
              element.style.display = "none";
              parentDiv.style.display = "none";
           }
           if(value2 == 'null' && window.matchMedia("(min-width: 615px)").matches)
           {
              element.style.display = "block";
              parentDiv.style.display = "block";
              var selectNewChild = childDivs[1];
              selectNewChild.style.display = "none";
           }
           if(value2 == 'true' && window.matchMedia("(min-width: 615px)").matches)
           {
              element.style.display = "none";
              parentDiv.style.display = "none";
           }
           if(value2 == 'true' && window.matchMedia("(max-width: 615px)").matches && !isios)
           {
              element.style.display = "block";
              parentDiv.style.display = "block";
              selectChild.style.display = "none";
           }
           if(value2 == 'true' && value4 == 'unfilled' && 
              window.matchMedia("(max-width: 615px)").matches)
           {
              parentDiv.style.display = "none";
           }
           if(value2 == 'null' && value4 == 'unfilled' && 
              window.matchMedia("(min-width: 615px)").matches)
           {
              parentDiv.style.display = "none";
           }
        }
     });
    }

    // Call to update all elements at once
    getMoreAttributes(); 
}   
updateLogo(); 
// Call the function 

// for detecting new news articles, h2 tags 
const artCon = document.querySelector('.articles-container');
const insideArticleDiv = document.querySelector(".inside-article-div");
const secNew = document.querySelector('.sections-new');

function replaceInsideArticleDiv() 
{
  console.log("fetch has started");
  fetch("https://elomymelo.com/text-files/inside-article-div.txt")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.text();
    })
    .then(data => {
      if (insideArticleDiv) {
        insideArticleDiv.innerHTML = data;
        const fixedDisEls = document.querySelectorAll(".fixed-dis-phone, .fixed-dis-desk");
        fixedDisEls.forEach(el => {
          const script = document.createElement("script");
          script.innerHTML = "(adsbygoogle = window.adsbygoogle || []).push({});";
          el.appendChild(script);
        });
      } else {
        console.error("Div with class 'inside-article-div' not found");
      }
    })
    .catch(error => console.error("Fetch error:", error));
}

// Run the function after 5 seconds
if (secNew || (!secNew && window.innerWidth > 615)) {
setTimeout(replaceInsideArticleDiv, 5000); }

// for last-line balance
function insertAndMeasureSpan(paraTag) 
{
    const spanElement = document.createElement('span');
    paraTag.appendChild(spanElement); const spanRect = spanElement.getBoundingClientRect();
    const leftCoordinate = spanRect.left + window.pageXOffset;

    paraTag.removeChild(spanElement);
    return { leftCoordinate };
}

function handleFirstCondition(paraTag, comparewidth, modWidth) 
{
    let padding = 80; let leftCoordinate;
    paraTag.style.paddingRight = padding + "px";
    ({ leftCoordinate } = insertAndMeasureSpan(paraTag));
    while (leftCoordinate < (comparewidth - modWidth) && padding <= 240) { 
    padding += 10; paraTag.style.paddingRight = padding + "px";
    ({ leftCoordinate } = insertAndMeasureSpan(paraTag)); }
}

function processParagraph(paraTag, rectAC) 
{
    let modWidth, comparewidth; paraTag.style.paddingRight = "";
    const { leftCoordinate } = insertAndMeasureSpan(paraTag); var widthIn = window.matchMedia("(max-width: 615px)").matches;
    if (widthIn) { modWidth = window.innerWidth * 0.07; comparewidth = window.innerWidth / 2; }
    if (!widthIn && secNew) { modWidth = rectAC.width * 0.22; 
    comparewidth = (rectAC.width / 2) + rectAC.left; }

    if (leftCoordinate < (comparewidth - modWidth)) {
    handleFirstCondition(paraTag, comparewidth, modWidth); }
}

function detectCharacter() 
{
    // the main function called first 
    const rectAC = artCon.getBoundingClientRect();
    const divElement = document.getElementById("article-text-div");
    const pTags = divElement.querySelectorAll(":scope > p"); pTags.forEach(p => { if (secNew) { 
    p.classList.add("art-para-new"); } processParagraph(p, rectAC); });

    if (!secNew && window.matchMedia("(min-width: 615px)").matches) { pTags.forEach(pTag => {
    pTag.style.paddingRight = ""; }); }
}

    document.fonts.load('1em cus-roboto').then(function() {
    fontload = true; console.log('Roboto font has loaded');
    setTimeout(detectCharacter, 200); }).catch(function(error) {
    console.error('Failed to load Roboto', error); });

    function heightcheck() { 
    if (window.matchMedia("(min-width: 615px)").matches) { 
    document.getElementById("ads-v1-in").style.minHeight = "612px";
    /* document.getElementById("ads-v2-in").style.minHeight = "262px"; */ } 
    if (window.matchMedia("(max-width: 615px)").matches) { 
    document.getElementById("ads-v1-in").style.display = "none"; } }

    setTimeout(heightcheck, 1000); setTimeout(heightcheck, 3000); 
    // document ends here ---------

