 // importo react dal pacchetto installato 
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// importo App.jsx
import App from './App.jsx'
// importo index.css
import './index.css'

// prendi l'elemento root in index.html "document.getElementById('root')" e dentro ci crei la base per poterci lavorare. 
// con ".render" Mandi a schermo App importato sopra. 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
