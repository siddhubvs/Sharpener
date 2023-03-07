//console.dir(document);
console.log(document.forms[0]);
var headerTitle=document.getElementById('header-title');
//headerTitle.textContent='Hello';
//headerTitle.innerHTML='<h1>GoodBye</h1>'
var header=document.getElementById('main-header');
header.style.borderTop='6px solid blue';
header.style.borderBottom='6px solid blue';
var items=document.getElementsByClassName('list-group-item');
items[2].style.color='green';
for(var i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';
}