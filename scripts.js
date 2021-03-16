Storage = window.localStorage;

$(document).ready(function() {
    


    // Click Events
    var TotalLbl = document.getElementById("total-lbl");

    var AddLbl = document.getElementById("add-lbl");
    var MinusLbl = document.getElementById("minus-lbl");
    
    var AddPercentLbl = document.getElementById("add-percent-lbl");
    var MinusPercentLbl = document.getElementById("minus-percent-lbl");


    // var TotalPercent = 100 * TotalLbl.value


        // add
        $(".add-btn").click(function() {
            TotalLbl.value ++;
            AddLbl.value ++;


            var TotalPercent = 100 / TotalLbl.value
            AddPercentLbl.value =  TotalPercent * AddLbl.value + "%"; 


            

            console.log(TotalPercent.toFixed(2));




            
        });

        // minus
        $(".minus-btn").click(function() {
            TotalLbl.value ++;
            MinusLbl.value ++;

            var TotalPercent = 100 / TotalLbl.value
            MinusPercentLbl.value = TotalPercent * MinusLbl.value + "%"; 


            console.log(TotalPercent.toFixed(2));

        });








}); // End $(document).ready(function(){}


