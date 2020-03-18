console.log("app.js running");
let raincloud = document.getElementById('raincloud');


makeItRain(1, "low", 1);


// set intensity, speed and angle with "low", "medium" or "high".
function makeItRain(intensity, speed, angle) {

    let setSpeed = "";
    let setIntensity = "";
    let setAngle = "";

    if (speed = "low")    { setSpeed = 500 };
    if (speed = "medium") { setSpeed = 7   };
    if (speed = "high")   { setSpeed = 5   };
    
    console.log(setSpeed);

    setInterval(() => {
        let width = document.getElementById("raincloud").offsetWidth;
        let ran = (Math.floor(Math.random() * width)) + "px";
        
        let raindrop = document.createElement('div');
        raindrop.classList.add('raindrop');
        raindrop.style.left = ran;
        raincloud.appendChild(raindrop);
        raindrop.classList.add('falling');
        setTimeout(() => {
            raincloud.removeChild(raindrop); 
        }, 1000);
    }, setSpeed);
}




// (Math.floor(Math.random() * 101))