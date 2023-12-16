
  // scroll desk related 
  console.log("async-script-scroll"); 
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
    lopp = document.getElementById("Web_1920__1");
    hope = lopp.clientHeight; const meme = document.body.scrollHeight;
    const keke = hope/meme; const scsc = window.scrollY;
    var scmx = (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    // console.log("meme scroll-height = ", meme); console.log("scsc scroll-y = ", scsc); 
    // console.log("scmx max-scroll-y = ", scmx);   

    var innr = window.innerHeight; // console.log("innr inner-height = ", innr);
    var scbb = scmx - scsc; var finn = scsc * keke; 
    var nunn = scbb * keke; var cscs = innr * keke; 
    var alttrigr = 8924/keke - innr; // console.log(keke);
    var topo = nunn + cscs - 250;
    
    if (window.matchMedia("(min-width: 615px)").matches) 
    {
        document.getElementById("footer-id").style.display = "block";
    }
    if (window.matchMedia("(max-width: 615px)").matches) 
    {
        document.body.style.transform = "none";
        document.getElementById("footer-id").style.display = "none";
    }
    if (window.matchMedia("(min-width: 1041px)").matches && window.matchMedia("(max-width: 1241.99px)").matches) 
    {
        // document.body.style.transform = "scale(0.920)";
        var finn = scsc * keke * 1.087;
        var nunn = scbb * keke * 1.087;
        var cscs = innr * keke * 1.087; 
        var alttrigr = (8924/keke) * 0.920 - innr;
        var topo = nunn + cscs - 200;
    }
    if (window.matchMedia("(min-width: 1242px)").matches && window.matchMedia("(max-width: 1500.99px)").matches) 
    {
        // document.body.style.transform = "scale(0.860)";
        var finn = scsc * keke * 1.1625;
        var nunn = scbb * keke * 1.1625;
        var cscs = innr * keke * 1.1625;
        var alttrigr = (8924/keke) * 0.860 - innr;
        var topo = nunn + cscs - 200;
    }
    if (window.matchMedia("(min-width: 1501px)").matches) 
    {
        // document.body.style.transform = "scale(0.80)";
        var finn = scsc * keke * 1.250;
        var nunn = scbb * keke * 1.250;
        var cscs = innr * keke * 1.250;
        var alttrigr = (8924/keke) * 0.80 - innr;
        var topo = nunn + cscs - 200;
    }

    // console.log("from-resize-doso");
    // console.log("alttrigr trigger-point-cmnts = ", alttrigr);
    // console.log("nunn bottom-fix = ", nunn); 
    // console.log("finn top-fix = ", finn);
  
    if(scsc > alttrigr && window.matchMedia("(min-width: 615px)").matches && isdesk)
    {
        var xoxo = nunn;
        var voso = nunn + 932 + 114;
        var momo = nunn + 932 + 880 + 110;
        var koko = nunn + 932 + 1850 + 880 + 102; 
        document.getElementById("out-cmnt").style.top = "auto";
        document.getElementById("out-cmnt").style.bottom = xoxo + "px";
        document.getElementById("ads-vertical-two").style.top = "auto";
        document.getElementById("ads-vertical-two").style.bottom = voso + "px";
        document.getElementById("hot-dvs-sctn").style.top = "auto";
        document.getElementById("hot-dvs-sctn").style.bottom = momo + "px";
        document.getElementById("ads-vertical-one").style.top = "auto";
        document.getElementById("ads-vertical-one").style.bottom = koko + "px";
        document.getElementById("top-pos").style.top = "auto";
        document.getElementById("top-pos").style.bottom = topo + "px";
        document.getElementById("top-pos").style.visibility = "visible";
    }
    if(scsc < alttrigr && window.matchMedia("(min-width: 615px)").matches && isdesk)
    {
        document.getElementById("out-cmnt").style.top = "7954px";
        document.getElementById("hot-dvs-sctn").style.top = "5226px";
        document.getElementById("ads-vertical-one").style.top = "3350px";
        document.getElementById("ads-vertical-two").style.top = "7077px"; 
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

  function sizeme()
  {
    if(isdesk) 
    {
        document.getElementById("top-pos").style.display = "none";
        clearTimeout(window.resizedFinished);
        window.resizedFinished = setTimeout(function() {  
        document.getElementById("top-pos").style.display = "block"; doso(); }, 100); 
    }
  }
  window.addEventListener('resize', sizeme); 
  if(!isdesk) { window.removeEventListener('resize', sizeme); } 
  // document ends here ---

