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
}

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
