import UofMHeader from "components/UofM/UofMHeader"
import UofMFooter from "components/UofM/UofMFooter"

import MainPage from "pages/MainPage"

import { HashRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <UofMHeader />
      <Router basename="/">
        <Routes>
          <Route path='/' element={ <MainPage /> } />
        </Routes>
      </Router>
      <UofMFooter />
    </div>
  )
}

export default App;
