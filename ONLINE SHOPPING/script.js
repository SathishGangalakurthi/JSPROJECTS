let MyBtn = document.querySelector(".priceFilterBtn");
let dataValue = document.querySelectorAll(".box");

dataValue.forEach(function(item){
    //console.log(item);
    MyBtn.addEventListener('click' , function(){
        let x = document.getElementById("min").value;
        let y = document.getElementById("max").value;

        let xMin = parseInt(x);
        let yMax = parseInt(y);

        let DataItems = item.getAttribute('data-value');

        if(DataItems >= xMin && DataItems <= yMax ){
            item.style.display="block";
        }
        else{
            item.style.display="none";
        }
    })
})
