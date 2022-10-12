const axios = require('axios')
console.log("Hello Welcome to axios module ")

//step 1: get
// axios.get('https://bhaskar-movieapp.herokuapp.com/movies').then((response)=>{
//     console.log(response.data)
// })

//Two types of asyncronous methods currently using promise
//promise
//async

//step 2: post
// axios.post('https://bhaskar-movieapp.herokuapp.com/movies',{id: 6, title: 'Bahubali', year: 2020, genre: 'Traditonal'}).then((response)=>{
//     console.log(response.status)
// })

//step 3: put
// axios.put('https://bhaskar-movieapp.herokuapp.com/movies/4',{title: 'Bahubali3', year: 2024, genre: 'Traditonal'}).then((response)=>{
//     console.log(response.status)
// })

//step 4: delete
// axios.delete('https://bhaskar-movieapp.herokuapp.com/movies/5').then((response)=>{
//     console.log(response.status)
// })
//or step 4: delete

// //step 4: delete
// const deletepost={
//     title: 'Bahubali3', year: 2024, genre: 'Traditonal'
// }
// const sendPutRequest =async()=>{
// try{
//     //const response = await axios.delete('https://bhaskar-movieapp.herokuapp.com/movies/6',deletepost).then((response)=>{
//     const response = await axios.delete('https://bhaskar-movieapp.herokuapp.com/movies/6')
//     console.log(response.status)
// }catch(err){
//     console.error(err)
// }
// }


// sendPutRequest()
