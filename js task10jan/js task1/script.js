const form = document.querySelector("form");
const inps = document.querySelectorAll('input[type="text"]');
const hdng = document.querySelector("#status");


form.addEventListener("submit",(e)=>
    {

    e.preventDefault();
        
let hasError=false;
hdng.textContent="";
for(var i=0;i<inps.length;i++)
{
    if(inps[i].value.trim()===""){
        hasError=true;
    break;
    }
}

if(hasError)
{
    hdng.textContent="error !!!";
    hdng.style.color="red";


}
else{
    hdng.textContent="alright";
    hdng.style.color="green";
}


}

);
