const box = document.getElementById('box');
const boxContainer = document.getElementById('box-container')
const elements = document.querySelectorAll('.box');
console.log(elements);
appendNCopies(6400, box,boxContainer);

//add event listener for mouseover for id of box.
(document.querySelectorAll('.box')).forEach((item) => {
    item.addEventListener('mouseover', ()=> {
        item.setAttribute('style', 'background: black;')
        item.style.borderColor = "black"
    })
});

createVar();

//function to create a variable for each box with a new id for each
function createVar() {
    for( let i =0; i < 255; i++) {
    let variable =  document.getElementById('box'+i);
    variable = box + i ;
}}


//create loop that will add event listeners to each of the boxes

function appendNCopies(n, original, appendTo){
    for(let i = 0; i < n; i++){
        var clone = original.cloneNode(true);
        clone.setAttribute('class','box');
        clone.setAttribute('id', 'box' + i)
        appendTo.appendChild(clone);   
    }
}

