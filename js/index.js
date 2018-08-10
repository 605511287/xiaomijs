window.onload=function () {
    // 购物车选项卡
    let shop = document.getElementsByClassName("shop")[0];
    let shopping = document.getElementsByClassName("shopping")[0];
    shop.onmouseenter = function () {
        shopping.style.height = "98px";
    }
    shop.onmouseleave = function () {
        shopping.style.height = 0;
    }
    // 侧导航选项卡
    let box = document.getElementsByClassName("box")[0];
    let nav = box.getElementsByClassName("nav")[0];
    let small = nav.getElementsByClassName("small");
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
    let logoSpace=document.getElementsByClassName("logoSpace")[0]
    let logoBox=document.getElementsByClassName("logoBox")[0];
    let nav2=logoBox.getElementsByClassName('nav')[0];
    let a=nav2.querySelectorAll('a');
    let topCard=logoBox.getElementsByClassName("topCard");
    for (let i=0;i<a.length-2;i++){
        a[i].onmouseenter=function () {
            // topCard[i].style.height='230px';
            // topCard[i].style.borderTop="1px solid #b0b0b0";
            topCard[i].style.display='block';
            
        }
        a[i].onmouseleave=function () {
            // topCard[i].style.height=0;
            // topCard[i].style.borderTop="0px";
            topCard[i].style.display='none';
        }
    }


    //家电选项卡
    let jiadian=document.getElementsByClassName('jiadian')[0];
    let nav1=jiadian.getElementsByClassName("nav")[0];
    let span=nav1.getElementsByTagName("span");
    let tabCat=jiadian.getElementsByClassName("tabCat");
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

 // 调用函数
    let n=document.getElementsByClassName("zhineng")[0]
    function tab(mn){
     let nav1=mn.getElementsByClassName("nav")[0];
     let span=nav1.getElementsByTagName("span");
     let tabCat=mn.getElementsByClassName("tabCat");
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
        let span=nav1.getElementsByTagName("span");
        let tabCat=q.getElementsByClassName("tabCat");
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
    let img=document.querySelectorAll(".wraper a");
    let imgwidth=parseInt(getComputedStyle(img[0],null).width);
    let now=0,next=0;
    let smallbtn=document.querySelectorAll(".btn .son");
    let lprev=document.querySelector(".prev");
    let lnext=document.querySelector(".next")
    let btnbox=document.querySelector(".btn");
    let s=setInterval(leftMove,1000);
    let flag=true;

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
    let pand=true;
    function  leftMove() {
        pand=false;
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
        pand=true;
    }
    wraper.onmouseleave=function(){
        if(!pand){
            return;
        }
        else{
            s=setInterval(leftMove,1000);
        }
       
    }
    lprev.onmouseenter=function(){
        clearInterval(s);
        pand=true;
    }
    lprev.onmouseleave=function(){
        if(!pand){
            return;
        }
        else{
            s=setInterval(leftMove,1000);
        }
    }
    lnext.onmouseenter=function(){
        clearInterval(s);
        pand=true;
    }
    lnext.onmouseleave=function(){
        if(!pand){
            return;
        }
        else{
            s=setInterval(leftMove,1000);
        }
    }
    btnbox.onmouseenter=function(){
        clearInterval(s);
        pand=true;
    }
    btnbox.onmouseleave=function(){
        if(!pand){
            return;
        }
        else{
            s=setInterval(leftMove,1000);
        }
    }
    nav.onmouseenter=function(){
        clearInterval(s);
        pand=true;
    }
    nav.onmouseleave=function(){
        if(!pand){
            return;
        }
        else{
            s=setInterval(leftMove,1000);
        }
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
    //内容部分

    let content=document.querySelectorAll(".content-list");
    let list=content[0].querySelectorAll(" li");
    let widths=parseInt(getComputedStyle(content[0],null).width)/3;
    let times=0;
    let cprev=document.querySelectorAll(".small .prev");
    let cnext=document.querySelectorAll(".small .next2");
    let cricle=document.querySelectorAll(".cricle");
    let btn=cricle[0].querySelectorAll(".cricle .btn");
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
    let longWidth=parseInt(getComputedStyle(longList,null).width);
    let LeftBtn=document.querySelector(".L-more");
    let rightBtn=document.querySelector(".R-more");
    let uList=document.querySelector(".longList ul");
    let Lefta=document.querySelector(".L-more a");
    let Righta=document.querySelector(".R-more a");
    console.log(Lefta)
    let clickTimes=0;
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
            Righta.style.color="#e0e0e0";
            return;
        }       
        uList.style.transform=`translate(${-longWidth*clickTimes}px)`;
    }
    LeftBtn.onmouseenter=function(){
        if(clickTimes==0){
            Lefta.style.color="#e0e0e0";
            return
        }
        else{
            Lefta.style.color="#ff6700";
            console.log(1)
        }    
    }
    // 搜索框部分
    let search=document.querySelector(".search");
    let searchText=search.querySelector(".searchText");
    let button=search.querySelector(".button")
    let hotWord=search.querySelector(".hotword");
    let searchWord=hotWord.querySelectorAll("a")
    let searchList=search.querySelector(".searchList");
    searchText.onclick=function(){
        searchText.style.borderColor="#ff6700";
        button.style.borderColor="#ff6700";
        button.style.transform="border 0s"
        animate(hotWord,{display:"none"},10)
        searchList.style.display="block";
     
    }
    searchText.onblur=function(){
        searchText.style.borderColor="#e0e0e0";
        button.style.borderColor="#e0e0e0";
        animate(hotWord,{display:"block"},10)
        searchList.style.display="none";
    }
// 倒计时部分
    let falshTime=document.querySelector(".falshTime")
    let smallTime=falshTime.querySelectorAll(".time")
    runTime();
    setInterval (runTime,1000);
    function runTime(){
        let arr1= djs()
        smallTime.forEach(function(value,index){
            if(arr1[index]<10){
                value.innerText="0"+arr1[index]
            }
            else{
                value.innerText=arr1[index];
            }
         
        })
    } 
    function djs(){
        let arr=[];
        let nowTime=new Date();
        let future =new Date("2018.8.11.10:00");
        let cha =Math.floor((future.getTime()-nowTime.getTime())/1000);
        let hours=Math.floor(cha/60/60);
         cha = cha%(60*60)
        let min =Math.floor(cha/60);
        let sec =Math.floor(cha%60);
        arr.push(hours,min,sec);
        return arr;
    }
  

}

