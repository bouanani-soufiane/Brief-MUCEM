const navEl = document.querySelector(".nav");
const hamburgerEl = document.querySelector(".hamburger");
const navItemEls = document.querySelectorAll(".nav__item");

hamburgerEl.addEventListener("click", () => {
  navEl.classList.toggle("nav--open");
  hamburgerEl.classList.toggle("hamburger--open");
});

navItemEls.forEach((navItemEl) => {
  navItemEl.addEventListener("click", () => {
    navEl.classList.remove("nav--open");
    hamburgerEl.classList.remove("hamburger--open");
  });
});

const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    const currentlyActiveAccordionItemHeader = document.querySelector(
      ".accordion-item-header.active"
    );
    if (
      currentlyActiveAccordionItemHeader &&
      currentlyActiveAccordionItemHeader !== accordionItemHeader
    ) {
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});

function validateForm(event) {
  event.preventDefault();

  let fullName = document.getElementById("full-name").value;
  let cin = document.getElementById("cin").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let text = document.getElementById("text");

  const emailPattern = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
  const phonePattern = /^(06|07)\d{8}$/;
  const namePattern = /^[A-Za-z ]+$/;

  let errorMessages = [];

  if (!namePattern.test(fullName)) {
    errorMessages.push("Please enter a valid Name.");
  }

  if (!emailPattern.test(email)) {
    errorMessages.push("Please enter a valid Email Address.");
  }

  if (!phonePattern.test(phone)) {
    errorMessages.push("Enter a valid Phone Number.");
  }

  if (errorMessages.length === 0) {
    text.innerHTML = "";
    Swal.fire({
      icon: "success",
      title: "sign up succeed",
      timer: 3500,
      closeOnConfirm: false,
    });

    setTimeout(function () {
      document.getElementById("form").submit();
    }, 1500);
  } else {
    text.innerHTML = errorMessages.join("<br>");
    text.style.color = "#ee0000";
  }
}

function getInTouch(event) {
  event.preventDefault();

  const fullName = document.getElementById("full-name").value;
  const email = document.getElementById("email").value;
  const comment = document.getElementById("comment").value;

  const fullNameRegex = /^[A-Za-z\s]+$/;
  if (!fullNameRegex.test(fullName)) {
    Swal.fire({
      icon: "error",
      title: "Validation Error",
      text: "Full Name can only contain letters and spaces.",
    });
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    Swal.fire({
      icon: "error",
      title: "Validation Error",
      text: "Invalid email address.",
    });
    return;
  }

  const wordCount = comment.trim().length;
  if (wordCount < 10 || wordCount > 200) {
    Swal.fire({
      icon: "error",
      title: "Validation Error",
      text: "Comment must be between 10 and 200 words.",
    });
    return;
  }
  Swal.fire({
    icon: "success",
    title: "sign up succeed",
    timer: 3500,
    closeOnConfirm: false,
  });
  document.getElementById("form").submit();
}
