'use strict';

function getData(node){
    let list= new List('mylist');
    node.innerHTML=list.fetchList();
}

window.onload=function(){getData(document.getElementById('list'))};

document.getElementById('add').addEventListener('click',function(e){
    e.preventDefault();
    let list= new List('mylist');
    document.getElementById('response').textContent=list.addItem(document.getElementById('product').value);
    document.getElementById('product').value="";
    getData(document.getElementById('list'));
});

document.getElementById('delete').addEventListener('click',function(e){
    e.preventDefault();
    let list= new List('mylist');
    document.getElementById('response').textContent=list.deleteItem(document.getElementById('deleteItem').value);
    document.getElementById('deleteItem').value="";
    getData(document.getElementById('list'));
});

document.getElementById('deleteList').addEventListener('click', function(e){
    e.preventDefault();
    let list=new List('mylist');
    list.deleteList();
    getData(document.getElementById('list'));
})