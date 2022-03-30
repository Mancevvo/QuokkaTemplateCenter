
window.addEventListener('load', function(){
    let navBar = document.querySelector('.QuokkaCustom');
    let navBarHeight = navBar.clientHeight;
    console.log('NavBar height is: ' + navBarHeight);

    let bannerPadding = document.querySelector('.adjustPaddingBanner')
    bannerPadding.style.paddingBottom = '90px';
    let newPaddingTop = 75 + navBarHeight

    bannerPadding.style.paddingTop = (newPaddingTop + 'px');
});