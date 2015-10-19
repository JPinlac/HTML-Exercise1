window.onload = function() {

var width = 10;//prompt("What's the width of the room.")

//create room grid
createRoom();
function createRoom() {
	for (var x = 0; x<width; x++) {
    var row = document.body.appendChild(document.createElement('a'));
    row.className = "row" + x;
    for( var i = 0; i<width; i++){
      var col = document.getElementsByClassName('row'+x)[0].appendChild(document.createElement('div'));
 	    col.id = "row" + x + "col" + i;
      col.className = 'unclean';
 	  }
	}
	document.getElementById('row0col9').innerHTML = 'I';
	document.getElementById('row4col0').innerHTML = 'c';
	document.getElementById('row5col0').innerHTML = 'o';
	document.getElementById('row6col0').innerHTML = 'u';
	document.getElementById('row7col0').innerHTML = 'c';
	document.getElementById('row8col0').innerHTML = 'h';
}


//create robot
// var posRow = 0;
// var posCol = 0;
// var currentLocation = document.getElementById('row'+posRow+'col'+posCol);
// clean();

function setPos(row,col){
	currentLocation = document.getElementById('row'+row+'col'+col);
}

function clean() {
	currentLocation.innerHTML = 'O';
	currentLocation.className = 'clean';

}
function move(direction) {
	switch(direction){
		case 'right':
			currentLocation.innerHTML = '';
			posCol++;
			setPos(posRow,posCol);
			clean();
			break;
		case 'left':
			currentLocation.innerHTML = '';
			posCol--;
			setPos(posRow,posCol);
			clean();
			break;
		case 'up':
			currentLocation.innerHTML = '';
			posRow--;
			setPos(posRow,posCol);
			clean();
			break;
		case 'down':
			currentLocation.innerHTML = '';
			posRow++;
			setPos(posRow,posCol);
			clean();
			break;
	}
}

var rowCount = 0;
function cleanSquare(a) {
	setTimeout(function(){
		console.log(a)
		if(rowCount%2===0) {
			if((a-1)%10===0){
				move('down');
				rowCount++;
			}
			else
				move('right');
		}
		else {
			if((a-1)%10===0){
				move('down');
				rowCount++;
			}
			else
				move('left');
		}

		a--;
		if (a>1) 
			cleanSquare(a);
	},100)
}


//create robot version 2 now with ai!
var robotV2 = [0,0];
var currentLocation = document.getElementById('row'+robotV2[0]+'col'+robotV2[1]);
movePos(robotV2[0],robotV2[1]);

function movePos(row,col) {
	currentLocation.innerHTML ='';
	setPos(row,col);
	robotV2 = [row,col];
	clean();
}


function findObstacles() {
	var count = 0;
	var grid = document.body.getElementsByTagName('div')
	for(var i = 0; i <grid.length; i++){
		if(grid[i].innerHTML !==''){
			grid[i].className = 'obstacle';
			count++;
		}
	}
	return count;
}

function cleaningAlgo(a){
	setTimeout(function(){
		// console.log(document.getElementById('row'+robotV2[0]+'col'+robotV2[1]++).className)
		if (document.getElementById('row'+robotV2[0]+'col'+(robotV2[1]+1)).className==='unclean'){
			movePos(robotV2[0],robotV2[1]);
			console.log(robotV2)
		}




	},100)
}
cleaningAlgo(width*width - findObstacles);
// cleanSquare(width*width);


}
