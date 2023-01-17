    const planets = [
        {planetName: "---Select planet---"},
        { planetName: "Sun", gravity: 27.9, image: "./Images/sun.png" },
        { planetName: "Moon", gravity: 0.1655, image: "./Images/moon.png" },
        { planetName: "Mercury", gravity: 0.377, image: "./Images/Mercury.png" },
        { planetName: "Venus", gravity: 0.9032, image: "./Images/Venus.png" },
        { planetName: "Earth", gravity: 1, image: "./Images/Earth.png" },
        { planetName: "Mars", gravity: 0.3895, image: "./Images/Mars.png" },
        { planetName: "Jupiter", gravity: 2.640, image: "./Images/Jupiter.png" },
        { planetName: "Saturn", gravity: 1.139, image: "./Images/Saturn.png" },
        { planetName: "Uranus", gravity: 0.917, image: "./Images/Uranus.png" },
        { planetName: "Neptune", gravity: 1.148, image: "./Images/Neptune.png" },
    ]
planets.map((element)=>{
    let option=document.createElement("option");
    option.classList.add("optioncss")
    option.innerHTML=element.planetName;
    option.value=element.gravity;
    let name=document.getElementById("planetname");
    name.appendChild(option);
    option.setAttribute("imagesrc",element.image);

}

)
let clear_error=document.getElementById("error");
function calculate(){
    let mass= +document.getElementById("massIN").value;
    let select=document.getElementById("planetname");
    let selectindex=select.selectedIndex;
    let myvalue=select.options[selectindex];
    let weight=mass*myvalue.value;
    // let outputdiv=document.getElementById("outputdiv");
    let error='Please enter specific value';
    
    let maindiv=document.getElementById("outputdiv");
    
    if(mass=="" || selectindex==0){
        var h1error=document.getElementById("error");
        h1error.innerText=error;
        // clear_outputdiv.innerHTML=" ";
        maindiv.style.display="none";
        console.log(error);
    h1error.classList.add("errorshow");
    }

    else{
        maindiv.style.display="flex";
    clear_error.innerHTML=" ";
    maindiv.classList.add("outputdiv1");
    var imgsrc= myvalue.getAttribute("imagesrc");
    var img=document.getElementById("planet-img");
    img.src=imgsrc;
    img.classList.add("seeimg");
    let p=document.getElementById("text"); 
    p.innerText=`The weight of the object on ${myvalue.innerHTML} `;
    let h1=document.getElementById("getvalue");
    h1.classList.add("valuecss");
    h1.innerText=weight.toFixed(2)+' N';

    }
}
