const DOMselectors = {
    name1: document.querySelector("#Name1"),
    name2: document.querySelector("#Name2"),
    galleri: document.querySelector(".galleri"),
    enter: document.querySelector("#enter"),
    form: document.querySelector(".pop")
}
form.addEventListener('submit', function (event) {
    event.preventDefault();
const name1 = DOMselectors.name1.value
const name2 = DOMselectors.name2.value

console.log(name1, name2)

let shipName = '';
      const halfName1 = name1.substring(0, Math.ceil(name1.length / 2));
      const halfName2 = name2.substring(Math.ceil(name2.length / 2));
      for (let i = 0; i < halfName1.length; i++) {
        shipName += halfName1[i];
      }
      for (let i = 0; i < halfName2.length; i++) {
        shipName += halfName2[i];
      }

function calculateLoveScore() {
        const loveScore = Math.floor(Math.random() * 99) + 1;
        return loveScore; }
 });