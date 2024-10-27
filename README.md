# Mario Bros
Este documento HTML cria uma página dedicada ao filme "Super Mario Bros", apresentando um vídeo de fundo, informações sobre o filme e a funcionalidade de exibir um trailer em um modal.

## Estrutura da Página

- **DOCTYPE e Elemento `<html>`**: Define o tipo de documento como HTML5 e a linguagem como português do Brasil (pt-BR).

- **Cabeçalho (`<head>`)**:
  - Define a codificação de caracteres como UTF-8 e a compatibilidade com o Internet Explorer.
  - Inclui meta tags para responsividade.
  - Referencia um favicon para a página.
  - Preconecta-se a fontes do Google e inclui a fonte "Poppins".
  - Importa arquivos de estilo CSS para reset, estilos gerais e responsividade (`reset.css`, `estilos.css`, `responsivel.css`).
  - Define o título da página como "Super Mario Bros - O Filme".

- **Corpo (`<body>`)**:
  - **Vídeo de Fundo**: Um vídeo que é reproduzido automaticamente, em loop e sem som, usando o arquivo `video-mario.mp4`.
  
  - **Cabeçalho (`<header>`)**:
    - Contém o logotipo do filme (`logo-chapeu-mario.png`) e uma navegação com links para "Home" e "Detalhes".

  - **Main (`<main>`)**:
    - Contém informações sobre o filme, incluindo uma imagem do título (`titulo.png`), uma descrição do enredo e um botão para ver o trailer.
    - Exibe uma imagem do Mario (`super-mario-chars.png`).
    - **Modal**: Estrutura para o modal que contém um iframe para o vídeo do trailer, permitindo a reprodução do trailer oficial do filme.

- **Script (`<script>`)**:
  - Contém a lógica JavaScript para abrir e fechar o modal:
    - **Objetivo 1**: Ao clicar no botão "Veja o trailer", a modal é aberta, e o vídeo do trailer é carregado.
    - **Objetivo 2**: Ao clicar no botão de fechar (`X`), a modal é fechada e o vídeo é interrompido.
    - O script utiliza seletores para capturar elementos do DOM e adicionar ouvintes de eventos que alternam a visibilidade do modal.

## Considerações
- O código utiliza uma abordagem clara e modular, separando a estrutura HTML, estilos CSS e lógica JavaScript.
- O uso de um vídeo de fundo cria uma atmosfera envolvente para os visitantes, enquanto a funcionalidade de modal para o trailer permite uma experiência de usuário interativa.
- A implementação da responsividade garante que a página se adapte a diferentes tamanhos de tela, proporcionando acessibilidade em dispositivos móveis e desktop.

Este código fornece uma base sólida para um site relacionado ao filme "Super Mario Bros", combinando elementos visuais dinâmicos com interatividade.
