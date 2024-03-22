const featureOption = document.querySelectorAll(".feature__option");
const featureTitle = document.querySelector(".feature__title");
const featureSubtitle = document.querySelector(".feature__subtitle");
const featureImg = document.querySelector(".feature__img").firstElementChild;

const options = [
  {
    title: "Bookmark in one click",
    subtitle:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    img: `images/illustration-features-tab-1.svg`,
  },
  {
    title: "Intelligent search",
    subtitle:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    img: `images/illustration-features-tab-2.svg`,
  },
  {
    title: "Share your bookmarks",
    subtitle:
      "Easily share your bookmarks and collections with others. Create a sharable link that you can send at the click of a button.",
    img: `images/illustration-features-tab-3.svg`,
  },
];

featureOption.forEach((option) => {
  option.addEventListener("click", () => {
    if (option.classList.contains("feature-active"))
      option.classList.toggle("featur-active");
    else {
      featureOption.forEach((option) =>
        option.classList.remove("feature-active")
      );
      option.classList.add("feature-active");
    }
    function assignOption() {
      featureTitle.innerHTML = options[option.value - 1].title;
      featureSubtitle.innerHTML = options[option.value - 1].subtitle;
      featureImg.src = options[option.value - 1].img;
    }
    assignOption();
  });
});

// extensions

const extensionHidden = document.querySelectorAll(".extension-hidden");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("extension-reveal");
  });
});

extensionHidden.forEach((extension) => observer.observe(extension));

// faq
const faqQuestions = document.querySelectorAll(".faq__questions");
faqQuestions.forEach((question) =>
  question.addEventListener("click", () => {
    question.nextElementSibling.classList.toggle("open");
    if (question.nextElementSibling.classList.contains("open")) {
      faqQuestions.forEach((question) =>
        question.nextElementSibling.classList.remove("open")
      );
      question.nextElementSibling.classList.toggle("open");
    }
  })
);

//regex

const emailValue = document.querySelector(".banner__input");
const emailBtn = document.querySelector(".banner__btn");

const errors = document.querySelector(".banner__errors");
const errorBanner = document.querySelector(".error-banner");
const errorImg = document.querySelector(".error-img");

function isEmail(input) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
}

function validate(e) {
  const input = emailValue.value.trim();
  if (!isEmail(input)) {
    errorBanner.style.display = "block";
    errorImg.style.display = "block";
    emailValue.classList.add("error-input");
    if (window.innerWidth < 769) errors.style.marginBottom = "2rem";
  } else {
    errorBanner.style.display = "none";
    errorImg.style.display = "none";
    emailValue.classList.remove("error-input");
    emailValue.value = "";
    errors.style.marginBottom = "0rem";
  }
}

emailBtn.addEventListener("click", (e) => {
  e.preventDefault();
  validate();
});

// menu mobile

const hamburger = document.querySelector(".header__hamburger");
const mobileMenu = document.querySelector(".header__list");
const mobileItem = document.querySelectorAll(".header__item");
const header = document.querySelector(".header");

isOpen = false;
hamburger.addEventListener("click", () => {
  isOpen = !isOpen;
  if (isOpen) {
    hamburger.src = "images/icon-close.svg";
    header.classList.add("show-menu");
    mobileMenu.classList.add("show-menu");
    document.body.style.overflowY = "hidden";
    mobileItem.forEach((item) =>
      item.addEventListener("click", () => {
        mobileMenu.classList.remove("show-menu");
        header.classList.remove("show-menu");
        document.body.style.overflowY = "auto";
        hamburger.src = "images/icon-hamburger.svg";
        isOpen = false;
      })
    );
  } else {
    hamburger.src = "images/icon-hamburger.svg";
    mobileMenu.classList.remove("show-menu");
    header.classList.remove("show-menu");
    document.body.style.overflowY = "auto";
  }
});
