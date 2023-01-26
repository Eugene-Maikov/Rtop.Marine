"use strict";

// Максимальное кол-во строк
var newsTitle = document.querySelectorAll('.news__title');
var newsText = document.querySelector('.news__text');
newsTitle.forEach(function (item) {
  console.log(item.offsetHeight);
}); // phone mask

var mask = function mask(input) {
  var matrix = "+7 (___) ___-__-__",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = input.value.replace(/\D/g, "");
  if (def.length >= val.length) val = def;
  input.value = matrix.replace(/./g, function (a) {
    return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
  });
};

var number = document.getElementById("questions-phone");
number.addEventListener("input", mask.bind(null, number), false); // Submitting a form

var form = document.querySelector('.form');
var inputName = document.querySelector('#questions-name');
var inputPhone = document.querySelector('#questions-phone');
var spanErrorName = document.querySelector('.form__error-name');
var spanErrorPhone = document.querySelector('.form__error-phone');
var inputCheckbox = document.querySelector('#privacy');
var labelCheckbox = document.querySelector('.span__checkbox');
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (inputPhone.value === "" || inputName.value === "" || !inputCheckbox.checked) {
    e.preventDefault();
    inputName.classList.add("not-filled");
    inputPhone.classList.add("not-filled");
    labelCheckbox.classList.add('span__checkbox--error');
    spanErrorName.innerText = "необходимо заполнить поле";
    spanErrorPhone.innerText = "необходимо заполнить поле";
  } else if (inputPhone.value === "") {
    e.preventDefault();
    inputPhone.classList.add("not-filled");
    spanErrorPhone.innerText = "необходимо заполнить поле";
  } else if (inputPhone.value.length < 18) {
    e.preventDefault();
    inputPhone.classList.add("not-filled");
    spanErrorPhone.innerText = "поле заполнено некорректно";
  } else if (inputName.value === "") {
    e.preventDefault();
    inputName.classList.add("not-filled");
    spanErrorName.innerText = "необходимо заполнить поле";
  } else {
    inputName.classList.remove("not-filled");
    inputPhone.classList.remove("not-filled");
    labelCheckbox.classList.remove('span__checkbox--error');
    spanErrorName.innerText = "";
    spanErrorPhone.innerText = "";
    form.submit();
  }
});
//# sourceMappingURL=main.js.map
