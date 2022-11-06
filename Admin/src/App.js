import EditInfoProduct from 'components/Ql-san-pham/EditInfoProduct';
import ModalAddProductDetail from 'components/Ql-san-pham/ModalAddProductDetail';
import ModalThemSP from 'components/Ql-san-pham/ModalThemSP';
import HomeAdminPage from 'page/HomeAdmin.page';
import ProductDetailPage from 'page/ProductDetail.page';
import QlHoaDonPage from 'page/QlHoaDon.page';
import QlSanPhamPage from 'page/QlSanPham.page';
import QlThanhVienPage from 'page/QlThanhVien.page';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <div className='w-9/12 absolute right-0 p-5'>
        <Routes>
          <Route path='/' element={<HomeAdminPage />} />
          <Route path='/QlHoaDon' element={<QlHoaDonPage />} />
          <Route path='/QlSanPham' element={<QlSanPhamPage />} />
          <Route path='/QlThanhVien' element={<QlThanhVienPage />} />
          <Route path='/ThemSP' element={<ModalAddProductDetail />} />
          <Route path='/ProductDetail' element={<ProductDetailPage />} />
        </Routes>
      </div >
    </>
  );
}

export default App;
