let box = document.querySelector(".box");
let input = document.querySelector("input");

let data = [
  {
    name: "Lucky",
    src: "https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Ajay",
    src: "https://images.unsplash.com/photo-1589279715734-6631a314dfa2?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Rahul",
    src: "https://images.unsplash.com/photo-1567186937675-a5131c8a89ea?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sachin",
    src: "https://images.unsplash.com/photo-1584043720379-b56cd9199c94?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
let box1 = "";

data.forEach((i)=>{
    box1+=`<div class="box1">
    <div class="image">
    <img src=${i.src}
    alt="men"
    />
    <h4>${i.name}</h4>
    </div>`;

});

box.innerHTML=box1;

input.addEventListener("input",()=>{
    let filteredData=data.filter((r)=>r.name.toLowerCase().startsWith(input.value.toLowerCase()));
    let newUsers="";

    filteredData.forEach((el)=>{
        newUsers += `<div class="box1">
        <div class="img">
        <img
        src="${el.src}"
        alt="${el.name}"
        />
        </div>
        <h4>${el.name}</h4>
        </div>`;
    });
});