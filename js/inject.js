

async function delay (time){
    await new Promise( ()=>{
        setTimeout(() => {
            resolve()
        }, time);
    })
}

const arnav = async ()=>{
    await delay(5000)
    console.log("Inject Js is running..!!!")
}