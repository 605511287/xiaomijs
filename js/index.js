window.onload=function () {
    // 购物车选项卡
    let shop = document.getElementsByClassName("shop")[0];
    let shopping = document.getElementsByClassName("shopping")[0];
    console.log(shopping);
    shop.onmouseenter = function () {
        // shopping.style.display='block';
        shopping.style.height = "100px";
    }
    shop.onmouseleave = function () {
        // shopping.style.display="none";
        shopping.style.height = 0;
    }
    // 侧导航选项卡
    let box = document.getElementsByClassName("box")[0];
    let nav = box.getElementsByClassName("nav")[0];
    console.log(nav);
    let small = nav.getElementsByClassName("small");
    console.log(small);
    for (let i=0;i<small.length;i++){
        let sideNav=small[i].getElementsByClassName("sideNav")[0];
        small[i].onmouseenter=function () {
            sideNav.style.display="block";
        }
        small[i].onmouseleave=function () {
            sideNav.style.display="none";
        }
    }
// 主导航选项卡
    let logoBox=document.getElementsByClassName("logoBox")[0];
    console.log(logoBox);
    let nav2=logoBox.getElementsByClassName('nav')[0];
    console.log(nav2);
    let a=nav2.getElementsByTagName('a');
    console.log(a);
    let topCard=logoBox.getElementsByClassName("topCard");
    console.log(topCard);
    console.log(a.length);
    for (let i=0;i<a.length;i++){
        a[i].onmouseenter=function () {
            topCard[i].style.height='230px';
            topCard[i].style.borderTop="1px solid #b0b0b0";
        }
        a[i].onmouseleave=function () {
            topCard[i].style.height=0;
            topCard[i].style.borderTop="0px";

        }
    }
    // let sideNav = small.getElementsByClassName("sideNav")[0];
    // console.log(sideNav);
    // small.onmouseenter=function () {
    //     sideNav.style.display="block";
    // }
    // small.onmouseleave=function () {
    //     sideNav.style.display="none";
    // }

    //家电选项卡
    let jiadian=document.getElementsByClassName('jiadian')[0];
    console.log(jiadian);
    let nav1=jiadian.getElementsByClassName("nav")[0];
    console.log(nav1);
    let span=nav1.getElementsByTagName("span");
    console.log(span);
    let tabCat=jiadian.getElementsByClassName("tabCat");
    console.log(tabCat);
    for(let i=0;i<tabCat.length;i++){
        span[i].onmouseenter=function () {
        for(let j=0;j<tabCat.length;j++) {
            tabCat[j].style.display="none";
            span[j].className="leave";
            tabCat[i].style.display = "block";
            span[i].className="enter";
            tabCat[i].style.cursor="default";

        }
        }
    }
// 函数封装
/* function tab(mn){
    /!* let n=document.getElementsByClassName('mn')[0];
     console.log(n);*!/
     let nav1=n.getElementsByClassName("nav")[0];
     console.log(nav1);
     let span=nav1.getElementsByTagName("span");
     console.log(span);
     let tabCat=n.getElementsByClassName("tabCat");
     console.log(tabCat);
     for(let i=0;i<tabCat.length;i++){
         span[i].onmouseenter=function () {
             for(let j=0;j<tabCat.length;j++) {
                 tabCat[j].style.display="none";
                 span[j].className="leave";
                 tabCat[i].style.display = "block";
                 span[i].className="enter";
             }
         }
     }
 }*/
 // 调用函数
    let n=document.getElementsByClassName("zhineng")[0]
    function tab(mn){
    /* let n=document.getElementsByClassName('mn')[0];
     console.log(n);*/
     let nav1=mn.getElementsByClassName("nav")[0];
     console.log(nav1);
     let span=nav1.getElementsByTagName("span");
     console.log(span);
     let tabCat=mn.getElementsByClassName("tabCat");
     console.log(tabCat);
     for(let i=0;i<tabCat.length;i++){
         span[i].onmouseenter=function () {
             for(let j=0;j<tabCat.length;j++) {
                 tabCat[j].style.display="none";
                 span[j].className="leave";
                 tabCat[i].style.display = "block";
                 span[i].className="enter";
                 tabCat[i].style.cursor="default";

             }
         }
     }
 }
 tab(n)


    function x(name) {
      let q =document.getElementsByClassName(name)[0];
        let nav1=q.getElementsByClassName("nav")[0];
        console.log(nav1);
        let span=nav1.getElementsByTagName("span");
        console.log(span);
        let tabCat=q.getElementsByClassName("tabCat");
        console.log(tabCat);
        for(let i=0;i<tabCat.length;i++){
            span[i].onmouseenter=function () {
                for(let j=0;j<tabCat.length;j++) {
                    tabCat[j].style.display="none";
                    span[j].className="leave";
                    tabCat[i].style.display = "block";
                    span[i].className="enter";
                    tabCat[i].style.cursor="default";
                }
            }
        }
    }

    x("dapei");
    x("peijian");
    x("zhoubian");

    //轮播图
    let box1=document.getElementsByClassName("box")[0];
    let wraper =document.getElementsByClassName("wraper")[0];
    let img =wraper.getElementsByTagName("a");
    let prev=box1.getElementsByClassName("prev")[0];
    let next=box1.getElementsByClassName("next")[0];
    console.log(prev, next);
    console.log(img);
    let num=0;
    let t=setInterval(move,2000);
    function move() {
        num++;
        if(num==5){
            img[4].style.zIndex=5;
            num=0;
        }
        img[num].style.zIndex=10;
        for(let i=0;i<num;i++){
            img[i].style.zIndex=5;
        }
    }

    img.onmouseenter=function () {
        clearInterval(t);
    }
    img.onmouseleave=function () {
        t=setInterval(move,2000);
    }
    next.onclick=function () {
        move();
    }
    prev.onclick=function () {
        move2()
    }
    function move2() {
        num--;
        if(num<0){
            img[0].style.zIndex=5;
            num=4;
        }
        img[num].style.zIndex=10;
        for(let i=4;i>num;i--){
            img[i].style.zIndex=5;
        }
    }
    }

/*
    function move(){
        num++;
        if(num==5){
            img[num-1].style.zIndex=5;
            num=0;
           /!* for(let i=0;i<img.length;i++){
                img[i].style.zIndex=5;
            }*!/
        }
        for(let j=0;j<num;j++){
            img[j].style.zIndex=5;
        }
        img[num].style.zIndex=10;

    }
    box1.onmouseenter=function () {
        clearInterval(t);
    }
    box1.onmouseleave=function () {
        t=setInterval(move,2000);
    }
    next.onclick=function () {
        move()
    }
    prev.onclick=function () {
        move2()
    }
    function move2() {
        num--;
        if(num<0){
            num=4;
            for(let i=4;i>=0;i--){
                img[i].style.zIndex=5;
            }
        }
        for(let j=num;j<img.length;j++){
            img[j].style.zIndex=5;
        }
        img[num].style.zIndex=10;
    }
}*/
