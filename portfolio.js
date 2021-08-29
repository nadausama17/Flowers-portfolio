var slideindex=1;
showslides(slideindex);

function plusSlides(n)
{
   slideindex+=n;
   var slides=document.getElementsByClassName("mySlides");
   if(slideindex>slides.length)
    {
        slideindex=1;
    }
   if(slideindex<1)
    {
        slideindex=slides.length;
    }
   showslides(slideindex);
}
function currentslide(n)
{
    slideindex=n;

    showslides(slideindex);
}

function showslides(slideindex)
{
    var slides=document.getElementsByClassName("mySlides");
    var dots=document.getElementsByClassName("dot");
    var i;

    for(i=0;i<slides.length;i++)
    {
        slides[i].style.display="none";
    }
    for(i=0;i<dots.length;i++)
    {
        dots[i].className=dots[i].className.replace(" active","");
    }

    
    
    
    slides[slideindex-1].style.display="block";
    dots[slideindex-1].className+=" active";
}



var f=document.getElementsByTagName("footer");
if(document.getElementsByTagName("h1")[0].innerHTML=="Flower Info")
{
    f[0].style.display="none";
}

function show_hide()
{
    var btn_menu=document.getElementById("dropdown_content");
    if(btn_menu.style.display=="none")
    {
        btn_menu.style.display="block";
    }
    else
    {
        btn_menu.style.display="none";
    }
}

function asia_click()
{

    document.getElementById("buttons").style.display="none";
    document.getElementById("con_name").innerHTML="ASIA";
    document.getElementById("con_name").style.display="block";
    
    document.getElementById("asia_sec").style.display="grid";
    document.getElementById("asia_sec").style.gridTemplateColumns="repeat(auto-fit,minmax(320px,1fr))";
    document.getElementById("asia_sec").style.gridGap="10px";
    document.getElementById("ref_asia").style.display="block";
    f[0].style.display="block";
}

function africa_click()
{

    document.getElementById("buttons").style.display="none";
    document.getElementById("con_name").innerHTML="AFRICA";
    document.getElementById("con_name").style.display="block";
    document.getElementById("africa_sec").style.display="grid";
    document.getElementById("africa_sec").style.gridTemplateColumns="repeat(auto-fit,minmax(300px,1fr))";
    document.getElementById("africa_sec").style.gridGap="10px";
    document.getElementById("ref_africa").style.display="block";
    f[0].style.display="block";
}

function europe_click()
{

    document.getElementById("buttons").style.display="none";
    document.getElementById("con_name").innerHTML="EUROPE";
    document.getElementById("con_name").style.display="block";
    document.getElementById("europe_sec").style.display="grid";
    document.getElementById("europe_sec").style.gridTemplateColumns="repeat(auto-fit,minmax(300px,1fr))";
    document.getElementById("europe_sec").style.gridGap="10px";
    document.getElementById("ref_europe").style.display="block";
    f[0].style.display="block";
}

function australia_click()
{

    document.getElementById("buttons").style.display="none";
    document.getElementById("con_name").innerHTML="AUSTRALIA";
    document.getElementById("con_name").style.display="block";
    document.getElementById("australia_sec").style.display="grid";
    document.getElementById("australia_sec").style.gridTemplateColumns="repeat(auto-fit,minmax(300px,1fr))";
    document.getElementById("australia_sec").style.gridGap="10px";
    document.getElementById("ref_australia").style.display="block";
    f[0].style.display="block";
}