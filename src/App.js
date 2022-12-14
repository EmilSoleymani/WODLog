import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Log from "./Components/Log";
import Programs from "./Components/Programs";
import Welcome from "./Components/Welcome";

import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/log" element={<Log/>}/>
        <Route path="/programs" element={<Programs/>}/>
      </Routes>
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
