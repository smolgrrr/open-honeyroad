import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './style.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Layout from './components/Layout'
import {ThemeProvider} from 'react-jss'
import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
