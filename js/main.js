
// const study = document.getElementById(`study`);
// const fun = document.getElementById(`fun`);
// const extra = document.getElementById(`extra`);

const STUDY = 'STUDY';
const FUN = 'FUN';
const EXTRA = 'EXTRA';

let myList = [
  { name: `Practice JAVA`, cat: STUDY },
  { name: `Work out`, cat: EXTRA },
  { name: `Practice Python`, cat: STUDY },
  { name: `Dance`, cat: FUN },
  { name: `Do Grocery`, cat: EXTRA },
  { name: `Finish todo list`, cat: STUDY },
  { name: `Practice RUBY`, cat: STUDY },
];


function printList() {
  document.getElementById("myList").innerHTML = myList.map(item=>`<li>${item.name}</li>`)
} ;
 


  // // document.getElementById(myList)
// myList.innerHTML = study + fun + extra;

let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('done');
  }
}, false);


// ADD ELEMENT

function newElement() {
  // let li = document.createElement("LI");
  let inputValue = document.getElementById("newItem").value;
  // let t = document.createTextNode(inputValue);
  // li.appendChild(t);
  
  
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    // document.getElementById("myList").appendChild(li);
    myList.push({ name: inputValue, cat: STUDY });
    printList()
  }

  // for (i = 0; i < close.length; i++) {
  //   close[i].onclick = function() {
  //     var div = this.parentElement;
  //     div.style.display = "none";
  //   }
  // }
 }
 




 



  // document.getElementById("myList").value = "";
  // let span = document.createElement("SPAN");
  // let txt = document.createTextNode("\u00D7");
  // span.className = "close";
  // span.appendChild(txt);
  // li.appendChild(span);



  printList()