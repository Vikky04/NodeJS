const someval=require("./math");

console.log(someval);

/*
if we want to some data exported use then use require
on that file and exported file write as module.exports={something}

if we want to export data from other directory :
1. All exoprted file combine at index.js(must) and then exports those from index.js
2.When you want to require data in other directory simply require("directory name") this check in directory foe index.js file always.

PS C:\Users\vicky\OneDrive\main\WEBDEV> node script.js
123
PS C:\Users\vicky\OneDrive\main\WEBDEV> node script.js
123
123
PS C:\Users\vicky\OneDrive\main\WEBDEV> node script.js
{ sum: [Function: sum], g: 9.8 }
PS C:\Users\vicky\OneDrive\main\WEBDEV>

*/
