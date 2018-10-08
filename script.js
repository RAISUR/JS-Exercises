console.log("External")

function sumArray(arr){
    var sum = 0;
    arr.forEach(function(value,index){
        sum = sum + value;
        
    });
    return sum;
    
}
console.log(sumArray([2, 4, 5, 6, 7]));
    function checkEmail(emilString){
        var emailFormat=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        var match=emailFormat.test(emailString);
        return match;
    }
    console.log(checkEmail("jhon@smith.com"));
    console.log(checkEmail("jhon@smith.com"));
    