
  // scroll desk related 
  var timer = null; 
  function scrolltrick() 
  { doso(); if(timer !== null) { clearTimeout(timer); }
  timer = setTimeout(function() { doso(); }, 2000); }
  setTimeout(doso, 3000); // setTimeout(doso, 0); 

  // adding the event listeners 
  window.addEventListener('scroll', scrolltrick, false); 
  window.addEventListener('resize', doso, false); 

  var isdesk = (navigator.userAgent.match(/Win32|Win64|Windows|Macintosh|MacIntel|MacPPC|Mac68K/i)); 
  if(!isdesk) { window.removeEventListener('scroll', scrolltrick, false);
  window.removeEventListener('resize', doso, false); }

  function doso()
  {
    const lopp = document.getElementById("Web_1920__1");
    const hope = lopp.clientHeight; const meme = document.body.scrollHeight;
    const keke = hope/meme; const scsc = window.scrollY; var innr = window.innerHeight; 
    var scmx = (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    // console.log("meme scroll-height = ", meme); console.log("scsc scroll-y = ", scsc); 
    // console.log("scmx max-scroll-y = ", scmx);   

    const scrollbarHeight = innr - document.documentElement.clientHeight;
    const scbar = scrollbarHeight * keke;

    var scbb = scmx - scsc; var finn = scsc * keke; 
    var nunn = scbb * keke; var cscs = innr * keke; 
    var alttrigr = 9056/keke - innr; // 8924 is out-cmnt's top + height 
    var tran = keke * (scsc - alttrigr) - scbar;
    var topp = 9056 - cscs - 400 + scbar;

    if (window.matchMedia("(min-width: 615px)").matches) 
    {
        document.getElementById("footer-id").style.display = "block";
    }
    if (window.matchMedia("(max-width: 615px)").matches) 
    {
        // document.body.style.transform = "none";
        document.getElementById("footer-id").style.display = "none";
    }
    if (window.matchMedia("(max-width: 615px)").matches && window.matchMedia("(max-height: 496px)").matches) 
    {
        // document.body.style.transform = "scale(1.0)";
        document.getElementById("scroll-top-button").style.display = "none"; 
    }
    if (window.matchMedia("(min-width: 615px)").matches && window.matchMedia("(max-width: 1040.99px)").matches) 
    {
        // document.body.style.transform = "scale(1.0)";
    }
    if (window.matchMedia("(min-width: 1041px)").matches && window.matchMedia("(max-width: 1241.99px)").matches) 
    {
        // document.body.style.transform = "scale(0.920)";
        var nunn = scbb * keke * 1.087; var cscs = innr * keke * 1.087; 
        var alttrigr = (9056/keke) * 0.920 - innr; var topp = 9056 - cscs - 400;
        var tran = keke * (scsc - alttrigr) * 1.087;
    }
    if (window.matchMedia("(min-width: 1242px)").matches && window.matchMedia("(max-width: 1500.99px)").matches) 
    {
        // document.body.style.transform = "scale(0.860)";
        var nunn = scbb * keke * 1.1625; var cscs = innr * keke * 1.1625;
        var alttrigr = (9056/keke) * 0.860 - innr; var topp = 9056 - cscs - 400;
        var tran = keke * (scsc - alttrigr) * 1.1628;
    }
    if (window.matchMedia("(min-width: 1501px)").matches) 
    {
        // document.body.style.transform = "scale(0.80)";
        var nunn = scbb * keke * 1.250; var cscs = innr * keke * 1.250;
        var alttrigr = (9056/keke) * 0.80 - innr; var topp = 9056 - cscs - 400;
        var tran = keke * (scsc - alttrigr) * 1.250;
    }

    // console.log("from-resize-doso");
    // console.log("alttrigr trigger-point-cmnts = ", alttrigr);
    // console.log("nunn bottom-fix = ", nunn); 
    // console.log("finn top-fix = ", finn);

    var isdesk = (navigator.userAgent.match(/Win32|Win64|Windows|Macintosh|MacIntel|MacPPC|Mac68K/i));
  
    if(scsc > alttrigr && window.matchMedia("(min-width: 615px)").matches && isdesk)
    {
        document.getElementById("out-cmnt").style.transform = "translateY("+tran+"px)";
        document.getElementById("ads-vertical-two").style.transform = "translateY("+tran+"px)";
        document.getElementById("hot-dvs-sctn").style.transform = "translateY("+tran+"px)";
        document.getElementById("ads-vertical-one").style.transform = "translateY("+tran+"px)";
        document.getElementById("top-pos").style.top = topp + "px";
        document.getElementById("top-pos").style.transform = "translateY("+tran+"px)";
        document.getElementById("top-pos").style.display = "block";
    }
    if(scsc < alttrigr && window.matchMedia("(min-width: 615px)").matches && isdesk)
    {
        document.getElementById("top-pos").style.display = "none";
        document.getElementById("out-cmnt").style.transform = "translateY(0px)";
        document.getElementById("hot-dvs-sctn").style.transform = "translateY(0px)";
        document.getElementById("ads-vertical-one").style.transform = "translateY(0px)";
        document.getElementById("ads-vertical-two").style.transform = "translateY(0px)";
        document.getElementById("top-pos").style.transform = "translateY(0px)";
        document.getElementById("top-pos").style.top = "8934px"; 
    } 
    if(nunn < 100 && window.matchMedia("(min-width: 615px)").matches && isdesk)
    {
        document.getElementById("last-dab").style.visibility = "hidden";
    }
    if(nunn > 100 && window.matchMedia("(min-width: 615px)").matches && isdesk)
    {
        document.getElementById("last-dab").style.visibility = "visible";
    }
  } 

  function sizeme() {
  doso(); // immediate call 
  var scwidth = screen.availWidth; 
  var outwidth = window.outerWidth; var inwidth = window.innerWidth; 
  var isdesk = (navigator.userAgent.match(/Win32|Win64|Windows|Macintosh|MacIntel|MacPPC|Mac68K/i));
  if(isdesk) { document.getElementById("top-pos").style.visibility = "hidden"; 
  clearTimeout(window.resizedFinished); window.resizedFinished = setTimeout(function() {  
  document.getElementById("top-pos").style.visibility = "visible"; doso(); }, 100); }
  if(isdesk && (scwidth == outwidth) && (outwidth - inwidth) < 70) { 
  clearTimeout(window.rizzFinished); window.rizzFinished = setTimeout(function() {  
  document.getElementById("out-cmnt").style.transform = "translateY(0px)";
  document.getElementById("hot-dvs-sctn").style.transform = "translateY(0px)";
  document.getElementById("ads-vertical-one").style.transform = "translateY(0px)";
  document.getElementById("ads-vertical-two").style.transform = "translateY(0px)";
  document.getElementById("top-pos").style.transform = "translateY(0px)";
  console.log("matched"); }, 40); } } 

  window.addEventListener('resize', sizeme); 
  if(!isdesk) { window.removeEventListener('resize', sizeme); } 
  // document ends here ---

