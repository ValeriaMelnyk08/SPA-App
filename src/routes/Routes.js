import React from "react";
import { Route, Routes as ReactRouterRoutes } from "react-router-dom";
import Nav from "../components/Nav";
import MainPage from "../pages/main";
import PhotoPage from "../pages/photo";
import ContactsPage from "../pages/contantInfo";
import PublicationsPage from "../pages/poster";



const Routes = () => {
    return (
      <div>
        <Nav />
  
        <ReactRouterRoutes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/publications" element={<PublicationsPage/>}/>
          <Route path="/photo" element={<PhotoPage/>}/>
          <Route path="/contacts" element={<ContactsPage/>}/>
        </ReactRouterRoutes>
      </div>
    );
  };
  
  export default Routes;