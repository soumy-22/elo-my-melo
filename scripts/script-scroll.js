
  // scroll desk related 
  var timer = null; 
  function scrolltrick() 
  { doso(); if(timer !== null) { clearTimeout(timer); }
  timer = setTimeout(function() { doso(); }, 2000); }
  setTimeout(doso, 3000); // setTimeout(doso, 0); 

  // adding the event listeners 
  window.addEventListener('scroll', scrolltrick, false); 
  var isdesk = (navigator.userAgent.match(/Win32|Win64|Windows|Macintosh|MacIntel|MacPPC|Mac68K/i)); 
  if(!isdesk) { window.removeEventListener('scroll', scrolltrick, false); 
  window.removeEventListener('resize', doso, false); } 

  let topTimer = false;
  function doso()
  {
    // console.log("scroll event here");
    const lopp = document.getElementById("Web_1920__1");
    lopp.style.paddingBottom = "918px"; var scaledHeight = lopp.clientHeight; 
    var actualHeight = document.documentElement.scrollHeight; // no scale done 
    var scaleRatio = scaledHeight/actualHeight; var nowScroll = window.scrollY; 
    var inner = window.innerHeight; var triggerPoint = 8924/scaleRatio - inner; 
    var actualBar = inner - document.documentElement.clientHeight; 
    var scaledBar = actualBar * scaleRatio; // scrollbar

    const mediaout = window.matchMedia("(min-width: 615px)").matches;
    var scmx = document.documentElement.scrollHeight - document.documentElement.clientHeight; 
    var scbb = scmx - nowScroll; var nunn = scbb * scaleRatio; var cscs = inner * scaleRatio; 
    var topp = 8924 - cscs - 400 + scaledBar; // top position top-pos

    var tran = scaleRatio * (nowScroll - triggerPoint) - scaledBar;
    const isdesk = navigator.userAgent.match(/Win32|Win64|Windows|Macintosh|MacIntel|MacPPC|Mac68K/i); 
    if(nowScroll > triggerPoint && mediaout && isdesk)
    {
        document.getElementById("top-pos").style.top = topp + "px";
        document.getElementById("out-cmnt").style.transform = "translateY("+tran+"px)";
        document.getElementById("ads-vertical-two").style.transform = "translateY("+tran+"px)";
        document.getElementById("hot-dvs-sctn").style.transform = "translateY("+tran+"px)";
        document.getElementById("ads-vertical-one").style.transform = "translateY("+tran+"px)";
        document.getElementById("top-pos").style.transform = "translateY("+tran+"px)";
        if(!topTimer) { document.getElementById("top-pos").style.display = "block";
        topTimer = true; } // resize event conflict tackle 
    }
    if(nowScroll < triggerPoint && mediaout && isdesk)
    {
        topTimer = false;
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

  function sizeme()
  {
    doso();
    if(isdesk) 
    {
        var toper = document.getElementById("top-pos");
        toper.style.display = "none"; clearTimeout(window.resizedFinished); 
        window.resizedFinished = setTimeout(function() { // late call 
        toper.style.display = "block"; doso(); }, 500);
    }
  }
  window.addEventListener('resize', sizeme); 
  if(!isdesk) { window.removeEventListener('resize', sizeme); } 

  // document ends here ---

