let data = [];
data = [
  {
    id: 1, //uuid
    fulName: "Abhishek Goel",
    score: 30,
    updatedAt: "23/10/23", //moment,dayjs
  },
  {
    id: 2, 
    fulName: "Ajay Morde",
    score: 90,
    updatedAt: "23/10/23", //moment,dayjs
  },
  {
    id: 3,
    fulName: "Krishna Patel",
    score: 100,
    updatedAt: "23/10/23", //moment,dayjs
  },
];

let increment=document.querySelectorAll(".incre")
let decrement = document.querySelectorAll(".decre");
increment.forEach((incBtn) => {
    incBtn.addEventListener("click",()=>{
        let id=incBtn.id;
        //get my data obj
        let dataObj=data.find((dObj)=>dObj.id==id);
        dataObj.score+=incBtn.innerText;
        renderUI(data,true);
    });
});

const form=documet.querySelector('form');
const nameInput=document.querySelector("#name");
const name=nameInput.value;
const scoreInput = document.querySelector("#score");
const score=scoreInput.value;

data.push({
    id:Math.floor(Math.random()*10),
    fulName:name,
    score
})

nameInput.value='';
score.value='';

renderUI(data);



function renderUI(data,isOldPlayer){
    const ul=document.querySelector("#list");
    let newData=data.sort((a,b)=>parseInt(b.score)-parseInt(a.score));

    //traverse over data
    //create li for each dataobj
    //append in ui 
    
}



