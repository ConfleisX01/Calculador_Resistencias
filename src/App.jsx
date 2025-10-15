import './App.css'
import Header from './components/Header'
import Result from './components/Result'
import Table from './components/Table'
import Selection from './components/Selection'
import { useState } from 'react'

function App() {
  const [brand1, setBrand1] = useState(0)
  const [brand2, setBrand2] = useState(0)
  const [multiplier, setMultiplier] = useState(0)

  const resistencia = (parseInt(brand1) + parseInt(brand2)) * parseInt(multiplier);

  return (
    <>
    <div className='w-screen flex flex-col items-center justify-center'>
      <Header title={"Calculadora de resistencias"}  />
      <Table
        setBrand1={ setBrand1 }
        setBrand2={ setBrand2 }
        setBrand3={ setMultiplier }
      />
      <Selection
        value1={ brand1 }
        value2={ brand2 }
        value3={ multiplier }
      />
      <Result resistorValue={ resistencia } />
    </div>
    </>
  )
}

export default App
