addEventListener('DOMContentLoaded', function() {
    
    var calculate = document.getElementById("calc");
    var tipAmount = document.getElementById('a');
    var amountOfPeople = document.getElementById('p');
    calculate.addEventListener('click', tip);



    function tip(){

        if(tipAmount.value>0 && amountOfPeople.value >=2){
            var amountToShare = tipAmount.value/amountOfPeople.value

            alert(amountToShare + "€" + ' each')
        }
        else{
            alert('Error')
        }
    
   
    
    }


});