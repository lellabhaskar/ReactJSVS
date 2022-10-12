var app = {
    title: 'myBookList',
    subTitle: "chapter1",
    options:[]  
}

const addBook=(e)=>{
    e.preventDefault()
    //console.log("submitForm")
    //const book = e.target.elements.book.value
    const book = e.target.elements.option.value
    app.options.push(book)
    console.log(book)
    renderBooks()
}


const removeAll=(e)=>{
    //console.log("remove all function called")
    app.options=[]
    renderBooks()
}
const pickaBook=(e)=>{
    console.log("Inside pickaBook")
    //const randnum=Math.random()
    //const randnum=Math.random() * app.options.length
    const randnum = Math.floor(Math.random() * app.options.length)
    const book = app.options[randnum]
    //console.log(randnum)
    alert(book)
}

let show = false
const showDetails=()=>{
    show =!show
    renderBooks()
}

const renderBooks=()=>{
    var template=(
            <div>
                <h1>{app.title}</h1>
                <h2>{app.subTitle}</h2>
                <p>{app.options.length>0?"these are my Options":"No options"}</p>
                <p>{app.options.length}</p>
                <button onClick={removeAll}>Remove All</button>
                <button onClick={pickaBook}>Pick a Book</button>

                <button onClick={showDetails}>{show?"show details":"hide details"}</button>
                { !show && (<p>Good Morning</p>)}
                <ol>
                    {
                        app.options.map((book)=><li key={book}>{book}</li>)
                    }
                </ol>
                <form onSubmit={addBook}>
                    {/* <input type='text' name='book'/> */}
                    <input type='text' name='option'/>
                    <button>Add</button>
                </form>
            </div>
    )
    ReactDOM.render(template,appRoot)
}


var appRoot = document.getElementById("app")
//ReactDOM.render(template,appRoot)
renderBooks()