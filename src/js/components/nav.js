// Navigation on Mobile

const html = document.querySelector("html");
const navContainer = document.querySelector(".nav__container");
const navBtn = document.querySelector(".nav__hamburger-btn");
const navMenu = document.querySelector(".nav__menu");
const navMenuItems = document.querySelectorAll(".nav__menu-item");

navBtn.addEventListener("click", () => {
	if (navBtn.classList.contains("is-active")) {
		navBtn.classList.remove("is-active");
		navContainer.classList.remove("nav__container--menu-active");
		navMenu.classList.remove("nav__menu--active");
		html.style.overflow = "visible";
	} else {
		navBtn.classList.add("is-active");
		navContainer.classList.add("nav__container--menu-active");
		navMenu.classList.add("nav__menu--active");
		html.style.overflow = "hidden";
	}
});

navMenuItems.forEach((item) => {
	item.addEventListener("click", () => {
		navBtn.classList.remove("is-active");
		navContainer.classList.remove("nav__container--menu-active");
		navMenu.classList.remove("nav__menu--active");
		html.style.overflow = "visible";
	});
});

// window.addEventListener("scroll", () => {
// 	let currentScroll = document.documentElement.scrollTop;

// 	if (currentScroll == 0) {
// 		navMobile.classList.remove("nav-m--hidden");
// 	}

// 	if (currentScroll != 0) {
// 		navMobile.classList.add("nav-m--hidden");
// 	}
// });
