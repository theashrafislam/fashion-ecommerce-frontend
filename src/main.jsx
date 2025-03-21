import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router'
// import AuthProvider from './AuthProvider/AuthProvider'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import store from './App/store'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      {/* <AuthProvider> */}
        <RouterProvider router={router} />
        <Toaster />
      {/* </AuthProvider> */}
    </Provider>
  </StrictMode>,
)
