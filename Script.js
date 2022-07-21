
const mylabel = document.getElementById("mylab")

setInterval(update,1000)

update();
 
function update(){
		
		date = new Date();
		mylab.innerHTML = date; 
		
}

