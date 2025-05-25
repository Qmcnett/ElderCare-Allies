//toggle to dark mode
let themeButton = document.getElementById("theme-button");
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
}
themeButton.addEventListener("click", toggleDarkMode);

// Initialize count of signatures
let count = 3;

// Function to add signature and update count
const addSignature = () => {
  const name = document.getElementById("fname").value;
  const hometown = document.getElementById("hometown").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const interest = document.getElementById("interest").value;


  const signature = document.createElement("p");

  if (name && hometown && email && phone && interest) {
    // Add signature
    signature.textContent = `🤝 ${name} from ${hometown} join the community.`;
    const signaturesSection = document.querySelector(".signatures");
    signaturesSection.appendChild(signature);

    // Remove old counter
    const oldCounter = document.getElementById("counter");
    oldCounter.remove();

    // Increment count
    count++;

    // Add new counter
    const counter = document.createElement("p");
    counter.id = "counter";
    counter.textContent = `🖊️ ${count} people have signed up to support this cause.`;
    signaturesSection.appendChild(counter);
  }
}

// Add event listener to the sign now button
const signNowButton = document.getElementById("sign-now-button");


// Validation form
const validateForm = (event) => {
  event.preventDefault();
  let containsErrors = false;

  let petitionInputs = document.getElementById("sign-petition").elements;

  // Validate the value of each input
  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    }
    else {
      petitionInputs[i].classList.remove('error');
    }
  }

  //Error message
  if (containsErrors) {
    alert("Please fill out all fields.");
  }

  //  Validate email
  const email = document.getElementById('email');
  if (!email.value.includes('.com')) {
    containsErrors = true;
    email.classList.add('error');

  }

  else {
    email.classList.remove('error');
  }
  // Validate phone number
  const phone = document.getElementById('phone');
  const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;

  if (!phone.value.match(phoneRegex)) {
    containsErrors = true;
    phone.classList.add('error');
    alert("Error Invalid Number.")

  }
  else {
    phone.classList.remove('error');
  }

  if (containsErrors == false) {
    addSignature();
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
    }
  }
  if (containsErrors == false) {
    addSignature();
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
    }
    modalToggle();
  }
}
// Event listener to the sign now button
signNowButton.addEventListener('click', validateForm);

// Animate revealable elements
let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
}

let revealableContainers = document.querySelectorAll(".revealable");
const reveal = () => {
  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      revealableContainers[i].classList.add("active");
    } else {
      revealableContainers[i].classList.remove("active");
    }
  }
}
window.addEventListener('scroll', reveal);

// Reduces motion on scroll
let reduceMotionButton = document.getElementById("motion-button")
const reduceMotion = () => {
  animation.transitionDuration = "0.5s";
  animation.transitionTimingFunction = "ease";
  animation.transitionProperty = "all";
  animation.transitionDelay = "0s";
  animation.initialOpacity = 1;
  animation.revealDistance = 0;
  for (let i = 0; i < revealableContainers.length; i++) {
    revealableContainers[i].style.transitionDuration = animation.transitionDuration;
    revealableContainers[i].style.transitionTimingFunction = animation.transitionTimingFunction;
    revealableContainers[i].style.transitionProperty = animation.transitionProperty;
    revealableContainers[i].style.transitionDelay = animation.transitionDelay;
    revealableContainers[i].style.opacity = animation.initialOpacity;
    revealableContainers[i].style.transform = `translateY(${animation.revealDistance}px)`;
  }
  reduceMotionButton.textContent = "Reduce Motion";
}
reduceMotionButton.addEventListener("click", reduceMotion);


// Modal toggle
const modalToggle = () => {
  const modal = document.getElementById("thanks-modal");
  setTimeout(() => {
  modal.style.display = "flex";
  }, 1000);
  setTimeout(() => {
    modal.style.display = "none";
  }, 4000);
// Event listener for modal close
modal.addEventListener("click", modalClose);
}
// Close modal
const modalClose = () => {
  const modal = document.getElementById("thanks-modal");
  modal.style.display = "none";
}

