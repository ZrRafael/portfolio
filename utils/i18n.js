import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Nav
      "home": "Home",
      "about": "Summary",
      "projects": "Projects",
      "code": "Code",
      "my_networks": "My Networks",
      "theme_toggle": "Change Theme",

      // Welcome
      "welcome_title": "Welcome",
      "welcome_message_1": "I'm a software developer passionate about programming and creating innovative solutions.",
      "welcome_message_2": "Feel free to explore my portfolio and get in touch!",

      // Home
      "job_title": "Software Developer",
      "download_cv": "Download CV",
      "technologies": "Technologies: Vue, Angular, React, Next, Nuxt, Node, Express!",
      "summary": "Summary",
      "bio_description": "Rafael is a Software Developer who enjoys developing various types of solutions and systems for companies or clients, aiming to solve real-life problems through code. He currently lives in Brazil and is open to job opportunities as a developer, both remote and on-site.",
      "my_projects": "My Projects",
      "bio": "Timeline",
      "timeline_2022": "💻 Started self-taught Programming studies",
      "timeline_2023": "🎓 Enrolled in Systems Analysis and Development at UNIFAN (ongoing)",
      "timeline_2024": "💼 Started as Frontend Developer at weMind",
      "timeline_2025": "🚀 End of cycle at weMind",
      "timeline_current": "🔍 Currently seeking new development opportunities, focusing on growth",
      "current": "Now",
      "job_current": "Mid-Level Frontend Developer at WeMind",
      "job_2025": "Freelance Front-End Developer at Rekomendo",
      "job_2024": "Mid-Level Frontend Developer at AgMind",
      "job_2023": "Full Stack Developer at Grupo São Roque",
      "education_university": "Started a degree in Systems Analysis and Development at UNIFAN",
      "education_senai": "Completed a technical Software Development course at SENAI",
      "education_technical": "Started a technical course in Software Development at SENAI",
      "hobbies": "Anime, Music, Games, Piano, Manga, Cats, Gym and Basketball",
      "my_networks": "My Networks",

      // 404
      "not_found_title": "404 - Not Found",
      "not_found_message": "The page you are looking for was not found.",
      "return_home": "Return to Home",

      // Projects
      "projects_title": "Projects",
      "projects_jobs": "Jobs",
      "projects_personal": "Personal Projects",
      "projects_collaborations": "Collaborations",
      "projects_rekomendo_desc": "App to help find service providers in your region.",
      "projects_tecer_desc": "Management system and app for Tecer Consulting company.",
      "projects_acougue_desc": "Price display system for butcher shops at São Roque branches.",
      "projects_doopets_desc": "A pet shop management system developed as a final project for the SENAI Software Development course.",
      "projects_prosel_desc": "A system to facilitate and optimize the work of stretcher bearers responsible for transporting patients in a hospital.",
      "projects_buzzu_desc": "Public Transport App.",
      "meme_generator_title": "Meme Generator",
      "meme_generator_desc": "An interactive and easy-to-use meme generator built with modern technologies.",
      "amor_title": "Amor",
      "amor_desc": "A love-themed application built with passion and modern technologies.",
      "amor_subtitle": "Amor - Connecting hearts through technology",
      "amor_platform": "Web",
      "amor_source": "https://github.com/ZrRafael/Amor",
      "esqueleto_title": "Skeleton vs Valkyries",
      "esqueleto_desc": "Skeleton vs Valkyries is a 2D platformer game. The player takes control of a skeleton seeking revenge",
      "esqueleto_subtitle": "Skeleton vs Valkyries - A platform game with a thirst for revenge",
      "esqueleto_platform": "Desktop (Python + Pygame)",
      "esqueleto_source": "https://github.com/ZrRafael/-Desenvolvimento-de-Jogos",
      "esqueleto_features_title": "🚀 Features",
      "esqueleto_gameplay_title": "🎮 Gameplay System",
      "esqueleto_movement": "➡️ Lateral movement",
      "esqueleto_jump": "⏫ Dynamic jump",
      "esqueleto_attack": "⚔️ Melee attacks",
      "esqueleto_health": "❤️ Health system (3 hearts)",
      "esqueleto_difficulty": "📈 Progressively more difficult phases",
      "esqueleto_progression_title": "🧩 Progression System",
      "esqueleto_phases": "🌍 Three unique phases",
      "esqueleto_enemies": "👹 Enemies with different difficulty levels",
      "esqueleto_boss": "👑 Challenging final boss",
      "esqueleto_healing": "💉 Health recovery when advancing to the next phase",
      "esqueleto_visual_title": "🎨 Visual Elements",
      "esqueleto_animations": "🧍‍♂️ Character animations",
      "esqueleto_particles": "✨ Particle system",
      "esqueleto_interface": "📊 Interface with health indicators",
      "esqueleto_cutscenes": "🎬 Introductory cutscenes",
      "esqueleto_audio_title": "🔊 Audio System",
      "esqueleto_sound_effects": "🔉 Sound effects for attacks and movements",
      "esqueleto_music": "🎵 Ambient music per phase",
      "esqueleto_tech_title": "🛠️ Technologies Used",
      "esqueleto_language": "Python as main language",
      "esqueleto_pygame": "Pygame for graphics and audio development",
      "esqueleto_opencv": "OpenCV for video cutscene display",
      "esqueleto_libraries": "Python Libraries",
      "esqueleto_lib_pygame": "pygame",
      "esqueleto_lib_opencv": "opencv-python",
      "esqueleto_lib_sys": "sys",
      "esqueleto_lib_os": "os",
      "esqueleto_assets": "Assets",
      "esqueleto_sprites": "Animated sprites of the skeleton and valkyries",
      "esqueleto_music_assets": "Custom music and sound effects",
      "esqueleto_backgrounds": "Thematic backgrounds per phase",
      "esqueleto_interface_assets": "Custom graphical interface",
      "esqueleto_menu_system": "Menu System",
      "esqueleto_main_menu": "Main menu",
      "esqueleto_pause_menu": "Pause menu",
      "esqueleto_game_over": "Game over screen",
      "esqueleto_victory": "Victory screen",
      "esqueleto_save_system": "Save System",
      "esqueleto_auto_save": "Automatic progress between phases",
      "esqueleto_phase_restart": "Phase restart maintaining progress",
      "esqueleto_how_to_use": "How to Use",
      "esqueleto_running": "Running the Game",
      "esqueleto_terminal": "Open the terminal in the game directory",
      "esqueleto_execute": "Execute: python plataforma_game.py",
      "esqueleto_controls": "Controls",
      "esqueleto_move": "← → : Move character",
      "esqueleto_jump_key": "Space bar: Jump",
      "esqueleto_attack_key": "A key: Attack",
      "esqueleto_pause_key": "ESC: Pause menu",
      "esqueleto_requirements": "Requirements",
      "esqueleto_python": "Python installed",
      "esqueleto_libraries_req": "pygame and opencv-python libraries",
      "esqueleto_assets_req": "Directory structure with necessary assets",

      // Work
      "projects": "Projects",

      // Footer
      "footer_rights": "All Rights Reserved.",

      // Açougue
      "work_acougue_title": "Açougue São Roque",
      "work_acougue_description": "During my short time at Grupo São Roque, I played a key role in developing the price display system for butcher shops at São Roque branches.",
      "platforms": "Platforms",
      "stacks": "Stacks",

      // Tecer
      "work_tecer_title": "Tecer Management and App",
      "work_tecer_description": "This project was my first freelance work developed for the company Tecer, where I built a management system for employees and customers, as well as a document consultation app for clients.",
      "work_tecer_web_code": "Web Code",
      "work_tecer_mobile_code": "Mobile Code",
      "platforms": "Platforms",
      "stacks": "Stacks",

      // Buzzu
      "work_buzzu_title": "Buzzu",
      "work_buzzu_description": "Buzzu is an idea that was created for the Smart Cities Hackathon in Feira de Santana, organized by SEBRAE. Buzzu is a Public Transport App designed to help city residents locate buses and bus stops, reach their destinations, and track their journeys.",
      "platforms": "Platforms",
      "stacks": "Stacks",
      "prototype": "Prototype",
      "code": "Code",

      // Doo Pets
      "work_doopets_title": "Doo Pets",
      "work_doopets_description": "Doo Pets is a complete and intuitive pet shop management system developed as a final project for the SENAI Software Development course. The system allows scheduling of baths, grooming, and other services for clients' pets, as well as a dynamic checkout that accepts multiple payment methods. Additionally, it includes full CRUD management for customers, employees, pets, inventory, suppliers, services, and products.",
      "website": "Website",
      "work_doopets_online_system": "Online System",
      "code": "Code",
      "video": "Video",
      "platforms": "Platforms",
      "stacks": "Stacks",

      // Prosel
      "work_prosel_title": "Prosel",
      "work_prosel_description": "The Clériston Andrade General Hospital recognizes the importance of improving patient transportation within the institution to provide a more efficient and safer service. To meet this need, a system is needed to facilitate and optimize the work of stretcher bearers responsible for patient transport.",
      "platforms": "Platforms",
      "stacks": "Stacks",
      "work_prosel_offline_system": "System (Offline)",
      "code": "Code",

      // Rekomendo
      "work_rekomendo_title": "Rekomendo",
      "work_rekomendo_description": "Rekomendo is an app designed to facilitate the connection between clients and service providers in their area. Users can easily find qualified professionals for a variety of services, such as maintenance, personal care, renovations, and more. The app allows users to filter providers by location, view ratings, and request services directly through the platform, offering a practical and quick solution for everyday needs.",
      "platforms": "Platforms",
      "stacks": "Stacks",
      "work_rekomendo_online_system": "Online System",

      // Work Experience
      "work_experience": "Work Experience",
      "job_wemind_title": "Front-End Developer",
      "job_wemind_company": "WeMind",
      "job_wemind_period": "Aug 2024 - Feb 2025",
      "job_wemind_location": "São Paulo, Brazil · Remote",
      "job_wemind_description": "Played a role in creating and maintaining components for Meta Human projects, being responsible for keeping the Front-End version updated and dynamic.",
      "job_wemind_skills": "Symfony, Twing, Php, JavaScript",

      "job_rekomendo_title": "Front-End Developer",
      "job_rekomendo_company": "Rekomendo",
      "job_rekomendo_period": "Jul 2024 - Mar 2025 · 9 months",
      "job_rekomendo_location": "Feira de Santana, Bahia, Brazil · Remote",
      "job_rekomendo_description":
        "At Rekomendo, I led front-end updates, ensuring an intuitive user experience. I worked on coding, prototyping, and documentation while implementing continuous UI improvements.\n\n" +
        "The app connects clients with service providers, enabling professional searches and quick service requests. I used Ionic, Angular, and Firebase to build a modern, optimized interface.\n\n" +
        "I collaborated with the back-end team, ensuring seamless integration with Node.js, Express, and Firebase. This experience strengthened my skills in UX/UI and scalable application development.",
      "job_rekomendo_skills": "Ionic, Angular, Firebase, TypeScript, Node.js, Express",

      "job_sao_roque_title": "Full Stack Developer",
      "job_sao_roque_company": "Grupo São Roque",
      "job_sao_roque_period": "Sep 2023 - Nov 2023 · 3 months",
      "job_sao_roque_location": "Feira de Santana, Bahia, Brazil · On-site",
      "job_sao_roque_description": "I played a key role in developing solutions for the company, including creating a price display screen for butcher shops in São Roque branches. Additionally, I led the development of a meal management system for São Roque agencies, which involved generating QR Code cards and developing QR Code readers for transaction validation. These solutions allowed the HR department to have better control over meal-related operations, ensuring efficient and transparent management.",
      "job_sao_roque_skills": "Problem Solving, Solution Implementation, Figma (Software), Vue.js, GitHub, Coding Standards, MySQL, TypeScript, Node.js, Oracle SQL Developer",

      // Education
      "education": "Education",
      "education_unifan_title": "Bachelor's in Systems Analysis and Development",
      "education_unifan_institution": "UNIFAN - Centro Universitário Nobre",
      "education_unifan_period": "Jul 2023 - Dec 2025",
      "education_unifan_location": "Feira de Santana, Bahia, Brazil · On-site",
      "education_unifan_description": "The course trains professionals to develop and update information systems, covering various programming languages.",
      "education_unifan_skills": "Software Engineering, DevOps, Database, Algorithms, Cloud Computing",
      "education_senai_title": "Technical Software Development Course",
      "education_technical_title": "Technical Course in Software Development",
      "education_university_title": "Systems Analysis and Development Degree",
      "education_senai_description": "Completed a technical Software Development course at SENAI",
      "education_technical_description": "Started a technical course in Software Development at SENAI",
      "education_university_description": "Started a degree in Systems Analysis and Development at UNIFAN",

      // Project Details
      "project_website": "Website",
      "project_platform": "Platform",
      "project_stack": "Stack",
      "project_source": "Source",

      // Meme Generator Details
      "meme_desc": "An interactive and easy-to-use meme generator built with modern technologies. The project allows you to create, save and manage custom memes with multiple editable texts, support for different languages (Portuguese and English) and themes (light and dark). Initially developed as an academic project.",
      "features_title": "🚀 Features",
      "feature_add_text": "📝 Add multiple texts to your image",
      "feature_customize": "🎨 Customize color and size of each text",
      "feature_drag": "🖱️ Drag and drop texts to position them",
      "feature_theme": "🌓 Switch between light and dark theme",
      "feature_language": "🌎 Support for Portuguese and English",
      "feature_download": "💾 Download your creation as image",
      "feature_save": "💫 Save your memes in the cloud",
      "feature_manage": "📂 Manage your saved memes",
      "feature_search": "🔍 Search saved memes",
      "feature_interface": "🎯 Intuitive and responsive interface",
      "feature_help": "❓ Contextual help system",
      "feature_styles": "🎭 Mass style application",
      "tech_title": "🛠️ Technologies Used",
      "tech_frontend": "Frontend",
      "tech_html": "HTML5",
      "tech_css": "CSS3 with theme variables",
      "tech_js": "JavaScript (ES6+)",
      "tech_interact": "Interact.js for drag and drop",
      "tech_modules": "ES6 module system",
      "tech_state": "Local state management",
      "tech_backend": "Backend",
      "tech_firebase": "Firebase (Real-time database)",
      "tech_firestore": "Firestore for data storage",
      "tech_express": "Express.js for local server",
      "tech_node": "Node.js",
      "tech_additional": "Additional Features",
      "tech_themes": "Dynamic theme system",
      "tech_i18n": "Internationalization (i18n)",
      "tech_modals": "Custom modals",
      "tech_tooltips": "Tooltips and contextual help",
      "tech_responsive": "Responsive design",
      "tech_animations": "Smooth animations"
    }
  },
  pt: {
    translation: {
      // Nav
      "home": "Início",
      "about": "Resumo",
      "projects": "Projetos",
      "code": "Código",
      "my_networks": "Minhas Redes",
      "theme_toggle": "Alternar Tema",

      // Welcome
      "welcome_title": "Bem-vindo",
      "welcome_message_1": "Sou um desenvolvedor de software apaixonado por programação e criar soluções inovadoras.",
      "welcome_message_2": "Fique à vontade para explorar meu portfólio e entrar em contato!",

      // Home
      "job_title": "Desenvolvedor de Software",
      "download_cv": "Baixar Currículo",
      "technologies": "Tecnologias: Vue, Angular, React, Next, Nuxt, Node, Express!",
      "summary": "Resumo",
      "bio_description": "Rafael é um Desenvolvedor de Software que gosta de desenvolver diversos tipos de soluções e sistemas para empresas ou clientes, com o objetivo de resolver problemas da vida real por meio do código. Atualmente vive no Brasil e está aberto a oportunidades de trabalho como desenvolvedor, tanto remoto quanto presencial.",
      "my_projects": "Meus Projetos",
      "bio": "Linha do Tempo",
      "timeline_2022": "💻 Início dos estudos autônomos em Programação",
      "timeline_2023": "🎓 Ingresso no curso de Análise e Desenvolvimento de Sistemas na UNIFAN (em andamento)",
      "timeline_2024": "💼 Início como Desenvolvedor Frontend na weMind",
      "timeline_2025": "🚀 Encerramento do ciclo na weMind",
      "timeline_current": "🔍 Atualmente em busca de novas oportunidades na área de desenvolvimento, com foco em crescimento",
      "current": "Atual",
      "job_current": "Desenvolvedor Frontend de Nível Médio na WeMind",
      "job_2025": "Desenvolvedor Front-End Freelance na Rekomendo",
      "job_2024": "Desenvolvedor Frontend de Nível Médio na AgMind",
      "job_2023": "Desenvolvedor Full Stack no Grupo São Roque",
      "education_university": "Começou um curso de Análise e Desenvolvimento de Sistemas na UNIFAN",
      "education_senai": "Completou um curso técnico de Desenvolvimento de Software na SENAI",
      "education_technical": "Começou um curso técnico em Desenvolvimento de Software na SENAI",
      "hobbies": "Anime, Música, Jogos, Piano, Mangá, Gatos, Academia e Basquete",
      "my_networks": "Minhas Redes",

      // 404
      "not_found_title": "404 - Não Encontrado",
      "not_found_message": "A página que você está procurando não foi encontrada.",
      "return_home": "Voltar para Home",

      // Projects
      "projects_title": "Projetos",
      "projects_jobs": "Trabalhos",
      "projects_personal": "Projetos Pessoais",
      "projects_collaborations": "Colaborações",
      "projects_rekomendo_desc": "App para ajudar a encontrar fornecedores de serviços na sua região.",
      "projects_tecer_desc": "Sistema de gerenciamento e aplicativo para a empresa de consultoria Tecer.",
      "projects_acougue_desc": "Sistema de exibição de preços para lojas de carne no ramo de São Roque.",
      "projects_doopets_desc": "Um sistema de gerenciamento de loja de animais de estimação desenvolvido como um projeto final para o curso de Desenvolvimento de Software da SENAI.",
      "projects_prosel_desc": "Um sistema para facilitar e otimizar o trabalho dos transportadores de maca na instituição para fornecer um serviço mais eficiente e seguro.",
      "projects_buzzu_desc": "Aplicativo de Transporte Público.",
      "meme_generator_title": "Gerador de Memes",
      "meme_generator_desc": "Um gerador de memes interativo e fácil de usar, construído com tecnologias modernas.",
      "amor_title": "Amor",
      "amor_desc": "Uma aplicação com tema de amor construída com paixão e tecnologias modernas.",
      "amor_subtitle": "Amor - Conectando corações através da tecnologia",
      "amor_platform": "Web",
      "amor_source": "https://github.com/ZrRafael/Amor",
      "esqueleto_title": "Esqueleto vs Valquírias",
      "esqueleto_desc": "Esqueleto vs Valquírias é um jogo de plataforma 2D desenvolvido. O jogador assume o controle de um esqueleto em busca de vingança",
      "esqueleto_subtitle": "Esqueleto vs Valquírias - Um jogo de plataforma com sede de vingança",
      "esqueleto_platform": "Desktop (Python + Pygame)",
      "esqueleto_source": "https://github.com/ZrRafael/-Desenvolvimento-de-Jogos",
      "esqueleto_features_title": "🚀 Funcionalidades",
      "esqueleto_gameplay_title": "🎮 Sistema de Jogabilidade",
      "esqueleto_movement": "➡️ Movimentação lateral",
      "esqueleto_jump": "⏫ Pulo dinâmico",
      "esqueleto_attack": "⚔️ Ataques corpo a corpo",
      "esqueleto_health": "❤️ Sistema de vidas (3 corações)",
      "esqueleto_difficulty": "📈 Fases progressivamente mais difíceis",
      "esqueleto_progression_title": "🧩 Sistema de Progressão",
      "esqueleto_phases": "🌍 Três fases únicas",
      "esqueleto_enemies": "👹 Inimigos com diferentes níveis de dificuldade",
      "esqueleto_boss": "👑 Boss final desafiador",
      "esqueleto_healing": "💉 Recuperação de vida ao avançar de fase",
      "esqueleto_visual_title": "🎨 Elementos Visuais",
      "esqueleto_animations": "🧍‍♂️ Animações de personagens",
      "esqueleto_particles": "✨ Sistema de partículas",
      "esqueleto_interface": "📊 Interface com indicadores de vida",
      "esqueleto_cutscenes": "🎬 Cutscenes introdutórias",
      "esqueleto_audio_title": "🔊 Sistema de Áudio",
      "esqueleto_sound_effects": "🔉 Efeitos sonoros para ataques e movimentos",
      "esqueleto_music": "🎵 Música ambiente por fase",
      "esqueleto_tech_title": "🛠️ Tecnologias Utilizadas",
      "esqueleto_language": "Python como linguagem principal",
      "esqueleto_pygame": "Pygame para desenvolvimento de gráficos e áudio",
      "esqueleto_opencv": "OpenCV para exibição de cutscenes em vídeo",
      "esqueleto_libraries": "Bibliotecas Python",
      "esqueleto_lib_pygame": "pygame",
      "esqueleto_lib_opencv": "opencv-python",
      "esqueleto_lib_sys": "sys",
      "esqueleto_lib_os": "os",
      "esqueleto_assets": "Assets",
      "esqueleto_sprites": "Sprites animados do esqueleto e das valquírias",
      "esqueleto_music_assets": "Músicas e efeitos sonoros personalizados",
      "esqueleto_backgrounds": "Backgrounds temáticos por fase",
      "esqueleto_interface_assets": "Interface gráfica personalizada",
      "esqueleto_menu_system": "Sistema de Menus",
      "esqueleto_main_menu": "Menu principal",
      "esqueleto_pause_menu": "Menu de pausa",
      "esqueleto_game_over": "Tela de game over",
      "esqueleto_victory": "Tela de vitória",
      "esqueleto_save_system": "Sistema de Salvamento",
      "esqueleto_auto_save": "Progresso automático entre fases",
      "esqueleto_phase_restart": "Reinício de fase mantendo progresso",
      "esqueleto_how_to_use": "Como Usar",
      "esqueleto_running": "Executando o Jogo",
      "esqueleto_terminal": "Abra o terminal no diretório do jogo",
      "esqueleto_execute": "Execute: python plataforma_game.py",
      "esqueleto_controls": "Controles",
      "esqueleto_move": "← → : Mover personagem",
      "esqueleto_jump_key": "Barra de espaço: Pular",
      "esqueleto_attack_key": "Tecla A: Atacar",
      "esqueleto_pause_key": "ESC: Menu de pausa",
      "esqueleto_requirements": "Requisitos",
      "esqueleto_python": "Python instalado",
      "esqueleto_libraries_req": "Bibliotecas pygame e opencv-python",
      "esqueleto_assets_req": "Estrutura de diretórios com os assets necessários",

      // Work
      "projects": "Projetos",

      // Footer
      "footer_rights": "Todos os Direitos Reservados.",

      // Açougue
      "work_acougue_title": "Açougue São Roque",
      "work_acougue_description": "Durante meu curto período no Grupo São Roque, participei de forma crucial no desenvolvimento do sistema de exibição de preços para lojas de carne no ramo de São Roque.",
      "platforms": "Plataformas",
      "stacks": "Pilhas",

      // Tecer
      "work_tecer_title": "Tecer Management and App",
      "work_tecer_description": "Este projeto foi meu primeiro trabalho freelancer desenvolvido para a empresa Tecer, onde construí um sistema de gerenciamento para funcionários e clientes, bem como um aplicativo de consulta de documentos para clientes.",
      "work_tecer_web_code": "Código Web",
      "work_tecer_mobile_code": "Código Mobile",
      "platforms": "Plataformas",
      "stacks": "Pilhas",

      // Buzzu
      "work_buzzu_title": "Buzzu",
      "work_buzzu_description": "Buzzu é uma ideia que foi criada para o Hackathon de Cidades Inteligentes em Feira de Santana, organizado pela SEBRAE. Buzzu é um aplicativo de transporte público projetado para ajudar os residentes da cidade a localizar ônibus e paradas de ônibus, alcançar seus destinos e rastrear suas viagens.",
      "platforms": "Plataformas",
      "stacks": "Pilhas",
      "prototype": "Protótipo",
      "code": "Código",

      // Doo Pets
      "work_doopets_title": "Doo Pets",
      "work_doopets_description": "Doo Pets é um sistema de gerenciamento de loja de animais de estimação completo e intuitivo desenvolvido como um projeto final para o curso de Desenvolvimento de Software da SENAI. O sistema permite agendar banhos, pentear e outros serviços para os pets dos clientes, bem como um checkout dinâmico que aceita vários métodos de pagamento. Além disso, inclui gerenciamento completo CRUD para clientes, funcionários, pets, estoque, fornecedores, serviços e produtos.",
      "website": "Website",
      "work_doopets_online_system": "Sistema Online",
      "code": "Código",
      "video": "Vídeo",
      "platforms": "Plataformas",
      "stacks": "Pilhas",

      // Prosel
      "work_prosel_title": "Prosel",
      "work_prosel_description": "O Hospital Geral Clériston Andrade reconhece a importância de melhorar o transporte de pacientes dentro da instituição para fornecer um serviço mais eficiente e seguro.",
      "platforms": "Plataformas",
      "stacks": "Pilhas",
      "work_prosel_offline_system": "Sistema (Offline)",
      "code": "Código",

      // Rekomendo
      "work_rekomendo_title": "Rekomendo",
      "work_rekomendo_description": "Rekomendo é um aplicativo projetado para facilitar a conexão entre clientes e fornecedores de serviços na sua área. Os usuários podem facilmente encontrar profissionais qualificados para uma variedade de serviços, como manutenção, cuidados pessoais, reformas e mais. O aplicativo permite que os usuários filtrem fornecedores por localização, vejam avaliações e solicitem serviços diretamente pela plataforma, oferecendo uma solução prática e rápida para necessidades diárias.",
      "platforms": "Plataformas",
      "stacks": "Pilhas",
      "work_rekomendo_online_system": "Sistema Online",

      // Work Experience
      "work_experience": "Experiência de Trabalho",
      "job_wemind_title": "Desenvolvedor Front-End",
      "job_wemind_company": "WeMind",
      "job_wemind_period": "Ago de 2024 - Fev de 2025",
      "job_wemind_location": "São Paulo, Brasil · Remoto",
      "job_wemind_description": "Desempenhanava papel na criação e manutenção de componentes dos projetos Meta Human, era responsável por manter a versão Front-End atulizada e dinâmica.",
      "job_wemind_skills": "Symfony, Twing, Php, JavaScript",

      "job_rekomendo_title": "Desenvolvedor Front-End",
      "job_rekomendo_company": "Rekomendo",
      "job_rekomendo_period": "Jul 2024 - Mar 2025 · 9 meses",
      "job_rekomendo_location": "Feira de Santana, Bahia, Brasil · Remoto",
      "job_rekomendo_description":
        "No Rekomendo, eu lidero atualizações Frontend, garantindo uma experiência de usuário intuitiva. Eu trabalhei na codificação, prototipagem e documentação enquanto implementava melhorias contínuas na interface de usuário.\n\n" +
        "O aplicativo conecta clientes com fornecedores de serviços, permitindo buscas profissionais e solicitações de serviços rápidas. Eu usei Ionic, Angular e Firebase para construir uma interface moderna, otimizada.\n\n" +
        "Eu colaborei com o time back-end, garantindo uma integração contínua com Node.js, Express e Firebase. Esta experiência fortaleceu minhas habilidades em UX/UI e desenvolvimento de aplicativos escaláveis.",
      "job_rekomendo_skills": "Ionic, Angular, Firebase, TypeScript, Node.js, Express",

      "job_sao_roque_title": "Desenvolvedor Full Stack",
      "job_sao_roque_company": "Grupo São Roque",
      "job_sao_roque_period": "Set 2023 - Nov 2023 · 3 meses",
      "job_sao_roque_location": "Feira de Santana, Bahia, Brasil · Presencial",
      "job_sao_roque_description": "Eu joguei um papel crucial na criação de soluções para a empresa, incluindo a criação de uma tela de exibição de preços para lojas de carne no ramo de São Roque. Além disso, lideramos o desenvolvimento de um sistema de gerenciamento de refeições para agências de São Roque, que envolveu a criação de cartões de código QR e o desenvolvimento de leitores de código QR para validação de transações. Essas soluções permitiram que o departamento de RH tivesse melhor controle sobre operações relacionadas a refeições, garantindo uma gestão eficiente e transparente.",
      "job_sao_roque_skills": "Problem Solving, Solution Implementation, Figma (Software), Vue.js, GitHub, Coding Standards, MySQL, TypeScript, Node.js, Oracle SQL Developer",

      // Education
      "education": "Educação",
      "education_unifan_title": "Graduação em Análise e Desenvolvimento de Sistemas",
      "education_unifan_institution": "UNIFAN - Centro Universitário Nobre",
      "education_unifan_period": "Jul de 2023 - Dez de 2025",
      "education_unifan_location": "Feira de Santana, Bahia, Brasil · Presencial",
      "education_unifan_description": "O curso forma profissionais para desenvolver e atualizar sistemas de informação, abrangendo diversas linguagens de programação.",
      "education_unifan_skills": "Engenharia de Software, DevOps, Banco de Dados, Algoritmos, Computação em Nuvem",
      "education_senai_title": "Curso Técnico de Desenvolvimento de Software",
      "education_technical_title": "Curso Técnico em Desenvolvimento de Software",
      "education_university_title": "Bacharelado em Análise e Desenvolvimento de Sistemas",
      "education_senai_description": "Completou um curso técnico de Desenvolvimento de Software na SENAI",
      "education_technical_description": "Começou um curso técnico em Desenvolvimento de Software na SENAI",
      "education_university_description": "Começou um curso de Análise e Desenvolvimento de Sistemas na UNIFAN",

      // Project Details
      "project_website": "Website",
      "project_platform": "Plataforma",
      "project_stack": "Tecnologias",
      "project_source": "Código Fonte",

      // Meme Generator Details
      "meme_desc": "Um gerador de memes interativo e fácil de usar, construído com tecnologias modernas. O projeto permite criar, salvar e gerenciar memes personalizados com múltiplos textos editáveis, suporte a diferentes idiomas (Português e Inglês) e temas (claro e escuro). Desenvolvido inicialmente como um projeto acadêmico.",
      "features_title": "🚀 Funcionalidades",
      "feature_add_text": "📝 Adicione múltiplos textos à sua imagem",
      "feature_customize": "🎨 Personalize cor e tamanho de cada texto",
      "feature_drag": "🖱️ Arraste e solte os textos para posicioná-los",
      "feature_theme": "🌓 Alterne entre tema claro e escuro",
      "feature_language": "🌎 Suporte para Português e Inglês",
      "feature_download": "💾 Baixe sua criação como imagem",
      "feature_save": "💫 Salve seus memes na nuvem",
      "feature_manage": "📂 Gerencie seus memes salvos",
      "feature_search": "🔍 Pesquise memes salvos",
      "feature_interface": "🎯 Interface intuitiva e responsiva",
      "feature_help": "❓ Sistema de ajuda contextual",
      "feature_styles": "🎭 Aplicação de estilos em massa",
      "tech_title": "🛠️ Tecnologias Utilizadas",
      "tech_frontend": "Frontend",
      "tech_html": "HTML5",
      "tech_css": "CSS3 com variáveis para temas",
      "tech_js": "JavaScript (ES6+)",
      "tech_interact": "Interact.js para drag and drop",
      "tech_modules": "Sistema de módulos ES6",
      "tech_state": "Gerenciamento de estado local",
      "tech_backend": "Backend",
      "tech_firebase": "Firebase (Banco de dados em tempo real)",
      "tech_firestore": "Firestore para armazenamento de dados",
      "tech_express": "Express.js para servidor local",
      "tech_node": "Node.js",
      "tech_additional": "Recursos Adicionais",
      "tech_themes": "Sistema de temas dinâmicos",
      "tech_i18n": "Internacionalização (i18n)",
      "tech_modals": "Modais personalizados",
      "tech_tooltips": "Tooltips e ajuda contextual",
      "tech_responsive": "Design responsivo",
      "tech_animations": "Animações suaves"
    }
  }
};

// Função para obter o idioma salvo no localStorage ou usar o padrão (pt)
const getSavedLanguage = () => {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem('i18nextLng') || 'pt';
  }
  return 'pt';
};

if (i18n.isInitialized) {
  // Se já estiver inicializado, apenas atualize o idioma
  const savedLanguage = getSavedLanguage();
  if (i18n.language !== savedLanguage) {
    i18n.changeLanguage(savedLanguage);
  }
} else {
  // Inicialize o i18n apenas se ainda não estiver inicializado
  i18n.use(initReactI18next).init({
    resources,
    lng: 'pt', // Idioma inicial padrão
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    }
  });

  // Após a inicialização, verifique e atualize o idioma se necessário
  if (typeof window !== 'undefined') {
    const savedLanguage = getSavedLanguage();
    if (i18n.language !== savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }
}

// Salvar o idioma no localStorage quando for alterado
i18n.on('languageChanged', (lng) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('i18nextLng', lng);
  }
});

export default i18n;