// Abre menu mobile
function ativaMenu() {
  const menu = document.querySelector('.links-menu');
  const icon = document.querySelector('.icone-mobile');
  menu.classList.toggle('ativo');
  icon.classList.toggle('ativo');
}

// Objeto de traduções
const translations = {
  'pt': {
    // NAV
    "nav-sobre": "Sobre",
    "nav-skills": "Skills",
    "nav-projetos": "Projetos",
    "nav-contato": "Contato",

    // PERFIL
    "perfil-p1": "Olá, eu sou",
    "perfil-h1": "Luis Fantini",
    "perfil-p2": "Engenheiro de Software",
    "btn-curriculo": "Baixar Currículo",
    "btn-contato": "Contato Info",

    // SOBRE
    "sobre-p1": "Conheça mais",
    "sobre-h1": "Sobre mim",
    "sobre-h3": "Educação",
    "sobre-p-educacao": "Engenharia de Software – PUC Minas (Previsão de conclusão: 2027) <br>Ensino Médio – Colégio Santa Maria Floresta (2020-2023)",
    "sobre-texto": "Olá! Sou o Luis Fantini, nascido em 2005 e natural de Belo Horizonte. Atualmente, sou estudante de Engenharia de Software na PUC Minas, onde tenho me dedicado a desenvolver habilidades em programação e construção de soluções tecnológicas. Estou em busca de oportunidades para aplicar e expandir meu conhecimento na área de desenvolvimento de software.",

    // SKILLS
    "skills-p1": "Veja minhas",
    "skills-h1": "Skills",
    "frontend-h2": "Desenvolvimento Frontend",
    "backend-h2": "Desenvolvimento Backend",
    "outros-h2": "Outros",
    "skills-avancado": "Avançado",
    "skills-intermediario": "Intermediário",

    // PROJETOS
    "projetos-p1": "Veja meus",
    "projetos-h1": "Projetos",
    "btn-github": "GitHub",
    "btn-detalhes": "Ver Detalhes",
    "portfolio-h2": "Portfólio",
    "siteportfolio-h2": "Site Portfólio",
    "portfolio-texto": "O portfólio foi desenvolvido utilizando HTML5 para a estruturação das páginas, CSS3para a estilização e responsividade, além de JavaScript para adicionarinteratividade, como o funcionamento do menu mobile e dos modais de detalhes dos projetos.Também foram utilizadas bibliotecas como Bootstrap para facilitar acriação dos layouts e responsividade.",
    "worklink-h2": "WorkLink",
    "worklink-texto": "Este projeto foi desenvolvido para a disciplina Trabalho Interdisciplinar 2, no curso de Engenharia de Software. Trata-se de um sistema de divulgação de vagas de emprego, no qual empresas podem cadastrar e divulgar suas oportunidades, enquanto candidatos têm a possibilidade de visualizar e se candidatar às vagas disponíveis.<br> O sistema foi implementado utilizando as seguintes tecnologias: <br> - MySQL para gerenciamento do banco de dados; <br> - HTML, CSS e JavaScript para a construção do front-end; <br> - Bootstrap para estilização responsiva; <br> - Java com Spring Boot para o back-end e integração das funcionalidades. <br></br>",
    "modal-texto-generico": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, quam? Quas accusantium id cupiditate iste veritatis repudiandae odio dolore voluptas. Eum, deserunt quod. Sit similique laudantium assumenda repellat vel necessitatibus.",

    // CONTATO
    "contato-p1": "Gostou do que viu?",
    "contato-h1": "Entre em contato",

    // FOOTER
    "footer-copy": "Copyright &#169; 2025 Luis Fantini. Todos Direitos Reservados."
  },
  'en': {
    // NAV
    "nav-sobre": "About",
    "nav-skills": "Skills",
    "nav-projetos": "Projects",
    "nav-contato": "Contact",

    // PERFIL
    "perfil-p1": "Hello, I am",
    "perfil-h1": "Luis Fantini",
    "perfil-p2": "Software Engineer",
    "btn-curriculo": "Download Resume",
    "btn-contato": "Contact Info",

    // SOBRE
    "sobre-p1": "Get To Know More",
    "sobre-h1": "About Me",
    "sobre-h3": "Education",
    "sobre-p-educacao": "Software Engineering – PUC Minas (Expected completion: 2027) <br>High School – Colégio Santa Maria Floresta (2020-2023)",
    "sobre-texto": "Hello! I am Luis Fantini, born in 2005 and a native of Belo Horizonte. I am currently a Software Engineering student at PUC Minas, where I have been dedicated to developing skills in programming and building technological solutions. I am seeking opportunities to apply and expand my knowledge in the field of software development.",

    // SKILLS
    "skills-p1": "Explore My",
    "skills-h1": "Skills",
    "frontend-h2": "Frontend Development",
    "backend-h2": "Backend Development",
    "outros-h2": "Others",
    "skills-avancado": "Advanced",
    "skills-intermediario": "Intermediate",

    // PROJETOS
    "projetos-p1": "Browse My",
    "projetos-h1": "Projects",
    "btn-github": "GitHub",
    "btn-detalhes": "View Details",
    "portfolio-h2": "Portfolio",
    "siteportfolio-h2": "Portfolio Website",
    "portfolio-texto": "The portfolio was developed using HTML5 for structuring the pages, CSS3 for styling and responsiveness, and JavaScript to add interactivity, such as the functioning of the mobile menu and project detail modals. Libraries like Bootstrap were also used to facilitate layout creation and responsiveness.",
    "worklink-h2": "WorkLink",
    "worklink-texto": "This project was developed for the Interdisciplinary Work 2 course in the Software Engineering program. It is a job posting system where companies can register and publish their job opportunities, while candidates can view and apply for available positions.<br> The system was implemented using the following technologies: <br> - MySQL for database management; <br> - HTML, CSS, and JavaScript for front-end development; <br> - Bootstrap for responsive styling; <br> - Java with Spring Boot for the back-end and integration of functionalities. <br></br>",
    "modal-texto-generico": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, quam? Quas accusantium id cupiditate iste veritatis repudiandae odio dolore voluptas. Eum, deserunt quod. Sit similique laudantium assumenda repellat vel necessitatibus.",

    // CONTATO
    "contato-p1": "Liked what you saw?",
    "contato-h1": "Get in Touch",

    // FOOTER
    "footer-copy": "Copyright &#169; 2025 Luis Fantini. All Rights Reserved."
  }
};

