
console.log("defer-script-tab"); 
// for other than windows and mac ----
var isdesk = (navigator.userAgent.match(/Win32|Win64|Windows|Macintosh|MacIntel|MacPPC|Mac68K/i)); 
function upme()
{
    // checks if user is on a desktop device 
    if(window.matchMedia("(min-width: 615px)").matches && !isdesk)
    {
        document.getElementById("Web_1920__1").style.height = "2216px";
        document.getElementById("Web_1920__1").style.paddingBottom = "0px";
        document.getElementById("arts-con-id").style.position = "absolute";
        timer4 = setInterval(function() { // console.log("meme here"); 
        document.getElementById("arts-con-id").style.height = "6712px"; }, 0);
        setTimeout(() => { clearInterval(timer4); }, 4500); 
        document.getElementById("arts-con-id").style.overflowX = "hidden";
        document.getElementById("arts-con-id").style.overflowY = "scroll";
        document.getElementById("arts-con-id").style.paddingBottom = "0px";
        document.getElementById("main-art-id").style.position = "absolute";
        document.getElementById("footer-id").style.display = "block";
        document.getElementById("footer-id").style.position = "absolute";
        document.getElementById("footer-id").style.top = "7562px";
        document.getElementById("out-cmnt").style.top = "7074px";
        document.getElementById("ads-vertical-two").style.display = "none";
        document.getElementById("hoty-blnk").style.display = "none";
        document.getElementById("top-pos").style.display = "none";
        console.log("defer-dom-loaded"); 
    } 
    if (window.matchMedia("(max-width: 615px)").matches) 
    {
        document.getElementById("arts-con-id").style.overflow = "visible";
        document.getElementById("footer-id").style.display = "none";
    }
}
window.addEventListener('resize', upme); upme(); 
// document ends here ---------

