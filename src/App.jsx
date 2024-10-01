import { useState } from 'react'
// importo il css relativo as App
import './App.css'
import Navbar from './components/navbar'


//COMPONENTE APP è una funzione che ritorna dell'html
function App() {
  const [count, setCount] = useState(0)

  return (
    //<> sono i frammenti di di react vengono letti ma non reinderizzati
    <> 
      <Navbar></Navbar>
    </>
  )
}

export default App


