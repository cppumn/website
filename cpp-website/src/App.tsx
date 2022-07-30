import UofMHeader from "components/UofM/UofMHeader";
import UofMFooter from "components/UofM/UofMFooter";

import Nav from "components/Header/Nav";
import Footer from "components/Footer/Footer";

import MainPage from "pages/MainPage";
import SchedulePage from "pages/SchedulePage";
import GettingStartedPage from "pages/GettingStartedPage";
import ContactPage from "pages/ContactPage";
import PageNotFound from "pages/PageNotFound";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { chakra } from "@chakra-ui/system";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <chakra.div minH={"100vh"}>
      <Router basename={process.env.PUBLIC_URL} >
        <Nav />
        <Routes>
            <Route path='/' element={ <MainPage/> }/>
            <Route path='/schedule' element={ <SchedulePage/> }/>
            <Route path='/gettingstarted' element={ <GettingStartedPage/> }/>
            <Route path='/contact' element={ <ContactPage/> }/>
            <Route path='/*' element={ <PageNotFound/> }/>
        </Routes>
        <Box top="100vh" position="sticky">
          <Footer />
        </Box>
      </Router>
    </chakra.div>
  );
}

export default App;
