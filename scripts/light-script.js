
console.log("defer-script-check");
const bgmd = window.matchMedia("(min-width: 615px)").matches;
const smmd = window.matchMedia("(max-width: 615px)").matches;
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
    if (bgmd) { updateElementsAttributes(); }

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

    if (bgmd) { updateAttributes(); }
    updateClassTwo();

    // Find all elements with class ------- 
    var elementsWithClassTwo = document.querySelectorAll('.feed-com');
    var elementsWithClassOne = document.querySelectorAll('.dis-com');

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
        mutations.forEach(record => 
        {
            if(record.type === 'attributes')
            {
              const idname = record.target.id; 
              const attrname = record.attributeName;
              const attrvalue = record.target.getAttribute(attrname);
              var fids = ['ins-feed-one', 'ins-feed-two', 'ins-feed-three', 'ins-feed-four']; 
              var dids = ['ins-dis-one', 'ins-dis-two', 'ins-dis-three', 'ins-dis-four']; 

              if (smmd)
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

              // desk
              if (bgmd)
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
// call the important function

const adsCode = `<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3654432220074510" data-ad-slot="5979513854" data-ad-format="auto" data-full-width-responsive="true"></ins>`
const ltArtStyle = '.latest_articles{inset-inline:0;width:max-content;position:relative;margin:0 auto;top:30px;padding:16px 35px 14px 35px;font-family:monospace;font-size:15px;border-radius:55px;background-color:#f0f4f8;color:#567ea7;font-weight:bolder}#before-article-01{position:relative;margin:5px;height:2px}.articles-common-lt-style{height:auto}.latest-art-pic-common{width:100%;height:auto;border-radius:14px 14px 5px 5px;aspect-ratio:auto 16/9}.art-head-common{text-align:center;margin:0 auto;font-weight:bolder;font-family:sans-serif;padding:10px 20px;border-radius:5px 5px 14px 14px;background-color:#f0f4f8;font-size:16px}.art-head-common a{color:#6487ab!important;text-decoration:none}.fixed-dis-phone{position:relative;height:auto;min-height:200px;display:flex;justify-content:center;padding:12px 4px;background:#EAEAEA;border-radius:14px;width:auto}.fixed-dis-desk{position:relative;height:auto;min-height:200px;display:flex;justify-content:center;padding:12px 4px;background:#EAEAEA;border-radius:14px;width:auto}#more-info-after-2{border:3px #EAEAEA solid;padding:10px 13px 12px;text-align:center;font-family:sans-serif;width:73%;color:#6f6f6f;margin:0 auto 20px;font-size:15px;line-height:23px;border-radius:14px}.art-description-common{display:none}@media only screen and (max-width:615px){.fixed-dis-desk{display:none}}@media only screen and (min-width:615px){#more-info-after-2{width:fit-content;display:inline-block;border:7px #f0f4f8 solid;font-size:17px}.latest_articles{top:20px}#before-article-01{margin:0px;height:0px}.fixed-dis-phone{display:none}}';
const ldrStyle = '@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.loader-container{width:64px;height:64px;position:absolute;top:80px;inset-inline:0;margin:auto}.spinner-anim{animation:spin 0.6s linear infinite;transform-origin:center}.svg-arc{stroke:#68ABD4;stroke-width:6;fill:none;stroke-linecap:round}'

// for sidebar ads loading process
function loadSideBars()
{
    const sAdsLate = document.querySelectorAll('.side-bars.bar-smack > .sidebar-ads');
    sAdsLate.forEach(el => { el.innerHTML = adsCode; const script = document.createElement('script');
    script.textContent = '(adsbygoogle = window.adsbygoogle || []).push({});';
    el.appendChild(script); }); // ads name Thin-bar-ads
}
if (bgmd) 
{
    const sideAds = document.querySelectorAll('.side-bars:not(.bar-smack) > .sidebar-ads');
    sideAds.forEach(el => { el.innerHTML = adsCode; const script = document.createElement('script');
    script.textContent = '(adsbygoogle = window.adsbygoogle || []).push({});';
    el.appendChild(script); }); // ads name Thin-bar-ads
}

// for detecting new news articles, h2 tags 
const rplsSec = document.getElementById('add-article-html');
const loadersvg = `<div class="loader-container"><svg viewBox="0 0 100 100" class="spinner-anim">
<circle cx="50" cy="50" r="8" fill="#D1D1D1"/><path d="M 85.36 50 A 40 40 0 0 1 78.28 78.28" class="svg-arc" transform="rotate(10 50 50)"/>
<path d="M 85.36 50 A 40 40 0 0 1 78.28 78.28" class="svg-arc" transform="rotate(130 50 50)"/>
<path d="M 85.36 50 A 40 40 0 0 1 78.28 78.28" class="svg-arc" transform="rotate(250 50 50)"/>
</svg></div>` // for loader html insertion 

function ltrplsSec() 
{
    const loaderStyle = document.createElement('style');
    loaderStyle.id = 'loader-style'; loaderStyle.textContent = ldrStyle;
    document.head.appendChild(loaderStyle); if(rplsSec) { rplsSec.innerHTML = loadersvg; }
    const ltArtSec = document.createElement('style'); ltArtSec.id = 'ltart-style';
    ltArtSec.textContent = ltArtStyle; document.head.appendChild(ltArtSec);

    fetch("https://elomymelo.com/text-files/inside-article-div.txt")
    .then(response => response.text()).then(data => { if(rplsSec) { rplsSec.innerHTML = data;
    document.querySelectorAll('.side-bars.bar-smack').forEach(parent => {

    const child = parent.querySelector(':scope > div'); if (child) {
    child.classList.add('bar-color'); } }); document.getElementById('loader-style')?.remove();
    const phoneAd = rplsSec.querySelector(".fixed-dis-phone"); const deskAd = rplsSec.querySelector(".fixed-dis-desk");
    const script = document.createElement("script"); script.innerHTML = "(adsbygoogle = window.adsbygoogle || []).push({});";
    if (smmd) { deskAd?.querySelector("ins.adsbygoogle")?.remove(); phoneAd?.appendChild(script); } else {
    phoneAd?.querySelector("ins.adsbygoogle")?.remove(); deskAd?.appendChild(script); } } });
    if (bgmd) { loadSideBars(); } // late call ok 
}

let elFound = false;
if (rplsSec) 
{
    const intObserver = new IntersectionObserver((entries) => { entries.forEach(entry => {
    if (entry.isIntersecting) { ltrplsSec(); setInterval(() => { if (!elFound) 
    { removeTool(); } }, 2000); intObserver.disconnect(); } }); },
    { rootMargin: '0px 0px 500px 0px', threshold: 0 } );
    intObserver.observe(rplsSec);
}

function removeTool()
{
    // console.log("checking the pop tool by google");
    const chromeEle = Array.from(document.querySelectorAll('div[style*="color-scheme: initial"][style*="forced-color-adjust: initial"][style*="mask: initial"][style*="math-depth: initial"]'));
    const safaEle = Array.from(document.querySelectorAll('div[style*="font-feature-settings: initial"][style*="font-kerning: initial"][style*="font-optical-sizing: initial"][style*="font-stretch: initial"]'));
    const edgeEle = Array.from(document.querySelectorAll('div[style*="animation-delay: 0s !important"][style*="animation-direction: normal !important"][style*="animation-duration: 0s !important"][style*="animation-fill-mode: none !important"]'));
    const hostElements = chromeEle.concat(edgeEle, safaEle); hostElements.forEach(hostElement => { alldynamic(hostElement); });

    function alldynamic(hostElement)
    {
       if (hostElement.shadowRoot) 
       {
           const shadowdom = hostElement.shadowRoot;
           const toolbar = shadowdom.getElementById('ft-floating-toolbar'); 
           const contain = shadowdom.querySelector('.ipr-container'); 

           if (toolbar || contain)
           {
               shadowdom.innerHTML = ''; shadowdom.host.remove();
               elFound = true; console.log("removed");
           }
        }
    }
}

// for go to top or bottom
function goDown() { window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' }); }
function goUp() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

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
    const { leftCoordinate } = insertAndMeasureSpan(paraTag); const inWdth = window.innerWidth;
    if (smmd) { modWidth = inWdth * 0.07; comparewidth = inWdth / 2; } if (!smmd) {
    modWidth = rectAC.width * 0.22; comparewidth = (rectAC.width / 2) + rectAC.left; }

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
