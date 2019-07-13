// Load your images on page-load
function preloader() {
    const imagesPaths = [
           "./img/curtains.jpg",
           "./img/solar.jpg",
           "./img/fireplace.jpg"
        ];
    const images = [];
        for (let i = 0; i < imagesPaths.length; i++) {
            images[i] = new Image();
            images[i].src = imagesPaths[i];
        }

    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};
window.addEventListener("load", preloader);

/* Get all buttons in a NODE LIST of buttons (array like structure) */
let btns = document.querySelectorAll('button');

/* 
    Complete your resource-object that will store the dynamic content.
    Resource object should 3 sub-objects. Give your sub-objects
    meaningful names. Every sub-object should have the following
    properties headingContent, bodyText, imgUrl and imgAlt. */

let dataResource = [
    {
        imgUrl: "./img/curtains.jpg",
        heading: "Keep Out Sunlight",
        bodyText: "<p>To reduce energy usage, sahe your windows to keep out sunlight. Do this by installing blinds or curtains. When you use these two things in tandem, you will find your heating and cooling bills will plummet. You will save energy and money.</p>"

    },
    {
        imgUrl: "./img/solar.jpg",
        heading: "Switch to Solar Heating System",
        bodyText: "<p>Switch to solar heating systems for water to lower your cost of indoor water. Traditional gas and electricity are not that efficient, but solar-powered water heaters glean the sun’s natural energy to maintain even temperatures. These types of upgrades, while more costly at first, may qualify you for a green energy deduction on your taxes.</p>"
    },
    {
        imgUrl: "./img/fireplace.jpg",
        heading: "Avoid Electric Heaters",
        bodyText: "<p>Electric heaters are an energy hog and should be avoided as much as possible in the winter. They are not environmentally friendly.</p><p>You can wear warmer clothing instead, and warm up your home with your fireplace. You want to remember that sleeping in cooler air is better for your breathing, and it also prevents the airways from becoming dry.</p>"
    }
];

/* 
    Get the reference to your HTML-container
    that will be dynamically loaded from the resource-object. */

let $content = document.querySelector(".content");

/* 
    The first button in a NODE LIST of buttons will initially 
    have the id: active-button - this will uniquely style 
    the active button (CSS rule). */

/* The first content from the
 resource-object will be loaded on the page load:
 `<h1>${headingContent}</h1>
  <img src="${imgUrl}" alt="${imgAlt}">
  <p>${bodyText}</p>` */
$content.innerHTML = `<div class="add">
                        <div class="imgfd">
                        <img src="${dataResource[0].imgUrl}" alt="Keep Out Sunlight">
                        </div>
                        <div class="text">
                        <h3>${dataResource[0].heading}</h3>
                         <p>${dataResource[0].bodyText}</p>
                        </div>
                        </div>`;

/* Start your handleSelection function here. */
function handleEvent(ev) {
    /*  Remove the id active-button from the element that
        contains it prior to the click-event. 
        This will require the loop throught the NODE LIST of buttons. 
        Inside the loop, use conditional and the element object method
        hasAttribute() to check if the current button in the loop containes the id.
        If it does, use element-object property removeAttribute()
        to remove the id. */
    for (let i = 0; i < btns.length; i++) {
        if (btns[i].hasAttribute("id")) {
            btns[i].removeAttribute("id");
            console.log(btns[i]);
        }
    }

    let currentItem = ev.currentTarget;
    /*Use the element-object method setAttribute() to set the id active-button 
        to the currently clicked button. */
    currentItem.setAttribute("id", "active");
}

for (let btn of btns) {
    btn.addEventListener("click", handleEvent);
}


function eventHandler(ev) {

    let clickedBtn = ev.currentTarget;
    let btnText = clickedBtn.dataset.btn;

    /* 
        Use conditional and event-object to check which button is clicked
        and based on that, create HTML with the data inside the backticks:
        `<h1>${headingContent}</h1>
         <img src="${imgUrl}" alt="${imgAlt}">
         <p>${bodyText}</p>`
        Assign this content to to your HTML-container that will 
        be dynamically loaded (you already got the reference to 
        this container before you started the function handleSelection) */

    if (btnText === "page1") {
        $content.innerHTML = `<div class="add">
                            <div class="imgfd">
                            <img src="${dataResource[0].imgUrl}" alt="Keep Out Sunlight">
                              </div>
                                <div class="text">
                              <h3>${dataResource[0].heading}</h3>
                              <p>${dataResource[0].bodyText}</p>
                                 </div></div>`;
    } else if (btnText === "page2") {
        $content.innerHTML = `<div class="add">
                        <div class="imgfd">
                        <img src="${dataResource[1].imgUrl}" alt="Solar Heating System">
                            </div>
                            <div class="text">
                              <h3>${dataResource[1].heading}</h3>
                              <p>${dataResource[1].bodyText}</p>
                                </div></div>`;
    } else {
        $content.innerHTML = `<div class="add">
                        <div class="imgfd">
                    <img src="${dataResource[2].imgUrl}" alt="Avoid Electrical Heaters">
                            </div>
                            <div class="text">
                            <h3>${dataResource[2].heading}</h3>
                              <p>${dataResource[2].bodyText}</p>
                                </div></div>`;
    }
    /* 
        Close your handleSelection function here. */

}
/* 
    Register all buttons to click event. The event-handler handleSelection will listen 
    for this event to happen. */
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", eventHandler);
}