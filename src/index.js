import React from 'react';

import './index.css';
import App from './App';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'animate.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import ServicePage from './Service/ServicePage';
import PrivacyTermsPage from './Privacy Terms/PrivacyTermsPage';
import ContactUsPage from './Contact Us/ContactUsPage';
import CostCalculatorPage from './Cost Calculator/CostCalculatorPage';

const router = createBrowserRouter([
  
  
    {
      path: "/",
      element: <App/>
    },
  
  
    {
      path: "Service",
      element: <ServicePage/>
    },
    {
      path: "PrivacyTerms",
      element: <PrivacyTermsPage/>
    },
    {
      path: "ContactUS",
      element: <ContactUsPage/>
    },
    {
      path: "CostCalculator",
      element: <CostCalculatorPage/>
    },
  
   
  
    {
      path: "*",
      element: <div>
        <h1>Not Found</h1>
      </div>,
    },
  
    
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);


