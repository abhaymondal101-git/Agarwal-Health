const mainHeader = document.querySelector(".main-menu-header");
// const scrollLogo = document.querySelector(".scroll-logo");
// const scrollul = document.querySelector(".main-menu-header ul");
// const scrollEmailBtn = document.querySelector(".email-btn");
const mainBanner = document.querySelector(".main-banner");
document.addEventListener("scroll",(e)=>{
    let valScroll1 = document.documentElement.scrollTop;
    if(valScroll1>10){
        mainHeader.style.backgroundColor="#efefef";
        mainHeader.style.position="fixed";
        mainHeader.style.top="0%";
        mainHeader.style.left=0;
        mainHeader.style.right=0;
        mainHeader.style.zIndex="100";
        // scrollLogo.style.height=100+"%";
        // scrollLogo.style.padding="0 0 10px 0";
        // scrollul.style.padding="25px 0 0 45px";
        // scrollEmailBtn.style.padding="24px 0";
        // console.log("jhfgj");
    }
    else{
        mainHeader.style.backgroundColor="#efefef";
        mainHeader.style.top=30+"px";
        mainBanner.style.marginTop=4.4+"rem";
        // scrollLogo.style.height="100%";
        // scrollLogo.style.padding="0 0 10px 0";
        // scrollul.style.padding="45px 0 0 65px";
        // scrollEmailBtn.style.padding="45px 0";
    }
})

const hamImg = document.querySelector(".ham-img img");
const navUlitem = document.querySelector(".nav-mobile-lower");
const navMobileUpper = document.querySelector(".nav-mobile-upper");
hamImg.addEventListener("click",()=>{
  navUlitem.classList.toggle("translateCss");
});


document.addEventListener("scroll",(e)=>{
    let valScroll2 = document.documentElement.scrollTop;
    if(valScroll2>10){
        navMobileUpper.style.position="fixed";
        navMobileUpper.style.top=-5+"px";
        navMobileUpper.style.left=0;
        navMobileUpper.style.right=0;
        navMobileUpper.style.zIndex=10000000;
    
    }
    else{
        console.log("hello")
        // navMobileUpper.style.top=auto;
        navMobileUpper.style.top=42+"px";
    }})
