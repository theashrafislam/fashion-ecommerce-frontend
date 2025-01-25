import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <>
      <h1 className='font-primary text-2xl text-red-500'>Hello I am RUNNING SERVER.</h1>
      <h1 className='font-secondary text-2xl text-green-500'>Hello, I am Ashraful Islam.</h1>
    </>
  </StrictMode>,
)
