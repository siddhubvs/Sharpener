//console.dir(document);
console.log(document.forms[0]);
var headerTitle=document.getElementById('header-title');
//headerTitle.textContent='Hello';
//headerTitle.innerHTML='<h1>GoodBye</h1>'
var header=document.getElementById('main-header');
header.style.borderTop='6px solid blue';
header.style.borderBottom='6px solid blue';
var items=document.getElementsByClassName('list-group-item');
items[0].style.color='green';
items[0].style.fontWeight='bold';