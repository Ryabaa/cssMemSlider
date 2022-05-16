let slider = document.querySelector(".slider");
let sliderLine = document.querySelector(".slider-line");
let memeText = document.querySelector(".meme-text");
let control = document.querySelector(".control");

const getSliderImages = () => document.querySelectorAll(".slider__image");
const getSliderContainers = () => document.querySelectorAll(".slider__container");
const getSliderWidth = () => slider.offsetWidth;

const numberOfImages = 4;
const memeTextsList = ["JS logic", "JS equality", "Frameworks pain", "More node packages modules!"];

let sliderCount = 0;

for (let imageIndex = 0; imageIndex < numberOfImages; imageIndex++) {
    addSliderImages(imageIndex);
    addControlButtons();
}

let buttonsList = document.querySelectorAll(".control-button");

window.addEventListener("resize", handleResize);
handleChangeImage(buttonsList[0], 0);

buttonsList.forEach((button, buttonIndex) => {
    button.addEventListener("click", () => handleChangeImage(button, buttonIndex));
});

function addSliderImages(imageIndex) {
    let newSliderContainer = document.createElement("div");
    newSliderContainer.classList.add("slider__container");
    sliderLine.appendChild(newSliderContainer);

    let newSliderImage = document.createElement("img");
    newSliderImage.classList.add("slider__image");
    newSliderImage.src = `./assets/meme${imageIndex}.jpg`;
    newSliderContainer.appendChild(newSliderImage);
    handleResize();
}

function addControlButtons() {
    let newControlButton = document.createElement("button");
    newControlButton.classList.add("control-button");
    control.appendChild(newControlButton);
}

function handleChangeImage(button, buttonIndex) {
    sliderCount = buttonIndex;
    buttonsList.forEach((button) => {
        button.classList.remove("control-button--active");
    });
    button.classList.add("control-button--active");
    memeText.innerText = memeTextsList[sliderCount];
    moveSlider();
}

function moveSlider() {
    const sliderWidth = getSliderWidth();
    sliderLine.style.transform = `translate(-${sliderWidth * sliderCount}px)`;
}

function handleResize() {
    const sliderWidth = getSliderWidth();

    let sliderImages = getSliderImages();
    sliderImages.forEach((image) => {
        image.style.maxWidth = `${sliderWidth}px`;
    });

    let sliderContainers = getSliderContainers();
    sliderContainers.forEach((container) => {
        container.style.minWidth = `${sliderWidth}px`;
    });
    moveSlider();
}
