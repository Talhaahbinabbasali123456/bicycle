function init(){
    window.onscroll = function () {scrollFunction()}
    
    function scrollFunction(){
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
            document.querySelector('.nav-top').style.display = 'none';
            document.querySelector('header').style.position = 'fixed';
            document.querySelector('.nav-mid').style.padding = '10px 0px';
            
        } else {
            document.querySelector('.nav-top').style.display = 'block';
            document.querySelector('header').style.position = 'static';
            document.querySelector('.nav-mid').style.padding = '35px 0px';
        }
    }
    
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        
        
        
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        autoplay: {
            delay: 5000,
        },
        
    })
}

// side nav


function sideNavOpen() {
    document.querySelector('.side-navbar').classList.remove("hidden");
    document.querySelector('.side-navbar').classList.add("visible");
    document.querySelector('.side-navbar').classList.remove("fadeOutRight");
    document.querySelector('.side-navbar').classList.add("fadeInRight");
    document.querySelector('body').style.position = 'fixed'; 
}
function sideNavClose() {
    document.querySelector('.side-navbar').classList.remove("fadeInRight");
    document.querySelector('.side-navbar').classList.add("fadeOutRight");
    document.querySelector('.side-navbar').classList.remove("visible");
    document.querySelector('.side-navbar').classList.add("hidden");
    document.querySelector('body').style.position = 'static'; 
}



// autocomplete functions

$(function() {
    $( "#autocomplete-4" ).autocomplete({
        source: [
            { label: "bicyle", value: "Bicycle" },
            { label: "jumper", value: "Jumper" },
            { label: "gear", value: "Gear" },
            { label: "sport", value: "Sports" },
            { label: "simple", value: "Simple" },
            { label: "fast", value: "Fast" },
            { label: "plane", value: "Plane" }, 
            { label: "rider", value: "Rider" }
        ]
    });
});

// for small screen 

$(function() {
    $( "#autocomplete-2" ).autocomplete({
        source: [
            { label: "bicyle", value: "Bicycle" },
            { label: "jumper", value: "Jumper" },
            { label: "gear", value: "Gear" },
            { label: "sport", value: "Sports" },
            { label: "simple", value: "Simple" },
            { label: "fast", value: "Fast" },
            { label: "plane", value: "Plane" }, 
            { label: "rider", value: "Rider" }
        ]
    });
});

// dropdown function
// function dropdown() {
//     document.querySelector('.dropdown').
// }

function dropdownOpen() {
    document.querySelector(".dropdown").classList.remove("hidden");
    document.querySelector(".dropdown").classList.add("visible");
    document.querySelector(".drop-open").style.display = "none";
    document.querySelector(".drop-close").style.display = "inline-block";
}

function dropdownClose() {
    document.querySelector(".dropdown").classList.remove("visible");
    document.querySelector(".dropdown").classList.add("hidden");
    document.querySelector(".drop-open").style.display = "inline-block";
    document.querySelector(".drop-close").style.display = "none";
 
}
