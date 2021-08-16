$(document).ready(function(e) {
    const user = req.params.id;
    
    let count = document.getElementByClassName("userPost").length;

    document.getElementByClassName("number1").innerHTML = count;

    console.log(count);

});