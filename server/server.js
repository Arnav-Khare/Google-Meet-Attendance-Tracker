const express = require('express');  
let {PythonShell} = require ('python-shell')
var cors = require('cors');
const app = express();
const { spawn } = require('child_process');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));  
app.use(cors())

function filterKey(key) {
  var result = [];
  for (var i = 0; i < key.length; i++) {
      var c = key.charCodeAt(i);   //ASCII VALUE
      if (isLetter(c))
          result.push((c - 65) % 26);
  }
  return result;
}

function decrypt(text,keyArray) {
  var output = ""

  for (var i = 0, j = 0; i < text.length; i++) {
      var c = text.charCodeAt(i);
      var calc = ((c-65)%26)-keyArray[i]
      if(calc<0){
          output += String.fromCharCode(calc+26+65);
      }else{
          output += String.fromCharCode(calc+65);
      }
      j++;
  }
  return output
}

const decryptPassword = (value)=>{
  var keyStr = "JIITMAJORPROJECT"
  var keyArray = filterKey(keyStr); 
     return decrypt(value,keyArray)
}

const options = {
  mode: 'text',
  pythonPath: 'python',
  pythonOptions: [],
  scriptPath: '',
  args: []
}

function test(scriptPath, args, pythonFile) {
  let options = {
    mode: 'text',
    pythonPath: 'python',
    pythonOptions: [],
    scriptPath: scriptPath,
    args: args,
  };


  return new Promise((resolve, reject) => {
    try {
      PythonShell.run('scrap.py', options, function (err, results) {
        if (err) { console.log(err); }
        // results is an array consisting of messages collected during execution
        console.log('results', results);
        resolve();
      });
    }
    catch {
      console.log('error running python code')
      reject();
    }
  })
}

async function getList(username,password,dob){

    await test("",[username,password,dob]).then((e)=>{

    }).catch((e)=>{
      console.log(e)
    })
}

// const generateKey = (value)=>{
//   value = value.toLowerCase();
//   let newValue = "";
//   for(let i=0;i<value.length;i++){
//       if(value[i] == " "){
//           continue
//       }
//       newValue = newValue +value[i];
//   }
//   return newValue
// }
async function sleep(delay){
  return new Promise ((resolve)=>{
      setTimeout(()=>{
          resolve();
      },delay)
  },(reject)=>{})
}

function isLetter(c) {
  return isUppercase(c) || isLowercase(c);
}
function isUppercase(c) {
  return 65 <= c && c <= 90; 
}
function isLowercase(c) {
  return 97 <= c && c <= 122;  
}



app.post('/loginDetails', async function (req, res) {  

   if(req.body.username != '' && req.body.username != ''){  
    // var password = decryptPassword(req.body.password)
    // res.app.set('username',req.body.username)
    // res.app.set('password',password)
 
    a = await getList(req.body.username,req.body.password,req.body.birth)
    res.sendStatus(200)
   }else{ 
     console.log('Please Enter Username and Password...')
     res.status(404)
   }
})  
app.get('/getList',(req,res)=>{
  let list = ["Devansh nigam","Shruti Jain","Karuna Gupta","Aryan Chauhan","Ananya Bose","Suman Saurav","Hariom Kalra","Anchit Kumar","Aditya Tyagi","Ujjawal Jain","Sanyam Jain","Harshit Raj","Raghav Khandelwal","Gaggan Gupta","Yash Mathur","Digvijay Singh","Naman Agarwal","Kritika Singh","Varun Sethi","Radhika Agarwal","Tushar Tomar","Nikhil Bhatt","Sarthak Mishra","Sarthak Bansal","Apoorva Srivastav","Kritika Jain","Sarthak Gupta","Gulshaan Pareek","Nikhil Shekher","Nikhil Srivastav","Vishesh Jain","Arnav Khare"]
  res.send(list)
})
app.listen(8000, function () {  
  console.log("Example app listening at 8000")  
})  
function test2(scriptPath, args, pythonFile) {
  let options = {
    mode: 'text',
    pythonPath: 'python',
    pythonOptions: [],
    scriptPath: scriptPath,
    args: args,
  };
  return new Promise((resolve, reject) => {
    try {
      PythonShell.run('generateFile.py', options, function (err, results) {
        if (err) { console.log(err); }
        // results is an array consisting of messages collected during execution
        console.log('results', results);
        resolve();
      });
    }
    catch {
      console.log('error running python code')
      reject();
    }
  })
}
app.post('/generateCSV',async (req,res)=>{
  let urlLink = ""
  console.log('Server Send the data to Pyhton Script')
  await test2("",[req.body[0],req.body[1]]).then(async ()=>{
    const urlGetter = new Promise((resolve)=>{
      const url = spawn('node',['./googleDrive.js'])
      url.stdout.on('data',(data)=>{
        urlLink = data.toString()
        console.log(urlLink)
      })
      url.stderr.on('data',(data)=>{
      })
      url.on('close',(data)=>{
        resolve()
      })
    },(reject)=>{
      console.log('Error')
      reject()
    })
    await urlGetter
    res.status(200).send({url:urlLink})
  }).catch((e)=>{
  console.log(e)
})

})
