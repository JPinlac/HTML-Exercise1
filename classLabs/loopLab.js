function loopS() {
    var vowels = ['a','e','i', 'o', 'u'];
    var sentence = 'HelloAA World'
    var object = {'a':0,'e':0,'i':0, 'o':0, 'u':0};
    var total = 0;


    sentence = sentence.toLowerCase();
    sentence = sentence.split("");

    // for( var i = 0; i < sentence.length; i++) {
        
    //     for (var j = 0; j < vowels.length; j++) {

    //         if (sentence[i]===vowels[j]) {
    //             total++;
    //         }
    //     }

    // }

    for( var i = 0; i < sentence.length; i++) {

        if(object.hasOwnProperty(sentence[i])) {
            total++;
            object[sentence[i]]+=1;;
        }

        // else {
        //     total++;

        //     object[sentence[i]]=1;

        // }

    }
    console.log(object)
    console.log(total)
}
loopS()