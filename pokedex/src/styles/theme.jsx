const theme = {
  colors: {
    primary: 'azul',
    secondary: 'amarelo',
    text: { primary: 'cinza', secondary: 'preto' },
    background: {
      primary: 'branco',
      secondary: 'cinza',
    },
  },
  typography: {
    h1: '5rem',
    h2: '4rem',
    h3: '3rem',
    body1: '2rem',
    body2: '1.5rem',
    button1: '2rem',
    button2: '1.5rem',
  },
  space: number => number * 8 + 'px',
}

export default theme