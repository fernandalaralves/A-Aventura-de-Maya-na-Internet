# 🛡️ Maya Cyber Quest

Jogo educativo de cibersegurança para crianças de 8 a 14 anos.

## Objetivo

Ensinar conceitos de segurança digital através de uma narrativa interativa,
onde a personagem Maya precisa restaurar a internet completando missões.

## Stack

- Vite 5 + Vanilla JS (ES2022+)
- Web Components (Custom Elements + Shadow DOM)
- Tailwind CSS 3
- LocalStorage para persistência

##  Como Rodar

\`\`\`bash
npm install
npm run dev      # desenvolvimento
npm run build    # produção
npm run preview  # preview do build
\`\`\`

##  Arquitetura

\`\`\`
src/
├── core/       # Infraestrutura (EventBus, Store, Router)
├── domain/     # Regras de negócio (missões, XP, badges)
├── components/ # Web Components reutilizáveis
├── screens/    # Telas compostas
└── data/       # Conteúdo (JSON, i18n)
\`\`\`
