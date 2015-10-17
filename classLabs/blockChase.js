window.onload = function() {

var box = document.body.appendChild(document.createElement('div'));
box.addEventListener("click", gotClicked);

var pos = ['tl','tr','br','bl'];
box.className = pos[0];

function gotClicked() {
    switch(box.className) {
        case 'tl':
            box.className = pos[1]
            box.setAttribute("style", "background-color:black;");
            break;
        case 'tr':
            box.className = pos[2];
            box.style.backgroundColor = 'red';
            break;
        case 'br':
            box.className = pos[3];
            box.style.backgroundColor = 'yellow';
            break;
        case 'bl':
            box.className = pos[0];
            box.style.backgroundColor = 'blue';
            break;
    }
}


}