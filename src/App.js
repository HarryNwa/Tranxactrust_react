import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import NavigationBar from './Homepage/NavigationBar';
import Home from './Homepage/Home';
import BankPlus from './Menu/BankPlus';
import Businesses from './Menu/Businesses';
import Pricing from './Menu/Pricing';
import Support from './Menu/Support';
import Resources from './Menu/Resources';
import About from './Menu/About';
import Blockchain from './Menu/Blockchain';
import Signup from './Menu/Signup';
import Login from './Menu/Login';
import Shop from './Products/Shop';
import Trustmonie from './Products/Trustmonie';
import Investrust from './Products/Investrust';
import Trxtpay from './Products/Trxtpay';
import Logistics from './Products/Logistics';
import WaitListForm from './Api/WaitListForm';



function App() {
  const modalRef = useRef();

  const [isLogin, setLogin] = useState(false);

  const getLogin = () => {
      setLogin(!isLogin);
  };

  const toggleModal = (show) => show? modalRef.current.showModal() : modalRef.current.close();

  return (
    
      <div>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/bankPlus' element={<BankPlus />} />
          <Route path='/blockchain' element={<Blockchain />} />
          <Route path='/businesses' element={<Businesses />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/support' element={<Support />} />
          <Route path='/resources' element={<Resources />} />
          <Route path='/about' element={<About />} /> 
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} /> 
          <Route path='/shop' element={<Shop />} /> 
          <Route path='/trustmonie' element={<Trustmonie />} /> 
          <Route path='/investrust' element={<Investrust />} />
          <Route path='/trxtpay' element={<Trxtpay />} />
          <Route path='/logistics' element={<Logistics />} />
          {/* <Route path='/waitlist' element={<WaitListForm />} /> */}

        </Routes>
        {/* <Footer /> */}
      </div>
   
  );
}

export default App;
