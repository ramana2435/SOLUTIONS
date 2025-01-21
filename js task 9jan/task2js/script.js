var img1 = document.querySelector("#one");
var img2 = document.querySelector("#two");
var btn = document.querySelector("button");

var src1 =  img1.getAttribute("src");
var src2 =img2.getAttribute("src");

btn.addEventListener('click',()=>{
    img1.setAttribute("src", src2);
    img2.setAttribute("src", src1);
});
