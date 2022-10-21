var likeMeCounter=0;
function funktion1(){
    likeMeCounter = likeMeCounter + 1;
    document.getElementById('reply').innerHTML ='This is ' + likeMeCounter + ' like today';
}
  

document.getElementById("burger-menu").addEventListener("click",(event) => {
  
    if( document.getElementById("menu").style.display==='none'){
        document.getElementById("menu").style.display="flex"
    }

    else{
    document.getElementById("menu").style.display="none"
    }

})



document.getElementById("down").addEventListener("click", (event) => {
    window.scrollBy({ top: window.innerHeight ,left:0, behavior: "smooth"});
})


document.getElementById("up").addEventListener("click", (event) => {
    window.scrollBy({ top: -window.innerHeight ,left:0, behavior: "smooth"});
})


