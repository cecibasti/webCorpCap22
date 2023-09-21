// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//     var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//         document.getElementById("navbar").style.top = "0";
//     } else {
//         document.getElementById("navbar").style.top = "-50px";
//     }
//     prevScrollpos = currentScrollPos;
// }

window.addEventListener("scroll", function() {
    if (window.scrollY > 500) {
        $('.navbar').fadeOut();
    }
    else {
        $('.navbar').fadeIn();
    }
},false);

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// $(window).scroll(function(){
//     if($(this).scrollTop()>5){
//         $r(".navbar .navbar-brand img").attr("src","images/logos/Logo.svg");
//     } else {
//         $r(".navbar .navbar-brand img").attr("src","images/logos/LogoCC.svg");
//     }
// })
