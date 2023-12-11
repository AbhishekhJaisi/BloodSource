// const wrapper = document.querySelector('.wrapper');
// const loginLink = document.querySelector('.login-link');
// const registerLink = document.querySelector('.register-link');
// const btnPopup = document.querySelector('.btnLogin-popup');
// const iconClose = document.querySelector('.icon-close');

// registerLink.addEventListener('click', ()=> {
//     event.preventDefault();
//     wrapper.classList.add('act');
// });

// loginLink.addEventListener('click', ()=> {
//     event.preventDefault();
//     wrapper.classList.remove('act');
// });

// btnPopup.addEventListener('click', ()=> {
//     event.preventDefault();
//     wrapper.classList.add('act-popup');
// });

// iconClose.addEventListener('click', ()=> {
//     event.preventDefault();
//     wrapper.classList.remove('act-popup');
// });

const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icons-close");


registerLink.addEventListener("click", (event) => {
  event.preventDefault();
  wrapper.classList.add("act");
  centerWrapper();
});

loginLink.addEventListener("click", (event) => {
  event.preventDefault();
  wrapper.classList.remove("act");
  centerWrapper();
});

btnPopup.addEventListener("click", (event) => {
  event.preventDefault();
  wrapper.classList.add("act-popup");
  centerWrapper();
});


iconClose.addEventListener("click", (event) => {
  event.preventDefault();
  wrapper.classList.remove("act-popup");
});


function centerWrapper() {
    const wrapperWidth = wrapper.offsetWidth;
    const wrapperHeight = wrapper.offsetHeight;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
  
    const leftPosition = (windowWidth - wrapperWidth) / 2;
    const topPosition = (windowHeight - wrapperHeight) / 2;
  
    wrapper.style.left = leftPosition + "px";
    wrapper.style.top = topPosition + "px";
  }

  function hideOverlay() {
    // Hide the overlay and login wrapper
    overlay.style.display = "none";
    wrapper.style.display = "none";
}

function updateWrapperPosition() {
    // Update the login wrapper position on window resize
    if (wrapper.style.display === "block") {
        centerWrapper();
    }
}

// Open login form on button click
loginButton.addEventListener("click", function () {
    centerWrapper();
});

// Close login form on close button click
iconClose.addEventListener("click", function () {
    hideOverlay();
});

// Update login wrapper position on window resize
window.addEventListener("resize", function () {
    updateWrapperPosition();
});
