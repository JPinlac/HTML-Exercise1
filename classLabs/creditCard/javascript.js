$(document).ready(function(){


    $('input[name*="number"').on('blur', function(){

        if($(this).val().length === 4){
            $(this).toggleClass('valid')
            $('input[name*="name"').focus()
        }
        else
            $(this).toggleClass('invalid')
    })

    $('input[name*="name"').on('blur', function(){

        if($(this).val()){
            $(this).toggleClass('valid')
            $('input[name*="cvv"').focus()
        }
        else
            $(this).toggleClass('invalid')
        
    })

    $('input[name*="cvv"').on('blur', function(){

        if($(this).val().length === 3){
            $(this).toggleClass('valid')
            $('input[name*="date"').focus()
        }
        else
            $(this).toggleClass('invalid')
        
    })

    $('input[name*="date"').on('blur', function(){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();

        if(dd<10)
            dd='0'+dd

        if(mm<10) 
        mm='0'+mm

        today = yyyy+'-'+mm+'-'+dd;

        console.log(today)
        console.log($(this).val())
        if($(this).val() > today)
            $(this).toggleClass('valid')
        else
            $(this).toggleClass('invalid')
    })

    








})