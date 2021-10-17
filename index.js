let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
    console.log('ss')
//   chrome.storage.sync.set({ color });
//   console.log('Default background color set to %cgreen', `color: ${color}`);
}); 

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {  //Whenever host joins meet this is called
    console.log(message)
    if  (message.data === 'active') {
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