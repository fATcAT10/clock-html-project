setInterval(()=>{
    let D=new Date();
    let hD=D.getHours();
    let mD=D.getMinutes();
    let sD=D.getSeconds();
    let hRotation=30*hD+mD/2;
    let mRotation=6*mD;
    let sRotation=6*sD;
    let hour=document.getElementById("hour");
    let minute=document.getElementById("minute");
    let second=document.getElementById("second");
    hour.style.transform=`rotate(${hRotation}deg)`;
    minute.style.transform=`rotate(${mRotation}deg)`;
    second.style.transform=`rotate(${sRotation}deg)`;
},1000);