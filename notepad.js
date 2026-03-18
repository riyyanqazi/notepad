let notePad = document.querySelector("textarea");
let span = document.querySelector(".count-sec span");
let allbutton = document.querySelectorAll("button");

notePad.addEventListener("input", () => {
  let count = notePad.value.length;
  console.log(count);

  span.innerText = count;
});

// save button
allbutton[0].addEventListener("click", () => {
  alert("Saved");
  let val = notePad.value;
  let a = JSON.stringify(val);
  console.log(val);

  localStorage.setItem("Notes", a);
});

let getdata = localStorage.getItem("Notes");
notePad.value = JSON.parse(getdata);

// Rest button
allbutton[2].addEventListener("click", () => {
  let res = confirm("Are you sure to rest Current data Remove from notepad");
  console.log(res);

  if (res === true) {
    notePad.value = "";
  }
});

allbutton[3].addEventListener("click",()=>{

})


// add new notes
// allbutton[1].addEventListener('click',()=>{
// alert("hello")
// })
