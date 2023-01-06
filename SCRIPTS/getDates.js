var currentDate =  new Date()
var cYear= currentDate.getFullYear()
document.getElementById("currentYear").innerHTML = cYear;
let nLastModif = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = nLastModif;