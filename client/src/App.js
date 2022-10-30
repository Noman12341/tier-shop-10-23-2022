import "./App.css";
import {Home, DetailPage} from './Pages'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer } from './Components';
function App() {
  return (
       <BrowserRouter>
       <>
       <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/details" element={<DetailPage />} />
      </Routes>
      <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
