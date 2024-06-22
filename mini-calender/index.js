const monthNameEl = document.getElementById("monthName");
const dayNameEl = document.getElementById("day-name");
const dayNameEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");

const date = new Date();
const month = date.getMonth()
monthNameEl.innerText = date.toLocaleString("en", {month:"long"})

dayNameEl.innerText = date.toLocaleString("en",{weekday : "long"})

dayNameEl.innerText = date.getDate()

yearEl.innerText =date.getFullYear()

