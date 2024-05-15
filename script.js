const dias = document.getElementById('dias');
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const añoActual = new Date().getFullYear();

const PrimaveraSoundContador = new Date('May 29, 2024 00:00:00');


// Actualiza el tiempo actual
function updateCountdown() {
	const tiempoActual = new Date();
	const diff = PrimaveraSoundContador - tiempoActual;

	const d = Math.floor(diff / 1000 / 60 / 60 / 24);
	const h = Math.floor(diff / 1000 / 60 / 60) % 24;
	const m = Math.floor(diff / 1000 / 60) % 60;
	const s = Math.floor(diff / 1000) % 60;

	dias.innerHTML = d;
	horas.innerHTML = h < 10 ? '0' + h : h;
	minutos.innerHTML = m < 10 ? '0' + m : m;
	segundos.innerHTML = s < 10 ? '0' + s : s;
}

setInterval(updateCountdown, 1000);