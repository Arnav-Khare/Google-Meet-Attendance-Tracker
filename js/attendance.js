
console.log('Attendance JS is running..!!!')
const port = chrome.runtime.connect()

document.getElementById('submit_button').addEventListener('click',()=>{
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    fetch("http://localhost:8000/loginDetails", {
    method: "POST",
    body: JSON.stringify({
       username:username,
       password:password}),
         headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin":"http://localhost:8000"
    }
}) .then((response) =>{
    if(response.status === 200){
        console.log('extraction complete')
        return response.json()
    }  
}).then(function(data){
})
})