import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import JustValidate from 'just-validate';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "/src/sass/style.scss";

const burger = document.querySelector(".burger"),
	close = document.querySelector(".header__menu-close"),
	menu = document.querySelector(".header__menu");

burger.addEventListener("click", () => {
	menu.classList.add("header__menu_active");
	document.body.style.overflow = "hidden";
});

close.addEventListener("click", () => {
	menu.classList.remove("header__menu_active");
	document.body.style.overflow = "";
});

try {
	new Swiper ('.works__slider', {
	slidesPerView: 1,
	loop: true,
	pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
	navigation: {
    nextEl: '.icon-right-open',
    prevEl: '.icon-left-open',
  },
		breakpoints: {
			// when window width is >= 1200px
			1200: {
				slidesPerView: 3,
				spaceBetween: 5
			},
			1920: {
				slidesPerView: 3,
				spaceBetween: 35
			},
		},
  modules: [Navigation, Pagination],
});

} catch(e) {}

try {
	const tabs = document.querySelectorAll(".catalog__tab");
	const contents = document.querySelectorAll(".catalog__content");

	tabs.forEach((tab, index) => {
		tab.addEventListener("click", () => {

			tabs.forEach((t) => t.classList.remove("catalog__tab_active"));
			contents.forEach((c) => (c.style.display = "none"));

			tab.classList.add("catalog__tab_active");
			contents[index].style.display = "flex";
		});
	});

	contents.forEach((c, i) => (c.style.display = i === 0 ? "flex" : "none"));
} catch (e) {}


try {
	const validator = new JustValidate('.touch__form', {submitFormAutomatically: true});

	validator
  .addField('#name', [
    {
      rule: 'required',
			errorMessage: "Please fill the name!",
    },
    {
      rule: 'minLength',
      value: 3,
			errorMessage: "3 chars minimum!",
    },
  ])

	.addField('#email', [
    {
      rule: 'required',
    },
    {
      rule: 'email',
			errorMessage: "Email has invalid format!",
    },
  ])

	.addField('#question', [
    {
      rule: 'required',
    },
		{
			rule: "minLength",
			value: 5,
		},
  ],
		{
			errorsContainer: document
			.querySelector("#question")
			.parentElement.querySelector(".error-message"),
		} 
)

	.addField('#terms-touch', [
    {
    	rule: 'required',
    }, 
  ],
	{
		errorsContainer: document
		.querySelector("#terms-touch")
		.parentElement.parentElement.querySelector(".checkbox-error-message"),
	} 
)
} catch (e) {}

try {
	const footerValidator = new JustValidate(".footer__form", {submitFormAutomatically: true})

	footerValidator
	.addField('#footer__email', [
    {
      rule: 'required',
    },
		{
      rule: 'email',
			errorMessage: "Email has invalid format!",
    },
  ],
	{
		errorsContainer: document
		.querySelector("#footer__email")
		.parentElement.querySelector(".email-error-message"),
	}
)

	.addField('#footer__checkbox_id', [
		{
    	rule: 'required',
    }, 
  ],
	{
		errorsContainer: document
		.querySelector("#footer__checkbox-input")
		.parentElement.parentElement.querySelector(".check-error-message"),
	}
)

} catch (e) {}




