import Loader from "./components/loader/loader";
import Main from "./components/main-page/main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Loader/>}/>
          <Route path="/main" element={<Main/>}/>
        </Routes>  
      </div>
    </BrowserRouter>
  );
}

export default App;
