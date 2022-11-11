import Loader from "./components/loader/loader";
import FullPageScroll from "./components/fullpage/fullpage";
import Main from "./components/main/main";
import About from "./components/about/about";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    // <BrowserRouter>
    //   <div className="App">
    //     <Routes>
    //       <Route path="/" element={<Loader/>}/>
    //       <Route path="/main" element={<Main/>}/>
    //       <Route path="/about" element={<About/>}/>
    //     </Routes>  
    //   </div>
    // </BrowserRouter>
    <div className="App">
      {/* <FullPageScroll></FullPageScroll> */}
      <article className="pages texture">
        <Main/>
        <About/>
      </article>
   
    </div>
  );
}

export default App;
