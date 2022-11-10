import { BrowserRouter, Routes, Route  } from "react-router-dom";
import ProductsList from '../src/pages/productsList/'
import ProductView from './pages/productView';
import NavBar from "./components/navbar";
import Footer from "./components/footer"

function App() {
  return (
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path="/" element={<ProductsList />} />
            <Route path="/productView" element={<ProductView />} />
          </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
