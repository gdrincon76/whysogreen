
function typeWriting() {
    const element = document.getElementById("typewriting");
    let text = "Site Under construction!";
    let speed = Math.random() * 150 + 100;
    let index = 0;
    
    let reset = setInterval(function () { 
        if (index <= text.length) { 
            element.innerHTML = text.substring(0, index++) + '<span id="blinker">|</span>';
            
        } else {
            clearInterval(reset);
        }
    }, speed);



}


window.onload = typeWriting;