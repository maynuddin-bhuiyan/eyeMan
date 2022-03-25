import './App.css';
import Authprovider from './Context/Authprovider/Authprovider';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import SinglePage from './Pages/SinglePage/SinglePage';
import TermsConditions from './Pages/TermsConditions/TermsConditions';
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy';
import SupportCenter from './Pages/SupportCenter/SupportCenter';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import SinglePageDetails from './Pages/SinglePageDetail/SinglePageDetails/SinglePageDetails';
import DetailsBuy from './Pages/DetailsBuy/DetailsBuy';
import Registration from './Pages/Login/Registration/Registration';
import Login from './Pages/Login/Login/Login';

function App() {
  return (
    <div className="App">
     <Authprovider>

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/registration" element={<Registration />} />
    <Route path="/login" element={<Login />} />
    <Route path="/singlePage" element={<SinglePage />} />
    <Route path="/termsConditions" element={<TermsConditions />} />
    <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
    <Route path="/supportCenter" element={<SupportCenter />} />


    <Route path="/detailsItam/:id" element={<PrivateRoute> <SinglePageDetails /> </PrivateRoute>} />
    <Route path="/detailsBuy/:id" element={<PrivateRoute> <DetailsBuy /> </PrivateRoute>} />
  


            
            

            
         

           

           





    









  </Routes>

</BrowserRouter>
</Authprovider>

    </div>
  );
}

export default App;
