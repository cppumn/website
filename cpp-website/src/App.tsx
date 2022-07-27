import UofMHeader from "components/UofM/UofMHeader"
import UofMFooter from "components/UofM/UofMFooter"

import MainPage from "pages/MainPage"
import RoomPage from "pages/RoomPage"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <UofMHeader />
      <Router basename={process.env.PUBLIC_URL} >
        <Routes>
          <Route path='/' element={ <MainPage /> } />
          <Route path='/room' element={ <RoomPage /> } />
        </Routes>
      </Router>
      <UofMFooter />
    </div>
  )
}

export default App;
