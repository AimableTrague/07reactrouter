import React from 'react'
import Test from './components/Test'
// Remove './index.css' import since it's already in main.jsx
// import './index.css'

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold text-blue-600">React Router Dom</h1>
      <Test />
    </>
  )
}

export default App
