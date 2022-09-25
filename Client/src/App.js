import DetailProduct from 'components/Chi-tiet-san-pham/DetailProduct';
import SignIn from 'components/Sign-in/SignIn';
import SignUp from 'components/Sign-up/SignUp';
import HomePage from 'page/Home.page';
import ListSmartphonePage from 'page/ListSmartphone.page';
import ListTabletPage from 'page/ListTablet.page';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <div className=''>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/SignIn' element={<SignIn />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/ListSmartphone' element={<ListSmartphonePage />} />
          <Route path='/ListTablet' element={<ListTabletPage />} />
          <Route path='/DetailProduct' element={<DetailProduct />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
