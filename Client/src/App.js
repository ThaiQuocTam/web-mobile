import DetailProductPage from 'page/DetailProduct.page';
import SignInPage from 'page/SignIn.page';
import SignUpPage from 'page/SignUp.page';
import OrderLookupPage from 'page/OrderLookup.page';
import HomePage from 'page/Home.page';
import ListSmartphonePage from 'page/ListSmartphone.page';
import ListTabletPage from 'page/ListTablet.page';
import CartPage from 'page/Cart.page';
import OrderDetailPage from 'page/OrderDetail.page';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeAdminPage from 'page/HomeAdmin.page';
import QlSanPhamPage from 'page/QlSanPham.page';
import QlThanhVienPage from 'page/QlThanhVien.page';
import QlGioHangPage from 'page/QlGioHang.page';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/Client/Home' element={<HomePage />} />
          <Route path='/Client/SignIn' element={<SignInPage />} />
          <Route path='/Client/SignUp' element={<SignUpPage />} />
          <Route path='/Client/ListSmartphone' element={<ListSmartphonePage />} />
          <Route path='/Client/ListTablet' element={<ListTabletPage />} />
          <Route path='/Client/DetailProduct' element={<DetailProductPage />} />
          <Route path='/Client/OderLookup' element={<OrderLookupPage />} />
          <Route path='/Client/Cart' element={<CartPage />} />
          <Route path='/Client/OrderDetail' element={<OrderDetailPage />} />

          <Route path='/Admin/HomeAdmin' element={<HomeAdminPage />} />
          <Route path='/Admin/QlSanPham' element={<QlSanPhamPage />} />
          <Route path='/Admin/QlThanhVien' element={<QlThanhVienPage />} />
          <Route path='/Admin/QlGioHang' element={<QlGioHangPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
