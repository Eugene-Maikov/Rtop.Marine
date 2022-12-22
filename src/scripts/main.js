// phone mask
const mask = (input) => {
  let matrix = "+7 (___) ___-__-__",
    i = 0,
    def = matrix.replace(/\D/g, ""),
    val = input.value.replace(/\D/g, "");
  if (def.length >= val.length) val = def;
  input.value = matrix.replace(/./g, function (a) {
    return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
  });
};
let number = document.getElementById("questions-phone");
number.addEventListener("input", mask.bind(null, number), false);


// Submitting a form
const form = document.querySelector('.form');
const inputName = document.querySelector('#questions-name');
const inputPhone = document.querySelector('#questions-phone');
const spanErrorName = document.querySelector('.form__error-name');
const spanErrorPhone = document.querySelector('.form__error-phone');

form.addEventListener("submit", (e) => {

  if (inputPhone.value === "" && inputName.value === "") {
    e.preventDefault();
    inputName.classList.add("not-filled");
    inputPhone.classList.add("not-filled");
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

    spanErrorName.innerText = "";
    spanErrorPhone.innerText = "";
  }
});

form.addEventListener('submit', function (event){
  event.preventDefault()

  const inputCheckbox = document.querySelector('#privacy');
  const labelCheckbox = document.querySelector('.span__checkbox');


  if (!inputCheckbox.checked) {
    labelCheckbox.classList.add('span__checkbox--error')

  } else {
    form.submit()
  }



})
