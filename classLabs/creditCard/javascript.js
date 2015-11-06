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
        console.log(typeof today)
        console.log(typeof $(this).val())  

        var newDate1 = new Date(today)
        console.log(newDate1)
        console.log(typeof newDate1)
        var newDate2 = new Date($(this).val())
        console.log(newDate2)
        console.log(typeof newDate2)


        if($(this).val() > today){
        // if(newDate2>newDate1){
            $(this).toggleClass('valid')
            $('body').append('<h1>You have a valid credit card!</h1>')
        }
        else
            $(this).toggleClass('invalid')
    })

    








})