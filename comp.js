const outer=document.querySelector(".outer")
const speed=document.querySelector(".speed")

navigator.geolocation.watchPosition((data)=>{
    outer.style.transform=`rotate(${data.coords.heading}deg)`
    speed.textContent=`${data.coords.speed}Kmph`
})