const {useState} = require('react')
import defaultTheme from 'styles/theme'

const useTheme = () => {
  const [theme, setTheme] = useState(defaultTheme)
}
