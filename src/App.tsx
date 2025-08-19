import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme/theme'
import AppRouter from './routes/AppRouter'
import { SnackbarProvider } from './context/SnackbarProvider'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider>    
        <AppRouter />
      </SnackbarProvider>
    </ThemeProvider>
  )
}

export default App
