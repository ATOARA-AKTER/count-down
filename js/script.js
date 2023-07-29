// const endDateElm = document.querySelector(".date");
const endDateElm = "15 april 2024 12:01 am";
// let endDateValue = endDateElm.value;

const countDownElm = Array.from(document.querySelectorAll(".count_down"));
// endDateElm.addEventListener("change",(e)=>{
//   endDateValue = e.target.value;
// })

function countDown (){
    // let endDate = new Date(`${endDateValue} 12:01 am`);
    let endDate = new Date(endDateElm);
    let today = new Date();
    let dateDiff = (endDate - today) / 1000;
    let day = Math.floor(dateDiff / 3600 / 24);
    let hour = Math.floor(dateDiff / 3600) % 24;
    let min = Math.floor(dateDiff / 60) % 60;
    let sec = Math.floor(dateDiff % 60);
    countDownElm[0].textContent = day;
    countDownElm[1].textContent = hour;
    countDownElm[2].textContent = min;
    countDownElm[3].textContent = sec;
}
setInterval(()=>{
    countDown();
},1000)