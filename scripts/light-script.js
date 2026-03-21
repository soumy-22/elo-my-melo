
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
                    if(idname === id && attrvalue === "unfilled") { parentDiv.style.display = "none"; } });

                    dids.forEach(function(id) { 
                    var element = document.getElementById(id); 
                    if(element) { var parentDiv = element.parentNode; 
                    var lbDiv = parentDiv.querySelector('.ad-details-5'); } 
                    if(idname === id && attrvalue === "filled") { lbDiv.style.display = "none"; parentDiv.style.background = "#EAEAEA"; } 
                    if(idname === id && attrvalue === "unfilled") { parentDiv.style.display = "none"; } });
                  } 

                  // desktop 
                  if(window.matchMedia("(min-width: 615px)").matches)
                  { 
                    fids.forEach(function(id) {  
                    var element = document.getElementById(id); 
                    if(element) { var parentDiv = element.parentNode; 
                    var lbDiv = parentDiv.querySelector('.ad-details-5'); } 
                    if(idname === id && attrvalue === "filled") { lbDiv.style.display = "none"; } 
                    if(idname === id && attrvalue === "unfilled") 
                    { parentDiv.style.display = "none"; } }); 

                    dids.forEach(function(id) { 
                    var element = document.getElementById(id); 
                    if(element) { var parentDiv = element.parentNode; } 
                    if(idname === id && attrvalue === "unfilled") 
                    { parentDiv.style.display = "none"; } });
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

// for last-line balance
const artCon = document.querySelector('.art-out');
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
    let padding = 15; let leftCoordinate;
    paraTag.style.paddingRight = padding + "px";
    ({ leftCoordinate } = insertAndMeasureSpan(paraTag));
    while (leftCoordinate < (comparewidth - modWidth) && padding <= 70) { 
    padding += 5; paraTag.style.paddingRight = padding + "px";
    ({ leftCoordinate } = insertAndMeasureSpan(paraTag)); }
}

function processParagraph(paraTag, rectAC) 
{
    let modWidth, comparewidth; paraTag.style.paddingRight = "";
    const { leftCoordinate } = insertAndMeasureSpan(paraTag); var widthIn = window.matchMedia("(max-width: 615px)").matches;
    if (widthIn) { modWidth = window.innerWidth * 0.07; comparewidth = window.innerWidth / 2; }
    if (!widthIn) { modWidth = rectAC.width * 0.22; 
    comparewidth = (rectAC.width / 2) + rectAC.left; }

    if (leftCoordinate < (comparewidth - modWidth)) {
    handleFirstCondition(paraTag, comparewidth, modWidth); }
}

function detectCharacter() 
{
    // the main function called first 
    const rectAC = artCon.getBoundingClientRect();
    const divElement = document.getElementById("art-text");
    const pTags = divElement.querySelectorAll("p"); pTags.forEach(p => {
    p.classList.add("art-para-new"); processParagraph(p, rectAC); });
}
detectCharacter();

window.addEventListener('resize', trigPad); 
function trigPad()
{
	clearTimeout(window.resized); window.resized = setTimeout(() => {
	detectCharacter(); }, 1700);
}
