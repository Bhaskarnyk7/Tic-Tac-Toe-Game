let btns=document.querySelectorAll(".btn");
let rst=document.querySelector(".rst-btn");
let enablebtn=document.querySelector(".enablebtn");
let winline=document.querySelector("h2");

let winidx=[
   [0,1,2],
   [0,3,6],
   [0,4,8],
   [1,4,7],
   [2,5,8],
   [2,4,6],
   [3,4,5],
   [6,7,8]
];

let btnclick=true;

btns.forEach((btn)=>{
   btn.addEventListener("click",()=>{
    if(btnclick){
        btn.innerText="0";
         btnclick=false;
    }
    else{
      btn.innerText="X";
      btnclick=true;
    }
   
    btn.disabled=true;  //disable
    winner();
    enablebtn.addEventListener("click",()=>{  //Enable
      btn.disabled=false;
      winline.innerText="";
    });
   

   }); 

   //reset button
   rst.addEventListener("click",()=>{
      btn.innerText="";
      btn.disabled=false;
      winline.innerText="";
   });
  

});

const winner=()=>{
   for(let idx of winidx){
      let a=btns[idx[0]].innerText;
      let b=btns[idx[1]].innerText;
      let c=btns[idx[2]].innerText;

      if(a!="" && b!="" && c!=""){
         if(a===b && b===c){
              winline.innerHTML="<marquee width=100% direction=right height=100px> <h2>Winner</h2></marquee>";
         }
      }
   }
}




