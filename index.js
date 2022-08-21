// Code your solution here
function findMatching(someArray, someString) {
    return someArray.filter(function (driver) { return driver.toLowerCase() === someString.toLowerCase() })
  }
  
function fuzzyMatch(someArray, someString) {
    return someArray.filter(function (driver) { return driver.toLowerCase().substring(0, someString.length) === someString.toLowerCase() })
}
  
function matchName(someArray, someString) {
    return someArray.filter(function (driver) { return driver.name === someString })
}


