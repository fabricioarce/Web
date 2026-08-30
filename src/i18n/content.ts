export type Locale = 'en' | 'es';

export const content = {
  es: {
    meta: { title: 'Fabricio Arce — Estudiante, competidor e investigador', description: 'Portfolio de Fabricio Arce: programación competitiva, investigación científica y física.' },
    nav: { about: 'Sobre mí', skills: 'Habilidades', projects: 'Proyectos', achievements: 'Logros', contact: 'Contacto' },
    hero: { eyebrow: 'Costa Rica · Estudiante de décimo año', role: 'Competidor. Investigador. Solucionador de problemas.', intro: 'Estudiante costarricense apasionado por la programación competitiva, la física y la investigación científica. Parte de la primera delegación de Costa Rica a la IOI.', cta: 'Explorar proyectos', status: 'Disponible para aprender y colaborar' },
    about: { label: 'Problema A', title: 'Sobre mí', statement: 'Descripción del problema', p1: 'Soy Fabricio Arce Rojas, estudiante de décimo año en Costa Rica. Lo que más me mueve es meterme de lleno en problemas difíciles que elijo yo mismo: ahí es donde pierdo la noción del tiempo, ya sea resolviendo física o peleando contra un caso límite en un contest.', p2: 'Empecé en programación competitiva a los 13 años. En 2025, mi primera participación en la Olimpiada Costarricense de Informática me llevó a la OII y a integrar la primera delegación costarricense a la IOI. Esa experiencia reforzó mi meta actual: convertir curiosidad y habilidad en práctica estructurada.', p3: 'También investigo una plataforma de bioestimulantes agrícolas y estudio física por la misma razón por la que compito: la posibilidad de sumergirme en problemas genuinos.', input: 'curiosidad + disciplina', output: 'soluciones con propósito', location: 'Ciudad Quesada, Costa Rica', education: 'High School · 10.º año' },
    skills: { label: 'Complejidad', title: 'Caja de herramientas', subtitle: 'Conocimiento en evolución, medido con honestidad.' },
    projects: { label: 'Submissions', title: 'Proyectos seleccionados', subtitle: 'Software, ciencia y problemas que vale la pena perseguir.', research: 'Investigación', ongoing: 'EN PROGRESO', details: 'Ver caso' },
    achievements: { label: 'Leaderboard', title: 'Logros', event: 'Evento', result: 'Resultado', scope: 'Alcance' },
    terminal: { label: 'Modo alternativo', title: 'Terminal interactiva', help: 'Escribe “help” para ver los comandos.', placeholder: 'Escribe un comando…' },
    contact: { label: 'Último caso', title: 'Hablemos', intro: '¿Tienes una oportunidad, una idea de investigación o un problema interesante? Envíame un mensaje.', name: 'Nombre', email: 'Correo', subject: 'Asunto', message: 'Mensaje', send: 'Enviar mensaje', unavailable: 'El envío estará disponible al conectar Appwrite. Mientras tanto, puedes contactarme por LinkedIn.' },
    footer: 'Diseñado y construido con Astro desde Costa Rica.',
  },
  en: {
    meta: { title: 'Fabricio Arce — Student, competitor & researcher', description: 'Fabricio Arce’s portfolio: competitive programming, scientific research and physics.' },
    nav: { about: 'About', skills: 'Skills', projects: 'Projects', achievements: 'Achievements', contact: 'Contact' },
    hero: { eyebrow: 'Costa Rica · Tenth-grade student', role: 'Competitor. Researcher. Problem solver.', intro: 'Costa Rican student passionate about competitive programming, physics and scientific research. Member of Costa Rica’s first delegation to the IOI.', cta: 'Explore projects', status: 'Open to learning and collaboration' },
    about: { label: 'Problem A', title: 'About me', statement: 'Problem statement', p1: 'I am Fabricio Arce Rojas, a tenth-grade student from Costa Rica. I am driven by difficult problems I choose to pursue—the kind that make me lose track of time, whether I am working through physics or fighting an edge case in a contest.', p2: 'I started competitive programming at thirteen. In 2025, my first Costa Rican Informatics Olympiad led me to the Ibero-American Olympiad and Costa Rica’s first IOI delegation. That experience sharpened my current goal: turning curiosity and ability into structured practice.', p3: 'I also research an agricultural biostimulant platform and study physics for the same reason I compete: the chance to immerse myself in genuine problems.', input: 'curiosity + discipline', output: 'purposeful solutions', location: 'Ciudad Quesada, Costa Rica', education: 'High School · Grade 10' },
    skills: { label: 'Complexity', title: 'Toolkit', subtitle: 'Knowledge in progress, measured honestly.' },
    projects: { label: 'Submissions', title: 'Selected projects', subtitle: 'Software, science and problems worth pursuing.', research: 'Research', ongoing: 'IN PROGRESS', details: 'View case' },
    achievements: { label: 'Leaderboard', title: 'Achievements', event: 'Event', result: 'Result', scope: 'Scope' },
    terminal: { label: 'Alternative mode', title: 'Interactive terminal', help: 'Type “help” to list commands.', placeholder: 'Type a command…' },
    contact: { label: 'Final case', title: 'Let’s talk', intro: 'Have an opportunity, a research idea or an interesting problem? Send me a message.', name: 'Name', email: 'Email', subject: 'Subject', message: 'Message', send: 'Send message', unavailable: 'Sending will be enabled when Appwrite is connected. In the meantime, reach me through LinkedIn.' },
    footer: 'Designed and built with Astro from Costa Rica.',
  },
} as const;

export const skills = [
  { name: 'C++', complexity: 'O(1)', level: 'primary' },
  { name: 'Linux', complexity: 'O(log n)', level: 'daily' },
  { name: 'Scientific research', complexity: 'O(n log n)', level: 'active' },
  { name: 'Logic & reasoning', complexity: 'O(n)', level: 'core' },
  { name: 'Wolfram Mathematica', complexity: 'O(?)', level: 'learning' },
];

export const achievements = [
  { event: 'International Olympiad in Informatics', result: 'National delegation', scope: 'International · 2026' },
  { event: 'Costa Rican Informatics Olympiad', result: 'Silver medal', scope: 'National · 2025' },
  { event: 'Ibero-American Olympiad in Informatics', result: 'Participant', scope: 'International' },
  { event: 'Mathematical Kangaroo', result: 'Silver medal', scope: 'National' },
  { event: 'Student Games · Table tennis', result: 'Team bronze medal', scope: 'Regional' },
];
