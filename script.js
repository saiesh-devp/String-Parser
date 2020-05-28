const inText = document.getElementById("inputString");
const outText = document.getElementById("outputString");
const btnParse = document.getElementById("btnParse");
const btnRefresh = document.getElementById("btnRefresh");

btnParse.onclick = (e) =>{
    e.preventDefault();
    if(inText.value.toString().trim() === ""){
        alert("No input detected");
    }
    else{
        let f= ""
        let res = inText.value.toString().trim().split(" ");
        res.forEach(element => {
            f = f + ' "' + element + '",';
        });
        f = f.substring(0, f.length-1);
        //alert(f.substring(0, f.length-1));
        outText.value = "";
        outText.value = f;
    }
}

btnRefresh.onclick = (e) => {
    e.preventDefault();
    inText.value= "";
    outText.value = "";
}