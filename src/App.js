import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import HomePage from './pages/HomePage';
import Shopdetails from './pages/Shopdetails/Shop';
import AddcartPage from './pages/Cart/Cart';
import PricingPage from './pages/PricingPage/Pricing';
import ServicesPage from './pages/ServicesPage/Services'
import Home from './pages/HomePage/Home'
import BlogDetails from './pages/BlogDetails/Blog'
import About from './pages/About/About'
import OurTeam from './pages/OurTeam/Team'
import ServiceDetailsmain from './pages/ServiceDetails/ServiceDetailsmain';



// import Navlinks from './pages/home-page/nav-links/Navlinks';
// import  Nav  from './pages/home-page/nav/Nav';
// import Hero from './pages/home-page/hero/Hero';
// import Services from './pages/home-page/servic/Services';
// import Shop from './pages/home-page/shop/Shop';
// import Stores from './pages/home-page/stores/Stores';
// import Custom from './pages/home-page/custom/Custom';
// import Features from './pages/home-page/features/Features';
// import Clients from './pages/home-page/clientt/Clients';
// import Pricing from './pages/home-page/pricing/Pricing';
// import Subscribes from './pages/home-page/subscribe/Subscribes';
// import Footer from './pages/home-page/footer/Footer';




function App() {
  return (
    <>
    <BrowserRouter>
        
        <Routes>
          <Route index element={<Home/>} />
          <Route path='shop-details' element={<Shopdetails/>}/>
          <Route path='pricing-page' element={<PricingPage/>}/>
          <Route path='services-page' element={<ServicesPage/>}/>
          <Route path='cart' element={<AddcartPage/>}/>
          <Route path='blog-details' element={<BlogDetails/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='our-team' element={<OurTeam/>}/>
          <Route path='service-detailsmain' element={<ServiceDetailsmain/>}/>

          {/* <Route path='*' element={NotFound} /> */}
        </Routes>
   
    </BrowserRouter>


    {/* <Nav/>
    <Navlinks/>
    <Hero/>
    <Services/>
    <Shop/>
    <Stores/>
    <Custom/>
    <Features/>
    <Clients/>
    <Pricing/>
    <Subscribes/>
    <Footer/> */}
    </>
    
  );
}

export default App;
