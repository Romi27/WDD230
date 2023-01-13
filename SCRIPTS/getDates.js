var currentDate =  new Date()
var cYear= currentDate.getFullYear()
document.getElementById("currentYear").innerHTML = cYear;
let nLastModif = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = nLastModif;
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}