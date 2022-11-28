const speedLimit = 70; // The set speed limit for vehicles

let demerit;

// Program that awards demerit points to over-speeding drivers
function speedDetector() {
  let speedOfCar = document.getElementById("speedOfCar").value
demerit = Math.floor((speedOfCar - speedLimit) / 5) //assing variable to points issued to a driver

  if (speedOfCar <= speedLimit) {
    text= "Ok";
  } //Returns Ok if driver is driving below or within the speed limit
  else if (speedOfCar > speedLimit && demerit<=12) {
    
  text =`Points` + ":" + `${demerit}`;
  } // Driver gets a demerit point for every 5km/hr above the speed limit
  else if (demerit > 12) {
    text = "License suspended !";
  } // Driver gets his/her license suspended if he/she receives more than 12 demerit points

document.getElementById("speedCheck").innerHTML = text; //prints out the value on the web page
}