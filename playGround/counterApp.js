let count=0

const addOne=()=>{
    count = count + 1
    renderCounterApp()
}

const start=()=>{
    count = 0
    renderCounterApp()
}

const minusOne=()=>{
    count = count - 1
    renderCounterApp()
}

function renderCounterApp(){
    var buttons=(
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={addOne}>+1</button>            
            <button onClick={start}>Reset</button>
            <button onClick={minusOne}>-1</button>
        </div>
    )
    ReactDOM.render(buttons,appRoot)
}


var appRoot = document.getElementById("app")
renderCounterApp()