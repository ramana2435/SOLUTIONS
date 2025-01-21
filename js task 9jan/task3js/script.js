var form=document.querySelector("form");
var inp1=document.querySelector("#input1");
var inp2=document.querySelector("#input2");
var hdng=document.querySelector("#error");
var inpts=document.querySelectorAll('input[type="text"]');

form.addEventListener("submit",(e) => {
    e.preventDefault();

    for(var i=0;i<inpts.length;i++){
        if(inpts[i].value.trim()===""){
            hdng.textContent="error in this plz fill the form";
        hdng.style.color="red";
        break;
}
    }
});