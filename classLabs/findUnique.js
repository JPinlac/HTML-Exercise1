function findUnique(array) {

    var object = {};

    for (var i = 0; i < array.length; i++) {
        
        if(object.hasOwnProperty(array[i])) {

            object[array[i]]+=1;;
        }

        else {
            object[array[i]]=1;

        }

        // if(object.object[array[i]] !== undefined) {

        //     object[array[i]]+=1;;
        // }
        
        // else {
        //     object[array[i]]=1;
        // }


        // console.log(array[i])
        // console.log(object[array[i]])
        // if (array[i] === object[array[i]]) {
        //     count++;
        // }

    }
    console.log(object);

}

findUnique(['one', 'one', 'two', 'three'])