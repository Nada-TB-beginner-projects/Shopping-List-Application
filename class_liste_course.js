'use strict';

class List{
    // define the name of array in localStorage
    constructor(listName){
        this.listName=listName;   
    }

    
    getList(){
        if(localStorage.getItem(this.listName)== null){
            var arr=[];
            localStorage.setItem(this.listName, JSON.stringify(arr));
            return arr;
        }else{
            var arr= JSON.parse(localStorage.getItem(this.listName));
            return arr;
        }
    }

    fetchList(){
        let arr=this.getList();
        if(arr !== null){
            arr=arr.map(element => {
                return '<li>'+ element +'</li>';
            });
            return arr.join(' ');
        }else{
            return "this list is empty";
        }
        
    }

    sendList(list){
        localStorage.setItem(this.listName, JSON.stringify(list));
    }

    checkItemExistence(item){
        let arr=this.getList();
        if(arr.indexOf(item.toLowerCase())<0){
            return false;
        }else{
            return true;
        }
    }

    addItem(item){
        let arr=this.getList();
        if(this.checkItemExistence(item.toLowerCase())==false){
            arr.push(item.toLowerCase());
            this.sendList(arr);
            return"";
        }else{
            return 'this item already exists';
        }
    }

    deleteItem(item){
        let arr=this.getList();
        if(this.checkItemExistence(item.toLowerCase())==true){
            arr.splice(arr.indexOf(item.toLowerCase()),1);
            this.sendList(arr);
            return"";
        }else{
            return 'this element does not exist';
        }
    }

    deleteList(){
        let arr=[];
        this.sendList(arr);
    }

}




