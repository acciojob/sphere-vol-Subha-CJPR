function volume_sphere() {
    //Write your code here
  var radius = document.getElementById("radius").value;
	var volume = (4/3) * Math.PI * Math.pow(radius, 3);
	return volume; 
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere();
