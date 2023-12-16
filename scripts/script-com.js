
console.log("async-script-com"); 
function changeover()
{
  document.getElementById("CATEGORIES").style.color = "rgba(0,0,0,1)";
  document.getElementById("Rectangle_9").style.fill = "rgba(255,119,119,1)";
  document.getElementsByClassName("Rectangle_9")[0].style.filter = "drop-shadow(0px 15px 40px rgba(255,119,119,0.6))";
  document.getElementById("cat-menu").style.visibility = "visible";
  document.getElementById("about-me-main").style.visibility = "hidden";
  document.getElementById("ABOUT_ME").style.color = "";
  document.getElementById("Rectangle_7").style.fill = "";
  document.getElementsByClassName("Rectangle_7")[0].style.filter = "";
  document.getElementById("REVIEWS").style.color = "";
  document.getElementById("Rectangle_8").style.fill = "";
  document.getElementsByClassName("Rectangle_8")[0].style.filter = "";
  document.getElementById("reviews-main").style.visibility = "hidden";
  document.getElementById("cat-cross").style.visibility = "visible";
  document.getElementById("about-cross").style.visibility = "hidden";
  document.getElementById("reviews-cross").style.visibility = "hidden";
  document.getElementById("menu-pointer").style.visibility = "visible";
  document.getElementById("menu-pointer-review").style.visibility = "hidden";
  document.getElementById("menu-pointer-about").style.visibility = "hidden";
}
function changeout() {  }

function catclickmainappear()
{
  document.getElementById("cat-menu").style.visibility = "visible";
}
function reviewclickmainappear()
{
  document.getElementById("reviews-main").style.visibility = "visible";
}
function aboutclickmainappear()
{
  document.getElementById("about-me-main").style.visibility = "visible";
}

function changefirst()
{
  document.getElementById("ABOUT_ME").style.color = "rgba(0,0,0,1)";
  document.getElementById("Rectangle_7").style.fill = "rgba(255,119,119,1)";
  document.getElementsByClassName("Rectangle_7")[0].style.filter = "drop-shadow(0px 15px 40px rgba(255,119,119,0.6))";
  document.getElementById("about-me-main").style.visibility = "visible";
  document.getElementById("cat-menu").style.visibility = "hidden";
  document.getElementById("submenu-phones").style.visibility = "hidden";
  document.getElementById("submenu-speakers").style.visibility = "hidden";
  document.getElementById("submenu-earbuds").style.visibility = "hidden";
  document.getElementById("submenu-accessories").style.visibility = "hidden";
  document.getElementById("CATEGORIES").style.color = "";
  document.getElementById("Rectangle_9").style.fill = "";
  document.getElementsByClassName("Rectangle_9")[0].style.filter = "";
  document.getElementById("REVIEWS").style.color = "";
  document.getElementById("Rectangle_8").style.fill = "";
  document.getElementsByClassName("Rectangle_8")[0].style.filter = "";
  document.getElementById("reviews-main").style.visibility = "hidden";
  document.getElementById("about-cross").style.visibility = "visible";
  document.getElementById("cat-cross").style.visibility = "hidden";
  document.getElementById("reviews-cross").style.visibility = "hidden";
  document.getElementById("speakers-style").style.border = "";
  document.getElementById("earbuds-style").style.border = "";
  document.getElementById("phones-style").style.border = "";
  document.getElementById("accessories-style").style.border = "";
  document.getElementById("menu-pointer").style.visibility = "hidden";
  document.getElementById("menu-pointer-review").style.visibility = "hidden";
  document.getElementById("menu-pointer-about").style.visibility = "visible";
}
function changesecond() {  } 

