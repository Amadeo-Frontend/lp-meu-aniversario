// Define a data de contagem regressiva
const countDownDate = new Date("Oct 9, 2023 20:00:00").getTime();

// Atualiza a contagem regressiva a cada segundo
const x = setInterval(function () {
  // Pega a data e hora atual
  const now = new Date().getTime();

  // Calcula a diferença entre a data de contagem regressiva e a data atual
  const distance = countDownDate - now;

  // Calcula dias, horas, minutos e segundos restantes
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Mostra a contagem regressiva no elemento HTML
  document.getElementById("countdown").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // Se a contagem regressiva acabar, exibe a mensagem de "Feliz Aniversário!"
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Feliz Aniversário!";
  }
}, 1000);
