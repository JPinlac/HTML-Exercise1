$(document).ready(function(){
    // $('input').hide();
    // $('input:first-child').show();
    // var input = 1;


    // $('form').delegate('input', 'focus', appendInput)
    // function appendInput(){
    //     input+=1;
    //     $('form').append('<input type="text" name= "Form '+input+'" placeholder= "Form '+input+'"><br>');
    // }


    // $('input').on('focus', function(){
    //     input +=2;
    //     $('input:nth-child('+input+')').show();
    // })
    // $('button').click(toggleDiv)

    // function toggleDiv() {

    //         $('div').toggleClass('one');

    // }
    // var xhr = new XMLHttpRequest();

    // xhr.onload = function() {
    //     if(xhr.status ===200){
    //         console.log(JSON.parse(xhr.responseText));
    //         console.log(JSON.parse(xhr.responseText).data)
    //     }
    // }

    // xhr.open('GET', 'https://www.reddit.com/r/aww.json');
    // xhr.send();

    $.ajax({
        url: 'https://www.reddit.com/r/aww.json',
        method: 'Get',
        success: function(data){
            console.log(data.data.children[22].data.preview.images[0].source.url);
        }
    })

});