function outsideclick()
{ 
  document.getElementById('about-me-main');
  document.getElementById('cat-menu');
  document.getElementById('submenu-phones');
  document.getElementById('submenu-speakers');
  document.getElementById('submenu-earbuds');
  document.getElementById('submenu-accessories');

  document.onclick = function(e)
  {
    if(e.target.id !== 'about-me-main' && e.target.id !== 'about-me' && e.target.id !== 'about-site' && e.target.id !== 'privacy-policy' && e.target.id !== 'contact' && e.target.id !== 'cat-menu' && e.target.id !== 'submenu-accessories' && e.target.id !== 'submenu-earbuds' && e.target.id !== 'submenu-speakers' && e.target.id !== 'submenu-phones' && e.target.id !== 'phones-style' && e.target.id !== 'speakers-style' && e.target.id !== 'earbuds-style' && e.target.id !== 'accessories-style' && e.target.id !== 'next-icon' && e.target.id !== 'reviews-main' && e.target.id !== 'cat-hover' && e.target.id !== 'reviews-hover' && e.target.id !== 'about-me-hover' && e.target.id !== 'btn-post' && e.target.id !== 'ID3380378_exploration_zoom_mag')
    {
      //element clicked wasn't the div; hide the div
      document.getElementById("about-me-main").style.visibility = 'hidden';
      document.getElementById("ABOUT_ME").style.color = "";
      document.getElementById("Rectangle_7").style.fill = "";
      document.getElementsByClassName("Rectangle_7")[0].style.filter = "";
      document.getElementById("CATEGORIES").style.color = "";
      document.getElementById("Rectangle_9").style.fill = "";
      document.getElementsByClassName("Rectangle_9")[0].style.filter = "";
      document.getElementById("cat-menu").style.visibility = "hidden";
      document.getElementById("submenu-phones").style.visibility = "hidden";
      document.getElementById("submenu-speakers").style.visibility = "hidden";
      document.getElementById("submenu-earbuds").style.visibility = "hidden";
      document.getElementById("submenu-accessories").style.visibility = "hidden";
      document.getElementById("reviews-main").style.visibility = "hidden";
      document.getElementById("REVIEWS").style.color = "";
      document.getElementById("Rectangle_8").style.fill = "";
      document.getElementsByClassName("Rectangle_8")[0].style.filter = "";
      document.getElementById("cat-cross").style.visibility = "hidden";
      document.getElementById("about-cross").style.visibility = "hidden";
      document.getElementById("reviews-cross").style.visibility = "hidden";
      document.getElementById("thank-you").style.visibility = "hidden";
      document.getElementById("speakers-style").style.border = "";
      document.getElementById("earbuds-style").style.border = "";
      document.getElementById("phones-style").style.border = "";
      document.getElementById("accessories-style").style.border = "";
      document.getElementById("search-tip-text").style.visibility = "";
      document.getElementById("menu-pointer").style.visibility = "hidden";
      document.getElementById("menu-pointer-review").style.visibility = "hidden";
      document.getElementById("menu-pointer-about").style.visibility = "hidden"; 
    }
  }
}

var outcheck = outsideclick();

function changeabouton()
{
  document.getElementById("about-me").style.border = "6px rgba(255,119,119,0.5) solid";
}
function changeaboutout()
{
  document.getElementById("about-me").style.border = "";
}

function changesiteon()
{
  document.getElementById("about-site").style.border = "6px rgba(255,119,119,0.5) solid";  
}
function changesiteout()
{
  document.getElementById("about-site").style.border = "";
}

function changeprivacyon()
{
  document.getElementById("privacy-policy").style.border = "6px rgba(255,119,119,0.5) solid";  
}
function changeprivacyout()
{
  document.getElementById("privacy-policy").style.border = "";
}

function changecontacton()
{
  document.getElementById("contact").style.border = "6px rgba(255,119,119,0.5) solid";  
}
function changecontactout()
{
  document.getElementById("contact").style.border = "";
}

function changephoneon()
{
    document.getElementById("submenu-phones").style.visibility = "visible";
    document.getElementById("submenu-earbuds").style.visibility = "hidden";
    document.getElementById("submenu-accessories").style.visibility = "hidden";
    document.getElementById("submenu-speakers").style.visibility = "hidden";
    document.getElementById("phones-style").style.border = "6px rgba(255,119,119,0.5) solid";
    document.getElementById("speakers-style").style.border = "";
	  document.getElementById("earbuds-style").style.border = "";
	  document.getElementById("accessories-style").style.border = "";
    document.getElementById("article-links").style.visibility = "visible";
}
function changephoneout()
{
	document.getElementById("submenu-phones").style.visibility = "visible";
	document.getElementById("article-links").style.visibility = "";
}
function subphoneclickappear()
{
	document.getElementById("submenu-phones").style.visibility = "visible";
}

function changespeakeron()
{
    document.getElementById("submenu-speakers").style.visibility = "visible";
    document.getElementById("submenu-phones").style.visibility = "hidden";
    document.getElementById("submenu-earbuds").style.visibility = "hidden";
    document.getElementById("submenu-accessories").style.visibility = "hidden";
    document.getElementById("speakers-style").style.border = "6px rgba(255,119,119,0.5) solid";
    document.getElementById("phones-style").style.border = "";
	  document.getElementById("earbuds-style").style.border = "";
	  document.getElementById("accessories-style").style.border = "";
}
function changespeakerout()
{
	document.getElementById("submenu-speakers").style.visibility = "visible";
}

function changeearbudon()
{
    document.getElementById("submenu-earbuds").style.visibility = "visible";
    document.getElementById("submenu-speakers").style.visibility = "hidden";
    document.getElementById("submenu-phones").style.visibility = "hidden";
    document.getElementById("submenu-accessories").style.visibility = "hidden";
    document.getElementById("earbuds-style").style.border = "6px rgba(255,119,119,0.5) solid";
    document.getElementById("speakers-style").style.border = "";
	  document.getElementById("phones-style").style.border = "";
	  document.getElementById("accessories-style").style.border = "";
}
function changeearbudout()
{
	document.getElementById("submenu-earbuds").style.visibility = "visible";
}

