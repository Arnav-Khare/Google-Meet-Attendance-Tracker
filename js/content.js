console.log("Content Script is Running...!!")
const parentDiv = document.querySelector('.crqnQb')
const image = 'https://user-images.githubusercontent.com/55575931/137891778-f884a63c-db36-4000-91fc-80dba4ec3fdb.jpg'
const panelHTML = `<div
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
        <div class="hWX4r">
            <div  class=view login-view"" style='text-align:center'>
                <h1>JIIT</h1>
                 <div style='text-align:center'>
                <img src=${image} alt="JIIT LOGO" width="200" height="160">
                 <h2>Login to your Account</h2> 
                <div style='text-align:center'>
                 <form id="contact_form" action="#" method="POST" enctype="multipart/form-data"> 
                <div class="row"> 
                    <label for="name">User Name:</label><br /> 
                    <input id="username" class="input" name="name" type="text" value="" size="30" /><br /> 
                </div> 
                <div class="row"> 
                    <label for="email">Password</label>:</label><br /> 
                    <input id="password" class="input" name="email" type="password" value="" size="30" /><br /> 
                </div> 
                <input id="submit_button"  class="link-style" type="button" value="Login" style="margin-top:10px;"" /> 
            </form>			 
            <hr> 
        </div>
        <div class ="view selection-view" hidden >
                //TO BE EDITED HERE...!!!
        </div>
        <div>

        </div>
    </div>
    </div>`

   
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
                Utils.log('Successfully initialized extension.')
            }
        )
    }
    function start(){
        chrome.runtime.sendMessage({data:"active"},async(response)=>{

            document.querySelector('[jsname="HlFzId"]').insertAdjacentHTML('afterend', panelHTML)
            document.querySelector('.r6xAKc').insertAdjacentHTML('afterend', buttonHTML) 
            const attendancePanel = document.getElementById('panel') 

            const attendanceButton = document.getElementById('attendance')
            const infoButton = document.querySelector('.r6xAKc button')    
            const panelContainer = document.querySelector('.R3Gmyc.qwU8Me')  
            const panelUnhiddenObserver = new MutationObserver(
                (mutations, me) => {
                    const mutation = mutations[0]
                    const target = mutation.target
            
                    if (mutation.oldValue.includes('qdulke') &&!target.classList.contains('qdulke')) {    //ATTENDANCE PANEL IS VISIBLE OR NOT CONDITION
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
                            attendancePanel.classList.add('qdulke')
                            me.disconnect()
                        }
                    }
                }
            )
    
            attendanceButton.addEventListener('click',()=>{
                console.log("Attendance Button is Clicked..1")
                if (!attendanceButton.pressed) {
                    const infoPanel = document.querySelector('[data-tab-id="5"]')   //Initally panel is not creted IF condition is there for that Case
                    if (infoPanel === null) {
                        panelSpawnedObserver.observe(panelContainer, {childList: true,})
                     } 
                    else {
                        panelUnhiddenObserver.observe(document.querySelector('[data-tab-id="5"]'),{ attributes: true,attributeFilter: ['class'],attributeOldValue: true,})
                    }

                }
            
            })
        })
        instantiate()
    }

    const obsereve = new MutationObserver((mutations, me) => {
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

