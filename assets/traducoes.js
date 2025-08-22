const translations = {
    'pt': {
        // NAV
        "nav-sobre": "Sobre",
        "nav-skills": "Skills",
        "nav-projetos": "Projetos",
        "nav-contato": "Contato",

        // PERFIL
        "perfil-p1": "Olá, eu sou",
        "perfil-h1": "Rafael Lopes",
        "perfil-p2": "Engenheiro de Software",
        "btn-curriculo": "Baixar Currículo",
        "btn-contato": "Contato Info",

        // SOBRE
        "sobre-p1": "Conheça mais",
        "sobre-h1": "Sobre mim",
        "sobre-h3": "Educação",
        "sobre-p-educacao": "Engenharia de Software – PUC Minas (Previsão de conclusão: 2027) <br>Ensino Médio Técnico - Cotemig (2020-2021)",
        "sobre-texto": "Olá! Sou o Rafael Lopes, nascido em 2004 e natural de Belo Horizonte. Atualmente, sou estudante de Engenharia de Software na PUC Minas, onde tenho me dedicado a desenvolver habilidades em programação e construção de soluções tecnológicas. Estou em busca de oportunidades para aplicar e expandir meu conhecimento na área de desenvolvimento de software.",

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
        "projeto1-h2": "Portfolio",
        "projeto1-texto": "O portfólio foi desenvolvido utilizando HTML5 para a estruturação das páginas, CSS3 para a estilização e responsividade, além de JavaScript para adicionar interatividade, como o funcionamento do menu mobile e dos modais de detalhes dos projetos. Também foram utilizadas bibliotecas como Bootstrap para facilitar a criação dos layouts e responsividade.",
        "projeto2-h2": "E-commerce",
        "projeto2-texto": "Este projeto é um sistema de e-commerce simples desenvolvido com foco educacional. No back-end, foi utilizado o .NET 8 com C#, estruturado com base na abordagem DDD (Domain-Driven Design). O front-end foi construído com Angular 17 e TypeScript. Os dados inicialmente foram armazenados localmente usando SQL Server e depois migrado para um banco de dados SQL hospedado no Azure, permitindo conexão real com a nuvem. O objetivo do projeto é integrar essas tecnologias em um fluxo completo de cadastro e listagem de produtos, servindo como base para aplicações maiores e mais robustas.",
        "projeto3-h2": "WorkLink",
        "projeto3-texto": "Este projeto foi desenvolvido para a disciplina Trabalho Interdisciplinar 2, no curso de Engenharia de Software. Trata-se de um sistema de divulgação de vagas de emprego, no qual empresas podem cadastrar e divulgar suas oportunidades, enquanto candidatos têm a possibilidade de visualizar e se candidatar às vagas disponíveis.<br> O sistema foi implementado utilizando as seguintes tecnologias:<br>- MySQL para gerenciamento do banco de dados;<br>- HTML, CSS e JavaScript para a construção do front-end;<br>- Bootstrap para estilização responsiva;<br>- Java com Spring Boot para o back-end e integração das funcionalidades.",

        // CONTATO
        "contato-p1": "Gostou do que viu?",
        "contato-h1": "Entre em contato",

        // FOOTER
        "footer-copy": "Copyright &#169; 2025 Rafael Lopes. Todos Direitos Reservados."
    },
    'en': {
        // NAV
        "nav-sobre": "About",
        "nav-skills": "Skills",
        "nav-projetos": "Projects",
        "nav-contato": "Contact",

        // PROFILE
        "perfil-p1": "Hi, I'm",
        "perfil-h1": "Rafael Lopes",
        "perfil-p2": "Software Engineer",
        "btn-curriculo": "Download CV",
        "btn-contato": "Contact Info",

        // ABOUT
        "sobre-p1": "Get to know me",
        "sobre-h1": "About Me",
        "sobre-h3": "Education",
        "sobre-p-educacao": "B.Sc. in Software Engineering – PUC Minas (Expected graduation: 2027) <br>Technical High School in IT – Cotemig (2020-2021)",
        "sobre-texto": "Hey there! My name is Rafael Lopes, born in 2004 and based in Belo Horizonte, Brazil. I'm currently pursuing a degree in Software Engineering at PUC Minas, where I’m focused on sharpening my programming skills and building innovative tech solutions. I’m always looking for opportunities to apply my knowledge, grow as a developer, and contribute to meaningful projects.",

        // SKILLS
        "skills-p1": "Explore my",
        "skills-h1": "Skills",
        "frontend-h2": "Frontend Development",
        "backend-h2": "Backend Development",
        "outros-h2": "Other Skills",
        "skills-avancado": "Advanced",
        "skills-intermediario": "Intermediate",

        // PROJECTS
        "projetos-p1": "Discover my",
        "projetos-h1": "Projects",
        "btn-github": "GitHub",
        "btn-detalhes": "View Details",
        "projeto1-h2": "Portfolio",
        "projeto1-texto": "This portfolio was built with HTML5 for page structure, CSS3 for styling and responsiveness, and JavaScript for interactivity—such as the mobile menu and project detail modals. I also used libraries like Bootstrap to speed up layout creation and ensure a responsive design.",
        "projeto2-h2": "E-commerce",
        "projeto2-texto": "This project is a simple e-commerce system created with an educational focus. The back end was developed with .NET 8 and C#, following the Domain-Driven Design (DDD) approach. The front end was built using Angular 17 and TypeScript. Data was first stored locally with SQL Server, and later migrated to an Azure-hosted SQL database to enable real cloud connectivity. The goal was to integrate these technologies into a complete workflow for product registration and listing, laying the foundation for larger and more robust applications.",
        "projeto3-h2": "WorkLink",
        "projeto3-texto": "WorkLink was developed for the Interdisciplinary Project 2 course in my Software Engineering degree. It’s a job posting platform where companies can publish opportunities and candidates can browse and apply. The system was built using: MySQL for database management; HTML, CSS, and JavaScript for the front end; Bootstrap for responsive design; Java with Spring Boot for the back end and feature integration.",

        // CONTACT
        "contato-p1": "Like what you see?",
        "contato-h1": "Get in Touch",

        // FOOTER
        "footer-copy": "Copyright &#169; 2025 Rafael Lopes. All rights reserved."
    }
};

// Função para mudar o idioma
function changeLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (key.includes("sobre-p-educacao") || key.includes("footer-copy")) {
            element.innerHTML = translations[lang][key];
        } else {
            element.textContent = translations[lang][key];
        }
    });
}