import UofMHeader from "components/UofM/UofMHeader"
import UofMFooter from "components/UofM/UofMFooter"

import MainPage from "pages/MainPage"
import RoomPage from "pages/RoomPage"
import PageNotFound from "pages/PageNotFound"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL} >
      <UofMHeader />
        <Routes>
          <Route path='/' element={ <MainPage /> } />
          <Route path='/room' element={ <RoomPage /> } />
          <Route path='/*' element={ <PageNotFound /> } />
        </Routes>
      <UofMFooter />
    </Router>
  )
}

export default App;
