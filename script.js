function volume_sphere() {
    //Write your code here
  var rad = document.getElementById("radius").value;
	var vol = (4/3) * Math.PI * Math.pow(rad, 3);
	document.getElementById("volume").value = vol; 
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
