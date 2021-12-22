function cities(){    
    var city1=document.getElementById("city1");
    city1.textContent="Amravati";
    var city2=document.getElementById("city2");
    city2.textContent="Pune";
    var city3=document.getElementById("city3");
    city3.textContent="Nagpur";
}
function brands(){
    var brand1=document.getElementById("brand1");
    brand1.textContent="Apple";
    var brand2=document.getElementById("brand2");
    brand2.textContent="Dell";
    var brand3=document.getElementById("brand3");
    brand3.textContent="Asus";
    var brand4=document.getElementById("brand4");
    brand4.textContent="Lenovo";
    var brand5=document.getElementById("brand5");
    brand5.textContent="Acer";
}
function ready(){
    var check1=document.getElementById("city");
    var check2=document.getElementById("brand");

    if(check1){
        var city1=document.getElementById("city1");
        city1.textContent="Amravati";
        var city2=document.getElementById("city2");
        city2.textContent="Pune";
        var city3=document.getElementById("city3");
        city3.textContent="Nagpur";
    }
    else if(check2){
        var brand1=document.getElementById("brand1");
        brand1.textContent="Apple";
        var brand2=document.getElementById("brand2");
        brand2.textContent="Dell";
        var brand3=document.getElementById("brand3");
        brand3.textContent="Asus";
        var brand4=document.getElementById("brand4");
        brand4.textContent="Lenovo";
        var brand5=document.getElementById("brand5");
        brand5.textContent="Acer";
    }

}


let fnamenode = document.getElementById("fname");
let lnamenode = document.getElementById("lname");
let unamenode = document.getElementById("uname");
let passnode = document.getElementById("pass");
let cpassnode = document.getElementById("cpass");
let mobilenode = document.getElementById("mobile");
let addnode = document.getElementById("address");

let border1 = "2px solid red";
let border2 = "2px solid green";
let tdnode1 = document.getElementById("error1");
let tdnode2 = document.getElementById("error2");
let tdnode3 = document.getElementById("error3");
let tdnode4 = document.getElementById("error4");
let tdnode5 = document.getElementById("error5");
let tdnode6 = document.getElementById("error6");
let tdnode7 = document.getElementById("error7");


function validate1() {
    tdnode1.textContent = "";
    let fname = fnamenode.value;
    let regExp=new RegExp("^[A-Za-z]*$");
    console.log(regExp.test(fname));
    if (fname == '') {
        tdnode1.textContent = "this field is required";
        fnamenode.style.border = border1;
        return false;
    }
    else if(regExp.test(fname)==false){
        tdnode1.textContent = "name should have only charecter";
        fnamenode.style.border = border1;
        return false;
    }
    else {
        fnamenode.style.border = border2;
        return true;
    }
}

function validate2() {
    tdnode2.textContent = "";
    let lname = lnamenode.value;
    let regExp=new RegExp("^[A-Za-z]*$");
    console.log(regExp.test(lname));
    if (lname == '') {
        tdnode2.textContent = "this field is required";
        lnamenode.style.border = border1;
        return false;
    }
    else if(regExp.test(lname)==false){
        tdnode2.textContent = "name should have only charecter";
        lnamenode.style.border = border1;
        return false;
    }
    else {
        lnamenode.style.border = border2;
        return true;
    }
}

function validate3() {
    tdnode3.textContent = "";
    let uname = unamenode.value;
    if (uname == '') {
        tdnode3.textContent = "this field is required";
        unamenode.style.border = border1;
        return false;
    }
    else if(uname.length<3 || uname.length>10){
        tdnode3.textContent = "uname must have atlest 3 at most 10 chars";
        unamenode.style.border = border1;
        return false;
    }
    else {
        unamenode.style.border = border2;
        return true;
    }
}

function validate4() {
    tdnode4.innerHTML = "";
    let regExp=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
    let pass = passnode.value;
    if (pass == '') {
        tdnode4.textContent = "this field is required";
        passnode.style.border = border1;
        return false;
    }
    else if(regExp.test(pass)==false){
        let spanNode=document.createElement("span");
        spanNode.textContent="the pass should contain at least one";
        let ulNode=document.createElement("ul");
        let liNode1=document.createElement("li");
        liNode1.textContent="Small letter";
        let liNode2=document.createElement("li");
        liNode2.textContent="Capital letter";
        let liNode3=document.createElement("li");
        liNode3.textContent="One symbol";
        let liNode4=document.createElement("li");
        liNode4.textContent="One number";
        ulNode.append(liNode1,liNode2,liNode3,liNode4);
        tdnode4.append(spanNode,ulNode);
        passnode.style.border = border1;
        return false;
    }
    else if(pass.length<5 || pass.length>12){
        tdnode4.textContent = "password should be atleast 5 & atmost 12 chars";
        passnode.style.border = border1;
        return false;
    }
    else {
        passnode.style.border = border2;
        return true;
    }
}

function validate5() {
    tdnode5.textContent = "";
    let cpass = cpassnode.value;
    let pass = passnode.value;
    if (cpass == '') {
        tdnode5.textContent = "this field is required";
        cpassnode.style.border = border1;
        return false;
    }
    else if(cpass!==pass){
        tdnode5.textContent = "password should be Matched";
        cpassnode.style.border = border1;
        return false;
    }
    else {
        cpassnode.style.border = border2;
        return true;
    }
}

function validate6() {
    tdnode6.textContent = "";
    let regExp=new RegExp("^[0-9]*$");
    let mobile = mobilenode.value;
    if (mobile == '') {
        tdnode6.textContent = "this field is required";
        mobilenode.style.border = border1;
        return false;
    }
    else if(regExp.test(mobile)==false){
        tdnode6.textContent = "Mobile no only contains digit";
        mobilenode.style.border = border1;
        return false;
    }
    else if(mobile.length!=10){
        tdnode6.textContent = "plese enter valid mobile no";
        mobilenode.style.border = border1;
        return false;
    }
    else {
        mobilenode.style.border = border2;
        return true;
    }
}
function validate7() {
    tdnode7.textContent = "";
    let add = addnode.value;
    if (add == '') {
        tdnode7.textContent = "this field is required";
        addnode.style.border = border1;
        return false;
    }
    else {
        addnode.style.border = border2;
        return true;
    }
}

function validateForm(){
    let st1=validate1();
    let st2=validate2();
    let st3=validate3();
    let st4=validate4();
    let st5=validate5();
    let st6=validate6();
    let st7=validate7();
    return st1 && st2 && st3 && st4 && st5 && st6 && st7;

}
function validateForm1(){
    let st1=validate1();
    let st2=validate2();
    let st6=validate6();
    let st7=validate7();
    return st1 && st2 && st6 && st7;

}
function validateForm2(){
    let st3=validate3();
    let st4=validate4();
    
    return st3 && st4 ;

}
