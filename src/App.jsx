

import Card from './Components/Card'
import { QrProvider } from './Context/QrContext'

function App() {

  return (
   <QrProvider>
   <Card/>
   </QrProvider>
  )
}

export default App
