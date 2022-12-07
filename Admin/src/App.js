import HomeAdminPage from 'page/HomeAdminPage';
import OrderDetailPage from 'page/OrderDetailPage';
import ProductDetailPage from 'page/ProductDetailPage';
import ProductGroupPage from 'page/ProductGroupPage';
import ProductTypePage from 'page/ProductTypePage';
import QlHoaDonPage from 'page/QlHoaDonPage';
import QlSanPhamPage from 'page/QlSanPhamPage';
import QlThanhVienPage from 'page/QlThanhVienPage';
import VersionProductPage from 'page/VersionProductPage';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <div className='w-80pc absolute right-0 pl-8 mr-2 py-10'>
        <Routes>
          <Route path='/' element={<HomeAdminPage />} />
          <Route path='/OrderDetail' element={<OrderDetailPage />} />
          <Route path='/QlNhomSP' element={<ProductGroupPage />} />
          <Route path='/QlLoaiSanPham' element={<ProductTypePage />} />
          <Route path='/Home' element={<HomeAdminPage />} />
          <Route path='/QlHoaDon' element={<QlHoaDonPage />} />
          <Route path='/QlSanPham' element={<QlSanPhamPage />} />
          <Route path='/QlThanhVien' element={<QlThanhVienPage />} />
          <Route path='/ProductDetail' element={<ProductDetailPage />} />
          <Route path='/VersionProduct' element={<VersionProductPage />} />
        </Routes>
      </div >
    </>
  );
}

export default App;
