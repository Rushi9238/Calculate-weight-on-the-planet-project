


//
const planets = [
    {planetName: "---Select planet---"},
    { planetName: "Sun", gravity: 27.9, image: "sun.png" },
    { planetName: "Moon", gravity: 0.1655, image: "moon.png" },
    { planetName: "Mercury", gravity: 0.377, image: "Mercury.png" },
    { planetName: "Venus", gravity: 0.9032, image: "Venus.png" },
    { planetName: "Earth", gravity: 1, image: "Earth.png" },
    { planetName: "Mars", gravity: 0.3895, image: "Mars.png" },
    { planetName: "Jupiter", gravity: 2.640, image: "Jupiter.png" },
    { planetName: "Saturn", gravity: 1.139, image: "Saturn.png" },
    { planetName: "Uranus", gravity: 0.917, image: "Uranus.png" },
    { planetName: "Neptune", gravity: 1.148, image: "Neptune.png" },
]
// console.log(planets);
planets.map((element)=>{
let option=document.createElement("option");
option.classList.add("optioncss")
option.innerHTML=element.planetName;
option.value=element.gravity;

// console.log(option,'option');
let name=document.getElementById("planetname");
name.appendChild(option);
// console.log(option);
option.setAttribute("imagesrc",element.image);
// console.log(option);

}

)
function calculate(){
// ****************************Create div outer display output*******************************************
// let maindiv=document.getElementById("outputdiv");
// maindiv.classList.add("outputdiv1")

// ****************************add data on select tag and opetion tag*******************************************
let mass= +document.getElementById("massIN").value;
// console.log(mass,'abc');
let select=document.getElementById("planetname");
let selectindex=select.selectedIndex;
// console.log(selectindex);
// console.log(select.options[selectindex]);
let myvalue=select.options[selectindex];
//console.log(myvalue.value);

// ****************************Calculate weight*******************************************
let weight=mass*myvalue.value;
// console.log(weight);

// ****************************img show on diplay*******************************************
// var imgsrc= myvalue.getAttribute("imagesrc");
// var img=document.getElementById("planet-img");
// img.src=imgsrc;
// img.classList.add("seeimg");

// ****************************text show on display*******************************************
// let p=document.getElementById("text"); 
// console.log(myvalue.innerHTML);
// let outtext=myvalue.innerHTML;
// let ptext=document.createTextNode(`The weight of the object on ${myvalue.innerHTML} `);
// p.appendChild(ptext);

// ****************************value show on display*******************************************
// h1.classList.add("valuecss");
// h1.innerText=weight.toFixed(2)+' N';
// console.log(h1.innerText);

// ****************************error case*******************************************
let clear_error=document.getElementById("error");
let clear_outputdiv=document.getElementById("outputdiv");
let error='Please enter specific value';
if(mass=="" || selectindex==0){
//  console.log('hello');
// let h1error=document.createElement("h1");
// let h1error_text=document.createTextNode(error);
// h1error.appendChild(h1error_text);
// document.body.appendChild(h1error);
clear_outputdiv.innerHTML=" ";
var h1error=document.getElementById("error");
h1error.innerText=error;
h1error.classList.add("errorshow");
// h1.innerText=error;
}
else{
    // h1error.classList.remove(errorshow);
//  console.log('bye');
clear_error.innerHTML=" ";
 let maindiv=document.getElementById("outputdiv");
maindiv.classList.add("outputdiv1");
//****************************************************************** */
var imgsrc= myvalue.getAttribute("imagesrc");
var img=document.getElementById("planet-img");
img.src=imgsrc;
img.classList.add("seeimg");
//****************************************************************** */

let p=document.getElementById("text"); 
// console.log(myvalue.innerHTML);
p.innerText=`The weight of the object on ${myvalue.innerHTML} `;
// let outtext=myvalue.innerHTML;
// let ptext=document.createTextNode();
// p.appendChild(ptext);
//****************************************************************** */
let h1=document.getElementById("getvalue");
h1.classList.add("valuecss");
h1.innerText=weight.toFixed(2)+' N';
//****************************************************************** */

}
}
