const logoContainer = document.getElementById("logo");
const image = document.getElementById("image");
const imageSrcset = document.getElementById("imgSrcet");
const titleContainer = document.getElementById("heading");
const descriptionContainer = document.getElementById("description");
const navbar = document.getElementById("navbar");
const navbarList = document.getElementById("navbar-list");

const hamburgerContainer = document.getElementById("hamburger-container");
const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close");
const overlay = document.getElementById("overlay");
const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");

let postNumber = 0;

const content = [
  {
    desktopImg: "../images/desktop-image-hero-1.jpg",
    mobileImg: "../images/mobile-image-hero-1.jpg",
    heading: "Discover innovative ways to decorate",
    description:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    desktopImg: "../images/desktop-image-hero-2.jpg",
    mobileImg: "../images/mobile-image-hero-2.jpg",
    heading: "We are available all across the globe",
    description:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    desktopImg: "../images/desktop-image-hero-3.jpg",
    mobileImg: "../images/mobile-image-hero-3.jpg",
    heading: "Manufactured with the best materials",
    description:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

function applyAnimation(isLeft) {
  image.classList.remove("scale-up-hor-left", "scale-up-hor-right");
  titleContainer.classList.remove("scale-up-hor-left", "scale-up-hor-right");
  descriptionContainer.classList.remove(
    "scale-up-hor-left",
    "scale-up-hor-right"
  );
  void image.offsetWidth;
  if (isLeft) {
    image.classList.add("scale-up-hor-left");
    titleContainer.classList.add("scale-up-hor-left");
    descriptionContainer.classList.add("scale-up-hor-left");
  } else {
    image.classList.add("scale-up-hor-right");
    titleContainer.classList.add("scale-up-hor-right");
    descriptionContainer.classList.add("scale-up-hor-right");
  }
}

hamburger.addEventListener("click", () => {
  hamburgerContainer.classList.add("hamburger__container--active");
  hamburger.style.display = "none";
  logoContainer.style.display = "none";
  close.style.display = "flex";
  navbar.classList.add("navbar--active");
  navbarList.classList.add("navbar__list--active");
  overlay.style.display = "block";
  document
    .querySelector(".arrows__container")
    .classList.add("arrows--disabled");
});

close.addEventListener("click", () => {
  hamburgerContainer.classList.remove("hamburger__container--active");
  hamburger.style.display = "flex";
  logoContainer.style.display = "flex";
  close.style.display = "none";
  navbar.classList.remove("navbar--active");
  navbarList.classList.remove("navbar__list--active");
  overlay.style.display = "none";
  document
    .querySelector(".arrows__container")
    .classList.remove("arrows--disabled");
});

leftArrow.addEventListener("click", () => {
  if (postNumber === 0) postNumber = 2;
  else postNumber--;
  const { desktopImg, mobileImg, heading, description } = content[postNumber];
  if (window.matchMedia("(max-width: 448px)").matches)
    imageSrcset.srcset = mobileImg;
  else image.src = desktopImg;
  titleContainer.textContent = heading;
  descriptionContainer.textContent = description;
  applyAnimation(false);
});

rightArrow.addEventListener("click", () => {
  if (postNumber === 2) postNumber = 0;
  else postNumber++;
  const { desktopImg, mobileImg, heading, description } = content[postNumber];
  if (window.matchMedia("(max-width: 448px)").matches)
    imageSrcset.srcset = mobileImg;
  else image.src = desktopImg;
  titleContainer.textContent = heading;
  descriptionContainer.textContent = description;
  applyAnimation(true);
});
