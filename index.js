const endDate = "23 october 2023 12:00 AM" ;
document.getElementById('end').innerText=endDate;
const inputs=document.querySelectorAll("input")
function clock(){
const now= new Date() ;
const end= new Date(endDate) ;
const diff = (end -now)/1000 ;
if(diff<0) return;
inputs[0].value= Math.floor(diff/3600/24);
inputs[1].value= Math.floor(diff/3600)%24;
inputs[2].value= Math.floor(diff/60)%60;
inputs[3].value= Math.floor(diff)%60;
}
clock();

setInterval ( ()=> {clock()},
1000
)
