import React from 'react'
import './App.css'
import Test from './components/Test'

const App: React.FC = () => {
  const btn = 's'

  return (
    <>
      <div>
        <div>
          Hello
          <Test/>
        </div>
      </div>
    </>
  )
}

export default App
