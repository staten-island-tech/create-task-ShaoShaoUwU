export const DOMselectors = {
    name1: document.querySelector("#Name1"),
    name2: document.querySelector("#Name2"),
    galleri: document.querySelector(".galleri"),
    enter: document.querySelector("#enter"),
}

const name1 = DOMselectors.name1.value
const name2 = DOMselectors.name2.value

console.log(name1, name2)