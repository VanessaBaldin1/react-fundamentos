# Fundamentos de React

## 14_lidando-com-efeitos-colaterais

## Sobre o useEffect

O useEffect é um hook do React usado para executar ou lidar com efeitos colaterais em componentes funcionais.

Ele serve para lidar com ações que ocorram fora do fluxo normal de renderização, como:

- Buscar dados de uma API
- Atualizar o título da página
- Adicionar/remover manipuladores de eventos
- Iniciar/controlar temporizadores
- Sincronizar com mudanças externas

O useEffect é executado após a renderização, e pode ser configurado para rodar apenas uma vez, sempre que uma variável mudar, ou em toda renderização, dependendo das dependências fornecidas.

## 13_navegando-com-rotas

Entendendo os conceitos principais do React Router:

- Instalação: npm install react-router- dom (em casa faça o pull no github e execute no terminal npm install)

- BrowserRouter: componente que envolve toda a sua aplicação no main.tsx
- Routes e Route: definem as rotas e os caminhos associados aos componentes/páginas.
- Link: componente especial para navegação entre as páginas através das rotas.
  Deve ser usado no lugar da tag <a> (somente para links relativos/internos).

## 11_gerenciamento-de-states e 12_filtrando-dados

State (ou Estado) é uma funcionalidade especial de um componente que representa informações que podem mudar ao longo do tempo e que, normalmente, afetam o que é exibido na interface.

Exemplo:

- Contador de likes
- Carrinho de compras
- Captura de dados de formulário
- Filtros
- Timers
- Alternância de temas/cores
- Seleção de itens

O uso de states permite ao React atualizar a interface automaticamente sempre que os dados mudarem, sem a necessidade de manipular o DOM manualmente.

## 10_manipulando-eventos

No React, nós declaramos explicitamente o que queremos que o componente faça através de props de eventos.

Estas props aceitam um callback na sintaxe de arrow function, ou então uma chamada (apenas o nome, sem parênteses) de uma função externa.

## 09_props-com-dados-dinamicos

- Utilização de props para enviar dados dinâmicos para um componente
- Configuração de array de dados com definição de tipo
- Refatoração de componentes criando o ListaCursos com o map de Artigo dentro

## 08_props

Props (abreviação de properties/propriedades) são parâmetros que um componente pode receber.

Elas funcionam como argumentos de uma função, que podem receber dados de um componente pai para um componente filho.

Props basicamente são uma forma de comunicação entre componentes.

- Criação de props e definição de tipos para as props
- Desestruturação de props
- Manipulação de props opcionais
- Renderização condicional

## 07_tailwindcss

Tailwind CSS é um framework de CSS utilitário que permite criar interfaces rapidamente usando classes pré-definidas diretamente no HTML. Em vez de escrever CSS personalizado, você aplica classes como p-4, text-center ou bg-blue-500 para estilizar seus elementos.

Isso facilita a criação de layouts responsivos, consistentes e com produtividade, já que evita sair do HTML para escrever estilos separados. É muito usado em projetos modernos por ser flexível, rápido e fácil de manter.

### Sites importantes

- Site oficial: https://tailwindcss.com/
- Documentação para uso com Vite: https://tailwindcss.com/docs/installation/using-vite

## 06_styled-components

Styled Components é uma biblioteca (lib) muito usada com projetos React que permite escrever estilos CSS dentro do JavaScript usando a própria sintaxe do CSS. Os estilos ficam acoplados ao componente em que foram declarados.

### Instalação

- npm install styled-components
- npm install --save-dev @types/styled-components
- Extensão vscode-styled-components

Ao trabalhar Styled Components você pode criar regras com qualquer seletor e usar lógica JavaScript dentro de template string.

## 05_modulos-css

Módulos CSS (CSS Modules) são uma maneira de escrever CSS em arquivos separados de extensão `.module.css` em que cada classe e estilo fica isolado para um único componente. Há um **acoplamento** entre o módulo e seu componente, permitindo um escopo bem definido sobre os estilos.

- Criação de módulos para cada componente (exceto Rodape)
- Importação do módulo (chamado de styles ou estilos)
- Aplicação das classes usando className={}
- Reorganização de componentes e seus módulos em pastas
- Instalação da extensão CSS Modules

## 04_estilos

- CSS global usando seletores tradicionais
- CSS inline aplicado via style e escrevendo CSS IN JS (objeto com propriedades CSS)
- CSS inline criando um objeto do tipo CSSProperties e passando-o para o style do componente

## 03_componentes-filhos-ou-internos

- Criação de um componente filho(Menu) e importação /uso no pai (Cabeçalho)
- Criação de um componente filho (Artigo) e importação/uso no pai (Conteudo)
- Instalação da extensão ES7+ React

## 02_criando-e-organizando-componentes

- Separação de trechos do App em novos componentes
- Exportação e importação dos componentes
- Uso de assets e importação de imagem
- Organização dos componentes em uma pasta dedicada

## 01_usando-a-sintaxe-JSX-no-App

- Construção de um componente único (App.tsx) usando elementos HTML e Fragmento REACT
- Referência sobre Componentes e JSX: https://react.dev/reference/react-dom/components
- Instalação da extensão React Developer Tools

## 00_projeto-zerado

- Remoção do CSS
- Remoção da pasta assets
- Simplificação do componente App.tsx e do main.tsx
