console.log("Content Script is Running...!!")
const parentDiv = document.querySelector('.crqnQb')
const image = 'https://user-images.githubusercontent.com/55575931/137891778-f884a63c-db36-4000-91fc-80dba4ec3fdb.jpg'
const checkGif = ".././assessts/check-green.gif"

const panelHTML = ` <div
class="WUFI9b qdulke"
id="panel"
jsname="b0t70b"
jscontroller="dkJU2d"
jsaction="VOcP9c:QPhnyd;ntQuZe:EuYDs"
>
<div class="CYZUZd">
    <div class="J8vCN zHGix" role="heading" aria-level="2" tabindex="-1" jsname="rQC7Ie">
        Attendance
    </div>
    <div class="VUk8eb">
        <div jsaction="JIbuQc:hR1TY;rcuQ6b:npT2md" jscontroller="AXYg3e">
            <span data-is-tooltip-wrapper="true"
                ><button class="VfPpkd-Bz112c-LgbsSe yHy1rc eT1oJ IWtuld wBYOYb" jscontroller="soHxf" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc; touchcancel:JMtRjd; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef" aria-label="Close" data-tooltip-enabled="true" data-tooltip-id="tt-c21" >
                    <div class="VfPpkd-Bz112c-Jh9lGc"></div>
                    <i class="google-material-icons VfPpkd-kBDsod" aria-hidden="true" >
                        close
                    </i>
                </button>         
                <div class="EY8ABd-OWXEXe-TAWMXe"  role="tooltip"  aria-hidden="true" id="tt-c21" >
                    Close
                </div>
            </span>
        </div>
    </div>
</div>
<div class="loading" hidden style='text-align:center'>
        <div>
         <img src=${image} alt="JIIT LOGO" width="200" >
        </div>
        <div>
            <div class="loadingio-spinner-double-ring-0anvh0z3awgc"><div class="ldio-tsxyfp9jf1s">
            <div></div>
            <div></div>
            <div><div></div></div>
            <div><div></div></div>
            </div></div>
        </div>
     
</div>
<div class="finally" hidden style='text-align:center;margin-top:130px'>
        <div>
         <img src=${image} alt="JIIT LOGO" width="200" >
        </div>
        <div class="sheetLink">
            <h3 style="font-size:large">Attendance Taken.....!!</h3>
        </div>     
        <div >
            <h3 style="font-size:large">Click on the above Icon to view Percentages....</h3>
        </div>
</div>
<div class="hWX4r">
    <div  class="view login-view" style='text-align:center'>
        <h1>JIIT</h1>
        <div style='text-align:center'>
            <img src=${image} alt="JIIT LOGO" width="200" style="margin-top:-10px" >
            <h2>Login to your Account</h2>
            <div class="box" style="margin-top:40px">
                <form action="#" method="POST" enctype="multipart/form-data"> 
                    <div class="inputBox">
                        <div class="input-holder">
                            <input class="input" type="text" id="facultyID" placeholder=" ">
                            <div class="placeholder">Username</div>
                        </div>
                    </div>
                    <div class="inputBox">
                         <div class="input-holder">
                            <input class="input" type="password" id="password" placeholder=" ">
                            <div class="placeholder">Password</div>
                        </div>
                    </div>
                    <div class="inputBox">
                        <div class="input-holder">
                            <input class="input" type="text" id="dob" placeholder=" " >
                            <div class="placeholder">D.O.B</div>
                        </div>
                </div>
                     <input type="button" id="submit_button" name="sign-in" value="Sign In">
                </form>
            </div>
        </div>
    </div>

    <div class ="view selection-view" style='text-align:center' hidden >
         <div class="mdc-list-divider" role="separator"></div>
            <div  class="view login-view" style='text-align:center; margin-bottom:-20px'>
            <h1>JIIT</h1>
            <div style='text-align:center'>
                <img src=${image} alt="JIIT LOGO" width="200" >
                <h2>Enter Batch Details</h2>
                <div class="box">
                    <form action="#" method="POST" enctype="multipart/form-data"> 
                        <div id="main" style="margin-top:130px">
                            <div style="width:500px">
                                <label for="cars">Choose Exam Code:</label>
                                <select id="exam_code" name="examCode"style="width:120px">
                                    <option value="audi">2019ODD</option>
                                    <option value="saab">2019EVEN</option>
                                    <option value="fiat">2020ODD</option>
                                    <option value="audi">2020EVEN</option>
                                    <option value="audi">2021ODD</option>
                                    <option value="volvo" selected>2021EVEN</option>
                                 </select>
                            </div>
                            <div style="width:500px">
                                <label for="cars">Attendance Label:</label>
                                 <div id="main">
                                    <input type="radio" id="regular" name="attendance" value="Regular" style="margin-top:5px">
                                    <label  class="jarvis"for="html" style="color:green">Regular</label>
                                    <input type="radio" id="extra" name="attendance" value="Extra">
                                    <label class="jarvis" for="html" style="color:red">Extra</label>
                                 </div>
                            </div>
                       </div>
                       <div >
                <label for="subjects">Subject:</label>
                <select id="subject_code" name="subjectCode"style="width:300px;height:30px">
                                <option value="volvo">DATA STRUCTURES AND ALGORITHMS LAB(15B17CI578)</option>
                                <option value="volvo">ELECTROMAGNETIC FIELD THEORY LAB (18B15EC312)</option>
                                <option value="volvo">EMBEDDED SYSTEMS/IOT LAB (18B15EC313)</option>
                                <option value="volvo">PYTHON FOR SIGNAL PROCESSING (18B15EC314)</option>
                                <option value="volvo">MINOR PROJECT-1 (15B19EC591)</option>
                                <option value="volvo">INFORMATION THEORY AND APPLICATIONS(17B1NEC735)</option>
                                <option value="volvo">MATERIALS SCIENCE(16B1NPH532)</option>
                                <option value="volvo">PLANNING AND ECONOMIC DEVELOPMENT(16B1NHS532)</option>
                                <option value="volvo">INDIAN CONSTITUTION & TRADITIONAL KNOWLEDGE (20B13HS311)</option>
                                <option value="volvo" selected>ELECTROMAGNETIC FIELD THEORY(18B11EC312)</option>
                 </select>
        </div>
        <div id="main" style="margin-top:30px">
              <div style="width:300px">
                    <label for="ltp">LTP:</label>
                    <select id="ltp" name="ltpCode"style="width:120px;height:24px">
                                    <option value="volvo">Lecture</option>
                                    <option value="saab">Tutorial</option>
                                    <option value="fiat">Lecture and Tutorial</option>
                     </select>
             </div>
            <div style="width:300px">
                    <label for="year">Academic Year:</label>
                    <select id="year" name="year"style="width:120px;height:24px">
                                    <option value="volvo">All</option>
                                    <option value="saab">2021ODD</option>
                                    <option value="fiat" selected>2021EVEN</option>
                     </select>
             </div>
              <div style="width:300px">
                    <label for="branch_code">Branch Code:</label>
                    <select id="branch_code" name="branchCode"style="width:120px;height:24px">
                                    <option value="volvo">All</option>
                                    <option value="saab">CSE</option>
                                    <option value="fiat">IT</option>
                                    <option value="audi" selected>ECE</option>
                                    <option value="audi">BioTech</option>
                                    <option value="audi">Integrated</option>
                     </select>
             </div>
            
        </div>
        <div id="main">
              <div style="width:300px">
                    <label for="subSection">Subsection:</label>
                    <select id="subSection" name="subsection"style="width:120px">
                                    <option value="volvo">ALL</option>
                                    <option value="saab">A1-A2</option>
                                    <option value="saab" selected>A3-A4</option>
                                    <option value="saab">A5-A6</option>
                                    <option value="saab">A7-A8-A9</option>
                                       
                     </select>
             </div>
            
        </div>
            <input type="button" id="get_list" name="sign-in" value="Get List" style="margin-top:20px">
          </form>
        </div>
      </div>
    </div>

</div>
<div class = "view student-view" hidden>
    <div class="mdc-list-divider" role="separator"></div>
    <div  class="view login-view">
       <h2 style="text-align:center">Attendance List</h2>
      <div class = "student-list">
         <div class="generateList" style="border-bottom:2px solid grey">
         </div>
     </div>
      <input type="button" class="uploadButton" name="up" value="Upload" style="margin-top:20px">
    </div>
</div>
<div class="view teacher-view" hidden>
<div class="mdc-list-divider" role="separator"></div>
<h2 style="text-align:center">Attendance List</h2>
<div class = "student-list">
      <div class="uploadList" style="border-bottom:2px solid gret">
      </div>
</div>
<input type="button" class="webkisok" name="sign-in" value="Submit to Webkiosk" style="margin-top:20px">
</div>
</div>
</div>
`

   
const buttonHTML = `<div class="r6xAKc">
    <span data-is-tooltip-wrapper="true"
        ><button
            id="attendance"
            class="VfPpkd-Bz112c-LgbsSe yHy1rc eT1oJ JsuyRc boDUxc"
            jscontroller="soHxf"
            jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc; touchcancel:JMtRjd; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef"
            jsname="A5il2e"
            aria-label="Attendance"
            data-tooltip-enabled="true"
            data-tooltip-id="tt-c12"
            data-panel-id="5"
            aria-pressed="false"
        >
            <div class="VfPpkd-Bz112c-Jh9lGc"></div>
            <i
                class="VfPpkd-kBDsod NtU4hc"
                aria-hidden="true"
                ><svg
                    focusable="false"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <path
                        d=" M 14.077 10.154 C 13.974 10.15 12.031 10.126 10.385 10.154 C 6.34 10.213 5.521 8.044 5.462 4 L 3 4 C 3.066 8.658 3.886 11.65 7.923 12.615 L 7.923 20 L 15.308 20 L 15.308 13.846 C 16.145 15.082 16.486 16.997 16.538 20 L 19 20 C 18.94 15.412 18.193 10.185 14.077 10.162 L 14.077 10.154 Z  M 9.154 6.462 C 9.154 5.102 10.257 4 11.615 4 C 12.974 4 14.077 5.102 14.077 6.462 C 14.077 7.82 12.974 8.923 11.615 8.923 C 10.257 8.923 9.154 7.82 9.154 6.462 L 9.154 6.462 L 9.154 6.462 Z "
                        fill-rule="evenodd"
                    />
                </svg></i
            ><i
                class="VfPpkd-kBDsod Mwv9k"
                aria-hidden="true"
                ><svg
                    focusable="false"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <path
                        d=" M 14.077 10.154 C 13.974 10.15 12.031 10.126 10.385 10.154 C 6.34 10.213 5.521 8.044 5.462 4 L 3 4 C 3.066 8.658 3.886 11.65 7.923 12.615 L 7.923 20 L 15.308 20 L 15.308 13.846 C 16.145 15.082 16.486 16.997 16.538 20 L 19 20 C 18.94 15.412 18.193 10.185 14.077 10.162 L 14.077 10.154 Z  M 9.154 6.462 C 9.154 5.102 10.257 4 11.615 4 C 12.974 4 14.077 5.102 14.077 6.462 C 14.077 7.82 12.974 8.923 11.615 8.923 C 10.257 8.923 9.154 7.82 9.154 6.462 L 9.154 6.462 L 9.154 6.462 Z "
                        fill-rule="evenodd"
                    />
                </svg></i
            >
        </button>
        <div
            class="EY8ABd-OWXEXe-TAWMXe"
            role="tooltip"
            aria-hidden="true"
            id="tt-c12"
        >
            Attendance
        </div></span
    >
</div>`


