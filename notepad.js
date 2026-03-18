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
let  p = document.querySelector('p')
allbutton[1].addEventListener('click',()=>{
    let notesselection = document.querySelector('.notesselection') 
    notesselection.style.border="2px solid white"   
    let card= document.createElement('div')
let context= document.createElement('p')
context.innerText=notePad.value
card.style.border='2px solid green'
notesselection.append(card)
card.append(context)

    

})
