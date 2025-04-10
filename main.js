import { DateTime } from "https://cdn.jsdelivr.net/npm/luxon@3.3.0/build/es6/luxon.min.js";

function calculateAge(birthdate) {
  const birthDate = DateTime.fromISO(birthdate);

  const dt = DateTime.now();
  const diff = dt.diff(birthDate, ["years", "months"]);

  const years = Math.floor(diff.years);
  const months = Math.floor(diff.months);

  return { years, months };
}

function handleCalculateClick(e) {
  e.preventDefault();

  const input = document.getElementById("birthdate");
  const result = document.getElementById("result");

  const selectedDate = input.value;

  if (!selectedDate) {
    result.innerHTML = "<b>Please select a date!</b>";
    return;
  }

  const { years, months } = calculateAge(selectedDate);

  result.innerHTML = `
      You are <b>${years} years ${months} months</b> old
    `;
}

document
  .getElementById("calc-btn")
  .addEventListener("click", handleCalculateClick);
