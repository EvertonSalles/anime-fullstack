🎌 Animes React — Frontend
Aplicação web para descobrir, buscar e favoritar animes, construída com React e TypeScript.

🔗 Demo
https://anime-fullstack-sigma.vercel.app
✨ Funcionalidades

Listagem de animes por categorias: Novidades, Todos, Destaques
Filtragem por gênero
Busca de animes em tempo real com debounce
Página de detalhes do anime com sinopse, episódios, score e mais
Sistema de autenticação (login e registro)
Favoritar e desfavoritar animes
Página de favoritos por usuário
Layout responsivo para mobile e desktop

🛠️ Tecnologias

React
TypeScript
Vite
Tailwind CSS
React Router DOM
Axios
React Hook Form
Jikan API — API pública do MyAnimeList

🚀 Como rodar localmente
bash# Clone o repositório
git clone https://github.com/EvertonSalles/anime-fullstack.git
cd anime-fullstack

# Instale as dependências
npm install

# Crie o arquivo .env
echo "VITE_API_URL=http://localhost:3000" > .env

# Rode o projeto
npm run dev
🔑 Variáveis de Ambiente
VariávelDescriçãoVITE_API_URLURL da API backend
📁 Estrutura do Projeto
src/
├── components/     # Componentes reutilizáveis (CardAnime, Header, etc.)
├── context/        # Context API (FavoritesContext, FavoritesProvider)
├── hooks/          # Custom hooks (useAuth)
├── pages/          # Páginas (Home, Login, Register, Favorites, Details)
├── routes/         # Configuração de rotas
├── services/       # Instâncias do Axios
├── types/          # Tipos TypeScript
└── data/           # Dados estáticos (gêneros)
