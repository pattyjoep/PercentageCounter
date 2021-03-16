Storage = window.localStorage;

$(document).ready(function() {
    










    // Click Events
        var TotalLbl = document.getElementById("total-lbl");

        var AddLbl = document.getElementById("add-lbl");
        var MinusLbl = document.getElementById("minus-lbl");
        
        var AddPercentLbl = document.getElementById("add-percent-lbl");
        var MinusPercentLbl = document.getElementById("minus-percent-lbl");

        
        
        
        // add
        $(".add-btn").click(function() {
            TotalLbl.value ++;
            AddLbl.value ++;



            AddPercentLbl.value =  (TotalLbl.value / AddLbl.value) + "%"; 




        });

        // minus
        $(".minus-btn").click(function() {
            TotalLbl.value ++;
            MinusLbl.value ++;


            MinusPercentLbl.value = (TotalLbl.value / MinusLbl.value) + "%"; 




        });








});


