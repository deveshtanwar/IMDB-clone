import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ListDetail from "./pages/ListDetails/ListDetails";
import Navbar from "./components/Navbar/Navbar";

function App() {

  return(
    <div className={`${window.screen.width > 1000 ? 'container':''}`}>
      <BrowserRouter basename="/IMDB-clone">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/popular" exact element={<ListDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;