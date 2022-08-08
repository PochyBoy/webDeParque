import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import App from './App'
import Collserola from './Collserola';
import DeltaDelLlobregat from './DeltaDelLlobregat';
import ElDeltaDelLlobregatParte2 from './ElDeltaDelLlobregatParte2';
import ElPadraforca from './ElPadraforca';
import Home from './Home';
import LaMontanaDeMoncerrat from './LaMontanaDeMoncerrat';
import PantanoDeVilladera from './PantanoDeVilladera';
import ParcNaturalDelGarraf from './ParcNaturalDelGarraf';
import ParqueDeSantLloren from './ParqueDeSantLloren';
import ParqueNaturalDelMontseny from './ParqueNaturalDelMontseny';


import NotFound from "./P404";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/Collserola" element={<Collserola />} />
          <Route path="/PantanoDeVilladera" element={<PantanoDeVilladera />} />
          <Route path="/ParqueNaturalDelMontseny" element={<ParqueNaturalDelMontseny />} />
          <Route path="/DeltaDelLlobregat" element={<DeltaDelLlobregat />} />
          <Route path="/LaMontanaDeMoncerrat" element={<LaMontanaDeMoncerrat />} />
          <Route path="/ElPadraforca" element={<ElPadraforca />} />
          <Route path="/ElDeltaDelLlobregatParte2" element={<ElDeltaDelLlobregatParte2 />} />
          <Route path="/ParcNaturalDelGarraf" element={<ParcNaturalDelGarraf />} />
          <Route path="/ParqueDeSantLloren" element={<ParqueDeSantLloren />} />
           

          <Route element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)