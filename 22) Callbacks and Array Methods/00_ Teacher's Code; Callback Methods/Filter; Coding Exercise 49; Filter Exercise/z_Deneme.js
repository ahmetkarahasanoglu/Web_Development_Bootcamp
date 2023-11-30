function validUserNames(arr) {
    return arr.filter(function (name) {  // If we write the "return" here like this, instead of to the bottom(line 5), it works the same way.
        return name.length < 10;
    });
    
}