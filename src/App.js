// import Resume from './Resume';
import './App.css';
import { useEffect ,useState} from 'react';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import { BrowserRouter } from 'react-router-dom';
import {   Routes, Route, Switch } from 'react-router-dom';
import Featured from './Component/Featuredservice/Featured';
import Footer from './Component/Footer/Footer';
import Business from './Component/business/Business';
import Contactus from './Component/contactus/Contactus';
import Industry from './Component/industries/Industry';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loader from './Loader';
import Hrpay from './Component/Featuredservice/Hrpay';
import ManuEpr from './Component/Featuredservice/ManuEpr';
import Projectm from './Component/Featuredservice/Projectm';
import Textile from './Component/Featuredservice/Textile';
import Pointsale from './Component/Featuredservice/Pointsale';
import Textilepage from './Component/industries/Textilepage';
import Trading from './Component/industries/Trading';
import Cashmanagement from './Component/business/Cashmanagement';
import Inventry from './Component/business/Inventry';
import Purchase   from './Component/business/Purchase';
import Account from './Component/business/Account';
import Payableaccount from './Component/business/Payableaccount';
import Labtory from './Component/Healthcare/Labtory';
import Whatsappchat from './Component/Header/Whatsappchat';
import Sitemap from './Component/sitemap/Sitemap';

AOS.init();


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data from an API)
    const fetchData = async () => {
      try {
        // Set loading to true before starting the operation
        setLoading(true);

        // Simulate a delay (replace this with your actual async operation)
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Set loading to false once the operation is complete
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Ensure loading is set to false in case of an error
      }
    };

    fetchData();
  }, []);


  useEffect (()=>{

    AOS.init=({duration:'1000' })
    AOS.refresh();
  
  
  },[])
  

  return (
    <div className="App">
     
     {loading ? (
        <Loader />
      ) : (
     <BrowserRouter> 
     <Header/>
     <Whatsappchat/> 
           
          <Routes>
                
                
     <Route path="/" element={<Home />} /> 
     <Route path="/home" element={<Home />} /> 
     <Route path="/featured" element={<Featured />} /> 
     <Route path="/sitemap" element={<Sitemap />} />
     <Route path="/hrpay" element={<Hrpay />} /> 
     <Route path="/manufacturing" element={<ManuEpr />} /> 
     <Route path="/project" element={<Projectm/>} /> 
     <Route path="/texttile" element={<Textile/>} /> 
     <Route path="/pointofsale" element={<Pointsale/>} /> 

     <Route path="/industries" element={<Industry />} /> 
     <Route path="/textilepage" element={<Textilepage />} /> 
     <Route path="/trading" element={<Trading />} /> 

     <Route path="/business" element={<Business />} /> 
     <Route path="/cashms" element={<Cashmanagement />} /> 
     <Route path="/inventry" element={<Inventry />} /> 
     <Route path="/purchase" element={<Purchase />} /> 
     <Route path="/account" element={<Account />} /> 
     <Route path="/payableaccount" element={<Payableaccount />} /> 
     <Route path="/contactus" element={<Contactus />} /> 
     
       {/* Healthcare */}
       <Route path="/labtory" element={<Labtory />} /> 





      </Routes>


          <Footer/>

  </BrowserRouter>

)}

    </div>
  );
}

export default App;
