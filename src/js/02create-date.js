///////* GENERATE DATE AND PUT IT INTO DOM *//////////

const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const weekDays = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];

const date = new Date();
day.innerHTML = date.getDate();
month.innerHTML = months[date.getMonth()];
year.innerHTML = date.getFullYear();
weekDay.innerHTML = weekDays[date.getDay()];
