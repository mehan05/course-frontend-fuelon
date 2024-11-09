import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ContextProvider from './context/ContextProvider.jsx'
<<<<<<< HEAD
import { RecoilRoot } from 'recoil'
=======
>>>>>>> 7e6c25ea1be3c0d54cd83b83ced373dee37e1ebd

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
      <RecoilRoot>
      <ContextProvider>
        <App />
      </ContextProvider>
      </RecoilRoot>
=======
      <ContextProvider>
        <App />
      </ContextProvider>
>>>>>>> 7e6c25ea1be3c0d54cd83b83ced373dee37e1ebd
    </BrowserRouter>
  </StrictMode>,
)
