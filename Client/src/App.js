import DetailProductPage from 'page/DetailProduct.page';
import SignInPage from 'page/SignIn.page';
import SignUpPage from 'page/SignUp.page';
import OrderLookupPage from 'page/OrderLookup.page';
import HomePage from 'page/Home.page';
import ListSmartphonePage from 'page/ListSmartphone.page';
import ListTabletPage from 'page/ListTablet.page';
import CartPage from 'page/Cart.page';
import OrderDetailPage from 'page/OrderDetail.page';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <div className=''>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/SignIn' element={<SignInPage />} />
          <Route path='/SignUp' element={<SignUpPage />} />
          <Route path='/ListSmartphone' element={<ListSmartphonePage />} />
          <Route path='/ListTablet' element={<ListTabletPage />} />
          <Route path='/DetailProduct' element={<DetailProductPage />} />
          <Route path='/OderLookup' element={<OrderLookupPage />} />
          <Route path='/Cart' element={<CartPage />} />
          <Route path='/OrderDetail' element={<OrderDetailPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
