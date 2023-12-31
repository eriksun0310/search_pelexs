import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from "./Layout";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Page404 from "./pages/Page404";
import Footer from "./components/Footer";
import "./styles/style.css"
import "bootstrap-icons/font/bootstrap-icons.css";


function App() {
  return (
    <div>
        <nav>
            <ul>
                <li>
                  <a href="/">
                    <i class="bi bi-house-door" 
                    style={{fontSize:'29px'}}
                    />
                  </a>
                </li>
            </ul>
        </nav>
        <Homepage/>
        <Footer/>
    </div>

  
    // 不知道為什麼上傳到gitHub 畫面出不來
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout/>}>
    //       <Route index element={<Homepage/>} />
    //       <Route path="about" element={<About/>}/>
    //     </Route>
    //   </Routes>   
    // </BrowserRouter>
  );
}

export default App;
