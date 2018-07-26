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
    let wraper=document.querySelector(".wraper");
    console.log(wraper);
    let img=document.querySelectorAll(".wraper a");
    console.log(img);
    let imgwidth=parseInt(getComputedStyle(img[0],null).width);
    console.log(imgwidth);
    let now=0,next=0;
    let smallbtn=document.querySelectorAll(".btn .son");
    console.log(smallbtn);
    let lprev=document.querySelector(".prev");
    let lnext=document.querySelector(".next")
    let btnbox=document.querySelector(".btn");
    let s=setInterval(leftMove,1000);
    let flag=true;
    console.log(lprev, lnext);

    function rightMove() {
        next++;
        if(next==5){
            next=0;
        }
        img[next].style.left=imgwidth+"px";
        animate(img[now],{left:-imgwidth});
        animate(img[next],{left:0},function () {
            flag=true;
        });
        smallbtn[next].classList.add("hot");
        smallbtn[now].classList.remove("hot");
        now=next;
    }
    function  leftMove() {
        next--;
        if(next==-1){
            next=4;
        }
        img[next].style.left=-imgwidth+"px";
        animate(img[now],{left:imgwidth});
        animate(img[next],{left:0},function () {
            flag=true;
        });
        smallbtn[next].classList.add("hot");
        smallbtn[now].classList.remove("hot");
        now=next;
    }
    wraper.onmouseenter=function(){
        clearInterval(s);
    }
    wraper.onmouseleave=function(){
        s=setInterval(leftMove,1000);
    }
    lprev.onmouseenter=function(){
        clearInterval(s);
    }
    lprev.onmouseleave=function(){
        s=setInterval(leftMove,1000);
    }
    lnext.onmouseenter=function(){
        clearInterval(s);
    }
    lnext.onmouseleave=function(){
        s=setInterval(leftMove,1000);
    }
    btnbox.onmouseenter=function(){
        clearInterval(s);
    }
    btnbox.onmouseleave=function(){
        s=setInterval(leftMove,1000);
    }

    lprev.onclick=function () {
        if(!flag){
            return;
        }
        flag=false;
        leftMove();
    }
    lnext.onclick=function () {
        if(!flag){
            return;
        }
        flag=false;
        rightMove();
    }
    for(let i=0;i<smallbtn.length;i++){
        smallbtn[i].onclick=function () {
            for(let j=0;j<smallbtn.length;j++){
                smallbtn[j].classList.remove("hot");
            }
            smallbtn[i].classList.add("hot");
            if(i==now){
                return;
            }
            if(i>now){
                img[i].style.left=imgwidth+"px";
                animate(img[now],{left:-imgwidth});
                animate(img[i],{left:0});
            }
            if(i<now){
                img[i].style.left=-imgwidth+"px";
                animate(img[now],{left:imgwidth});
                animate(img[i],{left:0});
            }
            next=now=i;


        }
    }
    // let num=0;
    // let t=setInterval(move,2000);
    // function move() {
    //     num++;
    //     if(num==5){
    //         img[4].style.zIndex=5;
    //         num=0;
    //     }
    //     img[num].style.zIndex=10;
    //     for(let i=0;i<num;i++){
    //         img[i].style.zIndex=5;
    //     }
    // }
    //
    // img.onmouseenter=function () {
    //     clearInterval(t);
    // }
    // img.onmouseleave=function () {
    //     t=setInterval(move,2000);
    // }
    // next.onclick=function () {
    //     move();
    // }
    // prev.onclick=function () {
    //     move2()
    // }
    // function move2() {
    //     num--;
    //     if(num<0){
    //         img[0].style.zIndex=5;
    //         num=4;
    //     }
    //     img[num].style.zIndex=10;
    //     for(let i=4;i>num;i--){
    //         img[i].style.zIndex=5;
    //     }
    // }
    //内容部分

    let content=document.querySelectorAll(".content-list");
    let list=content[0].querySelectorAll(" li");
    console.log(list);
    let widths=parseInt(getComputedStyle(content[0],null).width)/3;
    console.log(widths);
    let times=0;
    let cprev=document.querySelectorAll(".small .prev");
    let cnext=document.querySelectorAll(".small .next2");
    let cricle=document.querySelectorAll(".cricle");
    console.log(cricle);
    let btn=cricle[0].querySelectorAll(".cricle .btn");
    console.log(btn);
    console.log(cprev[0],cnext[0]);
    cnext[0].onclick=function () {
        times++;
        if(times>2){
            times=2;
            return;
        }
        content[0].style.transform=`translate(${-widths*times}px)`;
        for(let i=0;i<btn.length;i++){
            btn[i].classList.remove("hot");
        }
        btn[times].classList.add("hot");
    }
    cprev[0].onclick=function () {
        times--;
        if(times<=-1){
            times=0;
            return;
        }
        content[0].style.transform=`translateX(${-widths*times}px)`;
        for(let i=0;i<btn.length;i++){
            btn[i].classList.remove("hot");
        }
        btn[times].classList.add("hot");
    }

    for(let i=0;i<btn.length;i++){
        btn[i].onclick=function () {
           for(let j=0;j<btn.length;j++){
               btn[j].classList.remove('hot');
           }
            btn[i].classList.add('hot');
            content[0].style.transform=`translate(${-widths*i}px)`;
        }
    }

    //封装
    let btn1=cricle[1].querySelectorAll(".btn");
    let btn2=cricle[2].querySelectorAll(".btn");
    let btn3=cricle[3].querySelectorAll(".btn");
    console.log(btn1);
    console.log(btn2);
    console.log(btn3);

    function up(rename,rename2,rename3,rename4) {
        let Ntime=0;
        rename.onclick = function () {
            Ntime++;
            if (Ntime > 2) {
                Ntime = 2;
                return;
            }
            rename2.style.transform = `translate(${-widths * Ntime}px)`;
            for (let i = 0; i < btn.length; i++) {
                rename3[i].classList.remove("hot");
            }
            rename3[Ntime].classList.add("hot");
        }
        rename4.onclick=function () {
            Ntime--;
            if(Ntime<=-1){
                Ntime=0;
                return;
            }
            rename2.style.transform=`translateX(${-widths*Ntime}px)`;
            for(let i=0;i<btn.length;i++){
                rename3[i].classList.remove("hot");
            }
            rename3[Ntime].classList.add("hot");
        }
        for(let i=0;i<rename3.length;i++){
            rename3[i].onclick=function () {
                for(let j=0;j<rename3.length;j++){
                    rename3[j].classList.remove('hot');
                }
                rename3[i].classList.add('hot');
                rename2.style.transform=`translate(${-widths*i}px)`;
            }
        }

    }
    up(cnext[1],content[1],btn1,cprev[1]);
    up(cnext[2],content[2],btn2,cprev[2]);
    up(cnext[3],content[3],btn3,cprev[3]);


    //闪购部分
    let longList=document.querySelector(".longList");
    console.log(longList);
    let longWidth=parseInt(getComputedStyle(longList,null).width);
    console.log(longWidth);
    let LeftBtn=document.querySelector(".L-more");
    let rightBtn=document.querySelector(".R-more");
    let uList=document.querySelector(".longList ul");
    let clickTimes=0;
    console.log(LeftBtn, rightBtn,uList);
    LeftBtn.onclick=function () {
        clickTimes--;
        if(clickTimes<0){
            clickTimes=0;
            return
        }
        uList.style.transform=`translate(${-longWidth*clickTimes}px)`;
    }
    rightBtn.onclick=function () {
        clickTimes++;
        if(clickTimes>2){
            clickTimes=2;
            return;
        }
        uList.style.transform=`translate(${-longWidth*clickTimes}px)`;
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
