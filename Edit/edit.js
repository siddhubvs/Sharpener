var form=document.getElementById('addForm');
var itemlist=document.getElementById('items');
var filter=document.getElementById('filter');
//Add Item
form.addEventListener('submit',addItem);

//Delete Item
itemlist.addEventListener('click',removeItem);

//Filter Items
filter.addEventListener('keyup',filterItems);

//Add Item
function addItem(e){
    e.preventDefault();
    var newItem=document.getElementById('item').value;
    var itemDescription=document.getElementById('itemDescription').value;
    //Create a li element

    var li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(itemDescription));
    
    //Create a del button
    var delBtn=document.createElement('button');
    delBtn.className='btn btn-danger btn-sm float-right delete';
    delBtn.appendChild(document.createTextNode('X'));

    //Create a Edit Button
    var editBtn=document.createElement('button');
    editBtn.className='btn btn-danger btn-sm float-right';
    editBtn.appendChild(document.createTextNode('Edit'));

    li.appendChild(delBtn);
    
    li.appendChild(editBtn);
    itemlist.appendChild(li);
}

//Remove Item

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Do you want to delete')){
            var li=e.target.parentElement;
            itemlist.removeChild(li);
        }
    }
}

//Filter Items

function filterItems(e){
    var text=e.target.value.toLowerCase();
    var items=itemlist.getElementsByTagName('li');

    Array.from(items).forEach(item => {
        var itemName=item.firstChild.textContent;
        var description=item.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1 || description.toLowerCase().indexOf(text)!=-1){
        item.style.display='block';
       
        }
        else
        item.style.display='none';
    });
}