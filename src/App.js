import React from 'react'
import { RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import router from './utils/routes'

function App() {
  
  return (
    <div className='flex min-h-screen justify-center items-center'>
      <RouterProvider router={ router } />
    </div>
  )
}

export default App
