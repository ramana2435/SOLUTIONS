var capsule = document.querySelector(".capsule");
var range=document.querySelector(".rangevar count=0")

var count=0;
var btn=document.queryselector(.download);
var stop =documentquert selector(."stop");
var span=document.querySelector"(.span);
btn.addEventlistener("click",()=> {
    id=setInterval(() =>{
        if(count>=299){
            span.textcontent="completed";
        
            clearinterval (id);
        }


        
      
        count++;
        range.computedStyleMap.width=count + "px"
    },11);
});

