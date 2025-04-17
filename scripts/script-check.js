
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
           document.querySelectorAll(".feed-com").forEach(function(el) {
           el.style.transform = "scale(2.45, 2.45)"; });
           document.getElementById("ads-v1-in").style.transform = "scale(2.72, 2.72)"; 
    }
    if (window.matchMedia("(max-width: 615px)").matches) 
    {
           document.querySelectorAll(".dis-com").forEach(function(el) {
           el.style.left = ""; el.style.transform = "scale(7.10, 7.10)"; });
           document.querySelectorAll(".feed-com").forEach(function(el) {
           el.style.transform = "scale(4.34, 4.34)"; });
    }

    if (window.matchMedia("(min-width: 615px)").matches) 
    { document.querySelectorAll(".last-extend").forEach(function(el) { el.style.display = "none"; }); deskT = false; } 
    if (window.matchMedia("(max-width: 615px)").matches && !deskT) 
    { document.querySelectorAll(".last-extend").forEach(function(el) { el.style.display = "inline-block"; }); 
    clearTimeout(window.resized); window.resized = setTimeout(() => { if(fontload) 
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

function insertAndMeasureSpan(paraTag) 
{
    const spanElement = document.createElement('span');
    paraTag.appendChild(spanElement); const spanRect = spanElement.getBoundingClientRect();
    const leftCoordinate = spanRect.left + window.pageXOffset; spanElement.innerHTML = '\\';
    spanElement.style.fontSize = '62px'; spanElement.style.letterSpacing = '10px';

    const spanRect2 = spanElement.getBoundingClientRect();
    const spanWidth = spanRect2.width; paraTag.removeChild(spanElement);
    return { leftCoordinate, spanWidth };
}

// Function to handle the first condition (leftCoordinate < comparewidth)
function handleFirstCondition(paraTag, leftCoordinate, spanWidth, comparewidth, multiplier, widthinner) 
{
    const calwidth = (comparewidth - leftCoordinate + (widthinner * 0.1)) * multiplier;
    const spanElement = document.createElement('span'); spanElement.setAttribute('class', 'last-extend');
    const charNum = Math.floor(calwidth / (spanWidth * multiplier));

    spanElement.style.width = calwidth + 'px';
    spanElement.style.display = 'inline-block';
    paraTag.appendChild(spanElement);
}

// Function to handle the second condition for paragraph processing scenarios 
function handleSecondCondition(paraTag, comparewidth, comparewidthtwo, spanWidth, multiplier, widthinner) 
{
    const calwidth = comparewidth * multiplier;
    const spanElement = document.createElement('span'); spanElement.setAttribute('class', 'last-extend');
    const charNum = Math.floor(calwidth / (spanWidth * multiplier));

    spanElement.style.width = calwidth + 'px'; spanElement.style.display = 'inline-block';
    spanElement.style.marginLeft = "0px"; paraTag.appendChild(spanElement);
}

// Function to handle the third additional condition for paragraph processing case 
function handleThirdCondition(paraTag, comparewidth, comparewidthtwo, spanWidth, multiplier, widthinner) 
{
    const calwidth = ((comparewidth + (widthinner * 0.07)) * multiplier);
    const spanElement = document.createElement('span'); spanElement.setAttribute('class', 'last-extend');
    const charNum = Math.floor(calwidth / (spanWidth * multiplier));

    spanElement.style.width = calwidth + 'px'; spanElement.style.display = 'inline-block';
    spanElement.style.marginLeft = "0px"; paraTag.appendChild(spanElement);
}

// Function to parse words in paragraphs in article section 
function processParagraph(paraTag, filteredPTags, fLCoordinates, sLCoordinates, sPTags, pv1, pv2)
{
    const { leftCoordinate, spanWidth } = insertAndMeasureSpan(paraTag);
    const widthinner = window.innerWidth; const multiplier = 2358 / widthinner;
    const comparewidth = widthinner / 2; const comparewidthtwo = widthinner - widthinner * 0.278;
    // console.log("pv1 value for each of the paragraph is = ", pv1);

    if (leftCoordinate < (comparewidth - (widthinner * 0.07))) {
    handleFirstCondition(paraTag, leftCoordinate, spanWidth, comparewidth, multiplier, widthinner);
    if (paraTag.id === "thoughts-para") { const lastExtendSpan = paraTag.querySelector("span.last-extend");
    if (lastExtendSpan) { lastExtendSpan.style.fontSize = "60px"; } } }
    if (leftCoordinate > (comparewidthtwo + (widthinner * 0.06))) 
    {
      const originalHTML = paraTag.innerHTML;
      const words = paraTag.textContent.trim().split(/\s+/);
      let lastLeftPos; let lastLineTop = null; let highlightIndex = null; 
      let wrappedWordIndices = []; // store indices 

      // Iterate backwards from the end of the paragraph
      for (let i = words.length - 1; i >= 0; i--) 
      {
           wrappedWordIndices.push(i); // Store the index of the word to be wrapped
           paraTag.innerHTML = words.map((word, index) => {
           if (wrappedWordIndices.includes(index)) {
           return `<span>${word}</span>`; } else {
           return word; } }).join(' ');

         // Get the last wrapped span
         const span = paraTag.querySelector('span:first-child');
         const rect = span.getBoundingClientRect();

           if (lastLineTop === null) {
           lastLineTop = rect.top; } else if (rect.top < lastLineTop) {
           lastLeftPos = rect.right; // console.log("first span ", rect.right);
           highlightIndex = i; break; }
      }
      paraTag.innerHTML = originalHTML;

      if ((lastLeftPos - leftCoordinate) < 0 && 
      leftCoordinate > ((widthinner * 0.95) - (widthinner * 0.08))) 
      {
          if (!pv1) { filteredPTags.push(paraTag); fLCoordinates.push(leftCoordinate); }
          if ((pv1 && fLCoordinates[filteredPTags.indexOf(paraTag)] !== leftCoordinate) || (pv2 && sLCoordinates[sPTags.indexOf(paraTag)] !== undefined)) {
          handleThirdCondition(paraTag, comparewidth, comparewidthtwo, spanWidth, multiplier, widthinner); }
          if ((pv1 && fLCoordinates[filteredPTags.indexOf(paraTag)] === leftCoordinate) || (pv2 && sLCoordinates[sPTags.indexOf(paraTag)] === leftCoordinate)) { paraTag.style.paddingRight = ""; paraTag.classList.remove('mod-para');
          handleThirdCondition(paraTag, comparewidth, comparewidthtwo, spanWidth, multiplier, widthinner); }
          if (!pv1) { paraTag.style.paddingRight = "68px"; if (paraTag.id !== "thoughts-para" && paraTag.id !== "intro-para") {
          paraTag.setAttribute('class', 'mod-para'); } }
      }
      if (leftCoordinate > ((widthinner * 0.95) - (widthinner * 0.08)) && (lastLeftPos - leftCoordinate) > 0) {
      handleThirdCondition(paraTag, comparewidth, comparewidthtwo, spanWidth, multiplier, widthinner);
      if (paraTag.id === "thoughts-para") { const lastExtendSpan = paraTag.querySelector("span.last-extend"); 
      if (lastExtendSpan) { lastExtendSpan.style.fontSize = "60px"; } } } // span tag font-size modify
      if (leftCoordinate < ((widthinner * 0.95) - (widthinner * 0.08)) && 
      (lastLeftPos - leftCoordinate) < (widthinner * 0.12)) 
      {
          if (!pv1) { sPTags.push(paraTag); sLCoordinates.push(leftCoordinate); }
          if ((pv2 && sLCoordinates[sPTags.indexOf(paraTag)] !== leftCoordinate) || (pv1 && fLCoordinates[filteredPTags.indexOf(paraTag)] !== undefined)) {
          handleSecondCondition(paraTag, comparewidth, comparewidthtwo, spanWidth, multiplier, widthinner); }
          if ((pv2 && sLCoordinates[sPTags.indexOf(paraTag)] === leftCoordinate) || (pv1 && fLCoordinates[filteredPTags.indexOf(paraTag)] === leftCoordinate)) { paraTag.style.paddingRight = ""; paraTag.classList.remove('mod-para');
          handleSecondCondition(paraTag, comparewidth, comparewidthtwo, spanWidth, multiplier, widthinner); }
          if (!pv1) { paraTag.style.paddingRight = "88px"; if (paraTag.id !== "thoughts-para" && paraTag.id !== "intro-para") {
          paraTag.setAttribute('class', 'mod-para'); } }
      }
    }
}

// Main function to detect and handle characters
function detectCharacter() 
{
    if (window.matchMedia("(max-width: 615px)").matches) 
    {
        const divElement = document.getElementById("article-text-div");
        const pTags = divElement.querySelectorAll("p");
        const filteredPTags = []; const fLCoordinates = [];
        const sLCoordinates = []; const sPTags = []; 
        let pv1 = false; let pv2 = false;

        // console.log("inside-detect-char");
        pTags.forEach((paraTag) => processParagraph(paraTag, filteredPTags, fLCoordinates, sLCoordinates, sPTags, pv1, pv2)); pv1 = true;
        filteredPTags.forEach((paraTag) => processParagraph(paraTag, filteredPTags, fLCoordinates, sLCoordinates, sPTags, pv1, pv2)); pv2 = true;
        sPTags.forEach((paraTag) => processParagraph(paraTag, filteredPTags, fLCoordinates, sLCoordinates, sPTags, pv1, pv2));
        console.log("inside-detect-character");
    }
}

    document.fonts.load('1em Roboto').then(function() {
    fontload = true; console.log('Roboto font has loaded');
    if (window.matchMedia("(max-width: 615px)").matches) { 
    setTimeout(detectCharacter, 200); } }).catch(function(error) {
    console.error('Failed to load Roboto', error); });

    function heightcheck() { 
    if (window.matchMedia("(min-width: 615px)").matches) { 
    document.getElementById("ads-v1-in").style.minHeight = "612px";
    /* document.getElementById("ads-v2-in").style.minHeight = "262px"; */ } 
    if (window.matchMedia("(max-width: 615px)").matches) { 
    document.getElementById("ads-v1-in").style.display = "none"; } }

    setTimeout(heightcheck, 1000); setTimeout(heightcheck, 3000); 
    // document ends here ---------

