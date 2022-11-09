import { BrowserRouter, Routes, Route  } from "react-router-dom";
import ProductsList from '../src/pages/productsList/'
import ProductView from './pages/productView';
import NavBar from "./components/navbar";

function App() {
  return (
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path="/" element={<ProductsList />} />
            <Route path="/productView" element={<ProductView />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
