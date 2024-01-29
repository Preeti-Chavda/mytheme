import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import Home from './Home';
import About from './About';
import Service from './Service';
import Design from './Design';
import Contact from './Contact';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/design" element={<Design/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
    </>
  );
}
export default App;

