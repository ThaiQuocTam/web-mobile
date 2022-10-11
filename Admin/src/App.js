import HomeAdminPage from 'page/HomeAdmin.page';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <div className=''>
        <Routes>
          <Route path='/' element={<HomeAdminPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
