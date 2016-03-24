function (){
    'use strict';

    // "print"-ing example. My First go-round
    function printWhiteSpace(numberOfSpaces) {
        var space = ' ';
        while (space.length < numberOfSpaces) {
            space += ' ';// more space -> ' '
        }
        return space;
    }
    function printStars(numberOfStars) {
        var stars = ' * ';
        //set to 3-times to compensate for 3 spaces per "star".
        // adjust if changed. Or, come up with better way :)
        var spacesToFill = numberOfStars * 3;
        while (stars.length < spacesToFill) {
            stars += ' * ';
        }
        return stars;
    }
    function printTriangle(length) {
        for (var i = 0; i < length; i++) {
            console.log(
                printWhiteSpace(length - i) +
                printStars(i+1) +
                printWhiteSpace(length - i)
            );
        }
    }
    console.log('printTriangle(10)');
    printTriangle(10);



    // Didnt like prefix "print" in last batch of functions, and wanted to allow string as parameter.
    // So, I changed prefix and added the {string} param.
    // Most of logic is the same so not much improvement there.
    function addWhiteSpace(numberOfSpaces, aString) {
        var spaceToAdd = printWhiteSpace(numberOfSpaces);
        var aString = aString || '';
        return aString += spaceToAdd;
    }
    function addStars(numberOfStars, aString){
        var starsToAdd = printStars(numberOfStars);
        var aString = aString || '';
        return aString += starsToAdd;
    }
    function starTriangle(length) {
        var row = 1;
        var rowString = '';
        //for (var i = 0; i < length; i++) {
        //
        //}
        while (row < length) {
            console.log(
                addWhiteSpace(length - row, rowString) +
                addStars(row) +
                addWhiteSpace(length - row, rowString)
            );
            row += 1;
        }

    }
    console.log('starTriangle(10)');
    starTriangle(10);



    // fun with utility libs... especially Lodash and hopefully RamdaJS
    // function padWhiteSpace(numberOfSpaces, aString) {
    //     //https://lodash.com/docs#pad
    //     //     return underscore.pad(string, numberOfSpaces);
    // }



}()