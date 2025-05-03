// Get the modal
const modal1 = document.getElementById("myModal1");
const modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
const btn1 = document.getElementById("openModalProject1");
const btn2 = document.getElementById("openModalProject2");
const btn3 = document.getElementById("openModalProject3");
const btn4 = document.getElementById("openModalProject4");

// Get the <span> element that closes the modal
const closeButtons = document.getElementsByClassName("close");

// Functions to open modals
btn1.onclick = function () {
  modal1.style.display = "block";
};

function openModal(event) {
  modal2.style.display = "block";
  modal2.querySelector("h2").innerText = event.target.dataset.title;
  modal2.querySelector("p").innerText = event.target.dataset.text;
}

btn2.onclick = openModal;
btn3.onclick = openModal;
btn4.onclick = openModal;

// Functions to close modals when clicking the "x"
closeButtons[0].onclick = function () {
  modal1.style.display = "none";
};
closeButtons[1].onclick = function () {
  modal2.style.display = "none";
};

// Close modals when clicking outside of them
window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("carousel-slide");
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function openTab(evt, tabName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting normally

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const feedback = document.getElementById("formFeedback");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !message) {
    feedback.textContent = "Name and message cannot be empty.";
    feedback.className = "error";
  } else if (!emailRegex.test(email)) {
    feedback.textContent = "Please enter a valid email address.";
    feedback.className = "error";
  } else {
    feedback.textContent = "Thank you! Your message has been sent.";
    feedback.className = "success";

    // Optionally, clear the form
    document.getElementById("contactForm").reset();
  }
});
