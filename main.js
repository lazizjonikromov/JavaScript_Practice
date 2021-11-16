// teg nomi bilan
// id bilan
// class bilan

// document.getElementById("text").innerHTML="Salom Js";

// let a = document.getElementsByClassName("matn");

// document.getElementById('text').innerHTML = 'Hello World'+a[0].innerHTML;

// let a = document.querySelector("h1");
// alert(a.innerHTML);

// document.getElementById('text').innerHTML = "Hello";

// document.getElementById('img').src="2.jpg";

// document.getElementById('btn').style.backgroundColor = "blue";

function hisob(){
    let son1 = document.getElementById("num1").value;
    let son2 = document.getElementById("num2").value;
    
    let amal = document.getElementById("amal").value;

    son1*=1;
    son2*=1;

    let sum = 0;
    if (amal == "+") {
        sum = son1+son2;
    }else if(amal == "-"){
        sum = son1-son2;
    }else if(amal == "*"){
        sum = son1*son2;
    }else if(amal == "/"){
        if(son2==0){
            sum = "0 ga bo`lib bo`lmaydi";
        }else{
            sum = son1/son2;
        }
    }
    
    else{
        sum = "Aniqlanmadi";
    }

    document.getElementById("result").innerHTML = sum;

}

function komp1(){
    let name = document.getElementById("komp");
    if (name.checked) {
        document.getElementById("img").src = "3.jpg";
    } else {
        document.getElementById("img").src = " ";
    }  
}
function bino1(){
    let name = document.getElementById("bino");
    if (name.checked) {
        document.getElementById("img").src = "2.jpg";
    } else {
        document.getElementById("img").src = " ";
    }
}