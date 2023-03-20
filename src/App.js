

import {Routes, Switch ,Route, Link} from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
function App() {

  return (
    <div className="App">
       <Routes>
       <Route path="/" exact element={<Home  />} />
       <Route path="/" exact element={<Product  />} />
       </Routes>
     
    </div>
  );
}

export default App;
