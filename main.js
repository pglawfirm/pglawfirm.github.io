"use tsrict";
//loader
document.body.onload=function(){
    setTimeout(function(){
         let preloader=document.querySelector(".preloader");
         console.log(preloader)
         preloader.classList.add("hidden");
    },1000)


}
//loader end

//progress Bar
let progressQual=document.querySelector(".progress-qual");
let progressSucc=document.querySelector(".progress-succ");
let progressCient=document.querySelector(".progress-client");
let progressHonor=document.querySelector(".progress-honor")

let prog=0;

 setInterval(function(){
    topQual=progressQual.getBoundingClientRect().top;
    if(topQual<window.innerHeight-progressQual.offsetHeight){
    
     prog++
     if(prog<=20)
     progressQual.innerHTML=prog+"+";
    }
},20)
let prog2=0;

 setInterval(function(){
    topQual=progressSucc.getBoundingClientRect().top;
    if(topQual<window.innerHeight-progressQual.offsetHeight){
    
     prog2++
     if(prog2<=150)
     progressSucc.innerHTML=prog2+"+";
    }
},20)
let prog3=0;

 setInterval(function(){
    topQual=progressCient.getBoundingClientRect().top;
    if(topQual<window.innerHeight-progressQual.offsetHeight){
    
     prog3++
     if(prog3<=130)
     progressCient.innerHTML=prog3+"+";
    }
},20)
let prog4=0;

 setInterval(function(){
    topQual=progressHonor.getBoundingClientRect().top;
    if(topQual<window.innerHeight-progressQual.offsetHeight){
    
     prog4++
     if(prog4<=100)
     progressHonor.innerHTML=prog4+"+";
    }
},20)

//end progress bar


//Reviews carusel
// let reviews=document.querySelectorAll(".reviews_small");
// let i;
// reviews.forEach(function(item, index){
//     item.dataset.index=index;
//     i=0
//     if(i+3<=reviews.length){

//     if(index>=i && index<i+3){
//         item.style.display="block";
//         item.setAttribute("data-active","")

//     }else{
//         item.style.display="none";

//     }
// }
// })
// let chevronRight=document.querySelector(".fa-chevron-right");

// chevronRight.addEventListener("click",function(){
//     console.log("i"+i)
//     i++;
//     if(i+3<=reviews.length){
       
//     reviews.forEach(function(item, index){
//         if(item.getAttribute("data-index")>=i && item.getAttribute("data-index")<i+3){
//             console.log("data-index"+item.getAttribute("data-index"))
//             item.style.display="block";
    
//         }else{
//             item.style.display="none";
    
//         }
//     })  
//     }else{
//         i--
//     }
// })
// let chevronLeft=document.querySelector(".fa-chevron-left");
// chevronLeft.addEventListener("click",function(){
//     if(i>0){
//         i--;
//         reviews.forEach(function(item, index){
//             if(item.getAttribute("data-index")>=i && item.getAttribute("data-index")<i+3){
//                 console.log("data-index"+item.getAttribute("data-index"))
//                 item.style.display="block";
        
//             }else{
//                 item.style.display="none";
        
//             }
//         })  

//     }
// })
//reviews carusel end
//reviews carusel 2
let reviews=document.querySelector(".reviews-body");
let chevronRight=document.querySelector(".fa-chevron-right");

chevronRight.addEventListener("click",function(){
    let left;
    if(reviews.getBoundingClientRect().right<document.documentElement.clientWidth){
        left=reviews.getBoundingClientRect().left;
    }else{
        left=reviews.getBoundingClientRect().left-400;
    }
    console.log(reviews.offsetWidth);
    console.log(reviews.getBoundingClientRect().right)
    reviews.style.transform=`translate(${left}px)`;
    left=left-400;

})

let chevronLeft=document.querySelector(".fa-chevron-left");
 chevronLeft.addEventListener("click",function(){
    let right
    if(reviews.getBoundingClientRect().left<0){
     right=reviews.getBoundingClientRect().left+400;
}else{
     right=0;
}
    
    
    reviews.style.transform=`translate(${right}px)`;
    right+=400;
 })
//reviws end
//scrolling up
window.addEventListener("scroll",scrolingUP);
function scrolingUP(){
if(window.pageYOffset>document.documentElement.clientHeight/2){
    console.log("barev")
    let scDiv=document.createElement("div");
    scDiv.className="scrollDiv";
    scDiv.innerHTML='<i class="fa-solid fa-chevron-up"></i>';
    document.body.append(scDiv);
    
    window.removeEventListener("scroll",scrolingUP);
    
   
    scDiv.addEventListener("click",function(){
        window.scrollTo(0,0);
        scDiv.remove();
        window.addEventListener("scroll",scrolingUP);
    })
    
}
}
// end scroll up

//responsive 992
let practicH1=document.querySelector(".practic-areas-h1");
let practicArea=document.querySelector(".practic_areas")
practicH1.addEventListener("click",function(){

    practicArea.classList.toggle("show")
})
AOS.init();
