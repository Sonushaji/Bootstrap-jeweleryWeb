$('#form1').submit(function(event){
    event.preventDefault();
    localStorage.clear;
    let var1=document.getElementById('inputEmail4').value;
    let var2=document.getElementById('inputPassword4').value;
    let var3=document.getElementById('inputAddress').value;
    let var4=document.getElementById('inputPhoneNumber').value;
    let var5=document.getElementById('inputCity').value;
    let formdata={
        email:var1,
        password:var2,
        address:var3,
        phone:var4,
        city:var5,
    }
    let json=JSON.stringify(formdata);
    localStorage.setItem("mytime", json);
    location.href="ans.html";
})