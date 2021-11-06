const hamburger = document.querySelector('.baris');
console.log(hamburger);

hamburger.addEventListener('click', navMenuOpen);

const barsNavPhone = document.querySelector('.bars_nav_phone');

const crossNavPhone = document.querySelector('.pomme');
crossNavPhone.addEventListener('click', navMenuClose);
barsNavPhone.addEventListener('click', navMenuClose);

const rainbowTextTarget = document.querySelector('.rainbow-text');
const rainbowTextTarget2 = document.querySelector('.rainbow-text2')
console.log(rainbowTextTarget)
rainbowTextTarget.addEventListener('mouseover', rainbowText);
rainbowTextTarget2.addEventListener('mouseover', rainbowText);



function navMenuOpen() {
    barsNavPhone.style.display = 'block'
};

function navMenuClose() {
    barsNavPhone.style.display = 'none'
};

function rainbowText() {
    let elements = document.getElementsByClassName("rainbow-text");
    for (let i = 0; i < elements.length; i++) {
        generateRainbowText(elements[i]);
    }
};

function generateRainbowText(element) {
    let text = element.innerText;
    element.innerHTML = "";
    let charElem = document.createElement("span");

    for (let i = 0; i < text.length; i++) {
        charElem = document.createElement("span");
        charElem.style.color = "hsl(" + (360 * i / text.length) + ",80%,50%)";
        charElem.innerHTML = text[i];
        element.appendChild(charElem);
    }

    // rainbowTextTarget.addEventListener('mouseout', reset);

    // function reset() {
    //     for (let i = 0; i <= text.length; i++) {
    //     charElem.style.display = 'none';
    //     console.log(charElem);
    // }}

    // function reset() {
    //     for (let i = 0; i < text.length; i++) {
    //         charElem = document.createElement("span");
    //         charElem.style.color = 'black';
    //         charElem.innerHTML = text[i];
    //         element.appendChild(charElem);
    // }
}