const btn = document.getElementById("calc-btn");
const input = document.getElementById("birthdate");
const result = document.getElementById("result");
let selectedDate;

input.addEventListener("change", () => {
  selectedDate = input.value;
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const birthDate = selectedDate.split("-");

  const dt = luxon.DateTime.now();
  const dur = luxon.Duration.fromObject({
    year: birthDate[0],
    month: birthDate[1],
    day: birthDate[2],
  });

  const year = dt.minus(dur).year;
  const month = dt.minus(dur).month;

  result.innerHTML = `
    You are <b>${year} years ${month} months</b> old
  `;
});
