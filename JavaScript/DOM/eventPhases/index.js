const elements = document.querySelectorAll("*");
console.log(elements);
for (let ele of elements) {
  //bubbling
  ele.addEventListener("click", (e) => {
    console.log(
      "Bubbling -> ",
      ele.tagName,
      "Clicked on ->",
      e.currentTarget,
      "Originated from -> ",
      e.target
    );
  });

  capturing
  ele.addEventListener(
    "click",
    (e) => {
      console.log(
        "Capturing -> ",
        ele.tagName,
        "Clicked on ->",
        e.currentTarget,
        "Originated from -> ",
        e.target
      );
    },
    true
  );
}
