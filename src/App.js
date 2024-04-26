import Navlinks from './components/Navlinks';
import  Nav  from './components/Nav';
import Hero from './components/Hero';
import Services from './components/Services';
import Shop from './components/Shop';
import Stores from './components/Stores';
import Custom from './components/Custom';
import Features from './components/Features';
import Clients from './components/Clients'
// import Navlink from './components/Navlink';

function App() {
  return (
    <>
    <Nav/>
    <Navlinks/>
    <Hero/>
    <Services/>
    <Shop/>
    <Stores/>
    <Custom/>
    <Features/>
    <Clients/>
    {/* <Navlink/> */}
    </>
    
  );
}

export default App;
