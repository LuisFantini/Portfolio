// Abre menu mobile
function ativaMenu() {
  const menu = document.querySelector('.links-menu');
  const icon = document.querySelector('.icone-mobile');
  menu.classList.toggle('ativo');
  icon.classList.toggle('ativo');
}

// Modal
document.querySelectorAll('.detalhes-container').forEach((card) => {
  const openBtn = card.querySelector('#open-modal');
  const closeBtn = card.querySelector('#close-modal');
  const modal = card.querySelector('#modal');
  const fade = card.querySelector('#fade');

  if (!openBtn || !closeBtn || !modal || !fade) return;

  const toggle = () => {
    modal.classList.toggle('hide');
    fade.classList.toggle('hide');
  };

  openBtn.addEventListener('click', toggle);
  closeBtn.addEventListener('click', toggle);
  fade.addEventListener('click', toggle);
});


// EmailJS
(function () {
  emailjs.init({
    publicKey: "GoqhGhuMUNsj44mkT"
  });
})();

document.getElementById("form-contato").addEventListener("submit", function (event) {
  event.preventDefault();

  emailjs.sendForm("service_e5trhvm", "template_4hx8ig9", this)
    .then(() => {
      alert("Mensagem enviada com sucesso!");
      this.reset();
    }, (error) => {
      alert("Erro ao enviar mensagem: " + JSON.stringify(error));
    });
});