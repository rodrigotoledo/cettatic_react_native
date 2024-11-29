/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2',       // Cor primária 
        blueSecondary: '#90bff5', // Azul secundário
        secondary: '#81C784',     // Verde suave para botões ou destaques
        accent: '#B39DDB',        // Lavanda para realces sutis
        success: '#388E3C',       // Verde escuro para sucessos
        background: '#000000',    // Fundo preto conforme a preferência

        // Texto e detalhes
        textPrimary: '#F0F5F7',   // Texto principal claro para contraste com fundo preto
        textSecondary: '#757575', // Cinza escuro para textos secundários
        
        // Cores adicionais específicas da Cettatic Esportes
        highlight: '#DBD03B',     // Amarelo vibrante usado para forte destaque
        subtleBackground: '#2A2E3E', // Fundo escuro para caixas ou seções
        highlightAccent: '#D301C5'   // Magenta para destaques especiais ou detalhes
      }
    },
  },
  plugins: [],
}
