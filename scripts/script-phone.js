
// console.log("defer-script-phone"); 
var notitimer = null; let hasTriggered = false; 
function scrollmethod() 
{
	mybutton = document.getElementById("scroll-top-button"); 
	const mediain = window.matchMedia("(max-width: 615px)").matches; 
    if (window.matchMedia("(max-height: 496px)").matches) { mybutton.style.display = "none"; } 
    if (document.documentElement.scrollTop > 200 && mediain) { mybutton.style.display = "block"; } 
    if (document.documentElement.scrollTop < 200 && mediain) { mybutton.style.display = "none"; } 

    if(notitimer !== null) { clearTimeout(notitimer); }
    notitimer = setTimeout(function() { if(window.scrollY >= 3500 && !hasTriggered && mediain) { 
    /* initPushSubscription(); */ hasTriggered = true; 
    console.log('3500px'); } }, 2000);
}
function scrolltotop() { window.scrollTo({ top: 0, behavior: 'smooth' }); } 

function buttonfxd()
{ 	   
   	document.getElementById("Web_1920__1").style.visibility = "visible";
   	document.getElementById("top-check").style.visibility = "hidden";
   	if (window.matchMedia("(max-width: 615px)").matches) 
   	{
        const mypage = window.innerWidth * 0.12;
        const pagebot = window.innerWidth * 0.167;
        const pageright = window.innerWidth * 0.04;
        document.getElementById("scroll-top-button").style.width = mypage + "px";
        document.getElementById("scroll-top-button").style.bottom = pagebot + "px";
        document.getElementById("scroll-top-button").style.right = pageright + "px";
        document.getElementById("scroll-top-button").style.height = mypage + "px";
    }
    if (window.matchMedia("(max-width: 415px)").matches)
   	{
        const mypage = window.innerWidth * 0.14;
        const pagebot = window.innerWidth * 0.190;
        const pageright = window.innerWidth * 0.04;
        document.getElementById("scroll-top-button").style.width = mypage + "px";
        document.getElementById("scroll-top-button").style.bottom = pagebot + "px";
        document.getElementById("scroll-top-button").style.right = pageright + "px";
        document.getElementById("scroll-top-button").style.height = mypage + "px";
    }
    if (window.matchMedia("(max-width: 415px)").matches && window.matchMedia("(max-height: 745px)").matches) 
   	{
        const mypage = window.innerWidth * 0.13;
        const pagebot = window.innerWidth * 0.16;
        const pageright = window.innerWidth * 0.04;
        document.getElementById("scroll-top-button").style.width = mypage + "px";
        document.getElementById("scroll-top-button").style.bottom = pagebot + "px";
        document.getElementById("scroll-top-button").style.right = pageright + "px";
        document.getElementById("scroll-top-button").style.height = mypage + "px";
    }
    if (window.matchMedia("(min-width: 615px)").matches) 
    {
        document.getElementById("scroll-top-button").style.display = "none";
    }
}

    // setTimeout(buttonfxd, 1000); setTimeout(buttonfxd, 3000); 
    // window.addEventListener('resize', buttonfxd, false); 

    function adsheights() {  
    // var checkh = window.innerWidth; 
    const feedAds = document.querySelectorAll('.feed-com');
    const displayAds = document.querySelectorAll('.dis-com'); 
    const media1 = window.matchMedia("(max-width: 615px)").matches; 
    const media2 = window.matchMedia("(min-width: 615px)").matches; 

    feedAds.forEach((feedAd, index) => { 
    const feedAdHeight = feedAd.clientHeight;
    const nextbrele = feedAd.nextElementSibling;
    if (media1) { feedAd.style.setProperty('--set-margin', feedAdHeight + "px"); }
    if (media2) { feedAd.style.removeProperty('--set-margin'); }
    if (feedAdHeight > 10 && media1) { nextbrele.style.display = 'none'; }
    if (feedAdHeight < 10) { nextbrele.style.display = 'block'; } }); 

    displayAds.forEach((displayAd, index) => {
    const displayAdHeight = displayAd.clientHeight; 
    const nextelement = displayAd.nextElementSibling; 
    if (media1) { displayAd.style.setProperty('--set-margin', displayAdHeight + "px"); }
    if (media2) { displayAd.style.removeProperty('--set-margin'); }
    if (displayAdHeight > 10 && media1) { nextelement.style.display = 'none'; }
    if (displayAdHeight < 10) { nextelement.style.display = 'block'; } }); 
    /* console.log("here here"); */ } 

    timer3 = setInterval(adsheights, 0);
    setTimeout(() => { clearInterval(timer3); }, 5000);
    setTimeout(() => { setInterval(() => { adsheights(); /* buttonfxd(); */ }, 1000); }, 5000); 
    // window.addEventListener('scroll', adsheights, false); 

