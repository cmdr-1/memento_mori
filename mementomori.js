function logTabs(tabs) {
    console.log(tabs)
  }
  
  browser.tabs.query({currentWindow: true}, logTabs)

  



  // idle.setDetectionInterval() - returns idle if the user hasn't had input for a specified number of seconds
  // idle.onStateChanged

  // storage.sync to have the stored date of birth persist to all instances of the browser.
  // storage.StorageArea - an object representing a storage area
  // storage.onChanged is the event that fires when there's a change in the storage area.

  // May want to use an onboarding page to avoid loading issues after add-on installation if -  
  // - users are going to use content scripts immediately after installing. On second thought, this - 
  // - shouldn't be relevant as this extension will be designed to only work on new tabs. 