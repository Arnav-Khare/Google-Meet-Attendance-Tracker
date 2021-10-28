let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
    console.log('ss')
}); 

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {  //Whenever host joins meet this is called
    console.log(message)
    if (message.data === 'instantiate') {

        chrome.tabs.executeScript({file: 'js/attendance.js',},(result) => {
                console.log('Result: ',result)
                sendResponse(result)
            })
        return true
    }
    else if  (message.data === 'active') {
         chrome.tabs.query({ active: true }, (tabs) => {  //Printing All tabs that are active...
             if (tabs.some((tab) => tab.id === sender.tab.id)) {
                 return sendResponse({ ready: true })
             }
             chrome.tabs.onActivated.addListener(function tabListener(activeInfo) {
                 console.log('onActivated')
                 if (activeInfo.tabId === sender.tab.id) {
                     chrome.tabs.onActivated.removeListener(tabListener)
                     sendResponse({ ready: true })
                 }
             })
         })
         return true
     } 
 })