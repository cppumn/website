import MainPage from "pages/MainPage"

import { HashRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path='/' element={ <MainPage /> } />
      </Routes>
    </Router>
  )
}

export default App;
