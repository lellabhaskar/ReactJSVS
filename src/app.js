
//Step 1

// //console.log("Hello welcome to SRC")

//Step 2

// class BookApp extends React.Component{
//     render(){
//         const title =  'My Books'
//         const subTitle = 'Suggest a book to me'
//         const options =['Book1','Book2','Book3','Book4']
//         return (
//             <div>
//                 <Header title = {title} subtitle = {subTitle}/>
//                 <Action />
//                 <Options options = {options} />                
//                 <AddOption />
//             </div>
//         )
//     }
// }

// class Header extends React.Component{
//     render(){
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h1>{this.props.subtitle}</h1>
//             </div>
//         )
//     }
// }

// class Action extends React.Component{
//     handleAction(){
//         alert("Action Component called")
//     }
//     render(){
//         return (
//             <div>
//                 <button onClick = {this.handleAction}>Sugget a Book to Me</button>
//             </div>
//         )
//     }
// }

// class Options extends React.Component{
//     constructor (props){
//         super(props)
//         this.handleRemove = this.handleRemove.bind(this)
//     }
//     handleRemove(){
//         //alert("All Books Removed")
//         console.log(this.props.options)
//     }
//     render(){
//         return (
//             <div>
//                 <button onClick ={this.handleRemove}>Remove All</button>
//                 {/* <Option /> */}
//                 {this.props.options.map((book)=><Option key = {book} optiontext = {book} />) }
//             </div>
//         )
//     }
// }

// class Option extends React.Component{
//     render(){
//         return (
//             <div>
//                 {
//                     this.props.optiontext
//                 }
//             </div>
//         )
//     }
// }

// class AddOption extends React.Component{
//     render(){
//         return (
//             <div>
//                 I will add my option here
//             </div>
//         )
//     }
// }

// var appRoot = document.getElementById("app")
// //ReactDOM.render(<Header></Header>,app)
// //ReactDOM.render(<Header/>,app)
// ReactDOM.render(<BookApp/>,app)

//step 3

// class Counter extends React.Component{  
//     constructor(props){
//         super(props)
//         this.addbutton=this.addbutton.bind(this)
//         this.resetbutton=this.resetbutton.bind(this)
//         this.minusbutton=this.minusbutton.bind(this)
//         this.state = {
//         count: 0
//         }
//     }  
//     addbutton(){
//         //console.log('plus 1 added')
//         this.setState((prev)=>{
//             return {
//                 count: prev.count + 1
//             }
//         })
//     }
//     resetbutton(){
//         this.setState(()=>{
//             return {
//                 count: 0
//             }
//         })
//     }
//     minusbutton(){
//         this.setState((before)=>{
//             return {
//                 count: before.count - 1
//             }
//         })
//     }
//     render(){
//         return (
//             <div>
//                 <h1>Counter:{this.state.count}</h1>
//                 <button onClick ={this.addbutton}>+1</button>
//                 <button onClick ={this.resetbutton}>Reset</button>
//                 <button onClick ={this.minusbutton}>-1</button>                
//             </div>
//         )
//     }
// }

// var appRoot = document.getElementById("app")
// ReactDOM.render(<Counter/>,app)


//step 4 Show and Hide

class Myapp extends React.Component{  
    constructor (props){
        super(props)
        this.showHideDetails = this.showHideDetails.bind(this)
        this.state = {
            show:false
        }
    }
    showHideDetails(){
        this.setState((prev)=>{
                        return {
                            show : !prev.show
                        }
                    })
    }
    
    render(){
        return (
            <div>
                <h1>Toggle:</h1>
                <button onClick ={this.showHideDetails}>{this.state.show?"hide details":"show details"}</button>
                {
                    this.state.show &&(<h1>Good Morning</h1>)
                }              
            </div>
        )
    }
}

var appRoot = document.getElementById("app")
ReactDOM.render(<Myapp/>,app)