function changeaccessoryon()
{
    document.getElementById("submenu-accessories").style.visibility = "visible";
    document.getElementById("submenu-earbuds").style.visibility = "hidden";
    document.getElementById("submenu-speakers").style.visibility = "hidden";
    document.getElementById("submenu-phones").style.visibility = "hidden";
    document.getElementById("accessories-style").style.border = "6px rgba(255,119,119,0.5) solid";
    document.getElementById("speakers-style").style.border = "";
	  document.getElementById("earbuds-style").style.border = "";
	  document.getElementById("phones-style").style.border = "";
}
function changeaccessoryout()
{
	document.getElementById("submenu-accessories").style.visibility = "visible";
}

function changereviewon()
{
    document.getElementById("reviews-main").style.visibility = "visible";
    document.getElementById("REVIEWS").style.color = "rgba(0,0,0,1)";
    document.getElementById("Rectangle_8").style.fill = "rgba(255,119,119,1)";
    document.getElementsByClassName("Rectangle_8")[0].style.filter = "drop-shadow(0px 15px 40px rgba(255,119,119,0.6))";
    document.getElementById("ABOUT_ME").style.color = "";
    document.getElementById("Rectangle_7").style.fill = "";
    document.getElementsByClassName("Rectangle_7")[0].style.filter = "";
    document.getElementById("CATEGORIES").style.color = "";
    document.getElementById("Rectangle_9").style.fill = "";
    document.getElementsByClassName("Rectangle_9")[0].style.filter = "";
    document.getElementById("cat-menu").style.visibility = "hidden";
    document.getElementById("submenu-phones").style.visibility = "hidden";
    document.getElementById("submenu-speakers").style.visibility = "hidden";
    document.getElementById("submenu-earbuds").style.visibility = "hidden";
    document.getElementById("submenu-accessories").style.visibility = "hidden";
    document.getElementById("about-me-main").style.visibility = "hidden";
    document.getElementById("reviews-cross").style.visibility = "visible";
    document.getElementById("cat-cross").style.visibility = "hidden";
    document.getElementById("about-cross").style.visibility = "hidden";
    document.getElementById("speakers-style").style.border = "";
    document.getElementById("earbuds-style").style.border = "";
    document.getElementById("phones-style").style.border = "";
    document.getElementById("accessories-style").style.border = "";
    document.getElementById("menu-pointer").style.visibility = "hidden";
    document.getElementById("menu-pointer-review").style.visibility = "visible";
    document.getElementById("menu-pointer-about").style.visibility = "hidden";     
}
function changereviewout() {  }

function reviewoneon()
{
	document.getElementById("review-one").style.border = "6px rgba(255,119,119,0.5) solid";
	document.getElementById("review-one-tip-text").style.visibility = "visible";
}
function reviewoneout()
{
	document.getElementById("review-one").style.border = "";
	document.getElementById("review-one-tip-text").style.visibility = "";
}

function reviewtwoon()
{
	document.getElementById("review-two").style.border = "6px rgba(255,119,119,0.5) solid";
	document.getElementById("review-two-tip-text").style.visibility = "visible";
}
function reviewtwoout()
{
	document.getElementById("review-two").style.border = "";
	document.getElementById("review-two-tip-text").style.visibility = "";
}

function reviewthreeon()
{
    document.getElementById("review-three").style.border = "6px rgba(255,119,119,0.5) solid";
    document.getElementById("review-three-tip-text").style.visibility = "visible";
}
function reviewthreeout()
{
    document.getElementById("review-three").style.border = "";
    document.getElementById("review-three-tip-text").style.visibility = "";
}

function reviewfouron()
{
    document.getElementById("review-four").style.border = "6px rgba(255,119,119,0.5) solid";
    document.getElementById("review-four-tip-text").style.visibility = "visible";
}
function reviewfourout()
{
    document.getElementById("review-four").style.border = "";
    document.getElementById("review-four-tip-text").style.visibility = "";
}

function reviewsallon()
{
    document.getElementById("reviews-all").style.border = "4px rgba(255,119,119,0.4) solid";
    document.getElementById("reviews-all").style.color = "rgba(0,0,0,0.60)";
    document.getElementById("reviews-all-tip-text").style.visibility = "visible";
}
function reviewsallout()
{
    document.getElementById("reviews-all").style.border = "";
    document.getElementById("reviews-all").style.color = "";
    document.getElementById("reviews-all-tip-text").style.visibility = "";
}

function thanksappear()
{
    document.getElementById("thank-you").style.visibility = "visible";
    setTimeout(function() 
    {
        alert('Your Feedback has been sent successfully.');

    }, 1000); 
}

function blankfieldson()
{
	document.getElementById("blank-fields").style.visibility = "visible";
}
function blankfieldsout()
{
	document.getElementById("blank-fields").style.visibility = "";
}

function popcrosstipon()
{
	document.getElementById("cross-tip-text").style.visibility = "visible";
}
function popcrosstipout()
{
	document.getElementById("cross-tip-text").style.visibility = "";
}

function searchtips()
{
	document.getElementById("search-tip-text").style.visibility = "visible";
}

function toppickson()
{
	document.getElementById("top-picks-text").style.visibility = "visible";
}
function toppicksout()
{
	document.getElementById("top-picks-text").style.visibility = "";
}

  // document ends here ---------

