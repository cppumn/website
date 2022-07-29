import UofMHeader from "components/UofM/UofMHeader";
import UofMFooter from "components/UofM/UofMFooter";

import MainPage from "pages/MainPage";
import RoomPage from "pages/RoomPage";
import PageNotFound from "pages/PageNotFound";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { chakra } from "@chakra-ui/system";

function App() {
  return (
    <chakra.div minH={"100vh"}>
      <Router basename={process.env.PUBLIC_URL} >
        <UofMHeader />
          <Routes>
            <Route path='/' element={ <MainPage /> } />
            <Route path='/room' element={ <RoomPage /> } />
            <Route path='/*' element={ <PageNotFound /> } />
          </Routes>
        <UofMFooter />
      </Router>
    </chakra.div>
  );
}

export default App;
