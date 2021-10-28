const express = require('express');  
const {spawn} = require('child_process')
var cors = require('cors')
const app = express();  

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));  
app.use(cors())

async function getList(username,password){
  const values = new Promise((resolve)=>{
    const scrapScript = spawn('python3',['./scrap.py',username,password])
    let subjects= []
    scrapScript.stdout.on('data',(data)=>{
      let table = data.toString()
      let flag = 0;
      let text = "";
      for(let i=0;i<table.length;i++){
        if(table[i] == "'"){
            flag = !flag
        }
        if(flag){
          if(table[i] === ","){
            continue;
          }
          text +=table[i];
        }else{
          subjects.push(text)
          text = "";
          flag =1;
        }
      }
      let newSubject = []
      subjects.forEach((e)=>{
        if(e.length>2){
          newSubject.push(e)
        }
      })
      subjects = newSubject
    })
    scrapScript.stderr.on('data',(data)=>{
    })
    scrapScript.on('close',(data)=>{
        if(data == 0){
        resolve(subjects)
      }
    })
  },(reject)=>{
    console.log('Error')
    reject()
  })
  return await values
}

app.post('/loginDetails', async function (req, res) {  
   if(req.body.username != '' && req.body.username != ''){  
    res.app.set('username',req.body.username)
    res.app.set('password',req.body.password)
    a = await getList(req.body.username,req.body.password)
    res.status(200).send(a)
   }else{ 
     console.log('Please Enter Username and Password...')
     res.status(404)
   }
})  
app.listen(8000, function () {  
  console.log("Example app listening at 8000")  
})  
