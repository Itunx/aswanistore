

import {Routes, Switch ,Route, Link} from "react-router-dom";
import Home from "./Pages/Home";
function App() {

  return (
    <div className="App">
       <Routes>
       <Route path="/" exact element={<Home />} />
       </Routes>
     
    </div>
  );
}

export default App;