chrome.storage.local.get(null,(result)=>{
    
    function instantiate() {
        chrome.runtime.sendMessage(
            {
                data: 'instantiate',
            },
            () => {
                console.log('Successfully initialized extension.')
            }
        )
    }

    function definePressedProperty(element) {
        Object.defineProperty(element, 'pressed', {
            get: function () {
                return this.getAttribute('aria-pressed') === 'true'
            },
            set: function (value) {
                this.setAttribute('aria-pressed', value)
            },
        })
    }
    function start(){
        chrome.runtime.sendMessage({data:"active"},async(response)=>{

            document.querySelector('[jsname="HlFzId"]').insertAdjacentHTML('afterend', panelHTML)
            await delay(1000);
            while (document.querySelector('.r6xAKc') === null || document.querySelector('.r6xAKc') === undefined){
                continue;
            }
            document.querySelector('.r6xAKc').insertAdjacentHTML('afterEnd', buttonHTML) 
            const attendancePanel = document.getElementById('panel') 

            const attendanceButton = document.getElementById('attendance')
            const infoButton = document.querySelector('.r6xAKc button')    
            const panelContainer = document.querySelector('.R3Gmyc.qwU8Me')
            const ariaPressedObserver = new MutationObserver(
                (mutations, me) => {
                    mutations[0].target.setAttribute('aria-pressed', false)
                    me.disconnect()
                }
            )
            const ariaPressedObserverOptions = {
                attributes: true,
                attributeFilter: ['aria-pressed'],
                attributeOldValue: true,
            }
            const panelUnhiddenObserver = new MutationObserver(
                (mutations, me) => {
                    const mutation = mutations[0]
                    const target = mutation.target
                    if (
                        mutation.oldValue.includes('qdulke') &&
                        !target.classList.contains('qdulke')
                    ) {
                        target.classList.add('qdulke')
                        attendancePanel.classList.remove('qdulke')
                        me.disconnect()
                    }
                }
            )
            const panelSpawnedObserver = new MutationObserver(
                (mutations, me) => {
                    const mutation = mutations[0]
                    if (mutation.addedNodes.length > 0) {
                        const addedNode = mutation.addedNodes[0]
                        if (addedNode.getAttribute('data-tab-id') === '5') {
                            addedNode.classList.add('qdulke')
                            attendancePanel.classList.remove('qdulke')
                            me.disconnect()
                        }
                    }
                }
            )
            definePressedProperty(infoButton)
            definePressedProperty(attendanceButton)
            infoButton.addEventListener('click', (event) => {
                if (!infoButton.pressed) {          //Info button panel is showing if condition is true
                    if (!attendanceButton.pressed) {     //Attendance Button is not clicked...
                        ariaPressedObserver.observe(
                            attendanceButton,
                            ariaPressedObserverOptions
                        )
                    } 
                    else {
                        event.stopPropagation()
                        infoButton.pressed = true
                        document
                            .querySelector('[data-tab-id="5"]')
                            .classList.remove('qdulke')
                        attendanceButton.pressed = false
                        attendancePanel.classList.add('qdulke')
                    }
                }
            })
            attendanceButton.addEventListener('click', (event) => {
                if (!attendanceButton.pressed) {
                    const infoPanel =
                        document.querySelector('[data-tab-id="5"]')
                    if (infoPanel === null) {
                        panelSpawnedObserver.observe(panelContainer, {
                            childList: true,
                        })
                    } else {
                        panelUnhiddenObserver.observe(
                            document.querySelector('[data-tab-id="5"]'),
                            {
                                attributes: true,
                                attributeFilter: ['class'],
                                attributeOldValue: true,
                            }
                        )
                    }
                    if (!infoButton.pressed) {
                        ariaPressedObserver.observe(
                            infoButton,
                            ariaPressedObserverOptions
                        )
                    } else {
                        event.stopPropagation()
                        infoButton.pressed = false
                        document
                            .querySelector('[data-tab-id="5"]')
                            .classList.add('qdulke')
                        attendanceButton.pressed = true
                        attendancePanel.classList.remove('qdulke')
                    }
                }
            })

        instantiate()
    })}
    
    async function delay (time){
        await new Promise( (resolve,reject)=>{
            setTimeout(() => {
                resolve()
            }, time);
        })
    }
    const obsereve = new MutationObserver(async (mutations, me) => {
        console.log("Mutation Observer i.e All changes in the DOM element is being Noted")
        if (document.querySelector('.c8mVDd')) {
            const s = document.createElement('script')
            s.src = chrome.runtime.getURL('js/inject.js')
            document.documentElement.appendChild(s)
            console.log("Inserted Inject File")
            start()
            me.disconnect()
        }
    })
    obsereve.observe(parentDiv,{childList:true,subtree:true})
})
 

// const observeForJoinButton = observer.observe(buttonClass,{ childList: true,subtree: true,})

