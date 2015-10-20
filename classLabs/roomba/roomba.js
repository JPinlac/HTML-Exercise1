window.onload = function() {
var width = 10;//prompt("What's the width of the room.")


function pickAlgo() {
	var algo = prompt("What Roomba would you like? (simple, better, best)")
	switch(algo) {
		case 'simple':
			cleanSquare(width*width);
			break;
		case 'better':
			cleaningAlgo(width*width - findObstacles());
			break;
		case 'best':
			spiralAlgo(width*width - findObstacles(),robotV2);
			break;
		default:
			console.log('oops, please enter simple, better, or best.')
			pickAlgo();
			break;
	}
}

//create room grid
createRoom();
function createRoom() {
	//creates a grid of div's to width size, an additional border is necassary to 
	//avoid type errors when the robot scans.
	for (var x = -1; x<=width; x++) {
    var row = document.body.appendChild(document.createElement('a'));
    row.className = "row" + x;
    for( var i = -1; i<=width; i++){
      var col = document.getElementsByClassName('row'+x)[0].appendChild(document.createElement('div'));
 	    col.id = "row" + x + "col" + i;
 	    if(x===-1||x===width||i===-1||i===width){
 	    	col.className = 'border';
 	    }
      else
      	col.className = 'unclean';
 	  }
	}
	document.getElementById('row0col9').innerHTML = 'I';
	document.getElementById('row4col0').innerHTML = 'c';
	document.getElementById('row5col0').innerHTML = 'o';
	document.getElementById('row6col0').innerHTML = 'u';
	document.getElementById('row7col0').innerHTML = 'c';
	document.getElementById('row8col0').innerHTML = 'h';
	document.getElementById('row3col5').innerHTML = '<3';
	document.getElementById('row9col3').innerHTML = '~~';
}


//create robot
var posRow = 0;
var posCol = 0;
var currentLocation = document.getElementById('row'+posRow+'col'+posCol);
clean();

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
	},70)
}


//create robot version 2 now with ai!
var robotV2 = [0,0,'east'];
var currentLocation = document.getElementById('row'+robotV2[0]+'col'+robotV2[1]);
movePos(robotV2[0],robotV2[1]);

function movePos(direction) {
	switch(direction){
		case 'east':
			currentLocation.innerHTML = '';
			robotV2[1]++;
			setPos(robotV2[0],robotV2[1]);
			clean();
			break;
		case 'west':
			currentLocation.innerHTML = '';
			robotV2[1]--;
			setPos(robotV2[0],robotV2[1]);
			clean();
			break;
		case 'north':
			currentLocation.innerHTML = '';
			robotV2[0]--;
			setPos(robotV2[0],robotV2[1]);
			clean();
			break;
		case 'south':
			currentLocation.innerHTML = '';
			robotV2[0]++;
			setPos(robotV2[0],robotV2[1]);
			clean();
			break;
	}
}


function findObstacles() {
	var count = 0;
	var grid = document.body.getElementsByTagName('div')
	for(var i = 0; i <grid.length; i++){
		if(grid[i].innerHTML !=='' && grid[i].innerHTML !=='O'){
			grid[i].className = 'obstacle';
			count++;
		}
	}
	return count;
}

function cleaningAlgo(a){
	console.log(a)
	setTimeout(function(){
		if (document.getElementById('row'+robotV2[0]+'col'+(robotV2[1]+1)).className==='unclean'){ 
			movePos('east');
		}
		else if (document.getElementById('row'+(robotV2[0]-1)+'col'+robotV2[1]).className==='unclean') {
			movePos('north'); 
		}
		else if (document.getElementById('row'+(robotV2[0]+1)+'col'+robotV2[1]).className==='unclean') {
			movePos('south'); 
		}
		else if (document.getElementById('row'+robotV2[0]+'col'+(robotV2[1]-1)).className==='unclean') {
			movePos('west'); 
		}

		a--;
		if (a>1)
			cleaningAlgo(a);

	},70)
}

function spiralAlgo(a,robot){

	console.log(a)
	setTimeout(function(){
		switch (robotV2[2]) {
			case 'north':
				if (document.getElementById('row'+robotV2[0]+'col'+(robotV2[1]-1)).className==='unclean') {
					movePos('west');
					robotV2[2]='west';
				}
				else if (document.getElementById('row'+(robotV2[0]-1)+'col'+robotV2[1]).className==='unclean') {
					movePos('north');
					robotV2[2]='north'
				}
				else if (document.getElementById('row'+robotV2[0]+'col'+(robotV2[1]+1)).className==='unclean') { 
					movePos('east');
					robotV2[2]='east';
				}
				else {
					if (a===2) break;
					movePos('south');
					robotV2[2]='north';
					a++;
				}
				break;
			case 'east':
				if (document.getElementById('row'+(robotV2[0]-1)+'col'+robotV2[1]).className==='unclean') {
					movePos('north');
					robotV2[2]='north';
				}
				else if (document.getElementById('row'+robotV2[0]+'col'+(robotV2[1]+1)).className==='unclean') { 
					movePos('east');
					robotV2[2]='east';
				}
				else if (document.getElementById('row'+(robotV2[0]+1)+'col'+robotV2[1]).className==='unclean') {
					movePos('south');
					robotV2[2]='south';
				}
				else {
					if (a===2) break;
					movePos('west');
					robotV2[2]='east';
					a++;
				}
				break;
			case 'south':
				if (document.getElementById('row'+robotV2[0]+'col'+(robotV2[1]+1)).className==='unclean') { 
					movePos('east');
					robotV2[2]='east'
				}
				else if (document.getElementById('row'+(robotV2[0]+1)+'col'+robotV2[1]).className==='unclean') {
					movePos('south');
					robotV2[2]='south';
				}
				else if (document.getElementById('row'+robotV2[0]+'col'+(robotV2[1]-1)).className==='unclean') {
					movePos('west');
					robotV2[2]='west';
				}
				else {
					if (a===2) break;
					movePos('north');
					robotV2[2]='south';
					a++;
				}
				break;
			case 'west':
				if (document.getElementById('row'+(robotV2[0]+1)+'col'+robotV2[1]).className==='unclean') {
					movePos('south');
					robotV2[2]='south';
				}
				else if (document.getElementById('row'+robotV2[0]+'col'+(robotV2[1]-1)).className==='unclean') {
					movePos('west'); 
					robotV2[2]='west';
				}
				else if (document.getElementById('row'+(robotV2[0]-1)+'col'+robotV2[1]).className==='unclean') {
					movePos('north'); 
					robotV2[2]='north';
				}
				else{
					if (a===2) break;
					movePos('east'); 
					robotV2[2]='west';
					a++;
				}
				break;
		}


		a--;
		if (a>1)
			spiralAlgo(a);

	},70)
}


findObstacles();
pickAlgo();

}