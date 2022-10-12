class book{
    constructor(name){
        this.name=name
    }
    getBookName(){
        return (this.name)
    }   
}

const myBook = new book(name="Adventure")
console.log(myBook.getBookName())