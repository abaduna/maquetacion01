import data from "./data.json" assert {type:"json"}


let dailyArray = data.map(item => item.timeframes.daily )
let weeklyArray = data.map(item => item.timeframes.weekly )
let monthlyArray = data.map(item => item.timeframes.monthly )
let tituloArrat = data.map(title => title.title )
let daily = document.querySelector("#daily")
let weekly = document.querySelector("#weekly")
let monthly = document.querySelector("#monthly")
const secound_section = document.querySelector(".secound-section")

let BGcolor = [

"hsl(15, 100%, 70%);",
"hsl(195, 74%, 62%);",
"hsl(348, 100%, 68%);",
"hsl(145, 58%, 55%);",
"hsl(264, 64%, 52%);",
"hsl(43, 84%, 65%);"
]




daily.addEventListener("click",()=>rowelemto(dailyArray))
weekly.addEventListener("click",()=>rowelemto(weeklyArray))
monthly.addEventListener("click",()=>rowelemto(monthlyArray))




function rowelemto(arr){
    secound_section.innerHTML = " "
    arr.forEach((elemento ,index)=>{
        secound_section.innerHTML += `  
    <div class="card">
        <div class="card__background"  style="background-color: ${BGcolor[index]}" > 
           <img class="card__image" src="./images/icon-${data[index].title.toLowerCase()}.svg" alt="" sizes="" srcset="">
         </div>
        
        <div class="card__deteils">
         <div class="card__activity">
           <p class="card__titile">  ${data[index].title}</p> 
           <img class="card__titile__ellipsis" src="./images/icon-ellipsis.svg" alt="tres puntos" sizes="" srcset="">
         </div>
         <div class="card__time"> 
           <p class="card__hour"> ${elemento.current}hrs</p>
           <p class="card__previous" >Previous - ${elemento.previous}hrs </p>
         </div>
       </div>
     </div>
   `;
    })
}