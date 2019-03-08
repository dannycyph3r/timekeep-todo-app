
const study = document.getElementById(`study`);
const fun = document.getElementById(`fun`);
const extra = document.getElementById(`extra`);

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

function.printList(theArrayToPrint = myList);

// document.getElementById(myList)
// myList.innerHTML = study + fun + extra;

let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('done');
  }
}, false);


