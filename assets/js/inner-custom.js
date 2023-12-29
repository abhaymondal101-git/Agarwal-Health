const innerBanner = document.querySelector(".inner-banner-img");
document.addEventListener("scroll",(e)=>{
    let valScroll1 = document.documentElement.scrollTop;
    if(valScroll1>10){
        // mainHeader.style.backgroundColor="#efefef";
        // mainHeader.style.position="fixed";
        // mainHeader.style.top="0%";
        // mainHeader.style.left=0;
        // mainHeader.style.right=0;
        // mainHeader.style.zIndex="100";
        // scrollLogo.style.height=100+"%";
        // scrollLogo.style.padding="0 0 10px 0";
        // scrollul.style.padding="25px 0 0 45px";
        // scrollEmailBtn.style.padding="24px 0";
        // console.log("jhfgj");
    }
    else{
        // mainHeader.style.backgroundColor="#efefef";
        // mainHeader.style.top=30+"px";
        // mainBanner.style.marginTop=5.7+"rem";
        innerBanner.style.marginTop=5+"rem";
        // scrollLogo.style.height="100%";
        // scrollLogo.style.padding="0 0 10px 0";
        // scrollul.style.padding="45px 0 0 65px";
        // scrollEmailBtn.style.padding="45px 0";
    }
});