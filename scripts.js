Storage = window.localStorage;
const TotalLbl = document.getElementById("total-lbl");
const ScoreLbl = document.getElementById("score-lbl")
const AddLbl = document.getElementById("add-lbl");
const MinusLbl = document.getElementById("minus-lbl");

$(document).ready(function() {
    getLocalStorage();

    // add
    $(".add-btn").click(function() {
        TotalLbl.value ++;
        AddLbl.value ++;
        ScoreLbl.value =  parseFloat((AddLbl.value / TotalLbl.value) * 100).toFixed(2) + "%"; 

        localStorage.setItem("total", TotalLbl.value);
        localStorage.setItem("totalAdd", AddLbl.value);
        localStorage.setItem("score", ScoreLbl.value);
    });

    // minus
    $(".minus-btn").click(function() {
        TotalLbl.value ++;
        MinusLbl.value ++;
        ScoreLbl.value = parseFloat((AddLbl.value / TotalLbl.value) * 100).toFixed(2) + "%"; 

        localStorage.setItem("total", TotalLbl.value);
        localStorage.setItem("totalMinus", MinusLbl.value);
        localStorage.setItem("score", ScoreLbl.value);
    });

    $(".reset-btn").click(function() {
        if (confirm("Clicking 'OK' will reset all numbers. Do you want to proceed?")) {
            localStorage.removeItem("total");
            localStorage.removeItem("totalAdd");
            localStorage.removeItem("totalMinus");
            localStorage.removeItem("score");
            location.reload(true);
        } else {

        }
    });
    
    function getLocalStorage() {

        if (localStorage.getItem("total") === null ) {
            TotalLbl.value = 0;
        } else {
            TotalLbl.value = localStorage.getItem("total");
        }

        if (localStorage.getItem("totalAdd") === null ) {
            AddLbl.value = 0;
        } else {
            AddLbl.value = localStorage.getItem("totalAdd");
        }

        if (localStorage.getItem("totalMinus") === null ) {
            MinusLbl.value = 0;
        } else {
            MinusLbl.value = localStorage.getItem("totalMinus");
        }

        if (localStorage.getItem("score") === null ) {
            ScoreLbl.value = 0;
        } else {
            ScoreLbl.value = localStorage.getItem("score");
        }
    }
});




