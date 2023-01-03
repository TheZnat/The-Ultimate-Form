import React from 'react';
import {Route, Routes} from "react-router-dom";

import Layout from './Component/Layout'
import Step1 from './Pages/Step1'
import Step2 from './Pages/Step2'
import Step3 from './Pages/Step3'
import Result from "./Pages/Result";
import DataContext from "./hoc/DataContext";
import './App.css';

function App() {
  return (
   <>
       <DataContext>
           <Routes>
               <Route path="/" element={<Layout />}>
                   <Route index element={<Step1 />}/>
                   <Route path="/step2" element={<Step2 />}/>
                   <Route path="/step3" element={<Step3 />}/>
                   <Route path="/result" element={<Result />}/>
               </Route>
           </Routes>
       </DataContext>
   </>
  );
}

export default App;
