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
    errorMessages.push(
      "Please enter a valid Full Name (only letters and spaces)."
    );
  }

  if (!emailPattern.test(email)) {
    errorMessages.push("Please enter a valid Email Address.");
  }

  if (!phonePattern.test(phone)) {
    errorMessages.push(
      "Please enter a valid Phone Number (starting with 06 or 07)."
    );
  }

  if (errorMessages.length === 0) {
    text.innerHTML = "";
    document.getElementById("form").submit();
  } else {
    text.innerHTML = errorMessages.join("<br>");
    text.style.color = "#ee0000";
  }
}
