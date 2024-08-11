$(document).ready(function(){
    const obj = JSON.parse(localStorage.mytime);
    let x= obj.email;
    let y = obj.password;
    let z= obj.address;
    let a =obj.phone;
    let b = obj.city;
    console.log(x);
    document.getElementById('id1').innerHTML='EMAIL' + x;
    document.getElementById('id2').innerHTML='PASSWORD' + y;
    document.getElementById('id3').innerHTML='ADDRESS' + z;
    document.getElementById('id4').innerHTML='PHONE NUMBER' + a;
    document.getElementById('id5').innerHTML='CITY' + b;
})