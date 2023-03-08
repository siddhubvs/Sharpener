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
var header=document.querySelector("#main-header");
header.style.borderBottom='violet';

var input=document.querySelector('input');
input.value="Enter the name";

var item2=document.querySelector('li:nth-child(2)')
item2.style.color='green';
var item3=document.querySelector('li:nth-child(3)')
item3.style.visibility='hidden';

var itemlist=document.querySelector('#items');
console.log(itemlist.parentNode);
itemlist.parentNode.style.backgroundColor='#f4f4f4';

itemlist.children[1].style.backgroundColor='orange';

itemlist.firstElementChild.textContent='Item 1 Hello'
itemlist.lastElementChild.textContent='Item 5 Hello'

//console.log(itemlist.nextElementSibling);
itemlist.previousElementSibling.style.color='blue';

var newDiv=document.createElement('div');
newDiv.className='Hello';
newDiv.id='Hello1';
//newDiv.setAttribute=('title','newDiv');

var text=document.createTextNode('HEllo');
newDiv.appendChild(text);

var container=document.querySelector('header .container');
var header=document.querySelector('header h1');
var insert=document.querySelector('div .card card-body');
var insertbefore=document.querySelector('div .list-group-item');
container.insertBefore(newDiv,header);
insert.insertBefore(newDiv,insertbefore);
newDiv.style.fontSize='40px';
console.log(newDiv);