const enrolledStudent = new Map()
const presentStudent = new Map()
const sendDataNames = []
const sendDataValues = []
sendData = []
let count = 0;
const present = "https://user-images.githubusercontent.com/55575931/143246100-bc8141dd-a83b-4af8-af95-fa4355c50590.png"
const absent = "https://user-images.githubusercontent.com/55575931/143248972-5bc6d1db-9ed8-4e7c-8c1c-55a38779af89.png"
const sheetImg = "https://user-images.githubusercontent.com/55575931/145341414-d37ff881-bbaf-4395-bbd8-07f013e0b23c.png"
const generateKey = (value)=>{
    value = value.toLowerCase();
    let newValue = "";
    for(let i=0;i<value.length;i++){
        if(value[i] == " "){
            continue
        }
        newValue = newValue +value[i];
    }
    return newValue
}
function startFunction(){
    count = count +1;
}
fetch("http://localhost:8000/getList",{
    method:"GET",
    headers:{
        "Content-type": "application/json; charset=UTF-8",
       "Access-Control-Allow-Origin":"http://localhost:8000"
    }
}).then((response)=>{
    return response.json()
}).then((response)=>{
    response.forEach((e)=>{
        enrolledStudent.set(e.toLowerCase(),0);         //Settinh Hash Function...  
    })
})

const checkingFunction = function(){
    let a = document.querySelectorAll('span.zWGUib')
    presentStudent.clear()
    for(let i = 0;i<a.length;i++){
        presentStudent.set(a[i].innerText.toLowerCase(),0)
    }
    console.log(enrolledStudent)
    for (let [key, value] of enrolledStudent) {
        let id = generateKey(key);
        if(presentStudent.get(key)>=0){
            enrolledStudent.set(key,value+1)
            document.getElementById(`${id}absent`).style.display = "none"
            document.getElementById(`${id}present`).style.display = "block"
             document.getElementById(`${id}StatusA`).style.display = "none"
             document.getElementById(`${id}StatusP`).style.display = "block"
        }else{
            //Set color to Red
            document.getElementById(`${id}absent`).style.display = "block"
            document.getElementById(`${id}present`).style.display = "none"
            document.getElementById(`${id}StatusA`).style.display = "block"
            document.getElementById(`${id}StatusP`).style.display = "none"
        }
      }
}

const startCount = setInterval(startFunction,1000)
const reloader = setInterval(checkingFunction,1000)

async function sleep(delay){
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve();
        },delay)
    },(reject)=>{})
}

const convertDataToCsv = async () =>{
    const arnav =  new Promise(async (resolve)=>{
        console.log('CSV function running...!!!')
        sendData.push(sendDataNames)
        const newValues = sendDataValues.map((e)=>{
            let jarvis = ((e/count)*100).toFixed(2)
            return jarvis.toString() + " %"
        })
        sendData.push(newValues)
        fetch("http://localhost:8000/generateCSV",{
            method:"POST",
            headers:{
                "Content-type": "application/json; charset=UTF-8",
               "Access-Control-Allow-Origin":"http://localhost:8000"
            },
            body: JSON.stringify(sendData)
        }).then(async (response)=>{
            return response.json()
        }).then(async(response)=>{
            resolve(response.url)
        })
       
    },(reject)=>{})

    return await arnav
}
document.querySelector('.uploadButton').addEventListener('click',async ()=>{
    console.log('Stop taking')
    let minThreshold = count*0.70;
    clearInterval(reloader)
    clearInterval(startCount)
    document.querySelector('.student-view').style.display = "none"
    document.querySelector('.loading').style.display="block"
    await sleep(2000)
    document.querySelector('.loading').style.display="none"
    document.querySelector('.teacher-view').style.display = "block"
    let uls = document.createElement('ul')
    document.querySelector('.uploadList').appendChild(uls)
    for (let [key, value] of enrolledStudent) {

        sendDataNames.push(key.toUpperCase())
        sendDataValues.push(value)
        let lis = document.createElement('li')
            uls.appendChild(lis)
            lis.classList.add('mdc-list-item')
            const firstDiv = document.createElement('div')
            firstDiv.classList.add('flex-container')
            lis.appendChild(firstDiv)
            const secondDiv = document.createElement('div')
            secondDiv.classList.add('flex-items-teach')
            firstDiv.appendChild(secondDiv)
            secondDiv.appendChild(document.createTextNode(key.toUpperCase()))
            const thirdDiv = document.createElement('div')
            firstDiv.appendChild(thirdDiv)
            const img = document.createElement('img')
            img.classList.add('img-teach')
            if(value>minThreshold){
                //Present Style
                img.src = present
                thirdDiv.appendChild(img)
            }else{
                //absent Style
                img.src = absent
                thirdDiv.appendChild(img)

            }
      }
      
})

document.querySelector('.webkisok').addEventListener('click',async ()=>{
    document.querySelector('.teacher-view').style.display = "none"
    document.querySelector('.loading').style.display="block"
    console.log('Started')
    let link = await convertDataToCsv()
    console.log('Ended')
    document.querySelector('.loading').style.display="none"
    document.querySelector('.finally').style.display = "block"
    let anchorTag = document.createElement('a')
    anchorTag.href=link
    anchorTag.target = "_blank"
    document.querySelector('.sheetLink').appendChild(anchorTag)
    let imgSheet = document.createElement('img')
    imgSheet.src = sheetImg
    imgSheet.classList.add('imgSheet')
    anchorTag.appendChild(imgSheet)
})
