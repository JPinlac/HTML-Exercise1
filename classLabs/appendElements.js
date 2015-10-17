for ( var i = 0; i<3; i++) {
    document.body.appendChild(document.createElement('div'));
}

var boxArray=[];
var x = 0;
function myLoop() {
    setTimeout(function () {
        var elem= document.getElementsByTagName('body')[0];
        if(x%2===0)
            elem.innerHTML = elem.innerHTML.replace(/(<div)/igm, '<p').replace(/<\/div>/igm, '</p>');
        else
            elem.innerHTML = elem.innerHTML.replace(/(<p)/igm, '<div').replace(/<\/p>/igm, '</div>');
        console.log(x);

        boxArray.push(document.body.appendChild(document.createElement('div')));
        boxArray[x].setAttribute("style", "background-color: rgb("+(Math.floor(Math.random()*255))+","+(Math.floor(Math.random()*255))+","+(Math.floor(Math.random()*255)+");"));
        if(x%4===0)
            boxArray[x].setAttribute("style", "background-color: black;")
        x++;
        if (x<1000) {
            myLoop();
        }

    },0);
}
myLoop();