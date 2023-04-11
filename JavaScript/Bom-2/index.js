// localStorage.setItem("myCat", "Tom");
// localStorage.setItem("myMouse", "Jerry");
// const cat = localStorage.getItem("myCat");
// localStorage.removeItem("myCat");
// localStorage.clear();

// let arr = [{ a: 100 }, { b: 200 }, { c: 300 }];
// localStorage.setItem("myArr", JSON.stringify(arr));
// let data = localStorage.getItem("myArr");
// console.log(JSON.parse(data)[0]);


// sessionStorage.setItem("myCat", "Tom");
// sessionStorage.setItem("myMouse", "Jerry");
// const cat = sessionStorage.getItem("myCat");
// sessionStorage.removeItem("myCat");
// sessionStorage.clear();

if (!sessionStorage.pageLoadCount) sessionStorage.pageLoadCount = 0;
sessionStorage.pageLoadCount = parseInt(sessionStorage.pageLoadCount) + 1;
document.getElementById("count").textContent = sessionStorage.pageLoadCount;
let myData1 = Math.random() * 100;
let myData2 = Math.random() * 100;
let myData3 = Math.random() * 100;
let id = setTimeout(cb, 3000, myData1, myData2, myData3);
console.log(id);
function cb(...data) {
    console.log(data);
}

document.querySelector(".btn").addEventListener("click",()=>{
    setTimeout(() => console.log("alert"), 1000);
})

const alarm = {
  remind(aMessage) {
    alert(aMessage);
    this.timeoutID = undefined;
  },

  setup() {
    if (typeof this.timeoutID === "number") {
      this.cancel();
        console.log(this.timeoutID);
    }

    this.timeoutID = setTimeout(
      (msg) => {
        this.remind(msg);
      },
      1000,
      "Wake up!"
    );
  },

  cancel() {
    clearTimeout(this.timeoutID);
  },
};
window.addEventListener("click", () => alarm.setup());

