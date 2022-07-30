import UofMHeader from "components/UofM/UofMHeader";
import UofMFooter from "components/UofM/UofMFooter";

import MainPage from "pages/MainPage";
import PageNotFound from "pages/PageNotFound";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { chakra } from "@chakra-ui/system";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <chakra.div minH={"100vh"}>
      <Router basename={process.env.PUBLIC_URL} >
        <UofMHeader />
        <Routes>
            <Route path='/' element={ <MainPage /> } />
            <Route path='/*' element={ <PageNotFound /> } />
        </Routes>
        <Box top="100vh" position="sticky">
          <UofMFooter />
        </Box>
      </Router>
    </chakra.div>
  );
}

export default App;
