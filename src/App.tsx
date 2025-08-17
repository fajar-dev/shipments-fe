import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme/theme'
import AppRouter from './routes/AppRouter'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  )
}

export default App
