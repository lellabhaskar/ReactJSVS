"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var Myapp = function (_React$Component) {
    _inherits(Myapp, _React$Component);

    function Myapp(props) {
        _classCallCheck(this, Myapp);

        var _this = _possibleConstructorReturn(this, (Myapp.__proto__ || Object.getPrototypeOf(Myapp)).call(this, props));

        _this.showHideDetails = _this.showHideDetails.bind(_this);
        _this.state = {
            show: false
        };
        return _this;
    }

    _createClass(Myapp, [{
        key: "showHideDetails",
        value: function showHideDetails() {
            this.setState(function (prev) {
                return {
                    show: !prev.show
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Toggle:"
                ),
                React.createElement(
                    "button",
                    { onClick: this.showHideDetails },
                    this.state.show ? "hide details" : "show details"
                ),
                this.state.show && React.createElement(
                    "h1",
                    null,
                    "Good Morning"
                )
            );
        }
    }]);

    return Myapp;
}(React.Component);

var appRoot = document.getElementById("app");
ReactDOM.render(React.createElement(Myapp, null), app);
