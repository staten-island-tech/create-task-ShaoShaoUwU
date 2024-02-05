const DOMselectors = {
    name1: document.querySelector("#Name1"),
    name2: document.querySelector("#Name2"),
    galleri: document.querySelector(".galleri"),
    enter: document.querySelector("#enter"),
    form: document.querySelector(".form")
}

const Ships = [];
DOMselectors.enter.addEventListener('click', function (event) {
    event.preventDefault();
    const name1 = DOMselectors.name1.value
    const name2 = DOMselectors.name2.value
    const loveScore = calculateLoveScore();
    const newname = makeshipName(name1, name2);
    Ships.push({ newname, loveScore })
    console.log(name1, name2)
    ello(Ships);
    function makeshipName(name1, name2) {
        let shipName = '';
        const halfName1 = name1.substring(0, Math.ceil(name1.length / 2));
        const halfName2 = name2.substring(Math.ceil(name2.length / 2));
        for (let i = 0; i < halfName1.length; i++) {
            shipName += halfName1[i];
        }
        for (let i = 0; i < halfName2.length; i++) {
            shipName += halfName2[i];
        }
        return shipName;
    }
    function calculateLoveScore() {
        const loveScore = Math.floor(Math.random() * 100) + 1;
        return loveScore;
    }
    
    function ello(arr) {
        arr.forEach((ship) =>
            DOMselectors.galleri.insertAdjacentHTML(
                "beforeend",
                `<div class="gall">
   <h2 class="Name">Ship Name: ${ship.newname}</h2>
   <h3 class="LoveScore">LoveScore: ${ship.loveScore}</h3>
</div>` )
        );

    }
});
