import MainPage from "pages/MainPage"
import UofMHeader from "components/UofM/UofMHeader"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <MainPage /> } />
        <Route path='/header' element={ <UofMHeader /> } />
      </Routes>
    </Router>
  )
}

export default App;
