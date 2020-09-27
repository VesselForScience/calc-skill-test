
function CA(){
    var testfn = document.getElementById("inpFN")
    var textres = document.getElementById("textdiv-res") 
    var testsn = document.getElementById("inpSN")

    textres.innerText = `${Number(testfn.value)*Number(testsn.value)}`
}