// Função para mudar o idioma
function changeLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    // Para elementos que podem conter HTML (como o texto de educação e o footer), use innerHTML
    if (key.includes("sobre-p-educacao") || key.includes("footer-copy")) {
      element.innerHTML = translations[lang][key];
    } else {
      element.textContent = translations[lang][key];
    }
  });
}

// Lógica para os modais (Corrigido para múltiplos modais)
const openModalButtons = document.querySelectorAll('[id^="open-modal"]');
const closeModalButtons = document.querySelectorAll('[id^="close-modal"]');
const modals = document.querySelectorAll('[id^="modal-"]');
const fades = document.querySelectorAll('[id^="fade-"]');

const toggleModal = (modalId) => {
  const fadeElement = document.getElementById(`fade-${modalId}`);
  const modalElement = document.getElementById(`modal-${modalId}`);

  fadeElement.classList.toggle("hide");
  modalElement.classList.toggle("hide");
};

openModalButtons.forEach(button => {
  button.addEventListener("click", () => {
    const modalId = button.id.split('-')[2];
    toggleModal(modalId);
  });
});

closeModalButtons.forEach(button => {
  button.addEventListener("click", () => {
    const modalId = button.id.split('-')[2];
    toggleModal(modalId);
  });
});

fades.forEach(fadeElement => {
  fadeElement.addEventListener("click", () => {
    const modalId = fadeElement.id.split('-')[1];
    toggleModal(modalId);
  });
});

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
    publicKey: "nxOrFzshhV92CmvXW"
  });
})();

document.getElementById("form-contato").addEventListener("submit", function (event) {
  event.preventDefault();

  emailjs.sendForm("service_uuqbsjv", "template_0evill6", this)
    .then(() => {
      alert("Mensagem enviada com sucesso!");
      this.reset();
    }, (error) => {
      alert("Erro ao enviar mensagem: " + JSON.stringify(error));
    });
});