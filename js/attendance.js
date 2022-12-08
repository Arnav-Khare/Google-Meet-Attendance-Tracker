console.log('Attendance JS is running..!!!')

const absentPic = "https://user-images.githubusercontent.com/55575931/143050133-745d992e-357c-4875-b7d5-45af35257858.jpg"
const presentPic = "https://user-images.githubusercontent.com/55575931/143050443-061de911-a0b8-40e4-a326-f848666ab5ab.png"
const port = chrome.runtime.connect()

const initialized = async (delay,time)=>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            document.querySelectorAll('.r6xAKc button')[2].click()
            resolve();
        }, delay);
    })
}
async function setDisplay(){
    await initialized(900,1);
    await initialized(900,2);
}
setDisplay();

const generateKeys = (value)=>{
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

function filterKey(key) {
    var result = [];
    for (var i = 0; i < key.length; i++) {
        var c = key.charCodeAt(i);   //ASCII VALUE
        if (isLetter(c))
            result.push((c - 65) % 26);
    }
    return result;
}

function crypt(input, key) {
    var output = "";

    for (var i = 0, j = 0; i < input.length; i++) {
        var c = input.charCodeAt(i);
        output += String.fromCharCode(((((c-65)%26)+key[i])%26)+65);
        j++;
    }
    return output
}

const encryptPassword = (value)=>{
    var keyStr = "JIITMAJORPROJECT"
		var keyArray = filterKey(keyStr); 
       return crypt(value,keyArray)
}


document.getElementById('submit_button').addEventListener('click',async (e)=>{
    const username = document.getElementById("facultyID").value
    const password =  encryptPassword(document.getElementById("password").value)
    const dob = document.getElementById("dob").value
    console.log(dob)
    document.querySelector('.login-view').style.display = "none"
    document.querySelector('.loading').style.display="block"
    fetch("http://localhost:8000/loginDetails", {
    method: "POST",
    body: JSON.stringify({
       username:username,
       password:document.getElementById("password").value,
       birth:dob,
    }),
       
         headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin":"http://localhost:8000"
    }
}) .then(async (response) =>{
    document.querySelector('.loading').style.display="none"
    document.querySelector('.selection-view').style.display = "block"
})
})

document.getElementById('get_list').addEventListener('click',async ()=>{
    document.querySelector('.selection-view').style.display = "none"
    document.querySelector('.loading').style.display = "block"
    fetch("http://localhost:8000/getList",{
        method:"GET",
        headers:{
            "Content-type": "application/json; charset=UTF-8",
           "Access-Control-Allow-Origin":"http://localhost:8000"
        }
    }).then((response)=>{
        return response.json()
    }).then(async (response)=>{
        await sleep(2000)
        document.querySelector('.loading').style.display="none"
        document.querySelector('.student-view').style.display = "block"
        let ul = document.createElement('ul')
        document.querySelector('.generateList').appendChild(ul)

        response.forEach((e)=>{
            let id = generateKeys(e)
            let li = document.createElement('li')
            ul.appendChild(li)
            li.classList.add('mdc-list-item')
            li.innerHTML +=`<div class="flex-container">
                                <div class="flex-items">
                                     <img src=${absentPic} class="absent" id="${id}absent" alt="absent" width="30" >
                                     <img src=${presentPic} class="present" id="${id}present"alt="present" width="30"  style="margin-top:-10px" hidden >
                                </div>
                                <div class="flex-items">
                                        <div style="">${e}</div>
                                        <div style="color:grey;" id="${id}StatusA">Absent</div>
                                        <div style="color:grey;" id="${id}StatusP" hidden>Present</div>
                                </div>
                            </div> `
        })
        const swe = document.createElement('script')
        swe.src = chrome.runtime.getURL('js/hashing.js')
        document.documentElement.appendChild(swe)
    })
})


                                  
                               
                             