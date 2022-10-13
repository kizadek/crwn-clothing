import {Routes,Route} from 'react-router-dom'

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.componet';
import SHOP from './routes/shop/shop.component';
import Authentication from './routes/authentication/authentication.component';
import Checkout from './routes/checkout/checkout.component';


const App = () => { 
  return ( 
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} / >
        <Route path='shop' element={< SHOP />} />
        <Route path='auth' element={<Authentication/>}/>
        <Route path='checkout' element={<Checkout />} />
      </Route>
    
    </Routes>
  );
};



export default App;