

// // changing individual properties with code and using setInterval
var rotationSpeed = 0.05;
var myOtherBox = document.getElementById('myOtherBox');

function spinx(){
myOtherBox.object3D.rotation.x += rotationSpeed;
console.log(myOtherBox.object3D.rotation.x);
}

function spiny(){
myOtherBox.object3D.rotation.y += rotationSpeed;
console.log(myOtherBox.object3D.rotation.x);
}

function spinz(){
myOtherBox.object3D.rotation.z += rotationSpeed;
console.log(myOtherBox.object3D.rotation.x);
}

setInterval(spinx, 16); //equivalent to 60 fps
setInterval(spiny, 16); //equivalent to 60 fps
setInterval(spinz, 16); //equivalent to 60 fps
